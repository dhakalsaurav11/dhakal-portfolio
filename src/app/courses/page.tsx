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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.code} {...course} />
        ))}
      </div>
    </div>
  );
}
