import { defineCollection, defineConfig } from "@content-collections/core";
 
const curriculum = defineCollection({
  name: "curriculum",
  directory: "./content/curriculum",
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
 
export default defineConfig({
  collections: [curriculum],
});