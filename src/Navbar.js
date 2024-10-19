import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-yellow-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <h1 className="text-2xl font-semibold">Monito</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Home</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Category</a></li>   

            <li><a href="#" className="text-blue-500 hover:text-blue-700">About</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Contact</a></li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <input type="text" placeholder="Search something here" className="border rounded-md px-3 py-2" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Join the community</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
