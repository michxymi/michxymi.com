import path from "node:path";
import { type BlogPost, blogFrontmatterSchema } from "../schemas/blog";
import {
  calculateReadingTime,
  getContentDir,
  getMdxFiles,
  parseMdxFile,
} from "./mdx";

const BLOG_DIR = getContentDir("blog");

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  try {
    const { content, frontmatter } = await parseMdxFile(
      filePath,
      blogFrontmatterSchema
    );

    return {
      slug,
      content,
      frontmatter,
      readingTime: calculateReadingTime(content),
      url: `/blog/${slug}`,
    };
  } catch {
    return null;
  }
}

export async function getAllBlogPosts(options?: {
  includeDrafts?: boolean;
  tag?: string;
  featured?: boolean;
  limit?: number;
}): Promise<BlogPost[]> {
  const files = await getMdxFiles(BLOG_DIR);
  const posts: BlogPost[] = [];

  for (const filePath of files) {
    const slug = path.basename(filePath, ".mdx");

    try {
      const { content, frontmatter } = await parseMdxFile(
        filePath,
        blogFrontmatterSchema
      );

      // Skip drafts in production unless explicitly included
      if (
        frontmatter.draft &&
        !options?.includeDrafts &&
        process.env.NODE_ENV === "production"
      ) {
        continue;
      }

      // Apply filters
      if (options?.tag && !frontmatter.tags.includes(options.tag)) {
        continue;
      }
      if (
        options?.featured !== undefined &&
        frontmatter.featured !== options.featured
      ) {
        continue;
      }

      posts.push({
        slug,
        content,
        frontmatter,
        readingTime: calculateReadingTime(content),
        url: `/blog/${slug}`,
      });
    } catch (error) {
      console.error(`Failed to parse ${filePath}:`, error);
    }
  }

  // Sort by publishedAt descending (newest first)
  posts.sort(
    (a, b) =>
      b.frontmatter.publishedAt.getTime() - a.frontmatter.publishedAt.getTime()
  );

  // Apply limit
  if (options?.limit) {
    return posts.slice(0, options.limit);
  }

  return posts;
}

export async function getAllBlogTags(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const tags = new Set<string>();

  for (const post of posts) {
    for (const tag of post.frontmatter.tags) {
      tags.add(tag);
    }
  }

  return Array.from(tags).sort();
}

export async function generateBlogStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getAllBlogPosts({ includeDrafts: false });
  return posts.map((post) => ({ slug: post.slug }));
}
