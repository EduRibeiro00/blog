import Backlink from "@/components/custom/backlink";
import BlogpostCard from "@/components/custom/blogpost-card";
import { getBlogPostsMetadata } from "@/lib/blog";

/**
 * 14 days in milliseconds
 */
const TWO_WEEKS_MS = 14 * 24 * 60 * 60 * 1000;

export default async function BlogPage() {
  const posts = await getBlogPostsMetadata();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Backlink href="/" text="Back to main page" />
        <div className="mt-4 mb-10">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg">
            In this page you can see all the blog posts I have made so far. I'll
            mainly talk about my software engineering journey and tech related
            stuff, but you might occasionally find something related to other
            hobbies of mine.
          </p>
        </div>
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">
              No blog posts yet
            </h2>
          </div>
        ) : (
          <div>
            {posts.map((post, postIdx) => {
              /**
               * For post to be considered new, it needs to be the most recent one,
               * and have been published in the last 2 weeks.
               */
              const wasWithinLastTwoWeeks =
                Date.now() - new Date(post.date).getTime() <= TWO_WEEKS_MS;
              const isNew = postIdx === 0 && wasWithinLastTwoWeeks;
              return (
                <BlogpostCard key={post.title} post={post} isNew={isNew} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
