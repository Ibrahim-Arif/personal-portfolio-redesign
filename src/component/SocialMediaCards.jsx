"use client";
import { motion } from "framer-motion";
import SocialCard from "./SocialCard";

const SocialMediaCards = () => {
  const socialData = [
    {
      platform: "Github",
      username: "@ibrahimarif",
      iconPath: "/images/github.svg",
      gradientClass: "bg-gradient-dark",
    },
    {
      platform: "LinkedIn",
      username: "@ibrahimarif",
      iconPath: "/images/linkedin.svg",
      gradientClass: "bg-gradient-blue",
    },
    {
      platform: "LeetCode",
      username: "@ibrahimarif",
      iconPath: "/images/leetcode.svg",
      gradientClass: "bg-gradient-orange",
    },
    {
      platform: "Kaggle",
      username: "@ibrahimarif",
      iconPath: "/images/kaggle.svg",
      gradientClass: "bg-gradient-sky",
    },
    {
      platform: "Instagram",
      username: "@ibrahimarif",
      iconPath: "/images/instagram.svg",
      gradientClass: "bg-gradient-pink",
    },
    {
      platform: "Behance",
      username: "@ibrahimarif",
      iconPath: "/images/behance.svg",
      gradientClass: "bg-gradient-indigo",
    },
  ];

  return (
    <div className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
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
              <span className="font-SfProDisplay-regular"> Let’s Connect </span>
            </h1>
            <div className="w-28 h-1 bg-red-500 mx-auto rounded-full"></div>
          </motion.div>
        </motion.div>
        <div className="grid grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
          {socialData.map((social, index) => (
            <SocialCard
              key={index}
              platform={social.platform}
              username={social.username}
              iconPath={social.iconPath}
              gradientClass={social.gradientClass}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCards;
