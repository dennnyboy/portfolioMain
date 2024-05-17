import React from "react";
import "./Contact.css";

const Contact = () => {
  const email = "Dennis11@live.com"; // Replace this with your actual email address

  return (
    <div className="section contact">
      <di className="container">
        <h2>Ready to Connect?</h2>
        <p>
          I would love to connect and share my passion for Web Development and
          Digital Marketing with you. <br />
          Whether you need assistance with a small project or want me to join
          your team <br />
          my inbox is always open.{" "}
        </p>
        <a href={`mailto:${email}`} className="email-button">
          Email Me
        </a>
      </di>
    </div>
  );
};

export default Contact;
