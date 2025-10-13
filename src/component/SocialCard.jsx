import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const SocialCard = ({
  platform,
  username,
  iconPath,
  gradientClass,
  index,
  link,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      className={`${gradientClass} rounded-2xl px-3 py-4 sm:px-6 sm:py-4 flex flex-col justify-between h-36 w-28 sm:h-44 md:h-40 md:w-[152px] cursor-pointer shadow-lg overflow-hidden`}
    >
      <div className="flex justify-start">
        <motion.div
          className="w-8 h-8 sm:w-10 sm:h-10 relative"
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          <Image
            src={iconPath}
            alt={`${platform} icon`}
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
      <div className="text-white">
        <h3 className="text-base sm:text-lg font-SfProDisplay-semibold -mb-0.5 tracking-wide">
          {platform}
        </h3>
        <p className="text-sm sm:text-sm opacity-90 font-SfProDisplay-regular tracking-wide">
          {username}
        </p>
      </div>
    </motion.div>
  );
};

export default SocialCard;
