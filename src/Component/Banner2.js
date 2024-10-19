import React from 'react';
import { IoPlayCircleOutline } from "react-icons/io5";
import img8 from './../img/sellersdogs.png';

export default function PetSellersSection() {
  return (
    <div className="bg-yellow-20 container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] rounded-3xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-[700px] w-full mx-auto md:mx-0 md:mr-4">
            <img
              src={img8}
              alt="Hand holding dog's paw"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold leading-tighttext-4xl font-bold leading-tight text-center ">One More Friend, Thousands More Fun!</h1>
          <p className="text-lg text-center">Find your new best friend today and bring happiness home.</p>
          <p className="text-lg text-center">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
          <div className="flex justify-center space-x-5 p-5 sm:flex-row gap-4">
              <button className="px-6 py-3 bg-[#0e2c4b] text-white rounded-full hover:bg-[#1a3a5c] transition-colors">
                Explore Now
              </button>
              <button className="flex items-center px-6 py-3 border border-[#0e2c4b] text-[#0e2c4b] rounded-full hover:bg-[#0e2c4b] hover:text-white transition-colors">
                View Intro 
                <IoPlayCircleOutline className="ml-2" />
              </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}