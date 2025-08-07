import { BlogPostMetadata } from "@/lib/blog";
import { CalendarDays, Clock } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface BlogpostCardProps {
  post: BlogPostMetadata;
  isNew?: boolean;
}

export default function BlogpostCard({
  post,
  isNew = false,
}: BlogpostCardProps) {
  return (
    <Card
      key={post.slug}
      className="group cursor-pointer py-4 border-0 border-y-2 -mb-0.5 shadow-none rounded-none"
    >
      <Link href={`/blog/${post.slug}`}>
        <CardHeader>
          {isNew && <Badge className="font-bold">New!</Badge>}
          <CardTitle className="group-hover:underline decoration-1 text-2xl">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col gap-2">
            <CardDescription>{post.description}</CardDescription>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-gray-500">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-3 h-3" />
              <span className="text-xs italic">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {/* TODO: change this to use actual expected reading time */}
              <span className="text-xs italic">4 mins</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
