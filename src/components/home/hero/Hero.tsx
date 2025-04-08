"use client";

import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  AiOutlineDownload,
  AiOutlineCalendar,
  AiOutlineArrowDown,
} from "react-icons/ai";
import Image from "next/image";

const Hero: React.FC = () => {
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer2");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const aboutMeElement = document.getElementById("projects");
    if (aboutMeElement) {
      aboutMeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Framer Motion variants for animations
  const fadeInOne = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    },
  };

  const fadeInTwo = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 2, ease: "easeOut" },
    },
  };

  const fadeInImage = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 1.5 },
    },
  };

  const staggeredFadeIn = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      id="home"
      className="flex relative justify-center w-full h-auto min-h-screen text-white bg-transparent"
    >
      <motion.div
        className="flex z-10 flex-col justify-center mx-auto w-5/6 h-auto md:w-3/4 hero-content"
        initial="hidden"
        animate="visible"
        variants={staggeredFadeIn}
      >
        {/* Name and Intro */}
        <motion.div
          className="m-0 mb-2 text-3xl text-right md:text-4xl md:text-center"
          variants={fadeInOne}
        >
          <p className="py-1 thin">hi, i&apos;m </p>
          <ReactTyped
            className="font-bold text-indigo-400 whitespace-nowrap"
            typeSpeed={50}
            loop={false}
            startDelay={1000}
            strings={["anirudh pottammal"]}
          />
        </motion.div>

        {/* Profile Image */}
        <motion.div variants={fadeInImage}>
          <div className="relative mx-auto my-8 w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/images/polaroid.jpeg"
              alt="Ani Potts"
              fill
              className="object-cover duration-300 ease-in-out rounded-lg shadow-xl outline-4 outline-gray-300 transition-all hover:outline-[#8d83ff] outline-offset-8 hover:shadow-2xl hover:scale-105 z-100"
            />
          </div>
        </motion.div>

        {/* Typed Text Section */}
        <motion.div
          className="flex flex-col md:text-left md:mx-auto md:flex-row"
          variants={fadeInTwo}
        >
          <p className="pr-3 pb-2 text-4xl font-thin tracking-tighter whitespace-nowrap md:font-bold lg:text-5xl">
            i reallyyyy love
          </p>
          <ReactTyped
            className="pb-2 text-4xl font-bold tracking-tighter text-left text-indigo-400 whitespace-nowrap md:text-center lg:text-5xl"
            strings={[
              "math!",
              "programming",
              "quantitative finance",
              "solving puzzles",
              "probability theory",
              "machine learning",
              "data analysis",
              "stochastic calculus",
            ]}
            typeSpeed={40}
            backDelay={2000}
            startDelay={2000}
            backSpeed={60}
            loop
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-row gap-10 mt-4 font-bold md:justify-center lg:mt-6"
          variants={fadeInTwo}
        >
          <button
            onClick={scrollToProjects}
            className="flex flex-row hover:cursor-pointer px-2 py-[6px] text-white bg-indigo-400 hover:text-indigo-400 rounded-lg hover:bg-indigo-200 shadow-xl lg:shadow-none hover:scale-105 transition-all duration-200 whitespace-nowrap md:hidden outline outline-offset-4 outline-white hover:outline-[#8d83ff]"
          >
            <AiOutlineArrowDown className="mr-1 text-2xl animate-bounce" />{" "}
            <span className="mr-1 font-semibold">My Projects</span>
          </button>

          <a
            href="/ani.pottammal_nyu_2026_resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:cursor-pointer px-4 py-2 text-white bg-indigo-400 hover:text-indigo-400 rounded-lg hover:bg-indigo-200 hover:scale-105 items-center transition-all duration-200 justify-center whitespace-nowrap hidden md:flex outline outline-2 shadow-xl hover:shadow-2xl outline-white outline-offset-4 hover:outline-[#8d83ff]">
              <AiOutlineDownload className="mr-2" /> <span>My Resume</span>
            </button>
          </a>

          <button
            onClick={scrollToFooter}
            className="hover:cursor-pointer px-4 py-2 text-white bg-indigo-400 hover:text-indigo-400 rounded-lg hover:bg-indigo-200 hover:scale-105 items-center transition-all hover:outline-[#8d83ff] duration-200 justify-center whitespace-nowrap hidden md:flex outline outline-2 shadow-xl hover:shadow-2xl outline-white outline-offset-4"
          >
            <AiOutlineCalendar className="mr-2" /> <span> Services</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
