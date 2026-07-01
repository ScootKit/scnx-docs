# Anti-Nuke Protection

Detect and respond to destructive server actions (nuking) with configurable thresholds, automatic countermeasures, and undo recovery.

<ModuleOverview moduleName="anti-nuke" />

:::warning
**Anti-nuke cannot protect against users who can reconfigure it.** Anyone with the Discord Administrator permission can run `/anti-nuke whitelist add` to whitelist themselves or an accomplice. Anyone with access to the SCNX dashboard for this bot (the server owner, co-owners, or Trusted Admins with the "Change and Reload Configuration" permission) can also:

* Add users to the **Exempt Users** list.
* Raise thresholds, disable action types, or change the **Response Action** to `alert`.
* Reset the module database, wiping action records, snapshots, and undo history.
* Disable the module entirely.

Anti-nuke is designed to slow down compromised accounts and rogue bots before they cause catastrophic damage — it cannot stop someone who has legitimate configuration access and acts deliberately. Only grant Administrator, Co-Owner, or Custom-Bot configuration permissions to people you actually trust.
:::

## Features {#features}

* Detects 19 different types of destructive server actions, including mass channel/role deletion, mass bans/kicks, permission escalation, webhook spam, and more.
* Hybrid detection system using both gateway events (instant detection) and audit log entries (catch-all backup) with automatic deduplication.
* Configurable per-action thresholds: set how many actions of each type within a sliding time window trigger a response.
* Four response actions: alert only, strip all roles, ban the executor, or strip only dangerous permissions.
* Temporary whitelist system to allow trusted users to perform bulk actions without triggering a response (e.g., during planned restructures).
* Undo system to reverse damage caused by a nuke event — restores deleted channels, roles, emojis, threads, webhooks, guild settings, channel permission overwrites, role permissions, and mass-role-removal changes from stored snapshots. Member kicks, member prunes, sticker deletions, and integration creations cannot be automatically reversed.
* All detection data is stored in the database (not in-memory), ensuring crash safety — if the bot restarts during a nuke, incomplete events are flagged for manual review.
* Permanently exempt specific users from detection.
* Detailed logging of all detected events to a configurable log channel.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=anti-nuke) on your server.
2. Open the [Configuration](https://scnx.app/glink?page=bot/configuration?file=anti-nuke%7Cconfiguration) and set the **Log Channel** where anti-nuke alerts will be sent.
3. Choose your preferred **Response Action** — this determines what happens to the user who triggered a nuke detection:
   * **alert**: Only send an alert to the log channel. No action is taken against the user.
   * **strip-roles** (default): Remove all roles from the user, preventing further damage.
   * **ban**: Ban the user from the server.
   * **strip-dangerous-permissions**: Remove dangerous permissions from the user's roles. The stripped permissions are Administrator, Manage Channels, Manage Roles, Ban Members, Kick Members, Manage Guild, and Manage Webhooks.
4. Optionally add users to the **Exempt Users** list if they should never trigger anti-nuke detection (e.g., the server owner).
5. Review the [Thresholds configuration](https://scnx.app/glink?page=bot/configuration?file=anti-nuke%7Cthresholds) and adjust limits for each action type as needed for your server.
6. Make sure the bot has the following permissions: **Administrator** (recommended), or at minimum **View Audit Log**, **Manage Roles**, **Ban Members**, **Manage Channels**, **Manage Webhooks**, **Manage Guild Expressions**, **View Channel**, **Send Messages**, and **Embed Links**.
7. Ensure the bot's role is positioned as high as possible in the role hierarchy — the bot can only strip roles or ban users whose highest role is below the bot's role.

## Usage {#usage}

### How detection works {#detection}

The anti-nuke system runs entirely in the background. When a user performs a destructive action (e.g., deleting a channel), the bot:

1. Records the action in the database with a snapshot of the affected resource.
2. Checks how many actions of the same type this user has performed within the configured time window.
3. If the threshold is exceeded, the configured response action is executed and an alert is sent to the log channel.

Detection uses a hybrid approach: gateway events provide instant detection, while audit log entries serve as a catch-all backup. The system automatically deduplicates between the two paths so actions are never double-counted.

### Temporary whitelists {#whitelists}

Before performing planned bulk actions (e.g., reorganizing channels or cleaning up roles), administrators can temporarily whitelist a user. Whitelisted users' actions are still recorded, but thresholds are not evaluated and no response action is triggered for the specified duration.

* Use `/anti-nuke whitelist add` to create a temporary whitelist entry with a duration and reason.
* Use `/anti-nuke whitelist remove` to revoke a whitelist entry early.
* Use `/anti-nuke whitelist list` to view all active whitelist entries.

Whitelist entries expire automatically and are cleaned up on bot restart.

### Undoing damage {#undo}

If a nuke is detected, the bot stores snapshots of affected resources (channel configurations, role settings, emoji images, etc.). Administrators can use the undo system to attempt to reverse the damage:

1. Run `/anti-nuke undo` to see a list of recent nuke events that can be undone.
2. Select the event from the dropdown menu.
3. The bot will attempt to restore all affected resources using the stored snapshots.

:::warning
Undo is a best-effort recovery. Some data cannot be restored — message history in deleted channels is lost, and the following action types have no automated undo: member kicks, member prunes, sticker deletions, and integration creations. The undo system works best when used promptly after detection.
:::

### Crash safety {#crash-safety}

All detection data is persisted to the database immediately. If the bot crashes or restarts during a nuke event:

* Incomplete response actions are flagged and reported in the log channel on restart.
* Snapshot data is preserved for undo recovery.
* Action tracking records linked to un-resolved nuke events are retained until the event is undone or manually resolved.

## Tracked action types {#action-types}

| Action Type                   | Description                                           | Default Threshold |
|-------------------------------|-------------------------------------------------------|-------------------|
| Channel Deletion              | Channels being deleted                                | 3 in 60s          |
| Channel Creation              | Channels being created in bulk                        | 5 in 60s          |
| Role Deletion                 | Roles being deleted                                   | 3 in 60s          |
| Role Creation                 | Roles being created in bulk                           | 5 in 60s          |
| Member Bans                   | Members being banned                                  | 5 in 120s         |
| Member Kicks                  | Members being kicked                                  | 5 in 120s         |
| Webhook Creation              | Webhooks being created                                | 3 in 60s          |
| Webhook Deletion              | Webhooks being deleted                                | 3 in 60s          |
| Emoji Deletion                | Emojis being deleted                                  | 5 in 60s          |
| Sticker Deletion              | Stickers being deleted                                | 3 in 60s          |
| Permission Escalation         | Dangerous permissions being added to roles            | 2 in 120s         |
| Mass Role Removal             | Roles being removed from members                      | 5 in 120s         |
| Bot Additions                 | Bots being added to the server                        | 3 in 120s         |
| Webhook Spam                  | Webhook messages being sent in bulk                   | 10 in 30s         |
| Server Settings               | Server name, icon, vanity URL, or description changes | 3 in 60s          |
| Channel Permission Overwrites | Channel permissions being modified                    | 5 in 60s          |
| Member Prune                  | Member prune actions                                  | 1 in 120s         |
| Thread Deletion               | Threads being deleted                                 | 5 in 60s          |
| Integration Creation          | Integrations being added                              | 2 in 120s         |

Each action type can be individually enabled/disabled and has its own threshold and time window in the [Thresholds configuration](#configuration-thresholds).

## Commands {#commands}

<SlashCommandExplanation />

| Command                                                                    | Description                                                                        |
|----------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| `/anti-nuke whitelist add user:<User> duration:<String> [reason:<String>]` | Add a temporary whitelist entry. Duration supports formats like `30m`, `2h`, `1d`. |
| `/anti-nuke whitelist remove user:<User>`                                  | Remove an active whitelist entry for a user.                                       |
| `/anti-nuke whitelist list`                                                | List all currently active whitelist entries.                                       |
| `/anti-nuke undo`                                                          | Show recent nuke events and select one to undo.                                    |
| `/anti-nuke status`                                                        | Show current anti-nuke system status and statistics.                               |

All commands require the **Administrator** permission.

## Configuration {#configuration}

### General Configuration {#configuration-general}

Configure the general settings of the anti-nuke system. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=anti-nuke%7Cconfiguration).

| Field                       | Description                                                                                          |
|-----------------------------|------------------------------------------------------------------------------------------------------|
| Log Channel                 | Channel where anti-nuke alerts and event logs are sent.                                              |
| Response Action             | What to do when a nuke is detected: `alert`, `strip-roles`, `ban`, or `strip-dangerous-permissions`. |
| Exempt Users                | Users who are completely exempt from anti-nuke detection.                                            |
| Snapshot Retention (days)   | How long to keep resource snapshots for undo recovery (default: 30 days).                            |
| Action Log Retention (days) | How long to keep individual action tracking records (default: 7 days).                               |

### Thresholds {#configuration-thresholds}

Configure detection thresholds for each action type. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=anti-nuke%7Cthresholds).

Each action type has three settings:

| Field               | Description                                                            |
|---------------------|------------------------------------------------------------------------|
| Track [Action Type] | Enable or disable detection for this action type.                      |
| Max [Action Type]   | Number of actions within the time window before triggering a response. |
| Timeframe (seconds) | The sliding time window in seconds used to count actions.              |

## Troubleshooting {#troubleshooting}

<details>
  <summary>The bot is not detecting nuke actions</summary>
  <ul>
    <li>Make sure the module is enabled and the bot has the <code>View Audit Log</code> permission.</li>
    <li>Check that the relevant action type is enabled in the <a href="#configuration-thresholds">Thresholds configuration</a>.</li>
    <li>Ensure the user performing the actions is not in the <strong>Exempt Users</strong> list and does not have an active whitelist entry.</li>
    <li>Actions performed by the server owner are still detected and logged, but no automated response can be taken — Discord does not allow bots to ban or strip roles from the server owner. See the next section for details.</li>
  </ul>
</details>

<details>
  <summary>The bot detected a nuke but did not take action</summary>
  <ul>
    <li>Check that the <strong>Response Action</strong> is set to something other than <code>alert</code>.</li>
    <li>Ensure the bot's role is positioned above the executor's highest role in the role hierarchy. The bot cannot strip roles from or ban users with a higher role.</li>
    <li>If the executor is the server owner, the bot will only send an alert — Discord does not allow bots to take action against the server owner.</li>
  </ul>
</details>

<details>
  <summary>The bot is triggering false positives</summary>
  <ul>
    <li>Increase the threshold values in the <a href="#configuration-thresholds">Thresholds configuration</a> for the relevant action type.</li>
    <li>Use <code>/anti-nuke whitelist add</code> to temporarily whitelist users before performing planned bulk actions.</li>
    <li>Add trusted administrators to the <strong>Exempt Users</strong> list in the <a href="#configuration-general">General Configuration</a>.</li>
  </ul>
</details>

<details>
  <summary>The undo command is not restoring everything</summary>
  <ul>
    <li>Undo is best-effort. Some data like message history in deleted channels cannot be restored.</li>
    <li>Ensure snapshots have not expired — check the <strong>Snapshot Retention</strong> setting in the configuration.</li>
    <li>The bot needs sufficient permissions to recreate resources (e.g., <code>Manage Channels</code> to recreate deleted channels).</li>
  </ul>
</details>

<details>
  <summary>I see "Incomplete Nuke Response Detected" in the log channel</summary>
  <ul>
    <li>This means the bot restarted before finishing a response to a detected nuke. Check if the executor still has access to the server and take manual action if needed.</li>
    <li>You can use <code>/anti-nuke undo</code> to attempt to reverse any damage that was done.</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is stored by this module:

* **Action records**: The action type, target ID, executor ID, and timestamp of every tracked destructive action. Automatically cleaned up after the configured retention period (default: 7 days).
* **Snapshots**: Detailed resource data (channel settings, role configurations, emoji images, etc.) for undo recovery. Automatically cleaned up after the configured retention period (default: 30 days).
* **Nuke events**: Records of detected nuke incidents, including the executor, action type, action count, response taken, and whether the event has been undone.
* **Whitelist entries**: User ID, granting user, reason, and expiration time for temporary whitelist entries. Automatically cleaned up on expiration.

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
