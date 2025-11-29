import { z } from "zod";

export const projectFrontmatterSchema = z.object({
  title: z.string().min(1).max(80),
  description: z.string().min(1).max(300),
  status: z.enum(["active", "completed", "archived", "in-progress"]),
  featured: z.boolean().default(false),
  order: z.number().default(0),
  technologies: z.array(z.string()).default([]),
  liveUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  coverImage: z.string().optional(),
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;

export type Project = {
  slug: string;
  content: string;
  frontmatter: ProjectFrontmatter;
  url: string;
};
