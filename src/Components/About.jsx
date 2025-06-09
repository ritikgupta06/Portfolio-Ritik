import React from 'react';
import './About.css'; // Ensure you create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faBootstrap, 
  faPython, faGitAlt, faDocker, faAws, faFigma
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, faServer, faMobileScreen, faCloud, 
  faCode, faTools, faLaptopCode, faTerminal
} from '@fortawesome/free-solid-svg-icons';

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
            Hello there! I'm Ritik Gupta, a passionate full-stack developer with a strong foundation in both frontend and backend technologies. My journey in software development began with a deep curiosity about how technology shapes our world, which led me to explore various programming languages and frameworks.
          </p>

          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-container">
            <div className="skill-category">
              <h4><FontAwesomeIcon icon={faCode} /> Programming Languages</h4>
              <div className="skill-items">
                <div className="skill-item">
                  <FontAwesomeIcon icon={faJs} className="skill-icon" />
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faPython} className="skill-icon" />
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faTerminal} className="skill-icon" />
                  <span>C/C++</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                  <span>SQL</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h4><FontAwesomeIcon icon={faLaptopCode} /> Frontend Development</h4>
              <div className="skill-items">
                <div className="skill-item">
                  <FontAwesomeIcon icon={faReact} className="skill-icon" />
                  <span>React.js</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faReact} className="skill-icon" />
                  <span>Next.js</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                  <span>HTML</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
                  <span>CSS</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h4><FontAwesomeIcon icon={faServer} /> Backend & APIs</h4>
              <div className="skill-items">
                <div className="skill-item">
                  <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faServer} className="skill-icon" />
                  <span>Express.js</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faServer} className="skill-icon" />
                  <span>RESTful APIs</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faCode} className="skill-icon" />
                  <span>GraphQL</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h4><FontAwesomeIcon icon={faMobileScreen} /> Mobile Development</h4>
              <div className="skill-items">
                <div className="skill-item">
                  <FontAwesomeIcon icon={faReact} className="skill-icon" />
                  <span>React Native</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faMobileScreen} className="skill-icon" />
                  <span>Expo</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h4><FontAwesomeIcon icon={faCloud} /> Cloud & DevOps</h4>
              <div className="skill-items">
                <div className="skill-item">
                  <FontAwesomeIcon icon={faAws} className="skill-icon" />
                  <span>AWS</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faDocker} className="skill-icon" />
                  <span>Docker</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faCloud} className="skill-icon" />
                  <span>Kubernetes</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faCloud} className="skill-icon" />
                  <span>Vercel</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h4><FontAwesomeIcon icon={faDatabase} /> Databases</h4>
              <div className="skill-items">
                <div className="skill-item">
                  <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                  <span>MySQL</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h4><FontAwesomeIcon icon={faTools} /> Tools & Platforms</h4>
              <div className="skill-items">
                <div className="skill-item">
                  <FontAwesomeIcon icon={faGitAlt} className="skill-icon" />
                  <span>Git</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faGitAlt} className="skill-icon" />
                  <span>GitHub/GitLab</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faCode} className="skill-icon" />
                  <span>VSCode</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faTools} className="skill-icon" />
                  <span>Postman</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faFigma} className="skill-icon" />
                  <span>Figma</span>
                </div>
                <div className="skill-item">
                  <FontAwesomeIcon icon={faTools} className="skill-icon" />
                  <span>Chrome DevTools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
