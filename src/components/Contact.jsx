import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa";
export default function Contact({ ref }) {
  return (
    <motion.section 
      ref={ref} 
      id="contact" 
      className="section contact"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Contact Me</h2>
      <div className="contact-grid">
        <motion.div 
          className="contact-item"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 102, 0, 0.8)" }}
        >
          <FaPhone className="icon glow" />
          <p>+639510873885</p>
        </motion.div>
        <motion.div 
          className="contact-item"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 102, 0, 0.8)" }}
        >
          <FaFacebook className="icon glow" />
          <p><a href="https://www.facebook.com/joelA0906">joelA0906</a></p>
        </motion.div>
        <motion.div 
          className="contact-item"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 102, 0, 0.8)" }}
        >
          <FaEnvelope className="icon glow" />
          <p>joel.andamon@hcdc.edu.ph</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
