---
sidebar_position: 5
title: Blog & announcements
description: Write posts for your SCNX site - drafts, scheduling, cover images, the /blog page, RSS, the Latest posts block and Discord announcements.
---

# Blog & announcements

:::caution This documentation is changing during the beta
SCNX Sites is in active beta, and we're changing a lot of things as we go. We'll be reworking this documentation once the current beta cycle wraps up, so some details on this page may be outdated in the meantime.
:::

Give your community somewhere to read your news. The blog is a set of posts with its own page on your site, an RSS feed, a block you can drop onto any page, and optional announcements in your Discord server.

## The Blog screen {#blog-screen}

![The Blog screen with a draft, a scheduled post and three live posts](@site/docs/assets/sites/en/blog-list.png)

Open **Blog** in the Sites menu of your dashboard. It is split into five tabs:

- **Posts** - all your posts, with search, filters and bulk actions. See [The Posts tab](#posts-tab).
- **Authors** - profiles for the people who write for your blog. See [Authors](#authors).
- **Categories & tags** - your categories, and tools to tidy up tags. See [Categories](#categories) and [Tags](#tags).
- **Display** - **Blog layout** and **Post page extras**. See [Layouts](#layouts) and [The post page](#post-page).
- **Announcements** - **Announce new posts on Discord**. See [Discord announcements](#announcements).

### The Posts tab {#posts-tab}

At the top, a row of numbers shows **All posts**, **Live**, **Scheduled**, **Drafts** and **Blog views, 30 days**. Below it, find posts with:

- **Search posts** - looks in titles, teasers and tags.
- **Status**, **Author**, **Category** and **Tag** filters. For categories you can also pick **No category**. **Clear filters** resets them.
- **Sort by** - **Newest first**, **Oldest first**, **Title A-Z** or **Most viewed**.
- The **Layout** toggle - **Cards** or **Compact list**. We remember your choice in your browser.

Each post shows its cover, title, a status badge (**Live**, **Scheduled** with the time it goes live, or **Draft**), the date, its author avatars, its category and tags, the views of the last 30 days, and a note when it was announced on Discord. **Unpublished changes** appears on a live post that has edits waiting. Click **Edit** to open the post editor. The **⋯** menu on a post has **View live**, **Publish now**, **Move to drafts** and **Delete**. **Publish now** does not post to Discord. If the site has an announcement webhook and the post was not announced yet, the menu also has **Publish and announce on Discord**.

Publishing a single post from this menu never announces it on Discord. To announce a post, use the publish window in the post editor, see [Publishing and scheduling](#drafts).

#### Bulk actions {#bulk}

Tick the box on a post, or **Select all on this page**, and a bar appears with the actions for your selection. You can select up to 50 posts at once.

- **Publish** - makes the selected posts live right away. Tick **Announce on Discord** to announce them. It is off by default, so publishing 30 posts never floods your channel. The checkbox is disabled until you [set up announcements](#announcements).
- **Move to drafts** - turns the selected posts back into drafts.
- **Set category** - pick a category and click **Set category**.
- **Delete** - removes the selected posts for good, after you confirm.

If some posts fail, for example because one was flagged by our content check, the others still go through. You see how many worked, and a reason for each post that did not. The failed posts stay selected so you can try again.

Click **New post** to start a new post.

## Writing a post {#write}

![The post editor with the title, the formatting bar and the Markdown text](@site/docs/assets/sites/en/post-editor.png)

The post editor is a full-screen writing page with nothing else in the way. From top to bottom:

1. **Cover image** - optional. Pick a picture from your server's image library. You can replace or remove it later.
2. **Post title** - the headline of your post.
3. **The formatting bar** - **Bold**, **Italic**, **H2**, **H3**, **Link**, **Image**, **Bulleted list**, **Numbered list** and **Quote**. Each button wraps the text you selected, or inserts the formatting where your cursor is. It stays at the top of the screen while you scroll.
4. **Your text** - written in Markdown. The box grows as you write.

Shortcuts: **Ctrl+B** (bold), **Ctrl+I** (italic) and **Ctrl+K** (link). On a Mac, use **Cmd** instead of **Ctrl**.

A few things to know about the text:

- **Images** come from your server's image library. Use the **Image** button to pick one. Images from other websites are removed from the post.
- **Links** must start with `https://`, `http://` or `mailto:`. On your site, they open in a new tab.
- **Headings**: your post title is the main heading of the page, so a `#` heading in your text shows up as a section heading.
- If a post gets very long, a counter appears under the text and turns red when you are over the limit.

### Saving happens on its own {#autosave}

You don't need to save. The editor saves a moment after you stop typing, and the top bar tells you how it went:

| Top bar shows                         | What it means                                                                    |
| ------------------------------------- | -------------------------------------------------------------------------------- |
| **Saving…** / **Saved**               | Your changes are being saved, or are saved.                                      |
| **Add a title to save**               | A new post is only created once it has a title.                                  |
| **Not saved: fix highlighted fields** | Something is not valid. Fix the field that is marked, and saving picks up again. |
| **Not saved** with **Retry**          | Saving failed. Click **Retry**. If you try to leave, we warn you first.          |

Saving never puts anything on your site. Only **Publish** and **Update** do that.

We also check posts for unsafe content when they are saved. If something is blocked, you see a message telling you what to change.

### Post settings {#post-settings}

Everything that is not the cover, title or text lives in **Post settings** in the top bar. It opens as a panel on the right. Close it with **Esc** or by clicking next to it.

- **URL slug** - the web address of your post. The full address is shown underneath. For a new post it follows the title until you change it yourself, and **Reset to title** builds it from the title again. It uses lowercase letters, numbers and dashes. Each post needs its own slug.
- **Excerpt** - a short teaser. It shows under the title on your blog page and in the Latest posts block, in your RSS feed, and in Discord announcements. Optional.
- **Tags** - short labels, shown on the post, on its card and in your RSS feed. Press **Enter** after each one. Tags you already used on other posts are suggested as you type.
- **Authors** - pick one or more of your [author profiles](#authors) with **Add an author**. The first one is the **Main author**, and the arrows change the order. A post can have up to 5 authors. Leave it empty for no byline. **Manage authors** takes you to the Authors tab.
- **Category** - pick one of your [categories](#categories), or **No category**. **Manage categories** takes you to the Categories & tags tab.
- **Search & sharing** - the **Share title**, **Share description** and **Share image** used when someone shares the post. Each falls back to the post title, the excerpt and the cover image.
- **Delete post** - removes the post for good, after you confirm.

### Preview {#preview}

Switch from **Write** to **Preview** in the top bar to see your post the way it will look on your site, with your theme, menu and footer. It shows exactly what is in the editor right now, even changes that are still saving. Use the desktop and mobile buttons to check both sizes.

The preview leaves out the previous/next links, and the date shows when the post is scheduled for, or that it is not published yet. Links in the preview don't go anywhere. Switch back to **Write** and you are right where you left off.

## Publishing and scheduling {#drafts}

A post is in one of three states:

- **Draft** - only visible to you in the dashboard.
- **Scheduled** - goes live on its own at the time you picked.
- **Published** - on your blog for everyone to read.

To publish, click **Publish** in the top bar. A small window opens:

- **When** - **Now**, or **Schedule for** a date and time. Times are in your own time zone, and we show which one.
- **Announce in Discord** - tick this to announce the post in your server. It only shows up when announcements are set up, see [Discord announcements](#announcements).
- A short checklist reminds you if the post has **No cover image** or no excerpt. It never stops you from publishing.

Click **Publish now** or **Schedule** to confirm. A scheduled post goes live by itself at that time. You don't need to be online for it.

To change a scheduled post's time, click **Scheduled** in the top bar. You can pick a new time or publish it right away.

The **⋯** menu next to the button has the rest:

- **Unpublish** - turns a published or scheduled post back into a draft and takes it off your site.
- **Discard changes** - see below.
- **Open on site** - opens the published post in a new tab.

### Editing a published post {#editing-live}

You can keep working on a post after it is published. Your edits are saved as you type, but your visitors keep seeing the published version until you click **Update**. The top bar shows **Published · unpublished changes** while there is something waiting.

- **Update** puts your changes on your site.
- **Discard changes** in the **⋯** menu throws your changes away and goes back to what is published.
- **Unpublish** keeps your latest changes, so nothing you wrote is lost. The post just becomes a draft.

Scheduled posts work the same way. Your edits wait until you click **Update**, so a half-finished edit never goes out on its own when the scheduled time comes.

## Your blog page {#blog-page}

Published posts appear at **`/blog`** on your site, newest first. With lots of posts, the page is split into pages with **Newer posts** and **Older posts** buttons. There is also a visible link to your [RSS feed](#rss).

Each post has its own page at `/blog/<slug>`.

The blog uses your site's theme, menu and footer, so it feels like the rest of your site. To link to it from your menu, add the built-in **Blog** item on the Navigation screen. Your blog page and every post are also in your site's sitemap for search engines.

### Layouts {#layouts}

Choose how posts are arranged under **Blog layout** in the **Display** tab of the Blog screen, then click **Save**.

| Layout       | What it looks like                                                                       | Best for                                    |
| ------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------- |
| **List**     | Clean rows with the date beside each post. Your newest post gets a larger title.         | Most blogs, especially posts without covers |
| **Featured** | Your newest post gets a large, decorated panel at the top. The rest are listed below it. | Blogs with one big story at a time          |
| **Grid**     | A grid of cards with cover images. Posts without a cover get a simple text card.         | Posts that all have a cover image           |

The layout changes on your site straight away, without publishing your site again.

### The post page {#post-page}

Every post page starts with a header in your theme's colours:

- a **Back to all posts** link,
- the date, the authors and the read time. Every author is listed and links to their author page,
- the category as a small chip, linking to the category page,
- the title,
- the tags.

The cover image comes right after the header, followed by your text. After the text:

- An **About the author** card for each author, with their picture, name, bio and links.
- **Related posts**, up to 3. Posts in the same category come first, then posts that share a tag. If nothing matches, the block is left out.
- Links to the previous and next post.

Under **Post page extras** in the **Display** tab you can turn off **Show estimated read time** and **Show previous/next post links**. Both are on by default, and changes show up on your site right after you click **Save**.

When someone shares a post, the link preview uses the post's **Search & sharing** settings, falling back to its title, excerpt and cover image.

## Authors {#authors}

Authors are profiles you create once and add to as many posts as you like. They are not Discord members, so nothing about your staff is shown. Open the **Authors** tab and click **New author**:

- **Name** - up to 60 characters, like "The Mod Team".
- **Link** - the address of the author page. Leave it empty and we create it from the name. Changing the name later does not change the link.
- **Bio** - a short text, up to 500 characters.
- **Picture** - an image from your server's image library.
- **Links** - up to 5 links, each with a label and an address starting with `https://`.

You can have up to 50 authors per site, and a post can have up to 5, with the first one as the main author.

Every author gets a page at **`/blog/author/<slug>`** with their picture, bio, links and all their published posts. The list of all authors is at **`/blog/authors`**. An author only appears there, and their page only exists, once at least one published post lists them. A profile you created ahead of time stays private until then. Because the address `/blog/authors` is taken by this list, a new post cannot use `authors` or `tags` as its URL slug. Existing posts with those slugs keep working.

Posts you wrote before authors existed kept their free-text author names. We converted them into author profiles automatically, so every existing author page keeps its address.

Deleting an author removes them from their posts. The posts stay.

## Categories {#categories}

A category groups posts by topic, like "Patch notes" or "Events". Each post is in at most one category. Open the **Categories & tags** tab and click **New category** to give it a **Name** (up to 40 characters), a **Link** and an optional **Description** (up to 300 characters) that shows on the category page. You can have up to 30 categories.

Each category gets a page at **`/blog/category/<slug>`** with its description and all its published posts, once it has at least one. Your `/blog` page shows a **Browse by category** row. A post's category shows as a chip on its card and on the post page.

Deleting a category keeps its posts. They just have no category afterwards.

## Tags {#tags}

Tags are free text, added in the settings of each post. Every tag links to **`/blog/tag/<tag>`**, a page that lists all your published posts with that tag, newest first. All your tags are listed at **`/blog/tags`**, and your `/blog` page shows a **Browse by tag** row with your most used ones.

The address uses a simplified version of the name: lowercase, with spaces and punctuation turned into dashes ("Patch Notes!" becomes `/blog/tag/patch-notes`). Spelling variants like "News", "news" and "News!" count as one tag and share one page, and the heading uses the spelling you use most. Names that simplify to the same address are merged, so "C", "C++" and "C#" all land on `/blog/tag/c`. A tag that no published post uses returns a "not found" page. Only a page past the last page of a listing is hidden from search engines. Listings that have posts are added to your site's sitemap automatically.

### Tag tools {#tag-tools}

The **Tags** list in the **Categories & tags** tab shows every tag with the number of posts that use it, drafts included, and the spelling variants it covers. Use it to tidy up:

- **Rename** - gives the tag a new name on every post.
- **Merge** - tick two or more tags, enter the tag they should become, and click **Merge**.
- **Delete** - removes the tag from every post after you confirm. The posts stay.

These tools change all posts at once, drafts included, and the changes are live right away. If a tag is on too many posts to change at once, nothing is changed.

## RSS feed {#rss}

Your blog has an RSS feed at **`/blog/rss.xml`**. It lists your newest posts with their title, excerpt, tags, all of their authors and a link to the full post. Readers can subscribe to it in an RSS reader, and you can use it to plug your posts into other tools that read RSS.

## The Latest posts block {#latest-posts}

To show your newest posts somewhere else, for example on your home page, add the **Latest posts** block to any page. It shows cards linking to your most recent posts. Set how many cards to show with **How many posts** in the block's options. It shows 3 by default. In the editor it shows sample cards. On your site it always shows your current published posts.

## Your blog in the editor {#editor-preview}

You can also look at your blog inside the site editor. Open the page switcher at the top of the editor and pick **Blog** below your pages. It shows up once you have a published post, or once your menu links to the blog.

The editor then shows your real blog page with your design. Click a post to look at it, and use the page buttons to browse. This view is for looking only. The panel on the left has **Open Blog** and **Blog layout settings** to take you to the Blog screen. The **Design** and **Footer & bar** panels still work, so you can tune your theme while looking at your blog.

## Discord announcements {#announcements}

Your blog can post a message in a Discord channel whenever a post goes live. Set it up under **Announce new posts on Discord** in the **Announcements** tab of the Blog screen:

1. In Discord, open the settings of the channel you want to post in. Under **Integrations**, create a webhook and copy its URL.
2. Paste it into **Discord webhook URL**.
3. Optional: to ping a role, enter its ID in **Role to ping (optional)**. You can copy a role ID with Discord's Developer Mode turned on.
4. Click **Save**.
5. Click **Send a test** to check it works. The test message never pings anyone.

To turn announcements off, empty the webhook URL and save.

The announcement shows the post's title as a link, the excerpt, the cover image and your site's name. Only the role you picked can be pinged. Nothing written in a post itself can ping anyone.

How announcements behave:

- **Each post is announced once, ever.** Editing, updating, or unpublishing and publishing again does not send it again.
- **Scheduled posts** are announced when they go live, usually within a minute.
- **Skip it if you want.** Untick **Announce in Discord** when you publish, and that post is never announced. Publishing from the Posts tab only announces when you tick **Announce on Discord** for a bulk publish.
- **Your existing posts are not announced.** Setting up announcements does not post your back catalogue to Discord. Only a post that went live in roughly the last hour may still be announced once you save the webhook.
- **Your site needs to be live.** While your site is not published, or is in maintenance mode, no announcements are sent.
- If Discord is unreachable at that moment, the announcement is skipped and not retried.

When announcements are set up, the publish window shows **Announce in Discord**. If they are not, it tells you so with a **Set it up** link. Once a post has been announced, it shows the date it was announced.

## What is live and what needs publishing {#live}

Posts don't wait for you to publish your whole site. When you publish or update a post, it shows up on your blog straight away. The same goes for the blog layout, the post page extras and the Latest posts block, which always shows your current posts.

Authors, categories and tags are live the moment you save them, because their pages are public right away. They are checked by our content check when you save. Changing the authors or the category of a post that is already published works like any other edit: it waits in the draft until you click **Update**.

Two things to keep in mind:

- Your blog is only visible while your site itself is published and not in maintenance mode.
- The theme, menu and footer around your blog come from the last version of your site you published. If you change your design, publish your site to see it on the blog too. See [Publishing](/docs/sites/publishing).
