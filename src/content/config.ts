import { defineCollection } from "astro:content";

const blogCollection = defineCollection({});
const membersCollection = defineCollection({
  type: "data",
});
const executivesCollection = defineCollection({
  type: "data",
});

export const collections = {
  blog: blogCollection,
  members: membersCollection,
  executives: executivesCollection,
};
