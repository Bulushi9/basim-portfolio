import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Header() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header id="header">
            <div className="header-container">
                <button className="hamburger" onClick={toggleMenu}>
                    <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                    <ul>
                        <li><NavLink to="/" onClick={toggleMenu}><i className="fas fa-home"></i> <span>Home</span></NavLink></li>
                        <li><NavLink to="/about" onClick={toggleMenu}><i className="fas fa-user"></i> <span>About</span></NavLink></li>
                        <li><NavLink to="/resume" onClick={toggleMenu}><i className="fas fa-file-alt"></i> <span>Resume</span></NavLink></li>
                        <li><NavLink to="/projects" onClick={toggleMenu}><i className="fas fa-th-large"></i> <span>Projects</span></NavLink></li>
                        <li><NavLink to="/contact" onClick={toggleMenu}><i className="fas fa-envelope"></i> <span>Contact</span></NavLink></li>
                        <li>
                            <button onClick={toggleTheme} className="theme-toggle">
                                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                                <span>{isDarkMode ? 'Light' : 'Dark'}</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
