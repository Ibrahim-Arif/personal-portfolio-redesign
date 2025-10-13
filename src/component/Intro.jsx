"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Zap, Brain } from "lucide-react";

export default function Intro() {
  return (
    <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-transparent">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-6xl font-inter-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent drop-shadow-sm"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm Ibrahim Arif
        </motion.h1>
        <motion.div
          className="space-y-4 mb-8 md:mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600/90 font-PlusJakartaSans-regular tracking-wide">
            A passionate software engineer specializing in mobile app
            development with React Native.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600/90  tracking-wide font-PlusJakartaSans-regular">
            Founder of{" "}
            <a
              href="https://www.infilp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/90 font-PlusJakartaSans-semiBold"
            >
              INFILP
            </a>
            , a mobile app development startup delivering comprehensive
            scaleable solutions.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <SkillBadge
            icon={<Smartphone className="w-5 h-5 md:w-6 md:h-6" />}
            text="Mobile Development"
          />
          <SkillBadge
            icon={<Brain className="w-5 h-5 md:w-6 md:h-6" />}
            text="Generative AI"
          />
          <SkillBadge
            icon={<Zap className="w-5 h-5 md:w-6 md:h-6" />}
            text="Performance Optimization"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button
              asChild
              size="lg"
              className="text-base md:text-lg bg-primary text-primary-foreground hover:bg-primary/90 px-4 md:px-6 py-2 rounded-lg"
            >
              <a
                href="https://infilp.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Get in touch{" "}
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </a>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBadge({ icon, text }) {
  return (
    <div className="flex items-center bg-primary/10 text-primary rounded-full px-3 py-1 md:px-4 md:py-2 text-sm md:text-base ">
      {icon}
      <span className="ml-2 font-PlusJakartaSans-regular">{text}</span>
    </div>
  );
}
