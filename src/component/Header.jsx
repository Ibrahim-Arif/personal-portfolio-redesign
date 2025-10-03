"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId); // ✅ highlight the clicked section
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "feedback", label: "Testimonials" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-base md:text-xl font-SfProDisplay-bold text-[#F70548]"
          onClick={() => scrollToSection("top")}
        >
          Ibrahim Arif
        </a>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-4 h-4 md:h-6 md:w-6" />
            ) : (
              <Menu className="w-4 h-4 md:h-6 md:w-6" />
            )}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden md:flex"
          } flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto 
          bg-white md:bg-transparent items-center justify-end 
          space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0 
          shadow-md md:shadow-none`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition-colors duration-200 sm:text-base md:text-[20px] ${
                  activeSection === item.id
                    ? "text-[#F70548] font-semibold" // ✅ active red
                    : "hover:text-[#F70548] text-black"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
