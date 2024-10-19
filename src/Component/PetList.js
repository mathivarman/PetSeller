import React, { useEffect, useState } from 'react';

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); 
const [slice,setSlice]=useState(8);
  // Fetch backend API
  const fetchPets = async () => {
    try {
      const response = await fetch(`https://monitor-backend-rust.vercel.app/api/pets?page=${page}&limit=8`);
      if (!response.ok) {
        throw new Error('Failed to fetch pets');
      }
      const data = await response.json();

      if (data.length === 0) {
        setHasMore(false); // No more pets to load
      } else {
        setPets(prevPets => [...prevPets, ...data]); // Append new pets to the existing list
      }

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, [page]); 

  const handleViewMore = () => {
    setPage(prevPage => prevPage + 1); 
    setSlice(pets.length)
  };

  if (loading && page === 1) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <section className="bg-yellow-20 py-16">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
         
          <div>
            <p className="text-xl  font-semibold text-blue-900">What's new?</p>
            <h2 className="text-3xl font-bold text-blue-800">TAKE A LOOK AT SOME OF OUR PETS</h2>
          </div>

          {/* View More Button */}
          {hasMore && (
            <button
              className="border border-black text-black py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white md:rounded-full transition duration-300"
              onClick={handleViewMore}
              disabled={loading} 
            >
              {loading ? 'Loading...' : 'View More >'}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pets.slice(0,slice).map(pet => (
            <div key={pet.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={pet.image} alt={pet.name} className="w-full rounded-lg" />

              <div className="flex justify-between items-center mt-2">
                <h3 className="font-semibold">{pet.id}-{pet.breed}</h3>
              </div>

              <div className="flex justify-between items-center mt-2">
                <p>Gene:{pet.gender}</p>
                <p>Age:{pet.age}</p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <h5 className="text-lg font-semibold">{pet.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetList;
