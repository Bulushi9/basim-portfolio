import React, { useState } from 'react';
import Modal from 'react-modal';

import bookBoxPic from '../img/BookBox.png';
import AblePic from '../img/ABLEApp.png';
import cipherServerPic from '../img/CaeserCipher.png';
import quickCashPic from '../img/QuickCash.png';
import tigerNewsPic from '../img/TigerNews.png';
import keyloggerPic from '../img/KeyLogger.png';
import RootScratchGame from '../img/Scratch.png';

const projectsData = [
    {
        title: "Book Box",
        description: "An android application that helps students, and people to find book boxes that are around the city. Scan books with their barcode (ISBN). Integrated with Google Maps API.",
        imageUrl: bookBoxPic,
        githubUrl: "https://github.com/Bulushi9/BookBox-Kotlin"
    },
    {
        title: "ABLE Application",
        description: "Made a Low, Mid and High-Fidelity application that helps elderly people interact with people around them and be productive throughout their day. Help the older people to be healthier and fit by working out.",
        imageUrl: AblePic,
        githubUrl: "https://www.figma.com/design/mXctt3sUC0RYP0IV6BkBN6/ABLE-Project---High-Fi"
    },
    {
        title: "Cipher Server Application",
        description: "Made an application by using Java to encrypt the inputted message from the client in Caesar and Vigenère method before sending them to the server.",
        imageUrl: cipherServerPic,
        githubUrl: "https://github.com/Bulushi9/CipherServer-Java"
    },
    {
        title: "Root Scratch Game",
        description: "Global Game Jam & Ubisoft - Created a game that can work both on Mac and Windows from scratch and made it to be functional in 48 hours.",
        imageUrl: RootScratchGame,
        githubUrl: "https://github.com/adnanAbdulRahim/GameJam"
    },
    {
        title: "Quick Cash Application",
        description: "Made an Android application from scratch. The application helps customers find expertise in a specific field to finish a job for them and works as a freelancing service.",
        imageUrl: quickCashPic,
        githubUrl: "https://github.com/Bulushi9/QuickCash-Java"
    },
    {
        title: "Tiger News Web page",
        description: "Made a website that posts the latest news in various sectors. The web page includes a sign-in page in which it encrypts the inputted character.",
        imageUrl: tigerNewsPic,
        githubUrl: "https://web.cs.dal.ca/~bulushi/project_Yoda2/index.php"
    },
    {
        title: "Keylogger Security Tool",
        description: "Developed a secure keylogger application in Python for cybersecurity research and testing. Features include keystroke monitoring, clipboard tracking, and secure log file management. Built with ethical security testing and research purposes in mind.",
        imageUrl: keyloggerPic,
        githubUrl: "https://github.com/Bulushi9/keylogger"
    },
];

function Projects() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Projects</h2>
                    <p>Some of the projects I have worked on.</p>
                </div>
                <div className="projects-container">
                    {projectsData.map((project, index) => (
                        <div key={index} className="projects-item" onClick={() => openModal(project)}>
                            <div className="projects-wrap">
                                <img src={project.imageUrl} className="img-fluid project-thumbnail" alt={project.title} />
                                <div className="project-title">
                                    {project.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Project Details"
                    className="modal"
                    overlayClassName="modal-overlay"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.75)',
                            zIndex: 1000
                        },
                        content: {
                            top: '55%',
                            maxHeight: '80vh'
                        }
                    }}
                >
                    <div className="modal-content">
                        <h2>{selectedProject.title}</h2>
                        <div className="modal-image-container">
                            <img 
                                src={selectedProject.imageUrl} 
                                className="project-image" 
                                alt={selectedProject.title} 
                            />
                        </div>
                        <p>{selectedProject.description}</p>
                        <div className="modal-buttons">
                            <a 
                                href={selectedProject.githubUrl} 
                                className="btn-github" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i> View on GitHub
                            </a>
                            <button onClick={closeModal} className="btn-close">
                                Close
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    );
}

export default Projects;
