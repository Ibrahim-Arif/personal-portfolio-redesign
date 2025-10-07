"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationControls } from "framer-motion";
import CTA from "./CTA";

const projectsData = [
  {
    id: 1,
    title: "VetEye",
    description:
      "Vet eye care app — browse images, case studies, save posts, and study anywhere.",
    image: "/images/projectPro.png",
  },
  {
    id: 2,
    title: "HealthTracker",
    description:
      "Personal health monitoring app with AI-powered insights and recommendations.",
    image: "/images/projectPro.png",
  },
  {
    id: 3,
    title: "EduLearn",
    description:
      "Interactive learning platform with gamification and progress tracking features.",
    image: "/images/projectPro.png",
  },
  {
    id: 4,
    title: "FoodieExplorer",
    description:
      "Discover local restaurants, read reviews, and order food with ease.",
    image: "/images/projectPro.png",
  },
  {
    id: 5,
    title: "FitnessPro",
    description:
      "Complete fitness solution with workout plans, nutrition tracking, and community features.",
    image: "/images/projectPro.png",
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div className="flex-shrink-0 w-[284px] md:w-[370px] overflow-hidden">
      <div
        className="overflow-hidden h-[304px] md:h-96 rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain pointer-events-none"
            draggable={false}
          />
        </motion.div>
      </div>

      <div className="p-1 mt-4">
        <h3 className="text-[28px] font-SfProDisplay-regular text-secondary mb-2">
          {project.title}
        </h3>
        <p className="text-gray-500 text-base md:text-xl leading-relaxed font-SfProDisplay-regular">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = isMobile ? 284 : 377;
  const gap = isMobile ? 24 : 4;

  const extendedData = [...projectsData, ...projectsData, ...projectsData];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isPaused) {
        positionRef.current += 0.5;

        const singleSetWidth = projectsData.length * (cardWidth + gap);

        if (positionRef.current >= singleSetWidth) {
          positionRef.current = 0;
        }

        scrollContainer.style.transform = `translateX(-${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, cardWidth, gap]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    touchEndRef.current = e.touches[0].clientX;
    const diff = touchStartRef.current - touchEndRef.current;

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const singleSetWidth = projectsData.length * (cardWidth + gap);
      positionRef.current = Math.max(
        0,
        Math.min(positionRef.current + diff, singleSetWidth - 1)
      );
      scrollContainer.style.transform = `translateX(-${positionRef.current}px)`;
    }

    touchStartRef.current = touchEndRef.current;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setIsPaused(false);
  };

  return (
    <div className="w-full pb-16 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-left mb-12 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24 mb-16"
        >
          <h1 className="text-4xl font-SfProDisplay-regular text-custom-black mb-3">
            <span className="font-SfProDisplay-regular"> Projects </span>
          </h1>
          <div className="w-28 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>
      </motion.div>

      <div
        className="relative overflow-hidden mb-20 sm:mx-4 xl:mx-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={scrollRef}
          className="flex"
          style={{
            gap: `${gap}px`,
            willChange: "transform",
            transition: isPaused ? "transform 0.3s ease-out" : "none",
          }}
        >
          {extendedData.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              style={{
                minWidth: `${cardWidth}px`,
                maxWidth: `${cardWidth}px`,
              }}
              className="py-8"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="px-4">
        <CTA title="See all of my essential work" buttonText="Lets Go" />
      </div>
    </div>
  );
};

export default Project;
