---
sidebar_position: 9
title: Escalation
description: Escalate tickets to higher support levels or request assistance from other team members  - available in both Modmail and the Ticket System.
---

# Escalation

## Features {#features}

- Escalate a ticket to a higher support level by transferring it to a preconfigured topic.
- Request assistance from other team members by pinging a configured role - without transferring the ticket.
- Optionally include a reason when escalating or requesting assistance for better context.
- Configure escalation targets and assistance roles per topic, or define server-wide defaults used as a fallback.
- Customize the escalation and assistance messages sent in the ticket channel.
- Optionally DM the user when their Modmail ticket is escalated.
- Works in both Modmail and the Ticket System.

## Setup {#setup}

- Configure the [system-wide defaults](#system-settings) in your dashboard (optional) to provide a fallback escalation target and assistance role.
- Visit the ticket topics page for your system in your dashboard ([Modmail ticket topics](https://scnx.app/glink?page=support-system/modmail/ticket-topics) or [Ticket System ticket topics](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics)).
- Enable the escalation or assistance feature for each topic where you want it available.
- For escalation: set the target topic that tickets should be escalated to (or rely on the system-wide default).
- For assistance: set the role that should be pinged when assistance is requested (or rely on the system-wide default).
- Optionally [customize the messages](#message-configuration) sent when escalating or requesting assistance.

## Prerequisites {#prerequisites}

Both escalation and assistance require [ticket topics](/docs/support-bot/modmail/ticket-topics) to be enabled for the system you want to use them in ([Modmail](/docs/support-bot/modmail/ticket-topics) or the [Ticket System](/docs/support-bot/ticket-system/ticket-topics)). The escalation and assistance configuration sections only appear in the dashboard once ticket topics are turned on.

## Commands {#commands}

<SlashCommandExplanation />

| Command                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/ticket escalate [reason:<Text>]`   | Escalates the current ticket to the next support level by transferring it to the configured target topic. Optionally specify a reason.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Enable escalation" is enabled and an escalation target is configured either for the current ticket's topic or as a [system-wide default](#system-settings)._</blockquote></details></small>                              |
| `/ticket assistance [reason:<Text>]` | Requests assistance from other team members by pinging the configured role in the ticket channel. The ticket stays in its current topic. Optionally specify a reason.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Enable assistance" is enabled and an assistance role is configured either for the current ticket's topic or as a [system-wide default](#system-settings)._</blockquote></details></small> |

## Configuration {#configuration}

### Per-topic settings {#per-topic-settings}

These fields are configured per ticket topic in your dashboard - available for both [Modmail ticket topics](/docs/support-bot/modmail/ticket-topics) and [Ticket System ticket topics](/docs/support-bot/ticket-system/ticket-topics).

| Field                   | Description                                                                                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Escalation target topic | The topic this ticket should be transferred to when escalated. If not set, the [system-wide default](#system-settings) is used. If neither is set, escalation is unavailable.         |
| Assistance role         | The role to ping when a team member requests assistance in this topic. If not set, the [system-wide default](#system-settings) is used. If neither is set, assistance is unavailable. |

### System-wide settings {#system-settings}

These settings are configured separately for Modmail and the Ticket System. See [Prerequisites](#prerequisites) for what needs to be enabled before they appear.

| Field                     | Description                                                                                                                                                                                                                                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable escalation         | Master toggle for the escalation feature. When disabled, the `/ticket escalate` command is not registered and the feature cannot be used in this system.                                                                                                                                                       |
| Default escalation target | The topic used when escalating a ticket whose topic does not set its own escalation target.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Enable escalation" is enabled._</blockquote></details></small>                                                                   |
| Enable assistance         | Master toggle for the assistance feature. When disabled, the `/ticket assistance` command is not registered and the feature cannot be used in this system.                                                                                                                                                     |
| Default assistance role   | The role pinged when requesting assistance in a ticket whose topic does not set its own assistance role.<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Enable assistance" is enabled._</blockquote></details></small>                                                      |
| DM user when escalating   | _Modmail only._ If enabled, the user is also sent a direct message when their ticket is escalated, using the [escalation DM message](#message-configuration).<br/><small><details><summary>Requirement</summary><blockquote>_Only available if "Enable escalation" is enabled._</blockquote></details></small> |

### Message configuration {#message-configuration}

Both the escalation message (posted in the ticket channel) and the assistance message (posted with the role ping) are fully customizable. These are configured separately for Modmail and the Ticket System.

| Field              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Escalation message | The message posted in the ticket channel when a team member runs `/ticket escalate`.<br/><small><details><summary>Available placeholders</summary><blockquote>`%staffUser%` (mention of the escalating team member), `%staffTag%` (tag of the escalating team member), `%reason%` (the reason provided, or a default string if omitted), `%oldTopic%` (the original topic name), `%newTopic%` (the escalation target topic name). [Global placeholders](/docs/support-bot/general/global-placeholders) are also available.</blockquote></details></small>                                 |
| Assistance message | The message posted in the ticket channel when a team member runs `/ticket assistance`.<br/><small><details><summary>Available placeholders</summary><blockquote>`%staffUser%`, `%staffTag%`, `%reason%`, `%topic%` (the current topic name), `%assistanceRole%` (mention of the pinged role). [Global placeholders](/docs/support-bot/general/global-placeholders) are also available.</blockquote></details></small>                                                                                                                                                                     |
| Escalation DM      | _Modmail only._ The direct message sent to the user when their ticket is escalated.<br/><small><details><summary>Requirement</summary><blockquote>_Only sent if "DM user when escalating" is enabled._</blockquote></details><details><summary>Available placeholders</summary><blockquote>`%staffUser%`, `%staffTag%`, `%reason%`, `%oldTopic%`, `%newTopic%`, plus the user's own placeholders (`%userID%`, `%tag%`, `%username%`, `%avatarUrl%`, `%mention%`). [Global placeholders](/docs/support-bot/general/global-placeholders) are also available.</blockquote></details></small> |

## How it works {#how-it-works}

### Escalation {#how-escalation-works}

When a team member runs `/ticket escalate`:

1. A system message is posted in the ticket channel (e.g. "**@StaffMember** escalated this ticket - reason").
2. The ticket is transferred to the configured target topic - just like a regular topic transfer, including permission changes, category moves, and optional role pings.
3. If ticket claiming is enabled with "Remove assigned team member on transfer", the current assignment is cleared so the new team can claim the ticket.

### Assistance {#how-assistance-works}

When a team member runs `/ticket assistance`:

1. The configured assistance role is pinged in the ticket channel with a message (e.g. "@SeniorSupport **@StaffMember** requested assistance in this ticket - reason").
2. The ticket stays in its current topic - no transfer occurs.
3. Other team members with the pinged role can then join the conversation to help.

:::tip
Use escalation when a ticket needs to be **handed off** to a different team. Use assistance when you just need **help** from someone without moving the ticket.
:::
