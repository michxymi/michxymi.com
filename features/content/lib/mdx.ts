import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { z } from "zod";

const CONTENT_DIR = path.join(process.cwd(), "content");
const WORDS_REGEX = /\s+/;

export async function parseMdxFile<T extends z.ZodType>(
  filePath: string,
  schema: T
): Promise<{
  content: string;
  frontmatter: z.infer<T>;
}> {
  const fileContent = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const frontmatter = schema.parse(data);

  return { content, frontmatter };
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(WORDS_REGEX).length;
  return Math.ceil(words / wordsPerMinute);
}

export async function getMdxFiles(dir: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...(await getMdxFiles(fullPath)));
      } else if (entry.name.endsWith(".mdx")) {
        files.push(fullPath);
      }
    }

    return files;
  } catch {
    return [];
  }
}

export function getContentDir(type: "blog" | "projects"): string {
  return path.join(CONTENT_DIR, type);
}
