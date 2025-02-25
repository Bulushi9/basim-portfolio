import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="copyright">
                        © 2025 Basim Al Bulushi. All rights reserved.
                    </div>
                    <div className="social-links">
                        <a href="mailto:basim@dal.com" className="social-link email">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="https://github.com/bulushi9" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="social-link github">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/basimbalushi" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="social-link linkedin">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;