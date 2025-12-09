import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Prose } from "@/features/content/components/prose";
import {
  generateBlogStaticParams,
  getBlogPost,
} from "@/features/content/lib/blog";
import { PageHeader } from "@/components/navigation/page-header";
import { ArticleSchema } from "@/features/seo/components/article-schema";
import { BreadcrumbSchema } from "@/features/seo/components/breadcrumb-schema";

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

  const { title, description, publishedAt, updatedAt, tags, coverImage } =
    post.frontmatter;

  return {
    title,
    description,
    authors: [{ name: "Michael Xymitoulias" }],
    openGraph: {
      type: "article",
      title,
      description,
      url: `/blog/${slug}`,
      publishedTime: publishedAt.toISOString(),
      ...(updatedAt && {
        modifiedTime: updatedAt.toISOString(),
      }),
      authors: ["Michael Xymitoulias"],
      tags,
      ...(coverImage && {
        images: [
          {
            url: coverImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(coverImage && {
        images: [coverImage],
      }),
    },
    alternates: {
      canonical: `/blog/${slug}`,
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
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: "Blog", url: "/blog" },
          { name: post.frontmatter.title, url: post.url },
        ]}
      />
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
    </>
  );
}
