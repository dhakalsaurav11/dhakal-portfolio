'use client';

import { SpinningGlobe } from '@/components/SpinningGlobe';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-10 text-center">
      {/* Heading */}
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold text-white">Saurav Dhakal</h1>
        <p className="text-lg text-neutral-400 max-w-xl mx-auto">
          Full-stack developer and CS student building scalable, fast, and clean digital tools.
        </p>
      </div>

      {/* Globe */}
      <div className="w-full max-w-md">
        <SpinningGlobe />
      </div>

      {/* Recent Work */}
      <div className="w-full max-w-2xl space-y-6 text-left mt-16">
        <h2 className="text-2xl font-bold text-white border-b border-neutral-700 pb-2">Recent Work</h2>
        <div className="space-y-4 text-neutral-300 text-sm">
          <div>
            <p className="font-semibold text-white">Y Combinator Job Simulation – Software Engineer</p>
            <p>
              Built and extended a Kanban-style task system for a logistics startup, integrated Node.js backend for task state persistence, and analyzed SQL product metrics to propose engagement-focused features. Completed via Forage, Jan 2026.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Vista Equity Partners – AI in Action</p>
            <p>
              Designed GenAI workflows for executive insights and automation using prompt engineering, ChatGPT, and Copilot. Improved AI output quality and built scalable feedback analysis tools. Completed via Forage, Jan 2026.
            </p>
            <a
              href="https://www.theforage.com/completion-certificates/BotenCEjm3LFxtq9A/EregFenDKXDDeTGR2_BotenCEjm3LFxtq9A_696d6afb8d5b9c666d473801_1768788410360_completion_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-xs mt-1 inline-block"
            >
              View Credential
            </a>
          </div>
        </div>
      </div>

      {/* View Projects Button */}
      <button
        onClick={() => window.location.href = '/projects'}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
      >
        View Projects
      </button>
    </div>
  );
}
