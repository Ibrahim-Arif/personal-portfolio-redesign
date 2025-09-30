"use client";

import React from "react";
import { motion } from "framer-motion";

const CTA = ({ title, buttonText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#F5F5F7] px-4 sm:px-6 md:px-8 py-4 max-w-6xl mx-auto rounded-3xl"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-[28px] font-SfProDisplay-regular text-[#1D1D11] text-center sm:text-left"
        >
          {title}
        </motion.h2>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          whileHover={{
            scale: 1.08,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F70548] text-white font-medium px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-colors duration-200 shadow-lg whitespace-nowrap cursor-pointer"
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CTA;
