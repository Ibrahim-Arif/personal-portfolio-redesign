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
  const isScrollingRef = useRef(false);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const gap = isMobile ? 16 : isTablet ? 16 : 16;

  const maxSlides = Math.max(0, awardsData.length - slidesToShow + 1);

  const getCardWidth = () => {
    if (!scrollRef.current) return 0;
    const containerWidth = scrollRef.current.offsetWidth;
    const totalGap = gap * (slidesToShow - 1);
    return (containerWidth - totalGap) / slidesToShow;
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current || isScrollingRef.current) return;

    // Clamp index to valid range
    const clampedIndex = Math.max(0, Math.min(index, maxSlides - 1));

    isScrollingRef.current = true;
    const cardWidth = getCardWidth();
    const scrollPosition = clampedIndex * (cardWidth + gap);

    scrollRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setActiveIndex(clampedIndex);

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  useEffect(() => {
    if (!isAutoScrolling) return;

    autoScrollIntervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % maxSlides;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3500);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling, slidesToShow, maxSlides]);

  // Track scroll position to update active index
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        if (isScrollingRef.current) return;

        const cardWidth = getCardWidth();
        const scrollLeft = scrollContainer.scrollLeft;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        const clampedIndex = Math.max(0, Math.min(index, maxSlides - 1));

        setActiveIndex(clampedIndex);
      }, 100);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [slidesToShow, gap]);

  // Handle user interaction - pause auto-scroll
  const handleInteractionStart = () => {
    setIsAutoScrolling(false);
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
  };

  const handleInteractionEnd = () => {
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);
  };

  // Mouse drag functionality (like Swiper)
  const handleMouseDown = (e) => {
    if (isMobile) return;
    handleInteractionStart();

    const startX = e.pageX - scrollRef.current.offsetLeft;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      handleInteractionEnd();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

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

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        className="relative flex overflow-x-auto hide-scrollbar sm:mx-4 xl:mx-0 cursor-grab active:cursor-grabbing"
        style={{
          gap: `${gap}px`,
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {awardsData.map((award, index) => (
          <div
            key={index}
            className="flex-shrink-0 py-8"
            style={{
              width: `calc((100% - ${
                gap * (slidesToShow - 1)
              }px) / ${slidesToShow})`,
              scrollSnapAlign: "start",
            }}
          >
            <div className="px-2 sm:px-3 md:px-5 h-full">
              <AwardCard award={award} />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: maxSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-red-600 w-8"
                : "bg-gray-300 w-2 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Hide scrollbar */}
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
