import React from "react";
import "./Projects.css"; // Ensure you create this CSS file

const projects = [
  {
    title: "Redocx",
    description:
      "Designed and developed an intuitive platform for document collaboration and sharing.",
    technologies: "Next.js, TypeScript, Node.js, RESTful API, AWS, MySQL",
    roles: "Full-Stack Developer, UI/UX Designer",
    impact:
      "Streamlined document management and collaboration for users with advanced sharing and editing features.",
    imageUrl: "/redocx.png", // Ensure this path matches the actual image location
    link: "https://redocx.onlyritik.me/",
  },

  {
    title: "Ignita 2k24",

    description:
      "Developed the official website for Ignitia 2k24, our college’s cultural fest.",
    technologies: "Next.js, TypeScript, Django, RESTful API, AWS, MySQL",
    roles: "UI/UX Designer, Front-End Developer, Front-End Lead",
    impact:
      "Enhanced user engagement with event schedules, registration, and multimedia galleries.",
    imageUrl: "/ignita.png",
    link: "https://ignitia2k24-test.vercel.app/", // Replace with the actual project link
  },
  {
    title: "Engineering Grace",
    description:
      "Provides interactions with mentors to suggest the latest courses and career pathways.",
    technologies: "Next.js, Node.js, SQL, REST API",
    roles: "Full-Stack Developer, UI/UX Designer, Mentor Coordinator",
    impact:
      "Enabled students to make informed decisions on career pathways through tailored guidance.",
    imageUrl: "/eg.png",
    link: "https://ritik6g.netlify.app/", // Replace with the actual project link
  },
  {
    title: "BusTrek",

    description:
      "Developed an innovative bus management system for college campuses.",
    technologies: "Vite.js, Django, RESTful API, AWS, MongoDB",
    roles: "UI/UX Designer, Front-End Developer, Cloud Integration",
    impact: "Improved transportation logistics efficiency by 30%",
    imageUrl: "/bus.png",
    link: "https://bus-tracking-system-frontend.itshivam.me/", // Replace with the actual project link
  },
  {
    title: "ExamPrep Question Hub",
    description:
      "Provides access to past year question papers, toppers' notes, and mock tests.",
    technologies: "Django REST Framework, Next.js, React Native, GraphQL",
    roles: "Full-Stack Developer, Project Lead, Database Architect",
    impact:
      "Centralized study material repository with responsive UI and advanced search and filter functionalities.",
    imageUrl: "/ep.png",
    link: "examprep.com", // Replace with the actual project link
  },
];

const Projects = () => {
  return (
    <>
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-text">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-date">{project.date}</p>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies">
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <p className="project-roles">
                <strong>Roles:</strong> {project.roles}
              </p>
              <p className="project-impact">
                <strong>Impact:</strong> {project.impact}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Project
              </a>
            </div>
            <div className="project-image-container">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
