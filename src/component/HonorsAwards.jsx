"use client";
import React, { useRef } from "react";
import AwardCard from "./AwardCard";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

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

// const HonorsAwards = () => {
//   return (
//     <div className="w-full py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mt-14 mb-24"
//         >
//           <h1 className="text-4xl font-SfProDisplay-regular text-black mb-3">
//             Honor & Awards
//           </h1>
//           <div className="w-28 h-1 bg-red-500 mx-auto rounded-full"></div>
//         </motion.div>

//         {/* Awards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
//           {awardsData.map((award, index) => (
//             <AwardCard key={index} award={award} index={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HonorsAwards;

const HonorsAwards = () => {
  return (
    <div className="w-full py-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14 mb-24"
        >
          <h1 className="text-4xl font-sans text-black mb-3">Honor & Awards</h1>
          <div className="w-28 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12 px-4 md:px-8 ">
          {awardsData.map((award, index) => (
            <AwardCard
              key={index}
              award={award}
              index={index}
              isMobile={false}
            />
          ))}
        </div>

        {/* Mobile Carousel using Swiper - Hidden on desktop */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 24,
              },
            }}
            className="pb-12"
          >
            {awardsData.map((award, index) => (
              <SwiperSlide key={index}>
                <AwardCard award={award} index={index} isMobile={true} />
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .swiper-pagination {
              bottom: 0 !important;
            }
            .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background: #d1d5db;
              opacity: 1;
            }
            .swiper-pagination-bullet-active {
              background: #2b2b2b;
              width: 24px;
              border-radius: 4px;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default HonorsAwards;
