import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'HTML', 'CSS', 'JQuery', 'Javascript', 'Bootstrap', 'SASS', 'Wordpress', 'PHP'],
      description: 'Crafting responsive and interactive user interfaces with a focus on user experience.'
    },
    {
      title: 'Backend Development',
      skills: ['MySQL', 'MongoDB', 'Express', 'ReactJS', 'Node', 'Handlebars', 'Webpack', 'GraphQl', 'Apollo-Servers'],
      description: 'Building robust server, database, and application logic ensuring scalability and performance.'
    },
    {
      title: 'Graphics & Design',
      skills: ['Adobe Photoshop', 'Adobe XD', 'Adobe Illustrator', 'Figma'],
      description: 'Designing visually stunning graphics and user interfaces with attention to detail and creativity.'
    }
  ];

  return (
    <div className="section skills">
      <div className="intro">
        <h2>A Few Things I'm Good at</h2>
        <p>I am a passionate software developer with a knack for creating beautiful and functional web applications. My journey in tech spans various disciplines, from designing sleek user interfaces to engineering powerful backend systems. Here's a glimpse into the tools and technologies I've mastered along the way.</p>
      </div>
      <div className="skills-container">
        {skillCategories.map(category => (
          <div key={category.title} className="skill-category">
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <ul>
              {category.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;