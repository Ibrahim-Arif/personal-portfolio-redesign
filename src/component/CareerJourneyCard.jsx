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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        ease: [0.16, 0.84, 0.44, 1],
      }}
      className="bg-white rounded-3xl px-5 py-6 w-full grow"
    >
      <h2 className="text-2xl md:text-lg lg:text-2xl font-SfProDisplay-semibold mb-8">
        Career <span className="text-button">Journey</span>
      </h2>

      <div className="relative h-[182px] md:h-[140px] lg:h-[182px] xl:h-72 overflow-hidden">
        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-primaryBlack"></div>

        <motion.div
          className=""
          style={{
            transform: `translateY(-${offset}px)`,
          }}
        >
          {extendedData.map((item, index) => (
            <div key={index} className="relative pl-9 flex items-start h-20">
              <div className="absolute left-[4.5px] top-2 w-4 h-4 bg-button rounded-full z-10 ring-4 ring-[#EFEFEF]"></div>

              <div className="flex-1">
                <p className="text-base md:text-sm lg:text-lg xl:text-[21px] font-SfProDisplay-regular leading-relaxed">
                  <span className="text-secondary">{item.position}</span>
                  <span className="text-gradient-gray"> for </span>
                  <span className="text-secondary font-SfProDisplay-medium">
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
