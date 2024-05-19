import React from 'react';
import Header from './Header';
import Hero from './Home';
import About from './About';
// import Facts from './Facts';
import Skills from './Skills';
import Resume from './Resume';
import Portfolio from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import MotivationalQuotes from './MotivationalQuotes';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      {/* <Facts /> */}
      <Skills />
      <Resume />
      <Portfolio />
      <Testimonials />
      <MotivationalQuotes />
      <Contact />
    </>
  );
}

export default App;