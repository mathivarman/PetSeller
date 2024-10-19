import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0e2c4b] text-white p-6 rounded-t-3xl">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-xl font-bold mb-4 md:mb-0">Register Now So You Don't Miss Our Programs</h2>
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Enter your Email" 
              className="rounded-l-full bg-white text-black w-full md:w-64 px-4 py-2"
            />
            <button className="rounded-r-full bg-[#0e2c4b] hover:bg-[#0e2c4b]/90 px-4 py-2 flex items-center">
              <Send className="mr-2 h-4 w-4" /> Subscribe Now
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/category" className="hover:underline">Category</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="YouTube"><Youtube /></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2022 Monito. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}