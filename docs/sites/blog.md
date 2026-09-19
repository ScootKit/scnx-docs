---
sidebar_position: 5
title: Blog & announcements
description: Write posts and announcements for your SCNX site - drafts, cover images, the /blog page, RSS, and the latest-posts block.
unlisted: true
---

# Blog & announcements

:::caution This documentation is changing during the beta
SCNX Sites is in active beta, and we're changing a lot of things as we go. We'll be reworking this documentation once the current beta cycle wraps up, so some details on this page may be outdated in the meantime.
:::

Give your community somewhere to read your news. The blog is a set of posts with its own overview page, an RSS feed, and a block you can drop onto any page to show your newest posts.

## Writing a post {#write}

1. In the editor, open the **Posts** section.
2. Click **New post**.
3. Fill in the post:
   - **Title** - the headline of the post.
   - **Link** - the web address of the post. Leave it empty and we build one from the title. It uses lowercase letters, numbers and dashes.
   - **Teaser** - the short line shown on the blog overview. Optional.
   - **Cover image** - an optional picture, chosen from your server's image library.
   - **Text** - the body of your post, written in Markdown.
4. Click **Save**.

## Drafts vs. published {#drafts}

A post is either a **Draft** or **Live**:

- A **Draft** is only visible to you in the dashboard. It is not on your site.
- Click **Publish** to make a post **Live**. It then appears on your `/blog` page and in the feed.
- Use **Move to drafts** to unpublish a post and hide it again.

## Your blog page {#blog-page}

Published posts appear automatically at **`/blog`** on your site, as a list of cards showing each post's title, teaser, cover image and date. Each post has its own page at `/blog/<link>` with the cover, title, date and full text.

The blog is styled with your site's theme and shows your normal navigation and footer, so it feels like the rest of your site. It is also included in your site's sitemap for search engines.

## RSS feed {#rss}

Your blog has an RSS feed at **`/blog/rss.xml`**. Readers can subscribe to it in an RSS reader, and you can use it to plug your posts into other tools that read RSS.

## The Latest posts block {#latest-posts}

To show your newest posts somewhere other than the `/blog` page (for example on your home page), add the **Latest posts** block to any page. It shows cards linking to your most recent posts, and you can set how many to show. It always reflects your live posts.

## Posts are live {#live}

Posts go live on their own. When you publish a post, it appears on your blog straight away. You do **not** have to publish your whole site again for a new post to show up.

:::note What's not here yet
Pulling posts in from a Discord announcement channel is not part of Sites yet. For now, posts are written in the Posts section.
:::
