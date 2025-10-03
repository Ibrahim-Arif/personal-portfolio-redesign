"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareBehance } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <footer className="relative py-12 md:py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
          <div className="flex items-center justify-center gap-3">
            <span className="text-grayC text-lg md:text-[38px] font-SfProDisplay-medium">
              +92 (349) 6701657
            </span>
            <button
              onClick={() => handleCopy("+1 (737) 282-1524", "phone")}
              className="text-grayC hover:text-[#F61A12] hover:scale-110 transition-all duration-300 ease-in-out p-1 cursor-pointer"
              title="Copy phone number"
            >
              {copiedPhone ? (
                <Check
                  size={18}
                  className="text-green-500 md:w-[25px] md:h-[25px]"
                />
              ) : (
                <Copy size={18} className="md:w-[25px] md:h-[25px]" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="text-grayC text-lg md:text-[38px] font-SfProDisplay-medium">
              ibrahimarif@infilp.com
            </span>
            <button
              onClick={() => handleCopy("contact@infilp.com", "email")}
              className="text-grayC hover:text-[#F61A12] hover:scale-110 transition-all duration-300 ease-in-out p-1 cursor-pointer"
              title="Copy email"
            >
              {copiedEmail ? (
                <Check
                  size={18}
                  className="text-green-500 md:w-[25px] md:h-[25px]"
                />
              ) : (
                <Copy size={18} className="md:w-[25px] md:h-[25px]" />
              )}
            </button>
          </div>
        </div>

        <hr className="border-gray-400" />

        <div className="text-center mt-4 relative z-10">
          <p className="text-grayC text-sm md:text-base font-SfProDisplay-medium md:absolute md:-bottom-7 md:left-1/2 md:transform md:-translate-x-1/2 md:translate-y-1/2">
            Copyright © 2025 Ibrahim Arif. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
