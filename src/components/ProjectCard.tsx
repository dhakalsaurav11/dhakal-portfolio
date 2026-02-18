import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="bg-white text-slate-800 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
        <p className="text-slate-600">{description}</p>
        <div className="text-sm text-slate-600">
          <span className="font-medium text-slate-900">Tech:</span> {tech.join(", ")}<br />
          <span className="font-medium text-slate-900">Role:</span> {role}
        </div>

        <div className="flex gap-3 pt-2 flex-wrap">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 border border-slate-300 rounded bg-white text-slate-700 hover:bg-slate-100 transition"
            >
              GitHub
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 border border-slate-300 rounded bg-white text-slate-700 hover:bg-slate-100 transition"
            >
              Website
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 border border-slate-300 rounded bg-white text-slate-700 hover:bg-slate-100 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
