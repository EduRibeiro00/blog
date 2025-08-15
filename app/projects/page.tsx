import Backlink from "@/components/custom/backlink";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Project, PROJECTS } from "@/content/projects/projects";
import { Calendar, ExternalLink, Github, Globe, Users } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

function getTeamSizeText(teamSize: number): string {
  return teamSize === 1 ? "Individual project" : `Team of ${teamSize} people`;
}

function getLinkIcon(type: string): {
  icon: ReactNode;
  label: string;
} {
  switch (type) {
    case "website":
      return { icon: <Globe className="w-4 h-4" />, label: "Website Link" };
    case "github":
      return { icon: <Github className="w-4 h-4" />, label: "GitHub Link" };
    case "demo":
      return { icon: <ExternalLink className="w-4 h-4" />, label: "Demo Link" };
    case "documentation":
      return {
        icon: <ExternalLink className="w-4 h-4" />,
        label: "Link to Docs",
      };
    default:
      return {
        icon: <ExternalLink className="w-4 h-4" />,
        label: "Link",
      };
  }
}

function getProjectImagePath(imageName: string): string {
  return `/images/projects/${imageName}`;
}

function renderProjectDescription(description: string[]): ReactNode[] {
  return description.map((item, index) => {
    /* Simple markdown parsing for bold text */
    const processedText = item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return (
      <p
        key={index}
        className="text-gray-600 text-sm mb-2 last:mb-0"
        dangerouslySetInnerHTML={{ __html: processedText }}
      />
    );
  });
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden py-0">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <Image
              src={getProjectImagePath(project.coverImage)}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>

          <div className="md:w-2/3 p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {project.startDate} - {project.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{getTeamSizeText(project.teamSize)}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-gray-500"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-gray-600 mb-4 leading-relaxed">
              {renderProjectDescription(project.description)}
            </div>

            {Object.keys(project.links).length > 0 && (
              <div className="flex flex-wrap gap-2">
                {Object.entries(project.links).map(([type, link], index) => {
                  const { label, icon } = getLinkIcon(type);
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      asChild
                      className="text-blue-600 border-blue-200 bg-transparent"
                    >
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 group"
                      >
                        {icon}
                        <span className="group-hover:underline">{label}</span>
                      </a>
                    </Button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <Backlink href="/" text="Back to main page" />

        <div className="mb-8">
          <h1 className="mt-4 text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h1>
          <p className="text-lg text-gray-600">
            In this page you can find my portfolio of projects that I've
            developed or contributed to in the past. They range from web
            development, AI, distributed systems, among other topics.
          </p>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
