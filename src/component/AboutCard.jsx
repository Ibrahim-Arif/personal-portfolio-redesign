"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const AboutCard = () => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 0.84, 0.44, 1],
        }}
        className="bg-white rounded-3xl overflow-hidden w-full max-w-sm md:max-w-[412px]"
      >
        {/* Text Content */}
        <div className="p-6 md:p-8 pb-4 md:pb-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 0.84, 0.44, 1],
            }}
            className="text-2xl md:text-[32px] font-SfProDisplay-semibold mb-1 md:mb-2"
          >
            Building, Scaling
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 0.84, 0.44, 1],
            }}
            className="text-2xl md:text-[32px] font-SfProDisplay-semibold text-[#F70548] mb-4 md:mb-6"
          >
            & Leading
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.16, 0.84, 0.44, 1],
            }}
            className="text-gradient-gray text-base md:text-2xl leading-relaxed  font-SfProDisplay-regular"
          >
            As a founder and project manager, I help building mobile solutions
            that help businesses scale.
          </motion.p>
        </div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.16, 0.84, 0.44, 1],
          }}
          className="relative w-full h-[202px] sm:h-[300px] md:h-[390px]"
        >
          <Image
            src="/images/profile.webp"
            alt="Profile"
            fill
            className="object-contain sm:object-cover object-top"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 448px, 512px"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutCard;
