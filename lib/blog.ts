import path from "path";
import {
  fetchMdxFileData,
  fetchMdxMetadataInDir,
  MdxFileData,
  MdxFileMetadata,
} from "./mdx-fetch";

const BLOG_POSTS_DIR = path.join(process.cwd(), "content/blog");
const DEFAULT_METADATA_VALUES: BlogPostMetadata = {
  title: "Untitled",
  date: new Date().toISOString(),
  description: "",
  tags: [],
};

export interface BlogPostMetadata {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export function getBlogPostsMetadata(): MdxFileMetadata<BlogPostMetadata>[] {
  const allPostsMetadata = fetchMdxMetadataInDir<BlogPostMetadata>(
    BLOG_POSTS_DIR,
    DEFAULT_METADATA_VALUES
  );
  return allPostsMetadata.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostBySlug(
  slug: string
): Promise<MdxFileData<BlogPostMetadata> | null> {
  const filePath = path.join(BLOG_POSTS_DIR, `${slug}.md`);
  return await fetchMdxFileData(slug, filePath, DEFAULT_METADATA_VALUES);
}
