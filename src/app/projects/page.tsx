"use client";

import { useState } from "react";
import { allProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

const allTags = Array.from(
  new Set(allProjects.flatMap((p) => p.tech))
).sort();

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter
    ? allProjects.filter((p) => p.tech.includes(filter))
    : allProjects;

  return (
    <div className="py-12 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-neutral-400">
        Filter by tech stack:
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setFilter(null)}
          className={`px-3 py-1 rounded-full text-sm border ${
            filter === null ? "bg-accent text-white" : "border-neutral-600 text-neutral-300"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-3 py-1 rounded-full text-sm border ${
              filter === tag ? "bg-accent text-white" : "border-neutral-600 text-neutral-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Desktop/tablet table header and rows */}
      <div className="mt-8 md:grid hidden grid-cols-12 text-sm text-neutral-400 font-medium border-b border-neutral-700 pb-2">
        <div className="col-span-2">Title</div>
        <div className="col-span-3">Description</div>
        <div className="col-span-2">Tech</div>
        <div className="col-span-3">Role</div>
        <div className="col-span-2">Links</div>
      </div>

      <div className="md:divide-y md:divide-neutral-800 md:block hidden">
        {filtered.map((project, index) => (
          <div
            key={index}
            className="group transition-all duration-200 ease-in-out hover:bg-neutral-800 hover:scale-[1.01] grid grid-cols-12 gap-4 text-sm text-neutral-300 pb-4"
          >
            <div className="col-span-2 font-semibold text-white flex items-center">
              {project.website || project.github ? (
                <a
                  href={project.website || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-400"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </div>
            <div className="col-span-3">{project.description}</div>
            <div className="col-span-2 flex flex-wrap gap-1 break-words">
              {project.tech.map((tech, i) => {
                let color = "bg-gray-700";
                if (tech === "JavaScript") color = "bg-yellow-600";
                else if (tech === "TypeScript") color = "bg-blue-600";
                else if (tech === "React") color = "bg-indigo-600";
                else if (tech === "Tailwind") color = "bg-sky-700";
                else if (tech === "PHP") color = "bg-red-600";
                else if (tech === "Python") color = "bg-green-700";
                else if (tech === "C++") color = "bg-purple-700";
                else if (tech === "Node.js") color = "bg-lime-700";
                else if (tech === "MySQL" || tech === "SQL" || tech === "SQLite") color = "bg-pink-600";
                else if (tech === "GraphQL") color = "bg-rose-600";
                else if (tech === "Java") color = "bg-orange-600";
                return (
                  <span
                    key={i}
                    className={`${color} text-white text-xs px-2 py-0.5 rounded`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
            <div className="col-span-3">{project.role}</div>
            <div className="col-span-2 flex flex-col gap-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Website
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile collapsible details */}
      <div className="md:hidden block divide-y divide-neutral-800">
        {filtered.map((project, index) => (
          <details key={index} className="py-4">
            <summary className="font-semibold text-white cursor-pointer flex items-center">
              {project.title}
              <span className="ml-3 flex flex-wrap gap-1">
                {project.tech.slice(0, 2).map((tech, i) => {
                  let color = "bg-gray-700";
                  if (tech === "JavaScript") color = "bg-yellow-600";
                  else if (tech === "TypeScript") color = "bg-blue-600";
                  else if (tech === "React") color = "bg-indigo-600";
                  else if (tech === "Tailwind") color = "bg-sky-700";
                  else if (tech === "PHP") color = "bg-red-600";
                  else if (tech === "Python") color = "bg-green-700";
                  else if (tech === "C++") color = "bg-purple-700";
                  else if (tech === "Node.js") color = "bg-lime-700";
                  else if (tech === "MySQL" || tech === "SQL" || tech === "SQLite") color = "bg-pink-600";
                  else if (tech === "GraphQL") color = "bg-rose-600";
                  else if (tech === "Java") color = "bg-orange-600";
                  return (
                    <span
                      key={i}
                      className={`${color} text-white text-xs px-2 py-0.5 rounded`}
                    >
                      {tech}
                    </span>
                  );
                })}
                {project.tech.length > 2 && (
                  <span className="text-xs text-neutral-400 ml-1">+{project.tech.length - 2}</span>
                )}
              </span>
            </summary>
            <div className="mt-2 space-y-2 text-neutral-300 text-sm">
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => {
                  let color = "bg-gray-700";
                  if (tech === "JavaScript") color = "bg-yellow-600";
                  else if (tech === "TypeScript") color = "bg-blue-600";
                  else if (tech === "React") color = "bg-indigo-600";
                  else if (tech === "Tailwind") color = "bg-sky-700";
                  else if (tech === "PHP") color = "bg-red-600";
                  else if (tech === "Python") color = "bg-green-700";
                  else if (tech === "C++") color = "bg-purple-700";
                  else if (tech === "Node.js") color = "bg-lime-700";
                  else if (tech === "MySQL" || tech === "SQL" || tech === "SQLite") color = "bg-pink-600";
                  else if (tech === "GraphQL") color = "bg-rose-600";
                  else if (tech === "Java") color = "bg-orange-600";
                  return (
                    <span
                      key={i}
                      className={`${color} text-white text-xs px-2 py-0.5 rounded`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <p>{project.role}</p>
              <div className="flex flex-col gap-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Website
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
