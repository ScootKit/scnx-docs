---
sidebar_position: 7
title: Estimated Wait Time
description: Automatically calculate and display estimated wait times for your Discord support tickets.
---

# Estimated Wait Time

## Features {#features}

* Automatically calculate estimated wait times based on historical ticket data  - no manual input needed.
* Show users how long they can expect to wait when opening a ticket, improving transparency and trust.
* Configure the lookback period, minimum sample size, and maximum display hours for accurate predictions.
* Enable or disable estimated wait time messages per system (Modmail and Ticket System) independently.
* Override estimated wait time settings per ticket topic for more granular control.
* View live estimated wait times per system and per topic directly in your dashboard.



## Setup {#setup}

* Visit the [Estimated Wait Time](https://scnx.app/glink?page=support-system/estimated-wait-time) page in your dashboard.
* [Configure](#main-configuration) the available options.
* Optionally, [configure per-topic overrides](#ticket-topics) to customize estimated wait times for specific topics.
* [Configure messages](#message-configuration) to customize the message sent to users.

## Configuration {#configuration}

### Main configuration {#main-configuration}

| Field | Description |
| --- | --- |
| Enable estimated wait time | Enables or disables the estimated wait time feature. When enabled, your bot calculates wait times based on past ticket data and can display them to users. |
| Lookback days | The number of days (1–365) of historical ticket data used to calculate the estimated wait time. A longer period provides more stable estimates, while a shorter period reacts faster to recent changes. |
| Minimum sample size | The minimum number of tickets (1–100) required within the lookback period before an estimated wait time is shown. If there isn't enough data, no estimated wait time is displayed. |
| Maximum hours to display | The maximum number of hours (1–168) that can be shown as an estimated wait time. If the calculated wait time exceeds this value, it is capped at this number. |

### Ticket Topics {#ticket-topics}

For each ticket topic (in both Modmail and the Ticket System), you can override the global estimated wait time settings.

| Field | Description |
| --- | --- |
| Disable estimated wait time for this topic | If enabled, no estimated wait time is shown for tickets created with this topic. |
| Override estimated wait time for this topic | If enabled, you can set a fixed estimated wait time for this topic instead of using the calculated value.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Disable estimated wait time for this topic" is not enabled.*</blockquote></details></small> |
| Overridden wait time (minutes) | The fixed estimated wait time in minutes to display for this topic.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Override estimated wait time for this topic" is enabled.*</blockquote></details></small> |

### Message configuration {#message-configuration}

These settings are configured separately for each enabled system (Modmail and Ticket System).

| Field | Description |
| --- | --- |
| Send estimated wait time message | If enabled, your bot sends an estimated wait time message to users when they open a ticket.<br/><small><details><summary>Note</summary><blockquote>*The message is only sent if enough historical data is available (based on the configured minimum sample size).*</blockquote></details></small> |
| Estimated wait time message | This message is sent to users when they open a ticket. You can use the following placeholders: `%estimatedWaitTime%` (formatted wait time), `%estimatedWaitTimeMinutes%` (wait time in minutes), `%topicName%` (name of the selected topic).<br/><small><details><summary>Requirement</summary><blockquote>*Only available if "Send estimated wait time message" is enabled.*</blockquote></details></small> |