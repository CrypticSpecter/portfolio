import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaChevronDown, FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import navigation
import "./Home.css";

export default function Home() {
  const typedRef = useRef(null);
  const navigate = useNavigate(); // React Router navigation hook

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "BSIT Intern",
        "Aspiring Front-end Developer",
        "Aspiring Web Developer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: "_",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Function to navigate to the About page
  const goToAbout = () => {
    navigate("/about"); // Navigates to About.jsx
  };

  return (
    <section id="home" className="home">
      <div className="content">
        <h1>
          Hi, I'm <span className="highlight">Joel Andamon</span>
        </h1>
        <h2>
          <span ref={typedRef}></span>
        </h2>
        <p>
          Passionate about building modern, interactive, and user-friendly
          digital experiences.
        </p>

        {/* Contact Icons with Hover Text */}
        <div className="contact-icons">
          <div className="icon-container">
            <a href="tel:+639510873885" aria-label="Call">
              <FaPhone className="icon" />
            </a>
            <span className="icon-text">09510873885</span>
          </div>
          <div className="icon-container">
            <a href="mailto:joel.andamon@hcdc.edu.ph" aria-label="Email">
              <FaEnvelope className="icon" />
            </a>
            <span className="icon-text">joel.andamon@hcdc.edu.ph</span>
          </div>
          <div className="icon-container">
            <a
              href="https://www.facebook.com/joelA0906"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="icon" />
            </a>
            <span className="icon-text">Joel.Luchavez.Andamon</span>
          </div>
        </div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
  View Resume
</a>

        {/* Down arrow with navigation */}
        <div
          className="arrow-down"
          onClick={goToAbout} // Click event triggers navigation
          role="button"
          aria-label="Go to About page"
        >
          <FaChevronDown />
        </div>
      </div>
    </section>
  );
}
