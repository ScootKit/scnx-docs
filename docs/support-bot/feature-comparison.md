---
sidebar_position: 2
title: Feature Comparison
description: Compare every SCNX Support Bot system - Modmail, Ticket System, Forum Support and Voice Support - side by side to find the best fit for your server.
---

# Feature Comparison

The SCNX Support Bot offers four support systems. You can enable any combination of them - they share the same bot, blocklist, opening hours, and analytics. Use the tables below to find the right fit.

## At a glance {#at-a-glance}

|                                | Modmail               | Ticket System              | Forum Support            | Voice Support        |
| ------------------------------ | --------------------- | -------------------------- | ------------------------ | -------------------- |
| **How members reach you**      | DM the bot            | Click a button             | Post in a public forum   | Join a voice channel |
| **Visibility**                 | Private               | Private channel            | **Public thread**        | Private voice        |
| **Conversation style**         | Text (relayed)        | Text (in a channel)        | Text (in the open)       | Live voice           |
| **Built-in AI first answer**   | ➖ (via AI FAQ)       | ➖ (via AI FAQ)            | ✅                       | ❌                   |
| **Shared queue & claiming**    | ✅                    | ✅                         | ✅                       | ✅ (pull next)       |
| **Auto-close & SLA reminders** | ✅                    | ✅                         | ✅                       | ➖                   |
| **Feedback & star ratings**    | ✅                    | ✅                         | ✅                       | ✅                   |
| **Analytics & wait-time**      | ✅                    | ✅                         | ✅                       | ✅                   |
| **Best for**                   | Private 1:1 help      | Structured private tickets | Public, reusable answers | Real-time voice help |
| **Availability**               | All Support Bot plans | All Support Bot plans      | Early-access preview     | Early-access preview |

:::info Legend
✅ supported &nbsp;·&nbsp; ❌ not supported &nbsp;·&nbsp; ➖ not applicable to how this system works
:::

The detailed tables below compare the three **text-based** systems in depth. **Voice Support** is a live-voice flow rather than a text-ticket flow, so it's covered in the at-a-glance table above and its own [introduction](/docs/support-bot/voice-support/intro) rather than row-by-row here.

:::info AI FAQ
[AI FAQ](/docs/support-bot/ai-faq/intro) is an early-access feature that layers across Modmail and the Ticket System (Forum Support has its own [built-in AI answers](/docs/support-bot/forum-support/ai-deflection)). It uses a staff-authored knowledge base to answer questions and deflect easy ones before a ticket is opened, so it isn't a competing system - see the [AI FAQ introduction](/docs/support-bot/ai-faq/intro).
:::

## How members start support

|                                                | Modmail | Ticket System | Forum Support |
| ---------------------------------------------- | :-----: | :-----------: | :-----------: |
| Post in a public forum channel                 |   ❌    |      ❌       |      ✅       |
| Create tickets via DM                          |   ✅    |      ❌       |      ➖       |
| Create tickets in a channel (buttons/dropdown) |   ✅    |      ✅       |      ➖       |
| Open tickets via slash command                 |   ✅    |      ✅       |      ❌       |
| Staff can open tickets on behalf of users      |   ✅    |      ✅       |      ❌       |
| Staff-specific welcome message                 |   ✅    |      ❌       |      ❌       |

## Messaging & communication

|                                                   | Modmail | Ticket System | Forum Support |
| ------------------------------------------------- | :-----: | :-----------: | :-----------: |
| Conversation happens directly in a channel/thread |   ❌    |      ✅       |      ✅       |
| Messages relayed via DM                           |   ✅    |      ❌       |      ➖       |
| Anonymous staff messages                          |   ✅    |      ❌       |      ❌       |
| Snippets (reusable quick responses)               |   ✅    |      ❌       |      ❌       |
| Customizable bot messages (welcome, close, etc.)  |   ✅    |      ✅       |      ✅       |
| Keep the thread to the asker & staff only         |   ❌    |      ➖       |      ✅       |
| View past tickets button                          |   ✅    |      ❌       |      ❌       |

## Ticket management

