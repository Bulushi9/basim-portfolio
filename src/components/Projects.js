import React from 'react';

function Projects() {
  const projectsData = [
    {
      title: "Book Box",
      description: "An android application that helps students, and people to find book boxes that are around the city. Scan books with their barcode (ISBN). Integrated with Google Maps API.",
      image: "path_to_image",
      github: "https://github.com/Bulushi9/BookBox-Kotlin"
    },
    {
      title: "ABLE Application",
      description: "Made a Low, Mid and High-Fidelity application that helps elderly people interact with people around them and be productive throughout their day. Help the older people to be healthier and fit by working out.",
      image: "path_to_image",
      github: "https://github.com/your-repository-url"
    },
    {
      title: "Cipher Server Application",
      description: "Made an application by using Java to encrypt the inputted message from the client in Caesar and Vigenère method before sending them to the server.",
      image: "path_to_image",
      github: "https://github.com/Bulushi9/CipherServer-Java"
    },
    {
      title: "Scratch Game",
      description: "Global Game Jam & Ubisoft - Created a game that can work both on Mac and Windows from scratch and made it to be functional in 48 hours.",
      image: "path_to_image",
      github: "https://github.com/adnanAbdulRahim/GameJam"
    },
    {
      title: "Quick Cash Application",
      description: "Made an Android application from scratch. The application helps customers find expertise in a specific field to finish a job for them and works as a freelancing service.",
      image: "path_to_image",
      github: "https://github.com/Bulushi9/QuickCash-Java"
    },
    {
      title: "Tiger News Web page",
      description: "Made a website that posts the latest news in various sectors. The web page includes a sign-in page in which it encrypts the inputted character.",
      image: "path_to_image",
      github: "https://github.com/Bulushi9/TigerNewsWepbage-HTML"
    },
    {
      title: "Academic Timetable Web page",
      description: "Made a web page from scratch to show the available courses in the university with the number of seats available in each course.",
      image: "path_to_image",
      github: "https://github.com/Bulushi9/AcademicTimetable-HTML"
    },
  ];

  return (
    <section id="projects" className="projects section-bg">
        <div className="container">
            <div className="section-title">
                <h2>Projects</h2>
                <p>Some of the projects I have worked on.</p>
            </div>
            <div className="row projects-container">
                {projectsData.map((project, index) => (
                    <div key={index} className="col-lg-4 col-md-6 projects-item filter-app">
                        <div className="projects-wrap">
                            <img src={project.imageUrl} className="img-fluid" alt={project.title}/>
                            <div className="project-info">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <a href={project.githubUrl} className="btn-github" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
}

export default Projects;