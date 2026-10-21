# Contributing a blog post

Blog posts are Markdown files in `src/blog`. The file path becomes the post URL, so use a short, lowercase name with hyphens.

## Add a post

Create a file at `src/blog/<year>/<post-slug>.md`. For example, `src/blog/2026/first-web-api.md` becomes `/blog/2026/first-web-api`. Store images in that year folder's `images/` subdirectory, and include the post slug in each filename.

Start the file with YAML frontmatter:

```md
---
title: "Build your first web API"
date: 2026-10-21
author: Your Name
synopsis: A short summary shown on the blog landing page.
tags: web apis beginner
image: ./images/first-web-api-cover.jpg

authorProfile:
  class: 2027
  photo: ./images/first-web-api-author.jpg
  website: https://example.com
  github: your-github-username
  linkedin: your-linkedin-profile-name
  bio: A short author bio.
---
```

The required fields are `title`, `date`, `author`, `synopsis`, and `tags`. Tags can be separated with spaces or commas. The `image` field is optional. If you include it, save the image in `src/blog/<year>/images/` and use a path relative to the Markdown file, such as `./images/first-web-api-cover.jpg`.

`authorProfile` is optional. If you include it, `bio` is required. The other fields are optional. Use a full URL for `website`, a GitHub username for `github`, and the part after `linkedin.com/in/` for `linkedin`. `class` is the graduation year as a number. Save author photos in the same `images/` folder and use a relative path.

## Write the post

Write the post body below the closing `---` using Markdown. The post title is already displayed by the page, so start the body with a section heading (`##`), not another top-level heading.

Fenced code blocks, lists, links, images, tables, and blockquotes are supported. Keep embedded images in the year folder's `images/` directory and link to them with relative paths, for example `![A request flowing from a browser to an API](./images/first-web-api-request.png)`.

## Preview and check it

From the repository root, install dependencies if needed, then start the local site:

```sh
yarn
yarn dev
```

Open the post URL printed by the dev server. For the example above, visit `/blog/2026/first-web-api`. Check the post page and the blog landing page to make sure the title, summary, tags, and images look right.

Run a production build before opening the pull request:

```sh
yarn build
```

## Open a pull request

Commit the Markdown file and any images, push your branch to your fork, and open a pull request against `main` in the ACM@UC website repository. In the pull request description, include a short summary of the post and note that you previewed it and ran the build.

The site is built and deployed from `main`. A maintainer will review and merge the pull request before the post appears on the live site.
