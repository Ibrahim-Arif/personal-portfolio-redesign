"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ExternalLink, Link } from "lucide-react";
import Image from "next/image";

const SmartGuard = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-left mb-16 px-8 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-SfProDisplay-regular text-custom-black mb-3">
            <span className="font-SfProDisplay-regular"> Publications </span>
          </h1>
          <div className="w-28 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>
      </motion.div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Left Content */}
          <div className="flex-1 w-full order-2 lg:order-1 space-y-6 sm:space-y-8 sm:flex sm:flex-col flex-row items-center lg:items-start text-center lg:text-left">
            {/* Title - Fade In */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl sm:text-5xl md:text-[48px] font-SfProDisplay-regular text-[#200100] text-center lg:text-left"
            >
              SmartGuard
            </motion.h1>

            {/* Description - Fade In */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-[22px] text-[#839297] leading-relaxed max-w-xl font-SfProDisplay-medium text-center lg:text-left"
            >
              Privacy-Preserving Edge-Based Video Surveillance Framework for
              Suspicious Activity Detection.
            </motion.p>

            {/* Collaborators Section - Fade from left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Collaborators List */}
              <div className="flex flex-col flex-wrap gap-6 bg-[#F8FAFB] p-4 rounded-2xl max-w-xl ">
                <div className="flex items-center gap-2 text-[#2B2B2B]">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl font-SfProDisplay-medium">
                    Collaborators
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between md:flex-wrap gap-6">
                  {/* Collaborator 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                    className="flex  gap-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bilal"
                        alt="Bilal Naeem"
                        width={48}
                        height={48}
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="text-lg md:text-[20px] font-SfProDisplay-medium text-[#2B2B2B] text-left">
                        Bilal Naeem
                      </p>
                      <p className="text-base md:text-lg font-SfProDisplay-regular text-[#839297] text-left">
                        Software Engineer
                      </p>
                    </div>
                  </motion.div>

                  {/* Collaborator 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Allah"
                        alt="Dr. Allah Bux Sargana"
                        width={48}
                        height={48}
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="text-lg md:text-[20px] font-SfProDisplay-medium text-[#2B2B2B] text-left">
                        Dr. Allah Bux Sargana
                      </p>
                      <p className="text-base md:text-lg font-SfProDisplay-regular text-[#839297] text-left">
                        Machine Learning
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Button - Fade from left */}
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F70548] hover:bg-red-700 cursor-pointer text-white font-medium px-6 py-3 rounded-full text-sm transition-colors duration-200 shadow-lg flex items-center gap-2"
            >
              <Link className="w-4 h-4" />
              Explore Dataset
            </motion.button>
          </div>

          {/* Right Image - Fade from right */}

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex-1 w-full relative "
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem]"
              >
                <Image
                  src="/images/publication.png"
                  alt="SmartGuard Surveillance"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartGuard;
