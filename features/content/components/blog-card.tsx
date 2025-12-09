import Link from "next/link";
import { Badge } from "@/features/design-system/components/ui/badge";
import type { BlogPost } from "../schemas/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      className="group -mx-2 block rounded border-border border-b px-2 py-4 transition-colors last:border-0 hover:bg-muted/30"
      href={post.url}
    >
      <div className="mb-1 flex items-center gap-2 text-muted-foreground text-xs">
        <time className="font-mono">
          {post.frontmatter.publishedAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <Badge className="font-display text-xs" variant="outline">
          {post.readingTime} min read
        </Badge>
      </div>
      <h3 className="font-display text-lg transition-colors group-hover:text-primary">
        {post.frontmatter.title}
      </h3>
      <p className="mt-1 line-clamp-2 text-muted-foreground text-sm">
        {post.frontmatter.description}
      </p>
      {post.frontmatter.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {post.frontmatter.tags.map((tag) => (
            <Badge className="font-mono text-xs" key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </Link>
  );
}
