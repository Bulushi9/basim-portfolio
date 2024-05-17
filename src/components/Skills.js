import React from 'react';

function Skills() {
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                    <p>My professional skills matrix.</p>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill">HTML <i className="val">100%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: "100%"}}></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">CSS <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: "90%"}}></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: "75%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
