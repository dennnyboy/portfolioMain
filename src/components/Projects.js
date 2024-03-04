
import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard'; 
import htmlsvg from './Images/htmlsvg.svg';
import nodesvg from './Images/nodesvg.svg';
import javascriptsvg from './Images/javascriptsvg.svg';
import csssvg from './Images/csssvg.svg';
import wordpresssvg from './Images/wordpresssvg.svg';
import reactsvg from './Images/reactsvg.svg';
import projectImage1 from './Images/portfolio-scrn.png';
import projectImage2 from './Images/vertechs-scrn.png';
import projectImage3 from './Images/arkansas-scrn.png';
import projectImage4 from './Images/budget tracker-scrn.png';


const Projects = (props) => {
  const projectData = [
    {
      name: "This Portfolio Site",
      description: "The very site that you are currently looking at was built from the ground up using React.js and CSS with all of the code being available on my Github.",
      imageUrl: projectImage1, 
      codeUrl: "https://github.com/dennnyboy/portfolioMain",
      technologies: [{src: reactsvg, name: "React"}, {src: csssvg, name: "CSS"}]
    },
    {
      name: "Vertechs Electric",
      description: "A WordPress website made for an electrical company based out of Washington State. Built using WordPress and Divi, with a focus for mobile responsivness and SEO scalability.",
      imageUrl: projectImage2, 
      projectUrl: "https://vertechselectric.com/",
      technologies: [{src: wordpresssvg, name: "WordPress"}]
    },
    {
      name: "El Dorado Arkansas",
      description: "This project was built to replicate the city of El Dorado in Arkansas website. Built only using HTML, CSS, and Javascipt. The point of this project was to focus on attention to detail and best practices.",
      imageUrl: projectImage3, 
      projectUrl: "https://dennnyboy.github.io/Eldorado-site/",
      codeUrl: "https://github.com/dennnyboy/Eldorado-site",
      technologies: [{src: htmlsvg, name: "HTML"}, {src: csssvg, name: "CSS"}, {src: javascriptsvg, name: "JavaScript"}]
    },
    {
      name: "Budget Tracker",
      description: "This budget tracker allows a user to track their spending throughout a certain period of time, for example during vaction. With or without internet connection the application will still save the users inputs. ",
      imageUrl: projectImage4, 
      codeUrl: "https://github.com/dennnyboy/budget-tracker",
      technologies: [{src: htmlsvg, name: "HTML"},{src: csssvg, name: "CSS"}, {src: nodesvg, name: "Node.js"} ]
    },
   
  ];

  return (
    <div id={props.id} className="section project">
      <h2>Some of the Stuff I've Worked on</h2>
      <p>These are just some of the few projects that I have worked on. If you would like to see more please head over to my Github. </p>
      <div className="projects-container"> 
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;