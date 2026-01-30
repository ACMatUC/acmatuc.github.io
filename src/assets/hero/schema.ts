import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro:schema";

// index of 0 marks the base image (e.g. ACM@UC banner)
// typically 1080x1920, portrait and landscape

// TODO - multiple hero images for announcements/upcoming events

const heroImages = defineCollection({
  loader: glob({
    base: "./src/assets/hero",
    pattern: "*/*.(yml|yaml)",
    generateId: ({ entry }) => entry.split("/")[0],
  }),
  schema: ({ image }) =>
    z.object({
      landscape: image(),
      portrait: image(),
      alt: z.string(),
      index: z.number(),
    }),
});

export default heroImages;
