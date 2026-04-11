---
sidebar_position: 8
title: Global Placeholders
description: Use global placeholders to display live ticket metrics like utilization, wait times, and queue status in any customizable message or channel name.
---

# Global Placeholders

## Features {#features}

* Use live ticket metrics as placeholders in any customizable message — ticket opening messages, welcome messages, statistics channel names, and more.
* Display global utilization, estimated wait times, and queue status across your entire support system.
* Show per-topic metrics to give users specific information about the topic they selected.
* Placeholders update automatically based on real-time ticket data.



## Setup {#setup}

* Enable [Ticket Utilization](/docs/support-bot/general/ticket-utilization) and/or [Estimated Wait Time](/docs/support-bot/general/estimated-wait-time) in your dashboard.
* Use the placeholders below in any customizable message field (ticket opening messages, welcome messages, [statistics channel](/docs/support-bot/modmail/configuration#statistics-channels) names, etc.).

## Available placeholders {#available-placeholders}

### Global metrics {#global-metrics}

These placeholders show metrics across all tickets in the system.

| Placeholder | Description |
| --- | --- |
| `%globalUtilization%` | The current ticket utilization as a formatted percentage (e.g. "75%").<br/><small><details><summary>Requirement</summary><blockquote>*Requires [Ticket Utilization](/docs/support-bot/general/ticket-utilization) to be enabled.*</blockquote></details></small> |
| `%globalUtilizationCount%` | The number of currently open tickets.<br/><small><details><summary>Requirement</summary><blockquote>*Requires [Ticket Utilization](/docs/support-bot/general/ticket-utilization) to be enabled.*</blockquote></details></small> |
| `%globalUtilizationEmoji%` | A visual indicator emoji based on the current utilization level (green circle, yellow circle, or red circle).<br/><small><details><summary>Requirement</summary><blockquote>*Requires [Ticket Utilization](/docs/support-bot/general/ticket-utilization) to be enabled.*</blockquote></details></small> |
| `%globalEstimatedWaitTime%` | The estimated wait time as a formatted duration (e.g. "15 minutes").<br/><small><details><summary>Requirement</summary><blockquote>*Requires [Estimated Wait Time](/docs/support-bot/general/estimated-wait-time) to be enabled.*</blockquote></details></small> |
| `%globalEstimatedWaitTimeMinutes%` | The estimated wait time as a number in minutes.<br/><small><details><summary>Requirement</summary><blockquote>*Requires [Estimated Wait Time](/docs/support-bot/general/estimated-wait-time) to be enabled.*</blockquote></details></small> |

### Per-topic metrics {#per-topic-metrics}

These placeholders show metrics for a specific ticket topic. Replace `{topicID}` with the unique ID of the topic.

| Placeholder | Description |
| --- | --- |
| `%topicUtilization-{topicID}%` | The utilization percentage for the specified topic.<br/><small><details><summary>Requirement</summary><blockquote>*Requires [Ticket Utilization](/docs/support-bot/general/ticket-utilization) to be enabled and the topic to have utilization enabled.*</blockquote></details></small> |
| `%topicUtilizationCount-{topicID}%` | The number of currently open tickets for the specified topic.<br/><small><details><summary>Requirement</summary><blockquote>*Requires [Ticket Utilization](/docs/support-bot/general/ticket-utilization) to be enabled and the topic to have utilization enabled.*</blockquote></details></small> |
| `%topicUtilizationEmoji-{topicID}%` | A visual indicator emoji for the specified topic's utilization level.<br/><small><details><summary>Requirement</summary><blockquote>*Requires [Ticket Utilization](/docs/support-bot/general/ticket-utilization) to be enabled and the topic to have utilization enabled.*</blockquote></details></small> |
| `%topicEstimatedWaitTime-{topicID}%` | The estimated wait time for the specified topic as a formatted duration.<br/><small><details><summary>Requirement</summary><blockquote>*Requires [Estimated Wait Time](/docs/support-bot/general/estimated-wait-time) to be enabled.*</blockquote></details></small> |
| `%topicEstimatedWaitTimeMinutes-{topicID}%` | The estimated wait time for the specified topic in minutes.<br/><small><details><summary>Requirement</summary><blockquote>*Requires [Estimated Wait Time](/docs/support-bot/general/estimated-wait-time) to be enabled.*</blockquote></details></small> |

:::info
If a placeholder's required feature is not enabled or no data is available, the placeholder resolves to "Not available".
:::

## Where to use them {#where-to-use}

Global placeholders can be used in any customizable message field, including:

* **[Ticket opening messages](/docs/support-bot/modmail/configuration#ticket-open-messages)** — show users the current queue status before they open a ticket.
* **[Welcome messages](/docs/support-bot/modmail/configuration#main-configuration)** — inform users about expected wait times when their ticket is created.
* **[Statistics channel names](/docs/support-bot/modmail/configuration#statistics-channels)** — display live metrics in voice channel names (updated every 15 minutes).
* **[Utilization messages](/docs/support-bot/general/ticket-utilization#advanced-message-configuration)** — enrich utilization warnings with specific numbers.
* **[Estimated wait time messages](/docs/support-bot/general/estimated-wait-time#message-configuration)** — combine global and topic-specific wait times.

:::tip
When a message template receives both global placeholders and its own built-in placeholders (like `%topic%` or `%userID%`), the built-in placeholders take priority if there is a name collision.
:::
