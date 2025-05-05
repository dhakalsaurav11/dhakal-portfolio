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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
        {filtered.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            role={project.role}
            github={project.github}
            demo={project.demo}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
