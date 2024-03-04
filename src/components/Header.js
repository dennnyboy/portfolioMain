import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLine = 550; 
      if (window.scrollY > scrollLine) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'black' : 'transparent'}`}>
      <nav>
      <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link>
      <Link activeClass="active" to="about" spy={true} smooth={true}  duration={500}>About</Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link>
      <Link activeClass="active" to="project" spy={true} smooth={true} offset={-50}  duration={500}>Projects</Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>     
     </nav>
    </header>
  );
}

export default Header;