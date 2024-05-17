import React from "react";
import "./About.css";
import SchoolLogo1 from "./Images/fsw.png";
import SchoolLogo2 from "./Images/wgu.png";
import SchoolLogo3 from "./Images/ucf.png";
import SchoolLogo4 from "./Images/itil.webp";
import SchoolLogo5 from "./Images/Google.png";

function About(props) {
  return (
    <div id={props.id} className="section about">
      <div className="container">
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Hello! My name is Dennis Khaperskov and I am a senior at Western
            Governors University. I am passionate about both Web Development and
            Digital Marketing. With skills in HTML, CSS, JavaScript, and
            Node.js, as well as a strong interest in creating impactful digital
            marketing campaigns, I am dedicated to transforming ideas into
            engaging, user-centric digital experiences. I am eager to find
            opportunities to collaborate, innovate, and grow in the tech
            industry.{" "}
          </p>
          <p>
            I'm continuously looking for new challenges and opportunities to
            grow professionally and personally.
          </p>
        </div>
        <div className="education-section">
          <h2>Education & Certficates</h2>
          <div className="education-container">
            <div className="education-entry">
              <img
                src={SchoolLogo1}
                alt="School Logo"
                className="school-logo"
              />
              <div className="education-info">
                <p>
                  <strong>Florida SouthWestern State College</strong>
                </p>
                <p>Associates Degree</p>
                <p>GPA: 3.5</p>
                <p>Graduated: 2022</p>
              </div>
            </div>
            <div className="education-entry">
              <img
                src={SchoolLogo2}
                alt="School Logo"
                className="school-logo"
              />
              <div className="education-info">
                <p>
                  <strong>Western Governors University</strong>
                </p>
                <p>B.S. in Computer Science</p>
                <p>GPA: 3.6</p>
                <p>Graduation: 2024</p>
              </div>
            </div>
            <div className="education-entry">
              <img
                src={SchoolLogo3}
                alt="School Logo"
                className="school-logo"
              />
              <div className="education-info">
                <p>
                  <strong>University of Central Florida</strong>
                </p>
                <p>Full Stack Web Development</p>
                <p>Certficate</p>
                <p>Completed: 2022</p>
              </div>
            </div>
            <div className="education-entry">
              <img
                src={SchoolLogo4}
                alt="School Logo"
                className="school-logo"
              />
              <div className="education-info">
                <p>
                  <strong>ITIL® 4</strong>
                </p>
                <p>Foundation</p>
                <p>Certificate</p>
                <p>Completed: 2024</p>
              </div>
            </div>
            <div className="education-entry">
              <img
                src={SchoolLogo5}
                alt="School Logo"
                className="school-logo"
              />
              <div className="education-info">
                <p>
                  <strong>Google</strong>
                </p>
                <p>Digital Marketing & E-commerce</p>
                <p>Certificate</p>
                <p>Completed: 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