|                                          | Modmail | Ticket System | Forum Support |
| ---------------------------------------- | :-----: | :-----------: | :-----------: |
| Topics / categories                      |   ✅    |      ✅       |      ✅       |
| Claiming / assignment                    |   ✅    |      ✅       |      ✅       |
| Hand a claimed item back to the queue    |   ➖    |      ➖       |      ✅       |
| Hold / pause                             |   ✅    |      ✅       |      ❌       |
| Rename                                   |   ✅    |      ✅       |      ➖       |
| Additional members                       |   ✅    |      ✅       |      ➖       |
| Scheduled closing                        |   ✅    |      ✅       |      ❌       |
| Close requests (user/staff confirmation) |   ✅    |      ✅       |      ❌       |
| Close reasons (custom & predefined)      |   ✅    |      ❌       |      ❌       |
| One ticket per user limit                |   ✅    |      ✅       |      ❌       |
| Per-topic priority                       |   ❌    |      ❌       |      ✅       |
| Priority by member role                  |   ❌    |      ❌       |      ✅       |
| Close / "mark solved" button             |   ✅    |      ✅       |      ✅       |
| Apply a "solved" tag on close            |   ➖    |      ➖       |      ✅       |
| Archive on close                         |   ✅    |      ❌       |      ✅       |
| Reopen closed items                      |   ✅    |      ❌       |      ❌       |
| DM confirmation on close                 |   ✅    |      ✅       |      ✅       |
| Attach transcript to close DM            |   ✅    |      ✅       |      ✅       |

## Automation

|                                       | Modmail | Ticket System | Forum Support |
| ------------------------------------- | :-----: | :-----------: | :-----------: |
| Auto-close on inactivity              |   ✅    |      ✅       |      ✅       |
| Auto-close when user leaves server    |   ✅    |      ✅       |      ❌       |
| Inactivity warning before auto-close  |   ✅    |      ✅       |      ✅       |
| Team member inactivity reminders      |   ✅    |      ✅       |      ✅       |
| Unassigned / unclaimed reminders      |   ✅    |      ✅       |      ✅       |
| Only remind inside opening hours      |   ✅    |      ✅       |      ✅       |
| Opening hours                         |   ✅    |      ✅       |      ✅       |
| Closed-hours notice to the member     |   ✅    |      ➖       |      ✅       |
| Team notification on new items        |   ➖    |      ✅       |      ✅       |
| Built-in AI first answer / deflection |   ❌    |      ❌       |      ✅       |
| Holiday detection & custom holidays   |   ✅    |      ✅       |      ✅       |

## Feedback, analytics & monitoring

|                                          | Modmail | Ticket System | Forum Support |
| ---------------------------------------- | :-----: | :-----------: | :-----------: |
| Support feedback / star ratings          |   ✅    |      ✅       |      ✅       |
| Custom feedback questions                |   ✅    |      ✅       |      ✅       |
| Anonymous feedback                       |   ✅    |      ✅       |      ✅       |
| Reviews visible in the dashboard         |   ✅    |      ✅       |      ✅       |
| Analytics dashboard                      |   ✅    |      ✅       |      ✅       |
| Analytics slash command                  |   ✅    |      ✅       |      ✅       |
| Statistics channels                      |   ✅    |      ✅       |      ❌       |
| Ticket utilization (capacity monitoring) |   ✅    |      ✅       |      ✅       |
| Estimated wait time                      |   ✅    |      ✅       |      ✅       |
| AI summaries                             |   ✅    |      ✅       |      ✅       |

## Other features

|                                      | Modmail | Ticket System | Forum Support |
| ------------------------------------ | :-----: | :-----------: | :-----------: |
| Custom forms / modal dialogs         |   ✅    |      ✅       |      ❌       |
| Blocklist (with duration & reason)   |   ✅    |      ✅       |      ✅       |
| modmail.net transcript integration   |   ✅    |      ✅       |      ✅       |
| Per-item log channel                 |   ➖    |      ➖       |      ✅       |
| Custom bot branding (footer & image) |   ✅    |      ✅       |      ✅       |
| Maintenance mode                     |   ✅    |      ✅       |      ✅       |
| Multiple channels / surfaces         |   ➖    |      ➖       |      ✅       |
| Non-server-member support            |   ✅    |      ❌       |      ❌       |
