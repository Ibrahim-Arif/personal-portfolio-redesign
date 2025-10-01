"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Link } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

// Reusable Award Card Component
const AwardCard = ({ award, index, isMobile }) => {
  return (
    <motion.div
      initial={isMobile ? false : { opacity: 0, scale: 0.85, y: 60 }}
      whileInView={isMobile ? false : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={
        isMobile
          ? {}
          : {
              // duration: 0.7,
              // delay: index * 0.15,
              // ease: [0.25, 0.4, 0.25, 1],
              // opacity: { duration: 0.5 },
              // scale: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
              duration: 0.8,
              delay: index * 0.12,
              ease: [0.22, 0.61, 0.36, 1],
            }
      }
      whileHover={
        isMobile
          ? {}
          : {
              // scale: 1.03,
              // y: -8,
              // transition: { duration: 0.3, ease: "easeOut" },
              scale: 1.02,
              y: -6,
              transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] },
            }
      }
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 h-full"
    >
      {/* Image Container */}
      <motion.div
        className="relative w-full h-96 bg-gray-100 overflow-hidden"
        initial={isMobile ? false : { opacity: 0 }}
        whileInView={isMobile ? false : { opacity: 1 }}
        viewport={{ once: true }}
        transition={
          isMobile ? {} : { delay: index * 0.15 + 0.2, duration: 0.6 }
        }
      >
        <img
          src={award.image}
          alt={award.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Icon */}
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-3"
          // initial={isMobile ? false : { opacity: 0, x: -20 }}
          // whileInView={isMobile ? false : { opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          // transition={isMobile ? {} : { delay: index * 0.6, duration: 0.5 }}
        >
          <h3 className="text-lg md:text-[24px] font-sans text-[#2B2B2B]">
            {award.title}
          </h3>
          <motion.div
            className="flex items-center gap-2"
            // initial={isMobile ? false : { opacity: 0, x: -20 }}
            // whileInView={isMobile ? false : { opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            // transition={isMobile ? {} : { delay: index * 0.6, duration: 0.5 }}
          >
            <MapPin className="w-4 h-4 text-[#839297]" />
            <span className="text-sm md:text-lg text-[#839297] font-sans">
              {award.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Description */}
        <div className="flex justify-between items-end">
          <motion.p
            className="text-[#839297] text-base md:text-lg leading-relaxed pr-4 line-clamp-3 font-SfProDisplay-regular"
            // initial={isMobile ? false : { opacity: 0, y: 15 }}
            // whileInView={isMobile ? false : { opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={isMobile ? {} : { delay: index * 0.6, duration: 0.5 }}
          >
            {award.description}
          </motion.p>

          <motion.button
            className="flex-shrink-0 w-10 h-10 bg-[#F70548] rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200 cursor-pointer"
            whileHover={{ scale: 1.15, rotate: 45 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            onClick={
              award.buttonLink
                ? () => window.open(award.buttonLink, "_blank")
                : null
            }
          >
            <Link className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
export default AwardCard;
