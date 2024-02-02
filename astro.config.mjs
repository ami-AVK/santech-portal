import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  compressHTML: false,
  integrations: [tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    applyBaseStyles: false
  }), htmlBeautifier({
    extra_liners: [],
    indent_inner_html: true
  })],
  site: "https://ami-AVK.github.io",
  base: "/",
  build: {
    assets: "assets"
  }
});