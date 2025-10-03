// "use client";
// import React, { useRef } from "react";
// import AwardCard from "./AwardCard";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// const awardsData = [
//   {
//     title: "Softec'22 🏆",
//     location: "FAST NUCES, Lahore",
//     description:
//       "Won 1st prize in Mobile App Development at SOFTEC'22, competing against 37 teams from 20+ universities. This achievement highlights my team's technical expertise, problem-solving skills, and strong collaboration, reinforcing our passion for innovation in technology.",
//     image: "https://i.ibb.co/vvwqKt57/ibrahimarif.webp",
//     buttonText: "Official Source",
//     buttonLink: "https://lahore.comsats.edu.pk/cs/20220405-news.aspx",
//   },
//   {
//     title: "CodinGuru 5.0 🏆",
//     location: "LUMS, Lahore",
//     description:
//       "Our team won 1st prize at CodinGuru 5.0 for our MedTech idea, recognized as the best business-generating and innovative solution, showcasing our technical and creative excellence.",
//     image: "https://i.ibb.co/6RMrrk9K/ibrahimarif-1.webp",
//     buttonText: "Official Source",
//     buttonLink: "https://lahore.comsats.edu.pk/cs/20230126-news.aspx",
//   },
//   {
//     title: "Final Year Project 🥇",
//     location: "COMSATS University, Lahore",
//     description:
//       'Won 1st prize for Best Final Year Project at COMSATS for developing "Smart Home Surveillance System," a machine learning-powered platform detecting suspicious activities and alerting users via a mobile app.',
//     image: "https://i.ibb.co/1JZ6sSr8/ibrahimarif-2.webp",
//     buttonText: "Official Source",
//     buttonLink: "https://www.facebook.com/photo/?fbid=561883979301777",
//   },
//   {
//     title: "Honorary Alumni 🚀",
//     location: "COMSATS University, Lahore",
//     description:
//       "Within a year of graduating, I successfully founded and led INFILP, a technology startup specializing in mobile app development. This recognition highlights my contributions to the industry, entrepreneurial achievements, and dedication to innovation in the tech space.",
//     image: "https://i.ibb.co/RT8dS99s/IMG-0979-min-1.jpg",
//     buttonText: "Official Source",
//     buttonLink: "https://www.facebook.com/share/p/1B5Ks3RL7G/",
//   },
// ];

// const HonorsAwards = () => {
//   return (
//     <div className="w-full py-16 ">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mt-14 mb-24"
//         >
//           <h1 className="text-4xl font-sans text-black mb-3">Honor & Awards</h1>
//           <div className="w-28 h-1 bg-red-500 mx-auto rounded-full"></div>
//         </motion.div>

//         {/* Desktop Grid - Hidden on mobile */}
//         {/* <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12 px-4 md:px-8 ">
//           {awardsData.map((award, index) => (
//             <AwardCard
//               key={index}
//               award={award}
//               index={index}
//               isMobile={false}
//             />
//           ))}
//         </div> */}

//         {/* Mobile Carousel using Swiper - Hidden on desktop */}
//         <div className="w-full">
//           <Swiper
//             modules={[Autoplay, Pagination]}
//             spaceBetween={16}
//             slidesPerView={1.2}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: true,
//               pauseOnMouseEnter: true,
//             }}
//             pagination={{
//               clickable: true,
//               bulletClass: "swiper-pagination-bullet",
//               bulletActiveClass: "swiper-pagination-bullet-active",
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1.2,
//                 spaceBetween: 24,
//               },
//             }}
//             className="pb-12"
//           >
//             {awardsData.map((award, index) => (
//               <SwiperSlide key={index}>
//                 <AwardCard award={award} index={index} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <style jsx global>{`
//             .swiper-pagination {
//               bottom: 0 !important;
//             }
//             .swiper-pagination-bullet {
//               width: 8px;
//               height: 8px;
//               background: #d1d5db;
//               opacity: 1;
//             }
//             .swiper-pagination-bullet-active {
//               background: #2b2b2b;
//               width: 24px;
//               border-radius: 4px;
//             }
//           `}</style>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HonorsAwards;

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import AwardCard from "./AwardCard";

