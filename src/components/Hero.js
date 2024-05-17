import React from 'react';
import { ReactTyped } from 'react-typed';

function Hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1 className="hero-title">Basim Al Bulushi</h1>
        <p className="hero-subtitle">I am a <span className="typed-container">
          <ReactTyped
            strings={['Developer', 'Photographer']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </span></p>
      </div>
    </section>
  );
}

export default Hero;
