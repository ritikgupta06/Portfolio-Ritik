import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToSection: sectionId } });
    } else {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile navbar
  };

  return (
    <div id="main-nav-content">
      <nav className="navbar">
        <div className="navbar-container">
          <img src="icon.jpg" alt="logo" className="logo" />
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <Link to="/" className="navbar-link">Home</Link>
            <a
              href="#about-section"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('about-section');
              }}
            >
              About
            </a>
            <a
              href="#projects-section"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('projects-section');
              }}
            >
              Projects
            </a>
            <a
              href="#achievements-section"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('achievements-section');
              }}
            >
              Achievements
            </a>
            <Link to="/connect" className="navbar-link">Connect</Link>
            <Link to="/download-resume" className="navbar-link">Resume</Link>
          </div>
          <div id="btn-content">
            <button className="navbar-toggle" onClick={toggleNavbar}>
              <span className="navbar-toggle-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
