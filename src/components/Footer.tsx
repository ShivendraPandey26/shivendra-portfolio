"use client";
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-200 py-12 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-2 transform transition-transform duration-500 hover:scale-105">
              Shivendra Kumar Pandey
            </h2>
            <p className="text-gray-300 text-lg">Full-Stack Web Developer</p>
          </div>
          <div className="flex flex-wrap space-x-6 mb-1 md:mb-0">
            <button 
              onClick={() => window.open('https://www.linkedin.com/in/shivendra-pandey-34075a245', '_blank')} 
              className="text-blue-400 hover:text-blue-300 transition-transform duration-300 transform hover:scale-105"
            >
              LinkedIn
            </button>
            <button 
              onClick={() => window.open('https://github.com/ShivendraPandey26', '_blank')} 
              className="text-gray-400 hover:text-gray-300 transition-transform duration-300 transform hover:scale-105"
            >
              GitHub
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:aviralpandey7974@gmail.com'} 
              className="text-gray-400 hover:text-gray-300 transition-transform duration-300 transform hover:scale-105"
            >
              Email
            </button>
            <button 
              onClick={() => window.open('https://instagram.com/shivendra._.pandey', '_blank')} 
              className="text-pink-500 hover:text-pink-400 transition-transform duration-300 transform hover:scale-105"
            >
              Instagram
            </button>
          </div>
        </div>
          <p className="text-gray-400 text-sm text-center mt-4">
            &copy; {new Date().getFullYear()} Shivendra Kumar Pandey. All rights reserved.
          </p>
      </div>
    </footer>
  );
}

export default Footer;
