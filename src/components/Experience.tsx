'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/resume';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

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

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black text-white">
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
              experience
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              My professional journey in software development and technology.
            </p>
          </motion.div>
          
          {/* Experience Timeline */}
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group"
              >
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* Timeline Indicator */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 lg:justify-end">
                      <div className="border border-gray-700 p-3 rounded-full group-hover:border-gray-600 transition-colors duration-300">
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <div className="hidden lg:block w-8 h-px bg-gray-800"></div>
                    </div>
                  </div>

                  {/* Experience Content */}
                  <div className="lg:col-span-10">
                    <div className="border border-gray-800 rounded-lg p-8 group-hover:border-gray-700 transition-colors duration-300">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-light tracking-tight mb-2 text-white">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-gray-400">{exp.company}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500 mt-4 lg:mt-0">
                          <Calendar size={16} />
                          <span className="text-sm font-light">{exp.duration}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {exp.description.map((desc, descIndex) => (
                            <li
                              key={descIndex}
                              className="flex items-start space-x-3 text-gray-400 leading-relaxed"
                            >
                              <ArrowRight className="text-gray-600 mt-1 flex-shrink-0" size={16} />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm text-gray-500 font-light tracking-widest uppercase mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((technology, techIndex) => (
                            <span
                              key={techIndex}
                              className="border border-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs font-light hover:border-gray-700 transition-colors duration-300"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={item}
            className="mt-20 text-center"
          >
            <div className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-light tracking-tight mb-4 text-white">
                Currently Open to Opportunities
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Looking for full-time software engineering roles where I can contribute to 
                innovative projects and continue growing as a developer.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
