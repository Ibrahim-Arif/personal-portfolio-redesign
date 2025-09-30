"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationControls } from "framer-motion";
import CTA from "./CTA";

// Sample data array
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

// Reusable Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="flex-shrink-0 w-[284px] md:w-[477px] overflow-hidden mx-3 cursor-grab active:cursor-grabbing"
    >
      {/* Image Container with Fixed Height */}
      <div className="overflow-hidden h-[304px] md:h-[511px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Content with margin between image and text */}
      <div className="p-1 mt-4">
        <h3 className="text-[28px] font-SfProDisplay-regular text-[#1D1D11] mb-2">
          {project.title}
        </h3>
        <p className="text-gray-500 text-base md:text-xl leading-relaxed font-SfProDisplay-regular">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

// Auto-scrolling Carousel Component
const Project = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef(null);

  // Triple duplicate for smoother infinite scroll
  const duplicatedProjects = [
    ...projectsData,
    ...projectsData,
    ...projectsData,
  ];

  const cardWidth = 312; // card width (288) + margin (24)
  const totalWidth = duplicatedProjects.length * cardWidth;
  const singleSetWidth = projectsData.length * cardWidth;

  // Motion values for position tracking
  const x = useMotionValue(0);

  // Continuous auto-scroll function that respects hover and drag states
  const autoScroll = () => {
    intervalRef.current = setInterval(() => {
      // Only move if not hovered and not dragging
      if (!isHovered && !isDragging) {
        const currentX = x.get();
        const newX = currentX - 1; // Move 1px left every interval (slower)

        // Seamless infinite loop - reset when we've moved one full set
        if (newX <= -singleSetWidth) {
          x.set(newX + singleSetWidth); // Jump back smoothly
        } else {
          x.set(newX);
        }
      }
      // If hovered or dragging, the interval continues but doesn't move the carousel
    }, 16); // ~60fps
  };

  // Start auto-scroll
  const startAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    autoScroll();
  };

  // Stop auto-scroll
  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Handle hover events
  const handleMouseEnter = () => {
    console.log("Mouse entered - stopping auto-scroll");
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("Mouse left - resuming auto-scroll");
    setIsHovered(false);
  };

  // Handle drag events
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Don't reset position - let it continue from wherever user left it
  };

  // Start initial auto-scroll and keep it running
  useEffect(() => {
    const timer = setTimeout(() => {
      autoScroll(); // Start once and never stop the interval
    }, 1000);

    return () => {
      clearTimeout(timer);
      stopAutoScroll();
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAutoScroll();
    };
  }, []);

  return (
    <div className="w-full py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-left mb-16 px-8 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24 mb-24"
        >
          <h1 className="text-4xl font-SfProDisplay-regular text-custom-black mb-3">
            <span className="font-SfProDisplay-regular"> Projects </span>
          </h1>
          <div className="w-28 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>
      </motion.div>

      {/* Carousel Container */}
      <div
        className="relative overflow-hidden  mb-20"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          drag="x"
          dragConstraints={{
            left: -singleSetWidth * 0.9,
            right: singleSetWidth * 0.1,
          }}
          dragElastic={0.1}
          dragTransition={{
            power: 0.2,
            timeConstant: 200,
          }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className="flex cursor-grab active:cursor-grabbing"
          style={{
            width: `${totalWidth}px`,
            x: x,
          }}
          whileDrag={{
            scale: 0.998,
            transition: { duration: 0.1 },
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${Math.floor(
                index / projectsData.length
              )}-${index}`}
              project={project}
              index={index % projectsData.length}
            />
          ))}
        </motion.div>
      </div>
      <div className="px-4">
        <CTA title="See all of my essential work" buttonText="Lets Go" />
      </div>
    </div>
  );
};

export default Project;
