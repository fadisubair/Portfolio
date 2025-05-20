import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Terminal, Shield, Award } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-primary" size={24} />,
      skills: [
        { name: 'C++', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'JavaScript', level: 70 },
      ],
    },
    {
      title: 'Web Development',
      icon: <Terminal className="text-primary" size={24} />,
      skills: [
        { name: 'React.js', level: 75 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'Node.js', level: 65 },
      ],
    },
    {
      title: 'Security Tools',
      icon: <Shield className="text-primary" size={24} />,
      skills: [
        { name: 'Burp Suite', level: 85 },
        { name: 'Nmap', level: 90 },
        { name: 'Wireshark', level: 80 },
        { name: 'Metasploit', level: 75 },
      ],
    },
    {
      title: 'Security Techniques',
      icon: <Terminal className="text-primary" size={24} />,
      skills: [
        { name: 'Penetration Testing', level: 85 },
        { name: 'Wireless Cracking', level: 80 },
        { name: 'XSS Exploitation', level: 75 },
        { name: 'Brute Force Attacks', level: 80 },
      ],
    },
  ];

  const certifications = [
    {
      name: 'Introduction to CEH (Certified Ethical Hacker)',
      issuer: 'EC-Council',
      date: '2023',
    },
    {
      name: 'Pre-Security Path Completion',
      issuer: 'TryHackMe',
      date: '2022',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section-padding dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-secondary dark:text-gray-200">Skills & Certifications</h2>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={container}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex} 
                variants={item}
                className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-md card-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold dark:text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (                      <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium dark:text-white">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 * skillIndex }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={item}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Award className="text-primary" size={24} />
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary card-hover"
                >
                  <h4 className="text-lg font-medium mb-2">{cert.name}</h4>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 mt-2">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;