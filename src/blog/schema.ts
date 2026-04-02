import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    base: "./src/blog",
    pattern: "**/*.md",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      author: z.string(),
      synopsis: z.string(),
      tags: z.string().transform((val) => val.split(/[ ,]+/)),
      image: z.optional(image()),

      authorProfile: z.optional(
        z.object({
          class: z.number().transform((val) => val.toString()),
          photo: z.optional(image()),
          email: z.optional(z.email()),
          website: z.optional(z.url()),
          github: z.optional(z.string()),
          linkedin: z.optional(z.string()),
          bio: z.string(),
        }),
      ),
    }),
});
export default blog;
