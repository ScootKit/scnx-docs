---
sidebar_position: 3
title: Commands
description: Discord /voice slash command reference - pull the next user, end a call, add notes, view history, force-close, and manage the voice support blocklist.
---

# Voice Support Commands

All voice support management happens under the `/voice` slash command. Commands are only visible if voice support is [enabled](/docs/support-bot/voice-support/configuration#main-configuration-configuration) and the server owner holds the [ScootKit Membership Early Access](https://membership.scootkit.com) perk.

<SlashCommandExplanation />

| Command                                                                 | Description                                                                                                                                                                                               |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/voice queue`                                                          | Shows the current queue (priority users first, then normal users) in an ephemeral reply.                                                                                                                  |
| `/voice next`                                                           | Pulls the next user from the queue into your current support voice channel. You must be sitting in a support channel (not the queue channel itself).                                                      |
| `/voice end [reason:<Text>]`                                            | Ends your active call. Optional free-form reason is saved on the ticket and shown in the user's history.                                                                                                  |
| `/voice note text:<Text>`                                               | Adds a private note to your active call. Notes are visible to other staff via `/voice history` and in the call [thread](/docs/support-bot/voice-support/configuration#thread-mode) (if enabled).          |
| `/voice history user:<User>`                                            | Shows the voice-support history for a user: up to the 10 most recent sessions with state (completed, abandoned, in-progress), duration, the assigned staff member, and the most recent notes per session. |
| `/voice close user:<User> [reason:<Text>]`                              | Force-closes another staff member's active call with the given user. Useful to recover from a staff member who disconnected without ending their call cleanly.                                            |
| `/voice blacklist add user:<User> [reason:<Text>] [expires:<ISO date>]` | Adds a user to the voice support blocklist. Blocked users cannot queue. Optional reason and expiration date (ISO format, e.g. `2026-06-01`). Without an expiration, the block is permanent.               |
| `/voice blacklist remove user:<User>`                                   | Removes a user from the voice support blocklist.                                                                                                                                                          |

## In-channel buttons {#buttons}

In addition to the slash commands, voice support posts buttons into two places:

**In the [dashboard channel](/docs/support-bot/voice-support/configuration#dashboard-channel):**

| Button             | What it does                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Pull Next User     | Same as `/voice next` - pulls the next queued user into your support channel. Disabled when the queue is empty or voice support is offline. |
| View Queue Details | Shows the current queue ordered by tier, with wait times, in an ephemeral reply.                                                            |

**In your support channel's built-in text area (posted when you pull a user):**

| Button            | What it does                                                                                                               |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| End Call          | Ends the current call. If [debrief](/docs/support-bot/voice-support/configuration#debrief) is enabled, a modal opens next. |
| Add Note          | Opens a modal to add a note to the active call. Same as `/voice note`.                                                     |
| View User History | Same as `/voice history` - shows prior calls and notes for the user you're on a call with.                                 |

## The blocklist {#blocklist}

Voice support has a **dedicated blocklist** separate from the main support bot [blocklist](/docs/support-bot/general/bot-configuration#main-configuration-configuration). Being on the voice blocklist only blocks voice support - the user can still open modmail or ticket-system tickets (unless they're also on the main blocklist).

When a blocked user joins the queue channel, they receive a DM explaining they're blocked (with the configured reason, if any) and are disconnected. Expired blocks are automatically dropped.
