import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo with hover animation */}
          <div className="flex justify-center mb-12">
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <Image 
                src="/images/logo.svg" 
                alt="Zero Core Studio Logo" 
                width={120} 
                height={120}
                className="relative transform group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </div>
          
          {/* Main heading with gradient text */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
              Zero Core
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400">
              Studio
            </span>
          </h1>
          
          {/* Subtitle with animation */}
          <div className="relative">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Creating innovative digital solutions
            </p>
            
            {/* Decorative line */}
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
    </section>
  );
} 