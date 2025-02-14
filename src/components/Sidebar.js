import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false); // Sidebar visibility state

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      <button className="sidebar-toggle" onClick={() => setIsVisible(true)}>
        ☰ {/* Hamburger icon */}
      </button>

      {/* Full-Screen Sidebar */}
      <nav className={`sidebar ${isVisible ? "visible" : ""}`}>
        {/* Close Button */}
        <button className="close-btn" onClick={() => setIsVisible(false)}>
          ✖
        </button>

        <ul>
          <li className={activeSection === "home" ? "active" : ""}>
            <Link to="/" onClick={() => setIsVisible(false)}>Home</Link>
          </li>
          <li className={activeSection === "about" ? "active" : ""}>
            <Link to="/about" onClick={() => setIsVisible(false)}>About</Link>
          </li>
          <li className={activeSection === "projects" ? "active" : ""}>
            <Link to="/projects" onClick={() => setIsVisible(false)}>Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
