import { CVPersonalInfo, PERSONAL_INFO } from "@/content/cv/personal-info";
import path from "path";
import { fetchAllMdxFilesData, MdxFileData } from "./data-fetch";

export enum CVEntryType {
  EXPERIENCE = "experience",
  EDUCATION = "education",
  OTHER = "other",
}

export interface CVEntryMetadata {
  title: string;
  institution: string;
  institutionLink?: string;
  location: string;
  startDate: string;
  endDate: string;
  tags?: string[];
}

export interface FullCVData {
  personalInfo: CVPersonalInfo;
  cvEntries: { [key in CVEntryType]: MdxFileData<CVEntryMetadata>[] };
}

const CV_DIR = path.join(process.cwd(), "content/cv");
const DEFAULT_METADATA_VALUES: CVEntryMetadata = {
  title: "Untitled",
  institution: "Untitled",
  location: "Not specified",
  startDate: "Present",
  endDate: "Present",
  tags: [],
};

export async function getFullCVData(): Promise<FullCVData> {
  const cvEntries: Partial<FullCVData["cvEntries"]> = {};
  for (const entryType of Object.values(CVEntryType)) {
    const typeDir = path.join(CV_DIR, entryType);
    const cvTypeEntries = await fetchAllMdxFilesData<CVEntryMetadata>(
      typeDir,
      DEFAULT_METADATA_VALUES
    );
    cvEntries[entryType] = cvTypeEntries.sort((a, b) => {
      if (a.metadata.endDate === b.metadata.endDate) {
        return a.metadata.startDate.localeCompare(b.metadata.startDate);
      }
      return b.metadata.endDate.localeCompare(a.metadata.endDate);
    });
  }

  return {
    personalInfo: PERSONAL_INFO,
    cvEntries: cvEntries as FullCVData["cvEntries"],
  };
}
