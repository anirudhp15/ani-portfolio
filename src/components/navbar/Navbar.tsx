"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();

  // Toggle mobile nav visibility
  const toggleNav = () => setShowNav((prev) => !prev);

  // Single scroll helper function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigation items for desktop
  const desktopNavItems = [
    { label: "Home", route: "/", scrollId: "home" },
    { label: "About", route: "/introduction" },
    { label: "Background", route: "/background", scrollId: "education" },
    { label: "Projects", route: "/projects" },
    { label: "Services", route: "/", scrollId: "footer2" },
  ];

  // Navigation items for mobile
  const mobileNavItems = [
    { label: "HOME", route: "/", scrollId: "home" },
    { label: "ABOUT ME", route: "/introduction" },
    { label: "BACKGROUND", route: "/background", scrollId: "education" },
    { label: "PROJECTS", route: "/projects" },
    { label: "SERVICES", route: "/", scrollId: "footer2" },
  ];

  // Reusable link classes
  const desktopLinkClass =
    "hover:cursor-pointer px-3 py-2 text-[#ddd5ff] transition duration-200 ease-in-out transform hover:scale-105 rounded-lg hover:bg-[#ddd5ff] hover:text-[#5a48ff] flex items-center space-x-2 hover:shadow-lg";
  const mobileLinkClass =
    "flex items-center w-full hover:bg-[#c3b5ff] hover:text-[#5a48ff] p-4 border-b-4 border-gray-600 nav-item transition-all duration-200 ease-in-out rounded-sm";

  return (
    <div className="sticky top-0 z-[100] flex items-center justify-between h-16 px-8 text-white bg-transparent backdrop-blur-xl w-full">
      {/* Logo Section */}
      <div className="mt-1 group logo-container">
        <button
          onClick={() => scrollToSection("home")}
          className="text-3xl font-semibold tracking-wide hover:tracking-tighter transition-all ease-out duration-100 text-[#ddd5ff] group-hover:text-[#5a48ff] group-hover:font-bold logo-ap"
        >
          <span className="logo-a">A</span>
          <span className="hidden ani-part">n</span>
          <span className="hidden ani-part1">i</span>
          <span className="logo-p group-hover:pl-2">P</span>
          <span className="hidden potts-part">o</span>
          <span className="hidden potts-part1">t</span>
          <span className="hidden potts-part2">t</span>
          <span className="hidden potts-part3">s</span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden z-50 gap-4 text-sm font-semibold lg:text-md md:flex">
        {desktopNavItems.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            onClick={
              item.scrollId ? () => scrollToSection(item.scrollId) : undefined
            }
            className={`${desktopLinkClass} ${
              pathname === item.route && !item.scrollId ? "bg-[#ddd5ff]/20" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        onClick={toggleNav}
        className="block md:hidden text-[#c3b5ff] hover:text-[#5a48ff] transition duration-200"
      >
        {!showNav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed left-0 top-0 w-[60%] h-[100vh] md:hidden border-r border-r-gray-900 bg-black ${
          showNav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out shadow-lg`}
      >
        <div className="pl-8 logo-container2">
          <div className="text-4xl font-black transition-colors ease-out text-[#ddd5ff] hover:text-[#5a48ff] hover:font-bold logo-ap">
            <span className="logo-a">A</span>
            <span className="hidden ani-part">n</span>
            <span className="hidden ani-part1">i</span>
            <span className="logo-p">P</span>
            <span className="hidden potts-part">o</span>
            <span className="hidden potts-part1">t</span>
            <span className="hidden potts-part2">t</span>
            <span className="hidden potts-part3">s</span>
          </div>
        </div>
        <ul className="p-4 font-bold text-[#c3b5ff] uppercase space-y-4">
          {mobileNavItems.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              onClick={() => {
                if (item.scrollId) scrollToSection(item.scrollId);
                setShowNav(false);
              }}
              className={`${mobileLinkClass} ${
                pathname === item.route && !item.scrollId
                  ? "bg-[#c3b5ff]/20"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
