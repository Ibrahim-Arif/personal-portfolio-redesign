"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const AboutCard = () => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 0.84, 0.44, 1],
        }}
        className="bg-white rounded-3xl overflow-hidden w-full max-w-sm md:max-w-[282px] lg:max-w-[326px] xl:max-w-[412px]"
      >
        <div className="p-6 md:px-7 md:pt-7 md:pb-2">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 0.84, 0.44, 1],
            }}
            className="text-2xl md:text-lg lg:text-[28px] font-SfProDisplay-semibold leading-none"
          >
            Building, Scaling
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 0.84, 0.44, 1],
            }}
            className="text-2xl md:text-lg lg:text-[28px] font-SfProDisplay-semibold text-button mb-2"
          >
            & Leading
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.16, 0.84, 0.44, 1],
            }}
            className="text-gradient-gray text-base md:text-sm lg:text-lg xl:text-xl font-SfProDisplay-regular"
          >
            As a founder and project manager, I help building mobile solutions
            that help businesses scale.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.16, 0.84, 0.44, 1],
          }}
          className="relative w-full h-[202px] md:h-[220px] lg:h-[265px] xl:h-[385px]"
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
