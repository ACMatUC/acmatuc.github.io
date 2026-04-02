import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const meetings = defineCollection({
  loader: glob({
    base: "./src/meetings",
    pattern: ["**/!(README).md"],
    generateId: ({ entry }) => entry.replace(/\.md/, "").replaceAll(/-/g, "/"),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    speaker: z.optional(z.string()),
    // TODO
    // gallery: z.optional(reference("gallery")),
  }),
});

export default meetings;
