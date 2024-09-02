import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMarkdown } from '@content-collections/markdown';

const milestones = defineCollection({
  name: 'milestones',
  directory: './content/milestones',
  include: '*.json',
  parser: 'json',
  schema: (z) => ({
    company: z.string(),
    role: z.string(),
    location: z.string(),
    url: z.string(),
    startDate: z.coerce.date(),
    endDate: z.optional(z.coerce.date()),
    highlights: z.string().array(),
  }),
});

const posts = defineCollection({
  name: 'posts',
  directory: './content/posts',
  include: '*.md',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    avatar: z.string(),
    image: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      html,
    };
  },
});

const projects = defineCollection({
  name: 'projects',
  directory: './content/projects',
  include: '*.json',
  parser: 'json',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    icons: z.string().array(),
  }),
});

export default defineConfig({
  collections: [milestones, posts, projects],
});
