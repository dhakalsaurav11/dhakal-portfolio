"use client";

import { useMemo, useState } from "react";
import { highlightedCourses } from "@/lib/courses";

export default function CoursesPage() {
  const [filter, setFilter] = useState<string | null>(null);

  const topics = useMemo(
    () =>
      Array.from(
        new Set(highlightedCourses.flatMap((course) => course.topics))
      ).sort(),
    []
  );

  const filteredCourses = filter
    ? highlightedCourses.filter((course) => course.topics.includes(filter))
    : highlightedCourses;

  return (
    <div className="min-h-screen bg-[#FBFBFA] py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-4 border-b border-[#EAEAEA] pb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] tracking-[-0.03em]">
            Coursework
          </h1>
          <p className="text-[#787774] text-lg max-w-xl leading-relaxed">
            From reinforcement learning to operating systems, architecture, and
            database design &mdash; coursework that spans the stack and informs
            how I approach real projects.
          </p>
        </div>

        {/* Filter controls */}
        <div className="space-y-3">
          <p className="text-xs font-medium text-[#787774] uppercase tracking-[0.06em]">
            Filter by topic
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter(null)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === null
                  ? "bg-[#111111] text-white"
                  : "bg-[#F7F6F3] text-[#787774] border border-[#EAEAEA] hover:text-[#2F3437]"
              }`}
            >
              All
            </button>
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setFilter(topic)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                  filter === topic
                    ? "bg-[#111111] text-white"
                    : "bg-[#F7F6F3] text-[#787774] border border-[#EAEAEA] hover:text-[#2F3437]"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Table header */}
        <div>
          <div className="grid grid-cols-10 text-[10px] font-medium text-[#787774] uppercase tracking-[0.06em] border-b border-[#EAEAEA] pb-3">
            <div className="col-span-2">Code</div>
            <div className="col-span-4">Title</div>
            <div className="col-span-4">Topics</div>
          </div>

          {/* Table rows */}
          <div className="divide-y divide-[#EAEAEA]">
            {filteredCourses.map((course) => (
              <div
                key={course.code}
                className="grid grid-cols-10 gap-4 text-sm py-4 items-start"
              >
                <div className="col-span-2 font-mono text-[#111111] font-medium text-xs">
                  {course.code}
                </div>
                <div className="col-span-4 text-[#2F3437]">
                  {course.title}
                </div>
                <div className="col-span-4 flex flex-wrap gap-1.5">
                  {course.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="bg-[#F7F6F3] text-[#787774] text-[10px] px-2 py-0.5 rounded-md font-medium uppercase tracking-[0.04em]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-[#787774] pt-4">
          {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""} &middot; University of New Mexico
        </p>
      </div>
    </div>
  );
}
