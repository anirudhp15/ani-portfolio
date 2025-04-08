import React from "react";
import { projects } from "@/components/home/projects/projects";
import ProjectCard from "@/components/home/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <div
      id="projects"
      className="relative z-10 py-20 mx-auto w-full bg-transparent lg:pb-56"
    >
      <h1 className="text-4xl font-bold text-center text-indigo-400 mb-10">
        All Projects
      </h1>

      {/* Grid of projects */}
      <div className="grid grid-cols-1 gap-6 pb-20 m-auto w-5/6 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
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
}
