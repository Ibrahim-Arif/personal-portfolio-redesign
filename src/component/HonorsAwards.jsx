"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AwardCard from "./AwardCard";

const awardsData = [
  {
    title: "Softec'22 🏆",
    location: "FAST NUCES, Lahore",
    description:
      "Won 1st prize in Mobile App Development at SOFTEC'22, competing against 37 teams from 20+ universities. This achievement highlights my team's technical expertise, problem-solving skills, and strong collaboration, reinforcing our passion for innovation in technology.",
    image: "https://i.ibb.co/vvwqKt57/ibrahimarif.webp",
    buttonText: "Official Source",
    buttonLink: "https://lahore.comsats.edu.pk/cs/20220405-news.aspx",
  },
  {
    title: "CodinGuru 5.0 🏆",
    location: "LUMS, Lahore",
    description:
      "Our team won 1st prize at CodinGuru 5.0 for our MedTech idea, recognized as the best business-generating and innovative solution, showcasing our technical and creative excellence.",
    image: "https://i.ibb.co/6RMrrk9K/ibrahimarif-1.webp",
    buttonText: "Official Source",
    buttonLink: "https://lahore.comsats.edu.pk/cs/20230126-news.aspx",
  },
  {
    title: "Final Year Project 🥇",
    location: "COMSATS University, Lahore",
    description:
      'Won 1st prize for Best Final Year Project at COMSATS for developing "Smart Home Surveillance System," a machine learning-powered platform detecting suspicious activities and alerting users via a mobile app.',
    image: "https://i.ibb.co/1JZ6sSr8/ibrahimarif-2.webp",
    buttonText: "Official Source",
    buttonLink: "https://www.facebook.com/photo/?fbid=561883979301777",
  },
  {
    title: "Honorary Alumni 🚀",
    location: "COMSATS University, Lahore",
    description:
      "Within a year of graduating, I successfully founded and led INFILP, a technology startup specializing in mobile app development. This recognition highlights my contributions to the industry, entrepreneurial achievements, and dedication to innovation in the tech space.",
    image: "https://i.ibb.co/RT8dS99s/IMG-0979-min-1.jpg",
    buttonText: "Official Source",
    buttonLink: "https://www.facebook.com/share/p/1B5Ks3RL7G/",
  },
];

const HonorsAwards = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);
  const touchStartRef = useRef(null);

  // ✅ Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile || !isAutoScrolling || !scrollRef.current) return;

    autoScrollIntervalRef.current = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const width = container.scrollWidth / awardsData.length;
      const nextIndex = (activeIndex + 1) % awardsData.length;

      container.scrollTo({
        left: width * nextIndex,
        behavior: "smooth",
      });

      setActiveIndex(nextIndex);
    }, 3000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isMobile, isAutoScrolling, activeIndex]);

  // ✅ Handle touch events
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    touchStartRef.current = e.touches[0].clientX;
    setIsAutoScrolling(false);
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
  };

  const handleTouchMove = () => {
    if (!isMobile || !touchStartRef.current) return;
    setIsAutoScrolling(false);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    touchStartRef.current = null;
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

  const slidesToShow = isMobile ? 1.1 : isTablet ? 2 : 2.5;
  const gap = 16;
  const cardWidth = `calc(${100 / slidesToShow}% - ${
    (gap * (slidesToShow - 1)) / slidesToShow
  }px)`;

  // ✅ Track active card for dots
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const width = scrollContainer.scrollWidth / awardsData.length;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full max-w-[1350px] mx-auto py-12 sm:px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16 px-8"
      >
        <h1 className="text-4xl font-SfProDisplay-regular text-gray-900 mb-3">
          Honor & Awards
        </h1>
        <div className="w-28 h-1 bg-red-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Cards container */}
      <div
        ref={scrollRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="relative flex overflow-x-auto hide-scrollbar sm:mx-4 xl:mx-0 snap-x snap-mandatory scroll-smooth"
      >
        {awardsData.map((award, index) => (
          <div
            key={index}
            style={{ minWidth: cardWidth, maxWidth: cardWidth }}
            className="flex-shrink-0 py-8 px-2 sm:px-3 md:px-5 snap-center"
          >
            <AwardCard award={award} />
          </div>
        ))}
      </div>

      {/* Dots below */}
      <div className="flex justify-center mt-6 space-x-2 md:hidden">
        {awardsData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollRef.current) {
                const scrollAmount =
                  (scrollRef.current.scrollWidth / awardsData.length) * index;
                scrollRef.current.scrollTo({
                  left: scrollAmount,
                  behavior: "smooth",
                });
              }
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-red-600 scale-125" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Hide scrollbar globally */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HonorsAwards;
