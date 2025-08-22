import Backlink from "@/components/custom/backlink";
import IconDetailBadge from "@/components/custom/icon-detail-badge";
import IconLinkButton from "@/components/custom/icon-link-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MdxFileData } from "@/lib/data-fetch";
import { useMDXComponents } from "@/lib/mdx-components";
import { getProjectsData, ProjectMetadata } from "@/lib/projects";
import { formatTimeRangeStr } from "@/lib/utils";
import {
  Calendar,
  ExternalLink,
  Github,
  Globe,
  LucideIcon,
  Users,
} from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

function getTeamSizeText(teamSize: number): string {
  return teamSize === 1 ? "Individual project" : `Team of ${teamSize} people`;
}

function getLinkIcon(type: string): {
  icon: LucideIcon;
  label: string;
} {
  switch (type) {
    case "website":
      return {
        icon: Globe,
        label: "Website Link",
      };
    case "github":
      return {
        icon: Github,
        label: "GitHub Link",
      };
    case "demo":
      return {
        icon: ExternalLink,
        label: "Demo Link",
      };
    case "documentation":
      return {
        icon: ExternalLink,
        label: "Link to Docs",
      };
    default:
      return {
        icon: ExternalLink,
        label: "Link",
      };
  }
}

function getProjectImagePath(imageName: string): string {
  return `/images/projects/${imageName}`;
}

function ProjectCard({
  metadata,
  mdxContent,
  mdxSource,
}: MdxFileData<ProjectMetadata>) {
  const mdxComponents = useMDXComponents({});

  return (
    <Card className="overflow-hidden py-0">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <Image
              src={getProjectImagePath(metadata.image)}
              alt={metadata.title}
              width={300}
              height={200}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>

          <div className="md:w-2/3 p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {metadata.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                <IconDetailBadge
                  Icon={Calendar}
                  size="md"
                  text={formatTimeRangeStr(
                    metadata.startDate,
                    metadata.endDate
                  )}
                />
                <IconDetailBadge
                  Icon={Users}
                  size="md"
                  text={getTeamSizeText(metadata.teamSize)}
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {metadata.tags.map((tech) => (
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
              <MDXRemote
                {...mdxSource}
                source={mdxContent}
                components={mdxComponents}
              />
            </div>

            {Object.keys(metadata.links ?? {}).length > 0 && (
              <div className="flex flex-wrap gap-2">
                {Object.entries(metadata.links).map(([type, link], index) => {
                  const { label, icon } = getLinkIcon(type);
                  return (
                    <IconLinkButton
                      key={index}
                      Icon={icon}
                      link={link}
                      label={label}
                      variant="row"
                    />
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

export default async function ProjectsPage() {
  const projectsData = await getProjectsData();

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
          {projectsData.map((project, projectIdx) => (
            <ProjectCard key={projectIdx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
