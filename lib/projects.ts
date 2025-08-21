import path from "path";
import { fetchAllMdxFilesData, MdxFileData } from "./mdx-fetch";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export interface ProjectMetadata {
  title: string;
  image: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  tags: string[];
  links: { [key: string]: string };
}

export async function getProjectsData(): Promise<
  MdxFileData<ProjectMetadata>[]
> {
  const allProjectsData = await fetchAllMdxFilesData<ProjectMetadata>(
    PROJECTS_DIR
  );
  return allProjectsData.sort((a, b) => {
    if (a.metadata.endDate === b.metadata.endDate) {
      return a.metadata.startDate.localeCompare(b.metadata.startDate);
    }
    return b.metadata.endDate.localeCompare(a.metadata.endDate);
  });
}
