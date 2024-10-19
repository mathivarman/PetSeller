import React from 'react';
import img8 from './../img/sellersdogs.png';
import { IoPlayCircleOutline } from "react-icons/io5";

const Banner1 = () => {
  return (
    <section className="bg-yellow-100  bg-cover bg-center bg-no-repeat py-5 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 text-blue-900">
          <h1 className="text-4xl font-bold leading-tighttext-4xl font-bold leading-tight text-center ">One More Friend, Thousands More Fun!</h1>
          <p className="text-lg text-center">Find your new best friend today and bring happiness home.</p>
          <p className="text-lg text-center">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
          <div className="flex justify-center space-x-5 p-5 sm:flex-row gap-4">
              <button className="flex items-center px-6 py-3 border border-[#0e2c4b] text-[#0e2c4b] rounded-full hover:bg-[#0e2c4b] hover:text-white transition-colors">
                View Intro 
                <IoPlayCircleOutline className="ml-2" />
              </button>
              <button className="px-6 py-3 bg-[#0e2c4b] text-white rounded-full hover:bg-[#1a3a5c] transition-colors">
                Explore Now
              </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={img8} 
          alt="Pet and Owner" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner1;
