// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { MapPin, Link } from "lucide-react";

// import "swiper/css";
// import "swiper/css/pagination";

// // Reusable Award Card Component
// const AwardCard = ({ award, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.85, y: 60 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{
//         // duration: 0.7,
//         // delay: index * 0.15,
//         // ease: [0.25, 0.4, 0.25, 1],
//         // opacity: { duration: 0.5 },
//         // scale: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
//         duration: 0.8,
//         delay: index * 0.12,
//         ease: [0.22, 0.61, 0.36, 1],
//       }}
//       whileHover={{
//         // scale: 1.03,
//         // y: -8,
//         // transition: { duration: 0.3, ease: "easeOut" },
//         scale: 1.02,
//         y: -6,
//         transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] },
//       }}
//       className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 h-full max-w-sm"
//     >
//       {/* Image Container */}
//       <motion.div
//         className="relative w-full h-96 bg-gray-100 overflow-hidden"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
//       >
//         <img
//           src={award.image}
//           alt={award.title}
//           className="w-full h-full object-cover"
//         />
//       </motion.div>

//       {/* Content */}
//       <div className="p-6">
//         {/* Title and Icon */}
//         <motion.div
//           className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-3"
//           // initial={isMobile ? false : { opacity: 0, x: -20 }}
//           // whileInView={isMobile ? false : { opacity: 1, x: 0 }}
//           // viewport={{ once: true }}
//           // transition={isMobile ? {} : { delay: index * 0.6, duration: 0.5 }}
//         >
//           <h3 className="text-lg md:text-[24px] font-SfProDisplay-regular text-[#2B2B2B]">
//             {award.title}
//           </h3>
//           <motion.div
//             className="flex items-center gap-2"
//             // initial={isMobile ? false : { opacity: 0, x: -20 }}
//             // whileInView={isMobile ? false : { opacity: 1, x: 0 }}
//             // viewport={{ once: true }}
//             // transition={isMobile ? {} : { delay: index * 0.6, duration: 0.5 }}
//           >
//             <MapPin className="w-4 h-4 text-[#839297]" />
//             <span className="text-sm md:text-lg text-[#839297] font-sans">
//               {award.location}
//             </span>
//           </motion.div>
//         </motion.div>

//         {/* Description */}
//         <div className="flex justify-between items-end">
//           <p className="text-[#839297] text-base md:text-lg leading-relaxed pr-4 line-clamp-3 font-SfProDisplay-regular">
//             {award.description}
//           </p>

//           <motion.button
//             className="flex-shrink-0 w-10 h-10 bg-[#F70548] rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200 cursor-pointer"
//             whileHover={{ scale: 1.15, rotate: 45 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ type: "spring", stiffness: 400, damping: 12 }}
//             onClick={
//               award.buttonLink
//                 ? () => window.open(award.buttonLink, "_blank")
//                 : null
//             }
//           >
//             <Link className="w-5 h-5 text-white" />
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
// export default AwardCard;
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "lucide-react";
import Image from "next/image";

const AwardCard = ({ award }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    // <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -8 }} // Scale up and lift
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative h-64 overflow-hidden ">
        {/* <img
          src={award.image}
          alt={award.title}
          className="w-full h-full object-cover"
        /> */}
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
          <h3 className="text-lg md:text-base font-SfProDisplay-regular text-[#2B2B2B]">
            {award.title}
          </h3>
          <h4 className="text-sm md:text-base text-[#839297] font-SfProDisplay-regular">
            {award.location}
          </h4>
        </div>

        {/* <p className="text-gray-600 leading-relaxed">{award.description}</p> */}
        <div className="flex justify-between items-end pt-3">
          <p className="text-[#839297] text-sm md:text-base leading-relaxed pr-4 line-clamp-3 font-SfProDisplay-regular">
            {award.description}
          </p>

          <motion.button
            className="flex-shrink-0 w-10 h-10 bg-[#F70548] rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200 cursor-pointer"
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
