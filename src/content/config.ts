import { defineCollection } from "astro:content";
import { z } from "astro:schema";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    authorPhoto: z.optional(z.string()),
    imageURL: z.optional(z.string()),
    tags: z.string().transform((val) => val.split(" ")),
    synopsis: z.string(),
  }),
});
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
});
const updatesCollection = defineCollection({
  type: "data",
});

export const collections = {
  blog: blogCollection,
  members: membersCollection,
  meetings: meetingsCollection,
  updates: updatesCollection,
};
