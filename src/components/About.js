import React from 'react';
import './About.css';
import SchoolLogo1 from './Images/fsw.png';
import SchoolLogo2 from './Images/wgu.png';
import SchoolLogo3 from './Images/ucf.png';

function About(props) {
  return (
    <div id={props.id} className="section about">
      <div className="container">
        <div className="about-me">
          <h2>About Me</h2>
          <p>Hello! my name is Dennis Khaperskov, I am a senior at Western Governors University, with a passion for Full-Stack Web Development. With a robust academic background, I've immersed myself in mastering technologies across both front-end and back-end spectrums, including HTML, CSS, JavaScript, and Node.js. My journey is fueled by a passion for technology and a commitment to transforming ideas into functional, user-centric digital experiences. Eager to dive into the tech industry, I'm looking for opportunities to collaborate, innovate, and grow as a developer. </p>
          <p>I'm continuously looking for new challenges and opportunities to grow professionally and personally.</p>
        </div>
        <div className="education-section">
          <h2>Education</h2>
          <div className="education-container">
            <div className="education-entry">
              <img src={SchoolLogo1} alt="School Logo" className="school-logo" />
              <div className="education-info">
                <p><strong>Florida SouthWestern State College</strong></p>
                <p>Associates Degree</p>
                <p>GPA: 3.5</p>
                <p>Graduated: 2022</p>
              </div>
            </div>
            <div className="education-entry">
            <img src={SchoolLogo2} alt="School Logo" className="school-logo" />
              <div className="education-info">
                <p><strong>Western Governors University</strong></p>
                <p>B.S. in Computer Science</p>
                <p>GPA: 3.6</p>
                <p>Graduation: 2024</p>
              </div>
            </div>
            <div className="education-entry">
            <img src={SchoolLogo3} alt="School Logo" className="school-logo" />
              <div className="education-info">
                <p><strong>University of Central Florida</strong></p>
                <p>Full Stack Web Development</p>
                <p>Certficate</p>
                <p>Graduated: 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;