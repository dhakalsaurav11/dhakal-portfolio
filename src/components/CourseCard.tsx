"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";

export function CourseCard({
  title,
  code,
  term,
  institution,
  description,
  topics,
  link,
}: Course) {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = descriptionRef.current;
    if (!element) return;

    const updateOverflow = () => {
      if (expanded) {
        setIsOverflowing(true);
        return;
      }

      const { scrollHeight, clientHeight } = element;
      setIsOverflowing(scrollHeight - clientHeight > 2);
    };

    updateOverflow();
    window.addEventListener("resize", updateOverflow);
    return () => window.removeEventListener("resize", updateOverflow);
  }, [description, expanded]);

  return (
    <Card className="bg-neutral-800 text-white border border-neutral-700 transition-transform hover:scale-[1.01] hover:shadow-lg">
      <CardContent className="p-6 space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-sm text-neutral-400">
            {code} • {institution} • {term}
          </p>
        </div>
        <div className="space-y-2">
          <p
            ref={descriptionRef}
            className={cn(
              "text-neutral-300",
              !expanded && isOverflowing && "clamp-3-lines"
            )}
          >
            {description}
          </p>
          {isOverflowing && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              {expanded ? "Show Less" : "More"}
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-neutral-300">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-neutral-900 border border-neutral-700 px-3 py-1"
            >
              {topic}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm text-blue-400 hover:text-blue-300"
          >
            View syllabus
          </a>
        )}
      </CardContent>
    </Card>
  );
}
