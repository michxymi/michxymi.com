import type { Metadata } from "next";
import { BlogCard } from "@/features/content/components/blog-card";
import { getAllBlogPosts } from "@/features/content/lib/blog";
import { PageHeader } from "@/features/navigation/components/page-header";

const description =
  "I write words sometimes. You're here now. We both made choices.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  openGraph: {
    title: "Blog",
    description,
  },
  twitter: {
    title: "Blog",
    description,
  },
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div>
      <PageHeader
        description="I write words sometimes. You're here now. We both made choices."
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
