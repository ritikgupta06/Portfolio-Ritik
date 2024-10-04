import React from 'react';
import './Resume.css'; // Optionally, add custom styles for the Resume component

export const Resume = () => {
  return (
    <div className="resume-container">
      <iframe
        src="/ritik gupta resume.pdf"
        title="Resume"
        className="resume-iframe"
      />
      <div className="download-container">
          <a href="/ritik gupta resume.pdf" download="Resume Ritik.pdf" className="download-button">
            Download Resume
          </a>
          </div>
    </div>
  );
};

export default Resume;
