"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CTA = ({ title, buttonText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-offwhite px-4 py-3 max-w-xs md:max-w-sm mx-auto rounded-full"
    >
      <div className="max-w-xs md:max-w-sm mx-auto flex  items-center justify-between gap-3">
        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-2xl md:text-[24px] font-SfProDisplay-regular text-secondary text-left"
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
          className="bg-button text-white font-medium p-1 sm:p-2 rounded-full text-sm sm:text-base transition-colors duration-200 shadow-lg whitespace-nowrap cursor-pointer"
        >
          <ChevronRight size={24} color="white" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CTA;
