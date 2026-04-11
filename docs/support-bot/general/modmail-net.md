---
sidebar_position: 3
title: modmail.net Features
description: View Discord support ticket transcripts in a clean web interface with modmail.net integration.
---

# modmail.net Features

[modmail.net](https://modmail.net) is a web platform developed by ScootKit (the team behind SCNX) that provides a clean, formatted interface for viewing ticket transcripts. Instead of downloading plain text files, your team and users can view ticket logs in a modern web layout  - complete with message formatting, timestamps, and user avatars.

## Features {#features}

* View ticket transcripts in a formatted web interface with proper message styling, timestamps, and avatars.
* Share ticket transcripts via a simple link  - no file downloads required.
* Automatically upload ticket logs to modmail.net after a ticket is closed.
* Optionally upload message attachments (images, files) to modmail.net for long-term storage.
* Access transcripts from both Modmail and the Ticket System.



## Setup {#setup}

* Visit the [modmail.net Features](https://scnx.app/glink?page=support-system/bot-configuration?show=modmail-net) section in your dashboard.
* [Configure](#configuration) the available options.

## Configuration {#configuration}

| Field | Description |
| --- | --- |
| Enable modmail.net features | Enables or disables the modmail.net integration for your support bot. When enabled, additional features like log uploading and attachment storage become available. |
| Upload ticket logs to modmail.net | If enabled, ticket transcripts are automatically uploaded to modmail.net after a ticket is closed. Users and team members can then view the logs in a formatted web layout by clicking the button in the log channel message, instead of downloading a plain text file.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Enable modmail.net features" is enabled.*</blockquote></details></small> |
| Upload attachments to modmail.net | If enabled, message attachments (images, files, etc.) sent in tickets are uploaded to modmail.net for permanent storage. Without this, attachments may become unavailable after Discord's CDN links expire.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Enable modmail.net features" is enabled.*</blockquote></details></small> |