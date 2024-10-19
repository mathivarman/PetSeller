import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [page, setPage] = useState(1); // Pagination state

  // Fetch products from the backend API
  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://monitor-backend-rust.vercel.app/api/products?page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(prevProducts => [...prevProducts, ...data]); // Append new products
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Fetch products on initial load and when the page changes
  useEffect(() => {
    fetchProducts();
  }, [page]);

  // Handle the "View More" button click to load more products
  const handleViewMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // Render loading or error message
  if (loading) {
    return <p className="text-center text-lg">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-600">Error: {error}</p>;
  }

  return (
    <section className="bg-yellow-200 py-16">
      <div className="container mx-auto">
        {/* Header Section with Title and View More Button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Hard to choose the right product?</h2>
            <h1 className="text-4xl font-bold">PRODUCTS</h1>
          </div>
          <button
            onClick={handleViewMore}
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out flex items-center"
          >
            View More<span className="ml-2">&gt;</span>
          </button>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full rounded-lg" />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description || 'High quality products for your pets'}</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700">Buy Now</button>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default ProductList;


// import React from 'react';

// const ProductList = () => {
//   const products = [
//     { id: 1, name: 'Pet Food - Salmon Flavored', image: 'https://via.placeholder.com/150' },
//     { id: 2, name: 'Puppy Toy', image: 'https://via.placeholder.com/150' },
//     { id: 3, name: 'Puppy Toy', image: 'https://via.placeholder.com/150' },
//     { id: 4, name: 'Puppy Toy', image: 'https://via.placeholder.com/150' },
//     { id: 5, name: 'Puppy Toy', image: 'https://via.placeholder.com/150' },
//     { id: 6, name: 'Puppy Toy', image: 'https://via.placeholder.com/150' },
//     { id: 7, name: 'Puppy Toy', image: 'https://via.placeholder.com/150' },
//     { id: 8, name: 'Puppy Toy', image: 'https://via.placeholder.com/150' },
//     // Add more products here
//   ];

//   return (
//     <section className="py-16">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Check out our Products for Your Pets</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {products.map(product => (
//             <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
//               <img src={product.image} alt={product.name} className="w-full rounded-lg" />
//               <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
//               <p className="text-sm text-gray-600">High quality nutrition for your pets</p>
//               <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700">Buy Now</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductList;
