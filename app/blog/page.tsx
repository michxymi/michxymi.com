import type { Metadata } from "next";
import { BlogCard } from "@/modules/content/components/blog-card";
import { getAllBlogPosts } from "@/modules/content/lib/blog";
import { PageHeader } from "@/modules/design-system/components/page-header";

export const metadata: Metadata = {
  title: "Blog | Michael Xymitoulias",
  description:
    "Thoughts on engineering, leadership, and building great software.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="max-w-2xl">
      <PageHeader
        description="Thoughts on engineering, leadership, and building great software."
        title="Blog"
      />

      {posts.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            No posts yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="divide-y divide-border">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
