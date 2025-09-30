"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Reusable Social Card Component
const SocialCard = ({ platform, username, iconPath, gradientClass, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className={`${gradientClass} rounded-2xl px-3 py-4 sm:p-6 flex flex-col justify-between h-40 sm:h-44 md:h-52 cursor-pointer shadow-lg`}
    >
      <div className="flex justify-start">
        <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
          <Image
            src={iconPath}
            alt={`${platform} icon`}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="text-white">
        <h3 className="text-base sm:text-2xl md:text-2xl font-SfProDisplay-semibold mb-1 tracking-wide">
          {platform}
        </h3>
        <p className="text-sm sm:text-lg opacity-90 font-SfProDisplay-regular tracking-wide">
          {username}
        </p>
      </div>
    </motion.div>
  );
};
export default SocialCard;
