import React from 'react';
import './Footer.css';
import linkedin from './Images/linkedin.svg';
import twitter from './Images/x-twitter.svg';
import github from './Images/github.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section footer">
    <div className="site-footer">
      <div className="footer-container">
        <div className="socials">
          <a href="https://github.com/dennnyboy" target="_blank" rel="noopener noreferrer"><img src={github}  alt="github" /></a>
          <a href="https://twitter.com/Dennnyboyy" target="_blank" rel="noopener noreferrer"><img src={twitter}  alt="Twitter" /></a>
          <a href="https://www.linkedin.com/in/dennis-khaperskov-1807441ab/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
        </div>
        <div className="rights">
          <p>© {year} Copyright does not exist. And all rights are not reserved.</p>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;