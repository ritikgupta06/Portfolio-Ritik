import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faLocationDot,
  faMessage
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> ritikgupta0610@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Kanpur, India
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about-section">About</a></li>
            <li><a href="#projects-section">Projects</a></li>
            <li><a href="/connect">Connect</a></li>
            <li><a href="/download-resume">Resume</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Me</h4>
          <ul className="social-media">
            <li>
              <a href="https://github.com/ritikgupta06" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ritikgupta2026/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ritik_g_u_p_t_a_/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get in Touch</h4>
          <p>Have a project in mind or want to collaborate? Let's connect!</p>
          <a href="mailto:ritikgupta0610@gmail.com" className="get-in-touch-button">
            <FontAwesomeIcon icon={faMessage} /> Send Message
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ritik Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
