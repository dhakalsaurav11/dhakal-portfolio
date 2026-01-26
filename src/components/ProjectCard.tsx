import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  role: string;
  github?: string;
  website?: string;
  demo?: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  role,
  github,
  website,
  demo,
}: ProjectCardProps) {
  return (
    <Card className="bg-neutral-800 text-white border border-neutral-700 transition-transform hover:scale-[1.02] hover:shadow-xl">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-neutral-300">{description}</p>
        <div className="text-sm text-neutral-400">
          <span className="font-medium text-white">Tech:</span> {tech.join(", ")}<br />
          <span className="font-medium text-white">Role:</span> {role}
        </div>

        <div className="flex gap-3 pt-2 flex-wrap">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 border border-neutral-600 rounded hover:bg-neutral-700"
            >
              GitHub
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 border border-neutral-600 rounded hover:bg-neutral-700"
            >
              Website
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 border border-neutral-600 rounded hover:bg-neutral-700"
            >
              Live Demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
