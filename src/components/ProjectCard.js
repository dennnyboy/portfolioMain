// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ name, description, imageUrl, projectUrl, codeUrl, technologies }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <h2>{name}</h2>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <img key={index} src={tech.src} alt={tech.name} title={tech.name} />
          ))}
        </div>
        <p>{description}</p>
        <div className="button-container">
          {projectUrl && <a href={projectUrl} className="project-button">View Project</a>}
          {codeUrl && <a href={codeUrl} className="project-button code-button">View Code</a>}
        </div>
      </div>
      <div className="project-image">
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  );
};


export default ProjectCard;