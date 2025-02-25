import React from 'react';

function Resume() {
    return (
        <section id="resume" className="resume">
            <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                </div>

                {/* Education Section */}
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachelor of Computer Science</h4>
                            <h5>Sep 2020 - May 2025</h5>
                            <p><em>Dalhousie University, Halifax, NS, Canada</em></p>
                            <ul>
                                <li>Certificate in Communication Technologies & Cyber Security</li>
                                <li>Certificate in Web & Mobile Development</li>
                                <li>Relevant Coursework: Software Development, Data Structures & Algorithms, Computer Networks & Security,
                                    Database Management Systems, Operating Systems, Web Development, Mobile Computing</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="experience-section">
                    <h3 className="resume-title">Experience</h3>
                    <div className="row">
                        <div className="col-lg-6">
                            {/* First column - older experiences */}
                            <div className="resume-item">
                                <h4>Information Technology Trainee</h4>
                                <h5>Apr 2022 - Jun 2022</h5>
                                <p><em>Oman Cement Company S.A.O.G, Muscat, Oman</em></p>
                                <ul>
                                    <li>Gained hands-on experience with SAP S/4HANA</li>
                                    <li>Provided software support and IT services</li>
                                    <li>Collaborated with team members on various IT projects</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Information Technology Help Desk (Internship)</h4>
                                <h5>Jun 2022 - Jul 2022</h5>
                                <p><em>National Bank of Oman, Muscat, Oman</em></p>
                                <ul>
                                    <li>Provided remote IT support to 50+ branches</li>
                                    <li>Collaborated with network teams for system updates</li>
                                    <li>Reduced system downtime through hardware issue resolution</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Information Security Officer (Internship)</h4>
                                <h5>Jun 2023 - Jul 2023</h5>
                                <p><em>Ahli Bank, Muscat, Oman</em></p>
                                <ul>
                                    <li>Implemented security controls to protect sensitive data</li>
                                    <li>Monitored security incidents using SIEM tools</li>
                                    <li>Enhanced security practices and compliance</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Information Technology Desktop Support (Internship)</h4>
                                <h5>Aug 2023 - Sep 2023</h5>
                                <p><em>Oman Air, Muscat, Oman</em></p>
                                <ul>
                                    <li>Managed Active Directory for streamlined access control</li>
                                    <li>Provided IT hardware and software support</li>
                                    <li>Resolved technical issues to improve system uptime</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* Second column - newer experiences */}
                            <div className="resume-item">
                                <h4>Research Assistant</h4>
                                <h5>Feb 2024 - Present</h5>
                                <p><em>MYTechLab, Dalhousie University</em></p>
                                <ul>
                                    <li>Conducting research in Cybersecurity under Dr. Srini Sampalli's supervision</li>
                                    <li>Participating in weekly meetings to discuss research progress and collaborate with team members</li>
                                    <li>Contributing to multiple projects focused on improving cybersecurity measures</li>
                                    <li>Developing and implementing innovative security solutions</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Education and Skills Development (Internship)</h4>
                                <h5>Jul 2024 - Aug 2024</h5>
                                <p><em>Injaz Oman, Muscat, Oman</em></p>
                                <ul>
                                    <li>Developed educational programs for 500+ students</li>
                                    <li>Enhanced student engagement through leadership initiatives</li>
                                    <li>Balanced responsibilities across two internships, refining skills in time management and public speaking</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Information Security (Internship)</h4>
                                <h5>Aug 2024 - Sep 2024</h5>
                                <p><em>Oman Broadband, Muscat, Oman</em></p>
                                <ul>
                                    <li>Identified and mitigated 15+ critical system vulnerabilities</li>
                                    <li>Improved security posture by 30% through audits</li>
                                    <li>Implemented advanced security services with external vendors</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Teaching Assistant</h4>
                                <h5>Sep 2024 - Dec 2024</h5>
                                <p><em>Dalhousie University, Halifax, NS</em></p>
                                <ul>
                                    <li>CSCI 2110: Data Structures and Algorithms</li>
                                    <li>Delivered weekly labs with a fellow TA, guiding students through course material</li>
                                    <li>Reviewed lab guidelines and provided student support as needed</li>
                                    <li>Graded labs, offering constructive feedback for improvement</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Teaching Assistant and Marker</h4>
                                <h5>Sep 2024 - Dec 2024</h5>
                                <p><em>Dalhousie University, Halifax, NS</em></p>
                                <ul>
                                    <li>CSCI 3171: Network Computing</li>
                                    <li>Delivered weekly labs with a fellow TA, guiding students through course material</li>
                                    <li>Reviewed lab guidelines and provided student support as needed</li>
                                    <li>Graded labs and assignments, offering helpful feedback for improvement</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Demonstrator</h4>
                                <h5>Jan 2025 - Present</h5>
                                <p><em>Dalhousie University, Halifax, NS</em></p>
                                <ul>
                                    <li>CSCI 4176: Mobile Computing</li>
                                    <li>Delivered weekly labs with a fellow TA, guiding students through course material</li>
                                    <li>Reviewed lab guidelines and provided student support as needed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Awards/Certificates Section */}
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Awards & Certificates</h3>
                        <div className="resume-item">
                            <h4>Google Cybersecurity Professional Certificate</h4>
                            <h5>Sep 2023 - In Progress</h5>
                            <p><em>Coursera</em></p>
                            <ul>
                                <li>Foundations of Cybersecurity</li>
                                <li>Play It Safe: Manage Security Risks</li>
                                <li>Connect and Protect: Networks and Network Security</li>
                                <li>Tools of the Trade: Linux and SQL</li>
                                <li>Assets, Threats, and Vulnerabilities</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Amateur Radio License</h4>
                            <h5>Jan 2021 - Present</h5>
                            <p><em>ROARS</em></p>
                            <ul>
                                <li>Passed the Amateur Radio License test in VHF/UHF frequencies</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Full Grant Scholarship</h4>
                            <h5>Sep 2019 - Present</h5>
                            <p><em>Ministry of Higher Education, Research and Innovation, Oman</em></p>
                            <ul>
                                <li>Granted a Full Grant Scholarship by the Ministry of Higher Education of Oman to pursue a Bachelor's degree in Computer Science at Dalhousie University.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Extracurricular Activities Section */}
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Extracurricular Activities</h3>
                        <div className="resume-item">
                            <h4>President</h4>
                            <h5>Apr 2023 - Apr 2024</h5>
                            <p><em>Omani Students Association, Dalhousie University</em></p>
                            <ul>
                                <li>Led a team of 10+ members to organize events and trips</li>
                                <li>Secured internship opportunities through partnerships</li>
                                <li>Increased student participation by 20%</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Volunteer</h4>
                            <h5>Feb 2024 - Feb 2024</h5>
                            <p><em>Tech Career Fair</em></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
