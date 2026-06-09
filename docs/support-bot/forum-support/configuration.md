---
sidebar_position: 2
title: Configuration
description: Set up Forum Support step by step - forum channels, the staff queue, AI auto-answers, SLAs and reminders, wait-time estimates, messages, topics, feedback, and the log channel and close DM.
---

# Forum Support Configuration

This page walks through every Forum Support setting in plain language. You'll find them all under **Forum Support** in your [Support Bot dashboard](https://scnx.app/glink?page=support-system/manage). You don't have to set up everything at once - the only things you truly need to get started are a [forum channel](#forum-channels) and at least one [staff member role](#main).

:::tip No code required
Everything here is configured with toggles and dropdowns in the dashboard. You never edit files or write code.
:::

## Before you start {#before-you-start}

You'll need:

- A **public forum channel** in your Discord server (Discord's "Forum" channel type). This is where members will post.
- A **text channel** for the staff queue panel (where your team claims threads).
- At least one **role** that identifies your support team.

If you don't have a forum channel yet, create one in Discord first (**Create Channel → Forum**), then come back to the dashboard.

## Configuration page {#main}

The main **Configuration** page holds your overall settings. The most important ones:

| Setting                             | What it does                                                                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Enable Forum Support**            | Turns the whole system on or off. While off, the bot ignores your forum channels and the `/forum` commands are hidden.                                                    |
| **Maintenance mode**                | Temporarily pauses handling of new threads without fully disabling the system.                                                                                            |
| **Staff queue panel channel**       | The text channel where the live queue panel is posted. Your team claims and picks up threads from here.                                                                  |
| **Staff member roles**              | Anyone with one of these roles is treated as support staff - they can claim threads, use the buttons, and run the `/forum` commands.                                      |
| **Only send reminders during open hours** | When on, staff/inactivity reminders are only sent during your [opening hours](/docs/support-bot/general/opening-hours), so your team isn't pinged overnight.        |
| **Save transcripts**                | When on, a full transcript of each closed thread is saved to [modmail.net](/docs/support-bot/general/modmail-net) and can be attached to the log channel and close DM.   |

### AI auto-answers {#ai}

If AI is available for your server, you can let the bot try to answer a new thread before a human gets involved. The member is then asked whether the answer helped - "yes" closes the thread, "no" hands it to your team. This is a great way to deflect common, repeat questions.

| Setting               | What it does                                                                            |
| --------------------- | -------------------------------------------------------------------------------------- |
| **Enable AI answers** | Lets the bot post an AI first response on new threads.                                  |
| **AI summary on claim** | When a staff member claims a thread, the bot DMs them a short AI summary of the conversation so far, so they can catch up instantly. |

:::info AI usage
AI answers and summaries use your server's AI Coins. The AI section only appears when AI is available for your server.
:::

### Queue & SLA {#queue}

Keep threads moving and close out the ones that have gone quiet.

| Setting                          | What it does                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Reminder: unanswered (claimed)** | If a staff member claims a thread but doesn't reply within this time, they get a nudge. Example: `24h`.                  |
| **Reminder: unclaimed**          | If a new thread sits in the queue unclaimed for this long, your team is reminded. Example: `6h`.                          |
| **Auto-close inactive threads**  | When on, threads with no activity are closed automatically.                                                              |
| **Auto-close notice timeframe**  | How long of silence before the member gets a "this will close soon" warning. Example: `24h`.                              |
| **Auto-close timeframe**         | How long of silence before the thread is actually closed. Example: `48h`.                                                |
| **Team notification**            | Optionally ping your staff roles in a channel whenever a new thread opens. See [Team notification](#team-notification).   |

:::tip Time values
Time fields accept friendly values like `30m`, `6h`, or `48h` (minutes, hours, days).
:::

### Wait time (ETA) {#wait-time}

Show members an estimated wait time in their thread, so they know what to expect. The estimate adapts automatically based on how quickly your team has been resolving recent threads. Learn more in [Estimated wait time](/docs/support-bot/general/estimated-wait-time).

| Setting                  | What it does                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------- |
| **Enable wait-time message** | Posts an estimated wait time in new threads.                                       |
| **Refresh interval**     | How often (in minutes) the wait-time message is updated after it's first posted.      |
| **Cushion**              | Extra minutes added to the estimate so you under-promise and over-deliver.            |
| **Maximum hours**        | A cap so the estimate never shows an unhelpfully large number.                        |

### Messages {#messages}

Every message the bot posts is fully customizable with our message editor - text, embeds, colors and [placeholders](/docs/support-bot/general/global-placeholders) like the member's name. The forum messages you can edit include:

- **Welcome message** - posted and pinned when a thread opens.
- **Claimed message** - posted when a staff member claims the thread.
- **Handed-back message** - posted when a staff member returns a thread to the queue.
- **Wait-time message** - the estimated wait shown to the member.
- **AI "did this help?" replies** - the acknowledgements for the yes/no buttons.
- **Inactivity notice** - the warning sent before an inactive thread auto-closes.
- **Closed-hours notice** - shown when a member posts outside your opening hours (see below).
- **Feedback request** - the message asking the member to rate their experience.

### Closed-hours notice {#closed-notice}

Turn on **Send closed notice** to automatically let members know when they post outside your [opening hours](/docs/support-bot/general/opening-hours). The message can include your opening hours so people know when to expect a reply. Your team still sees the thread - this just sets expectations.

### Blocklist {#blocklist}

Members on your bot's blocklist can be stopped from using Forum Support.

| Setting                       | What it does                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| **Close blocked threads**     | When a blocked member opens a thread, automatically close it.                           |
| **Blocklist notice message**  | The message shown to a blocked member before their thread is closed.                    |

### Keep threads to the asker & staff only {#thread-writing}

By default anyone can comment in a public thread. If you'd rather keep each thread focused on the person who opened it, turn on **Only the original poster and staff can write**. Other members' messages are then removed automatically.

| Setting                            | What it does                                                                                                                |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Only OP and staff can write**    | Removes messages from anyone who isn't the original poster or a staff member, keeping the thread clean and on-topic.        |
| **Tell the member why**            | When on, the bot DMs the member whose message was removed, explaining they should open their own thread for help.          |
| **Removed-message notice**         | The DM text sent to that member.                                                                                            |

## Forum Channels page {#forum-channels}

The [Forum Channels](https://scnx.app/glink?page=support-system/forum-support/channels) page is where you add the forum channels the bot should manage. Each forum channel can be customized on its own, so you can run several support forums with different rules.

For **each** forum channel you can set:

| Setting                          | What it does                                                                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Forum channel**                | The Discord forum channel to manage.                                                                                                     |
| **Welcome message (override)**   | A welcome message just for this channel (otherwise the global one is used).                                                              |
| **Closed message (override)**    | A message posted in the thread when it's closed.                                                                                         |
| **Log channel (override)**       | Send this channel's close summaries to a specific log channel instead of the [default](#log-channel).                                    |
| **Close DM message (override)**  | A custom [close DM](#close-dm) message for this channel.                                                                                 |
| **Solved tag**                   | A forum tag automatically applied to threads when they're marked solved.                                                                 |
| **Lock until claimed**           | Locks a new thread so the member can't add more until a staff member claims it. Claiming unlocks it automatically.                       |
| **Lock on close**                | Locks the thread when it's closed.                                                                                                       |
| **Only OP and staff can write**  | Same as the global option, but just for this channel.                                                                                    |
| **Staff member roles (override)**| Use different staff roles for this channel.                                                                                              |
| **Priority** ([details](#priority)) | Treat threads as high-priority based on the asker's roles or a chosen forum tag, with an optional priority welcome message.            |

### Default log channel {#log-channel}

At the top of the Forum Channels page you can pick a **default log channel**. When a thread closes, the bot posts a tidy summary there - who asked, who handled it, how long it took, the close reason, message count, and more - plus the full transcript as a file (when [transcripts](#main) are on). Each forum channel can override this with its own log channel.

### Priority threads {#priority}

Give certain threads VIP treatment - priority threads are sorted ahead of everyone else in the staff queue. There are two ways to make a thread priority:

- **By topic** - mark a [topic](/docs/support-bot/forum-support/topics) as priority, and any thread carrying that topic's forum tag jumps the queue.
- **Per forum channel** - in a forum channel's **Priority** section, treat a thread as priority when the person who opened it has one of your chosen **priority roles**, or when the thread carries a chosen **priority tag**. You can set a dedicated **priority welcome message** for these threads, and the priority tag is applied automatically so they're easy to filter.

Great for paying customers, partners, or urgent categories.

## Topics & Feedback {#topics-and-feedback}

Two areas have their own pages:

- **[Topics](/docs/support-bot/forum-support/topics)** - map your forum tags to per-tag welcome messages and priority.
- **[Support Feedback](/docs/support-bot/forum-support/support-feedback)** - ask members to rate their experience after a thread closes, and view the reviews in your dashboard.

## Team notification {#team-notification}

Want your team pinged the moment a thread opens? Turn on **Team notification** (in [Queue & SLA](#queue)), choose a channel, and the bot will post there - mentioning your staff roles - with a link to the new thread every time one is created. The message is fully customizable.

## Close DM {#close-dm}

Turn on **Message the asker when their thread closes** (in [Messages](#messages)) and the bot will DM the member once their thread is resolved, with a link back to the thread and - when [transcripts](#main) are enabled - the conversation log attached. The message is customizable, and each forum channel can use its own version.

:::caution Close reason in DMs
If your close DM uses the close-reason placeholder, remember the close reason is the internal note your staff entered - only include it if your close reasons are safe for members to read.
:::
