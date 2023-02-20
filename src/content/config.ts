import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    ingress: z.string().optional(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    bgImage: z.string().optional(),
  }),
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    featuredImage: z.string().optional(),
  }),
});

export const collections = {
  svPages: pages,
  enPages: pages,
  frPages: pages,
  aktuellt: posts,
  news: posts,
  actualite: posts,
};
