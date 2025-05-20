import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Globe, Download } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-secondary dark:text-white">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 mb-6">
                I am a passionate cybersecurity student with a focus on ethical hacking, penetration testing, 
                and network security analysis. Currently pursuing my B.E. in Computer Science and Cybersecurity 
                at Yenepoya University, I am dedicated to building a career in protecting digital infrastructures 
                from cyber threats.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My technical expertise includes working with various security tools like Burp Suite and Nmap, 
                along with programming skills in C++, Python, Java, and JavaScript. I enjoy the challenge of 
                finding vulnerabilities and implementing secure solutions.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not securing networks or coding, I'm actively participating in CTF competitions,
                contributing to open-source projects, and constantly expanding my knowledge in this 
                ever-evolving field.
              </p>
              
              <div className="mt-8">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 dark:text-white">
                <GraduationCap className="text-primary" size={20} />
                Education
              </h3>
              <div className="mb-4">
                <h4 className="font-medium dark:text-white">B.E. Computer Science & Cybersecurity</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Yenepoya University, Mangalore</p>
                </div>
                <div>
                  <h4 className="font-medium">Pre-University Certificate</h4>
                  <p className="text-sm text-gray-600">GHSS Cherukunnu, Kerala</p>
                </div>
              </div>
              
              <div>              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 dark:text-white">
                <Globe className="text-primary" size={20} />
                Languages
              </h3>
              <div className="mb-2">
                <div className="flex justify-between mb-1">
                  <span className="dark:text-white">English</span>
                  <span className="dark:text-white">Fluent</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Malayalam</span>
                    <span>Fluent</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;