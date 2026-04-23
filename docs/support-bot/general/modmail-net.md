---
sidebar_position: 3
title: modmail.net Features
description: View Discord support ticket transcripts in a clean web interface with modmail.net integration.
---

# modmail.net Features

[modmail.net](https://modmail.net) is a web platform developed by ScootKit (the team behind SCNX) that provides a clean, formatted interface for viewing ticket transcripts. Instead of downloading plain text files, your team and users can view ticket logs in a modern web layout - complete with message formatting, timestamps, and user avatars.

## Features {#features}

- View ticket transcripts in a formatted web interface with proper message styling, timestamps, and avatars.
- Share ticket transcripts via a simple link - no file downloads required.
- Automatically upload ticket logs to modmail.net after a ticket is closed.
- Archive message attachments into your SCNX file library so they keep working after Discord's CDN links expire - and so modmail.net can render them inline.
- Access transcripts from both Modmail and the Ticket System.

## Setup {#setup}

- Visit the [modmail.net Features](https://scnx.app/glink?page=support-system/bot-configuration?show=modmail-net) section in your dashboard.
- [Configure](#configuration) the available options.

## Configuration {#configuration}

| Field                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable modmail.net features          | Enables or disables the modmail.net integration for your support bot. When enabled, additional features like log uploading become available.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Use modmail.net logs                 | If enabled, ticket transcripts are automatically uploaded to modmail.net after a ticket is closed. Users and team members can then view the logs in a formatted web layout by clicking the button in the log channel message, instead of downloading a plain text file.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Enable modmail.net features" is enabled._</blockquote></details></small>                                                                                                                                                                                                     |
| Archive ticket attachments to SCNX   | If enabled, attachments posted in tickets are uploaded to your server's SCNX file library so their URLs keep working after Discord's short-lived CDN links expire. See [Attachment archival](#attachment-archival) for how it works. Applies to both Modmail and the Ticket System. Defaults to enabled.                                                                                                                                                                                                                                                                                                                                  |

## Attachment archival {#attachment-archival}

Discord's attachment links are only valid for a short while, so any image or file a user or team member attaches to a ticket becomes a broken link before long - a real problem for [modmail.net transcripts](#configuration) viewed days later, and for anyone going back through old tickets.

With **Archive ticket attachments to SCNX** enabled, your bot copies each attachment into your server's SCNX file library the moment the message is processed. The stored, long-lived copy is used from then on - so modmail.net renders the attachment inline in the transcript, and links in older messages keep working indefinitely.

### You stay in control {#you-stay-in-control}

Archived attachments are **your server's files** - they live in the same [Image Storage](/docs/scnx/guilds/files) library you already use for uploaded and AI-generated assets. Nothing is hidden away:

- **Full visibility.** Every archived attachment is listed on the Image Storage page with a preview, filename, size, and the uploader's Discord ID. You can filter by tag, search by filename, and see exactly what your bot has stored.
- **Delete anything, anytime.** Click the delete button on any file to remove it immediately. Bulk-delete and filter-then-delete also work. Deleted files free up storage space right away.
- **One copy per file, per server.** If the same attachment is posted in several tickets - a logo the same user keeps sending, or a screenshot a staff member re-attaches across conversations - your server stores it once. That keeps your quota efficient, but it also means **deleting that file removes it from every ticket transcript that referenced it**, not just one. Older transcripts that linked to the file will show a "file no longer available" placeholder. Transcripts themselves still load fine; only the missing attachment is blanked out.
- **Turn archival off whenever.** The **Archive ticket attachments to SCNX** toggle is available at all times. Flip it off and no new attachments will be stored. Already-archived files stay until you delete them yourself.

:::info About deletion timing
Deleting a file on SCNX removes it from your library and revokes access instantly. However, some content delivery caches and browser caches may continue to serve a previously-loaded copy for up to a few days before fully catching up - this is standard web behavior and not unique to SCNX, and it isn't something our support team can force-expire on your behalf. For a file to fully disappear from every cache on the internet, you need to delete it and then wait out the caching window.

Please also keep in mind that uploads to SCNX - including attachments that end up in your file library via ticket archival - are subject to our [Terms of Service](https://scootk.it/scnx-tos). Content that violates the terms (illegal material, other users' private data, malware, etc.) is not allowed on SCNX, and accounts or servers that store such content may be suspended. If you're worried an unsafe attachment slipped into a ticket, delete it from the Image Storage page right away.
:::

### Storage and quota {#storage-and-quota}

- Archived files **count against your server's [file-storage quota](/docs/scnx/guilds/files)** like any other uploaded file. [AI-generated audio](/docs/support-bot/voice-support/ai-audio) does not.
- If the quota is exhausted, archival is skipped transparently for new attachments - tickets keep working with the original (soon-to-expire) Discord attachment links. Free up space in the file library or upgrade your plan to resume archival.

### Disabling archival {#disabling-archival}

Turn the **Archive ticket attachments to SCNX** toggle off in the [modmail.net section](https://scnx.app/glink?page=support-system/bot-configuration?show=modmail-net) of your Support Bot configuration. New attachments won't be copied to your file library from that point on; already-archived files stay where they are until you delete them from the [Image Storage](/docs/scnx/guilds/files) page.

:::caution modmail.net transcripts without archival
modmail.net can still render transcripts with archival off, but any embedded attachments will break once the original Discord attachment link expires. For long-term transcript readability, keep archival on.
:::
