import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At Zero Core Studio, we are passionate about creating cutting-edge digital solutions 
              that transform how businesses operate and engage with their customers.
            </p>
            <p className="text-gray-700">
              Founded on principles of innovation, reliability, and client satisfaction, 
              our team brings years of expertise to every project we undertake.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
            <p className="text-gray-700 mb-6">
              We believe in a collaborative approach, working closely with our clients to understand 
              their unique needs and deliver solutions that exceed expectations.
            </p>
            <p className="text-gray-700">
              By leveraging the latest technologies and best practices, we ensure that our 
              solutions are not only effective today but built to adapt to tomorrow's challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 