---
sidebar_position: 1
title: Bot Configuration
description: Configure blocklist, status, branding, and staff commands for your Discord support bot.
---

# Bot Configuration

## Main configuration {#main-configuration}

### Features {#main-configuration-features}

- Enable the blocklist to prevent abusive users from creating tickets.
- Use blocklist slash commands in Discord to add or remove users with optional reasons and durations.
- Adjust your bot's time zone for accurate opening hours, timestamps, and analytics.

### Setup {#main-configuration-setup}

- Visit the [Main configuration](https://scnx.app/glink?page=support-system/bot-configuration?show=main) section in your dashboard.
- [Configure](#main-configuration-configuration) the available options.

### Commands {#main-configuration-commands}

<SlashCommandExplanation />

| Command                                                            | Description                                                                                                                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/blocklist add user:<User> [reason:<Text>] [duration:<Duration>]` | Adds a user to the blocklist. Optionally specify a reason and duration (e.g. `2d4h` for 2 days and 4 hours). Without a duration, the block is permanent. |
| `/blocklist remove user:<User>`                                    | Removes a user from the blocklist.                                                                                                                       |
| `/blocklist status user:<User>`                                    | Shows whether a user is blocked, including the reason and remaining duration.                                                                            |
| `/blocklist list`                                                  | Shows all currently blocked users with their reasons and durations.                                                                                      |

### Configuration {#main-configuration-configuration}

| Field            | Description                                                                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable blocklist | Enables or disables the blocklist feature for your support bot. When enabled, the blocklist slash commands become available and blocked users cannot create tickets. The blocklist applies to both Modmail and the Ticket System. |
| Bot time zone    | This time zone is used for your bot's opening hours, timestamps in analytics, and other time-based features. Make sure to set this to your team's local time zone.                                                                |

## Bot configuration {#bot-configuration}

### Features {#bot-configuration-features}

- Customize your bot's Discord presence to match your server's style.
- Define a custom status text that is displayed on your bot's profile.
- Choose between activity types like "Playing", "Streaming", "Listening", "Watching", "Competing", or "Custom".

### Setup {#bot-configuration-setup}

- Visit the [Bot configuration](https://scnx.app/glink?page=support-system/bot-configuration?show=bot-config) section in your dashboard.
- [Configure](#bot-configuration-configuration) the available options.

### Configuration {#bot-configuration-configuration}

| Field           | Description                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bot status      | This text is displayed as your bot's status on Discord (e.g. "Support tickets" or "DM me for help").                                               |
| Bot status type | The activity type shown in Discord alongside your status text. Options: "Playing", "Streaming", "Listening", "Watching", "Competing", or "Custom". |

## Bot branding {#bot-branding}

### Features {#bot-branding-features}

- Customize the default embed footer and image used across all bot messages.
- Match your bot's branding to your server's identity for a professional look.

### Setup {#bot-branding-setup}

- Visit the [Bot branding](https://scnx.app/glink?page=support-system/bot-configuration?show=branding) section in your dashboard.
- [Configure](#bot-branding-configuration) the available options.

### Configuration {#bot-branding-configuration}

| Field                | Description                                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Default embed footer | This text is used as the default footer in all embed messages sent by your bot (e.g. ticket messages, log messages, feedback messages). |
| Default footer image | This image URL is displayed next to the footer text in embed messages. Use your server's logo or icon for consistent branding.          |

## Staff commands {#staff-commands}

### Features {#staff-commands-features}

- Enable the `/analytics` command so team members can view support statistics directly in Discord.
- Enable the `/summary` command for AI-powered ticket summaries using your server's AI credits.
- Customize the messages displayed by the analytics and summary commands.

### Setup {#staff-commands-setup}

- Visit the [Staff commands](https://scnx.app/glink?page=support-system/bot-configuration?show=staff-commands) section in your dashboard.
- [Configure](#staff-commands-configuration) the available options.

### Commands {#staff-commands-commands}

<SlashCommandExplanation />

| Command                   | Description                                                                                                                                                                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/analytics`              | Shows server-wide support analytics (open tickets, average response time, close time, ratings, and more).<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Enable analytics command" is enabled._</blockquote></details></small>                |
| `/analytics staff:<User>` | Shows analytics for a specific team member (messages sent, response time, tickets handled).<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Enable analytics command" is enabled._</blockquote></details></small>                              |
| `/summary`                | Generates an AI-powered summary of the current ticket.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Enable summary command" is enabled. Uses your server's [AI credits](https://faq.scnx.app/ki-auf-scnx/)._</blockquote></details></small> |

### Configuration {#staff-commands-configuration}

| Field                    | Description                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable analytics command | If enabled, team members can use the `/analytics` command to view support statistics directly in Discord.                                                                                                                                                                                                                                                                                    |
| Analytics message        | Customize the message displayed when running the `/analytics` command (server-wide statistics).<br/><small><details><summary>Available placeholders</summary><blockquote>`%days%` (the period length in days), `%ticketCount%` (tickets created in the period, with change vs. the previous period), `%avgResponseTime%` (average first-response time, with change), `%staffMessages%` (total staff messages, with change), `%avgRating%` (average feedback rating, with change), `%ratingCount%` (number of ratings submitted), `%ticketsWithFirstResponse%` (number of tickets that received at least one staff reply). [Global placeholders](/docs/support-bot/general/global-placeholders) are also available.</blockquote></details><details><summary>Requirement</summary><blockquote>_Only available if "Enable analytics command" is enabled._</blockquote></details></small> |
| Staff analytics message  | Customize the message displayed when running the `/analytics staff` command (per-staff statistics).<br/><small><details><summary>Available placeholders</summary><blockquote>All placeholders from the [Analytics message](#staff-commands-configuration), plus the selected team member's placeholders: `%userID%`, `%tag%`, `%username%`, `%avatarUrl%`, `%mention%`. [Global placeholders](/docs/support-bot/general/global-placeholders) are also available.</blockquote></details><details><summary>Requirement</summary><blockquote>_Only available if "Enable analytics command" is enabled._</blockquote></details></small> |
| Enable summary command   | If enabled, team members can use the `/summary` command to generate an AI summary of the current ticket.<br/><small><details><summary>Note</summary><blockquote>_This uses your server's [AI credits](https://faq.scnx.app/ki-auf-scnx/) and shares certain data with "modmail.net" (a SCNX product). Privacy policy [here](https://scootk.it/scnx-privacy)._</blockquote></details></small> |

## Opening hours {#opening-hours}

You can find our documentation page for opening hours [here](/docs/support-bot/general/opening-hours).

## modmail.net features {#modmail-net-features}

You can find our documentation page for modmail.net features [here](/docs/support-bot/general/modmail-net).
