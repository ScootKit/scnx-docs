---
sidebar_position: 7
title: Settings, analytics & smaller features
description: The SCNX Sites Settings page, site analytics, the announcement bar, redirects and the compact link-in-bio page layout.
unlisted: true
---

# Settings, analytics & smaller features

:::caution This documentation is changing during the beta
SCNX Sites is in active beta, and we're changing a lot of things as we go. We'll be reworking this documentation once the current beta cycle wraps up, so some details on this page may be outdated in the meantime.
:::

This page covers the parts of your site that are not pages or blocks: the **Settings** page, **Analytics**, and a few smaller features. You find **Settings** and **Analytics** in the Sites menu in your server's dashboard, next to **Overview**, **Pages**, **Editor**, **Navigation**, **Blog**, **Forms** and **Domains**.

## The Settings page {#settings}

![The General card on the Settings page](@site/docs/assets/sites/en/settings.png)

**Settings** holds everything about your site that is not a page and not its look. It is split into cards, in this order: **General**, **Search & sharing**, **Legal information**, **Bot protection**, **Maintenance mode**, **Branding** and **Danger zone**.

Each card has its own **Save** button, so nothing changes until you save that card. Everyone with access to the site can open this page. Changing a card needs edit access, and deleting the site needs admin access.

:::note Some settings need a publish
**General** and **Search & sharing** are part of your site's draft. After you save them, your changes reach visitors with your next [publish](/docs/sites/publishing#publish). Everything else on this page, including the share card switch, takes effect as soon as you save. See [what needs a publish and what is live](/docs/sites/publishing#snapshot) for the full list.
:::

### General {#general}

- **Site name**: the name of your site, used in the browser tab and in link previews.
- **Description**: a short summary of your community, used for search engines and link previews.
- **Language**: the language of your site's built-in text, like buttons and labels. You can pick **English** or **Deutsch**. Your own content stays exactly as you wrote it.
- **Favicon**: the small icon in the browser tab. Pick an image from your server's image library. If you do not set one, your site uses your Discord server's icon.

### Search & sharing {#sharing}

This card controls how your site looks in search results and when someone shares a link to it, for example on Discord or Twitter/X.

- **Share title**: the title in link previews. If you set one, it is used for every page. Leave it empty and each page uses its own page title. Blog posts always use their own title.
- **Share description**: the text under the title. Leave it empty and your site's **Description** is used.
- **Share image**: the preview image. Pick one from your server's image library.

Below these fields is a switch for the **generated share card**. When it is on and you have not set a **Share image**, we create a preview image for you: a wide card with your site name, description and server icon, in your theme's colours and heading font. It updates by itself when any of those change, so you never have to remake it.

If you turn the switch off, shared links use your **Share image** if you set one, and otherwise your server's icon. This switch is live and does not need a publish.

### Legal information and Bot protection {#legal}

**Legal information** is where you link your privacy policy, your imprint and a contact for data questions. **Bot protection** lets you choose how the spam check on your forms looks to visitors. Both matter most once your site has a form, so they are explained on the [Forms](/docs/sites/forms) page. Both take effect right away.

### Maintenance mode and Danger zone {#maintenance-and-delete}

**Maintenance mode** temporarily replaces your whole site with a short notice. **Danger zone** is where you delete your site. Both are explained on [Publishing & going live](/docs/sites/publishing).

### Branding {#branding}

The **Branding** card tells you whether your site shows the small "Made with SCNX" badge. There is nothing to set here: it follows your server's plan automatically. Our Professional plan hides the badge. A plan change reaches your site within a few minutes, without a publish.

## Analytics {#analytics}

![The Analytics page with daily page views, top pages, referrers and countries](@site/docs/assets/sites/en/analytics.png)

**Analytics** shows how many people look at your site. Open it from the Sites menu, or from the **Analytics** link on the Sites overview.

Pick a **Time period** of 7, 30 or 90 days, and you see:

- **Total page views** for that period,
- a chart of **Page views per day**,
- **Top pages**: your most viewed pages, including your blog and blog posts,
- **Top referrers**: the websites that sent visitors to you, with **Direct / none** for visits without one,
- **Top countries**: where your visitors come from.

These are page views, not unique visitors. Analytics only counts your published site: views of your draft through the editor or a preview link are not counted, and nothing is counted before your first publish.

Analytics is privacy-friendly by design. Views are counted on our servers as simple daily totals. We do not set tracking cookies for it and we do not store visitors' IP addresses. A visitor's IP address is only used for a moment to work out their country. For referrers we only keep the website's address, not the full link.

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
If one of your pages lives at the same address as a redirect, the page wins and the redirect is marked **Dormant**: it never runs. Delete that page to bring the redirect back. A few addresses belong to your site itself and cannot be redirected: your home page, `/blog` (and everything below it), `/sitemap.xml` and `/robots.txt`.
:::

Redirects work right away. You do **not** have to publish your site again for them. They do not run while [maintenance mode](/docs/sites/publishing#maintenance) is on.

## Link-in-bio (compact layout) {#link-in-bio}

For a creator-style "link in bio" page, any page can switch to a **compact** layout: a narrow, centred column, the kind of page you would link from a social media bio.

Open **Pages** in the Sites menu, find the page and click its **Page layout** button (the sliders icon). In the **Layout** section:

- Set **Content width** to **Compact** for the narrow centred column.
- Optionally turn on **Hide navigation and footer** to drop the navigation bar, the footer, the announcement bar and the "skip to content" link on that page only.

The two settings are independent: a compact page can keep its navigation, and a standard page can drop it. The **Link in bio** starter template uses this layout out of the box, with a short intro, your links and what you make.

Layout settings belong to the page, so unlike the announcement bar and redirects, they reach visitors with your next [publish](/docs/sites/publishing).
