import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "HTML",
        "CSS",
        "JQuery",
        "Javascript",
        "Bootstrap",
        "SASS",
        "Wordpress",
        
      ],
      description:
        "Crafting responsive and interactive user interfaces with a focus on user experience.",
    },
    {
      title: "Backend Development",
      skills: [
        "MySQL",
        "MongoDB",
        "Express",
        "Node",
        "Webpack",
        "GraphQl",
        "Apollo-Servers",
        "PHP",
      ],
      description:
        "Building robust server, database, and application logic ensuring scalability and performance.",
    },
    {
      title: "Design & Marketing Tools",
      skills: [
        "Adobe Photoshop",
        "Adobe XD",
        "Adobe Illustrator",
        "Figma",
        "Google Suite",
        "SEMrush",
        "Ahrefs",
        "HubSpot",
        "Screaming Frog",
      ],
      description:
        "Designing visually stunning graphics and user interfaces with attention to detail and creativity.",
    },
  ];

  return (
    <div className="section skills">
      <div className="intro">
        <h2>A Few Things I'm Good at</h2>
        <p>
          I am passionate about creating dynamic, user-friendly web experiences
          and developing innovative digital marketing strategies. I thrive on
          combining technical skills with creative thinking to build websites
          that not only look great but also engage users effectively. Here is a
          glimpse at some of the tools that I use to achieve seamless web
          development and effective digital marketing strategies{" "}
        </p>
      </div>
      <div className="skills-container">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <ul>
              {category.skills.map((skill) => (
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
