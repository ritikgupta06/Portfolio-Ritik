import React from "react";
import "./Projects.css"; // Ensure you create this CSS file

const projects = [
  {
    title: "Ignitia 2K25",
    description:
      "Developed the official website and app for the college's Techno-Cultural Fest using Next.js, Node.js, GoLang, and PostgreSQL. Integrated online payment gateways for secure event registration and ticketing. Built a dynamic frontend with Next.js and Tailwind CSS for engaging UI/UX. Deployed on Vercel with serverless functions for fast, reliable performance.",
    technologies: "Next.js, Node.js, GoLang, PostgreSQL, Tailwind CSS, Vercel",
    roles: "Full-Stack Developer, UI/UX Designer, Payment Integration",
    impact:
      "Streamlined event registration and ticketing process with secure payment integration, enhanced user engagement through modern UI/UX design.",
    imageUrl: "/ignitia2k25.png",
    link: "https://ignitia.in/",
  },
  {
    title: "E-Shielded Assessment",
    description:
      "Developed an AI-based recruitment portal using Next.js, Node.js, GoLang, Mistral AI, and PostgreSQL for end-to-end hiring. Integrated Mistral AI for smart candidate evaluation and decision-making. Built a dynamic frontend with Next.js and a robust backend with RESTful API for seamless operations.",
    technologies: "Next.js, Node.js, GoLang, Mistral AI, PostgreSQL, RESTful API",
    roles: "Full-Stack Developer, AI Integration Specialist, System Architect",
    impact:
      "Revolutionized the recruitment process with AI-powered candidate evaluation, streamlined hiring workflow, and data-driven decision making.",
    imageUrl: "/eshield.png",
    link: "https://eshield.vercel.app/",
  },
  {
    title: "Redocx",
    description:
      "Designed and developed an intuitive platform for document collaboration and sharing.",
    technologies: "Next.js, TypeScript, Node.js, RESTful API, AWS, MySQL",
    roles: "Full-Stack Developer, UI/UX Designer",
    impact:
      "Streamlined document management and collaboration for users with advanced sharing and editing features.",
    imageUrl: "/redocx.png",
    link: "https://redocx.onlyritik.me/",
  },
  {
    title: "Ignita 2k24",
    description:
      "Developed the official website for Ignitia 2k24, our college's cultural fest.",
    technologies: "Next.js, TypeScript, Django, RESTful API, AWS, MySQL",
    roles: "UI/UX Designer, Front-End Developer, Front-End Lead",
    impact:
      "Enhanced user engagement with event schedules, registration, and multimedia galleries.",
    imageUrl: "/ignita.png",
    link: "https://ignitia2k24-test.vercel.app/",
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
    link: "https://ritik6g.netlify.app/",
  },
  {
    title: "BusTrek",
    description:
      "Developed an innovative bus management system for college campuses.",
    technologies: "Vite.js, Django, RESTful API, AWS, MongoDB",
    roles: "UI/UX Designer, Front-End Developer, Cloud Integration",
    impact: "Improved transportation logistics efficiency by 30%",
    imageUrl: "/bus.png",
    link: "https://bus-scout.studex.tech/",
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
    link: "examprep.com",
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
