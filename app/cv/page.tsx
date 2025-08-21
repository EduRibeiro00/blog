import Backlink from "@/components/custom/backlink";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFullCVData, type CVEntryMetadata } from "@/lib/cv";
import { MdxFileData } from "@/lib/data-fetch";
import { useMDXComponents } from "@/lib/mdx-components";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  Heart,
  MapPin,
} from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

function CVEntryCard({
  metadata,
  mdxSource,
  mdxContent,
}: MdxFileData<CVEntryMetadata>) {
  const mdxComponents = useMDXComponents({});

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <CardTitle className="text-lg">{metadata.title}</CardTitle>
            {metadata.institution && (
              <p className="text-blue-600 font-medium">
                {metadata.institution}
              </p>
            )}
            {metadata.location && (
              <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                <MapPin className="w-3 h-3" />
                <span>{metadata.location}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 whitespace-nowrap">
            <Calendar className="w-4 h-4" />
            <span>
              {metadata.startDate} - {metadata.endDate}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <MDXRemote
          {...mdxSource}
          source={mdxContent}
          components={mdxComponents}
        />
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

        <Card className="mb-8">
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
                <h2 className="text-xl text-blue-600 font-semibold mb-1">
                  {personalInfo.title}
                </h2>
                <p className="text-gray-600 mb-4">{personalInfo.institution}</p>
                <p className="text-gray-700 leading-relaxed max-w-2xl">
                  {personalInfo.bio}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {cvEntries.experience.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Professional Experience
                  </h2>
                </div>
                {cvEntries.experience.map((entry) => (
                  <CVEntryCard key={entry.metadata.slug} {...entry} />
                ))}
              </section>
            )}

            {cvEntries.education.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Education
                  </h2>
                </div>
                {cvEntries.education.map((entry) => (
                  <CVEntryCard key={entry.metadata.slug} {...entry} />
                ))}
              </section>
            )}

            {cvEntries.other.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Other Experiences
                  </h2>
                </div>
                {cvEntries.other.map((entry) => (
                  <CVEntryCard key={entry.metadata.slug} {...entry} />
                ))}
              </section>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.skills.map(({ level, skills }) => (
                    <div key={level}>
                      {level}
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {personalInfo.certificates.map((certInfo, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium text-gray-900">
                        {certInfo.title}
                      </span>
                      {certInfo.description}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {personalInfo.languages.map((langInfo, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium text-gray-900">
                        {langInfo.language}
                      </span>
                      <Badge variant="outline">{langInfo.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

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
