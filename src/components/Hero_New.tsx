'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/data/resume';
import { ArrowRight, Github, Linkedin, Mail, Newspaper } from 'lucide-react';

export default function Hero() {
  const titles = ["frontend developer", "full stack engineer", "problem solver"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex-col"
          >
            {/* Large Title */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl lg:text-8xl font-light tracking-tight leading-none"
              >
                Hi, I'm {personalInfo.name.split(' ')[0]}!
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="h-fit"
              >
                <motion.h1
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl lg:text-8xl font-light tracking-tight leading-none text-gray-400"
                >
                  {titles[currentTitleIndex].split(' ')[0]}
                </motion.h1>
                {titles[currentTitleIndex].split(' ')[1] && (
                  <motion.h1
                    key={`${currentTitleIndex}-2`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-6xl lg:text-8xl font-light tracking-tight leading-none text-gray-400"
                  >
                    {titles[currentTitleIndex].split(' ')[1]}
                  </motion.h1>
                )}
              </motion.div>
            </div>

            {/* Description */}
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-400 max-w-md leading-relaxed"
            >
              Hi I'm {personalInfo.name.split(' ')[0]}, a passionate Front-end Developer & Full-stack Engineer based in Bhubaneswar, India.
            </motion.p> */}

            {/* CTA Buttons */}
            <div className="flex flex-col space-y-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={scrollToProjects}
                className="group inline-flex items-center px-3 space-x-3 text-white hover:text-gray-300 transition-colors duration-300 self-start"
              >
                <span className="text-lg font-light tracking-wider">SEE MY WORKS</span>
                <ArrowRight 
                  size={20} 
                  className="transform group-hover:translate-x-1 transition-transform duration-300" 
                />
              </motion.button>

              {/* Resume Button */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                href="https://drive.google.com/file/d/1G3wd-23KNzSusWmswhfBbS-sY8qaahOF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-full self-start"
              >
                <Newspaper size={16} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                <span className="text-sm font-light tracking-wider">MY RESUME</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex items-center space-x-6 pt-8"
            >
              <span className="text-sm text-gray-500 font-light">CONNECT</span>
              <div className="flex space-x-4">
                <a
                  href={`https://github.com/${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full"></div>
              <Image
                src="/profile-pic.png"
                alt={personalInfo.name}
                width={384}
                height={384}
                className="relative z-10 w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-gray-400 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gray-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-gray-600"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
