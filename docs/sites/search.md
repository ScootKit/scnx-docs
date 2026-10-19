---
sidebar_position: 12
title: Site search
description: Let visitors search your SCNX site - the search box in your navbar and blog, the /search page, and what is searched.
---

# Site search {#search}

:::caution This documentation is changing during the beta
SCNX Sites is in active beta, and we're changing a lot of things as we go. We'll be reworking this documentation once the current beta cycle wraps up, so some details on this page may be outdated in the meantime.
:::

Site search lets visitors find things on your site without clicking through the menu. It adds a search box to your navigation bar and your blog, plus a results page at **`/search`**.

## Turning search on or off {#enable}

Search is **on** by default. To change it:

1. Open **Settings** in the Sites menu.
2. In the **Search & sharing** card, use the **Enable site search** switch.

Sites that already used the `/search` address for a page or redirect were left **off**, because search would have hidden that content. The switch applies right away. You do **not** have to publish your site again.

:::note `/search` must be free
Site search owns the `/search` address. If one of your pages or redirects already uses `/search`, search cannot be turned on until you delete or rename it. You will see a message saying so. For the same reason, you cannot create a page or redirect at `/search` while search is on.
:::

## What visitors see {#visitors}

- A **search box** in your navigation bar and on your blog page.
- A **`/search`** page with a search field and the results, ten per page. Each result shows a title, a short snippet with the matching words highlighted, and whether it is a **Page** or a **Blog post**.
- A friendly message when nothing matches. If someone searches too often in a short time, they are asked to wait a moment.

The `/search` page itself is kept out of search engines.

## What is searched {#scope}

- Your **published pages**, from the version that is currently live. Drafts and unpublished edits are never searchable.
- Your **published blog posts**, including their tags, author names and category name. Posts that are still drafts are not searchable.

A new page, or a change to a page, becomes searchable after you [publish your site](/docs/sites/publishing). Blog posts are searchable as soon as you publish them. Search does not work while your site is unpublished or in [maintenance mode](/docs/sites/publishing#maintenance).

Results must contain all the words searched for. Titles count more than headings, and headings more than body text. A search can have up to 100 characters and up to 6 words, and longer input is shortened.
