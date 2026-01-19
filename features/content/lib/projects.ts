import path from "node:path";
import { type Project, projectFrontmatterSchema } from "../schemas/project";
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
  technology?: string;
}): Promise<Project[]> {
  const files = await getMdxFiles(PROJECTS_DIR);

  // Parse all files in parallel for better performance
  const projectPromises = files.map(
    async (filePath): Promise<Project | null> => {
      const slug = path.basename(filePath, ".mdx");

      try {
        const { content, frontmatter } = await parseMdxFile(
          filePath,
          projectFrontmatterSchema
        );

        // Apply filters
        if (
          options?.technology &&
          !frontmatter.technologies.includes(options.technology)
        ) {
          return null;
        }

        return {
          slug,
          content,
          frontmatter,
          url: `/projects/${slug}`,
        };
      } catch (error) {
        console.error(`Failed to parse ${filePath}:`, error);
        return null;
      }
    }
  );

  const results = await Promise.all(projectPromises);
  const projects = results.filter(
    (project): project is Project => project !== null
  );

  // Sort by order (manual), then by featured status
  projects.sort((a, b) => {
    if (a.frontmatter.order !== b.frontmatter.order) {
      return a.frontmatter.order - b.frontmatter.order;
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
