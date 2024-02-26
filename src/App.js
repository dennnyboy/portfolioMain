import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Header from './components/Header.js';
import Intro from './components/Intro.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import './App.css';

// Ensure GSAP recognizes the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const mainRef = useRef(null); // Reference to the main content
  const [isAnimating, setIsAnimating] = useState(false); // State to track animation

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const handleScroll = (event) => {
      if (isAnimating) {
        event.preventDefault();
        return; // Exit if an animation is currently in progress
      }

      event.preventDefault();
      const { deltaY } = event;
      const direction = deltaY > 0 ? 1 : -1; // Determine scroll direction
      const sections = Array.from(mainRef.current.children);
      const scrollIndex = sections.findIndex(section => {
        const { top, bottom } = section.getBoundingClientRect();
        return top < window.innerHeight && bottom > 0;
      });

      if (scrollIndex !== -1) {
        const nextIndex = scrollIndex + direction;
        if (nextIndex >= 0 && nextIndex < sections.length) {
          setIsAnimating(true); // Lock scrolling by setting isAnimating to true
          gsap.to(mainRef.current, {
            duration: 0.75, 
            scrollTo: {y: sections[nextIndex], autoKill: false, container: mainRef.current},
            onComplete: () => setIsAnimating(false) // Unlock scrolling once animation completes
          });
        }
      }
    };

    // Listen to wheel event on the main container
    const main = mainRef.current;
    if(main) {
      main.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if(main) {
        main.removeEventListener('wheel', handleScroll);
      }
    };
  }, [isAnimating]); // Add isAnimating to the dependency array

  return (
    <div className="App">
      <Header scrollContainerRef={mainRef} />
      <main ref={mainRef} className="scrollContainer">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <button className="stayBottom">Click Me</button> {/* Add this line */}
    </div>
  );
}

export default App;