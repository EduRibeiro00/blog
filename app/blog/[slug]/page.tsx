import Backlink from "@/components/custom/backlink";
import IconDetailBadge from "@/components/custom/icon-detail-badge";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug } from "@/lib/blog";
import { useMDXComponents } from "@/lib/mdx-components";
import { CalendarDays, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const mdxComponents = useMDXComponents({});

  if (!post) {
    notFound();
  }

  const { metadata: postMetadata, mdxContent, mdxSource } = post;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Backlink href="/blog" text="Back to blog" />

          <div className="flex flex-wrap gap-2 mb-4">
            {postMetadata.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-5xl font-bold text-gray-900 p-0 mb-4">
            {postMetadata.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <IconDetailBadge
              Icon={CalendarDays}
              text={new Date(postMetadata.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              size="md"
            />
            <IconDetailBadge
              Icon={Clock}
              text={`${postMetadata.readingTime} ${
                postMetadata.readingTime === 1 ? "min" : "mins"
              }`}
              size="md"
            />
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <MDXRemote
            {...mdxSource}
            source={mdxContent}
            components={mdxComponents}
          />
        </article>
      </div>
    </div>
  );
}
