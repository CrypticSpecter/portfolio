import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js"; // Import Typed.js
import TypingEffect from "./TypingEffect"; // Import the TypingEffect component
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import mcit1 from "../assets/MCITS_2023.jpg";
// import mcit1 from "../assets/MCITS_2023.jpg";
import cap1 from "../assets/capstone_project_writing_1.png";
import cap2 from "../assets/capstone_project_writing_2.png";
import ojt from "../assets/IMG_20250611_024103.jpg"; // Adjust path if necessary
import "./Certificate.css";

const certificates = [
  {
    title: "MCITS 2023",
    image: mcit1,
  },
  {
    title: "MCITS 2024",
    // image: profileImage,
  },
  {
    title: "CAPSTONE PROJECT WRITING 1 WORKSHOP CERTIFICATES",
    image: cap1,
  },
  {
    title: "CAPSTONE PROJECT WRITING 2 WORKSHOP CERTIFICATES",
    image: cap2,
  },
  {
    title: "ON THE JOB TRAINING CERTIFICATE",
    image: ojt,
  },
];

export default function CertificatePage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const typedRef = useRef(null); // Create a ref for Typed.js
    const navigate = useNavigate(); // React Router navigation hook

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
          strings: ["My Certificates", "Proof of Learning", "Training & Certificates"], // Add more phrases if needed
          typeSpeed: 80,
          backSpeed: 50,
          loop: true,
          showCursor: true,
          cursorChar: "_",
        });
    
        return () => {
          typed.destroy(); // Clean up
        };
      }, []);

    const goToAbout = () => {
        navigate("/Projects"); // Navigates to About.jsx
    };

  return (
    <section id="certificate" className="certificate">
        <div className="certificate-page">
        <h1 className="certificate-title">📜 <span ref={typedRef}></span></h1>
        <div className="certificate-grid">
            {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
                <img src={cert.image} alt={cert.title} className="certificate-image" />
                <div className="certificate-name">{cert.title}</div>
            </div>
            ))}
        </div>
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