import { defineCollection, defineConfig } from "@content-collections/core";
 
const milestones = defineCollection({
  name: "milestones",
  directory: "./content/milestones",
  include: "*.json",
  parser: "json",
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

const projects = defineCollection({
  name: "projects",
  directory: "./content/projects",
  include: "*.json",
  parser: "json",
  schema: (z) => ({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    url: z.string(),
    icons: z.string().array(),
  }),
});
 
export default defineConfig({
  collections: [milestones, projects],
});