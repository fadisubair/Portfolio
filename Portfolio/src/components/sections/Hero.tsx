import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronDown } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Cybersecurity Professional';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, currentIndex + 1));
      currentIndex++;
      
      if (currentIndex === fullText.length) {
        clearInterval(typingInterval);
        
        const blinkInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        
        return () => clearInterval(blinkInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 dark:bg-dark-bg">
      <div className="hero-particles" aria-hidden="true">
        <div className="animated-bg absolute inset-0 dark:opacity-50"></div>
      </div>
      
      {/* Arrow-like decorative elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-6 ml-8">
          <div className="w-24 h-[2px] bg-gradient-to-r from-primary/50 to-transparent transform -rotate-45"></div>
          <div className="w-24 h-[2px] bg-gradient-to-r from-primary/30 to-transparent transform rotate-45"></div>
          <div className="w-24 h-[2px] bg-gradient-to-r from-primary/20 to-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-highlight/20 rounded-full blur-xl"></div>
              <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-dark-secondary rounded-xl backdrop-blur-sm mb-6 shadow-lg relative">
                <Shield className="text-primary" size={32} />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-200"
            >
              Hi, I'm Fadi Subair
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 font-mono inline-block px-4 py-2 bg-gray-50 dark:bg-dark-secondary/50 rounded-md shadow-inner"
            >
              <span className="text-gray-700 dark:text-gray-300">{text}</span>
              {showCursor && <span className="typing-cursor"></span>}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-xl"
            >
              Specializing in ethical hacking, penetration testing, and network security.
              Passionate about securing digital environments and protecting against cyber threats.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <HashLink 
                smooth 
                to="#contact" 
                className="btn bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
              >
                Contact Me
              </HashLink>
              
              <HashLink 
                smooth 
                to="#projects" 
                className="btn bg-gradient-to-r from-secondary to-secondary/90 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
              >
                View Projects
              </HashLink>
            </motion.div>
          </div>

          {/* Right side - Photo */}
          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full max-w-md mx-auto"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-highlight/30 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative">
                  <img 
                    src="/profile.jpg" 
                    alt="Fadi Subair" 
                    className="w-full rounded-lg shadow-2xl object-cover transform group-hover:scale-[1.02] transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <HashLink smooth to="#about" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary">
          <ChevronDown size={32} />
        </HashLink>
      </div>
    </section>
  );
};

export default Hero;