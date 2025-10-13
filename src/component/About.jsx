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
    <div className="bg-offwhite pt-12 sm:py-16 scroll-mt-8">
      <div className="flex md:flex-row flex-col max-w-7xl mx-auto px-4 xl:px-0 items-center">
        <div className="lg:flex-shrink-0 items-center flex">
          <AboutCard />
        </div>

        <div className="flex flex-col w-full">
          <div className="hidden md:flex flex-col w-full">
            <div className="flex items-start justify-between">
              <div className="md:px-4 flex-1">
                <CareerJourneyCard />
              </div>
              <div>
                <DeliveredApps />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="pl-4 pt-3">
                <ExpertiseTags />
              </div>
              <div className="pl-4 pt-3 flex-1">
                <TeamLeadership />
              </div>
            </div>
          </div>

          <div className="md:hidden pt-8 pb-12 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={16}
                slidesPerView="auto"
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
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
                className=""
              >
                <SwiperSlide>
                  <CareerJourneyCard />
                </SwiperSlide>
                <SwiperSlide>
                  <DeliveredApps />
                </SwiperSlide>
                <SwiperSlide>
                  <ExpertiseTags />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamLeadership />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <style jsx global>{`
            .swiper-pagination {
              position: relative !important;
              bottom: 0px !important;
              margin-top: 24px !important;
            }
            .swiper-pagination-bullet {
              background: #ff0000;
              opacity: 0.5;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
            }
            .swiper-slide {
              width: 100% !important;
              height: auto !important;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default About;
