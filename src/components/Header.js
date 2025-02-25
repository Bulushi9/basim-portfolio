import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import MotivationalQuotes from './MotivationalQuotes';

function Header() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header id="header">
            <div className="header-container">
                <div className="nav-section">
                    <nav className="nav-menu">
                        <ul>
                            <li><NavLink to="/" end><i className="fas fa-home"></i> Home</NavLink></li>
                            <li><NavLink to="/about"><i className="fas fa-user"></i> About</NavLink></li>
                            <li><NavLink to="/resume"><i className="fas fa-file-alt"></i> Resume</NavLink></li>
                            <li><NavLink to="/projects"><i className="fas fa-th-large"></i> Projects</NavLink></li>
                            <li><NavLink to="/contact"><i className="fas fa-envelope"></i> Contact</NavLink></li>
                            <li>
                                <button onClick={toggleTheme} className="theme-toggle">
                                    <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                                    <span>{isDarkMode ? 'Light' : 'Dark'}</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="quote-wrapper">
                    <div className="quote-header">Quote of the Day</div>
                    <div className="quote-content">
                        <MotivationalQuotes />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
