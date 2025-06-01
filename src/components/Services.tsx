import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies to meet your specific business needs.",
      icon: "🌐"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance usability and create memorable brand experiences.",
      icon: "🎨"
    },
    {
      title: "Digital Strategy",
      description: "Strategic planning and consultation to help you navigate the digital landscape and achieve your business goals.",
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 