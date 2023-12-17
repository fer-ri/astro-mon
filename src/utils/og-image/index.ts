import type { CollectionEntry } from "astro:content";
import satori, { type SatoriOptions } from "satori";
import sharp from "sharp";
import { readFileSync } from "node:fs";
import path from "node:path";
import siteTemplate from "./site.template";
import postTemplate from "./post.template";

const fontAsBuffer = (filename: string) =>
  readFileSync(path.resolve("node_modules", "@fontsource", filename));

const satoriOptions: SatoriOptions = {
  width: 1200,
  height: 630,
  fonts: [
    {
      name: "Poppins",
      data: fontAsBuffer("poppins/files/poppins-latin-400-normal.woff"),
      weight: 400,
    },
    {
      name: "Poppins",
      data: fontAsBuffer("poppins/files/poppins-latin-700-normal.woff"),
      weight: 700,
    },
  ],
};

export const svgToPng = async (svg: string): Promise<Buffer> => {
  const sharpSvg = Buffer.from(svg);

  return await sharp(sharpSvg).toBuffer();
};

export const generateOgImageForSite = async (): Promise<Buffer> => {
  const svg = await satori(siteTemplate(), satoriOptions);

  return await svgToPng(svg);
};

export const generateOgImageForPost = async (
  post: CollectionEntry<"posts">,
): Promise<Buffer> => {
  const svg = await satori(postTemplate(post), satoriOptions);

  return await svgToPng(svg);
};
