---
sidebar_position: 1
title: Forum Support
description: Turn a public Discord forum channel into a structured support queue - members open threads, AI can auto-answer, and your team claims and resolves them with SLAs, transcripts and analytics.
---

# Forum Support

<EarlyAccessBanner
    feature="Forum Support"
    description="Forum Support is an early-access preview that is still rolling out gradually. While in preview it is enabled for a limited set of servers so we can gather feedback before a wider release. Your SCNX plan is separate and unaffected." />

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: false}} additionalDetails={{
UNLIMITED: "Rolling out gradually during the early-access preview.",
PROFESSIONAL: "Rolling out gradually during the early-access preview."}} />

## What is Forum Support? {#what-is-it}

Forum Support turns a **public Discord forum channel** into a structured support queue. Instead of DMing the bot ([Modmail](/docs/support-bot/modmail/intro)) or opening a private channel ([Ticket System](/docs/support-bot/ticket-system/intro)), members simply create a post (thread) in your forum channel - in the open, where everyone can read along and benefit from the answer.

For each new thread the bot creates a **ticket**, greets the author, can let an AI answer common questions first, and places the thread into a **shared staff queue**. Your team claims threads, replies in the open, and marks them solved. SLAs auto-close inactive threads, transcripts are saved, and everything feeds into [analytics](/docs/support-bot/general/analytics).

Forum Support runs as a fourth system alongside [Modmail](/docs/support-bot/modmail/intro), the [Ticket System](/docs/support-bot/ticket-system/intro) and [Voice Support](/docs/support-bot/voice-support/intro) - enable any combination of the four.

:::info Public by design
Forum threads are visible to your whole server. Forum Support is built for **public, self-serve support** where answers help everyone. For private one-to-one support, use [Modmail](/docs/support-bot/modmail/intro) or the [Ticket System](/docs/support-bot/ticket-system/intro) instead.
:::

## How the member flow works {#member-flow}

1. A member creates a post in your configured **forum channel**.
2. The bot opens a **ticket**, posts a pinned welcome message, and (if enabled) lets the AI take a first pass at answering.
3. If the AI answers, the member is asked whether that solved their problem. **Yes** closes the thread; **No** hands it to your team.
4. The thread enters the **staff queue**. The member can keep replying; the bot tracks who's waiting on whom.
5. A staff member claims the thread and helps in the open. When it's resolved, the thread is marked **solved**, tagged, and closed.
6. The member can optionally be asked for [feedback](/docs/support-bot/forum-support/support-feedback) and sent a [closing DM](/docs/support-bot/forum-support/configuration#close-dm) with a link and transcript.

Threads carrying a configured [priority](/docs/support-bot/forum-support/configuration#priority) tag jump ahead in the queue.

## How the staff flow works {#staff-flow}

1. New threads appear in the **staff queue panel** (a live embed in a channel of your choice) and can optionally trigger a [team notification](/docs/support-bot/forum-support/configuration#team-notification).
2. A staff member claims a thread - from the panel's **Claim** button, **Assign me** (claim the next unclaimed thread), or [`/forum next`](/docs/support-bot/forum-support/commands).
3. Claiming unlocks the thread (if it was locked until claimed) and assigns it to that staff member. An optional AI summary of the conversation so far is DMed to them.
4. Staff reply in the thread. If they need to step away, **Step away** / [`/forum step-away`](/docs/support-bot/forum-support/commands) returns the thread to the queue for someone else.
5. When resolved, staff (or the member, via the **Mark as solved** button) closes the thread with [`/forum close`](/docs/support-bot/forum-support/commands) or the solve button.

## Where a thread can be {#states}

At any moment, the bot knows whether a thread is waiting on your team or on the member. This is what drives the reminders, the auto-close timer and how threads are sorted in the staff queue:

| Status              | What it means                                                       |
| ------------------- | ------------------------------------------------------------------ |
| **New**             | Just opened - nobody has claimed or answered it yet.               |
| **Waiting on team** | The member is waiting for your team to reply.                      |
| **Waiting on user** | Your team replied and is now waiting for the member.              |
| **Handed back**     | Someone claimed it, then returned it to the queue for another team member. |
| **Closed**          | Resolved and closed.                                               |

## Main components {#components}

| Component               | Purpose                                                                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Forum channel(s)**    | One or more Discord forum channels the bot manages. Each can have its own welcome/close messages, solved tag, locking, topics and overrides.            |
| **Staff queue panel**   | A live embed posted in a channel of your choice showing unclaimed, in-progress and handed-back threads, with **Claim** / **Assign me** buttons.         |
| **Topics (tags)**       | Map forum tags to topics for per-topic welcome messages and priority. See [Topics](/docs/support-bot/forum-support/topics). |
| **AI auto-answer**      | Optional first-response AI that tries to resolve the thread before a human is involved, with "did this help?" deflect buttons.                          |
| **Log channel**         | Optional channel that receives a close summary plus a transcript file for every closed thread. Can be set globally or per forum channel.                |

## Key features {#features}

- **Shared staff queue** - claim threads, hand them back, or pull the next one with one click or `/forum next`.
- **AI deflection** - let AI answer common questions first and only escalate to staff when needed.
- **Tag-based topics** - customize per forum tag with per-topic welcome messages and priority.
- **Priority queue** - bump threads to the front based on the asker's roles, a forum tag, or a priority topic.
- **SLA auto-close & reminders** - automatically nudge or close inactive threads, optionally only during [opening hours](/docs/support-bot/general/opening-hours).
- **Volume-aware ETA** - post an adaptive estimated wait time based on recent resolution times.
- **Write restriction** - optionally keep threads to the original poster and staff only, deleting other members' messages (with an optional explanation DM).
- **Closed-hours notice** - automatically tell members when they post outside your [opening hours](/docs/support-bot/general/opening-hours).
- **Transcripts** - save a full transcript of every thread to [modmail.net](https://modmail.net).
- **Log channel & close DM** - post a close summary + transcript to a staff channel, and DM the member when their thread closes (both customizable, both settable per forum channel).
- **Team notifications** - ping your staff roles in a channel whenever a new thread opens.
- **Feedback** - ask members to rate their experience after a thread closes.
- **Analytics** - thread volume, response and resolution times, AI deflection rate, ratings and per-staff stats, surfaced in [analytics](/docs/support-bot/general/analytics) and the dashboard.

## Getting started {#getting-started}

1. Open **Forum Support** in your [Support Bot dashboard](https://scnx.app/glink?page=support-system/manage).
2. Create (or pick) a **public forum channel** in Discord for your support.
3. Add it on the [Forum Channels](https://scnx.app/glink?page=support-system/forum-support/channels) page and follow the [configuration guide](/docs/support-bot/forum-support/configuration) - set a staff queue panel channel and at least one staff member role.
4. Flip the **Enable Forum Support** toggle.
5. Use the [`/forum` commands](/docs/support-bot/forum-support/commands) and the panel buttons to work the queue.
