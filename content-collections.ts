import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';

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
  include: '*.mdx',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    avatar: z.string(),
    image: z.string(),
    date: z.coerce.date(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
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
