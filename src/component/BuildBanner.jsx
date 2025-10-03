"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

const BuildBanner = ({
  topText = "Turn your idea into reality",
  mainText = "Ready to build something great?",
  buttonText = "Get Started",
  delay = 0,
}) => {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const layer1Variants = {
    hover: {
      x: 2,
      y: 2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const layer2Variants = {
    hover: {
      x: -2,
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const handleCLick = () => {
    router.push("/about");
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full max-w-md sm:max-w-[1240px] px-4 mx-auto my-24 group"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
    >
      {/* Layer 2 - Top right layer */}
      <motion.div
        className="absolute inset-0 bg-[#FFE8EF] rounded-tl-2xl rounded-br-2xl transform -translate-x-1 -translate-y-1 md:-translate-x-3 md:-translate-y-3 mx-4"
        variants={layer1Variants}
      />

      {/* Layer 3 - Bottom left layer */}
      <motion.div
        className="absolute inset-0 bg-[#FFE8EF] rounded-tl-2xl rounded-br-2xl transform translate-x-1 translate-y-1 md:translate-x-3 md:translate-y-3 mx-4"
        variants={layer2Variants}
      />

      {/* Layer 1 - Front layer (main component) */}
      <motion.div
        className="relative bg-gradient-to-r bg-button rounded-tl-2xl rounded-br-2xl px-6 py-8 md:px-12 md:py-12 flex flex-col items-center justify-center text-center shadow-xl overflow-hidden"
        variants={hoverVariants}
      >
        <motion.div className="absolute -top-10 -right-10 w-28 h-28 md:w-36 md:h-36 border-8 border-[#FEB3B1] border-opacity-20 rounded-full" />
        <motion.div className="absolute -bottom-16 -left-16 w-32 h-32 md:w-40 md:h-40 border-8 border-[#FEB3B1] border-opacity-15 rounded-full" />

        <div className="relative z-10 space-y-4">
          <motion.p
            className="text-white text-[15px] md:text-[28px] font-SfProDisplay-regular opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
          >
            {topText}
          </motion.p>

          <motion.h2
            className="text-white text-[21px] md:text-4xl lg:text-[58px] font-SfProDisplay-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: delay + 0.4 }}
          >
            Ready to build{" "}
            <span className="font-SfProDisplay-regular">something great?</span>
          </motion.h2>

          <motion.div
            className="pt-4"
            variants={buttonHoverVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={handleCLick}
              className="bg-white text-red-600 cursor-pointer px-8 py-3 md:px-10 md:py-4 text-center rounded-full font-SfProDisplay-bold text-base md:text-lg hover:shadow-lg hover:bg-gray-50 transition-all duration-300"
            >
              {buttonText}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BuildBanner;