const awardsData = [
  {
    title: "Softec'22 🏆",
    location: "FAST NUCES, Lahore",
    description:
      "Won 1st prize in Mobile App Development at SOFTEC'22, competing against 37 teams from 20+ universities. This achievement highlights my team's technical expertise, problem-solving skills, and strong collaboration, reinforcing our passion for innovation in technology.",
    image: "https://i.ibb.co/vvwqKt57/ibrahimarif.webp",
    buttonText: "Official Source",
    buttonLink: "https://lahore.comsats.edu.pk/cs/20220405-news.aspx",
  },
  {
    title: "CodinGuru 5.0 🏆",
    location: "LUMS, Lahore",
    description:
      "Our team won 1st prize at CodinGuru 5.0 for our MedTech idea, recognized as the best business-generating and innovative solution, showcasing our technical and creative excellence.",
    image: "https://i.ibb.co/6RMrrk9K/ibrahimarif-1.webp",
    buttonText: "Official Source",
    buttonLink: "https://lahore.comsats.edu.pk/cs/20230126-news.aspx",
  },
  {
    title: "Final Year Project 🥇",
    location: "COMSATS University, Lahore",
    description:
      'Won 1st prize for Best Final Year Project at COMSATS for developing "Smart Home Surveillance System," a machine learning-powered platform detecting suspicious activities and alerting users via a mobile app.',
    image: "https://i.ibb.co/1JZ6sSr8/ibrahimarif-2.webp",
    buttonText: "Official Source",
    buttonLink: "https://www.facebook.com/photo/?fbid=561883979301777",
  },
  {
    title: "Honorary Alumni 🚀",
    location: "COMSATS University, Lahore",
    description:
      "Within a year of graduating, I successfully founded and led INFILP, a technology startup specializing in mobile app development. This recognition highlights my contributions to the industry, entrepreneurial achievements, and dedication to innovation in the tech space.",
    image: "https://i.ibb.co/RT8dS99s/IMG-0979-min-1.jpg",
    buttonText: "Official Source",
    buttonLink: "https://www.facebook.com/share/p/1B5Ks3RL7G/",
  },
];

const AwardsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const maxIndex = Math.max(0, awardsData.length - slidesToShow);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  // const cardWidth = isMobile ? 100 : isTablet ? 50 : 33.333;
  const gap = isMobile ? 5 : 2;

  // Triple the data for seamless looping
  const extendedData = [...awardsData, ...awardsData, ...awardsData];

  // Animation setup - move one card at a time continuously
  // useEffect(() => {
  //   if (isHovered) return;

  //   const cardWidth = 100 / slidesToShow;
  //   const totalCards = awardsData.length;
  //   let currentStep = 0;

  //   const animate = async () => {
  //     while (!isHovered) {
  //       currentStep++;

  //       await controls.start({
  //         x: `-${cardWidth * currentStep}%`,
  //         transition: {
  //           duration: 2,
  //           ease: "easeInOut",
  //         },
  //       });

  //       await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 second pause

  //       if (currentStep >= totalCards) {
  //         moved;
  //         controls.set({ x: "0%" });
  //         currentStep = 0;
  //       }
  //     }
  //   };

  //   animate();

  //   return () => controls.stop();
  // }, [controls, slidesToShow, isHovered, awardsData.length]);

  // Animation setup - move one card at a time continuously
  useEffect(() => {
    if (isHovered) return;

    const cardWidth = 100 / slidesToShow;
    const totalCards = awardsData.length;
    let currentStep = 0;

    const animate = async () => {
      while (!isHovered) {
        currentStep++;

        await controls.start({
          x: `-${cardWidth * currentStep}%`,
          transition: {
            duration: 2, // 2 seconds per card (slow speed)
            ease: "easeInOut",
          },
        });

        // Pause between card movements
        await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 second pause

        // When we've moved through one full set, reset position seamlessly
        if (currentStep >= totalCards) {
          controls.set({ x: "0%" });
          currentStep = 0;
        }
      }
    };

    animate();

    return () => controls.stop();
  }, [controls, slidesToShow, isHovered, awardsData.length]);

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.stop();
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  const cardWidth = 100 / slidesToShow;

  return (
    <div className="w-full max-w-7xl mx-auto">
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
          className="text-center mt-24 mb-24"
        >
          <h1 className="text-4xl font-SfProDisplay-regular text-custom-black mb-3">
            <span className="font-SfProDisplay-regular"> Honor & Awards </span>
          </h1>
          <div className="w-28 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>
      </motion.div>
      <div className="relative">
        {/* Navigation Buttons */}
        {/* <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg transition-all ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          disabled={currentIndex >= maxIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg transition-all ${
            currentIndex >= maxIndex
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button> */}

        {/* Carousel Container */}
        <div
          className="overflow-hidden"
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          <motion.div
            ref={containerRef}
            className="flex"
            animate={controls}
            style={{ gap: `${gap}px` }}
          >
            {extendedData.map((award, index) => (
              <motion.div
                key={award.id}
                style={{
                  minWidth: `calc(${cardWidth}% - ${
                    (gap * (slidesToShow - 1)) / slidesToShow
                  }px)`,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 "
              >
                <AwardCard award={award} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        {/* <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all ${
                index === currentIndex
                  ? "w-6 h-2 bg-gray-800 rounded-full"
                  : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default AwardsCarousel;
