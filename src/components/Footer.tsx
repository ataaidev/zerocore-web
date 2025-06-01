import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 md:mt-0 md:order-1">
            &copy; {currentYear} Zero Core Studio LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 