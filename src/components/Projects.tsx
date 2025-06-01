import React from 'react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A cutting-edge web application with modern UI and robust backend services.",
      image: "/images/logo.svg"
    },
    {
      title: "Project Two",
      description: "Mobile app solution for seamless customer engagement and service delivery.",
      image: "/images/logo.svg"
    },
    {
      title: "Project Three",
      description: "Digital transformation platform helping businesses streamline operations.",
      image: "/images/logo.svg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={`${project.title} image`}
                  width={80}
                  height={80}
                  style={{ opacity: 0.7 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 