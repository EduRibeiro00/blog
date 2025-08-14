import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Code,
  FileText,
  Github,
  Laptop,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
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
      <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105 bg-white border-gray-200">
        <CardContent className="p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

interface SocialCardProps {
  link: string;
  icon: ReactNode;
  name: string;
}

function SocialCard({ link, icon, name }: SocialCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group">
      <Button
        variant="outline"
        className="w-full h-auto p-4 flex flex-col items-center gap-2 hover:bg-gray-50 bg-transparent"
      >
        {icon}
        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
          {name}
        </span>
      </Button>
    </a>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="background-animation"></div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Eduardo Ribeiro
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
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
              description="Read my latest articles on software development, tutorials, and tech insights."
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
              description="Explore my portfolio of web applications, open source contributions, and side projects."
            />
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-2xl hover:shadow-lg transition-all duration-300 bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Connect With Me
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Reach out to me and check out my work on various platforms.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <SocialCard
                    link="https://github.com/EduRibeiro00"
                    name="GitHub"
                    icon={
                      <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                    }
                  />

                  <SocialCard
                    link="https://linkedin.com/in/eduardocribeiro"
                    name="LinkedIn"
                    icon={
                      <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                    }
                  />

                  <SocialCard
                    link="https://eduardocribeiro.medium.com/"
                    name="Medium"
                    icon={
                      <MessageCircle className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                    }
                  />
                  <SocialCard
                    link="https://dev.to/eduardocribeiro"
                    name="Dev.to"
                    icon={
                      <Laptop className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                    }
                  />
                  <SocialCard
                    link="mailto:eribeiro306@gmail.com"
                    name="Mail"
                    icon={
                      <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
