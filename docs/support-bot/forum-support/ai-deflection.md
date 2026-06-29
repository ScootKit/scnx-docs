---
sidebar_position: 6
title: AI Auto-Answer
description: Let AI answer common Forum Support questions before a human is involved - with "did this help?" buttons that close solved threads and escalate the rest to your team.
---

# AI Auto-Answer

Forum Support can let AI take a first pass at every new thread, answering common, repeat questions instantly. The member then tells the bot whether it helped - solved threads close themselves, and anything the AI couldn't handle is handed straight to your team. This is one of the biggest time-savers in a public forum, where the same questions come up again and again.

## Features {#features}

- An AI **first response** posted automatically on new threads.
- **"Did this help?"** buttons - the member confirms or escalates.
- Optional **AI summary on claim** - a recap DMed to staff when they pick a thread up (see [Claiming](/docs/support-bot/forum-support/claiming#claim)).

## How it works {#how-it-works}

1. A member opens a thread.
2. The AI posts an answer, followed by two buttons.
3. The member taps one:
   - **Yes, solved** - the thread is marked solved and closed.
   - **No, I need a human** - the thread is handed to your [staff queue](/docs/support-bot/forum-support/claiming).
4. Only the person who opened the thread can use these buttons.

## Turning it on {#setup}

AI auto-answer lives in the **AI** section of the [Configuration](/docs/support-bot/forum-support/configuration#ai) page. The section only appears when AI is available for your server.

| Setting                | What it does                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Enable AI answers**  | Posts an AI first response on new threads, with the yes/no buttons.                                                       |
| **AI summary on claim**| DMs the claiming staff member a short summary of the conversation so far.                                                 |

You can customize the acknowledgement messages for the **Yes** and **No** buttons in the [Messages](/docs/support-bot/forum-support/configuration#messages) section.

:::info AI usage
AI answers and summaries use your server's AI Coins, the same as other SCNX AI features.
:::
