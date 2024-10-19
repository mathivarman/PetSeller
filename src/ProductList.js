import React, { useEffect, useState } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const productsPerPage = 8;

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://monitor-backend-rust.vercel.app/api/products?page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(prevProducts => [...prevProducts, ...data]);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    setDisplayedProducts(products.slice(0, page * productsPerPage));
  }, [products, page]);

  const handleViewMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (loading && page === 1) {
    return <p className="text-center text-lg">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-600">Error: {error}</p>;
  }

  return (
    <section className="bg-yellow-20 py-16">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Hard to choose the right product?</h2>
            <h1 className="text-4xl font-bold">PRODUCTS</h1>
          </div>
          {displayedProducts.length < products.length && (
            <button
              onClick={handleViewMore}
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out flex items-center"
            >
              View More<span className="ml-2">&gt;</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {displayedProducts.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col h-full">
              <img src={product.image} alt={product.name} className="w-full rounded-lg mb-4" />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{product.id} - {product.name}</h3>
                <p className="text-lg font-semibold mt-2">{product.product} size-{product.size} {product.price}</p>
                <div className="mt-2 mb-4">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  🎁+{product.description || 'Special Offer'}
                  </span>
                </div>
              </div>
              {/* <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out w-full mt-auto">
                Buy Now
              </button> */}
            </div>
          ))}
        </div>

        {loading && page > 1 && (
          <p className="text-center text-lg mt-4">Loading more products...</p>
        )}
      </div>
    </section>
  );
}