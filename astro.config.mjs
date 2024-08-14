import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic(),
  site: "https://docs.hive.io",
  build: {
    assets: "_hive",
  },
  integrations: [
    expressiveCode(),
    mdx({}),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
});
