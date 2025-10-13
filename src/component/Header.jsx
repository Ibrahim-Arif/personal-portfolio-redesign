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

      const sections = ["top", "about", "projects", "feedback"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("top");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("top");
      setIsMenuOpen(false);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
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
        isScrolled ? "bg-white/85 backdrop-blur-xs shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1320px] mx-auto px-4 py-4 md:py-5 flex justify-between items-center">
        <a
          href="#"
          className="text-base md:text-xl font-PlusJakartaSans-medium text-button"
          onClick={() => scrollToSection("top")}
        >
          Ibrahim Arif
        </a>

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
                className={`transition-colors duration-200 sm:text-base md:text-[16px] ${
                  activeSection === item.id
                    ? "text-red-500 font-PlusJakartaSans-regular"
                    : "hover:text-red-500 text-black font-PlusJakartaSans-regular"
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
