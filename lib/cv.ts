import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface CVEntry {
  slug: string;
  title: string;
  company?: string;
  location?: string;
  startDate: string;
  endDate: string;
  type: "experience" | "education" | "volunteering";
  content: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  company: string;
  bio: string;
  skills: string[];
  languages: { language: string; proficiency: string }[];
  interests: string[];
}

const cvDirectory = path.join(process.cwd(), "content/cv");

export function getCVEntries(
  type: "experience" | "education" | "volunteering"
): CVEntry[] {
  const typeDirectory = path.join(cvDirectory, type);

  if (!fs.existsSync(typeDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(typeDirectory);
  const entries = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, "");
      const fullPath = path.join(typeDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        company: data.company,
        location: data.location,
        startDate: data.startDate || "",
        endDate: data.endDate || "Present",
        type,
        content,
      };
    });

  // Sort by start date (most recent first)
  return entries.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getPersonalInfo(): PersonalInfo {
  const personalInfoPath = path.join(cvDirectory, "personal-info.json");
  const fileContents = fs.readFileSync(personalInfoPath, "utf8");
  return JSON.parse(fileContents);
}
