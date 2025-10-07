"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const DeliveredApps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.2,
        ease: [0.16, 0.84, 0.44, 1],
      }}
      className="bg-white rounded-3xl px-8 lg:px-10 pt-4 w-full xs:max-w-sm md:max-w-[168px] lg:max-w-[224px] xl:max-w-md overflow-hidden"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.16, 0.84, 0.44, 1],
        }}
        className="flex flex-row sm:flex-col space-x-2 sm:space-x-0 pt-1"
      >
        <h2 className="text-[22px] xs:text-2xl md:text-[18px] lg:text-[28px]  font-SfProDisplay-semibold leading-none">
          Delivered {"  "}
        </h2>
        <h2 className="text-[22px] xs:text-2xl md:text-[18px] lg:text-[28px]  font-SfProDisplay-semibold ">
          <span className="text-button">100+</span> Apps
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.16, 0.84, 0.44, 1],
        }}
        className="relative -bottom-5 md:-bottom-20 lg:-bottom-12 xl:-bottom-10 mx-auto w-full max-w-xs sm:max-w-sm h-[238px] md:h-[180px] lg:h-[197px] xl:h-[269px]"
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
  );
};

export default DeliveredApps;
