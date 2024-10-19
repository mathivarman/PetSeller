import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-yellow-100 text-white rounded-t-3xl">
      <div className="container mx-auto bg-yellow-100">
        <div className="bg-[#0e2c4b] p-6 rounded-3xl">
          <div className="flex flex-col text-white md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <h2 className="text-xl font-bold text-center md:text-left">
              Register Now So You Don't Miss Our Programs
            </h2>
            <div className="flex flex-col sm:flex-row w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your Email" 
                className="rounded-l-full bg-white text-black w-full sm:w-64 px-4 py-2 mb-2 sm:mb-0"
              />
              <button className="rounded-r-full bg-[#0e2c4b] hover:bg-[#0e2c4b]/90 px-4 py-2 flex items-center w-full sm:w-auto justify-center">
                <Send className="mr-2 h-4 w-4" /> Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-black  mb-6">
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/category" className="hover:underline">Category</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="YouTube"><Youtube /></a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-black">
            <p className="mb-2 md:mb-0">© 2022 Monito. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="/terms" className="hover:underline">Terms of Service</a>
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}