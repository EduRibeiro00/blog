import Backlink from "@/components/custom/backlink"
import { Badge } from "@/components/ui/badge"
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog"
import { useMDXComponents } from "@/lib/mdx-components"
import { CalendarDays } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const mdxComponents = useMDXComponents({});

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Backlink href="/blog" text="Back to blog" />

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-5xl font-bold text-gray-900 p-0 mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-gray-500 mb-8">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <MDXRemote {...post.source} source={post.content} components={mdxComponents} />
        </article>
      </div>
    </div>
  )
}
