---
sidebar_position: 5
title: Staff Queue & Claiming
description: How your team picks up Forum Support threads - the live queue panel, claiming, assign-me and step-away, lock-until-claimed, and AI summaries on claim.
---

# Staff Queue & Claiming

Forum Support gives your whole team one shared queue. Threads are claimed by a single staff member so two people never work the same thread, and anyone can hand a thread back if they get stuck.

## Features {#features}

- A live **queue panel** showing every open thread, grouped by status.
- One-click **claim** and **assign me** (grab the next thread automatically).
- **Step away** to return a thread to the queue for someone else.
- Optional **lock until claimed** so a thread waits quietly until a human picks it up.
- Optional **AI summary on claim** - the bot DMs the claiming staff member a recap so they catch up instantly.

## The queue panel {#panel}

The panel is a live message the bot keeps up to date in your [staff queue panel channel](/docs/support-bot/forum-support/configuration#main). It groups threads into:

| Group           | Meaning                                                        |
| --------------- | -------------------------------------------------------------- |
| **Unclaimed**   | Waiting for someone to pick them up.                           |
| **In progress** | Currently claimed and being worked on.                         |
| **Handed back** | Were claimed, then returned to the queue and need a new owner. |

Priority threads (see [Topics](/docs/support-bot/forum-support/topics) and per-channel [Priority](/docs/support-bot/forum-support/configuration#priority)) appear first within each group.

## Picking up a thread {#claim}

There are three ways to claim, all equivalent - use whatever's handiest:

- **Claim** button on a specific thread in the panel.
- **Assign me** button (or [`/forum next`](/docs/support-bot/forum-support/commands)) - grabs the next unclaimed thread automatically.
- Claiming **unlocks** the thread if it was [locked until claimed](#lock-until-claimed), so the member can reply again, and posts a "claimed" message.

If you turned on **AI summary on claim**, the bot DMs you a short recap of the conversation so far the moment you claim - handy for long threads.

Use [`/forum my-assignments`](/docs/support-bot/forum-support/commands) (or the **My assignments** button) to see what's currently on your plate.

## Handing a thread back {#step-away}

Can't finish a thread? Click **Step away** (or run [`/forum step-away`](/docs/support-bot/forum-support/commands)). The thread is unassigned, returned to the queue under **Handed back**, and re-locked if you use lock-until-claimed - so the next available team member can take over cleanly.

## Lock until claimed {#lock-until-claimed}

Enable **Lock until claimed** on a [forum channel](/docs/support-bot/forum-support/configuration#forum-channels) to lock new threads until a staff member picks them up. The member can still read the welcome (and any AI answer), but can't pile on more messages before someone is assigned. Claiming unlocks it automatically.

## Commands {#commands}

The buttons above all have slash-command equivalents - see the full [Commands & Buttons](/docs/support-bot/forum-support/commands) reference.
