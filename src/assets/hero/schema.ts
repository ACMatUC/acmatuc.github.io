import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro:schema";

// index of 0 marks the base image (e.g. ACM@UC banner)
// typically 1080x1920, portrait and landscape

const heroImages = defineCollection({
  loader: glob({
    base: "./src/assets/hero",
    pattern: "*/*.(yml|yaml)",
  }),
  schema: ({ image }) =>
    z.object({
      landscape: image(),
      portrait: image(),
      alt: z.string(),
      slug: z.optional(z.string()),
      index: z.number(),
    }),
});

export default heroImages;
