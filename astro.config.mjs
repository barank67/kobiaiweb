import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://test.perda.com.tr",
  integrations: [sitemap()],
  output: "static"
});
