"use client";
import { motion } from "framer-motion";
import React from "react";

const TeamLeadership = () => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.16, 0.84, 0.44, 1],
        }}
        className="bg-white rounded-3xl p-7 md:p-5 lg:p-7 w-full grow"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 0.84, 0.44, 1],
          }}
          className="text-2xl md:text-[18px] lg:text-[28px] xl:text-[32px] font-SfProDisplay-semibold mb-[108px] xs:mb-[140px] sm:mb-8"
        >
          Team <span className="text-[#F70548]">Leadership</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 0.84, 0.44, 1],
          }}
          className="text-gradient-gray text-xl md:text-sm lg:text-lg xl:text-2xl leading-relaxed font-SfProDisplay-regular"
        >
          Leading 8+ developers and designers to deliver high-impact digital
          products.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default TeamLeadership;
