export interface CVPersonalInfo {
  name: string;
  image: string;
  title: string;
  institution: string;
  bio: string;
  email: { name: string; link: string };
  linkedin: { name: string; link: string };
  github: { name: string; link: string };
  dev: { name: string; link: string };
  medium: { name: string; link: string };
  cvPdfLink: string;
  skills: { level: string; skills: string[] }[];
  certificates: { title: string; description: string }[];
  languages: { language: string; level: string }[];
  interests: string[];
}

export const PERSONAL_INFO: CVPersonalInfo = {
  name: "Eduardo Ribeiro",
  image: "/images/cv/profile-photo.jpg",
  title: "Software Development Engineer II",
  institution: "Amazon",
  bio: "I am a Software Development Engineer currently working at Amazon in the city of Berlin, Germany. I am originally from Porto, Portugal, where I completed my MSc in Informatics and Computing Engineering in the Faculty of Engineering of the University of Porto. I have a passion for programming/software development, with a focus on backend and cloud development, AI/ML, software architecture, DevOps, among other topics. I have grown to be a proactive person who always seeks to have initiative and to keep learning about my interests.",
  email: {
    name: "eribeiro306@gmail.com",
    link: "mailto:eribeiro306@gmail.com",
  },
  linkedin: {
    name: "eduardocribeiro",
    link: "https://www.linkedin.com/in/eduardocribeiro/",
  },
  github: {
    name: "EduRibeiro00",
    link: "https://github.com/EduRibeiro00",
  },
  dev: {
    name: "eduardocribeiro",
    link: "https://dev.to/eduardocribeiro",
  },
  medium: {
    name: "eduardocribeiro",
    link: "https://eduardocribeiro.medium.com/",
  },
  cvPdfLink:
    "https://drive.google.com/file/d/1rB_650EuTGV4cZG_4msYQEc19y80JgRd/view?usp=drive_link",
  skills: [
    {
      level: "Fields",
      skills: [
        "Backend Engineering",
        "Full Stack Engineering",
        "Systems Architecture",
        "DevOps",
        "Cloud Computing and Architecture (AWS)",
        "AI Engineering (LLMs and ML models)",
      ],
    },
    {
      level: "Technologies",
      skills: [
        "Typescript",
        "Node.js",
        "React",
        "Java",
        "Python",
        "AWS",
        "SQL (Postgres, SQLite)",
        "NoSQL (DynamoDB, Apache Cassandra)",
        "Docker",
        "C",
        "C++",
        "UNIX",
      ],
    },
  ],
  certificates: [
    {
      title: "DGES Merit Scholarship 2019/20",
      description:
        "Merit Scholarship in the 2019/20 Academic Year, given to the best students in Portugal.",
    },
    {
      title: "DGES Merit Scholarship 2018/19",
      description:
        "Merit Scholarship in the 2018/19 Academic Year, given to the best students in Portugal.",
    },
    {
      title: "Núcleo FCL German Course A1.1",
      description:
        "Completed an introductory German course offered by Núcleo FCL.",
    },
  ],
  languages: [
    {
      language: "Portuguese",
      level: "Native",
    },
    {
      language: "English",
      level: "Full Professional Proficiency",
    },
    {
      language: "Spanish",
      level: "Limited Working Proficiency",
    },
  ],
  interests: [
    "Systems Architecture",
    "Dist. Systems",
    "AI/ML Systems",
    "Backend",
    "Web",
    "Agentic AI",
    "IoT",
    "Cloud",
    "Entrepreneurship",
    "Productivity",
    "Chess",
    "Learning languages",
    "Sports / Exercise",
    "Music",
    "Gaming",
    "Traveling",
  ],
};
