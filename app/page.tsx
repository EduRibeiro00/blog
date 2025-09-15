import SocialLinks from "@/components/custom/social-links";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, FileText } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const age = ((birthday) => {
  const today = new Date();
  const birthdate = new Date(birthday);
  let age = today.getFullYear() - birthdate.getFullYear();
  const m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  return age;
})("2000-04-04");

interface HomeCardProps {
  link: string;
  icon: ReactNode;
  title: string;
  description: string;
}

function HomeCard({ link, icon, title, description }: HomeCardProps) {
  return (
    <Link href={link} className="group">
      <Card className="h-full bg-white border-gray-200">
        <CardContent className="px-6 py-2 text-center">
          <div className="mb-4 flex justify-center">
            <div className="p-3 bg-blue-50 rounded-full ">{icon}</div>
          </div>
          <h3 className="text-xl group-hover:underline font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 mx-2 text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div>
      <div className="relative container mx-auto px-4 pt-9">
        <div className="background-animation"></div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Eduardo Ribeiro
            </h1>
            <p className="text-xl md:text-lg text-gray-600 max-w-3xl mx-auto">
              Hi, I'm Eduardo Ribeiro! I'm a {age} year old software engineer
              from Porto, Portugal, and currently based in Berlin, Germany. Here
              you can find out more stuff about me, my career path until now,
              and some blog posts on software engineering and other topics I'm
              passionate about.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <HomeCard
              link="/blog"
              title="Blog"
              icon={<BookOpen className="w-8 h-8 text-blue-600" />}
              description="Read my latest articles on software development, tech, among other things."
            />
            <HomeCard
              link="/cv"
              title="CV"
              icon={<FileText className="w-8 h-8 text-green-600" />}
              description="View my professional experience, skills, and educational background."
            />
            <HomeCard
              link="/projects"
              title="Projects"
              icon={<Code className="w-8 h-8 text-purple-600" />}
              description="Explore my portfolio of projects that I've developed or contributed to in the past."
            />
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-3xl bg-white border-gray-200">
              <CardContent className="px-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Connect With Me
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Reach out to me and check out my work on various platforms.
                  </p>
                </div>

                <SocialLinks />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
