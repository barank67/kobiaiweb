import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kobiai.com.tr",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "always"
  },
  output: "static"
});
