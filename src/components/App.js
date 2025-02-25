import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';
// Fix import paths
import HomePage from '../components/Home';
import AboutPage from '../components/About';
import ResumePage from '../components/Resume';
import ProjectsPage from '../components/Projects';
import ContactPage from '../components/Contact';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    <Header />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/resume" element={<ResumePage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;