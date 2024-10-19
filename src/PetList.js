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
    <section className="bg-yellow-200 py-16">
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
              <h3 className="text-lg font-semibold mt-4">#{pet.id} - {pet.name}</h3>
              <p className="text-sm text-gray-600">Available for adoption</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700">Adopt Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetList;



// import React from 'react';

// const PetList = () => {
//   const pets = [
//     { id: 1, name: 'Pomeranian White', image: 'https://via.placeholder.com/150' },
//     { id: 2, name: 'Poodle Toy', image: 'https://via.placeholder.com/150' },
//     { id: 3, name: 'Poodle Toy', image: 'https://via.placeholder.com/150' },
//     { id: 4, name: 'Poodle Toy', image: 'https://via.placeholder.com/150' },
//     { id: 5, name: 'Poodle Toy', image: 'https://via.placeholder.com/150' },
//     { id: 6, name: 'Poodle Toy', image: 'https://via.placeholder.com/150' },
//     { id: 7, name: 'Poodle Toy', image: 'https://via.placeholder.com/150' },
//     { id: 8, name: 'Poodle Toy', image: 'https://via.placeholder.com/150' },
//     // Add more pets here
//   ];

//   return (
//     <section className="py-16">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Take A Look At Some Of Our Pets</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {pets.map(pet => (
//             <div key={pet.id} className="bg-white shadow-lg rounded-lg p-4">
//               <img src={pet.image} alt={pet.name} className="w-full rounded-lg" />
//               <h3 className="text-lg font-semibold mt-4">#{pet.id} - {pet.name}</h3>
//               <p className="text-sm text-gray-600">Available for adoption</p>
//               <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700">Adopt Now</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PetList;
