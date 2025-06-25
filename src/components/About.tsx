'use client';

import { motion } from 'framer-motion';
import { education, skills } from '@/data/resume';
import { GraduationCap, Code, Database, Server, Brain } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* About Me Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="mb-32"
        >
          <motion.div 
            variants={item}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">
              about me
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A passionate software engineer specializing in full-stack development, AI integration, 
              and building scalable web applications. Currently pursuing B.Tech in Computer Science 
              with a strong focus on modern technologies and innovative solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="mb-32"
        >
          <motion.h3 
            variants={item}
            className="text-3xl font-light tracking-wide mb-12 text-gray-300"
          >
            Education
          </motion.h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="border border-gray-700 p-3 rounded-full">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-white mb-1">{edu.institution}</h4>
                    <p className="text-lg text-gray-300 mb-2">{edu.degree}</p>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="text-gray-400 font-light">{edu.grade}</span>
                      <span className="text-gray-500">{edu.duration}</span>
                    </div>
                    <p className="text-gray-500 mt-1">{edu.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h3 
            variants={item}
            className="text-3xl font-light tracking-wide mb-12 text-gray-300"
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <motion.div 
              variants={item}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Code className="text-white" size={24} />
                <h4 className="text-xl font-medium text-white">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, index) => (
                  <span 
                    key={index}
                    className="border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-light hover:border-gray-600 transition-colors duration-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div 
              variants={item}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Server className="text-white" size={24} />
                <h4 className="text-xl font-medium text-white">Frameworks</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((framework, index) => (
                  <span 
                    key={index}
                    className="border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-light hover:border-gray-600 transition-colors duration-300"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div 
              variants={item}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Database className="text-white" size={24} />
                <h4 className="text-xl font-medium text-white">Technologies</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-light hover:border-gray-600 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Specializations */}
            <motion.div 
              variants={item}
              className="md:col-span-2 lg:col-span-3 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="text-white" size={24} />
                <h4 className="text-xl font-medium text-white">Specializations</h4>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {skills.specializations.map((spec, index) => (
                  <div 
                    key={index}
                    className="border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-light text-center hover:border-gray-600 transition-colors duration-300"
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
