import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

function About() {
  useEffect(() => {
    if (window.innerWidth < 768) {
      return;
    }

    
    gsap.registerPlugin(ScrollTrigger);

    const leftSide = document.querySelector('.Leftside');
    const rightSide = document.querySelector('.Rightside');

    gsap.fromTo(leftSide, { x: -50 }, {
      x: 0,
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.fromTo(rightSide, { x: 50 }, {
      x: 0,
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className='section about'>
      <div className='container1'>
      <div className='Leftside'>
       <div>
        <h1>About Me</h1>
        <p>Left</p>
        </div>
      </div>
      <div className='Rightside'>
      <div>
        <p>Left</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;