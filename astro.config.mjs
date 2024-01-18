import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypePrettyCode from "rehype-pretty-code";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { Site } from "./src/config";
import { remarkReadingTime } from "./src/remark-plugins/remark-reading-time.mjs";
import { visit } from "unist-util-visit";

// https://astro.build/config
export default defineConfig({
  site: Site.deployedUrl,
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    sitemap(),
    mdx(),
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
      () => (tree) => {
        visit(tree, "element", (node) => {
          if (!("data-rehype-pretty-code-figure" in (node.properties || []))) {
            return;
          }

          // skip inline code
          if (!["pre", "figcaption"].includes(node.children[0]?.tagName)) {
            return;
          }

          async function copy(e) {
            e.preventDefault();

            const el = e.currentTarget;

            const value = el.previousElementSibling.innerText;

            const originalText = el.innerText;

            el.disabled = true;

            await navigator.clipboard.writeText(value);

            el.innerText = "copied!";

            setTimeout(() => {
              el.innerText = originalText;
              el.disabled = false;
            }, 3000);
          }

          node.children.push({
            type: "element",
            tagName: "button",
            properties: {
              "data-copy": true,
              onClick: `${copy
                .toString()
                .replace(/\s+/g, " ")}; copy(arguments[0])`,
            },
            children: [{ type: "text", value: "copy" }],
          });
        });
      },
    ],
  },
  trailingSlash: "never",
});
