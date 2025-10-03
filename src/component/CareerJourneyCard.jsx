"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const CareerJourneyCard = () => {
  const careerData = [
    {
      position: "Mobile Consultant",
      company: "ChartHop",
      year: "2025",
    },
    {
      position: "Project Manager",
      company: "VetEye",
      year: "2024",
    },
    {
      position: "Product Manager",
      company: "Dressplaner",
      year: "2024",
    },
    {
      position: "Senior Developer",
      company: "TechCorp",
      year: "2023",
    },
    {
      position: "Full Stack Developer",
      company: "StartupHub",
      year: "2022",
    },
    {
      position: "Frontend Developer",
      company: "WebSolutions",
      year: "2021",
    },
  ];

  // Duplicate data for seamless loop
  const extendedData = [...careerData, ...careerData];
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + 1;
        // Reset when we've scrolled through one full set
        if (newOffset >= careerData.length * 120) {
          return 0;
        }
        return newOffset;
      });
    }, 30); // Adjust speed here (lower = faster)

    return () => clearInterval(interval);
  }, [careerData.length]);

  return (
    // <div className="">
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.16, 0.84, 0.44, 1],
      }}
      className="bg-white rounded-3xl px-5 py-6 w-full xs:max-w-sm sm:max-w-[500px]"
    >
      <h2 className="text-2xl md:text-[32px] font-SfProDisplay-semibold mb-8">
        Career <span className="text-[#F70548]">Journey</span>
      </h2>

      {/* Container with fixed height for 3 items */}
      <div className="relative h-[182px] sm:h-72 overflow-hidden">
        {/* Vertical Line */}
        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-[#2B2B2B]"></div>

        {/* Career Items - Animated Container */}
        <motion.div
          className=""
          style={{
            transform: `translateY(-${offset}px)`,
          }}
        >
          {extendedData.map((item, index) => (
            <div key={index} className="relative pl-9 flex items-start h-20">
              {/* Pink Dot */}
              <div className="absolute left-[4.5px] top-2 w-4 h-4 bg-[#F70548] rounded-full z-10 ring-4 ring-[#EFEFEF]"></div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-base md:text-[21px] font-SfProDisplay-regular leading-relaxed">
                  <span className="text-[#1D1D11]">{item.position}</span>
                  <span className="text-gradient-gray"> for </span>
                  <span className="text-[#1D1D11] font-SfProDisplay-medium">
                    {item.company}
                  </span>
                  <span className="text-gradient-gray"> - {item.year}</span>
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fade */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
      </div>
    </motion.div>
    // </div>
  );
};

export default CareerJourneyCard;
