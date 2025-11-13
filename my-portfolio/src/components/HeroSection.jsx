import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Hi, I’m <span>Ameer Akech</span>
        </h1>
        <h2>Software Engineer</h2>
        <p>
          I’m a passionate software engineer dedicated to crafting meaningful, user-centered experiences that blend creativity with functionality.
          <br />
          With a keen eye for detail and a commitment to solving real-world problems, I transform ideas into intuitive systems that resonate and inspire.
          <br />
          Driven by curiosity and collaboration, I thrive at the intersection of aesthetics and innovation.
        </p>

        <div className="social-icons">
          <a href="https://github.com/ameerakech" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:ameerakech@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="/Images/linkedln-profile.jpg" 
          alt="Ameer Akech" 
          width={400}
          height={550}
        />
      </div>
    </section>
  );
};

export default HeroSection;