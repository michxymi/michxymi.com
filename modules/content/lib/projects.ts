import path from "node:path";
import {
  type Project,
  type ProjectFrontmatter,
  projectFrontmatterSchema,
} from "../schemas/project";
import { getContentDir, getMdxFiles, parseMdxFile } from "./mdx";

const PROJECTS_DIR = getContentDir("projects");

export async function getProject(slug: string): Promise<Project | null> {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);

  try {
    const { content, frontmatter } = await parseMdxFile(
      filePath,
      projectFrontmatterSchema
    );

    return {
      slug,
      content,
      frontmatter,
      url: `/projects/${slug}`,
    };
  } catch {
    return null;
  }
}

export async function getAllProjects(options?: {
  status?: ProjectFrontmatter["status"];
  featured?: boolean;
  technology?: string;
}): Promise<Project[]> {
  const files = await getMdxFiles(PROJECTS_DIR);
  const projects: Project[] = [];

  for (const filePath of files) {
    const slug = path.basename(filePath, ".mdx");

    try {
      const { content, frontmatter } = await parseMdxFile(
        filePath,
        projectFrontmatterSchema
      );

      // Apply filters
      if (options?.status && frontmatter.status !== options.status) {
        continue;
      }
      if (
        options?.featured !== undefined &&
        frontmatter.featured !== options.featured
      ) {
        continue;
      }
      if (
        options?.technology &&
        !frontmatter.technologies.includes(options.technology)
      ) {
        continue;
      }

      projects.push({
        slug,
        content,
        frontmatter,
        url: `/projects/${slug}`,
      });
    } catch (error) {
      console.error(`Failed to parse ${filePath}:`, error);
    }
  }

  // Sort by order (manual), then by featured status
  projects.sort((a, b) => {
    if (a.frontmatter.order !== b.frontmatter.order) {
      return a.frontmatter.order - b.frontmatter.order;
    }
    if (a.frontmatter.featured !== b.frontmatter.featured) {
      return a.frontmatter.featured ? -1 : 1;
    }
    return 0;
  });

  return projects;
}

export async function getAllProjectTechnologies(): Promise<string[]> {
  const projects = await getAllProjects();
  const technologies = new Set<string>();

  for (const project of projects) {
    for (const tech of project.frontmatter.technologies) {
      technologies.add(tech);
    }
  }

  return Array.from(technologies).sort();
}

export async function generateProjectStaticParams(): Promise<
  { slug: string }[]
> {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}
