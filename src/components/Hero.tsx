'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/data/resume';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const titles = ["Software Developer", "Full Stack Developer", "Frontend Developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">          {/* Profile Picture */}
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto rounded-full bg-gray-300 overflow-hidden shadow-xl">
              <Image
                src="/profile-pic.png"
                alt={personalInfo.name}
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>          </div>
          
          <div className="h-16 flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTitleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl text-gray-600 font-semibold"
              >
                {titles[currentTitleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            A passionate software engineer specializing in full-stack development, AI integration, 
            and building scalable web applications. Currently pursuing B.Tech in Computer Science 
            with a strong focus on modern technologies and innovative solutions.
          </p> */}

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} className="text-blue-600" />
              <span className="text-gray-700">Email</span>
            </a>
            
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} className="text-green-600" />
              <span className="text-gray-700">Call</span>
            </a>
            
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} className="text-blue-700" />
              <span className="text-gray-700">LinkedIn</span>
            </a>
            
            <a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Github size={20} className="text-gray-800" />
              <span className="text-gray-700">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
