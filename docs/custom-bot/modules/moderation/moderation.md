# Moderation & Security

Advanced security and moderation system with tons of features for keeping your server safe.

<ModuleOverview moduleName="moderation" />

## Features {#features}

- Comprehensive moderation commands: [warn](#warn), [mute](#mute), [kick](#kick), [ban](#ban), [quarantine](#quarantine), [channel-mute](#channel-mute), and [clear](#clear).
- Warn, Mute, Kick, and Ban are also available as right-click [context-menu actions](#context-menu-actions) on users and messages, and they accept evidence.
- Support for temporary bans, mutes, and quarantines with automatic expiration, plus [editable durations](#edit-duration) that shorten or extend an active punishment after the fact.
- [Lift punishments in one click](#lift-punishment) straight from the log message or the actions view.
- [Channel lock and unlock](#lock-unlock) commands to restrict messaging in a channel.
- [Server-wide lockdown](#lockdown) system that locks all channels at once, with automatic triggers. Optionally send lockdown messages to specific channels only.
- Smarter invite detection: Discord invite links are resolved before taking action, and invites to your own server are automatically allowed.
- [User reporting](#report) system that allows members to report other users and messages with proof images.
- [Moderator notes](#notes) system to track information about users.
- View all moderation [actions history](#actions) for any user.
- [Revoke warnings](#commands) to remove previous warns.
- [Auto-moderation](#configuration-config) for invite links, scam links, and blacklisted words, each with an optional delete-only action that removes the message without punishing the member.
- Automated punishments based on warning count (e.g., auto-ban after X warns).
- A fully configurable, [per-type anti-spam](#anti-spam) system - message rate, duplicate content, mentions, mass mentions, attachment/image spam, link spam, newline/character floods, sticker/emoji spam, channel spread, and text abuse - each with its own toggle, threshold, timeframe, and action.
- [New-member restrictions](#new-member-restrictions) that hold back attachments and links until a member has been on the server long enough.
- [Anti-Join-Raid](#anti-join-raid) system detecting mass joins.
- [Join Gate](#join-gate) to block suspicious accounts based on account age and profile picture.
- [Anti-Grief](#anti-grief) system to quarantine moderators who abuse their permissions.
- [Verification](#verification) system requiring new members to complete an image captcha, a word or math challenge, a one-click button, or a manual moderator review.
- [Custom moderation levels](#configuration-modlevels) you define yourself, each granting an explicit set of capabilities.
- [Customizable and public logs](#configuration-logmessages): edit the embed for every log message type, and optionally mirror actions to a separate public channel.
- [Native Discord moderation import](#native-import) that records bans, kicks, and timeouts done with Discord's own tools into the bot's database and log channel.
- Optional [custom case titles](#configuration-config), [editable reasons](#edit-reason), and [involved-user tagging](#involved-users) on cases.
- Automatic warn expiration after a configurable period.
- Customizable messages for every moderation action.
- Optional nickname changes on mute or quarantine.
- All actions are logged to a configurable log channel.
- [Multi-image evidence](#evidence-archival) on moderation actions is archived to your server's [file library](/docs/scnx/guilds/files), so old case logs stay viewable after Discord's CDN URLs expire.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=moderation) on your server.
2. Open the [Configuration](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/config) and set the **Log-Channel** where moderation actions will be logged.
3. Set up your **moderation levels** in the [Moderation Levels configuration](#configuration-modlevels). Create one level per staff tier, list the roles that belong to it, and tick exactly the capabilities those roles should have (warn, mute, kick, ban, quarantine, and more). If you are upgrading from an older version, your existing Moderator-Level 1-4 roles are migrated into equivalent levels automatically on startup, so your team keeps working without any change.
4. All moderators also need to be able to execute the `/moderate` command. Configure this in your Discord server settings (Server Settings > Integrations).
5. If you want to use quarantine, set the **Quarantine-Role** in the configuration. This role should have restricted permissions, and the bot's role should be placed above it in the role hierarchy.
6. Make sure the bot has the following permissions: **Manage Roles**, **Kick Members**, **Ban Members**, **Moderate Members**, **Manage Channels**, **Manage Messages**, **View Channel**, **Send Messages**, and **Embed Links**. To record [native Discord moderation](#native-import), the bot additionally needs **View Audit Log**.
7. Optionally configure the additional systems ([Anti-Spam](#anti-spam), [New-member restrictions](#new-member-restrictions), [Anti-Join-Raid](#anti-join-raid), [Join Gate](#join-gate), [Anti-Grief](#anti-grief), [Verification](#verification), [Lockdown](#lockdown), and [Log Messages](#configuration-logmessages)) in their respective configuration files.

## Usage {#usage}

### Moderation commands {#moderation-commands}

Moderators use the `/moderate` command with various subcommands to perform actions. Each action is logged in the configured log channel. Users receive a DM notification when a moderation action is taken against them (if their DMs are open).

Every action can optionally tag [involved users](#involved-users). When [custom case titles](#configuration-config) are enabled, a short **title** field is added to the warn, mute, ban, kick, quarantine, and channel-mute commands and becomes required.

#### Warn {#warn}

Warns a user. The warning is recorded and can trigger automatic actions if [automod thresholds](#configuration-config) are configured. Requires the **Warn members** capability.

#### Mute {#mute}

Mutes a user using Discord's built-in timeout feature. A duration is required (maximum 28 days). If no duration is set by the moderator, the configured default mute duration is used. Requires the **Mute members** capability.

#### Kick {#kick}

Kicks a user from the server. The user can rejoin using an invite link. Requires the **Kick members** capability.

#### Ban {#ban}

Bans a user from the server. Optionally specify a duration for a temporary ban and the number of days of messages to delete. Works even if the user is not currently on the server. Requires the **Ban members** capability.

#### Quarantine {#quarantine}

Quarantines a user by assigning them the quarantine role and optionally removing all their other roles (roles are saved and restored on unquarantine). Optionally specify a duration for automatic removal. Requires the **Quarantine members** capability.

If **Strip new roles from quarantined users** is enabled (see [Configuration](#configuration-config)), the bot also
removes any role that gets added to the user while they are quarantined - including reaction roles, self-roles
picked from Discord's Channels & Roles tab, and roles assigned by other bots. Managed roles like server boosts and
integration-managed roles are left in place.

#### Channel-mute {#channel-mute}

Mutes a user in the current channel only by modifying the channel's permission overwrites. This prevents the user from sending messages in that specific channel. Requires the **Channel-mute members** capability.

#### Clear {#clear}

Deletes a specified number of recent messages from the current channel (default: 5). Requires the **Clear messages** capability.

#### Lock and Unlock {#lock-unlock}

Locks or unlocks the current channel, preventing or allowing the @everyone role from sending messages. A reason can be provided when locking. Requires the **Lock channels** capability.

### Context-menu actions {#context-menu-actions}

Warn, Mute, Kick, and Ban are also available as right-click actions. Right-click a user (or a message, then choose **Apps**) and pick **Warn**, **Mute**, **Kick**, or **Ban**. A modal opens for the reason and, when [custom case titles](#configuration-config) are enabled, the title. Every context-menu action includes an optional evidence field where you can upload up to ten proof images in one go. There are also **Report User** and **Report Message** actions for members, and a **Mod History** action that shows a user's past cases.

### Lift punishment {#lift-punishment}

When **Lift-punishment buttons** are enabled (see [Configuration](#configuration-config)), moderation log messages and the [actions view](#actions) show a **Lift punishment** button that reverses a mute, ban, quarantine, or warn in one click. You are prompted for a reason, and the action is undone. The button is permission-gated: only staff whose [moderation level](#configuration-modlevels) allows that action type can lift it.

### Edit duration {#edit-duration}

Use `/moderate edit-duration`, or the **Edit duration** button and modal in the [actions view](#actions) (shown when **Lift-punishment buttons** are enabled), to shorten or extend an active temporary mute, ban, or quarantine after it was applied. The affected user is notified of the change by DM (see the **Duration Changed Message** in [Messages](#configuration-strings)).

### Edit reason {#edit-reason}

An **Edit reason** button appears under each log message and in the [actions view](#actions) - it shares the **Lift-punishment buttons** toggle (see [Configuration](#configuration-config)). `/moderate edit-reason` does the same from the command line. The reason is rewritten in place, and the change is recorded as a case event for accountability.

### Involved users {#involved-users}

A case can reference more than one person - the member who reported it, a second account caught up in the same incident, or a witness. When **Allow linking involved users** is enabled, add them with the `involved` option on an action, the `/moderate involve` command, or the user picker in the [actions view](#actions). Involved users are reference-only: they are never punished or notified, and they surface through the `%involved%` [log placeholder](#configuration-logmessages), so you decide whether they show in your internal log, a public one, or both.

### Reporting {#report}

Any user can report another user with `/report`, or right-click a user or message and use **Report User** / **Report Message**. A report includes the reason, optional proof images (up to ten in the context-menu flows), and an encrypted snapshot of the current messages in the channel. Reports are sent to the configured report channel (or the log channel if no report channel is set). Configured roles are pinged when a report is received. Members whose moderation level is marked **Immune to reports** cannot be reported.

### Notes {#notes}

Moderators can create, view, edit, and delete notes about users. Notes are useful for tracking information about users across moderation actions. All moderators with access to the `/moderate` command can manage notes.

### Actions history {#actions}

Moderators can view all past moderation actions taken against a user, including warns, mutes, kicks, bans, and quarantines. The view is where the per-case buttons live: [lift a punishment](#lift-punishment), [edit its duration](#edit-duration) or [reason](#edit-reason), [add proof](#evidence-archival), and [link involved users](#involved-users) - each shown when its feature is enabled.

### Evidence archival {#evidence-archival}

Evidence is no longer limited to a single screenshot. You can attach up to ten proof images to a moderation action - both when you act (via the `proof` option or the context-menu upload field) and afterward, when **Allow adding more proof images** is enabled, via the **Add proof** button under each log message or the `/moderate add-proof` command. Images are archived to your server's [file library](/docs/scnx/guilds/files), the case log links to those permanent URLs instead of Discord's expiring CDN URLs, and the log message updates itself in place, showing everything together as a gallery. Reports carry evidence too.

Stored proof files count against your server's [file-storage quota](/docs/scnx/guilds/files#understanding-storage-limits). To opt out, enable **Disable attachment archival** in the bot's General Configuration; with archival disabled, evidence links revert to Discord's URLs and will eventually expire.

### Lockdown {#lockdown}

The lockdown system allows you to lock all channels in the server at once. This can be triggered manually by moderators or automatically when security systems (anti-join-raid, join-gate, or anti-spam) are triggered. The lockdown system must be enabled in the [Lockdown Configuration](#configuration-lockdown) first.

When a lockdown is activated, the bot saves the current permission state of all channels, then revokes send-message permissions for the @everyone role. When the lockdown is lifted, the original permissions are restored. An optional auto-lift timer can automatically end the lockdown after a specified number of minutes. Members whose [moderation level](#configuration-modlevels) has **Speak during lockdown** or **Immune to lockdown** set are left able to talk.

You can optionally configure specific channels where lockdown and lift messages are sent instead of sending them in every affected channel. Permissions are still changed in all channels regardless of this setting.

### Native Discord moderation import {#native-import}

With **Import native moderation actions** enabled (see [Configuration](#configuration-config)), bans, unbans, kicks, and timeouts carried out with Discord's own built-in tools are recorded into the bot's moderation database and log channel, so your history and infraction counts stay complete no matter how an action was taken. You can enable it per action type (bans/unbans, kicks, timeouts), and optionally DM the affected user. This applies to live actions only (while the bot is running) and requires the bot to have the **View Audit Log** permission.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                                                                                                  | Description                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `/moderate warn user:<User> [reason:<Text>] [proof:<Attachment>] [involved:<User>]`                                      | Warns a user.                                                                                            |
| `/moderate mute user:<User> duration:<Duration> [reason:<Text>] [proof:<Attachment>] [involved:<User>]`                  | Mutes (times out) a user for the specified duration.                                                     |
| `/moderate unmute user:<User> [reason:<Text>]`                                                                           | Unmutes a user.                                                                                          |
| `/moderate kick user:<User> [reason:<Text>] [proof:<Attachment>] [involved:<User>]`                                      | Kicks a user from the server.                                                                            |
| `/moderate ban user:<User> [reason:<Text>] [proof:<Attachment>] [duration:<Duration>] [days:<Number>] [involved:<User>]` | Bans a user. Optionally set a duration for a temporary ban and the number of days of messages to delete. |
| `/moderate unban id:<UserID> [reason:<Text>]`                                                                            | Unbans a user by their user ID. Supports autocomplete.                                                   |
| `/moderate quarantine user:<User> [reason:<Text>] [duration:<Duration>] [involved:<User>]`                               | Quarantines a user by assigning the quarantine role.                                                     |
| `/moderate unquarantine user:<User> [reason:<Text>]`                                                                     | Removes a user from quarantine and restores their previous roles.                                        |
| `/moderate channel-mute user:<User> [reason:<Text>] [proof:<Attachment>] [involved:<User>]`                              | Mutes a user in the current channel only.                                                                |
| `/moderate remove-channel-mute user:<User> [reason:<Text>]`                                                              | Removes a channel mute from a user.                                                                      |
| `/moderate clear [amount:<Number>]`                                                                                      | Deletes recent messages in the current channel (default: 5).                                             |
| `/moderate lock [reason:<Text>]`                                                                                         | Locks the current channel.                                                                               |
| `/moderate unlock`                                                                                                       | Unlocks the current channel.                                                                             |
| `/moderate lockdown enable:<Boolean> [reason:<Text>]`                                                                    | Activates or lifts the server-wide lockdown (only available if lockdown system is enabled).              |
| `/moderate notes view user:<User>`                                                                                       | View all notes for a user.                                                                               |
| `/moderate notes create user:<User> notes:<Text>`                                                                        | Create a new note for a user.                                                                            |
| `/moderate notes edit user:<User> note-id:<Number> notes:<Text>`                                                         | Edit an existing note.                                                                                   |
| `/moderate notes delete user:<User> note-id:<Number>`                                                                    | Delete a note.                                                                                           |
| `/moderate actions user:<User>`                                                                                          | View all past moderation actions for a user, with the per-case buttons.                                  |
| `/moderate revoke-warn warn-id:<ID> [reason:<Text>]`                                                                     | Revoke a warning by its ID. Supports autocomplete.                                                       |
| `/moderate edit-duration id:<ID> duration:<Duration> [reason:<Text>]`                                                    | Shorten or extend an active temporary mute, ban, or quarantine. Supports autocomplete.                   |
| `/moderate edit-reason id:<ID> reason:<Text>`                                                                            | Rewrite the reason of an existing case. Supports autocomplete.                                           |
| `/moderate add-proof id:<ID> photo:<Attachment> [photo2:<Attachment>] [photo3:<Attachment>]`                             | Attach extra proof images to an existing case. Supports autocomplete.                                    |
| `/moderate involve id:<ID> user:<User> [remove:<Boolean>]`                                                               | Link (or, with `remove`, unlink) an involved user to a case. Supports autocomplete.                      |
| `/report user:<User> reason:<Text> [proof:<Attachment>]`                                                                 | Report a user to the moderation team.                                                                    |

Notes:

- Whether `reason` and `proof` are required depends on the **Force moderators to set a reason** and **Force moderators to upload proof** configuration options.
- When **Require a custom case title** is enabled, an additional required `title:<Text>` option appears on warn, mute, ban, kick, quarantine, and channel-mute (and their right-click modals). When the feature is off, no title option is added at all.
- The `edit-duration`, `edit-reason`, `add-proof`, and `involve` subcommands act on an existing case by its ID and only work when their matching opt-in toggle is enabled.

## Configuration {#configuration}

### Configuration {#configuration-config}

In this configuration file, you set up the core moderation settings. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/config).

Moderator permissions no longer live here - they are defined in the separate [Moderation Levels](#configuration-modlevels) configuration. The old Moderator-Level 1-4 role fields are migrated into equivalent levels automatically on startup and are hidden afterward.

| Field                                                | Description                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Log-Channel                                          | Channel where moderation actions are logged.                                                                                                                                                                                                                                                                                                                            |
| Quarantine-Role                                      | Role assigned to quarantined users. All other roles are removed (and saved for restoration).                                                                                                                                                                                                                                                                            |
| Report-Channel                                       | Channel where user reports are sent. Falls back to the log channel if not set.                                                                                                                                                                                                                                                                                          |
| Remove all roles on quarantine                       | If enabled, all roles are removed from a user when they are quarantined. Roles are saved and restored on unquarantine.                                                                                                                                                                                                                                                  |
| Strip new roles from quarantined users               | If enabled, any role added to a quarantined user (via Discord's Channels & Roles tab, reaction roles, or another bot) is automatically removed again. Managed roles such as server boosts and integration roles are kept untouched. Off by default.                                                                                                                     |
| Prevent manual quarantine role removal               | If enabled, the bot re-applies the quarantine role when staff strip it manually instead of using `/moderate unquarantine`, and posts an alert in the log channel. With it off, the previous behavior is preserved: removing the role manually still implicitly unquarantines the user. Off by default.                                                                  |
| Roles to ping on reports                             | Roles that are pinged in the log/report channel when a user submits a report.                                                                                                                                                                                                                                                                                           |
| Force moderators to set a reason                     | If enabled, moderators must provide a reason for their actions.                                                                                                                                                                                                                                                                                                         |
| Force moderators to upload proof                     | If enabled (and "Force reason" is also enabled), moderators must upload proof for their actions.                                                                                                                                                                                                                                                                        |
| Action on invite                                     | Action taken when a user posts a Discord invite link. Options: none, delete only (remove the message without punishing), warn, mute, kick, quarantine, or ban.                                                                                                                                                                                                          |
| Allowed invite guild IDs                             | Server IDs whose invite links are allowed and will not trigger moderation. Invites to your own server are always allowed automatically.                                                                                                                                                                                                                                 |
| Action on Scam-Link                                  | Action taken when a user posts a suspected scam link. Same options as invites, including delete only.                                                                                                                                                                                                                                                                   |
| Level of Scam-Link-Detection                         | Which SCNX-maintained list to match against. "confirmed" only filters verified scam and phishing domains; "suspicious" additionally applies heuristics that may flag not-yet-confirmed domains.                                                                                                                                                                         |
| Whitelisted channels for invite-ban                  | Channels or categories where invite blocking is disabled.                                                                                                                                                                                                                                                                                                               |
| Whitelisted roles for invite-ban                     | Roles that are allowed to bypass invite blocking.                                                                                                                                                                                                                                                                                                                       |
| Blacklisted words                                    | Words that are blocked in messages.                                                                                                                                                                                                                                                                                                                                     |
| Action on blacklisted Word                           | Action taken when a user posts a blacklisted word. Same options as invites, including delete only.                                                                                                                                                                                                                                                                      |
| Default Mute-Duration                                | Default mute duration when none is specified. Also used for automod actions. Maximum 28 days.                                                                                                                                                                                                                                                                           |
| Change nicknames on Mute- / Quarantine               | If enabled, users will be renamed when muted or quarantined. The mute / quarantine prefix is applied through the [central nickname manager](/docs/custom-bot/modules/community/nicknames#central-nickname-manager), so it is added once (re-muting never produces `[Muted] [Muted] X`) and unmuting / unquarantining preserves any role prefix or active streak suffix. |
| New nickname on mute                                 | Nickname template when a user is muted. Supports `%nickname%` (original nickname).                                                                                                                                                                                                                                                                                      |
| Nickname during quarantine                           | Nickname template when a user is quarantined. Supports `%nickname%` (original nickname).                                                                                                                                                                                                                                                                                |
| Automod                                              | Define automatic actions (mute, kick, ban, quarantine) based on warning count. Format: key = number of warns, value = action (optionally with duration, e.g., "ban:7d").                                                                                                                                                                                                |
| Should warns be deleted automatically?               | If enabled, warns are automatically removed after the configured expiration period.                                                                                                                                                                                                                                                                                     |
| Time after which warns will be automatically removed | Duration after which warns expire (e.g., "3 months", "1y", "2w").                                                                                                                                                                                                                                                                                                       |
| Import native moderation actions                     | If enabled, bans, unbans, kicks, and timeouts done with Discord's native tools are recorded into the moderation database and log channel. Requires the bot to have **View Audit Log**, otherwise it stays inactive.                                                                                                                                                     |
| Import native bans and unbans                        | Record bans and unbans performed with Discord's native tools.                                                                                                                                                                                                                                                                                                           |
| Import native kicks                                  | Record kicks performed with Discord's native tools.                                                                                                                                                                                                                                                                                                                     |
| Import native timeouts                               | Record timeouts and timeout removals performed with Discord's native tools.                                                                                                                                                                                                                                                                                             |
| DM users on imported actions                         | Attempt to DM affected users about an imported action (usually impossible after kicks/bans).                                                                                                                                                                                                                                                                            |
| Lift-punishment buttons                              | Show one-click [Lift punishment](#lift-punishment) buttons on moderation log messages and in the actions view. Clicking asks for an optional reason.                                                                                                                                                                                                                    |
| Allow adding more proof images                       | Let moderators attach extra proof images to an existing case with the **Add proof** button or `/moderate add-proof`; the log message updates in place.                                                                                                                                                                                                                  |
| Allow linking involved users                         | Let moderators link extra [involved users](#involved-users) to a case; they are shown via the `%involved%` template placeholder.                                                                                                                                                                                                                                        |
| Require a custom case title                          | Add a required short title field to each moderation action (e.g. "Insulting several users"). The title becomes the log embed's heading via `%title%`, and the case number moves to the footer.                                                                                                                                                                          |

### Moderation Levels {#configuration-modlevels}

In this configuration file, you define your custom moderation levels. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/modLevels).

Each level is an entry that lists the roles it applies to and the capabilities those roles are granted. Create as many named levels as you like - for example a Trial Mod level with only warn and mute, and a dedicated anti-raid level with nothing but lockdown control. A member gets the combined capabilities of every level whose roles they hold. If you are upgrading, your old Moderator-Level 1-4 setup is migrated into equivalent levels automatically and keeps working exactly as before.

| Field                 | Description                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| Level name            | A name for this moderation level, shown only in the dashboard for your own reference.                  |
| Roles                 | Members holding any of these roles are granted this level's capabilities.                              |
| Warn members          | Allows warning members and managing warning notes.                                                     |
| Mute members          | Allows muting and unmuting members.                                                                    |
| Lock channels         | Allows locking and unlocking channels.                                                                 |
| Channel-mute members  | Allows channel-muting members and removing channel mutes.                                              |
| Kick members          | Allows kicking members from the server.                                                                |
| Clear messages        | Allows bulk-clearing messages from channels.                                                           |
| Quarantine members    | Allows quarantining and unquarantining members.                                                        |
| Ban members           | Allows banning and unbanning members.                                                                  |
| Bypass automod        | Members of this level are exempt from anti-spam and message-protection filters.                        |
| Immune to reports     | Members of this level cannot be reported by other users.                                               |
| Speak during lockdown | Members of this level keep the ability to send messages when a lock-all is issued.                     |
| Immune to lockdown    | Members of this level are fully exempt from server lockdowns, including channel permission overwrites. |

### Anti-Spam {#anti-spam}

In this configuration file, you set up the anti-spam system. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/antiSpam).

Anti-spam is split into individual detectors that you enable, tune, and act on separately. There is a set of shared settings and a default action, and then each detector can override the timeframe, action, and auto-delete behavior, and use its own notification message.

#### Shared settings

| Field                                       | Description                                                                                                                                                                               |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled?                                    | Enable or disable the whole anti-spam system.                                                                                                                                             |
| Timeframe (in seconds)                      | Default time window in which messages are tracked for spam detection. Each detector can override this.                                                                                    |
| Action                                      | Default action taken when a detector trips (warn, mute, kick, quarantine, or ban). Detectors set to "inherit" use this.                                                                   |
| Automatically delete detected spam messages | Global default: also delete the messages that triggered a detection. Auto-delete cleans up the entire offending burst across every channel it landed in. Each detector can override this. |
| Send Chat-Message                           | If enabled, the bot posts a notification in the channel when a detector trips.                                                                                                            |
| Message                                     | The notification message. Supports `%userid%`, `%reason%`, `%type%` (detector label), `%count%`, `%threshold%`, `%timeframe%`, and `%action%`.                                            |
| Whitelisted Channels                        | Channels where anti-spam is disabled.                                                                                                                                                     |
| Whitelisted roles                           | Roles that are exempt from anti-spam detection.                                                                                                                                           |

#### Per-detector fields

Every detector shares the same set of options, on top of its own threshold field(s):

| Field                              | Description                                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Enable ... detection               | Turn this specific detector on or off.                                                               |
| Timeframe override (in seconds)    | Detection window for this detector; leave empty to use the global timeframe.                         |
| Action                             | Action for this detector; "Inherit default action" uses the global action, "No action" only deletes. |
| Action duration (only mute/ban)    | Duration for a mute or ban (e.g. 1h, 7d); leave empty for the default duration.                      |
| Automatically delete spam messages | Override the global auto-delete default for this detector (inherit / on / off).                      |
| Notification override              | A chat notification just for this detector; leave empty to fall back to the global **Message**.      |

The detectors and their threshold fields are:

| Detector                  | Threshold field(s)                                                                                                                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message Rate              | **Maximal count of messages in timeframe**                                                                                                                                                                                                                                                                    |
| Duplicate Content         | **Maximal count of duplicated messages in timeframe**                                                                                                                                                                                                                                                         |
| User Mentions             | **Maximal count of pings in timeframe** (also counts replies)                                                                                                                                                                                                                                                 |
| Mass Mentions             | **Maximal count of mass-pings in timeframe** (@everyone, @here, role pings)                                                                                                                                                                                                                                   |
| Attachment / Image Spam   | **Max messages with attachments in timeframe**                                                                                                                                                                                                                                                                |
| Link Spam                 | **Max messages with links in timeframe**                                                                                                                                                                                                                                                                      |
| Newline / Character Flood | **Max newlines per message** and **Max characters per message** (a single message crossing either limit trips it)                                                                                                                                                                                             |
| Sticker / Emoji Spam      | **Max sticker/emoji messages in timeframe** and **Custom emojis that count as spammy**                                                                                                                                                                                                                        |
| Channel Spread            | **Max distinct channels in timeframe** (the same user posting across many channels)                                                                                                                                                                                                                           |
| Text Abuse                | **Offending messages before action**, plus per-check toggles: **Detect caps spam** (with minimum letters and uppercase percentage), **Detect repeated characters** (max run length), **Detect zalgo / unicode abuse** (combining-character percentage), and **Detect spoiler spam** (max blocks per message). |

### New-member restrictions {#new-member-restrictions}

These settings live in the [Anti-Spam configuration](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/antiSpam) under the New-Member Restrictions category. They require a minimum time on the server before new members may post attachments and/or links - a simple wall against throwaway accounts that join and immediately paste a scam link. Messages that break the rule are deleted with an optional notice, and repeat offenders can be escalated to a moderation action.

| Field                            | Description                                                                                                        |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Enable new-member restrictions   | Turn the new-member restrictions on or off.                                                                        |
| Attachment restriction age       | Members younger than this (e.g. 1d) cannot post attachments; leave empty to allow attachments.                     |
| Link restriction age             | Members younger than this (e.g. 12h) cannot post links; leave empty to allow links.                                |
| Notify on violation              | Send a short, auto-removed notice in the channel when a restricted message is deleted.                             |
| Notice message                   | The notice text. Supports `%userid%`, `%type%` (attachments or links), `%required%`, `%count%`, and `%threshold%`. |
| Violations before action         | Number of violations within the timeframe that escalate to a moderation action; 0 never escalates.                 |
| Violation timeframe (in seconds) | Window over which violations are counted toward the threshold.                                                     |
| Action                           | Action for repeat violations; "inherit" uses the global anti-spam action.                                          |
| Action duration (only mute/ban)  | Duration for a mute or ban; leave empty for the default duration.                                                  |

### Log Messages {#configuration-logmessages}

In this configuration file, you customize the case-log messages posted to your moderation log channel and, optionally, a public log channel. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/logMessages).

Each action type has its own editable embed template, opened with the full embed editor: **Mute**, **Unmute**, **Quarantine**, **Unquarantine**, **Kick**, **Ban**, **Warn**, **Channel-mute**, **Channel-unmute**, **Unwarn**, and **Unban log message**. The embed color is always set automatically (yellow for temporary, green for reversals, red for base actions) and overrides any color in the template; the expiry, proof, and channel fields are appended automatically when they apply.

Templates support these placeholders:

| Placeholder                                           | Meaning                                                                                 |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `%title%`                                             | Custom case title, or the localized "Case #N" when none is set.                         |
| `%case%`                                              | The case (action) ID number.                                                            |
| `%victim%` / `%victimId%` / `%victimAvatar%`          | Name, user ID, and avatar of the affected member.                                       |
| `%moderator%` / `%moderatorId%` / `%moderatorAvatar%` | Name, user ID, and avatar of the acting moderator.                                      |
| `%action%`                                            | Action label (tmp- prefixed for temporary actions).                                     |
| `%reason%`                                            | Reason for the action.                                                                  |
| `%date%`                                              | Formatted timestamp of when the action was taken.                                       |
| `%expires%` / `%expiresAt%`                           | Formatted expiry, or a live countdown timestamp; empty when the action does not expire. |
| `%duration%`                                          | Human-readable length of a temporary action, or empty.                                  |
| `%channelName%` / `%channelMention%`                  | Name / mention of the related channel, or empty.                                        |
| `%involved%`                                          | Mentions of the extra users linked to this case, or empty when none.                    |

#### Public logs

Optionally mirror actions to a second, public channel with a separate, differently-worded message per action type - keep the detailed internal log private while sharing a friendlier notice with your community.

| Field                                                             | Description                                                                                                                                                                    |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Public log channel                                                | Channel where public moderation logs are sent; leave empty to disable public logging.                                                                                          |
| Enable public logging                                             | Master switch for the public log; when off, no public logs are sent regardless of per-type settings.                                                                           |
| Include proof in public logs                                      | When on, proof attachments are also shown in the public log (off by default so evidence is not exposed publicly).                                                              |
| Public log: mutes / unmutes / bans / unbans / kicks / quarantines | Per-action toggles for whether that action type is also logged publicly.                                                                                                       |
| Public ... log message                                            | The editable embed template used in the public channel for each enabled action type. Uses the same placeholders as above; automatic fields are never added to public messages. |

### Anti-Join-Raid {#anti-join-raid}

In this configuration file, you set up the anti-join-raid system. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/antiJoinRaid).

| Field                      | Description                                                                                        |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| Enabled?                   | Enable or disable the anti-join-raid system.                                                       |
| Timeframe (in minutes)     | Time window in which joins are tracked.                                                            |
| Maximal count of new users | Number of joins allowed in the timeframe before triggering the system.                             |
| Action                     | Action to take against users who trigger the system (mute, kick, quarantine, ban, or give-role).   |
| Role                       | Role assigned to users when the action is "give-role".                                             |
| Remove other roles         | If enabled (and action is "give-role"), other roles are removed from the user after a short delay. |

### Join Gate {#join-gate}

In this configuration file, you set up the join gate. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/joinGate).

| Field                   | Description                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| Enabled?                | Enable or disable the join gate.                                                            |
| Filter all users        | If enabled, actions are taken against all new users regardless of criteria.                 |
| Action                  | Action to take when a user fails the join gate (mute, kick, quarantine, ban, or give-role). |
| Role                    | Role assigned to users when the action is "give-role".                                      |
| Remove other roles      | If enabled (and action is "give-role"), other roles are removed from the user.              |
| Minimum account age     | Minimum account age in days required to pass the join gate.                                 |
| Require profile picture | If enabled, users must have a profile picture set to pass the join gate.                    |
| Ignore bots             | If enabled, bots are allowed to pass the join gate without restrictions.                    |

### Anti-Grief {#anti-grief}

In this configuration file, you set up the anti-grief system to prevent moderator abuse. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/antiGrief).

This feature automatically quarantines moderators who exceed configured limits for moderation actions within a timeframe. For this to work correctly, place your bot's role above all other roles and ensure the quarantine role is directly below it.

| Field                                    | Description                                                   |
| ---------------------------------------- | ------------------------------------------------------------- |
| Enabled?                                 | Enable or disable the anti-grief system.                      |
| Timeframe (in hours)                     | Time window in which moderation actions are counted.          |
| Maximal amount of warns in the timeframe | Maximum warns a moderator can issue before being quarantined. |
| Maximal amount of mutes in the timeframe | Maximum mutes a moderator can issue before being quarantined. |
| Maximal amount of kicks in the timeframe | Maximum kicks a moderator can issue before being quarantined. |
| Maximal amount of bans in the timeframe  | Maximum bans a moderator can issue before being quarantined.  |

### Verification {#verification}

In this configuration file, you set up the verification system for new members. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/verification).

#### Verification types

| Type                       | Description                                                                                                                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Image Captcha (default)    | Users click a "Verify Me" button in the verification channel. An ephemeral message with a distorted captcha image is shown. They click "Enter Solution" to open a dialog where they type the answer.                                           |
| Image Captcha (DM, legacy) | The original DM-based captcha flow. The bot sends a captcha image via DM and the user replies there. The verification channel doubles as a fallback for users with DMs disabled.                                                               |
| Word                       | Users click "Verify Me" and a dialog opens with a word they must retype. Difficulty controls word length and obscurity.                                                                                                                        |
| Math                       | Users click "Verify Me" and a dialog opens with an arithmetic problem to solve. Difficulty controls operand size and the operators used.                                                                                                       |
| Manual                     | When a member joins, they receive a DM explaining what happens next, and your staff instantly get an approval request with **Approve** / **Deny** buttons in the verification log channel - no waiting for the member to click anything first. |
| Button                     | Users click "Verify Me" and are instantly verified. No challenge, no retries, no cooldowns - useful when you only want a one-click opt-in.                                                                                                     |

#### Configuration

| Field                                    | Description                                                                                                                                                                                                                                                                        |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled?                                 | Enable or disable the verification system.                                                                                                                                                                                                                                         |
| Role for users with pending verification | Role assigned to users before they complete verification.                                                                                                                                                                                                                          |
| Role for users that passed verification  | Role assigned to users after successful verification.                                                                                                                                                                                                                              |
| Verification Log Channel                 | Channel where verification actions are logged and where manual approval requests appear.                                                                                                                                                                                           |
| Type of verification                     | How new members verify. One of **Image Captcha** (in-channel image), **Image Captcha (DM)** (legacy, sent via DM), **Word** (retype a shown word), **Math** (solve an arithmetic problem), **Manual** (a moderator approves each member), or **Button** (one click, no challenge). |
| Challenge difficulty                     | Difficulty of the verification challenge: easy, medium, or hard. Applies to Image Captcha, Image Captcha (DM), Word, and Math. Ignored for Manual and Button.                                                                                                                      |
| Action on failure of verification        | Action taken when a user exhausts all verification attempts: kick, quarantine, ban, or mute (timeout).                                                                                                                                                                             |
| Verification Channel                     | Channel where the "Verify Me" button is displayed. For the legacy DM type, serves as a fallback for users with DMs disabled.                                                                                                                                                       |
| Maximum verification attempts            | How many attempts a user gets before the failure action is applied. Applies to Image Captcha, Image Captcha (DM), Word, and Math. Default: 3.                                                                                                                                      |
| Cooldown between retries                 | How long a user must wait between verification attempts (e.g., 5m, 10m). Default: 5m.                                                                                                                                                                                              |
| Punishment duration                      | Duration for mute or quarantine punishment (e.g., 1h, 1d). Only applies when action on fail is mute or quarantine. Default: 1h.                                                                                                                                                    |
| Cooldown message                         | Message shown while a user is in the retry cooldown.                                                                                                                                                                                                                               |
| Captcha-Message                          | Message shown with the captcha image.                                                                                                                                                                                                                                              |
| Manual-Verification-Message              | Message sent to users awaiting manual verification.                                                                                                                                                                                                                                |
| Captcha failed-Message                   | Message shown when a user fails verification.                                                                                                                                                                                                                                      |
| Captcha completed-Message                | Message shown when a user successfully completes verification.                                                                                                                                                                                                                     |
| Verification-Channel-Info-Message        | Introduction message displayed in the verification channel.                                                                                                                                                                                                                        |

#### Retry system

When using Image Captcha, Image Captcha (DM), Word, or Math verification, users get multiple attempts to verify. After each failed attempt, they must wait for the configured cooldown before trying again. Once all attempts are exhausted, the configured failure action (kick, ban, mute, or quarantine) is applied.

Manual verification has no retry counter (moderators re-review the request instead), and Button verification has nothing to fail.

The retry counter persists across bot restarts. If a user leaves and rejoins the server, their previous attempt count is preserved. A pending manual request is cancelled when a member leaves, and the matching approve/deny log message is disarmed, so a rejoining member is not locked out by a stale request.

### Lockdown {#configuration-lockdown}

In this configuration file, you set up the server-wide lockdown system. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/lockdown).

| Field                                               | Description                                                                                                                                                                                        |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable lockdown system?                             | Enables the `/moderate lockdown` command and automatic lockdown triggers.                                                                                                                          |
| Lockdown log channel                                | Channel for detailed lockdown log entries. Falls back to the moderation log channel if not set.                                                                                                    |
| Send message in affected channels?                  | If enabled, a message is sent in affected channels when lockdown is activated or lifted.                                                                                                           |
| Channels for lockdown messages                      | Specific text channels where lockdown and lift messages are sent. Leave empty to send messages in all affected channels. Permissions are still changed in all channels regardless of this setting. |
| Lockdown activation message                         | Message sent in affected channels when lockdown is activated. Supports `%reason%` and `%user%`.                                                                                                    |
| Lockdown lifted message                             | Message sent in affected channels when lockdown is lifted. Supports `%user%`.                                                                                                                      |
| Auto-lift lockdown after (minutes, 0 = manual only) | Automatically lift the lockdown after the specified number of minutes. Set to 0 for manual-only.                                                                                                   |
| Auto-lockdown on join raid?                         | Automatically activate lockdown when the anti-join-raid system is triggered.                                                                                                                       |
| Auto-lockdown on join-gate violations?              | Automatically activate lockdown when the join-gate system is triggered.                                                                                                                            |
| Auto-lockdown on spam detection?                    | Automatically activate lockdown when the anti-spam system is triggered.                                                                                                                            |

### Messages {#configuration-strings}

In this configuration file, you can customize all messages sent by the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/strings).

| Field                        | Description                                                                                                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| No Permissions               | Message shown when a moderator lacks the required capability. Supports `%required_level%`.                                                            |
| User Not Found               | Message shown when a provided user ID is invalid.                                                                                                     |
| Missing Reason               | Message shown when a reason is required but not provided.                                                                                             |
| Target Is a Moderator        | Message shown when a moderator tries to act on another moderator.                                                                                     |
| Report Submitted             | Confirmation sent to users after submitting a report. Supports `%user%` and `%mURL%`.                                                                 |
| Mute Message                 | DM sent to muted users. Supports `%user%` and `%reason%`.                                                                                             |
| Channel Mute Message         | DM sent to channel-muted users. Supports `%user%`, `%reason%`, and `%channel%`.                                                                       |
| Channel Unmute Message       | DM sent when a channel mute is removed. Supports `%user%`, `%reason%`, and `%channel%`.                                                               |
| Temporary Mute Message       | DM sent to temporarily muted users. Supports `%user%`, `%reason%`, and `%date%`.                                                                      |
| Quarantine Message           | DM sent to quarantined users. Supports `%user%` and `%reason%`.                                                                                       |
| Temporary Quarantine Message | DM sent to temporarily quarantined users. Supports `%user%`, `%reason%`, and `%date%`.                                                                |
| Unquarantine Message         | DM sent when quarantine is removed. Supports `%user%` and `%reason%`.                                                                                 |
| Unmute Message               | DM sent to unmuted users. Supports `%user%` and `%reason%`.                                                                                           |
| Kick Message                 | DM sent to kicked users. Supports `%user%` and `%reason%`.                                                                                            |
| Ban Message                  | DM sent to banned users. Supports `%user%` and `%reason%`.                                                                                            |
| Temporary Ban Message        | DM sent to temporarily banned users. Supports `%user%`, `%reason%`, and `%date%`.                                                                     |
| Warn Message                 | DM sent to warned users. Supports `%user%` and `%reason%`.                                                                                            |
| Duration Changed Message     | DM sent when a moderator [edits how long](#edit-duration) a temporary punishment lasts. Supports `%user%`, `%reason%`, and `%date%` (the new expiry). |
| Channel Lock Message         | Message sent in a channel when it is locked. Supports `%user%` and `%reason%`.                                                                        |
| Channel Unlock Message       | Message sent in a channel when it is unlocked. Supports `%user%`.                                                                                     |

## Troubleshooting {#troubleshooting}

- **The bot says the moderator does not have permissions**: Make sure the moderator's role is assigned to a [moderation level](#configuration-modlevels) that grants the action's capability. A level that only has "Warn members" cannot mute, kick, or ban.
- **The quarantine command does not work**: Ensure the quarantine role is configured and that the bot's role is above the quarantine role in the role hierarchy. The bot needs "Manage Roles" permission.
- **Bans/kicks fail**: The bot needs "Ban Members" and "Kick Members" permissions. The bot's highest role must also be above the target user's highest role.
- **Anti-spam is not detecting spam**: Verify that anti-spam is enabled overall, that the specific detector you expect (for example Link Spam or Text Abuse) is turned on, and that the channel is not whitelisted. Also check that the user's role is not whitelisted or granted "Bypass automod".
- **Invite/scam link detection is not working**: Ensure the "Action on invite" or "Action on Scam-Link" is set to something other than "none". Check that the channel is not whitelisted.
- **Verification DMs fail**: Some users have DMs disabled. If you set up a "Restart Verification-Channel", users can retry their verification after enabling DMs.
- **Lockdown command is not available**: The lockdown system must be enabled in the [Lockdown Configuration](#configuration-lockdown) before the `/moderate lockdown` command appears.
- **Native Discord actions are not being logged**: Enable "Import native moderation actions" (and the per-type toggles), and make sure the bot has the "View Audit Log" permission. Only live actions are recorded.
- **Anti-grief quarantined a moderator**: This is the intended behavior when a moderator exceeds the configured limits. Review and adjust the limits if needed. Note that anti-grief only counts actions performed through the moderation module; abuse committed with Discord's own tools does not trip it, even though those actions can be recorded via [native moderation import](#native-import).

## Stored data {#data-usage}

The following data is being stored for moderation actions:

- The user ID of the victim and the moderator
- The type of action (warn, mute, kick, ban, quarantine, etc.)
- The reason and, when enabled, the custom case title
- Any linked involved-user IDs (reference-only)
- Proof image references archived to the file library
- Case events such as reason edits and duration changes
- Additional data (such as saved roles for quarantine)
- The expiration date (for temporary actions)
- Metadata about the entry (date when created and last updated)

The following data is stored for user notes:

- The user ID
- All notes (including note content, author ID, and timestamps)
- Metadata about the entry (date when created and last updated)

The following data is stored for lockdown state:

- Whether the lockdown is active
- The reason and who triggered it
- Whether it was automatic
- A backup of channel permissions for restoration
- Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
