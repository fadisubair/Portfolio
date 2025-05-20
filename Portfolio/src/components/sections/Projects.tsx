import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github as GitHub, Shield, Lock, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  skills: string[];
  links: {
    demo?: string;
    github?: string;
  };
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: 'Penetration Testing on TryHackMe Boxes',
      description: 'Conducted detailed penetration testing on various TryHackMe boxes, identifying vulnerabilities and documenting exploitation techniques following ethical hacking methodologies.',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Nmap', 'Metasploit'],
      links: {
        github: 'https://github.com/fadisubair/pentest-reports',
      },
      icon: <Shield size={24} className="text-primary" />,
    },
    {
  title: 'Network Security Monitor',
  description: 'Built a Python-based tool using Nmap to detect unauthorized devices and open ports on local networks. Alerts administrators about new devices or unexpected changes in real-time.',
  image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  skills: ['Python', 'Nmap', 'Network Monitoring', 'Cybersecurity'],
  links: {
    github: 'https://github.com/fadisubair/Network-security-monitor.git',  // Update with your repo URL
  },
  icon: <Lock size={24} className="text-primary" />,
},
    {
      title: 'React.js Based Web Application',
      description: 'Created a secure web application with React.js implementing best security practices including secure authentication, input validation, and protection against common web vulnerabilities.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      skills: ['React.js', 'JavaScript', 'Web Security', 'Authentication'],
      links: {
        demo: 'https://secure-react-app.example.com',
        github: 'https://github.com/fadisubair/secure-react-app',
      },
      icon: <Globe size={24} className="text-primary" />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="section-padding bg-accent dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-secondary dark:text-gray-200">My Projects</h2>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={container}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="project-card bg-white dark:bg-dark-secondary overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-secondary bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex space-x-4">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white dark:bg-dark-bg rounded-full text-secondary dark:text-gray-200 hover:text-primary transition-colors"
                        >
                          <GitHub size={20} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full text-secondary hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    {project.icon}
                    <h3 className="text-xl font-semibold dark:text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-primary bg-opacity-10 text-primary px-2 py-1 text-sm rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={item}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mt-12"
          >
            <a 
              href="https://github.com/fadisubair" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              <GitHub size={18} />
              View More on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;