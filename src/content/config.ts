import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    isDraft: z.boolean(),
  }),
});

export const collections = {
  posts,
};
