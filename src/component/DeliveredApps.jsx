"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const DeliveredApps = () => {
  return (
    // <div className="">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.16, 0.84, 0.44, 1],
      }}
      className="bg-white rounded-3xl px-8 md:px-10 pt-4 w-full max-w-md overflow-hidden"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.16, 0.84, 0.44, 1],
        }}
        className="flex flex-row sm:flex-col"
      >
        <h2 className="text-2xl md:text-[32px] font-SfProDisplay-semibold mb-2">
          Delivered {"  "}
        </h2>
        <h2 className="text-2xl md:text-[32px] font-SfProDisplay-semibold ">
          <span className="text-[#F70548]">100+</span> Apps
        </h2>
      </motion.div>

      {/* Phone Mockup Image */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.16, 0.84, 0.44, 1],
        }}
        className="relative -bottom-5 md:-bottom-10 mx-auto w-full max-w-xs sm:max-w-sm h-[238px] sm:h-[300px]"
      >
        <Image
          src="/images/phoneMockup.webp"
          alt="budget tracking"
          width={400}
          height={500}
          className="w-full h-auto drop-shadow-2xl overflow-hidden"
          priority
        />
      </motion.div>
    </motion.div>
    // </div>
  );
};

export default DeliveredApps;
