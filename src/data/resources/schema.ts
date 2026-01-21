import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro:schema";

const resources = defineCollection({
  loader: glob({ base: "./src/data/resources", pattern: "!(schema).(yml|yaml|json)" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      links: z.array(
        z.object({
          image: image(),
          link: z.string().url(),
          name: z.string(),
          description: z.string(),
        }),
      ),
    }),
});
export default resources;
