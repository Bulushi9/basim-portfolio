import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact Me</h2>
                    <p>Feel free to reach out to me using any of the following methods</p>
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

                <div className="contact-form">
                    <form onSubmit={handleSubmit} className="php-email-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control" 
                                required 
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                required 
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input 
                                type="text" 
                                name="subject" 
                                className="form-control" 
                                required 
                                onChange={handleChange}
                                value={formData.subject}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                name="message" 
                                className="form-control" 
                                rows="5" 
                                required 
                                onChange={handleChange}
                                value={formData.message}
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
