import React from 'react';
import img8 from './../src/img/sellersdogs.png';

const Banner2 = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] rounded-3xl overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Move the image div to the first position */}
        <div className="md:w-1/2">
          <img src={img8} alt="Pet and Owner" className="w-full" />
        </div>
        {/* Keep the text div second */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold leading-tight text-center">One More Friend, Thousands More Fun!</h1>
          <p className="text-lg text-center">Find your new best friend today and bring happiness home.</p>
          <p className="text-lg text-center">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
          <div className="flex justify-center space-x-5 p-5 sm:flex-row gap-4">
              <button className="px-6 py-3 bg-[#0e2c4b] text-white rounded-full hover:bg-[#1a3a5c] transition-colors">
                Explore Now
              </button>
              <button className="px-6 py-3 border border-[#0e2c4b] text-[#0e2c4b] rounded-full hover:bg-[#0e2c4b] hover:text-white transition-colors">
                View Intro ▶
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};


export default Banner2;


