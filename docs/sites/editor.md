---
sidebar_position: 2
title: The editor workspace
description: A tour of the SCNX Sites editor - pages, blocks, inline text editing, themes, autosave, undo/redo, preview and publishing.
unlisted: true
---

# The editor workspace

:::caution This documentation is changing during the beta
SCNX Sites is in active beta, and we're changing a lot of things as we go. We'll be reworking this documentation once the current beta cycle wraps up, so some details on this page may be outdated in the meantime.
:::

The editor is a full-screen workspace where you build your whole site. Open it from the Sites overview card in your dashboard with **Open editor**.

## The layout {#layout}

The workspace has a few regions:

- **Top bar** - the **Back to the dashboard** button, your site name, the **page switcher** (with **New page**), the **viewport** toggle, the **autosave** state chip, a **Preview** button and the **Publish** button.
- **Left rail** - the **Structure** list of the blocks on the current page, plus a switcher for the **site sections**: Pages, Design, Site, Domains, Forms and Posts.
- **Center canvas** - a live preview of your page, shown with your real navigation bar and footer. Click a link in the preview's menu to move between pages, exactly like a visitor would.
- **Right panel** - the options for whatever block you have selected. Text is not edited here (see [inline editing](#inline-editing) below); this panel holds the other settings like images, toggles, layout and backgrounds.

## Pages {#pages}

Open the **Pages** section to add, rename, reorder and delete pages. Drag pages to reorder them: the order sets your navigation menu. Your first page is your **Home** page.

To add a page, click **Add page**, give it a title and an address (the same 3-to-63-character rule as your site address), and click **Create page**. Each page also has a **Page layout** option for its content width and whether it shows the navigation and footer, which is how you build a [link-in-bio page](/docs/sites/small-features#link-in-bio).

## Blocks {#blocks}

Pages are built from **blocks**. Open the **Blocks** palette to add one. The palette has two tabs:

- **Blocks** - individual blocks, grouped into **Layout**, **Content** and **Discord**.
- **Sections** - ready-made combinations of several blocks at once (a hero with features and a call to action, an FAQ with a contact prompt, and so on). Every line a section adds is placeholder text, so click it on the page to rewrite it.

Drag a block onto the page, or use the **+** insert bar that appears between blocks. Select a block to edit its options, drag it to reorder, and use **Duplicate** or **Delete block** as needed.

### The block catalog {#block-catalog}

**Layout**

| Block | What it does |
| --- | --- |
| Hero | Big banner with a title and subtitle at the top of a page. |
| Section header | A heading to introduce a new section. |
| Columns | Place blocks side by side in multiple columns. Columns stack on small screens. |
| Spacer | Add vertical empty space between blocks. |
| Divider | A horizontal line to separate content. |
| Card grid | A grid of cards with images, titles and links. |
| Tabs | Group content into switchable tabs. |
| Accordion | Expandable sections that open one at a time. |

**Content**

| Block | What it does |
| --- | --- |
| Text | A rich text block written in Markdown. |
| Image | A single image with an optional caption and link. |
| Image gallery | Show several images in a grid. |
| Video | Embed a YouTube or Twitch video. |
| Quote | Highlight a quote with an optional author. |
| Call to action | A prompt with buttons to drive an action. |
| Icon grid | A grid of icons with short labels. |
| Countdown | A live countdown to a date and time. |

**Discord**

| Block | What it does |
| --- | --- |
| Join button | A button that invites visitors to your Discord. |
| Links | A list or grid of links, linktree-style. |
| About | A rich text block about your community. |
| Staff team | Introduce your team members. |
| Rules | A numbered or plain list of rules. |
| FAQ | Frequently asked questions and answers. |
| [Form](/docs/sites/forms) | An application or contact form people can fill in. |
| [Latest posts](/docs/sites/blog) | Cards linking to your newest blog posts. |
| [Events](/docs/sites/events) | Upcoming Discord events from your server. |

:::note Images come from your server's image library
Image fields (banners, covers, gallery pictures) use your server's existing image library, the same one your bot uses. Paste an outside image link and it will be rejected when you save. Pick an image from the library instead.
:::

## Inline text editing {#inline-editing}

You edit text right on the page, not in a side panel. Click a title, a label or a paragraph in the preview and type. Press **Enter** to commit, **Esc** to cancel, or click away to save it.

Text blocks that use Markdown (the Text block, About, FAQ answers, tab and accordion content) show a small floating toolbar for bold, italic, links and headings while you edit.

Some blocks note "This block's text is edited directly on the page. Click it in the preview." That is the inline editor telling you where to click.

## Design and theme {#design}

Open the **Design** section to change how your whole site looks. Pick one of the preset **themes** as a starting point, then open **Customize this theme** to fine-tune:

- **Colors** - page background, surfaces, text, primary, secondary, accent, borders and dividers.
- **Typography** - heading, body and monospace fonts.
- **Shape & feel** - corner radius, spacing density and shadow style.

Every change re-skins the live canvas straight away, so you can see the result as you go. Use **Reset to theme default** on any value to drop your override.

Themes are grouped into Dark, Light, Gaming, Creative and Premium. Per-block backgrounds (solid colour, gradient, image, pattern or animated) are set on the individual block in the right panel.

## Viewport preview {#viewport}

Use the viewport toggle in the top bar to preview your page at **Desktop**, **Tablet** and **Mobile** widths. All blocks are built mobile-first, and columns collapse to a single column on small screens.

:::note If the visual preview can't load
If the live preview is unavailable, the editor drops into a fallback mode. You select a block from the list and edit everything, including its text, in the settings panel. Saving and publishing keep working the whole time.
:::

## Autosave {#autosave}

There is no Save button. The editor saves the current page on its own a couple of seconds after you stop typing. The chip in the top bar tells you where things stand:

- **Saved** - everything is stored.
- **Saving...** - a save is in progress.
- **Needs attention** - a save could not go through. Click the chip to see why.

"Needs attention" happens when a block is missing required information, when your text did not pass our automatic content review, or when we could not reach the server. Autosave for that page pauses until it is sorted, but your changes stay safely in the editor in the meantime. Fill in what is missing or fix the flagged text and saving continues on its own.

## Undo and redo {#undo-redo}

Use the undo and redo buttons in the top bar, or press **Ctrl+Z** to undo and **Ctrl+Shift+Z** (or **Ctrl+Y**) to redo. History covers your edits to the current page and is cleared when you switch pages. It only ever touches your draft, never your live site.

## Preview {#preview}

Click **Preview** to open your current draft in a new tab through a private preview link. This lets you check a page, or share the draft with a teammate, before anything is published. You can reset the preview link at any time from the Site settings, which stops every link you shared before from working.

## Publish and version history {#publish}

When your draft is ready, click **Publish**. The publish popover shows exactly what will go live: a list of the pages that changed since your last publish (marked **New**, **Changed** or **Removed**) and whether your site settings changed. If nothing changed, the button reads "Published" and there is nothing to do.

The same popover holds your **version history**. Every publish is kept as a version (the last ten), and you can **Roll back** to an earlier one to replace your live site with it. See [Publishing & going live](/docs/sites/publishing) for the full picture of drafts, snapshots and what is live versus snapshotted.

## View-only mode {#view-only}

If you only have view access to the site, the editor opens in **View only** mode. You can browse every page and open every section, but editing is switched off. To make changes you need edit access to the site. See [permission tiers](/docs/sites/intro#permissions) for who can do what.
