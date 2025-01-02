import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.NJ7cdfQADdx_6fcDv7nL2QHaEo&pid=Api&P=0&h=180"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover mb-8 ring-4 ring-white shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Computer Science Student of JNTUN
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Passionate about web development, artificial intelligence, and creating
            innovative solutions to real-world problems.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
          >
            View My Work
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}