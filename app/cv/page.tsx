import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCVEntries, getPersonalInfo, type CVEntry } from "@/lib/cv";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  GraduationCap,
  Heart,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function renderMarkdown(content: string) {
  const { unified } = await import("unified");
  const remarkParse = await import("remark-parse");
  const remarkRehype = await import("remark-rehype");
  const rehypeStringify = await import("rehype-stringify");

  const processor = unified()
    .use(remarkParse.default)
    .use(remarkRehype.default)
    .use(rehypeStringify.default);

  const result = await processor.process(content);
  return String(result);
}

function CVEntryCard({ entry }: { entry: CVEntry }) {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <CardTitle className="text-lg">{entry.title}</CardTitle>
            {entry.company && (
              <p className="text-blue-600 font-medium">{entry.company}</p>
            )}
            {entry.location && (
              <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                <MapPin className="w-3 h-3" />
                <span>{entry.location}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 whitespace-nowrap">
            <Calendar className="w-4 h-4" />
            <span>
              {entry.startDate} - {entry.endDate}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div
          className="prose prose-sm max-w-none cv-content"
          dangerouslySetInnerHTML={{ __html: entry.content }}
        />
      </CardContent>
    </Card>
  );
}

export default async function CVPage() {
  const personalInfo = getPersonalInfo();
  const experienceEntries = getCVEntries("experience");
  const educationEntries = getCVEntries("education");
  const volunteeringEntries = getCVEntries("volunteering");

  // Render markdown content for all entries
  const processedExperience = await Promise.all(
    experienceEntries.map(async (entry) => ({
      ...entry,
      content: await renderMarkdown(entry.content),
    }))
  );

  const processedEducation = await Promise.all(
    educationEntries.map(async (entry) => ({
      ...entry,
      content: await renderMarkdown(entry.content),
    }))
  );

  const processedVolunteering = await Promise.all(
    volunteeringEntries.map(async (entry) => ({
      ...entry,
      content: await renderMarkdown(entry.content),
    }))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header Section */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative">
                <Image
                  src={"/images/cv/profile-photo.jpg"}
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
                <h2 className="text-xl text-blue-600 font-semibold mb-1">
                  {personalInfo.title}
                </h2>
                <p className="text-gray-600 mb-4">{personalInfo.company}</p>
                <p className="text-gray-700 leading-relaxed max-w-2xl">
                  {personalInfo.bio}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Experience */}
            {processedExperience.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Professional Experience
                  </h2>
                </div>
                {processedExperience.map((entry) => (
                  <CVEntryCard key={entry.slug} entry={entry} />
                ))}
              </section>
            )}

            {/* Education */}
            {processedEducation.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Education
                  </h2>
                </div>
                {processedEducation.map((entry) => (
                  <CVEntryCard key={entry.slug} entry={entry} />
                ))}
              </section>
            )}

            {/* Volunteering */}
            {processedVolunteering.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Volunteering
                  </h2>
                </div>
                {processedVolunteering.map((entry) => (
                  <CVEntryCard key={entry.slug} entry={entry} />
                ))}
              </section>
            )}
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {personalInfo.languages.map((lang, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium text-gray-900">
                        {lang.language}
                      </span>
                      <Badge variant="outline">{lang.proficiency}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interests.map((interest) => (
                    <Badge key={interest} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
