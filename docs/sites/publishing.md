---
sidebar_position: 8
title: Publishing & going live
description: How publishing works on SCNX Sites - drafts, the snapshot model, version history and rollback, and maintenance mode.
unlisted: true
---

# Publishing & going live

:::caution This documentation is changing during the beta
SCNX Sites is in active beta, and we're changing a lot of things as we go. We'll be reworking this documentation once the current beta cycle wraps up, so some details on this page may be outdated in the meantime.
:::

Your site has two states: the **draft** you edit, and the **live** version visitors see. This page explains how one becomes the other, and which parts of your site update the moment you change them.

## Draft vs. published {#draft-vs-published}

Everything you do in the editor changes your **draft**. The draft is private: only people with access to the site can see it. Visitors keep seeing the last version you published.

When you are happy with your draft, click **Publish**. The publish popover shows what will go live:

- a list of the pages that changed since your last publish, marked **New**, **Changed** or **Removed**,
- whether your **site settings** changed.

If nothing changed, the button reads "Published" and there is nothing to do. Pages can also show up in this list after a design change or a platform update, or when you move them around, not only when you edit their text.

Until you have ever published, your site is a draft and is not public at all.

## The snapshot model {#snapshot}

When you publish, your page layout is **snapshotted**: the exact pages, blocks, text and design at that moment are frozen and served as your live site. Editing the draft afterwards does not touch the live snapshot until you publish again. This keeps your live site stable while you work on the next version.

Some things, though, are deliberately **live** and update straight away, without a publish:

| Snapshotted (needs a publish)        | Live (updates right away)                                           |
| ------------------------------------ | ------------------------------------------------------------------- |
| Pages, blocks and their text         | [Blog posts](/docs/sites/blog)                                      |
| Design, theme and page layout        | [Forms](/docs/sites/forms) and their answers                        |
| Site settings, navigation and footer | [Events](/docs/sites/events)                                        |
|                                      | [Redirects](/docs/sites/small-features#redirects)                   |
|                                      | [The announcement bar](/docs/sites/small-features#announcement-bar) |

The idea is simple: your page layout stays under your control and only changes when you publish, while news, forms, events and quick notices are things you expect to be immediate.

## Preview before you publish {#preview}

Use the **Preview** button to open your current draft in a new tab through a private link, before it is public. You can share that link with a teammate for a second opinion. You can reset the preview link from the Site settings, which stops every link you shared before from working.

## Version history and rollback {#versions}

Every time you publish, that version is kept. Open the publish popover to see your **version history**. The current live version is marked **Live**.

If a publish introduced a problem, choose **Roll back** on an earlier version to make it live again. The most recent versions are kept (the last ten), so you always have a way back to a known-good state.

## Maintenance mode {#maintenance}

Maintenance mode temporarily replaces your whole site with a short notice, without unpublishing anything. Use it while you are making bigger changes.

Open the **Site** section and find **Maintenance mode**:

- Turn on **Enable maintenance mode**.
- Write the **Maintenance message** visitors should see.

While maintenance mode is on, visitors only see your maintenance notice. The [announcement bar](/docs/sites/small-features#announcement-bar) is not shown there. Turn it off again to bring your site back exactly as it was.

## Deleting a site {#delete}

Deleting a site is permanent and needs the website admin permission. It removes everything: every page, your custom domains, your published versions, your redirects, your blog posts, your visit statistics, and every form together with all the answers people sent you. None of it can be brought back, so you are asked to type your site's address to confirm.
