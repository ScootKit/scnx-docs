---
sidebar_position: 2
title: Starter Guide
description: Set up Forum Support from scratch - create a forum channel, add it to the bot, set your staff queue, and learn how members and staff use it day to day.
---

# Starter Guide (Forum Support 101)

This guide takes you from nothing to a working public support forum in a few minutes. Everything is done with toggles and dropdowns in the dashboard - no code.

<EarlyAccessBanner
    feature="Forum Support"
    description="Forum Support is an early-access preview that is still rolling out gradually. Your SCNX plan is separate and unaffected." />

## 1. Create your forum channel {#create-channel}

In Discord, create a **Forum** channel (**Create Channel → Forum**) where members will post their questions. This is a normal public Discord forum - everyone can read the threads, which is exactly the point: answers stay visible and reusable.

:::tip
Add a few **tags** to your forum channel in Discord (e.g. "Question", "Bug", "Billing"). You can later turn these into [topics](/docs/support-bot/forum-support/topics) for routing and priority.
:::

## 2. Add the channel to Forum Support {#add-channel}

Open **Forum Support** in your [Support Bot dashboard](https://scnx.app/glink?page=support-system/manage) and go to the [Forum Channels](https://scnx.app/glink?page=support-system/forum-support/channels) page. Click **Add forum channel** and pick the forum channel you just created. You can add more than one channel and configure each separately.

## 3. Set up your staff queue {#set-up-queue}

On the [Configuration](/docs/support-bot/forum-support/configuration) page set:

- A **staff queue panel channel** - a text channel where your team picks up threads.
- One or more **staff member roles** - who's allowed to claim and answer.

That's the minimum. Everything else (AI answers, auto-close, wait-time estimates, feedback, log channel, close DM) is optional and covered in the [configuration guide](/docs/support-bot/forum-support/configuration).

## 4. Turn it on {#enable}

Flip **Enable Forum Support**. From now on, every new thread in your forum channel becomes a support ticket.

## 5. What members see {#member-experience}

When a member posts a thread:

1. The bot greets them with a pinned welcome message.
2. If you enabled [AI answers](/docs/support-bot/forum-support/ai-deflection), the AI tries to help first - the member can tap **Yes, solved** or **No, I need a human**.
3. Otherwise the thread waits in your [staff queue](/docs/support-bot/forum-support/claiming) for your team.
4. They can keep replying in the thread, and they'll see updates (like an estimated wait time) along the way.

## 6. How your team works the queue {#staff-workflow}

Your team picks up and resolves threads from the [staff queue panel](/docs/support-bot/forum-support/claiming) or with the [`/forum` commands](/docs/support-bot/forum-support/commands):

1. **Claim** a thread (or **Assign me** / `/forum next` to grab the next one).
2. Help the member in the open thread.
3. Need to drop it? **Step away** / `/forum step-away` returns it to the queue.
4. Done? **Mark as solved** or `/forum close`.

## 7. After a thread closes {#after-close}

Depending on your settings, the bot can:

- ask the member for [feedback](/docs/support-bot/forum-support/support-feedback),
- DM the member a [closing message](/docs/support-bot/forum-support/configuration#close-dm) with a link and transcript, and
- post a summary + transcript to your [log channel](/docs/support-bot/forum-support/configuration#log-channel).

That's it - you're running public support. Next, explore [Topics](/docs/support-bot/forum-support/topics), [Claiming](/docs/support-bot/forum-support/claiming), and the full [Configuration](/docs/support-bot/forum-support/configuration).
