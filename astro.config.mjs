import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypePrettyCode from "rehype-pretty-code";
import sitemap from "@astrojs/sitemap";
import { Site } from "./src/config";
import { remarkReadingTime } from "./src/remark-plugins/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: Site.deployedUrl,
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    sitemap(),
  ],
  markdown: {
    // Disable syntax built-in syntax hightlighting from astro
    syntaxHighlight: false,

    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          // true: use rehype theme
          // false: use global css (tailwind prose)
          keepBackground: false,
        },
      ],
    ],
  },
  trailingSlash: "never",
});
