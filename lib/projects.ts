import path from "path";
import { fetchAllMdxFilesData, MdxFileData } from "./data-fetch";

export interface ProjectMetadata {
  title: string;
  image: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  tags: string[];
  links: { [key: string]: string };
}

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");
const DEFAULT_METADATA_VALUES: ProjectMetadata = {
  title: "Untitled",
  image: "",
  startDate: "Present",
  endDate: "Present",
  teamSize: 1,
  tags: [],
  links: {},
};

export async function getProjectsData(): Promise<
  MdxFileData<ProjectMetadata>[]
> {
  const allProjectsData = await fetchAllMdxFilesData<ProjectMetadata>(
    PROJECTS_DIR,
    DEFAULT_METADATA_VALUES
  );
  return allProjectsData.sort((a, b) => {
    if (a.metadata.endDate === b.metadata.endDate) {
      return a.metadata.startDate.localeCompare(b.metadata.startDate);
    }
    return b.metadata.endDate.localeCompare(a.metadata.endDate);
  });
}
