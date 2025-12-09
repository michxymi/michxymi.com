import { z } from "zod";

export const blogFrontmatterSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(200),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  coverImage: z.string().optional(),
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;

export type BlogPost = {
  slug: string;
  content: string;
  frontmatter: BlogFrontmatter;
  readingTime: number;
  url: string;
};
