---
sidebar_position: 1
title: Voice Support
description: Offer live voice support on Discord - users queue by joining a voice channel, staff pull them into private support channels one at a time.
---

# Voice Support

<EarlyAccessBanner
    feature="Voice Support"
    description="Voice support is an early-access preview - live for servers whose owner has the ScootKit Membership Early Access perk. The feature is still evolving based on feedback, and Membership is what unlocks it. Your SCNX plan is separate and unchanged." />

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: false}} additionalDetails={{
UNLIMITED: "Requires the ScootKit Membership Early Access perk while in preview.",
PROFESSIONAL: "Requires the ScootKit Membership Early Access perk while in preview."}} />

## What is Voice Support? {#what-is-it}

Voice support lets your users talk to your staff over voice instead of (or in addition to) text tickets. Users join a single **queue voice channel**; staff sit in their own **support channels** and pull users out of the queue one at a time. The bot manages the queue, keeps users informed via DMs, plays waiting music, and optionally tracks each call with notes, a private thread, a staff debrief and user feedback.

Voice support runs as a third system alongside [Modmail](/docs/support-bot/modmail/intro) and the [Ticket System](/docs/support-bot/ticket-system/intro) - you can enable any combination of the three.

## How the user flow works {#user-flow}

1. A user joins the configured **queue voice channel**.
2. The bot opens a DM with them showing their position and an estimated wait time. The DM updates automatically as the queue moves.
3. When a staff member clicks **Pull Next User** (or runs `/voice next`), the bot moves the user into the staff member's support channel and edits the DM to "Connected".
4. When the call ends - staff clicks **End Call**, disconnects, or the user leaves - the bot disconnects the user, archives any thread, and optionally asks them for feedback.

Users with any of the configured [priority roles](/docs/support-bot/voice-support/configuration#priority-roles) jump ahead of regular users in the queue.

## How the staff flow works {#staff-flow}

1. A staff member joins any voice channel inside the configured **support category** (except the queue channel itself).
2. The bot recognizes them as available - if the state mode is `staff-presence`, this is also what opens voice support for users.
3. When a user is waiting, staff clicks **Pull Next User** on the [dashboard](/docs/support-bot/voice-support/configuration#dashboard-channel) or runs `/voice next` from their support channel. The user is moved in.
4. During the call, staff can add notes, view the user's prior voice-support history, or end the call - all from buttons posted into the voice channel's text chat.
5. When the call ends, staff optionally fills out a [debrief form](/docs/support-bot/voice-support/configuration#debrief) and the user is optionally sent a [feedback request](/docs/support-bot/voice-support/configuration#user-feedback).

## When voice support is "open" {#state-modes}

Voice support can be in one of two states: **open** (users can queue) or **offline** (users can't reach your team). Two state modes decide which it is:

| Mode             | When it's open                                                                                                                                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `staff-presence` | Whenever at least one staff member is sitting in a support channel. This is the default - when all staff leave voice, the queue closes automatically.                                                                                             |
| `opening-hours`  | During the [opening hours](/docs/support-bot/general/opening-hours) configured for your bot, regardless of whether staff are in voice. Combine with [staff summon](#staff-summon) to ping your team when users arrive but nobody's connected yet. |

While voice support is offline, you can optionally leave the channel unlocked and play [closed-state music](/docs/support-bot/voice-support/configuration#closed-music) so users can wait inside the channel until you reopen.

## Main components {#components}

| Component             | Purpose                                                                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Queue channel**     | The voice channel users join to queue up. Can live inside or outside the support category.                                                                                                                         |
| **Support category**  | A Discord category whose voice channels (except the queue channel) are treated as staff support channels. Users get pulled into these.                                                                             |
| **Dashboard channel** | A text channel where the bot posts a live status embed - open/offline, staff count, current queue, active calls, and a **Pull Next User** button.                                                                  |
| **Thread mode**       | Optional: when a staff member pulls a user, the bot creates a private thread under the dashboard channel with call metadata, prior history, and buttons. Notes, debriefs, and feedback are posted into the thread. |
| **Staff summon**      | Optional (opening-hours mode only): when users are waiting but no staff are connected, the bot posts a ping into a configured channel with the number of waiters and the first person in line.                     |

## Key features {#features}

- **Priority queue** - tier users with priority roles above regular users.
- **Per-user blocklist** - `/voice blacklist add` blocks a user from queuing, with an optional reason and expiration date.
- **Notes** - staff can write private notes on each call; they're shown to future staff who pick up the same user.
- **Call history** - view every prior voice session (completed or abandoned) for a user, with notes inline.
- **Waiting music** - loop a list of audio tracks in the queue channel while users wait. A separate closed-state track list plays when voice support is offline.
- **AI audio generation** - generate voiceover announcements and background music for your playlists directly from the dashboard, charged in AI Coins. See [AI Audio Generation](/docs/support-bot/voice-support/ai-audio).
- **Automatic channel rename** - optionally rename the queue channel based on open/closed state (e.g. `voice-support` ↔ `voice-support-closed`).
- **Lock on close** - optionally deny the `Connect` permission on the queue channel while voice support is offline.
- **Debrief form** - configurable modal that staff fills out at call end; answers logged to the thread and optionally a debrief channel.
- **User feedback** - optional star-rating DM sent to users after a call, with custom follow-up questions and an anonymity toggle.
- **Estimated wait time** - adaptive estimate based on a rolling window of recent calls (and, in `opening-hours` mode, a rolling "time to get staff online" average).

## Getting started {#getting-started}

1. Pick up the **Early Access** perk on [ScootKit Membership](https://membership.scootkit.com) - it unlocks voice support (and future preview features) across every server you manage.
2. Open **Voice Support** in your [Support Bot dashboard](https://scnx.app/glink?page=support-system/manage).
3. Follow the [configuration guide](/docs/support-bot/voice-support/configuration) - at minimum, you'll need a queue channel, a support category, a dashboard channel, and at least one staff role.
4. Flip the **Enable voice support** toggle.
5. Use the [`/voice` commands](/docs/support-bot/voice-support/commands) from any support channel to manage calls.
