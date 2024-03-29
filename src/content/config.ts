// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const articlesCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    category: z.string(),
    accent: z.boolean().optional(),
    order: z.number().optional(),
    tags: z.array(z.string()),
  }),
});
const personCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});
const dataCollection = defineCollection({
  type: "data", // v2.5.0 and later
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  articles: articlesCollection,
  persons: personCollection,
  test: dataCollection,
};
