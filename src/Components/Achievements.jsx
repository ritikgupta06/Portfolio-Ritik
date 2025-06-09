import React, { useState, useEffect } from 'react';
import './Achievements.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrophy, 
  faCode, 
  faShieldAlt, 
  faMedal,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const achievements = [
  {
    title: "TCS CodeVita 2024",
    description: "26th Regional (Lucknow), 248th Global (Round 1), 947th Global (Round 2)",
    icon: faCode,
    link: "https://drive.google.com/file/d/1Kzjy72VEg87akb0LvVcAvcxk4rXMR81b/view?usp=drive_link",
    category: "Competitive Programming"
  },
  {
    title: "TechExpo PSIT Winner",
    description: "Built an innovative tech project demonstrating problem-solving and creativity",
    icon: faTrophy,
    link: "https://drive.google.com/file/d/1Ozg5v-dNfga-JcZzRQ8VjktRv5mVnR-S/view?usp=sharing",
    category: "Project Showcase"
  },
  {
    title: "LeetCode Knight",
    description: "Max Rating: 2021, solved 500+ problems in DSA",
    icon: faMedal,
    link: "https://leetcode.com/u/ritik",
    category: "Problem Solving"
  },
  {
    title: "HackIITK Finalist",
    description: "Finalist in national cybersecurity hackathon by IIT Kanpur",
    icon: faShieldAlt,
    link: "https://drive.google.com/file/d/1tmk8Ali-gWhE0Rhad-xTlX9kGJt_UE2d/view?usp=sharing",
    category: "Cybersecurity"
  },
  {
    title: "HACK 5.0 Winner",
    description: "Won at a 48-hour hackathon organized by CSEC NITH, NIT Hamirpur",
    icon: faTrophy,
    link: "https://hack5.devfolio.co/",
    category: "Hackathon"
  }
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="achievements-section" id="achievements-section">
      <h1 className="achievements-heading">Achievements</h1>
      <div 
        className="achievements-carousel"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="carousel-button prev" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        
        <div className="achievements-container">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`achievement-card ${index === currentIndex ? 'active' : ''}`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
            >
              <div className="achievement-icon">
                <FontAwesomeIcon icon={achievement.icon} />
              </div>
              <h3>{achievement.title}</h3>
              <span className="achievement-category">{achievement.category}</span>
              <p>{achievement.description}</p>
              <a 
                href={achievement.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="achievement-link"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        <button className="carousel-button next" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <div className="carousel-indicators">
          {achievements.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 