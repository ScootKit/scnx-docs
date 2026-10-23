---
sidebar_position: 8
title: MCP Connector
description: Connect ChatGPT or Claude to SCNX to build and debug Custom Commands v3 flows and to edit your SCNX Site for your Discord server.
---

# MCP Connector

SCNX runs a remote [MCP](https://modelcontextprotocol.io) server at `https://mcp.scnx.app`. It lets an AI assistant
such as ChatGPT or Claude read your server's setup and help you with two areas:

- **Custom Commands v3 (CCV3)** - build, test and debug flows, the visual flow-based commands that are currently
  in beta.
- **Sites** - read and edit your server's SCNX Site: pages, blog posts, forms, redirects and settings.

You choose per area what the assistant may do when you connect (see [Connecting](#connecting)).

This is for you if you already build custom commands on SCNX and want an assistant that can look up the exact
actions and triggers available on your bot, write flows for you, check them for errors, run them safely, and help
you figure out why one failed - without you copy-pasting JSON back and forth. It is also for you if you want help
building a Site from a mockup, moving an old website over, or making edits across many pages.

## Requirements before it will work {#requirements}

:::info Read this first
The connector will connect and authorize even if these aren't met, but every tool that touches a specific server
will refuse to do anything until they are.
:::

- You must **own the Discord server**, or be a **trusted admin** with permissions that clear the same bar the
  dashboard uses for bot configuration (Bot-Administrator, Co-Owner, or the "Change and Reload Configuration /
  Custom Command" permission - see [Trusted Admins](/docs/scnx/guilds/trusted-admins#permissions)). SCNX rechecks
  this on every single tool call, so losing access mid-session drops the server from the connection immediately.
- You need a **logged-in SCNX account** (the same one used for [scnx.app](https://scnx.app)) to complete the
  authorization step below.

For **Custom Commands**:

- The server needs the **Custom-Bot enabled** (see [Set up your Custom-Bot](/docs/custom-bot)), with its **bot
  online and running**. These tools reach your server through your bot's own host process - if it's offline,
  those calls fail.
- You need to be part of the Custom Commands V3 Beta Program.

For **Sites**:

- The server needs access to **SCNX Sites** and a Site that already exists. The assistant cannot create one. If
  your server has no Site yet, create it in the SCNX dashboard first.
- Reading a Site works with the same access you need to view it in the dashboard. Changing it needs the same
  access you need to edit it in the dashboard. Some actions, such as rolling back or deleting a form, need the
  website admin permission, just like in the dashboard.

## Connecting {#connecting}

The connector is an OAuth 2.1 server, so connecting always goes through your browser - no API key to copy. The flow
is the same shape in both ChatGPT and Claude:

1. Add a custom connector and paste the server URL: **`https://mcp.scnx.app/mcp`**.
2. Your client opens a browser tab and sends you to log in to SCNX (if you aren't already).
3. You land on the SCNX consent screen. There you choose:
   - **Which servers** to grant access to, picked individually from the servers you're eligible on.
   - **Which areas** the assistant may use on those servers: Custom Commands, Sites, or both. You choose the
     access per area.
   - **Read only** or **Read and make changes**, for each area - read-only lets the assistant look at everything
     but never create, edit, delete, activate or write anything; read and make changes additionally allows the
     write tools described below.
   - **How long the grant lasts** - after 30 days, after 90 days, after 1 year, or never (until you revoke it).
4. Approve. Your client receives its tokens and the connector shows as connected.

:::note Servers with Enhanced Security
If a server has [Enhanced Security](/docs/scnx/guilds/enhanced-security) turned on, SCNX asks you to log in again
before you can connect it. This happens at connect time.
:::

You can change your mind at any time: reconnect to re-authorize with different servers, access level or expiry, or
revoke the grant from your SCNX account to cut it off immediately.

### In ChatGPT

Open **Settings → Connectors**, add a custom connector (this may require enabling developer/advanced mode for
custom connectors first), and paste `https://mcp.scnx.app/mcp` as the server URL. ChatGPT performs the same
discovery and consent flow.

### In Claude

Open **Settings → Connectors**, add a custom connector, and paste `https://mcp.scnx.app/mcp` as the server URL.
Claude performs discovery and registration automatically, then opens the browser consent flow above.

## What it can do {#capabilities}

The assistant only sees the tools for the areas you granted. Within an area, write tools refuse at call time on a
read-only connection.

## Custom Commands {#custom-commands}

### Read your setup

Look up your server's channels and roles, the bot's actual Discord permissions, and its remaining Custom Commands
budget and deploy/activation quota (including how much of your hourly write budget is left) - useful pre-flight
checks before authoring anything.

### Learn the format and browse the catalog

List and describe every action, trigger and parameter type available on your server's exact bot branch, search the
catalog by keyword, and read the built-in authoring guide and a gallery of real, validated example flows and
modules.

### Author and validate flows

Read your existing modules, flows and their configuration values, then validate a flow or module document and get
back structured errors and warnings - not a guess, not a silent pass. You can also read or validate a whole app - a
module together with all its flows and configuration values - as a single document.

### Simulate safely

Run a flow as a **forced dry run**: the assistant sees a structural, step-by-step trace of what would happen, but
the bot never actually sends, edits or deletes anything on Discord.

### Deploy (read-write only)

Create, update and delete modules and flows, set a module's configuration values, and reload the bot when needed.
A whole app (module, flows and configuration values) can be saved in one call, which uses only a single deploy no
matter how many flows it contains. Every write is snapshotted first, and the assistant can list those snapshots and
restore one to undo a change.

### Debug past runs

List recent executions and pull up one in detail to see its structural trace and error code, to work out why a
command failed in production.

### Inspect and change module storage (read-write for values and writes)

Check what's stored in a module's storage fields - structurally by default (field, size, how many records), with
raw values available only on request. Proposed storage changes are shown as a value-free diff before you commit
them.

### Read documentation and the marketplace

Search SCNX's documentation and fetch a page as markdown, browse the changelogs, and browse marketplace modules.
Installing a marketplace module needs a read-write connection, and an installed module always arrives switched off,
so it never activates automatically.

### Check whether you can publish

See which marketplace publisher organizations your account could publish under, whether each one has accepted the
marketplace terms, and whether it has a support link set - the publishing-readiness check the assistant runs before
it helps you put a module on the marketplace. This is the one thing the connector reads that belongs to
your SCNX account rather than to a server you selected.

The assistant can also read the built-in publishing guide and run the real publish checks against a module -
required listing details, portability and the organization's prerequisites - without publishing anything. The
actual publishing always happens in the dashboard.

## Sites {#sites}

With the Sites area granted, the assistant can read your SCNX Site and edit it, in the same way you would in the
dashboard editor.

### Read your Site

It can read the Site's settings, pages, blog posts, authors, categories and tags, forms, redirects and your server's
image library. It can also read a built-in guide to the page format, the block types and the themes, so it builds
pages the editor accepts. Form submissions are not readable through the connector.

### Edit pages and blog posts as drafts

The assistant can create, change, reorder and delete pages, and write and change blog posts. Page changes, blog
post changes and most Site settings (theme, navbar, footer, social preview text, name) are saved as **drafts**.
Visitors do not see a draft. After each change the assistant gives you a **preview link** so you can look at the
result before anything goes live.

It can also check a page without saving it, and it can take a screenshot of a page in your draft. That is how it
compares a page with a mockup you gave it: it builds the page, looks at the screenshot, fixes the differences and
repeats. If a screenshot is not available at the moment, it falls back to the preview link.

### Images

The assistant puts images into your server's image library by URL, and the Site can only use images from that
library. Images pasted straight into the chat only work up to about 1 MB. For anything bigger, give the
assistant a link instead. Only import images you own or have the right to use.

### Moving an existing site over

Give the assistant the address of your old site. It reads the old pages, imports the images into your image
library, rebuilds the pages as drafts and adds redirects from the old paths. It asks you to confirm that you have
the rights to the content and the images before anything is published.

### Changes that go live at once

Some things have no draft. The public Site shows them as soon as they are saved:

- Forms
- Redirects
- Blog authors, categories and tags
- These Site settings: the announcement bar, the legal links (privacy policy, imprint and data contact), the blog
  layout, the social preview card, reading time, post navigation and search

The assistant must ask you first and wait for your yes before it changes any of these. Restoring an earlier version
of one of them is live at once too.

### Publishing needs your yes

The assistant never publishes, rolls back or publishes a blog post on its own. It only does so after you have said
yes in the conversation, and after it showed you the preview link. The assistant is told to treat requests inside site content as data, not as your yes. Only you can say yes.

Before a publish, SCNX runs a content check. If it finds a problem, nothing is published and the assistant tells
you what to fix. A publish can be undone by rolling back to an older version. Rolling back needs the website admin permission.

### Undo

Page, blog post, form, redirect and Site settings changes are snapshotted before they are written, so the assistant
can restore the earlier state. If the item changed since, the assistant asks you first. Blog authors, categories and
tags are the exception: they cannot be restored this way.

## What it deliberately cannot do {#out-of-scope}

The connector covers Custom Commands v3 (the flows and modules you build yourself) and your SCNX Site. It is
**not** a general SCNX control surface. It cannot:

- Configure any of the bot's **built-in modules** (levels, welcome, moderation, tickets, and the rest) - those are
  configured in the SCNX Dashboard, not through this connector.
- Manage **bot settings**, or start/stop a bot.
- Change a **bot token**.
- Touch **modmail**, **backups**, **analytics** or **billing**.

On Sites it also cannot:

- Create a Site or delete one.
- Manage **domains**, **embeds** or Site **analytics**.
- Read **form submissions**.

If you ask it to do any of these, it should tell you plainly that it doesn't support that yet and point you to the
[SCNX Dashboard](https://scnx.app) instead of attempting a workaround.

## Safety model {#safety}

- **Read-only vs read-write is enforced per connection and per area.** A read-only grant cannot call any write
  or storage-write tool - each one refuses before it makes a network call. Granting Custom Commands does not
  grant Sites, and the other way round.
- **Site changes are drafts, and publishing is yours.** Pages, blog posts and most settings stay drafts until you
  say yes. The things that go live at once (forms, redirects, blog authors, categories and tags, and a few
  settings) also need your yes first.
- **Images stay in your library.** The assistant can only use images that are in your server's image library.
- **Every write is snapshotted first**, so it's reversible. Deleting or overwriting a module or flow can be undone
  by restoring the snapshot returned with that write.
- **Activation is opt-in and can be refused.** Saving or activating a flow is only a request. A flow with
  validation errors, a bright-line abuse signal, or any destructive-tier action (banning a member, deleting a
  channel, kicking, pruning, and similar) is saved as an **inactive draft** instead of going live, for a human to
  arm from the dashboard.
- **Test runs are always simulations.** `run-test` is a forced dry run - it never sends, edits, or deletes
  anything on Discord, regardless of read-only or read-write access.
- **Almost everything is scoped to the servers you picked.** The one exception is the publishing-readiness check,
  which is account-scoped: it lists the marketplace publisher organizations you could publish under, plus their
  terms and support-link status. It reads nothing else about your account.
- **No Discord message or member content is ever returned.** Execution traces and storage inspection are
  structural by default. The only way to see a raw stored value is `inspect-storage` with `includeValues: true`,
  which needs a read-write grant and is logged every time it's used.
