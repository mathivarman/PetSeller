import React, { useEffect, useState } from 'react';

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Tracks current page for fetching more
  const [hasMore, setHasMore] = useState(true); // To check if there are more pets to load

  // Fetch pets from the backend API
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

  // Fetch pets initially and whenever the page number changes
  useEffect(() => {
    fetchPets();
  }, [page]); // Re-run when `page` changes

  const handleViewMore = () => {
    setPage(prevPage => prevPage + 1); // Increment page number to load more pets
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
        {/* Flex container to align the label and button */}
        <div className="flex justify-between items-center mb-8">
          {/* Left Label */}
          <div>
            <p className="text-xl font-semibold">What's new?</p>
            <h2 className="text-3xl font-bold">TAKE A LOOK AT SOME OF OUR PETS</h2>
          </div>

          {/* View More Button */}
          {hasMore && (
            <button
              className="border border-black text-black py-2 px-6 rounded hover:bg-blue-500 hover:text-white transition duration-300"
              onClick={handleViewMore}
              disabled={loading} // Disable the button while loading
            >
              {loading ? 'Loading...' : 'View More >'}
            </button>
          )}
        </div>

        {/* Pet List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pets.map(pet => (
            <div key={pet.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={pet.image} alt={pet.name} className="w-full rounded-lg" />

              {/* Aligning ID and Name in the same level */}
              <div className="flex justify-between items-center mt-2">
                <h3 className="font-semibold">{pet.id}-{pet.breed}</h3>
              </div>

              {/* Aligning Gender and Age in the same level */}
              <div className="flex justify-between items-center mt-2">
                <p>Gene:{pet.gender}</p>
                <p>Age:{pet.age}</p>
              </div>

              {/* Aligning Price in the same level */}
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
