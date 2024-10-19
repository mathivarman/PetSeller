import React from 'react';
import img1 from './../sellers/sheba-logo.png';
import img2 from './../sellers/whiskas-logo.jpg';
import img3 from './../sellers/bakers-logo.png';
import img4 from './../sellers/felix-logo.png';
import img5 from './../sellers/good-boy-logo.png';
import img6 from './../sellers/butchers-logo.png';
import img7 from './../sellers/pedigree-logo.png';
import img8 from './../img/sellersdogs.png';

export default function PetSellersSection() {
  return (
    <div className="bg-yellow-20 container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#0e2c4b] mb-4 sm:mb-0">Proud to be part of Pet Sellers</h2>
        <button className="px-4 py-2 border border-[#0e2c4b] text-[#0e2c4b] rounded-full hover:bg-[#0e2c4b] hover:text-white transition-colors">
          View all our sellers &gt;
        </button>
      </div>


      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-12">
        <img src={img1} alt="Sheba logo" className="h-12 w-auto object-contain" />
        <img src={img2} alt="Whiskas logo" className="h-12 w-auto object-contain" />
        <img src={img3} alt="Bakers logo" className="h-12 w-auto object-contain" />
        <img src={img4} alt="Felix logo" className="h-12 w-auto object-contain" />
        <img src={img5} alt="Good Boy logo" className="h-12 w-auto object-contain" />
        <img src={img6} alt="Butchers logo" className="h-12 w-auto object-contain" />
        <img src={img7} alt="Pedigree logo" className="h-12 w-auto object-contain" />
      </div>

      <div className="bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] rounded-3xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="p-8 md:w-1/2">
            <h2 className="text-4xl font-bold text-[#0e2c4b] mb-4">
              Adoption <span className="text-5xl">🐾</span>
            </h2>
            <h3 className="text-2xl font-semibold text-[#0e2c4b] mb-4">
              We Need Help. So Do They.
            </h3>
            <p className="text-[#0e2c4b] mb-6">
              Adopt a pet and give it a home.<br />
              It will love you back unconditionally.
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
          <div className="md:w-1/2">
            <img
              src={img8}
              alt="Hand holding dog's paw"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}