---
sidebar_position: 7
title: Announcement bar, redirects & link-in-bio
description: Smaller SCNX Sites features - the announcement bar, redirects, and the compact link-in-bio page layout.
unlisted: true
---

# Announcement bar, redirects & link-in-bio

:::caution This documentation is changing during the beta
SCNX Sites is in active beta, and we're changing a lot of things as we go. We'll be reworking this documentation once the current beta cycle wraps up, so some details on this page may be outdated in the meantime.
:::

A few smaller features round out your site. You will find the first two in the **Site** section of the editor, and the layout option on each page.

## Announcement bar {#announcement-bar}

The announcement bar is a thin strip above your navigation for one short message, on every page. It is great for a limited-time event, a heads-up or a link to something new.

Open the **Site** section and find **Announcement bar**:

- Turn on **Show the announcement bar**.
- Write your **Announcement** (plain text, up to 300 characters, no Markdown).
- Optionally add a **Link** (a full `https://` address) so the whole bar is clickable.
- Pick a **Style**: **Subtle** or **Accent colour**.

Visitors can dismiss the bar, and it stays dismissed for them until you change the text, at which point the new announcement shows again.

:::tip The bar is live
The announcement bar goes live on its own. You do **not** have to publish your site again to change or remove it. Clearing the text removes the bar completely. Note that while [maintenance mode](/docs/sites/publishing#maintenance) is on, visitors only see your maintenance notice, so the bar is not shown there.
:::

## Redirects {#redirects}

Redirects send an old address on your site to a new one. They are useful when you rename a page, or when you want a short, memorable path like `/discord` that jumps somewhere else.

Open the **Site** section and find **Redirects**:

- Click **Add redirect**.
- Set **From** (a path on your site, for example `/old-rules` or `/discord`).
- Set **To** (a full `https://` address, or another path on your site like `/rules`).
- Save it.

A site can have up to 50 redirects. Each one counts the visits it sends, so you can see how much a short link is used.

:::note "Dormant" redirects
If one of your pages already lives at the same address as a redirect, the page wins and the redirect is marked **Dormant**: it never runs. Rename or delete that page to bring the redirect back. A handful of addresses (`/blog`, `/sitemap.xml`, `/robots.txt` and your home page) belong to your site itself and cannot be redirected.
:::

Redirects work right away. You do **not** have to publish your site again for them.

## Link-in-bio (compact layout) {#link-in-bio}

For a creator-style "link in bio" page, any page can switch to a **compact** layout: a narrow, centred column with tighter spacing, the kind of page you would link from a social media bio.

Open the **Pages** section, choose the page, and open **Page layout**:

- Set **Content width** to **Compact** for the narrow centred column.
- Optionally turn on **Hide navigation and footer** to drop the menu, footer, announcement bar and "skip to content" link on that page only.

The two settings are independent: a compact page can keep its navigation, and a standard page can drop it. The **Link in bio** starter template uses this layout out of the box, with a short intro, your links and a join button.

Layout settings belong to the page, so unlike the announcement bar and redirects, they reach visitors with your next [publish](/docs/sites/publishing).
