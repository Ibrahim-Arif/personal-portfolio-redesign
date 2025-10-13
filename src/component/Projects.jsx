"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
    title: "Dressplaner",
    description:
      "Track expenses, set budgets, and stay in control — solo or with a group.",
    image: "/images/dressplanner.webp",
  },
  {
    id: 3,
    title: "The Green Felts",
    description:
      "Golf event app with real-time scoring, live leaderboards, and auto winner updates.",
    image: "/images/felts.webp",
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div className="flex-shrink-0 w-[340px] md:w-[370px] xl:w-[410px] overflow-hidden">
      <div
        className="overflow-hidden h-[340px] md:h-96 xl:h-[478px] rounded-2xl"
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

      <div className="px-3 py-1 sm:p-1 mt-4">
        <h3 className="text-[20px] md:text-[28px] font-SfProDisplay-regular text-secondary mb-2">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm md:text-xl leading-relaxed font-SfProDisplay-regular">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);
  const touchStartRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll effect for mobile
  useEffect(() => {
    if (!isMobile || !isAutoScrolling || !scrollRef.current) return;

    autoScrollIntervalRef.current = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const cardWidth = container.clientWidth;
      const nextIndex = (activeIndex + 1) % projectsData.length;

      container.scrollTo({
        left: cardWidth * nextIndex,
        behavior: "smooth",
      });

      setActiveIndex(nextIndex);
    }, 3000); // Auto-scroll every 3 seconds

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isMobile, isAutoScrolling, activeIndex]);

  // const handleScroll = () => {
  //   if (!scrollRef.current || !isMobile) return;

  //   const container = scrollRef.current;
  //   const scrollLeft = container.scrollLeft;
  //   const cardWidth = container.clientWidth;
  //   const index = Math.round(scrollLeft / cardWidth);
  //   setActiveIndex(index);
  // };

  const handleScroll = () => {
    if (!scrollRef.current || !isMobile) return;

    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    touchStartRef.current = e.touches[0].clientX;
    setIsAutoScrolling(false);
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !touchStartRef.current) return;
    // User is actively scrolling
    setIsAutoScrolling(false);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    touchStartRef.current = null;
    // Resume auto-scrolling after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);
  };

  const handleMouseDown = () => {
    if (!isMobile) return;
    setIsAutoScrolling(false);
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
  };

  const handleMouseUp = () => {
    if (!isMobile) return;
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);
  };

  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const gap = isMobile ? 20 : 32;
  const cardWidth = `calc(${100 / slidesToShow}% - ${
    (gap * (slidesToShow - 1)) / slidesToShow
  }px)`;

  return (
    <div className="w-full pb-24 max-w-7xl xl:max-w-[1350px] mx-auto scroll-mt-20">
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

      {/* Cards container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={`relative mb-4 sm:mb-16 sm:mx-4 xl:mx-0 flex sm:gap-6 ${
          isMobile
            ? "overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar"
            : "justify-center flex-wrap"
        }`}
      >
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`py-8 ${
              isMobile ? "flex-shrink-0 w-auto snap-center" : "flex-shrink-0"
            }`}
            style={!isMobile ? { width: cardWidth } : {}}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {isMobile && (
        <div className="flex justify-center mb-12">
          {projectsData.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                activeIndex === index ? "bg-red-500 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      <div className="px-4">
        <CTA title="See all of my essential work" buttonText="Lets Go" />
      </div>

      <style jsx global>{`
        /* works for Chrome, Safari, Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* works for Firefox */
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none; /* IE and Edge */
          -webkit-overflow-scrolling: touch; /* iOS momentum scrolling */
        }
      `}</style>
    </div>
  );
};

export default Project;
