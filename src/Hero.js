import React from 'react';
import img8 from './../src/img/sellersdogs.png';

const Hero = () => {
  return (
    <section className="bg-yellow-50  bg-cover bg-center bg-no-repeat py-5 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold leading-tighttext-4xl font-bold leading-tight text-center ">One More Friend, Thousands More Fun!</h1>
          <p className="text-lg text-center">Find your new best friend today and bring happiness home.</p>
          <p className="text-lg text-center">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
          <div className="flex justify-center space-x-5 p-5">
          <button className="bg-600 border border-gray-400 text-black py-3 px-6 rounded-lg hover:bg-blue-700">
          Video Intro
          </button>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
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

export default Hero;
