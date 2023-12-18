import { generateOgImageForSite } from "@/utils";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () =>
  new Response(await generateOgImageForSite(), {
    headers: { "Content-Type": "image/png" },
  });
