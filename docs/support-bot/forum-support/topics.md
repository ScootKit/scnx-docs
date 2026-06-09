---
sidebar_position: 4
title: Topics
description: Map your forum's tags to topics in Forum Support - give each tag its own welcome message and mark it as priority so urgent threads jump the queue.
---

# Forum Topics

Topics let you turn your forum channel's **tags** into smart behaviors. A single forum channel can then handle different kinds of requests appropriately - for example a "Billing" tag that gets its own welcome and jumps the queue, while a "General" tag behaves normally.

## Features {#features}

- Give each forum tag its own **welcome message**.
- Mark a tag as **priority** so threads with that tag are handled first.
- Run several request types through one forum channel without extra setup.

## Setup {#setup}

1. Add the **tags** you want in Discord, on the forum channel itself (**Edit Channel → Tags**).
2. Open the [Topics](https://scnx.app/glink?page=support-system/forum-support/topics) page in your dashboard (you can also reach it from each channel on the [Forum Channels](https://scnx.app/glink?page=support-system/forum-support/channels) page).
3. Map a tag to a topic and [configure](#configuration) it.

## Configuration {#configuration}

For each topic you can set:

| Setting              | What it does                                                                                                            |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Tag**              | The forum tag this topic applies to. Threads opened with this tag use the topic's settings.                            |
| **Welcome message**  | A custom welcome posted (and pinned) when a thread opens with this tag, instead of the channel's default welcome.      |
| **Priority**         | When on, threads with this tag are sorted ahead of everyone else in the [staff queue](/docs/support-bot/forum-support/claiming). |

:::tip Two ways to set priority
Marking a topic as priority is the simplest way to prioritize a whole category. If you'd rather prioritize threads by **who** opened them (for example a "Customer" role), use the per-channel [Priority](/docs/support-bot/forum-support/configuration#priority) settings instead - both feed the same queue.
:::
