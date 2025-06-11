import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar"; // Sticky Sidebar

export default function App() {
  return (
    <Router>
      <Sidebar />
      <AnimatedRoutes />
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  const pageOrder = ['/', '/about', '/certificate', '/projects'];

  const lastScrollTimeRef = React.useRef(0);
  const cooldown = 800; // milliseconds

  const handleScroll = useCallback((event) => {
    const now = Date.now();
    if (now - lastScrollTimeRef.current < cooldown) {
      return; // Ignore scroll if within cooldown
    }

    const currentIndex = pageOrder.indexOf(location.pathname);

    if (event.deltaY > 50 && currentIndex < pageOrder.length - 1) {
      navigate(pageOrder[currentIndex + 1]);
      lastScrollTimeRef.current = now;
    } else if (event.deltaY < -50 && currentIndex > 0) {
      navigate(pageOrder[currentIndex - 1]);
      lastScrollTimeRef.current = now;
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/certificate" element={<PageWrapper><Certificates /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
