"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
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
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;

  // Triple the data for seamless infinite scroll
  const extendedData = [...awardsData, ...awardsData, ...awardsData];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isPaused) {
        positionRef.current += 0.5;

        const cardWidth = scrollContainer.scrollWidth / 3;

        if (positionRef.current >= cardWidth) {
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
  }, [isPaused]);

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
      const cardWidth = scrollContainer.scrollWidth / 3;
      positionRef.current = Math.max(
        0,
        Math.min(positionRef.current + diff, cardWidth - 1)
      );
      scrollContainer.style.transform = `translateX(-${positionRef.current}px)`;
    }

    touchStartRef.current = touchEndRef.current;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setIsPaused(false);
  };

  const gap = isMobile ? 16 : 16;
  const cardWidth = `calc(${100 / slidesToShow}% - ${
    (gap * (slidesToShow - 1)) / slidesToShow
  }px)`;

  return (
    <div className="w-full max-w-7xl mx-auto py-12">
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

      <div
        className="relative overflow-hidden sm:mx-4 xl:mx-0"
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
          {extendedData.map((award, index) => (
            <div
              key={`${award.id}-${index}`}
              style={{
                minWidth: cardWidth,
                maxWidth: cardWidth,
              }}
              className="flex-shrink-0 py-8"
            >
              <AwardCard award={award} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HonorsAwards;
