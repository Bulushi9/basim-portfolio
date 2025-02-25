import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Header from './Header';
import Hero from './Home';
import About from './About';
import Skills from './Skills';
import Resume from './Resume';
import Portfolio from './Projects';
import Contact from './Contact';
import MotivationalQuotes from './MotivationalQuotes';

function App() {
  return (
    <ThemeProvider>
      <div className="App" data-theme="light">
        <Header />
        <Hero />
        <MotivationalQuotes />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;