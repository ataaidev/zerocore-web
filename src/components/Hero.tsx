import React from 'react';
import Image from 'next/image';

export default function Hero() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image 
              src="/images/logo.svg" 
              alt="Zero Core Studio Logo" 
              width={120} 
              height={120}
              className="mb-6"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Zero Core Studio
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8">
            Creating innovative digital solutions
          </p>
        </div>
        <div className="w-full mt-4 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <p className="w-full mt-8 md:mt-0 md:order-1 text-center">
            &copy; {currentYear} Zero Core Studio LLC. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
} 