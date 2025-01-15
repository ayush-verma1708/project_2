import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'RideOk - Carpooling Application',
      description: 'A full-stack carpooling application that allows users to search for and schedule rides, while also allowing car owners to offer ride-sharing options. Features include map integration, cost estimates, and user ratings.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Docker'],
      link: 'https://rideok-new.vercel.app',
      github: 'https://github.com/ayush-verma1708/rideok',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80',
    },
    {
      title: 'Buddy Finder',
      description: 'A real-time chatroom application using WebSockets, enabling users with similar interests to connect, chat, and engage in online activities like playing games.',
      tech: ['WebSocket', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/ayushverma1708/BuddyFinder',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-100 mb-12">Some Things I've Built</h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
              <div className="md:w-7/12 relative group">
                <a href={project.link || project.github} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="rounded-lg w-full h-[300px] object-cover brightness-50 group-hover:brightness-75 transition-all duration-300"
                  />
                </a>
              </div>
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <h3 className="text-xl font-bold text-gray-100 mb-4">{project.title}</h3>
                <div className="bg-[#112240] p-6 rounded-lg mb-4">
                  <p className="text-gray-400">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-teal-300 text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300">
                    <Github size={20} />
                  </a>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}