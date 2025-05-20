import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github as GitHub, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email',
      content: 'fadisubair.s@gmail.com',
      link: 'mailto:fadisubair.s@gmail.com',
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: 'Phone',
      content: '+91 8129855039',
      link: 'tel:+918129855039',
    },
    {
      icon: <Linkedin className="text-primary" size={24} />,
      title: 'LinkedIn',
      content: 'Fadi Subair',
      link: 'https://linkedin.com/in/fadi-subair',
    },
    {
      icon: <GitHub className="text-primary" size={24} />,
      title: 'GitHub',
      content: 'fadisubair',
      link: 'https://github.com/fadisubair',
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
    <section id="contact" className="section-padding bg-accent dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-secondary dark:text-white">Get In Touch</h2>
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={container}
              className="lg:col-span-1 space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.title === 'LinkedIn' || info.title === 'GitHub' ? '_blank' : undefined}
                  rel={info.title === 'LinkedIn' || info.title === 'GitHub' ? 'noopener noreferrer' : undefined}
                  variants={item}
                  className="flex items-start p-4 bg-white dark:bg-dark-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mr-4 mt-1">{info.icon}</div>
                  <div>
                    <h3 className="font-medium text-secondary dark:text-white">{info.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div
              variants={item}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md"
            >
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                    <Send className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg text-white font-medium ${
                      submitting ? 'bg-gray-400' : 'bg-primary hover:bg-opacity-90'
                    } transition-colors`}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;