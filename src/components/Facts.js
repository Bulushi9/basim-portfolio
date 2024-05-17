import React from 'react';

function Facts() {
    return (
        <section id="facts" className="facts">
            <div className="container">
                <div className="section-title">
                    <h2>Facts</h2>
                    <p>Some interesting facts about my career and experience.</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-emoji-smile"></i>
                            <span>232</span>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="bi bi-journal-richtext"></i>
                            <span>521</span>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="bi bi-headset"></i>
                            <span>1,453</span>
                            <p>Hours Of Support</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="bi bi-people"></i>
                            <span>32</span>
                            <p>Hard Workers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Facts;
