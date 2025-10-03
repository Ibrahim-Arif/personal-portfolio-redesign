"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ExpertiseTags = () => {
  const tags = [
    { icon: "/images/education.svg", label: "EdTech" },
    { icon: "/images/hanger.svg", label: "B2B Fashion" },
    { icon: "/images/laptop.svg", label: "HR" },
    { icon: "/images/football.svg", label: "Sports" },
    { icon: "/images/hanger.svg", label: "FinTech" },
  ];

  return (
    <div className="flex">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: [0.16, 0.84, 0.44, 1],
        }}
        className="bg-white rounded-3xl py-4 px-4 sm:px-3 w-full max-w-sm md:max-w-[269px] lg:max-w-[316px] xl:max-w-sm"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 0.84, 0.44, 1],
          }}
          className="text-2xl md:text-lg lg:text-[28px] xl:text-[32px] font-SfProDisplay-medium mb-[132px] xs:mb-[124px] md:mb-6 lg:mb-12 xl:mb-16"
        >
          Diverse <span className="text-button">Expertise</span>
        </motion.h2>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 0.84, 0.44, 1],
              }}
              className="flex items-center gap-2 px-3 py-2 border-2 border-[#D9D9D9] rounded-full hover:border-pink-300 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-5 h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 flex-shrink-0">
                <Image
                  src={tag.icon}
                  alt={tag.label}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-grayC font-SfProDisplay-regular text-base xs:text-lg md:text-[10px] lg:text-sm xl:text-lg">
                {tag.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExpertiseTags;
