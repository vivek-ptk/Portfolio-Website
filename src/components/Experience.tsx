'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/resume';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Professional Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {exp.description.map((desc, descIndex) => (
                      <motion.li
                        key={descIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * descIndex }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span className="text-gray-700 leading-relaxed">{desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((technology, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * techIndex }}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {technology}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={item}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Currently Open to Opportunities</h3>
              <p className="text-lg opacity-90">
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
