---
sidebar_position: 8
title: Commands & Buttons
description: How your team works the Forum Support queue - the /forum slash commands and the buttons in the queue panel and in each thread.
---

# Forum Support Commands & Buttons

Your team works the queue in two ways: with the **buttons** the bot posts (in the queue panel and in each thread) and with the **`/forum` slash commands**. Everything does the same job - use whichever is handier.

Commands and staff buttons only work for members with one of your configured [staff member roles](/docs/support-bot/forum-support/configuration#main). The `/forum` commands are only visible while Forum Support is [enabled](/docs/support-bot/forum-support/configuration#main).

<SlashCommandExplanation />

## Slash commands {#commands}

| Command                 | What it does                                                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `/forum next`           | Claims the next available thread in the queue and assigns it to you - the quickest way to pick up work.                       |
| `/forum step-away`      | Hands the thread you're currently in back to the queue so another team member can take over. Use it when you can't continue. |
| `/forum my-assignments` | Lists the threads currently assigned to you, so you can keep track of what's on your plate.                                   |
| `/forum close`          | Closes the current thread (marks it solved, applies the solved tag if configured, and runs the close steps).                 |

## Buttons {#buttons}

### In the staff queue panel {#panel-buttons}

The queue panel lives in your [staff queue panel channel](/docs/support-bot/forum-support/configuration#main) and updates itself as the queue changes. It groups threads into **Unclaimed**, **In progress**, and **Handed back**.

| Button             | What it does                                                          |
| ------------------ | -------------------------------------------------------------------- |
| **Assign me**      | Claims the next unclaimed thread and assigns it to you.              |
| **Claim**          | Claims a specific thread.                                            |
| **My assignments** | Shows the threads currently assigned to you.                        |
| **Step away**      | Returns your current thread to the queue.                           |

### In a thread {#thread-buttons}

| Button             | Who sees it      | What it does                                                                                       |
| ------------------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| **Mark as solved** | Asker & staff    | Closes the thread as solved. The person who opened the thread can resolve it themselves once they're happy, and staff can close it any time. |
| **Yes, solved**    | Asker (AI flow)  | Shown after an AI answer - confirms it helped and closes the thread. Only the person who opened the thread can use it.                       |
| **No, I need a human** | Asker (AI flow) | Shown after an AI answer - hands the thread to your team. Only the person who opened the thread can use it.                                |

## A typical workflow {#workflow}

1. A new thread appears in the **queue panel** (and optionally pings your team).
2. A staff member clicks **Assign me** or runs `/forum next` to pick it up.
3. They help the member in the thread. If something comes up, **Step away** / `/forum step-away` returns it to the queue.
4. When it's resolved, anyone clicks **Mark as solved** or a staff member runs `/forum close`.
5. The thread is tagged solved and closed, the member can be asked for [feedback](/docs/support-bot/forum-support/support-feedback), and a summary + transcript can be posted to your [log channel](/docs/support-bot/forum-support/configuration#log-channel).

:::tip
Prefer to keep an eye on your own workload? `/forum my-assignments` (or the **My assignments** button) always shows exactly what's assigned to you.
:::
