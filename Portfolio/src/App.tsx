import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: persist dark mode preference in localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
            <Route path="/skills" element={<SkillsPage darkMode={darkMode} />} />
            <Route path="/projects" element={<ProjectsPage darkMode={darkMode} />} />
            <Route path="/achievements" element={<AchievementsPage darkMode={darkMode} />} />
            <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;