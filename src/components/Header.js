import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      sections.forEach(section => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (sectionId && 
            scrollPosition >= sectionTop && 
            scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header">
      <div className="container d-flex align-items-center justify-content-center">
        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>
              <a href="#home"><i className="fas fa-home"></i> Home</a>
            </li>
            <li className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
              <a href="#about"><i className="fas fa-user"></i> About</a>
            </li>
            <li className={`nav-item ${activeSection === 'resume' ? 'active' : ''}`}>
              <a href="#resume"><i className="fas fa-file-alt"></i> Resume</a>
            </li>
            <li className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}>
              <a href="#projects"><i className="fas fa-th-large"></i> Projects</a>
            </li>
            <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
              <a href="#contact"><i className="fas fa-envelope"></i> Contact</a>
            </li>
            <li className="nav-item">
              <button onClick={toggleTheme} className="theme-toggle">
                <i className={`fas ${isDarkMode ? 'fa-toggle-on' : 'fa-toggle-off'}`}></i>
                <span className="toggle-text">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
