import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro:schema";

const members = defineCollection({
  loader: glob({
    base: "./src/content/members",
    pattern: ["*.(yml|yaml)", "alumni/*.(yml|yaml)"],
    generateId: ({ entry }) => entry.replace(/\.ya?ml/, ""),
  }),
  schema: ({ image }) =>
    z.optional(
      z.array(
        z.object({
          name: z.string(),
          short_bio: z.optional(z.string()),
          image: z.optional(image()),

          email: z.optional(z.string().email()),
          website: z.optional(z.string().url()),
          github: z.optional(z.string()),
          linkedin: z.optional(z.string()),
        })
      )
    ),
});
export default members;
