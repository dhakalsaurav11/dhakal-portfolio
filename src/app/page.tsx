"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <div className="space-y-16 py-12 relative">
      {/* Background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl z-0" />

      {/* Intro Section */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
          Saurav Dhakal
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          I’m a developer who builds with intention — combining clean code, practical design, and curiosity for how systems work. From frontend to backend, I enjoy turning ideas into tools that are simple, scalable, and useful.
        </p>
      </motion.div>

      {/* Featured Project Section */}
      <section className="space-y-6 relative z-10 max-w-4xl mx-auto text-left">
        <h2 className="text-2xl font-semibold text-white border-b border-neutral-800 pb-2">
          Featured Project
        </h2>
        <ProjectCard
          title="SoftSkills LMS System"
          description="Dynamic course and quiz platform built with PHP, MySQL, and Bootstrap."
          tech={["PHP", "CodeIgniter", "MySQL", "JS"]}
          role="Full-stack development, admin UI, quiz logic, certificate gen"
        />
      </section>
    </div>
  );
}
