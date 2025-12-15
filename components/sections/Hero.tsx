"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";
import { downloadResume, scrollToSection } from "@/lib/utils";

// Dynamically import Three.js components (client-side only)
const Scene3D = dynamic(() => import("@/components/three/Scene3D"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background-surface/20" />,
});

const ParticleField = dynamic(() => import("@/components/three/ParticleField"), {
  ssr: false,
});

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "AI Engineer",
    "Machine Learning Specialist",
    "Agentic AI Developer",
    "RAG Systems Expert",
    "MLOps Engineer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* 3D Scene */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden lg:block opacity-50">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4"
            >
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl font-semibold mb-6 h-12"
            >
              <span className="text-secondary">{text}</span>
              <span className="animate-pulse text-primary">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-text-muted text-lg mb-8 max-w-xl"
            >
              {personalInfo.bio.substring(0, 150)}...
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                glow
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={downloadResume}
              >
                <FiDownload className="mr-2" />
                Download Resume
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12"
            >
              {personalInfo.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile 3D Scene */}
          <div className="lg:hidden h-64 w-full relative opacity-50">
            <Scene3D />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center text-text-muted hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <FiArrowDown size={24} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}

