---
sidebar_position: 2
title: Feature Comparison
description: Compare the Modmail and Ticket System features of the SCNX Discord Support Bot to find the best fit for your server.
---

# Feature Comparison

Use this comparison to decide which system is right for your server - or use both at the same time. Both systems can be enabled simultaneously and share the same bot, blocklist, forms, opening hours, and analytics.

:::info Voice Support
A third system, [Voice Support](/docs/support-bot/voice-support/intro), is available as an early-access preview for holders of the [ScootKit Membership](https://membership.scootkit.com) Early Access perk. It's a live-voice queue (users join a voice channel, staff pull them into private support channels one at a time) rather than a text-based ticket flow, so it sits outside this comparison table. See the [Voice Support introduction](/docs/support-bot/voice-support/intro) for details.
:::

:::info AI FAQ
[AI FAQ](/docs/support-bot/ai-faq/intro) is an early-access feature that layers across both Modmail and the Ticket System. It uses a staff-authored knowledge base to answer member questions in channels and to deflect easy questions before a ticket is opened. Because it cuts across both subsystems rather than competing with them, it isn't part of this comparison table - see the [AI FAQ introduction](/docs/support-bot/ai-faq/intro) for details.
:::

## Ticket creation

|                                                | Modmail | Ticket System |
| ---------------------------------------------- | :-----: | :-----------: |
| Create tickets via DM                          |   ✅    |      ❌       |
| Create tickets in a channel (buttons/dropdown) |   ✅    |      ✅       |
| Use buttons for ticket creation                |   ❌    |      ✅       |
| Use dropdown menus for ticket creation         |   ✅    |      ✅       |
| Open tickets via slash command                 |   ✅    |      ✅       |
| Staff can open tickets on behalf of users      |   ✅    |      ✅       |
| Staff-specific welcome message                 |   ✅    |      ❌       |

## Messaging & communication

|                                                            | Modmail | Ticket System |
| ---------------------------------------------------------- | :-----: | :-----------: |
| Messages relayed via DM                                    |   ✅    |      ❌       |
| Messages sent directly in channel                          |   ❌    |      ✅       |
| Anonymous messages (hide staff identity)                   |   ✅    |      ❌       |
| Snippets (reusable quick responses)                        |   ✅    |      ❌       |
| Typing relay (show typing indicators)                      |   ✅    |      ❌       |
| Message received reaction                                  |   ✅    |      ❌       |
| Staff can edit/delete each other's messages                |   ✅    |      ❌       |
| Custom message formats (staff-to-user, user-to-team, etc.) |   ✅    |      ❌       |
| View past tickets button                                   |   ✅    |      ❌       |

## Ticket management

|                                           |      Modmail      | Ticket System |
| ----------------------------------------- | :---------------: | :-----------: |
| Ticket topics (categories)                |        ✅         |      ✅       |
| Ticket claiming / assignment              |        ✅         |      ✅       |
| Ticket hold (pause)                       |        ✅         |      ✅       |
| Ticket rename                             |        ✅         |      ✅       |
| Additional ticket members                 |        ✅         |      ✅       |
| Scheduled closing                         |        ✅         |      ✅       |
| Close requests (user/staff confirmation)  |        ✅         |      ✅       |
| Close reasons (custom & predefined)       |        ✅         |      ❌       |
| Silent close (no notification)            |        ✅         |      ❌       |
| One ticket per user limit (global)        |        ✅         |      ✅       |
| Per-topic ticket limits                   |        ❌         |      ✅       |
| Per-topic button color                    |        ❌         |      ✅       |
| Per-topic required roles                  |        ✅         |      ✅       |
| FAQ topics (info-only, no ticket created) |        ✅         |      ✅       |
| Close button in ticket message            |        ✅         |      ✅       |
| Transfer button in ticket message         |        ❌         |      ✅       |
| Rename button in ticket message           |        ✅         |      ✅       |
| Add-user button in ticket message         |        ✅         |      ✅       |
| Delete ticket after close                 | ✅ (configurable) |  ✅ (always)  |
| Archive closed tickets to category        |        ✅         |      ❌       |
| Reopen closed tickets                     |        ✅         |      ❌       |
| DM confirmation on close                  |        ✅         |      ✅       |
| Attach transcript to close DM             |        ✅         |      ✅       |

## Automation

|                                          | Modmail | Ticket System |
| ---------------------------------------- | :-----: | :-----------: |
| Auto-close on user inactivity            |   ✅    |      ✅       |
| Auto-close when user leaves server       |   ✅    |      ✅       |
| Inactivity warning before auto-close     |   ✅    |      ✅       |
| Team member inactivity reminders         |   ✅    |      ✅       |
| Unassigned ticket reminders              |   ✅    |      ✅       |
| Push reminders inside opening hours      |   ✅    |      ✅       |
| Opening hours                            |   ✅    |      ✅       |
| Disable message processing outside hours |   ✅    |      ❌       |
| Holiday detection (automatic)            |   ✅    |      ✅       |
| Custom holidays                          |   ✅    |      ✅       |

## Feedback, analytics & monitoring

|                                          | Modmail | Ticket System |
| ---------------------------------------- | :-----: | :-----------: |
| Support feedback / star ratings          |   ✅    |      ✅       |
| Custom feedback questions                |   ✅    |      ✅       |
| Anonymous feedback                       |   ✅    |      ✅       |
| Analytics dashboard                      |   ✅    |      ✅       |
| Analytics slash command                  |   ✅    |      ✅       |
| Statistics channels                      |   ✅    |      ✅       |
| Ticket utilization (capacity monitoring) |   ✅    |      ✅       |
| Estimated wait time                      |   ✅    |      ✅       |
| AI ticket summaries                      |   ✅    |      ✅       |

## Other features

|                                      | Modmail | Ticket System |
| ------------------------------------ | :-----: | :-----------: |
| Custom forms / modal dialogs         |   ✅    |      ✅       |
| Force form submission before ticket  |   ✅    |      ✅       |
| Lock channel until form submitted    |   ❌    |      ✅       |
| Blocklist (with duration & reason)   |   ✅    |      ✅       |
| modmail.net transcript integration   |   ✅    |      ✅       |
| Custom bot branding (footer & image) |   ✅    |      ✅       |
| Maintenance mode                     |   ✅    |      ✅       |
| /modmail command prefix              |   ✅    |      ❌       |
| Non-server-member ticket support     |   ✅    |      ❌       |
