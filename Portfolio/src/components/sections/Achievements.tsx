import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Target, GitBranch } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements: Achievement[] = [
    {
      title: 'High Ranking on TryHackMe',
      description: 'Achieved a top position on the TryHackMe leaderboard, demonstrating proficiency in various cybersecurity challenges and practical hacking scenarios.',
      icon: <Trophy className="text-primary" size={32} />,
    },
    {
      title: 'Hackathon Participation',
      description: 'Participated in multiple cybersecurity hackathons, developing innovative solutions to complex security challenges under time constraints.',
      icon: <Target className="text-primary" size={32} />,
    },
    {
      title: 'Open Source Contributions',
      description: 'Actively contributed to open-source security tools on GitHub, helping improve the cybersecurity community through code contributions and documentation.',
      icon: <GitBranch className="text-primary" size={32} />,
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-secondary">Achievements</h2>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={container}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-white dark:bg-dark-secondary p-8 rounded-lg shadow-md text-center card-hover"
              >
                <div className="flex justify-center mb-6">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={item}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-16 bg-secondary rounded-lg p-8 text-white text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">Ready to Work Together?</h3>
            <p className="mb-6">
              I'm always looking for new opportunities to expand my skills and take on challenging cybersecurity projects.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;