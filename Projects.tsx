import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI Study Assistant",
    description: "A machine learning-powered application that helps students optimize their study habits.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    tech: ["Python", "TensorFlow", "React", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Smart Campus Map",
    description: "Interactive campus navigation system with real-time updates and accessibility features.",
    image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=600&h=400&fit=crop",
    tech: ["React", "Mapbox", "Firebase"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Course Scheduler",
    description: "Automated course scheduling system using genetic algorithms.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-gray-600 hover:text-indigo-600"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 text-gray-600 hover:text-indigo-600"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}