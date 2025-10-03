"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "lucide-react";
import Image from "next/image";

const AwardCard = ({ award }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -8 }} // Scale up and lift
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative h-64 overflow-hidden ">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={award.image}
            alt={award.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="pt-6 pb-3 px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <h3 className="text-lg md:text-base font-SfProDisplay-regular text-primaryBlack">
            {award.title}
          </h3>
          <h4 className="text-sm md:text-base text-grayC font-SfProDisplay-regular">
            {award.location}
          </h4>
        </div>

        <div className="flex justify-between items-end pt-3">
          <p className="text-grayC text-sm md:text-base leading-relaxed pr-4 line-clamp-3 font-SfProDisplay-regular">
            {award.description}
          </p>

          <motion.button
            className="flex-shrink-0 w-10 h-10 bg-button rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200 cursor-pointer"
            whileHover={{ scale: 1.15, rotate: 45 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            onClick={
              award.buttonLink
                ? () => window.open(award.buttonLink, "_blank")
                : null
            }
          >
            <Link className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default AwardCard;
