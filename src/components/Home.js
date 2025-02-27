import React from 'react';
import { ReactTyped } from 'react-typed';
import MotivationalQuotes from '../components/MotivationalQuotes';

function Home() {
  return (
    <>
      <section id="home" className="d-flex flex-column justify-content-center align-items-center">
        <div className="home-container" data-aos="fade-in">
          <h1 className="home-title">Basim Al Bulushi</h1>
          <p className="home-subtitle">I am a <span className="typed-container">
            <ReactTyped
              strings={['Cybersecurity Analyst','Developer', 'Photographer']}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </span></p>
        </div>
      </section>
      
      <section className="quote-section">
        <div className="quote-container">
          <div className="quote-header">
            <h2>Quote of the Day</h2>
            <div className="quote-divider">
              <span className="quote-icon"><i className="fas fa-quote-left"></i></span>
            </div>
          </div>
          <MotivationalQuotes />
        </div>
      </section>
    </>
  );
}

export default Home;
