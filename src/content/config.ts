import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    isDraft: z.boolean().optional(),
  }),
});

export const collections = {
  posts,
};
