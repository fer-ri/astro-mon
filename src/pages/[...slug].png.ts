import { generateOgImageForPost } from "@/utils";
import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

export async function getStaticPaths() {
  const posts = await getCollection("posts");

  return posts
    .filter((post) => !post.data.isDraft)
    .map((post) => ({
      params: { slug: post.slug },
      props: post,
    }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(
    await generateOgImageForPost(props as CollectionEntry<"posts">),
    {
      headers: { "Content-Type": "image/png" },
    },
  );
