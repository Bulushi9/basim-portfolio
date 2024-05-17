import React from 'react';

function Resume() {
    return (
        <section id="resume" className="resume">
            <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachelor of Computer Science</h4>
                            <h5>2020 - 2025</h5>
                            <p><em>Dalhousie University, Canada</em></p>
                            <ul>
                                <li>Certificate of Communication Technologies</li>
                                <li>Certificate of Mobile & Web Development</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Experiences</h3>
                        <div className="resume-item">
                            <h4>Information Technology Desktop Support (Internship)</h4>
                            <h5>Aug 2023 - Sep 2023</h5>
                            <p><em>Oman Air, Oman</em></p>
                            <ul>
                                <li>Active Directory management</li>
                                <li>Desktop application support</li>
                                <li>Utilized Laravel for software development</li>
                                <li>Provided IT hardware and software Support</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>Information Security Officer (Internship)</h4>
                            <h5>Jun 2023 - Jul 2023</h5>
                            <p><em>Ahli Bank, Oman</em></p>
                            <ul>
                                <li>Gained practical experience and knowledge in information security</li>
                                <li>Covered various aspects of Information security, including policies and procedures</li>
                                <li>Utilized management tools to enhance security practices</li>
                                <li>Raised awareness about information security among team members</li>
                                <li>Implemented security controls to safeguard sensitive data</li>
                                <li>Got familiar with security protocols to ensure compliance</li>
                                <li>Worked with Security Information and Event Management (SIEM) tools to monitor and manage security events</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>Information Technology Help Desk (Internship)</h4>
                            <h5>Jun 2022 - Jul 2022</h5>
                            <p><em>National Bank of Oman, Oman</em></p>
                            <ul>
                                <li>Gained practical experience and knowledge in information security</li>
                                <li>Covered various aspects of Information security, including policies and procedures</li>
                                <li>Utilized management tools to enhance security practices</li>
                                <li>Raised awareness about information security among team members</li>
                                <li>Implemented security controls to safeguard sensitive data</li>
                                <li>Got familiar with security protocols to ensure compliance</li>
                                <li>Worked with Security Information and Event Management (SIEM) tools to monitor and manage security events</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>Internship Trainee</h4>
                            <h5>Jun 2023 - Jul 2023</h5>
                            <p><em>Oman Cement Company S.A.O.G, Oman</em></p>
                            <ul>
                                <li>Participated in meetings to explore new service opportunities with external companies</li>
                                <li>Assisted in SAP S/4HANA project implementation and testing</li>
                                <li>Facilitated vendor communications for equipment procurement</li>
                                <li>Organized and managed files and reports</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Awards/Certificates Section */}
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Awards & Certificates</h3>
                        <div className="resume-item">
                            <h4>Google Cybersecurity Certificate</h4>
                            <h5>Sep 2023 - Present</h5>
                            <p><em>Coursera</em></p>
                            <ul>
                                <li>Foundations of Cybersecurity</li>
                                <li>Play it Safe: Manage Security Risks</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Amateur Radio License</h4>
                            <h5>Jan 2021 - Present</h5>
                            <p><em>ROARS</em></p>
                            <ul>
                                <li>Passed the Amateur Radio License test in Oman in VHF/UHF frequencies</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Full Scholarship</h4>
                            <h5>Sep 2019 - Present</h5>
                            <p><em>MOHERI</em></p>
                            <ul>
                                <li>Got a full scholarship from the Ministry of Education in Oman for achieving high grades in high school</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Extra-curricular Activities Section */}
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Extra-curricular Activities</h3>
                        <div className="resume-item">
                            <h4>President</h4>
                            <h5>Apr 2023 - Apr 2024</h5>
                            <p><em>Omani Students Association at Dalhousie University</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Event Coordinator</h4>
                            <h5>Apr 2022 - Apr 2023</h5>
                            <p><em>Omani Students Association at Dalhousie University</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Volunteer</h4>
                            <h5>Feb 2022 - Feb 2022</h5>
                            <p><em>Tech Career Fair</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Volunteer</h4>
                            <h5>Jan 2021 - Jan 2022</h5>
                            <p><em>Street Squad at Dalhousie Student Union</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Full-time administrative (Volunteer)</h4>
                            <h5>Jun 2021 - Sep 2021</h5>
                            <p><em>Ministry of Health of Oman</em></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
