import { defineCollection } from "astro:content";
import { z } from "astro:schema";

import blog from "./content/blog/schema";
import members from "./content/members/schema";

const meetingsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    speaker: z.optional(z.string()),
  }),
});
const updatesCollection = defineCollection({
  type: "data",
});

export const collections = {
  blog,
  members,
  meetings: meetingsCollection,
  updates: updatesCollection,
};
