"use client";

import React, { useState } from "react";
import { AiOutlineCode } from "react-icons/ai";
import Image from "next/image";
import { Project } from "./projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<"tools" | "details" | "code">(
    "tools"
  );

  return (
    <div className="p-8 m-4 overflow-hidden transition-transform duration-300 ease-in-out transform bg-white rounded-lg shadow-lg lg:m-0 hover:shadow-2xl lg:hover:-translate-y-2 lg:hover:translate-x-2">
      {/* Image */}
      <div className="relative w-full h-48 lg:h-64">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover rounded-sm transition-all duration-300 outline outline-gray-300 outline-8 outline-offset-2 hover:outline-[#8d83ff]"
        />
      </div>

      <div className="pt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm font-semibold text-gray-400">{project.date}</p>
        </div>

        {activeTab !== "details" && (
          <p className="mt-2 mb-4 tracking-wide text-gray-500">
            {project.brief}
          </p>
        )}

        {/* Tab Interface */}
        <div className="flex">
          <div
            onClick={() => setActiveTab("tools")}
            className={`hover:cursor-pointer px-4 py-2 font-semibold transition-colors duration-200 ${
              activeTab === "tools"
                ? "text-gray-700 border-b-4 border-indigo-400"
                : "text-indigo-200"
            }`}
          >
            Tools
          </div>
          <div
            onClick={() => setActiveTab("details")}
            className={`hover:cursor-pointer px-4 py-2 font-semibold transition-colors duration-200 ${
              activeTab === "details"
                ? "text-gray-700 border-b-4 border-indigo-400"
                : "text-indigo-200"
            }`}
          >
            Details
          </div>
          <div
            onClick={() => setActiveTab("code")}
            className={`hover:cursor-pointer px-4 py-2 font-semibold transition-colors duration-200 ${
              activeTab === "code"
                ? "text-gray-700 border-b-4 border-indigo-400"
                : "text-indigo-200"
            }`}
          >
            Code
          </div>
        </div>

        <div className="mt-4">
          {activeTab === "tools" &&
            project.tools &&
            project.tools.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold text-indigo-400 transition transform rounded-full bg-indigo-400/15 hover:scale-105"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          {activeTab === "details" && (
            <p className="text-xs tracking-wide text-gray-500">
              {project.description}
            </p>
          )}
          {activeTab === "code" && (
            <div>
              {project.codeUrl === "#" ? (
                <p className="py-1 text-xs font-semibold tracking-wide text-gray-500">
                  Code not available
                </p>
              ) : (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold tracking-wide text-indigo-400 hover:underline hover:cursor-pointer"
                >
                  View Code on GitHub
                  <AiOutlineCode className="inline-block ml-1" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
