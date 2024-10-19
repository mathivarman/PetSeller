import React, { useEffect, useState } from 'react';

const PetFilter = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    size: '',
    age: '',
    minPrice: '',
    maxPrice: '',
    gender: '',
  });

  // Fetch pets from the backend API
  const fetchPets = async () => {
    try {
      const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
      if (!response.ok) {
        throw new Error('Failed to fetch pets');
      }
      const data = await response.json();
      setPets(data); // Set fetched pets
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Filter pets based on selected filters
  const filteredPets = pets.filter(pet => {
    const isSizeMatch = !filters.size || pet.size === filters.size; // Size filter
    const isAgeMatch = !filters.age || pet.age <= parseInt(filters.age, 10); // Age filter
    const isPriceMatch =
      (!filters.minPrice || pet.price >= parseFloat(filters.minPrice)) &&
      (!filters.maxPrice || pet.price <= parseFloat(filters.maxPrice)); // Price filter
    const isGenderMatch = !filters.gender || pet.gender === filters.gender; // Gender filter

    return isSizeMatch && isAgeMatch && isPriceMatch && isGenderMatch;
  });

  if (loading) {
    return <p className="text-center">Loading pets...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-5">Filter Pets</h2>

      {/* Filter Options */}
      <div className="flex flex-wrap mb-5">
        <select name="size" onChange={handleFilterChange} className="mr-3 mb-3">
          <option value="">Select Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <input
          type="number"
          name="age"
          placeholder="Max Age (months)"
          onChange={handleFilterChange}
          className="mr-3 mb-3"
        />

        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          onChange={handleFilterChange}
          className="mr-3 mb-3"
        />

        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          onChange={handleFilterChange}
          className="mr-3 mb-3"
        />

        <select name="gender" onChange={handleFilterChange} className="mr-3 mb-3">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Filtered Pets List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredPets.map(pet => (
          <div key={pet.id} className="bg-white shadow-lg rounded-lg p-4">
            <img src={pet.image} alt={pet.name} className="w-full rounded-lg" />
            <h3 className="font-semibold">{pet.name}</h3>
            <p>Size: {pet.size}</p>
            <p>Gender: {pet.gender}</p>
            <p>Age: {pet.age} months</p>
            <h5 className="text-lg font-semibold">${pet.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetFilter;
