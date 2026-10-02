---
sidebar_position: 2
title: Configuration
description: Configure the Discord voice support feature - state mode, queue and support channels, waiting music, priority roles, thread mode, debrief, feedback, and customizable messages.
---

# Voice Support Configuration

This page covers every option for the [Voice Support](/docs/support-bot/voice-support/intro) feature. All settings are available under **Voice Support** in your [Support Bot dashboard](https://scnx.app/glink?page=support-system/manage).

## Main configuration {#main-configuration}

### Features {#main-configuration-features}

- Enable voice support for your server.
- Pick the [state mode](/docs/support-bot/voice-support/intro#state-modes) that fits your team (staff presence or opening hours).
- Set the queue channel, support category, and dashboard channel.
- Configure which roles count as staff and which users get priority.

### Setup {#main-configuration-setup}

Before you configure voice support, you'll need:

- A **voice channel** to act as the queue. Users connect here to line up.
- A **Discord category** containing one or more voice channels for your staff. Every voice channel in this category (except the queue channel) is treated as a staff support channel.
- A **text channel** for the [dashboard](#dashboard-channel) embed.
- One or more **roles** that identify your voice support staff.

Then visit the [Voice Support](https://scnx.app/glink?page=support-system/voice-support) page in your dashboard and [configure](#main-configuration-configuration) the options below.

### Configuration {#main-configuration-configuration}

| Field                                       | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enable Voice Support                        | Enables or disables the voice support feature for your server. While disabled, the `/voice` commands are hidden, no DMs are sent, and the dashboard embed is not updated.                                                                                                |
| Use opening hours instead of staff presence | Controls when voice support is open. `staff-presence` (default): open whenever at least one staff member is in a support channel. `opening-hours`: open during your bot's [opening hours](/docs/support-bot/general/opening-hours), regardless of staff presence.        |
| Queue Channel                               | The voice channel users join to queue up. It can live inside or outside the support category. Users in this channel get a DM with their position and estimated wait time.                                                                                                |
| Support Category                            | The Discord category that contains your staff support voice channels. Every voice channel in this category (except the queue channel) is treated as a support channel - staff sitting in one is considered available, and users pulled from the queue are moved into it. |
| Dashboard Channel                           | The text channel where the live status embed is posted. See [Dashboard channel](#dashboard-channel).                                                                                                                                                                     |
| Staff Roles                                 | Members with any of these roles are treated as voice support staff. Only staff can pull users, add notes, view history, and use the other `/voice` commands.                                                                                                             |
| Priority Roles                              | See [Priority roles](#priority-roles).                                                                                                                                                                                                                                   |

## Dashboard channel {#dashboard-channel}

The dashboard is a single message the bot maintains in a text channel of your choice. It shows:

- Whether voice support is currently open or offline
- The number of staff connected to support channels
- The current queue (priority users marked with a tag), with how long each user has been waiting
- All active calls (staff ↔ user pairs)
- A **Pull Next User** button (disabled when offline or the queue is empty)
- A **View Queue Details** button

The title/color of the dashboard embed is customized via the [Dashboard Title (Open)](#customizable-messages) and [Dashboard Title (Closed)](#customizable-messages) templates.

## Priority roles {#priority-roles}

Users with any of the configured priority roles are placed on a priority tier. Priority users are always pulled before non-priority users, in the order they joined. Priority users see the same DM flow as regular users; their priority status is reflected in the dashboard (tagged with `[priority]`) and in the user's [call history](/docs/support-bot/voice-support/commands).

Priority roles are purely queue-position - priority users can still be placed on the [blocklist](/docs/support-bot/voice-support/commands#blocklist) and are subject to the same state-mode rules as everyone else.

## Wait-time calculation {#wait-time}

The estimated wait time shown in user DMs is based on recent call data:

| Field                        | Description                                                                                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rolling window (calls)       | Number of most recent calls used to compute the average call duration and (in opening-hours mode) the average staff summon time. Smaller values react faster to changes; larger values are more stable. Default: `20`. |
| Cushion seconds              | Fixed number of seconds added to every estimate to avoid under-promising. Default: `30`.                                                                                                                               |
| Seed summon wait (seconds)   | Initial "time to get staff online" estimate used in `opening-hours` mode before enough real data has been collected. Default: `300` (5 minutes).                                                                       |
| DM update interval (seconds) | How often the bot edits each queued user's position DM. Default: `60`. Lower values show fresher info but edit messages more often; the bot already skips edits when nothing visible has changed.                      |

## Queue channel behaviour {#queue-channel-behaviour}

These options control what happens to the queue voice channel itself as voice support opens and closes:

| Field                                     | Description                                                                                                                                                                                                                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lock queue channel when support is closed | If enabled, the bot denies `Connect` on `@everyone` for the queue channel while voice support is offline, so users cannot join during closed hours. Automatically disabled when [closed-state music](#closed-music) is on (users must be able to connect to listen). Default: `true`. |
| Rename queue channel on state change      | If enabled, the bot automatically renames the queue channel based on open/closed state.                                                                                                                                                                                               |
| Channel name when support is open         | Name used when voice support is open (e.g. `voice-support`).<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "Rename queue channel on state change" is enabled._</blockquote></details></small>                                                           |
| Channel name when support is closed       | Name used when voice support is offline (e.g. `voice-support-closed`).<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "Rename queue channel on state change" is enabled._</blockquote></details></small>                                                 |

:::info Discord rate limits
Discord rate-limits channel renames to 2 per 10 minutes. The bot enforces a 4-minute cooldown between renames and queues any rapid follow-up renames so the final state wins.
:::

## Waiting music {#waiting-music}

Optional waiting music looped in the queue channel while voice support is open. The bot joins the queue channel (immediately on open, or on-demand when the first user connects - see [Join on demand](#join-on-demand)) and streams a random track. When no non-bot users are connected, playback is automatically paused.

:::tip Generate tracks in the dashboard
You don't need to host your own files - the dashboard can [generate music and text-to-speech announcements with AI](/docs/support-bot/voice-support/ai-audio) and add them to this playlist in one click. Generated clips are charged in AI Coins.
:::

| Field                                        | Description                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable waiting music                         | If enabled, the bot plays waiting music in the queue channel while voice support is open.                                                                                                                                                                                                                                                                                                 |
| Playlist                                     | The list of audio URLs the bot cycles through. Each entry has an optional display name.<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "Enable waiting music" is enabled. At least one track must be configured; otherwise the bot disables playback and posts a notice in the dashboard channel._</blockquote></details></small>                            |
| Volume                                       | Playback volume (`0.0` – `1.0`). Default: `0.67`.                                                                                                                                                                                                                                                                                                                                         |
| Only join voice when someone is in the queue | If enabled, the bot only joins the queue channel once the first user connects, and leaves when the channel empties. If disabled, the bot sits in the queue channel for the entire open period.<br/><small><details><summary>Note</summary><blockquote>_Enabling this slightly delays the first few seconds of music but avoids an always-on bot in voice._</blockquote></details></small> |

:::caution Track failures
If a track fails to stream three times in a row, the bot automatically disables music playback and posts a notice in the [dashboard channel](#dashboard-channel). Fix the failing track URLs in the dashboard and re-enable music to resume.
:::

### Join-on-demand {#join-on-demand}

With **Only join voice when someone is in the queue** enabled, the bot only connects to the queue channel when the first user joins and disconnects when the last user leaves. This avoids an always-present bot in voice and reduces outbound bandwidth. Leave it off if you want the bot to be permanently connected during open hours.

### Closed-state music {#closed-music}

An optional second playlist the bot plays while voice support is **offline**. When enabled, users can still connect to the queue channel during closed hours to listen; when voice support reopens, any users still in the channel are automatically queued.

The same [AI audio tools](/docs/support-bot/voice-support/ai-audio) are available when editing this playlist - great for an "after-hours" voiceover followed by low-tempo background music.

| Field                              | Description                                                                                                                                                                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Play music while support is closed | If enabled, the bot plays a different playlist while voice support is offline. **Forces the queue channel to stay unlocked** regardless of the [Lock queue channel when support is closed](#queue-channel-behaviour) setting. |
| Closed-state playlist              | The list of audio URLs played while closed.<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "Play music while support is closed" is enabled._</blockquote></details></small>                      |

## Staff summon {#staff-summon}

A message sent into a configured channel when users are waiting in the queue, so your team knows to come online. Use **When to ping** to choose when it is sent:

- **Only when nobody from your team is around (needs opening hours)**: pings once when at least one user is waiting and no staff member is connected to a support voice channel. This only works in **opening-hours** state mode (in staff-presence mode, no staff connected means voice support is closed, so the queue can't fill up). The bot fires the ping once per "queue non-empty but no staff" episode - no spam if staff briefly disconnect. It re-arms when staff rejoin or the queue drains.
- **On every queue join**: posts an announcement whenever somebody joins the queue, limited by the cooldown. Works both with opening hours and with staff presence.

| Field                                    | Description                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ping staff when users are waiting        | If enabled, the bot sends a message to the ping channel while users sit in the queue (see **When to ping**).                                                                                                                                                                                                                                                                                     |
| When to ping                             | `Only when nobody from your team is around (needs opening hours)` or `On every queue join`, as described above.<br/><small><details><summary>Requirement</summary><blockquote>_The "nobody from your team is around" option never fires in "staff-presence" state mode. Switch to "On every queue join" or turn on opening hours._</blockquote></details></small>                                |
| Ping channel                             | The text channel the message is posted into. Mention roles directly in the message body (e.g. `<@&ROLE_ID>`) to ping them.<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "Ping staff when users are waiting" is enabled._</blockquote></details></small>                                                                                                           |
| Cooldown between announcements (seconds) | Shortest time between two join announcements. Joins that happen during the cooldown are skipped. Set this to `0` to disable the cooldown and announce every single join.<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "When to ping" is set to "On every queue join"._</blockquote></details></small>                                                             |
| Staff summon message                     | The embed template posted in "nobody from your team is around" mode. Role mentions are added automatically before the message content. Supports the placeholders `%queueSize%`, `%priorityQueueSize%`, `%normalQueueSize%`, `%firstWaiterMention%`, `%firstWaiterTag%` plus all [global placeholders](/docs/support-bot/general/global-placeholders).                                            |
| Queue join announcement                  | The embed template posted in "On every queue join" mode. Mention roles directly in the message body to ping them. Supports the placeholders `%userMention%`, `%userTag%`, `%userID%`, `%queuePosition%`, `%queueSize%`, `%priorityQueueSize%`, `%normalQueueSize%` plus all [global placeholders](/docs/support-bot/general/global-placeholders). Nothing is posted while this message is empty. |

## Thread mode {#thread-mode}

When enabled, every call gets a **private thread** under the [dashboard channel](#dashboard-channel). Only the staff member who pulled the user is added; they can invite others via Discord's UI.

Each thread starts with an info embed showing:

- The user and staff involved
- Call start time and time spent waiting
- Priority status and topic (if any)
- The user's prior history (session count, total notes, completed/abandoned counts)
- A digest of the 3 most recent prior notes

All [notes](/docs/support-bot/voice-support/commands), [debriefs](#debrief), and [feedback submissions](#user-feedback) are also posted into the thread. When the call ends, the thread is archived.

| Field       | Description                                                                         |
| ----------- | ----------------------------------------------------------------------------------- |
| Thread mode | If enabled, a private thread is created under the dashboard channel for every call. |

## Add waiting users to a call {#add-users-to-call}

Lets staff pull someone who is waiting in the queue into their active call - handy when several users have the same problem, or when friends queued together and want to be helped as a group. When disabled, every caller is handled one-to-one.

| Field                       | Description                                                                                                                                                                                                                                                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add waiting users to a call | If enabled, the in-call controls gain an **Add User to Call** button and staff can run [`/voice add`](/docs/support-bot/voice-support/commands). Only users currently waiting in the queue can be added. The added user receives the [Added to Call](#customizable-messages) message in their queue DM. Default: disabled. |

## Debrief {#debrief}

A modal form staff can fill out after ending a call. Use it to document what was discussed, whether follow-up is needed, etc. Answers are optionally mirrored to a logging channel.

| Field                          | Description                                                                                                                                                                                                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable staff debrief           | If enabled, staff are prompted to fill out a debrief modal after every call.                                                                                                                                                                                                          |
| Send debriefs to a log channel | If enabled, submitted debriefs are posted to a dedicated log channel in addition to the thread (if [thread mode](#thread-mode) is on).<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "Enable staff debrief" is enabled._</blockquote></details></small> |
| Log channel                    | The text channel debriefs are logged to.<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "Send debriefs to a log channel" is enabled._</blockquote></details></small>                                                                                     |
| Intro message                  | The embed shown at the top of the debrief modal flow.                                                                                                                                                                                                                                 |
| Submitted message              | The embed shown after the staff submits the debrief.                                                                                                                                                                                                                                  |
| Debrief questions              | The list of form fields (short or paragraph input). Each question has a label, style, required flag, min/max length, and placeholder - see the [forms configuration](/docs/support-bot/general/forms#manage-forms-questions) for the field semantics.                                 |

## User feedback {#user-feedback}

An optional star-rating DM sent to users after a call ends. Uses the same [feedback system](/docs/support-bot/modmail/support-feedback) as modmail and ticket-system feedback, but with its own per-call configuration.

| Field                           | Description                                                                                                                                                                                                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable user feedback            | If enabled, users are DMed a star-rating prompt after a call ends.                                                                                                                                                                                                            |
| Minimum call duration (seconds) | Calls shorter than this don't trigger the feedback DM, so accidental 10-second calls don't prompt for a rating. Default: `30`.<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "Enable user feedback" is enabled._</blockquote></details></small> |
| Anonymous feedback              | If enabled, submitted ratings are posted to the log channel without the user's identity.<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "Enable user feedback" is enabled._</blockquote></details></small>                                       |
| Send feedback to channel        | If enabled, feedback submissions are posted to a dedicated log channel.<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "Enable user feedback" is enabled._</blockquote></details></small>                                                        |
| Feedback channel                | The text channel feedback is logged to.<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "Send feedback to channel" is enabled._</blockquote></details></small>                                                                                    |
| Custom feedback message         | If enabled, a customizable embed is used as the feedback prompt. If disabled, the default system-wide template is used.<br/><small><details><summary>Requirement</summary><blockquote>_Only used if "Enable user feedback" is enabled._</blockquote></details></small>        |
| Feedback questions              | Custom follow-up questions shown after the star rating (e.g. "What could have gone better?"). Same form-field semantics as [debrief questions](#debrief).                                                                                                                     |

## Customizable messages {#customizable-messages}

Every user-facing embed sent by voice support is customizable. Edit them in the dashboard under **Voice Support → Messages**.

| Message                  | When it's used                                                                                                | Placeholders                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Queue Joined             | DM sent to a user immediately after they join the queue channel.                                              | `%position%`, `%waitMinutes%`, plus standard user placeholders  |
| Queue Position Update    | Edited into the same DM every few seconds as the queue moves.                                                 | `%position%`, `%waitMinutes%`                                   |
| Call Started             | Edited into the user's DM when a staff member pulls them.                                                     | `%staffMention%`, `%staffTag%`                                  |
| Added to Call            | Edited into the queue DM of a waiting user when staff [adds them to an ongoing call](#add-users-to-call).     | `%staffMention%`, `%staffTag%`, plus standard user placeholders |
| Call Ended               | Edited into the user's DM when the call ends (staff-ended or timed out).                                      | `%staffTag%`                                                    |
| User Disconnected        | Alternate end message when the user is the one who disconnected.                                              | `%staffTag%`                                                    |
| Queue Closed             | DM sent when voice support goes offline while the user is still queued.                                       | `%guildName%`                                                   |
| Kicked on Offline        | DM sent when the user is disconnected because voice support went offline (closed-music disabled).             | `%guildName%`, `%userMention%`, `%userTag%`                     |
| Closed-state greeting    | DM sent when voice support goes offline but the user stays connected for [closed-state music](#closed-music). | `%guildName%`, `%userMention%`, `%userTag%`, `%openingHours%`   |
| Feedback Request         | DM sent at call end if [user feedback](#user-feedback) is enabled.                                            | `%staffTag%`                                                    |
| History Header           | Embed header shown when staff runs `/voice history`.                                                          | `%userTag%`, `%noteCount%`, `%callCount%`                       |
| Queue Channel Embed      | The message posted/updated in the queue channel itself, showing the current lineup.                           | `%queueBody%`                                                   |
| Dashboard Title (Open)   | Title embed at the top of the [dashboard](#dashboard-channel) when voice support is open.                     | `%staffCount%`                                                  |
| Dashboard Title (Closed) | Title embed when voice support is offline.                                                                    | (none)                                                          |

All templates also accept the [global placeholders](/docs/support-bot/general/global-placeholders) (`%guildName%`, `%botName%`, Discord timestamps, `%openingHours%`, etc.).
