import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5, faCss3Alt, faJs, faPhp, faReact, faJava, faLinux, faPython,
    faRProject, faAndroid, faBootstrap, faFigma, faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase as solidFaDatabase } from '@fortawesome/free-solid-svg-icons';

const skillsData = [
    { name: "HTML", icon: faHtml5, color: "#E34F26" },
    { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "PHP", icon: faPhp, color: "#777BB4" },
    { name: "React", icon: faReact, color: "#61DAFB" },
    { name: "Java", icon: faJava, color: "#007396" },
    { name: "MySQL", icon: solidFaDatabase, color: "#4479A1" },
    { name: "Linux", icon: faLinux, color: "#FCC624" },
    { name: "Python", icon: faPython, color: "#3776AB" },
    { name: "R Language", icon: faRProject, color: "#276DC3" },
    { name: "Android", icon: faAndroid, color: "#3DDC84" },
    { name: "Bootstrap", icon: faBootstrap, color: "#7952B3" },
    { name: "Figma", icon: faFigma, color: "#F24E1E" },
    { name: "Git", icon: faGitAlt, color: "#F05032" },
];

function Skills() {
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                    <p></p>
                </div>
                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="skill-icon-wrapper">
                            <div className="skill-icon" style={{ color: skill.color }}>
                                <FontAwesomeIcon icon={skill.icon} size="3x" />
                            </div>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
