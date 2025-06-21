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
