import React from 'react';
import { ReactTyped } from 'react-typed';

function Home() {
  return (
    <section id="home" className="d-flex flex-column justify-content-center align-items-center">
      <div className="home-container" data-aos="fade-in">
        <h1 className="home-title">Basim Al Bulushi</h1>
        <p className="home-subtitle">I am a <span className="typed-container">
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

export default Home;
