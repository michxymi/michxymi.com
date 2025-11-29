import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  generateBlogStaticParams,
  getBlogPost,
} from "@/modules/content/lib/blog";
import { PageHeader } from "@/modules/design-system/components/page-header";
import { Prose } from "@/modules/design-system/components/prose";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return generateBlogStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.frontmatter.title} | Michael Xymitoulias`,
    description: post.frontmatter.description,
    openGraph: {
      type: "article",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      publishedTime: post.frontmatter.publishedAt.toISOString(),
      ...(post.frontmatter.updatedAt && {
        modifiedTime: post.frontmatter.updatedAt.toISOString(),
      }),
      tags: post.frontmatter.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <Link
        className="mb-6 inline-flex items-center gap-1 text-muted-foreground text-sm transition-colors hover:text-primary"
        href="/blog"
      >
        &larr; Back to blog
      </Link>

      <header className="mb-8">
        <PageHeader title={post.frontmatter.title} />
        <div className="flex items-center gap-3 text-muted-foreground text-sm">
          <time className="font-mono">
            {post.frontmatter.publishedAt.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="font-display">{post.readingTime} min read</span>
        </div>
        {post.frontmatter.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span
                className="rounded bg-muted px-2 py-0.5 font-mono text-xs"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <Prose>
        <MDXRemote source={post.content} />
      </Prose>
    </article>
  );
}
