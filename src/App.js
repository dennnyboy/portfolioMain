import React from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Contact2 from './components/contact2.js';
import Footer from './components/Footer.js'
import './App.css';
import ParticlesComponent from './components/Particles.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="particles-overlay-container" id='home'>
          <ParticlesComponent id="tsparticles" />
          <div className="overlay-text">
            <h1>Hello, My Name is Dennis</h1>
            <p>Rising Senior at Western Governors University Studying Computer Science with career interests in Full Stack Development.</p>
          </div>
        </div>
          <About id="about" />
          <Skills id="skills" />
          <Projects id="project" />
          <Contact id="contact" />
          <Contact2 />
          <Footer id="footer"/>
      </main>
      <a href="https://docs.google.com/document/d/e/2PACX-1vSXOpZ0v_c3E99BMJK_OqAesCjT6rQj0aWrDpZEEpmMQWRPfZiv7vbJlmMKhfI6uhY4VPV633c8LCLB/pub" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <button className="stayBottom">View My Resume</button>
    </a>
      
    </div>
  );
}

export default App;
