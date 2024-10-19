import React from 'react';
import img8 from './../img/sellersdogs.png';

const Banner2 = () => {
  return (
    <section className="w-lg bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] rounded-3xl overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image section on the left with specific width and margin */}
          <div className="md:w-[700px] w-200 mx-auto md:mx-0 md:mr-4"> {/* Set your desired width and add right margin */}
            <img src={img8} alt="Pet and Owner" className=" h-auto object-cover" />
          </div>
          {/* Content section on the right */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-4xl font-bold text-[#0e2c4b] mb-4">
              One More Friend, Thousands More Fun!
            </h2>
            <p className="text-lg text-[#0e2c4b] mb-4">Find your new best friend today and bring happiness home.</p>
            <p className="text-lg text-[#0e2c4b] mb-6">
              Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
              We have 200+ different pets that can meet your needs!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-[#0e2c4b] text-white rounded-full hover:bg-[#1a3a5c] transition-colors">
                Explore Now
              </button>
              <button className="px-6 py-3 border border-[#0e2c4b] text-[#0e2c4b] rounded-full hover:bg-[#0e2c4b] hover:text-white transition-colors">
                View Intro ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
