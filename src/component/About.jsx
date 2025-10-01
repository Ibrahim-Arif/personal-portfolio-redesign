// "use client";
// import React from "react";
// import CareerJourneyCard from "./CareerJourneyCard";
// import { div } from "framer-motion/client";
// import AboutCard from "./AboutCard";
// import ExpertiseTags from "./ExpertiseTags";
// import TeamLeadership from "./TeamLeadership";
// import DeliveredApps from "./DeliveredApps";

// const About = () => {
//   return (
//     <div className="bg-[#F5F5F7] py-8">
//       <div className="flex lg:flex-row flex-col max-w-7xl mx-auto px-4 ">
//         <div className="">
//           <AboutCard />
//         </div>
//         <div className="flex flex-col">
//           <div className="flex items-center justify-between ">
//             <div className="pl-4">
//               <CareerJourneyCard />
//             </div>
//             <div className="">
//               <DeliveredApps />
//             </div>
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="pl-4 pt-6">
//               <ExpertiseTags />
//             </div>
//             <div className="pl-4 pt-6">
//               <TeamLeadership />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// "use client";
// import React from "react";
// import CareerJourneyCard from "./CareerJourneyCard";
// import AboutCard from "./AboutCard";
// import ExpertiseTags from "./ExpertiseTags";
// import TeamLeadership from "./TeamLeadership";
// import DeliveredApps from "./DeliveredApps";

// const About = () => {
//   return (
//     <div className="bg-[#F5F5F7] py-8">
//       <div className="flex lg:flex-row flex-col max-w-7xl mx-auto px-4">
//         {/* About Card - Always visible */}
//         <div className="lg:flex-shrink-0">
//           <AboutCard />
//         </div>

//         {/* Right Side Content */}
//         <div className="flex flex-col w-full">
//           {/* Desktop View - XL and above */}
//           <div className="hidden xl:flex flex-col w-full">
//             {/* Top Row */}
//             <div className="flex items-start justify-between">
//               <div className="pl-4">
//                 <CareerJourneyCard />
//               </div>
//               <div>
//                 <DeliveredApps />
//               </div>
//             </div>

//             {/* Bottom Row */}
//             <div className="flex items-center justify-between">
//               <div className="pl-4 pt-6">
//                 <ExpertiseTags />
//               </div>
//               <div className="pl-4 pt-6">
//                 <TeamLeadership />
//               </div>
//             </div>
//           </div>

//           {/* Mobile/Tablet View - Below XL - Horizontal Scroll */}
//           <div className="xl:hidden overflow-x-auto overflow-y-visible pt-12 pb-12 snap-x snap-mandatory scrollbar-hide">
//             <div className="flex gap-4 px-4">
//               <div className="flex-shrink-0  snap-center">
//                 <CareerJourneyCard />
//               </div>
//               <div className="flex-shrink-0  snap-center">
//                 <DeliveredApps />
//               </div>
//               <div className="flex-shrink-0  snap-center">
//                 <ExpertiseTags />
//               </div>
//               <div className="flex-shrink-0 snap-center">
//                 <TeamLeadership />
//               </div>
//             </div>
//           </div>

//           {/* Custom Scrollbar Hide Styles */}
//           <style jsx>{`
//             .scrollbar-hide::-webkit-scrollbar {
//               display: none;
//             }
//             .scrollbar-hide {
//               -ms-overflow-style: none;
//               scrollbar-width: none;
//             }
//           `}</style>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TeamLeadership from "./TeamLeadership";
import ExpertiseTags from "./ExpertiseTags";
import DeliveredApps from "./DeliveredApps";
import CareerJourneyCard from "./CareerJourneyCard";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="bg-[#F5F5F7] py-8">
      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto px-4">
        {/* About Card - Always visible */}
        <div className="lg:flex-shrink-0 justify-center items-center flex">
          <AboutCard />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col w-full">
          {/* Desktop View - XL and above */}
          <div className="hidden xl:flex flex-col w-full">
            {/* Top Row */}
            <div className="flex items-start justify-between">
              <div className="pl-4">
                <CareerJourneyCard />
              </div>
              <div>
                <DeliveredApps />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between">
              <div className="pl-4 pt-6">
                <ExpertiseTags />
              </div>
              <div className="pl-4 pt-6">
                <TeamLeadership />
              </div>
            </div>
          </div>

          {/* Mobile/Tablet View - Below XL - Swiper Carousel */}
          <div className="xl:hidden pt-12 pb-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={16}
              slidesPerView="auto"
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                  centeredSlides: true,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
              }}
              className="px-4"
            >
              <SwiperSlide style={{ width: "auto" }}>
                <CareerJourneyCard />
              </SwiperSlide>
              <SwiperSlide style={{ width: "auto" }}>
                <DeliveredApps />
              </SwiperSlide>
              <SwiperSlide style={{ width: "auto" }}>
                <ExpertiseTags />
              </SwiperSlide>
              <SwiperSlide style={{ width: "auto" }}>
                <TeamLeadership />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Custom Swiper Styles */}
          <style jsx global>{`
            .swiper-pagination {
              bottom: 0 !important;
            }
            .swiper-pagination-bullet {
              background: #333;
              opacity: 0.5;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default About;
