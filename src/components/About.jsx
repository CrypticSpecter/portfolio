import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import profileImage from "../assets/12.png"; // Adjust path if necessary
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./About.css";

const skills = [
  { icon: "💻", title: "Programming Languages", description: "JavaScript, HTML, CSS" },
  { icon: "⚙️", title: "Frameworks", description: "React Native, Expo" },
  { icon: "🛠", title: "Development Tools", description: "Visual Studio Code" },
  { icon: "🎨", title: "Other Skills", description: "UI Design, Application Navigation" },
];

export default function About() {
  const navigate = useNavigate();
  const typedRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTextChanging, setIsTextChanging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Typed.js Effect for "About Me"
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["About Me", "Who Am I?", "A Little About Me"], // Animated text
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "_",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Skill Animation Effect
  useEffect(() => {
    if (isHovered) return; // Stop animation when hovered

    const skillInterval = setInterval(() => {
      setIsTextChanging(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % skills.length);
        setIsTextChanging(false);
      }, 400);
    }, 3000);

    return () => clearInterval(skillInterval);
  }, [isHovered]);

  const text =
  "I am a fourth-year Bachelor of Science in Information Technology student at Holy Cross of Davao College, aspiring to become a front-end developer and web developer. I am seeking an internship to gain real-world experience, further develop my skills, and continue growing in the field.";

const letters = text.split(""); // Split into individual letters
const colors = ["#ff4d00", "#ff9800", "#ffcc00"]; // Bright Orange, Spring Green, Deep Sky Blue


const [highlightIndexes, setHighlightIndexes] = useState([
  0,
  Math.floor(text.length / 3),
  Math.floor((2 * text.length) / 3)
]);

useEffect(() => {
  const letterInterval = setInterval(() => {
    setHighlightIndexes((prevIndexes) =>
      prevIndexes.map(index =>
        index < letters.length - 1 ? index + 1 : 0
      )
    );
  }, 100); // Adjust speed as needed

  return () => clearInterval(letterInterval);
}, []);

  return (
    <section id="about" className="about">
      <div className="profile-img-container">
        <img src={profileImage} alt="Profile" className="profile-img" />
      </div>

      <div className="about-content">
        {/* Typed.js Effect */}
        <h2 className="section-title">
          👋 <span ref={typedRef}></span>
        </h2>

        <p className="about-description">
  {letters.map((letter, index) => (
    <span
      key={index}
      style={
        highlightIndexes.includes(index)
          ? {
              color: colors[highlightIndexes.indexOf(index) % colors.length], // Assign colors to highlighted letters only
              fontWeight: "bold",
              textShadow: `0 0 10px ${colors[highlightIndexes.indexOf(index) % colors.length]}, 
                           0 0 20px ${colors[highlightIndexes.indexOf(index) % colors.length]}, 
                           0 0 30px ${colors[highlightIndexes.indexOf(index) % colors.length]}` // Glow effect for highlighted letters only
            }
          : {} // Non-highlighted letters stay default
      }
    >
      {letter}
    </span>
  ))}
</p>


        {/* Skills Section with Animation */}
        <div
          className={`skills-section ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className="skills-title">🚀 Skills</h3>

          <div className="skill-cards-container">
            {[0, 1].map((offset) => {
              const skillIndex = (currentIndex + offset) % skills.length;
              return (
                <div key={skillIndex} className="skill-card">
                  <div className="skill-icon">{skills[skillIndex].icon}</div>
                  <div className={`skill-content ${isTextChanging ? "text-fade" : ""}`}>
                    <h4>{skills[skillIndex].title}</h4>
                    <p>{skills[skillIndex].description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Down arrow with navigation */}
        <div
          className="arrow-down"
          onClick={() => navigate("/Projects")}
          role="button"
          aria-label="Go to Projects page"
        >
          <FaChevronDown />
        </div>
      </div>
    </section>
  );
}
