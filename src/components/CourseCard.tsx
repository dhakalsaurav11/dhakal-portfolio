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
    <Card className="bg-white text-[#2F3437] border border-[#EAEAEA] shadow-none hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-200">
      <CardContent className="p-6 space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-[#111111]">{title}</h2>
          <p className="text-xs font-mono text-[#787774]">
            {code} &middot; {institution} &middot; {term}
          </p>
        </div>
        <div className="space-y-2">
          <p
            ref={descriptionRef}
            className={cn(
              "text-sm text-[#787774] leading-relaxed",
              !expanded && isOverflowing && "clamp-3-lines"
            )}
          >
            {description}
          </p>
          {isOverflowing && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="text-sm text-[#111111] hover:text-[#555555] transition-colors duration-200"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {topics.map((topic) => (
            <span
              key={topic}
              className="bg-[#F7F6F3] text-[#787774] text-[10px] px-2 py-0.5 rounded-md font-medium uppercase tracking-[0.04em]"
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
            className="inline-flex text-sm text-[#111111] border-b border-[#EAEAEA] pb-0.5 hover:border-[#111111] transition-colors duration-200"
          >
            View syllabus
          </a>
        )}
      </CardContent>
    </Card>
  );
}
