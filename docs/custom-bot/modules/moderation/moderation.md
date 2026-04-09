# Moderation & Security

Advanced security and moderation system with tons of features for keeping your server safe.

<ModuleOverview moduleName="moderation" />

## Features {#features}

* Comprehensive moderation commands: [warn](#warn), [mute](#mute), [kick](#kick), [ban](#ban), [quarantine](#quarantine), [channel-mute](#channel-mute), and [clear](#clear).
* Support for temporary bans, mutes, and quarantines with automatic expiration.
* [Channel lock and unlock](#lock-unlock) commands to restrict messaging in a channel.
* [Server-wide lockdown](#lockdown) system that locks all channels at once, with automatic triggers. Optionally send lockdown messages to specific channels only.
* Smarter invite detection: Discord invite links are resolved before taking action, and invites to your own server are automatically allowed.
* [User reporting](#report) system that allows members to report other users with proof.
* [Moderator notes](#notes) system to track information about users.
* View all moderation [actions history](#actions) for any user.
* [Revoke warnings](#commands) to remove previous warns.
* [Auto-moderation](#configuration-config) for invite links, scam links, and blacklisted words.
* Automated punishments based on warning count (e.g., auto-ban after X warns).
* [Anti-Spam](#anti-spam) system detecting message spam, duplicate messages, excessive pings, and mass pings.
* [Anti-Join-Raid](#anti-join-raid) system detecting mass joins.
* [Join Gate](#join-gate) to block suspicious accounts based on account age and profile picture.
* [Anti-Grief](#anti-grief) system to quarantine moderators who abuse their permissions.
* [Verification](#verification) system requiring new members to complete an image captcha, a word or math challenge, a one-click button, or a manual moderator review.
* Automatic warn expiration after a configurable period.
* Customizable messages for every moderation action.
* Four moderator permission levels to control who can perform which actions.
* Optional nickname changes on mute or quarantine.
* All actions are logged to a configurable log channel.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=moderation) on your server.
2. Open the [Configuration](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/config) and set the **Log-Channel** where moderation actions will be logged.
3. Configure your **moderator roles** at the appropriate levels:
   * **Level 1**: Can warn.
   * **Level 2**: Can warn, mute, unmute, lock, unlock, channel-mute, and remove channel-mute.
   * **Level 3**: Can warn, mute, unmute, kick, and clear.
   * **Level 4**: Can warn, mute, unmute, kick, clear, ban, and unban.
4. All moderators also need to be able to execute the `/moderate` command. Configure this in your Discord server settings (Server Settings > Integrations).
5. If you want to use quarantine, set the **Quarantine-Role** in the configuration. This role should have restricted permissions, and the bot's role should be placed above it in the role hierarchy.
6. Make sure the bot has the following permissions: **Manage Roles**, **Kick Members**, **Ban Members**, **Moderate Members**, **Manage Channels**, **Manage Messages**, **View Channel**, **Send Messages**, and **Embed Links**.
7. Optionally configure the additional security systems ([Anti-Spam](#anti-spam), [Anti-Join-Raid](#anti-join-raid), [Join Gate](#join-gate), [Anti-Grief](#anti-grief), [Verification](#verification), and [Lockdown](#lockdown)) in their respective configuration files.

## Usage {#usage}

### Moderation commands {#moderation-commands}

Moderators use the `/moderate` command with various subcommands to perform actions. Each action is logged in the configured log channel. Users receive a DM notification when a moderation action is taken against them (if their DMs are open).

#### Warn {#warn}

Warns a user. The warning is recorded and can trigger automatic actions if [automod thresholds](#configuration-config) are configured. Requires moderator level 1 or higher.

#### Mute {#mute}

Mutes a user using Discord's built-in timeout feature. A duration is required (maximum 28 days). If no duration is set by the moderator, the configured default mute duration is used. Requires moderator level 2 or higher.

#### Kick {#kick}

Kicks a user from the server. The user can rejoin using an invite link. Requires moderator level 3 or higher.

#### Ban {#ban}

Bans a user from the server. Optionally specify a duration for a temporary ban and the number of days of messages to delete. Works even if the user is not currently on the server. Requires moderator level 4 or higher.

#### Quarantine {#quarantine}

Quarantines a user by assigning them the quarantine role and optionally removing all their other roles (roles are saved and restored on unquarantine). Optionally specify a duration for automatic removal. Requires moderator level 4 or higher.

#### Channel-mute {#channel-mute}

Mutes a user in the current channel only by modifying the channel's permission overwrites. This prevents the user from sending messages in that specific channel. Requires moderator level 2 or higher.

#### Clear {#clear}

Deletes a specified number of recent messages from the current channel (default: 5). Requires moderator level 3 or higher.

#### Lock and Unlock {#lock-unlock}

Locks or unlocks the current channel, preventing or allowing the @everyone role from sending messages. A reason can be provided when locking. Requires moderator level 2 or higher.

### Lockdown {#lockdown}

The lockdown system allows you to lock all channels in the server at once. This can be triggered manually by moderators or automatically when security systems (anti-join-raid, join-gate, or anti-spam) are triggered. The lockdown system must be enabled in the [Lockdown Configuration](#configuration-lockdown) first.

When a lockdown is activated, the bot saves the current permission state of all channels, then revokes send-message permissions for the @everyone role. When the lockdown is lifted, the original permissions are restored. An optional auto-lift timer can automatically end the lockdown after a specified number of minutes.

You can optionally configure specific channels where lockdown and lift messages are sent instead of sending them in every affected channel. Permissions are still changed in all channels regardless of this setting.

### Reporting {#report}

Any user can report another user using the `/report` command. The report includes the reason, an optional proof attachment, and an encrypted snapshot of the current messages in the channel. Reports are sent to the configured report channel (or the log channel if no report channel is set). Configured roles are pinged when a report is received.

### Notes {#notes}

Moderators can create, view, edit, and delete notes about users. Notes are useful for tracking information about users across moderation actions. All moderators with access to the `/moderate` command can manage notes.

### Actions history {#actions}

Moderators can view all past moderation actions taken against a user, including warns, mutes, kicks, bans, and quarantines.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description |
|---------|-------------|
| `/moderate warn user:<User> [reason:<Text>] [proof:<Attachment>]` | Warns a user. |
| `/moderate mute user:<User> duration:<Duration> [reason:<Text>] [proof:<Attachment>]` | Mutes (times out) a user for the specified duration. |
| `/moderate unmute user:<User> [reason:<Text>]` | Unmutes a user. |
| `/moderate kick user:<User> [reason:<Text>] [proof:<Attachment>]` | Kicks a user from the server. |
| `/moderate ban user:<User> [reason:<Text>] [proof:<Attachment>] [duration:<Duration>] [days:<Number>]` | Bans a user. Optionally set a duration for a temporary ban and the number of days of messages to delete. |
| `/moderate unban id:<UserID> [reason:<Text>]` | Unbans a user by their user ID. Supports autocomplete. |
| `/moderate quarantine user:<User> [reason:<Text>] [duration:<Duration>]` | Quarantines a user by assigning the quarantine role. |
| `/moderate unquarantine user:<User> [reason:<Text>]` | Removes a user from quarantine and restores their previous roles. |
| `/moderate channel-mute user:<User> [reason:<Text>] [proof:<Attachment>]` | Mutes a user in the current channel only. |
| `/moderate remove-channel-mute user:<User> [reason:<Text>]` | Removes a channel mute from a user. |
| `/moderate clear [amount:<Number>]` | Deletes recent messages in the current channel (default: 5). |
| `/moderate lock [reason:<Text>]` | Locks the current channel. |
| `/moderate unlock` | Unlocks the current channel. |
| `/moderate lockdown enable:<Boolean> [reason:<Text>]` | Activates or lifts the server-wide lockdown (only available if lockdown system is enabled). |
| `/moderate notes view user:<User>` | View all notes for a user. |
| `/moderate notes create user:<User> notes:<Text>` | Create a new note for a user. |
| `/moderate notes edit user:<User> note-id:<Number> notes:<Text>` | Edit an existing note. |
| `/moderate notes delete user:<User> note-id:<Number>` | Delete a note. |
| `/moderate actions user:<User>` | View all past moderation actions for a user. |
| `/moderate revoke-warn warn-id:<ID> [reason:<Text>]` | Revoke a warning by its ID. Supports autocomplete. |
| `/report user:<User> reason:<Text> [proof:<Attachment>]` | Report a user to the moderation team. |

Note: Whether `reason` and `proof` parameters are required depends on the "Force moderators to set a reason" and "Force moderators to upload proof" configuration options.

## Configuration {#configuration}

### Configuration {#configuration-config}

In this configuration file, you set up the core moderation settings. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/config).

| Field | Description |
|-------|-------------|
| Log-Channel | Channel where moderation actions are logged. |
| Quarantine-Role | Role assigned to quarantined users. All other roles are removed (and saved for restoration). |
| Report-Channel | Channel where user reports are sent. Falls back to the log channel if not set. |
| Remove all roles on quarantine | If enabled, all roles are removed from a user when they are quarantined. Roles are saved and restored on unquarantine. |
| Moderator-Level 1 | Roles that can perform: Warn. |
| Moderator-Level 2 | Roles that can perform: Warn, Mute, Unmute, Lock, Unlock, Channel-mute, Remove Channel-Mute. |
| Moderator-Level 3 | Roles that can perform: Warn, Mute, Unmute, Kick, Clear. |
| Moderator-Level 4 | Roles that can perform: Warn, Mute, Unmute, Kick, Clear, Ban, Unban. |
| Roles to ping on reports | Roles that are pinged in the log/report channel when a user submits a report. |
| Force moderators to set a reason | If enabled, moderators must provide a reason for their actions. |
| Force moderators to upload proof | If enabled (and "Force reason" is also enabled), moderators must upload proof for their actions. |
| Action on invite | Action taken when a user posts a Discord invite link (none, warn, mute, kick, quarantine, or ban). |
| Action on Scam-Link | Action taken when a user posts a suspected scam link. |
| Level of Scam-Link-Detection | "confirmed" only filters verified scam domains; "suspicious" may include non-harmful domains. |
| Whitelisted channels for invite-ban | Channels or categories where invite blocking is disabled. |
| Whitelisted roles for invite-ban | Roles that are allowed to bypass invite blocking. |
| Allowed invite guild IDs | Server IDs whose invite links are allowed and will not trigger moderation. Invites to your own server are always allowed automatically. |
| Blacklisted words | Words that are blocked in messages. |
| Action on blacklisted Word | Action taken when a user posts a blacklisted word. |
| Automod | Define automatic actions (mute, kick, ban, quarantine) based on warning count. Format: key = number of warns, value = action (optionally with duration, e.g., "ban:7d"). |
| Default Mute-Duration | Default mute duration when none is specified. Also used for automod actions. Maximum 28 days. |
| Should warns be deleted automatically? | If enabled, warns are automatically removed after the configured expiration period. |
| Time after which warns will be automatically removed | Duration after which warns expire (e.g., "3 months", "1y", "2w"). |
| Change nicknames on Mute- / Quarantine | If enabled, users will be renamed when muted or quarantined. |
| New nickname on mute | Nickname template when a user is muted. Supports `%nickname%` (original nickname). |
| Nickname during quarantine | Nickname template when a user is quarantined. Supports `%nickname%` (original nickname). |

### Anti-Spam {#anti-spam}

In this configuration file, you set up the anti-spam system. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/antiSpam).

| Field | Description |
|-------|-------------|
| Enabled? | Enable or disable the anti-spam system. |
| Timeframe (in seconds) | Time window in which messages are tracked for spam detection. |
| Maximal count of messages in timeframe | Number of messages allowed in the timeframe before triggering anti-spam. |
| Maximal count of duplicated messages in timeframe | Number of identical messages allowed in the timeframe. |
| Maximal count of pings in timeframe | Number of pings (including replies) allowed in the timeframe. |
| Maximal count of mass-pings in timeframe | Number of mass pings (@everyone, @here, role pings) allowed in the timeframe. |
| Action | Action to take when spam is detected (mute, warn, kick, quarantine, or ban). |
| Send Chat-Message | If enabled, the bot sends a message in the channel when anti-spam is triggered. |
| Message | The message sent when anti-spam is triggered. Supports `%userid%` and `%reason%`. |
| Whitelisted Channels | Channels where anti-spam is disabled. |
| Whitelisted roles | Roles that are exempt from anti-spam detection. |

### Anti-Join-Raid {#anti-join-raid}

In this configuration file, you set up the anti-join-raid system. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/antiJoinRaid).

| Field | Description |
|-------|-------------|
| Enabled? | Enable or disable the anti-join-raid system. |
| Timeframe (in minutes) | Time window in which joins are tracked. |
| Maximal count of new users | Number of joins allowed in the timeframe before triggering the system. |
| Action | Action to take against users who trigger the system (mute, kick, quarantine, ban, or give-role). |
| Role | Role assigned to users when the action is "give-role". |
| Remove other roles | If enabled (and action is "give-role"), other roles are removed from the user after a short delay. |

### Join Gate {#join-gate}

In this configuration file, you set up the join gate. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/joinGate).

| Field | Description |
|-------|-------------|
| Enabled? | Enable or disable the join gate. |
| Filter all users | If enabled, actions are taken against all new users regardless of criteria. |
| Action | Action to take when a user fails the join gate (mute, kick, quarantine, ban, or give-role). |
| Role | Role assigned to users when the action is "give-role". |
| Remove other roles | If enabled (and action is "give-role"), other roles are removed from the user. |
| Minimum account age | Minimum account age in days required to pass the join gate. |
| Require profile picture | If enabled, users must have a profile picture set to pass the join gate. |
| Ignore bots | If enabled, bots are allowed to pass the join gate without restrictions. |

### Anti-Grief {#anti-grief}

In this configuration file, you set up the anti-grief system to prevent moderator abuse. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/antiGrief).

This feature automatically quarantines moderators who exceed configured limits for moderation actions within a timeframe. For this to work correctly, place your bot's role above all other roles and ensure the quarantine role is directly below it.

| Field | Description |
|-------|-------------|
| Enabled? | Enable or disable the anti-grief system. |
| Timeframe (in hours) | Time window in which moderation actions are counted. |
| Maximal amount of warns in the timeframe | Maximum warns a moderator can issue before being quarantined. |
| Maximal amount of mutes in the timeframe | Maximum mutes a moderator can issue before being quarantined. |
| Maximal amount of kicks in the timeframe | Maximum kicks a moderator can issue before being quarantined. |
| Maximal amount of bans in the timeframe | Maximum bans a moderator can issue before being quarantined. |

### Verification {#verification}

In this configuration file, you set up the verification system for new members. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/verification).

#### Verification types

| Type | Description |
|------|-------------|
| Image Captcha (default) | Users click a "Verify Me" button in the verification channel. An ephemeral message with a distorted captcha image is shown. They click "Enter Solution" to open a dialog where they type the answer. |
| Image Captcha (DM, legacy) | The original DM-based captcha flow. The bot sends a captcha image via DM and the user replies there. The verification channel doubles as a fallback for users with DMs disabled. |
| Word | Users click "Verify Me" and a dialog opens with a word they must retype. Difficulty controls word length and obscurity. |
| Math | Users click "Verify Me" and a dialog opens with an arithmetic problem to solve. Difficulty controls operand size and the operators used. |
| Manual | Users click "Verify Me" and their request is submitted for staff review. A moderator approves or denies them in the verification log channel. |
| Button | Users click "Verify Me" and are instantly verified. No challenge, no retries, no cooldowns — useful when you only want a one-click opt-in. |

#### Configuration

| Field | Description |
|-------|-------------|
| Enabled? | Enable or disable the verification system. |
| Role for users with pending verification | Role assigned to users before they complete verification. |
| Role for users that passed verification | Role assigned to users after successful verification. |
| Verification-Log | Channel where verification actions are logged. |
| Type of verification | How new members verify. One of **Image Captcha** (in-channel image), **Image Captcha (DM)** (legacy, sent via DM), **Word** (retype a shown word), **Math** (solve an arithmetic problem), **Manual** (a moderator approves each member), or **Button** (one click, no challenge). |
| Challenge difficulty | Difficulty of the verification challenge: easy, medium, or hard. Applies to Image Captcha, Image Captcha (DM), Word, and Math. Ignored for Manual and Button. |
| Action on failure of verification | Action taken when a user exhausts all verification attempts: kick, quarantine, ban, or mute (timeout). |
| Verification Channel | Channel where the "Verify Me" button is displayed. For the legacy DM type, serves as a fallback for users with DMs disabled. |
| Maximum verification attempts | How many attempts a user gets before the failure action is applied. Applies to Image Captcha, Image Captcha (DM), Word, and Math. Default: 3. |
| Cooldown between retries | How long a user must wait between verification attempts (e.g., 5m, 10m). Default: 5m. |
| Punishment duration | Duration for mute or quarantine punishment (e.g., 1h, 1d). Only applies when action on fail is mute or quarantine. Default: 1h. |
| Captcha-Message | Message shown with the captcha image. |
| Manual-Verification-Message | Message sent to users awaiting manual verification. |
| Captcha failed-Message | Message shown when a user fails verification. |
| Captcha completed-Message | Message shown when a user successfully completes verification. |
| Verification-Channel-Info-Message | Introduction message displayed in the verification channel. |

#### Retry system

When using Image Captcha, Image Captcha (DM), Word, or Math verification, users get multiple attempts to verify. After each failed attempt, they must wait for the configured cooldown before trying again. Once all attempts are exhausted, the configured failure action (kick, ban, mute, or quarantine) is applied.

Manual verification has no retry counter (moderators re-review the request instead), and Button verification has nothing to fail.

The retry counter persists across bot restarts. If a user leaves and rejoins the server, their previous attempt count is preserved.

### Lockdown {#configuration-lockdown}

In this configuration file, you set up the server-wide lockdown system. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/lockdown).

| Field | Description |
|-------|-------------|
| Enable lockdown system? | Enables the `/moderate lockdown` command and automatic lockdown triggers. |
| Lockdown log channel | Channel for detailed lockdown log entries. Falls back to the moderation log channel if not set. |
| Send message in affected channels? | If enabled, a message is sent in affected channels when lockdown is activated or lifted. |
| Channels for lockdown messages | Specific text channels where lockdown and lift messages are sent. Leave empty to send messages in all affected channels. Permissions are still changed in all channels regardless of this setting. |
| Lockdown activation message | Message sent in affected channels when lockdown is activated. Supports `%reason%` and `%user%`. |
| Lockdown lifted message | Message sent in affected channels when lockdown is lifted. Supports `%user%`. |
| Auto-lift lockdown after (minutes, 0 = manual only) | Automatically lift the lockdown after the specified number of minutes. Set to 0 for manual-only. |
| Auto-lockdown on join raid? | Automatically activate lockdown when the anti-join-raid system is triggered. |
| Auto-lockdown on join-gate violations? | Automatically activate lockdown when the join-gate system is triggered. |
| Auto-lockdown on spam detection? | Automatically activate lockdown when the anti-spam system is triggered. |

### Messages {#configuration-strings}

In this configuration file, you can customize all messages sent by the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=moderation%7Cconfigs/strings).

| Field | Description |
|-------|-------------|
| No permissions message | Message shown when a moderator lacks the required level. Supports `%required_level%`. |
| User not found message | Message shown when a provided user ID is invalid. |
| Missing reason message | Message shown when a reason is required but not provided. |
| Moderator protection message | Message shown when a moderator tries to act on another moderator. |
| Submitted report message | Confirmation sent to users after submitting a report. Supports `%user%` and `%mURL%`. |
| Mute message | DM sent to muted users. Supports `%user%` and `%reason%`. |
| Channel mute message | DM sent to channel-muted users. Supports `%user%`, `%reason%`, and `%channel%`. |
| Remove channel mute message | DM sent when a channel mute is removed. Supports `%user%`, `%reason%`, and `%channel%`. |
| Temporary mute message | DM sent to temporarily muted users. Supports `%user%`, `%reason%`, and `%date%`. |
| Quarantine message | DM sent to quarantined users. Supports `%user%` and `%reason%`. |
| Temporary quarantine message | DM sent to temporarily quarantined users. Supports `%user%`, `%reason%`, and `%date%`. |
| Unquarantine message | DM sent when quarantine is removed. Supports `%user%` and `%reason%`. |
| Unmute message | DM sent to unmuted users. Supports `%user%` and `%reason%`. |
| Kick message | DM sent to kicked users. Supports `%user%` and `%reason%`. |
| Ban message | DM sent to banned users. Supports `%user%` and `%reason%`. |
| Temporary ban message | DM sent to temporarily banned users. Supports `%user%`, `%reason%`, and `%date%`. |
| Warn message | DM sent to warned users. Supports `%user%` and `%reason%`. |
| Lock channel message | Message sent in a channel when it is locked. Supports `%user%` and `%reason%`. |
| Unlock channel message | Message sent in a channel when it is unlocked. Supports `%user%`. |

## Troubleshooting {#troubleshooting}

* **The bot says the moderator does not have permissions**: Make sure the moderator's role is assigned to the correct moderator level in the configuration. Level 1 can only warn; higher-level actions require higher levels.
* **The quarantine command does not work**: Ensure the quarantine role is configured and that the bot's role is above the quarantine role in the role hierarchy. The bot needs "Manage Roles" permission.
* **Bans/kicks fail**: The bot needs "Ban Members" and "Kick Members" permissions. The bot's highest role must also be above the target user's highest role.
* **Anti-spam is not detecting spam**: Verify that anti-spam is enabled and that the channel is not in the whitelisted channels list. Also check that the user does not have a whitelisted role.
* **Invite/scam link detection is not working**: Ensure the "Action on invite" or "Action on Scam-Link" is set to something other than "none". Check that the channel is not whitelisted.
* **Verification DMs fail**: Some users have DMs disabled. If you set up a "Restart Verification-Channel", users can retry their verification after enabling DMs.
* **Lockdown command is not available**: The lockdown system must be enabled in the [Lockdown Configuration](#configuration-lockdown) before the `/moderate lockdown` command appears.
* **Anti-grief quarantined a moderator**: This is the intended behavior when a moderator exceeds the configured limits. Review and adjust the limits if needed. Note that anti-grief currently only tracks actions performed through the moderation module, not native Discord actions.

## Stored data {#data-usage}

The following data is being stored for moderation actions:

* The user ID of the victim and the moderator
* The type of action (warn, mute, kick, ban, quarantine, etc.)
* The reason for the action
* Additional data (such as saved roles for quarantine)
* The expiration date (for temporary actions)
* Metadata about the entry (date when created and last updated)

The following data is stored for user notes:

* The user ID
* All notes (including note content, author ID, and timestamps)
* Metadata about the entry (date when created and last updated)

The following data is stored for lockdown state:

* Whether the lockdown is active
* The reason and who triggered it
* Whether it was automatic
* A backup of channel permissions for restoration
* Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
