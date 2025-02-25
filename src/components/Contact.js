import React from 'react';

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                </div>

                <div className="info-container">
                    <a href="mailto:basim@dal.com" className="info-item email">
                        <i className="fas fa-envelope"></i>
                        <h4>Email</h4>
                        <p>basim@dal.com</p>
                    </a>
                    <a href="https://github.com/bulushi9" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="info-item github">
                        <i className="fab fa-github"></i>
                        <h4>GitHub</h4>
                        <p>@bulushi9</p>
                    </a>
                    <a href="https://www.linkedin.com/in/basimbalushi" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="info-item linkedin">
                        <i className="fab fa-linkedin"></i>
                        <h4>LinkedIn</h4>
                        <p>basimbalushi</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
