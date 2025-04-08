"use client";

import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import Link from "next/link";
import { projects } from "./projects";
import ProjectCard from "./ProjectCard";
import { GoProjectSymlink } from "react-icons/go";

// Define container variants for staggering children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // Each child starts 0.5s after the previous one
    },
  },
};

// Define child variants for the project cards
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const LatestProjects: React.FC = () => {
  // Select the first 3 projects to display as the latest
  const latestProjects = projects.slice(0, 3);

  return (
    <div
      id="projects"
      className="relative z-10 w-full py-20 mx-auto bg-transparent lg:pb-56"
    >
      <div className="flex flex-row justify-center py-8 mx-auto lg:justify-start lg:w-5/6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-center text-gray-300"
        >
          <LiaProjectDiagramSolid className="inline-block mr-2 text-3xl" />
        </motion.div>
        <ReactTyped
          strings={[
            'explore my latest <span class="text-indigo-400 font-bold">projects</span>',
          ]}
          typeSpeed={20}
          backSpeed={20}
          backDelay={1000}
          contentType="html" // Allows HTML markup in the string
          className="text-2xl font-light tracking-tight text-center text-gray-100 lg:text-3xl lg:text-left"
        />
      </div>

      {/* Motion-enabled grid container with staggered children */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid w-5/6 grid-cols-1 gap-6 pb-20 m-auto lg:grid-cols-2 xl:grid-cols-3"
      >
        {latestProjects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center">
        <Link
          href="/projects"
          className="flex items-center justify-center px-4 py-2 text-white transition-all duration-200 bg-indigo-400 rounded-lg shadow-xl hover:cursor-pointer hover:text-indigo-400 hover:bg-indigo-200 hover:scale-105 hover:outline-indigo-400 whitespace-nowrap outline outline-2 hover:shadow-2xl outline-white outline-offset-4"
        >
          View All {projects.length} Projects
          <GoProjectSymlink className="inline-block ml-2" />
        </Link>
      </div>

      <div className="custom-shape-divider-bottom-1739234793">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LatestProjects;
