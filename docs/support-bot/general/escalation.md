---
sidebar_position: 9
title: Escalation
description: Escalate tickets to higher support levels or request assistance from other team members — available in both Modmail and the Ticket System.
---

# Escalation

## Features {#features}

* Escalate a ticket to a higher support level by transferring it to a preconfigured topic.
* Request assistance from other team members by pinging a configured role — without transferring the ticket.
* Optionally include a reason when escalating or requesting assistance for better context.
* Both commands are per-topic: each ticket topic can define its own escalation target and assistance role independently.
* Works in both Modmail and the Ticket System.



## Setup {#setup}

* Visit the ticket topics page for your system in your dashboard ([Modmail ticket topics](https://scnx.app/glink?page=support-system/modmail/ticket-topics) or [Ticket System ticket topics](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics)).
* Enable the escalation or assistance feature for each topic where you want it available.
* For escalation: set the target topic that tickets should be escalated to.
* For assistance: set the role that should be pinged when assistance is requested.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description |
| --- | --- |
| ``/ticket escalate [reason:<Text>]`` | Escalates the current ticket to the next support level by transferring it to the configured target topic. Optionally specify a reason.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if an escalation target is configured for the current ticket's topic.*</blockquote></details></small> |
| ``/ticket assistance [reason:<Text>]`` | Requests assistance from other team members by pinging the configured role in the ticket channel. The ticket stays in its current topic. Optionally specify a reason.<br/><small><details><summary>Requirement</summary><blockquote>*Only available if an assistance role is configured for the current ticket's topic.*</blockquote></details></small> |

## Configuration {#configuration}

### Per-topic settings {#per-topic-settings}

These fields are configured per ticket topic in your dashboard — available for both [Modmail ticket topics](/docs/support-bot/modmail/ticket-topics) and [Ticket System ticket topics](/docs/support-bot/ticket-system/ticket-topics).

| Field | Description |
| --- | --- |
| Escalation target topic | The topic this ticket should be transferred to when escalated. If not set, escalation is unavailable for this topic. |
| Assistance role | The role to ping when a team member requests assistance in this topic. If not set, assistance is unavailable for this topic. |

## How it works {#how-it-works}

### Escalation {#how-escalation-works}

When a team member runs ``/ticket escalate``:

1. A system message is posted in the ticket channel (e.g. "**@StaffMember** escalated this ticket — reason").
2. The ticket is transferred to the configured target topic — just like a regular topic transfer, including permission changes, category moves, and optional role pings.
3. If ticket claiming is enabled with "Remove assigned team member on transfer", the current assignment is cleared so the new team can claim the ticket.

### Assistance {#how-assistance-works}

When a team member runs ``/ticket assistance``:

1. The configured assistance role is pinged in the ticket channel with a message (e.g. "@SeniorSupport **@StaffMember** requested assistance in this ticket — reason").
2. The ticket stays in its current topic — no transfer occurs.
3. Other team members with the pinged role can then join the conversation to help.

:::tip
Use escalation when a ticket needs to be **handed off** to a different team. Use assistance when you just need **help** from someone without moving the ticket.
:::
