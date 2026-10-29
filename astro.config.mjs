import { defineConfig } from 'astro/config';

import tailwind from '@tailwindcss/vite';
import react from "@astrojs/react";
import muxGrammar from "./src/shiki/mux.json";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
      langs: [{ ...muxGrammar, name: "mux" }],
      langAlias: { hm: "plaintext" },
    },
  },
  vite: {
    plugins: [tailwind()],
  },
  image: {
    domains: ["avatars.githubusercontent.com"]
  }
});
