import Backlink from "@/components/custom/backlink";
import IconDetailBadge from "@/components/custom/icon-detail-badge";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFullCVData, type CVEntryMetadata } from "@/lib/cv";
import { MdxFileData } from "@/lib/data-fetch";
import { useMDXComponents } from "@/lib/mdx-components";
import { formatTimeRangeStr } from "@/lib/utils";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  Heart,
  Languages,
  LucideIcon,
  MapPin,
  MessageCircleHeart,
  ShieldCheck,
  WandSparkles,
} from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { ReactNode } from "react";

function CVEntryCard({
  metadata,
  mdxSource,
  mdxContent,
}: MdxFileData<CVEntryMetadata>) {
  const mdxComponents = useMDXComponents({});

  return (
    <Card className="mb-6 pb-2">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-x-7">
          <div>
            <CardTitle className="text-xl">{metadata.title}</CardTitle>
            <p className="text-lg font-medium">
              {metadata.institutionLink ? (
                <a
                  href={metadata.institutionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline decoration-1"
                >
                  {metadata.institution}
                </a>
              ) : (
                metadata.institution
              )}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 text-sm text-gray-500 whitespace-nowrap">
            <IconDetailBadge
              Icon={Calendar}
              size="md"
              text={formatTimeRangeStr(metadata.startDate, metadata.endDate)}
            />
            <IconDetailBadge Icon={MapPin} size="md" text={metadata.location} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <MDXRemote
          {...mdxSource}
          source={mdxContent}
          components={mdxComponents}
        />
      </CardContent>
    </Card>
  );
}

function CVSection({
  Icon,
  title,
  entries,
}: {
  Icon: LucideIcon;
  title: string;
  entries: MdxFileData<CVEntryMetadata>[];
}) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-6 h-6" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {entries.map((entry) => (
        <CVEntryCard key={entry.metadata.slug} {...entry} />
      ))}
    </section>
  );
}

function CVSideCard({
  title,
  Icon,
  children,
}: {
  title: string;
  Icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <Card>
      <CardContent>
        <CardTitle className="text-2xl text-gray-900 mb-4">
          <div className="flex items-center gap-2">
            <Icon className="w-6 h-6" />
            {title}
          </div>
        </CardTitle>
        {children}
      </CardContent>
    </Card>
  );
}

export default async function CVPage() {
  const { personalInfo, cvEntries } = await getFullCVData();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Backlink href="/" text="Back to main page" />

        <Card className="mt-4 mb-8 p-0">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative">
                <Image
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  width={200}
                  height={200}
                  className="w-48 h-48 rounded-full object-cover border-4 border-gray-100 shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {personalInfo.name}
                </h1>
                <h2 className="text-xl text-gray-700 font-semibold mb-4">
                  {personalInfo.title} <span className="font-normal">@</span>{" "}
                  {personalInfo.institution}
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  {personalInfo.bio}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {cvEntries.experience.length > 0 && (
              <CVSection
                Icon={Briefcase}
                title="Professional Experience"
                entries={cvEntries.experience}
              />
            )}

            {cvEntries.experience.length > 0 && (
              <CVSection
                Icon={GraduationCap}
                title="Education"
                entries={cvEntries.education}
              />
            )}

            {cvEntries.other.length > 0 && (
              <CVSection
                Icon={Heart}
                title="Other Experiences"
                entries={cvEntries.other}
              />
            )}
          </div>

          <div className="space-y-6">
            <CVSideCard title="Skills" Icon={WandSparkles}>
              <div className="flex flex-col gap-4">
                {personalInfo.skills.map(({ level, skills }) => (
                  <div key={level}>
                    <p className="font-semibold mb-2">{level}</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-gray-500"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CVSideCard>

            <CVSideCard title="Certificates" Icon={ShieldCheck}>
              <div className="flex flex-col gap-4">
                {personalInfo.certificates.map((certInfo, index) => (
                  <div key={index}>
                    <p className="font-semibold text-gray-900">
                      {certInfo.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {certInfo.description}
                    </p>
                  </div>
                ))}
              </div>
            </CVSideCard>

            <CVSideCard title="Languages" Icon={Languages}>
              <div className="flex flex-col gap-4">
                {personalInfo.languages.map((langInfo, index) => (
                  <div key={index}>
                    <p className="font-semibold text-gray-900">
                      {langInfo.language}
                    </p>
                    <p className="text-sm text-gray-600">{langInfo.level}</p>
                  </div>
                ))}
              </div>
            </CVSideCard>

            <CVSideCard title="Interests" Icon={MessageCircleHeart}>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <Badge
                    key={interest}
                    variant="secondary"
                    className="text-gray-500"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </CVSideCard>
          </div>
        </div>
      </div>
    </div>
  );
}
