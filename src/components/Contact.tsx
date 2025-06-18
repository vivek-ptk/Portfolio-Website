'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/resume';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

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

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: `https://${personalInfo.linkedin}`,
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repositories',
      href: `https://github.com/${personalInfo.github}`,
      color: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 
            variants={item}
            className="text-4xl font-bold text-center mb-4"
          >
            Let's Connect
          </motion.h2>
          
          <motion.p
            variants={item}
            className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg"
          >            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and innovation.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                variants={item}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block"
              >
                <div className={`h-full bg-gradient-to-r ${method.color} rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                  <div className="flex items-center space-x-4">
                    <method.icon size={24} className="text-white" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{method.label}</h3>
                      <p className="text-white/80 text-sm">{method.value}</p>
                    </div>
                  </div>
                  {method.href.startsWith('http') && (
                    <ExternalLink size={16} className="text-white/60 mt-2 group-hover:text-white transition-colors" />
                  )}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={item}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin size={20} className="text-blue-400" />
                <span className="text-lg">Based in Bhubaneswar, Odisha, India</span>
              </div>
              
              {/* <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Currently in my final year of B.Tech Computer Science Engineering, 
                actively seeking full-time opportunities in software development. 
                Available for internships, freelance projects, and full-time positions.
              </p> */}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${personalInfo.email}?subject=Let's Connect!`}
                  className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  <Mail size={18} />
                  <span>Send Email</span>
                </a>
                
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 px-8 py-3 rounded-full font-semibold transition-colors duration-300 border border-white/30"
                >
                  <Linkedin size={18} />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={item}
            className="text-center mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-gray-400">
              © 2025 {personalInfo.name}. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
