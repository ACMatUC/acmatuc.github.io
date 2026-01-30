import { file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro:schema";

const executiveBoard = defineCollection({
  loader: file("./src/data/executives.json", {
    parser: (contents) => {
      const parsed: Object[] = JSON.parse(contents);
      return parsed.map((v, i) => ({ id: i, ...v }));
    },
  }),
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      role: z.string(),
      name: z.string(),
      bio: z.string(),
      imageUrl: z.optional(image()),

      email: z.optional(z.string().email()),
      website: z.optional(z.string().url()),
      github: z.optional(z.string()),
      linkedin: z.optional(z.string()),
    }),
});

export default executiveBoard;
