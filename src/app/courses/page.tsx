"use client";

import { useMemo, useState } from "react";
import { CourseCard } from "@/components/CourseCard";
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
    <div className="py-12 space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Courses</h1>
        <p className="text-neutral-400">
          From reinforcement learning studios to operating systems, architecture, and database design, this coursework spans the stack and fuels how I approach real-world projects.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-neutral-400 text-sm uppercase tracking-wide">
          Filter by topic:
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setFilter(null)}
            className={`px-3 py-1 rounded-full text-sm border ${
              filter === null
                ? "bg-accent text-white"
                : "border-neutral-600 text-neutral-300 hover:text-white"
            }`}
          >
            All
          </button>
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setFilter(topic)}
              className={`px-3 py-1 rounded-full text-sm border ${
                filter === topic
                  ? "bg-accent text-white"
                  : "border-neutral-600 text-neutral-300 hover:text-white"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="mt-8 grid grid-cols-10 text-sm text-neutral-400 font-medium border-b border-neutral-700 pb-2">
          <div className="col-span-2">Code</div>
          <div className="col-span-4">Title</div>
          <div className="col-span-4">Topics</div>
        </div>
        <div className="divide-y divide-neutral-800">
          {filteredCourses.map((course) => (
            <div key={course.code} className="grid grid-cols-10 gap-4 text-sm text-neutral-300 py-4">
              <div className="col-span-2 font-semibold text-white">{course.code}</div>
              <div className="col-span-4">{course.title}</div>
              <div className="col-span-4 flex flex-wrap gap-2">
                {course.topics.map((topic, i) => (
                  <span key={i} className="bg-neutral-800 text-neutral-300 text-xs px-2 py-0.5 rounded">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
