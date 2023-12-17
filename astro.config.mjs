import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import { Site } from "./src/config";
import { remarkReadingTime } from "./src/remark-plugins/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: Site.deployedUrl,
  integrations: [tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  trailingSlash: "never",
});
