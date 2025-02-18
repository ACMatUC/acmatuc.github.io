import { defineCollection } from "astro:content";
import { z } from "astro:schema";
import blog from "./blog/schema";

const membersCollection = defineCollection({
  type: "data",
  schema: z.optional(
    z.array(
      z.object({
        name: z.string(),
        short_bio: z.optional(z.string()),
        image_url: z.optional(z.string()),

        email: z.optional(z.string()),
        website: z.optional(z.string()),
        github: z.optional(z.string()),
        linkedin: z.optional(z.string()),
      })
    )
  ),
});
const meetingsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    speaker: z.optional(z.string()),
  })
});
const updatesCollection = defineCollection({
  type: "data",
});

export const collections = {
  blog,
  members: membersCollection,
  meetings: meetingsCollection,
  updates: updatesCollection,
};
