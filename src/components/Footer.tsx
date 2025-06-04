import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 font-sans">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="relative z-10 py-16">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main content area */}
          <div className="text-center">
            {/* Copyright with modern styling */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-3 font-sans">Zero Core Studio</h3>
              <p className="text-gray-300 text-lg leading-relaxed font-sans">
                &copy; {currentYear} Zero Core Studio LLC. All rights reserved.
              </p>
            </div>
            
            {/* Bottom decorative element */}
            <div className="flex justify-center mt-12">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute bottom-1/2 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
    </footer>
  );
} 