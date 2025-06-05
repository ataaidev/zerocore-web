import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 font-sans">
      {/* Top border gradient */}
      <div className="h-1 bg-linear-to-r from-blue-500 via-purple-500 to-blue-500"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Zero Core Studio</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Transforming ideas into exceptional digital experiences through innovative design and cutting-edge technology.
            </p>
          </div>

          {/* Decorative line */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Zero Core Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute bottom-1/2 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer; 