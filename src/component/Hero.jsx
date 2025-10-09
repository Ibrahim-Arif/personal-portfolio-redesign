"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const backgroundVariants = {
    hidden: {
      opacity: 0,
      clipPath: "inset(0 50% 0 50%)",
    },
    visible: {
      opacity: 2,
      clipPath: "inset(0 0% 0 0%)",
      transition: {
        duration: 2,
        ease: "easeInOut",
        opacity: {
          duration: 0.3,
        },
        clipPath: {
          duration: 1.8,
          delay: 0.2,
        },
      },
    },
  };

  return (
    <section className="relative flex items-center justify-center h-screen  overflow-hidden bg-gradient-lightwhite -mt-17">
      <motion.img
        src="/images/hero.png"
        alt="Background Line"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/3 lg:top-1/4 w-full "
      />

      {/* Text Content */}
      <div className="absolute top-1/3 z-10 flex flex-col items-center text-center xs:px-6">
        {/* Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-baseline gap-3 text-[28px] md:text-[64px] md:leading-[1.2]"
        >
          <span className="font-SfProDisplay-regular text-gradient-gray ">
            Hi{" "}
          </span>
          <motion.span
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="inline-block"
          >
            <Image
              src="/images/hand.png"
              alt="Hand Wave"
              width={70}
              height={70}
              className="w-10 h-10 md:w-16 md:h-16 object-contain"
            />
          </motion.span>
          <span className="text-gradient-gray">I'm </span>
          <span className="text-[28px] md:text-[64px] font-SfProDisplay-medium gap-3 text-black">
            Ibrahim Arif<span className="text-button pb-0.5 sm:pb-1">.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className=" text-xl font-SfProDisplay-regular md:text-[50px] "
        >
          <span className="text-gradient-gray">founder of </span>{" "}
          <span className=" text-button text-[28px] md:text-[50px]">
            INFILP
          </span>
        </motion.p>

        <motion.button
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="mt-6 w-[122px] h-[43px] bg-button text-base text-white font-SfProDisplay-medium rounded-full shadow-lg hover:bg-[#F70548]/70  cursor-pointer"
        >
          My Resume
        </motion.button>
      </div>
    </section>
  );
}
