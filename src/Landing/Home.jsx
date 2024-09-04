// Home.jsx
import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Footer from '../Components/Footer.jsx';
import Projects from '../Components/Projects.jsx';
import './Home.css'; // Ensure you create this CSS file
import About from '../Components/About.jsx';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <>
      <Navbar />

      <div className="content">
        <div className="photo-container">
          <img src="main.png" alt="Ritik Gupta" className="photo" />
        </div>
        <div className="text-container">
          <h1 className="name">
            <TypeAnimation
              sequence={[
                'Hi, I am Ritik Gupta',
                1000, // Wait 1s
                '',
                500, // Wait 0.5s
              ]}
              speed={25} // Custom Speed from 1-99 - Default is 40
              repeat={Infinity} // Repeat indefinitely
            />
          </h1>
          <p className="description">
            Full-stack developer skilled in building responsive web applications. I blend front-end design with back-end technology to create engaging, efficient solutions. Passionate about coding and delivering exceptional user experiences.
          </p>
        </div>
      </div>

      {/* Add an id to the About section */}
      <section id="about-section">
        <About />
      </section>
      <section id="projects-section">
      <Projects/>
      </section>

      <Footer />
    </>
  );
}

export default Home;
