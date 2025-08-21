import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

export type MdxSource = Awaited<ReturnType<typeof serialize>>;

export type MdxFileMetadata<T> = T & { slug: string };

export interface MdxFileData<T> {
  metadata: MdxFileMetadata<T>;
  mdxContent: string;
  mdxSource: MdxSource;
}

export function fetchMdxMetadataInDir<T>(
  dirName: string,
  defaultMetadataValues?: T
): MdxFileMetadata<T>[] {
  if (!fs.existsSync(dirName)) {
    return [];
  }

  const fileNames = fs.readdirSync(dirName);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, "");
      const fullPath = path.join(dirName, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return { ...defaultMetadataValues, ...(data as T), slug };
    });
}

export async function fetchMdxFileData<T>(
  slug: string,
  filePath: string,
  defaultMetadataValues?: T
): Promise<MdxFileData<T> | null> {
  try {
    const fullPath = path.join(filePath);
    let fileContents: string;

    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, "utf8");
    } else {
      return null;
    }

    const { data, content } = matter(fileContents);
    const mdxSource = await serialize(content);

    return {
      metadata: {
        ...defaultMetadataValues,
        ...(data as T),
        slug,
      },
      mdxContent: content,
      mdxSource,
    };
  } catch (error) {
    return null;
  }
}

export async function fetchAllMdxFilesData<T>(
  dirName: string,
  defaultMetadataValues?: T
): Promise<MdxFileData<T>[]> {
  if (!fs.existsSync(dirName)) {
    return [];
  }

  const fileNames = fs.readdirSync(dirName);
  const allPromises = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, "");
      const fullPath = path.join(dirName, fileName);
      return fetchMdxFileData(slug, fullPath, defaultMetadataValues);
    });
  return (await Promise.all(allPromises)).filter((res) => res !== null);
}
