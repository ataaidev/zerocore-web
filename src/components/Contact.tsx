'use client';

import React from 'react';
import { COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from '../lib/constants';
import { trackContactClick } from './GoogleAnalytics';

export default function Contact() {
  const handleEmailClick = () => {
    trackContactClick('email');
  };

  const handlePhoneClick = () => {
    trackContactClick('phone');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with our team and let us bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Address Card */}
          <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Address</h3>
            <p className="text-gray-300 leading-relaxed">
              {COMPANY_ADDRESS.split(' ').slice(0, 3).join(' ')}<br />
              {COMPANY_ADDRESS.split(' ').slice(3, 5).join(' ')}<br />
              {COMPANY_ADDRESS.split(' ').slice(5).join(' ')}
            </p>
          </div>

          {/* Email Card */}
          <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
            <a 
              href={`mailto:${COMPANY_EMAIL}`} 
              onClick={handleEmailClick}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              {COMPANY_EMAIL}
            </a>
          </div>

          {/* Phone Card */}
          <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Phone</h3>
            <a 
              href={`tel:${COMPANY_PHONE.replace(/\s/g, '').replace(/[()]/g, '')}`} 
              onClick={handlePhoneClick}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              {COMPANY_PHONE}
            </a>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
} 