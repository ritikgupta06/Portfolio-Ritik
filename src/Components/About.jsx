import React from 'react';
import './About.css'; // Ensure you create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-photo-container">
          <img src="icon.jpg" alt="Ritik Gupta" className="about-photo" />
        </div>
        <div className="about-text-container">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            Hello there! I'm Ritik Gupta, currently navigating the dynamic world of technology and academia. My journey into programming began with a curiosity-driven exploration of computer science, which quickly ignited a passion for crafting elegant solutions to intricate problems. As I move through my academic and professional journey, I'm honing my skills in various tech domains that continue to captivate me.
            <br /><br />
            Throughout my studies and work, I've been actively engaging in diverse projects and challenges, seeking opportunities to expand my knowledge and expertise. Whether it's developing robust web applications or delving into complex problems, I am driven by a desire to innovate and make a tangible impact in the tech world. My experiences have also included collaboration with various organizations, contributing to noteworthy projects. I am excited about the future and the potential to shape technology in meaningful ways.
          </p>

          <h3 className="skills-title">Technologies I've recently worked with:</h3>
          <div className="skills-container">
            <div className="skill-item">
              <FontAwesomeIcon icon={faJs} className="skill-icon" />
              <span>JavaScript</span>
            </div>
            
            <div className="skill-item">
              <FontAwesomeIcon icon={faReact} className="skill-icon" />
              <span>React.js</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
              <span>Node.js</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
              <span>Bootstrap</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
              <span>HTML</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
              <span>CSS</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
              <span>Database</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
