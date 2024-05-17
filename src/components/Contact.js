import React from 'react';

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                </div>
                <div className="info-container">
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <h4>Email:</h4>
                            <p><a href="mailto:basim@dal.com">basim@dal.com</a></p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="fab fa-linkedin"></i>
                        <div>
                            <h4>LinkedIn:</h4>
                            <p><a href="https://www.linkedin.com/in/basimbalushi" target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
                        </div>
                    </div>
                </div>
                <form action="forms/contact.php" method="post" className="php-email-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
