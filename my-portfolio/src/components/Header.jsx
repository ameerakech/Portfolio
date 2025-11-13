import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">AMEER AKECH</div>
      <nav>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#what-i-do">What I Do</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;