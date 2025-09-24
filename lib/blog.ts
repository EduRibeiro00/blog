import path from "path";
import readingTime from "reading-time";
import {
  fetchAllMdxFilesData,
  fetchMdxFileData,
  MdxFileData,
  MdxFileMetadata,
} from "./data-fetch";

export interface BlogPostMetadata {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface ProcessedBlogPostMetadata extends BlogPostMetadata {
  readingTime: number;
}

const BLOG_POSTS_DIR = path.join(process.cwd(), "content/blog");
const DEFAULT_METADATA_VALUES: BlogPostMetadata = {
  title: "Untitled",
  date: new Date().toISOString(),
  description: "",
  tags: [],
};

export async function getBlogPostsMetadata(): Promise<
  MdxFileMetadata<ProcessedBlogPostMetadata>[]
> {
  const blogPostsData = await fetchAllMdxFilesData<BlogPostMetadata>(
    BLOG_POSTS_DIR,
    DEFAULT_METADATA_VALUES
  );

  const processedBlogPostsMetadata = blogPostsData.map((blogPostData) => ({
    ...blogPostData.metadata,
    readingTime: Math.ceil(readingTime(blogPostData.mdxContent).minutes),
  }));

  return processedBlogPostsMetadata.sort((a, b) =>
    b.date.localeCompare(a.date)
  );
}

export async function getPostBySlug(
  slug: string
): Promise<MdxFileData<ProcessedBlogPostMetadata> | null> {
  const filePath = path.join(BLOG_POSTS_DIR, `${slug}.md`);
  const blogPostData = await fetchMdxFileData(
    slug,
    filePath,
    DEFAULT_METADATA_VALUES
  );

  if (!blogPostData) return blogPostData;

  return {
    ...blogPostData,
    metadata: {
      ...blogPostData?.metadata,
      readingTime: Math.ceil(readingTime(blogPostData.mdxContent).minutes),
    },
  };
}
