import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./Pages/About";
import PortfolioSection from "./components/Portfolio";
import ContactSection from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  // Spring-physics custom cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <Router>
      <div className="relative w-full min-h-screen bg-black text-white selection:bg-cyan-400/30 selection:text-white" style={{ cursor: 'none' }}>
        
        {/* 🚀 IMAGE-BASED CUSTOM CURSOR */}
        <motion.div
          className="fixed pointer-events-none z-[9999] hidden md:flex items-center justify-center w-16 h-16"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <img 
            src="/m.png" 
            alt="Cursor" 
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(34,211,238,1)] drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]" 
            style={{ filter: 'drop-shadow(0 0 12px rgba(34,211,238,0.9)) drop-shadow(0 0 30px rgba(168,85,247,0.5))' }}
          />
        </motion.div>

        {/* 1. GLASSMORPHIC SCROLLING HEADER */}
        <Header />

        {/* 2. SEAMLESS SINGLE-PAGE VIEW */}
        <div className="relative z-10 w-full min-h-screen">
          <div id="home">
            <HeroSection />
          </div>
          
          <div id="skills">
            <Skills />
          </div>
          
          <div id="experience">
            <Experience />
          </div>
          
          <div id="portfolio">
            <PortfolioSection />
          </div>
          
          <div id="about">
            <AboutSection />
          </div>
          
          <div id="contact">
            <ContactSection />
          </div>
        </div>

        {/* 3. PREMIUM SCI-FI FOOTER */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
