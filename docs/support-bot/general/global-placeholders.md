---
sidebar_position: 8
title: Global Placeholders
description: Use global placeholders to display bot identity, server info, timestamps, opening hours, and live ticket metrics in any customizable message or channel name.
---

# Global Placeholders

## Features {#features}

- Use bot identity, server info, and timestamps as placeholders in any customizable message - replaced automatically when the message is sent.
- Use live ticket metrics (utilization, estimated wait time) in ticket opening messages, welcome messages, statistics channel names, and more.
- Show per-topic metrics to give users specific information about the topic they selected.
- Placeholders update automatically based on real-time data.

## Setup {#setup}

- Bot, server, timestamp, and opening-hours placeholders are always available - no configuration required.
- For ticket metric placeholders: enable [Ticket Utilization](/docs/support-bot/general/ticket-utilization) and/or [Estimated Wait Time](/docs/support-bot/general/estimated-wait-time) in your dashboard.
- Use the placeholders below in any customizable message field (ticket opening messages, welcome messages, [statistics channel](/docs/support-bot/modmail/configuration#statistics-channels) names, etc.).

:::info
Not every placeholder is available in every context. Bot, server, timestamp, and opening-hours placeholders work in any customizable message. Ticket metric placeholders work in ticket opening messages, welcome messages, utilization/EWT messages, and statistics channels. Feature-specific placeholders (for example `%staffUser%` or `%estimatedWaitTime%`) are only available in the messages documented on their respective feature pages.
:::

## Available placeholders {#available-placeholders}

### Bot {#bot-placeholders}

| Placeholder    | Description               |
| -------------- | ------------------------- |
| `%botName%`    | Display name of the bot.  |
| `%botID%`      | User ID of the bot.       |
| `%botAvatar%`  | Avatar URL of the bot.    |
| `%botTag%`     | Full tag of the bot.      |
| `%botMention%` | Mention string of the bot (e.g. `<@123…>`). |

### Server {#server-placeholders}

| Placeholder   | Description                 |
| ------------- | --------------------------- |
| `%guildName%` | Name of the server.         |
| `%guildID%`   | ID of the server.           |
| `%guildIcon%` | Icon URL of the server.     |

### Timestamps {#timestamp-placeholders}

Timestamp placeholders use [Discord's native timestamp formatting](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles) and automatically adapt to each user's timezone and locale. They are evaluated at the moment the message is sent.

| Placeholder       | Discord Style | Description                         |
| ----------------- | ------------- | ----------------------------------- |
| `%timestamp%`     | `f`           | Short date/time (same as `%shortDateTime%`). |
| `%shortTime%`     | `t`           | Short time (e.g. 4:20 PM).          |
| `%longTime%`      | `T`           | Long time (e.g. 4:20:30 PM).        |
| `%shortDate%`     | `d`           | Short date (e.g. 04/05/2026).       |
| `%longDate%`      | `D`           | Long date (e.g. April 5, 2026).     |
| `%shortDateTime%` | `f`           | Short date/time.                    |
| `%longDateTime%`  | `F`           | Long date/time.                     |
| `%relativeTime%`  | `R`           | Relative time (e.g. "just now" or "2 minutes ago"). |

### Opening hours {#opening-hours-placeholder}

| Placeholder       | Description                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `%openingHours%`  | A formatted representation of your configured [opening hours](/docs/support-bot/general/opening-hours). Empty if opening hours are not configured.                                   |

### Global metrics {#global-metrics}

These placeholders show metrics across all tickets in the system.

| Placeholder                        | Description                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `%globalUtilization%`              | The current ticket utilization as a formatted percentage (e.g. "75%").<br/><small><details><summary>Requirement</summary><blockquote>_Requires [Ticket Utilization](/docs/support-bot/general/ticket-utilization) to be enabled._</blockquote></details></small>                                        |
| `%globalUtilizationCount%`         | The number of currently open tickets.<br/><small><details><summary>Requirement</summary><blockquote>_Requires [Ticket Utilization](/docs/support-bot/general/ticket-utilization) to be enabled._</blockquote></details></small>                                                                         |
| `%globalUtilizationEmoji%`         | A visual indicator emoji based on the current utilization level (green circle, yellow circle, or red circle).<br/><small><details><summary>Requirement</summary><blockquote>_Requires [Ticket Utilization](/docs/support-bot/general/ticket-utilization) to be enabled._</blockquote></details></small> |
| `%globalEstimatedWaitTime%`        | The estimated wait time as a formatted duration (e.g. "15 minutes").<br/><small><details><summary>Requirement</summary><blockquote>_Requires [Estimated Wait Time](/docs/support-bot/general/estimated-wait-time) to be enabled._</blockquote></details></small>                                        |
| `%globalEstimatedWaitTimeMinutes%` | The estimated wait time as a number in minutes.<br/><small><details><summary>Requirement</summary><blockquote>_Requires [Estimated Wait Time](/docs/support-bot/general/estimated-wait-time) to be enabled._</blockquote></details></small>                                                             |

### Per-topic metrics {#per-topic-metrics}

These placeholders show metrics for a specific ticket topic. Replace `{topicID}` with the unique ID of the topic.

| Placeholder                                 | Description                                                                                                                                                                                                                                                                                               |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `%topicUtilization-{topicID}%`              | The utilization percentage for the specified topic.<br/><small><details><summary>Requirement</summary><blockquote>_Requires [Ticket Utilization](/docs/support-bot/general/ticket-utilization) to be enabled and the topic to have utilization enabled._</blockquote></details></small>                   |
| `%topicUtilizationCount-{topicID}%`         | The number of currently open tickets for the specified topic.<br/><small><details><summary>Requirement</summary><blockquote>_Requires [Ticket Utilization](/docs/support-bot/general/ticket-utilization) to be enabled and the topic to have utilization enabled._</blockquote></details></small>         |
| `%topicUtilizationEmoji-{topicID}%`         | A visual indicator emoji for the specified topic's utilization level.<br/><small><details><summary>Requirement</summary><blockquote>_Requires [Ticket Utilization](/docs/support-bot/general/ticket-utilization) to be enabled and the topic to have utilization enabled._</blockquote></details></small> |
| `%topicEstimatedWaitTime-{topicID}%`        | The estimated wait time for the specified topic as a formatted duration.<br/><small><details><summary>Requirement</summary><blockquote>_Requires [Estimated Wait Time](/docs/support-bot/general/estimated-wait-time) to be enabled._</blockquote></details></small>                                      |
| `%topicEstimatedWaitTimeMinutes-{topicID}%` | The estimated wait time for the specified topic in minutes.<br/><small><details><summary>Requirement</summary><blockquote>_Requires [Estimated Wait Time](/docs/support-bot/general/estimated-wait-time) to be enabled._</blockquote></details></small>                                                   |

:::info
If a placeholder's required feature is not enabled or no data is available, the placeholder resolves to "Not available".
:::

## Where to use them {#where-to-use}

Bot, server, timestamp, and opening-hours placeholders can be used in **any** customizable message field (the examples below also apply to them).

Ticket metric placeholders can be used in:

- **[Ticket opening messages](/docs/support-bot/modmail/configuration#ticket-open-messages)** - show users the current queue status before they open a ticket.
- **[Welcome messages](/docs/support-bot/modmail/configuration#main-configuration)** - inform users about expected wait times when their ticket is created.
- **[Statistics channel names](/docs/support-bot/modmail/configuration#statistics-channels)** - display live metrics in voice channel names (updated every 15 minutes).
- **[Utilization messages](/docs/support-bot/general/ticket-utilization#advanced-message-configuration)** - enrich utilization warnings with specific numbers.
- **[Estimated wait time messages](/docs/support-bot/general/estimated-wait-time#message-configuration)** - combine global and topic-specific wait times.

:::tip
When a message template receives both global placeholders and its own feature-specific placeholders (like `%topic%` or `%userID%`), the feature-specific placeholders take priority if there is a name collision.
:::
