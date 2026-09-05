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
    <Card className="bg-white text-[#2F3437] border border-[#EAEAEA] shadow-none hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-200">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-[#111111]">{title}</h2>
        <p className="text-sm text-[#787774] leading-relaxed">{description}</p>
        <div className="text-sm text-[#787774]">
          <span className="font-medium text-[#111111]">Tech:</span> {tech.join(", ")}
          <br />
          <span className="font-medium text-[#111111]">Role:</span> {role}
        </div>

        <div className="flex gap-3 pt-2 flex-wrap">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 border border-[#EAEAEA] rounded-md bg-white text-[#2F3437] hover:bg-[#F7F6F3] transition-colors duration-200"
            >
              GitHub
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 border border-[#EAEAEA] rounded-md bg-white text-[#2F3437] hover:bg-[#F7F6F3] transition-colors duration-200"
            >
              Website
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 border border-[#EAEAEA] rounded-md bg-white text-[#2F3437] hover:bg-[#F7F6F3] transition-colors duration-200"
            >
              Live Demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
