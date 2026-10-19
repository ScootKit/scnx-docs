---
sidebar_position: 7
title: Announcement bar, redirects & link-in-bio
description: The announcement bar, redirects and the compact link-in-bio page layout in SCNX Sites.
---

# Announcement bar, redirects & link-in-bio

:::caution This documentation is changing during the beta
SCNX Sites is in active beta, and we're changing a lot of things as we go. We'll be reworking this documentation once the current beta cycle wraps up, so some details on this page may be outdated in the meantime.
:::

This page covers a few smaller features of your site: the announcement bar, redirects and the compact link-in-bio layout. The **Settings** and **Analytics** pages of the Sites menu have their own pages here: [Settings](/docs/sites/settings) and [Analytics](/docs/sites/analytics).

## Announcement bar {#announcement-bar}

The announcement bar is a thin strip above your navigation for one short message, on every page. It is great for a limited-time event, a heads-up or a link to something new.

You edit it in the editor. Open the **Footer & bar** panel from the icon strip on the left and expand **Announcement bar**:

- Turn on **Show the announcement bar**.
- Write your **Announcement** (plain text, up to 300 characters, no Markdown). The bar stays hidden until it has text.
- Optionally add a **Link** (a full `https://` address) so the whole bar is clickable.
- Pick a **Style**: **Subtle** or **Accent colour**.

There is no Save button. Your changes save on their own while you type, and you see the bar on the canvas right away.

Visitors can dismiss the bar, and it stays dismissed for them until you change the text. Then the new announcement shows again.

:::tip The bar is live
The announcement bar goes live on its own. You do **not** have to publish your site again to change or remove it. Clearing the text removes the bar completely. While [maintenance mode](/docs/sites/publishing#maintenance) is on, visitors only see your maintenance notice, so the bar is not shown there. Pages that hide their navigation and footer (see [link-in-bio](#link-in-bio)) do not show it either.
:::

## Redirects {#redirects}

Redirects send an old address on your site to a new one. They are useful when you replace a page, or when you want a short, memorable path like `/discord` that jumps somewhere else.

Redirects live on the **Domains** page, below your domains. You need edit access to manage them.

- Click **Add redirect**.
- Set **From (path on your site)**, for example `/old-rules` or `/discord`. Use lowercase letters, numbers, dashes and dots.
- Set **To**: a full `https://` address, or another path on your site like `/rules`.
- Click **Create**.

You can edit or delete a redirect at any time. A site can have up to 50 redirects. Each one counts the visits it sends, so you can see how much a short link is used.

:::note "Dormant" redirects
If one of your pages lives at the same address as a redirect, the page wins and the redirect is marked **Dormant**: it never runs. Delete that page to bring the redirect back. A few addresses belong to your site itself and cannot be redirected: your home page, `/blog` and `/embeds` (and everything below them), `/sitemap.xml` and `/robots.txt`.
:::

### Showing your embeds on your site {#embed-links}

You can show your own embeds on **your own domain**. When you paste the link in Discord, it shows your custom embed preview, and visitors who open it stay on your site.

Connected embeds live in the **Embeds** section of the **Domains** page, below Redirects.

- Click **Connect embed** and pick one of your own embeds. You can only connect embeds you created. If you have none yet, create one on your user embeds page first.
- A site can have up to 25 connected embeds.
- Connecting takes effect immediately. You do **not** have to publish your site again.
- Click **Disconnect** to remove an embed from your site again.

Each connected embed gets its own address, `https://your-site.example/embeds/<embed id>`. It works on your scnx.site address and on your custom domain. The section shows the address with a copy button.

- Discord shows your embed preview under your own domain. There is no redirect to another site.
- Visitors see the embed as a card in your site's design, with your normal navigation and footer. Like every SCNX Site page, the footer has the **Report abuse** button, so anyone can report content they think breaks the rules.
- These pages are not indexed by search engines.
- If an embed is deleted or taken down later, it shows **Unavailable** in the Embeds section and its address answers "page not found" on your site. Disconnect it or connect another one.

:::note `/embeds` is reserved
You cannot create a page called `embeds`, or a redirect from `/embeds` or `/embeds/...`. If your site already has such a page or redirect, it keeps working until you connect your first embed, and connecting is refused until you delete it.
:::

Redirects work right away. You do **not** have to publish your site again for them. They do not run while [maintenance mode](/docs/sites/publishing#maintenance) is on.

## Link-in-bio (compact layout) {#link-in-bio}

For a creator-style "link in bio" page, any page can switch to a **compact** layout: a narrow, centred column, the kind of page you would link from a social media bio.

Open **Pages** in the Sites menu, find the page and click its **Page layout** button (the sliders icon). In the **Layout** section:

- Set **Content width** to **Compact** for the narrow centred column.
- Optionally turn on **Hide navigation and footer** to drop the navigation bar, the footer, the announcement bar and the "skip to content" link on that page only.

The two settings are independent: a compact page can keep its navigation, and a standard page can drop it. The **Link in bio** starter template uses this layout out of the box, with a short intro, your links and what you make.

Layout settings belong to the page, so unlike the announcement bar and redirects, they reach visitors with your next [publish](/docs/sites/publishing).
