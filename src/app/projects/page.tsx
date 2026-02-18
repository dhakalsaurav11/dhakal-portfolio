"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, LayoutTemplate, Search, GitFork, Globe } from "lucide-react";
import { allProjects } from "@/lib/projects"; // Keep your existing import

// --- MOCK DATA FOR PREVIEW (Delete this if using your real import) ---
// const allProjects = [ ... your data ... ];

const categories = [
  { id: "clients", label: "Client Solutions", icon: LayoutTemplate },
  { id: "engineering", label: "Systems Architecture", icon: Code2 },
];

export default function WorkPage() {
  const [view, setView] = useState<"clients" | "engineering">("clients");
  const [query, setQuery] = useState("");

  // Filter Logic
  const filtered = useMemo(() => {
    let projects = allProjects;

    // 1. Filter by Category
    if (view === "clients") {
      projects = projects.filter((p) => p.category === "client");
    } else {
      projects = projects.filter((p) => p.category === "engineering");
    }

    // 2. Filter by Search
    const q = query.trim().toLowerCase();
    if (!q) return projects;

    return projects.filter((p) => {
      const hay = `${p.title} ${p.description} ${p.role} ${(p.tech || []).join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [view, query]);

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* --- HEADER --- */}
        <div className="space-y-6 border-b border-slate-200 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Selected Work
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              I bridge the gap between <span className="text-slate-900 font-medium">marketing objectives</span> and <span className="text-slate-900 font-medium">engineering reality</span>. 
              Below is a collection of commercial platforms and technical systems built for scale.
            </p>
            
            {/* Search Input */}
            <div className="relative w-full md:w-64 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search stack, impact..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* --- CONTROLS --- */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* iOS Style Segmented Control */}
          <div className="inline-flex p-1 bg-slate-200/50 rounded-xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setView(cat.id as any)}
                className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  view === cat.id 
                    ? "text-slate-900 shadow-sm" 
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {view === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
          
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            {filtered.length} Projects Found
          </div>
        </div>

        {/* --- GRID LAYOUT --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={view === "clients" ? "grid md:grid-cols-2 gap-8" : "space-y-4"}
          >
            {filtered.length === 0 ? (
              <div className="col-span-full py-20 text-center text-slate-500">
                No projects match your search.
              </div>
            ) : (
              filtered.map((project, idx) => (
                <ProjectCard key={idx} project={project} view={view} />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* --- FEATURED TESTIMONIAL (Static & Elegant) --- */}
        <div className="mt-20 border-t border-slate-200 pt-16">
          <div className="bg-slate-900 rounded-2xl p-10 md:p-14 text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 blur-[100px] opacity-20" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
               <div className="md:w-2/3 space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30">
                    Trusted Partner
                 </div>
                 <h2 className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                   "Saurav built a professional platform that clearly communicates our mission. The final product exceeded expectations."
                 </h2>
                 <div>
                   <div className="text-white font-semibold">John J. Berger</div>
                   <div className="text-slate-400 text-sm">Author & Climate Policy Expert</div>
                 </div>
               </div>
               
               <div className="md:w-1/3 flex justify-center md:justify-end">
                 <a href="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition shadow-xl">
                   Start Your Project
                 </a>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- SUB-COMPONENT: CARD DESIGN ---
function ProjectCard({ project, view }: { project: any, view: "clients" | "engineering" }) {
  
  // VIEW 1: THE "AGENCY" CARD (For Clients)
  if (view === "clients") {
    return (
      <div className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wide">
              {project.role || "Development & Strategy"}
            </p>
          </div>
          {project.website && (
            <a 
              href={project.website} 
              target="_blank" 
              className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Outcome Box (Crucial for Consulting) */}
        {project.outcome && (
          <div className="mb-6 p-4 bg-emerald-50/50 border border-emerald-100 rounded-lg">
            <p className="text-xs text-emerald-600 font-semibold uppercase mb-1">Impact</p>
            <p className="text-sm font-medium text-emerald-900">{project.outcome}</p>
          </div>
        )}

        {/* Tech Stack (Minimalist) */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 mt-auto">
          {(project.tech || []).slice(0, 4).map((t: string) => (
            <span key={t} className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-medium uppercase tracking-wide">
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // VIEW 2: THE "SYSTEMS" ROW (For Engineering)
  return (
    <div className="group bg-white rounded-lg border border-slate-200 p-5 hover:border-blue-400 transition-colors">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Title & Role */}
        <div className="md:w-1/4 min-w-[200px]">
          <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-slate-500 mt-1">
            {project.role}
          </p>
          <div className="flex gap-3 mt-3">
             {project.github && <a href={project.github} className="text-slate-400 hover:text-slate-900"><GitFork className="w-4 h-4"/></a>}
             {project.website && <a href={project.website} className="text-slate-400 hover:text-slate-900"><Globe className="w-4 h-4"/></a>}
          </div>
        </div>

        {/* Details */}
        <div className="md:w-3/4 space-y-3">
          <p className="text-sm text-slate-600 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech Spec Bar */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-xs font-mono text-slate-400">STACK:</span>
            {(project.tech || []).map((t: string) => (
              <span key={t} className="text-xs font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}