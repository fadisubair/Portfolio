import React from 'react';
import { Shield, Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary dark:bg-dark-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="text-primary" size={24} />
              <span className="text-xl font-bold">Fadi Subair</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Cybersecurity specialist focused on ethical hacking, 
              penetration testing, and network security.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/fadisubair" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-primary transition-colors">
                <GitHub size={20} />
              </a>
              <a href="https://linkedin.com/in/fadi-subair" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:fadisubair.s@gmail.com" 
                 className="text-gray-300 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+918129855039" 
                 className="text-gray-300 hover:text-primary transition-colors">
                <Phone size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Fadi Subair. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;