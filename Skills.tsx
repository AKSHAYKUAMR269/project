import React from 'react';
import { Code, Database, Layout, Terminal } from 'lucide-react';

const skills = {
  "Programming Languages": {
    icon: <Code />,
    items: ["Python", "JavaScript", "Java", "C++", "JAVAScript"]
  },
  "Web Technologies": {
    icon: <Layout />,
    items: ["React", "Node.js", "HTML/CSS", "Tailwind CSS", "J QUARE"]
  },
  "Databases": {
    icon: <Database />,
    items: ["SQL", "MongoDB"]
  },
  "Tools & Others": {
    icon: <Terminal />,
    items: ["Git", "AWS", "Linux"]
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, { icon, items }]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  {icon}
                </div>
                <h3 className="font-semibold">{category}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}