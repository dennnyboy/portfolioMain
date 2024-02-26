
import React, { useState, useEffect } from 'react';
import './Header.css';

function Header({ scrollContainerRef }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current.scrollTop > 1) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('scroll', handleScroll); 

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContainerRef]); 

  return (
    <header className={`header ${isScrolled ? 'black' : 'transparent'}`}>
       <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;