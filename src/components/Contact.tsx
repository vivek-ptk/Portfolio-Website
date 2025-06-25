'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/resume';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

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

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: `https://${personalInfo.linkedin}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      href: `https://github.com/${personalInfo.github}`,
    }
  ];

  return (
    <section id="contact" className="py-30 bg-black text-white pt-16 border-t border-gray-900">
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
              let's connect
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology and innovation.
            </p>
          </motion.div>
          
          {/* Contact Methods */}
          <motion.div
            variants={item}
            className="flex justify-center gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group"
                title={method.label}
              >
                <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-600 transition-colors duration-300 group-hover:scale-105">
                  <method.icon size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </a>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div
            variants={item}
            className="text-center "
          >
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <MapPin size={20} />
              <span className="font-light">Based in Bokaro, Jharkhand, India</span>
            </div>
          </motion.div>          {/* Footer */}
          
        </motion.div>
      </div>
    </section>
  );
}
