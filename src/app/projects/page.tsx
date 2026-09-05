"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allProjects } from "@/lib/projects";

const categories = [
  { id: "clients", label: "Client work" },
  { id: "engineering", label: "Engineering" },
];

export default function WorkPage() {
  const [view, setView] = useState<"clients" | "engineering">("clients");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let projects = allProjects;

    if (view === "clients") {
      projects = projects.filter((p) => p.category === "client");
    } else {
      projects = projects.filter((p) => p.category === "engineering");
    }

    const q = query.trim().toLowerCase();
    if (!q) return projects;

    return projects.filter((p) => {
      const hay = `${p.title} ${p.description} ${p.role} ${(p.tech || []).join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [view, query]);

  return (
    <div className="min-h-screen bg-[#FBFBFA] py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="space-y-6 border-b border-[#EAEAEA] pb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] tracking-[-0.03em]">
            Selected work
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="text-lg text-[#787774] max-w-xl leading-relaxed">
              A collection of commercial platforms and technical systems
              built at the intersection of marketing strategy and engineering.
            </p>

            <div className="relative w-full md:w-56">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search projects"
                spellCheck={false}
                className="w-full bg-white border border-[#EAEAEA] rounded-md pl-3 pr-3 py-2 text-sm text-[#2F3437] placeholder:text-[#787774] outline-none focus-visible:ring-2 focus-visible:ring-[#111111]/10 focus-visible:border-[#111111]/20 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="inline-flex p-0.5 bg-[#F7F6F3] rounded-md border border-[#EAEAEA]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setView(cat.id as "clients" | "engineering")}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  view === cat.id
                    ? "text-[#111111] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                    : "text-[#787774] hover:text-[#2F3437]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-[#787774] uppercase tracking-[0.06em]">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={
              view === "clients"
                ? "grid md:grid-cols-2 gap-px bg-[#EAEAEA] rounded-lg overflow-hidden border border-[#EAEAEA]"
                : "space-y-3"
            }
          >
            {filtered.length === 0 ? (
              <div className="col-span-full py-20 text-center text-[#787774] text-sm">
                No projects match your search.
              </div>
            ) : (
              filtered.map((project, idx) => (
                <ProjectCard key={idx} project={project} view={view} />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Testimonial */}
        <div className="mt-16 border-t border-[#EAEAEA] pt-16">
          <div className="bg-white rounded-lg border border-[#EAEAEA] p-10 md:p-14">
            <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
              <div className="md:w-2/3 space-y-6">
                <span className="text-xs font-mono text-[#787774] uppercase tracking-[0.06em]">
                  Client feedback
                </span>
                <blockquote className="font-serif text-xl md:text-2xl text-[#111111] leading-relaxed italic">
                  &ldquo;Saurav built a professional platform that clearly communicates
                  our mission. The final product exceeded expectations.&rdquo;
                </blockquote>
                <div>
                  <div className="text-sm font-semibold text-[#111111]">John J. Berger</div>
                  <div className="text-sm text-[#787774]">Author &amp; Climate Policy Expert</div>
                </div>
              </div>

              <div className="md:w-1/3 flex justify-start md:justify-end">
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center bg-[#111111] text-white text-sm font-semibold px-7 rounded-md hover:bg-[#333333] transition-colors duration-200 active:scale-[0.98]"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function ProjectCard({
  project,
  view,
}: {
  project: (typeof allProjects)[number];
  view: "clients" | "engineering";
}) {
  if (view === "clients") {
    return (
      <div className="bg-white p-8 md:p-10 flex flex-col h-full group">
        <div className="flex justify-between items-start mb-5">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-[#111111] group-hover:text-[#555555] transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-[#787774] tracking-[0.04em] uppercase">
              {project.role?.split(",")[0] || "Development"}
            </p>
          </div>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} website`}
              className="text-xs font-medium text-[#787774] border-b border-[#EAEAEA] pb-0.5 hover:text-[#111111] hover:border-[#111111] transition-colors duration-200"
            >
              Visit
            </a>
          )}
        </div>

        <p className="text-sm text-[#787774] leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>

        {project.outcome && (
          <div className="mb-5 p-4 bg-[#EDF3EC] rounded-md">
            <p className="text-xs text-[#346538] font-medium uppercase tracking-[0.04em] mb-1">
              Impact
            </p>
            <p className="text-sm text-[#346538]">{project.outcome}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-5 border-t border-[#EAEAEA] mt-auto">
          {(project.tech || []).slice(0, 4).map((t: string) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md bg-[#F7F6F3] text-[#787774] text-[10px] font-medium uppercase tracking-[0.04em]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-[#EAEAEA] p-5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-200">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/4 min-w-[180px]">
          <h3 className="font-semibold text-[#111111]">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-[#787774] mt-1">
            {project.role?.split(",")[0]}
          </p>
          <div className="flex gap-3 mt-3 text-sm">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#787774] hover:text-[#111111] transition-colors duration-200"
              >
                Source
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#787774] hover:text-[#111111] transition-colors duration-200"
              >
                Live
              </a>
            )}
          </div>
        </div>

        <div className="md:w-3/4 space-y-3">
          <p className="text-sm text-[#787774] leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-[10px] font-mono text-[#787774] uppercase tracking-[0.06em]">
              Stack
            </span>
            {(project.tech || []).map((t: string) => (
              <span
                key={t}
                className="text-xs font-mono text-[#2F3437] bg-[#F7F6F3] px-1.5 py-0.5 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
