import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>I am Basim Al Bulushi, a dedicated and detail-oriented Bachelor of Computer Science student at Dalhousie University, specializing in Communication Technologies & Cyber Security, as well as Web & Mobile Development. With internships across significant tech sectors in Oman, including Oman Air and Ahli Bank, I have cultivated a robust foundation in IT support, security, and software development. My technical skills span across programming languages like Java, C, and JavaScript, and I am proficient in frameworks such as React and Node.js. Passionate about developing accessible, effective, and secure technology solutions, I aim to leverage my skills in software development and cyber security to innovate and improve user experiences. My projects range from Android applications enhancing local community services to contributing to cybersecurity awareness and standards.</p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right"></div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Cybersecurity Analyst &amp; Web Developer.</h3>
            <div class="csline"></div>
            <p className="fst-italic">
              With a solid foundation in web development and a passion for crafting secure, user-centered solutions, I bring a balanced blend of technical proficiency and creative problem-solving to my projects. At Dalhousie University, I deepened my expertise, particularly in areas combining web development with cybersecurity. 
              My experiences in various internships have honed my ability to navigate complex challenges, ensuring that each website I develop not only meets but exceeds modern web standards. I'm dedicated to enhancing website functionality while ensuring robust security, creating seamless and safe digital environments for users.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Halifax, Canada &amp; Muscat, Oman</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span> Bachelor's of Computer Science</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <a href="mailto:basim@dal.ca" className="email-link">basim@dal.ca</a></li> */}
                </ul>
              </div>
            </div>
            {/* <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
