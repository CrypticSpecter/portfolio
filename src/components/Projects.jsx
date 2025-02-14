import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js"; // Import Typed.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Projects.css";
import itemSeekerImg from "../assets/proj.png";
import floodGuardImg from "../assets/proj.png";
import TypingEffect from "./TypingEffect"; // Import the TypingEffect component
import { FaHome } from "react-icons/fa";

const projects = [
  {
    title: "ITEMSEEKER",
    desc: "ItemSeeker is a mobile app that helps users locate their misplaced items by registering and tagging specific items within predefined categories. Through AI integration, the app processes CCTV footage to track and display the location of these items whenever they appear in the footage.",
    img: itemSeekerImg,
  },
  {
    title: "TICKETING PORTAL",
    desc: "The Data Center Ticketing Portal is an online platform that simplifies the submission and tracking of service requests for data center operations. Users can submit requests for hardware, software, or network issues, and track the real-time status of their requests with a unique ticket number.",
    img: floodGuardImg,
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const typedRef = useRef(null); // Create a ref for Typed.js

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["My Projects", "Featured Works", "Portfolio"], // Add more phrases if needed
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

  const handleGoHome = () => {
    window.location.href = "/"; // Navigate to the home page
  };

  return (
    <section id="projects" className="projects">
      {/* Typing effect applied to the heading */}
      <h2 className="projects-title">
      💡<span ref={typedRef}></span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="project-slider"
        navigation={{
          nextEl: ".swiper-button-next.custom-arrow",
          prevEl: ".swiper-button-prev.custom-arrow",
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="project-slide">
            <div className="project-wrapper">
              <img src={project.img} alt={project.title} className="project-img" />
              <div className="project-info">
                <h3><TypingEffect text={project.title} /></h3>
                <p>{project.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev custom-arrow"></div>
        <div className="swiper-button-next custom-arrow"></div>
      </Swiper>

      <div className="custom-pagination">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${activeIndex === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
      <div className="go-home-btn" onClick={handleGoHome}>
        <FaHome size={30} color="#fff" />
      </div>
    </section>
  );
}
