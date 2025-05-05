"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <div className="space-y-16 py-12 relative">
      {/* Background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl z-0" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-2 text-white">Saurav Dhakal</h1>
        <p className="text-lg text-neutral-400">
          Full-stack developer • Reverse engineer • Data & systems tinkerer
        </p>
      </motion.div>

      {/* Featured Project (first only for now) */}
      <section className="space-y-10 relative z-10">
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
