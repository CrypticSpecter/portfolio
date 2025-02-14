import React from "react";

export default function Navbar({ scrollToSection, homeRef, aboutRef, projectsRef }) {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => scrollToSection(homeRef)}>Home</li>
        <li onClick={() => scrollToSection(aboutRef)}>About</li>
        <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
      </ul>
    </nav>
  );
}
