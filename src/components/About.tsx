'use client';

import { motion } from 'framer-motion';
import { education, skills } from '@/data/resume';
import { GraduationCap, Code, Database, Server, Brain } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Education Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="mb-20"
        >
          <motion.h2 
            variants={item}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Education
          </motion.h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{edu.institution}</h3>
                    <p className="text-lg text-gray-700 mt-1">{edu.degree}</p>
                    <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
                      <span className="text-blue-600 font-medium">{edu.grade}</span>
                      <span className="text-gray-600">{edu.duration}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{edu.location}</p>
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
          <motion.h2 
            variants={item}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Technical Skills
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <motion.div 
              variants={item}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Code className="text-purple-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, index) => (
                  <span 
                    key={index}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div 
              variants={item}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Server className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((framework, index) => (
                  <span 
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div 
              variants={item}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Database className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Specializations */}
            <motion.div 
              variants={item}
              className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="text-orange-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Specializations</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {skills.specializations.map((spec, index) => (
                  <div 
                    key={index}
                    className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm font-medium text-center"
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
