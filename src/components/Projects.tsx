'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/resume';
import { ExternalLink, Github } from 'lucide-react';

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

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {/* Section Header */}
          <motion.div 
            variants={item}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">
              creative works
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A collection of my recent projects showcasing full-stack development, 
              UI/UX design, and innovative solutions.
            </p>
          </motion.div>
          
          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Project Number */}
                  <div className="lg:col-span-1">
                    <span className="text-6xl font-light text-gray-800">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="lg:col-span-7">
                    <h3 className="text-3xl lg:text-4xl font-light tracking-tight mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {project.name}
                    </h3>
                    
                    <div className="mb-4">
                      <span className="text-sm text-gray-500 font-light tracking-widest uppercase">
                        {project.tech.slice(0, 2).join(' / ')}
                      </span>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((technology, techIndex) => (
                        <span
                          key={techIndex}
                          className="border border-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs font-light hover:border-gray-700 transition-colors duration-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center space-x-6">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300"
                        >
                          <span className="text-sm font-light tracking-wider">VIEW PROJECT</span>
                          <ExternalLink size={16} />
                        </a>
                      )}
                      
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Image Placeholder */}
                  <div className="lg:col-span-4">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm font-light">PROJECT PREVIEW</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < projects.length - 1 && (
                  <div className="mt-12 pt-12 border-t border-gray-900"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* View More Projects */}
          <motion.div
            variants={item}
            className="text-center mt-20"
          >
            <a
              href={`https://github.com/vivek-ptk`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <span className="text-lg font-light tracking-wider">VIEW MORE ON GITHUB</span>
              <Github size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
