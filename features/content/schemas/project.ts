import { z } from "zod";

export const projectFrontmatterSchema = z.object({
  title: z.string().min(1).max(80),
  description: z.string().min(1).max(300),
  order: z.number().default(0),
  technologies: z.array(z.string()).default([]),
  liveUrl: z.url().optional(),
  repoUrl: z.url().optional(),
  coverImage: z.string().optional(),
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;

export type Project = {
  slug: string;
  content: string;
  frontmatter: ProjectFrontmatter;
  url: string;
};
