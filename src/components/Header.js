import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Header() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleClickOutside = React.useCallback((e) => {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
            setMenuOpen(false);
            document.body.style.overflow = 'unset';
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    React.useEffect(() => {
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [handleClickOutside]);

    return (
        <header id="header">
            <div className="header-container">
                <button className="hamburger" onClick={toggleMenu}>
                    <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                    <ul>
                        <li><NavLink to="/" onClick={() => {
                            toggleMenu();
                            window.scrollTo(0, 0);
                        }}><i className="fas fa-home"></i> <span>Home</span></NavLink></li>
                        <li><NavLink to="/about" onClick={() => {
                            toggleMenu();
                            window.scrollTo(0, 0);
                        }}><i className="fas fa-user"></i> <span>About</span></NavLink></li>
                        <li><NavLink to="/resume" onClick={() => {
                            toggleMenu();
                            window.scrollTo(0, 0);
                        }}><i className="fas fa-file-alt"></i> <span>Resume</span></NavLink></li>
                        <li><NavLink to="/projects" onClick={() => {
                            toggleMenu();
                            window.scrollTo(0, 0);
                        }}><i className="fas fa-th-large"></i> <span>Projects</span></NavLink></li>
                        <li><NavLink to="/contact" onClick={() => {
                            toggleMenu();
                            window.scrollTo(0, 0);
                        }}><i className="fas fa-envelope"></i> <span>Contact</span></NavLink></li>
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
