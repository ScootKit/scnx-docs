# Anti-Nuke Protection

Detect and respond to destructive server actions (nuking) with configurable thresholds, automatic countermeasures, and undo recovery.

<ModuleOverview moduleName="anti-nuke" />

:::warning
**Anti-nuke cannot protect against users who can reconfigure it.** Access to the `/anti-nuke` commands (including `whitelist add`) is controlled by the **Exempt Users** list, not by Discord permissions. Separately, anyone with access to the SCNX dashboard for this bot (the server owner, co-owners, or Trusted Admins with the "Change and Reload Configuration" permission) can bypass anti-nuke entirely by:

* Adding themselves or an accomplice to the **Exempt Users** list (which also grants access to the `/anti-nuke` commands).
* Raising thresholds, disabling action types, or changing the **Response Action** to **Alert only**.
* Resetting the module database, wiping action records, snapshots, and undo history.
* Disabling the module entirely.

Anti-nuke is designed to slow down compromised accounts and rogue bots before they cause catastrophic damage. It cannot stop someone who has legitimate configuration access and acts deliberately. Only grant SCNX dashboard configuration access to people you actually trust.

**Before you rely on this module, read [Considerations and limitations](#considerations) in full.** It is a best-effort mitigation layer, not a guarantee, and it will not protect you in several important situations.
:::

## Features {#features}

* Detects 19 different types of destructive server actions, including mass channel/role deletion, mass bans/kicks, permission escalation, webhook spam, and more.
* Hybrid detection system using both gateway events (instant detection) and audit log entries (catch-all backup) with automatic deduplication.
* Configurable per-action thresholds: set how many actions of each type within a sliding time window trigger a response.
* Four response actions: alert only, strip all roles, ban the executor, or strip only dangerous permissions.
* Temporary whitelist system to allow trusted users to perform bulk actions without triggering a response (e.g., during planned restructures).
* Undo system to reverse damage caused by a nuke event, either with the **Undo** button on each alert or the `/anti-nuke undo` command. It restores deleted channels, roles, emojis, stickers, threads, webhooks, guild settings, channel permission overwrites, role permissions, and mass-role-removal changes from stored snapshots. Emoji and sticker recovery is best-effort and depends on the image having been archived. Member kicks, member prunes, and integration creations cannot be automatically reversed.
* All detection data is stored in the database (not in-memory), ensuring crash safety: if the bot restarts during a nuke, incomplete events are flagged for manual review.
* Permanently exempt specific users from detection.
* Detailed logging of all detected events to a configurable log channel.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=anti-nuke) on your server.
2. Open the [Configuration](https://scnx.app/glink?page=bot/configuration?file=anti-nuke%7Cconfiguration) and set the **Log Channel** where anti-nuke alerts will be sent.
3. Choose your preferred **Response Action**. This determines what happens to the user who triggered a nuke detection:
   * **Alert only**: Only send an alert to the log channel. No action is taken against the user.
   * **Strip all roles** (default): Remove all roles from the user, preventing further damage.
   * **Ban**: Ban the user from the server.
   * **Strip dangerous permissions**: Remove dangerous permissions from the user's roles. The stripped permissions are Administrator, Manage Channels, Manage Roles, Ban Members, Kick Members, Manage Guild, and Manage Webhooks. Because this edits the roles themselves, it affects every member who holds those roles, not only the executor.
4. Add trusted users to the **Exempt Users** list. Listed users never trigger anti-nuke detection, and this list is also the only gate for who may use the `/anti-nuke` commands and the alert **Undo** button (Discord permissions such as Administrator do not grant access on their own).
5. Review the [Thresholds configuration](https://scnx.app/glink?page=bot/configuration?file=anti-nuke%7Cthresholds) and adjust limits for each action type as needed for your server.
6. Make sure the bot has the following permissions: **Administrator** (recommended), or at minimum **View Audit Log**, **Manage Roles**, **Ban Members**, **Manage Channels**, **Manage Webhooks**, **Manage Guild Expressions**, **View Channel**, **Send Messages**, and **Embed Links**.
7. Ensure the bot's role is positioned as high as possible in the role hierarchy. The bot can only strip roles or ban users whose highest role is below the bot's role.

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

If a nuke is detected, the bot stores snapshots of affected resources (channel configurations, role settings, emoji images, etc.). Users on the **Exempt Users** list can reverse the damage in one of two ways:

* **From the alert:** click the **Undo** button on the "Nuke Detected" alert, then confirm. Once complete, this also reverses the response taken against the executor (for example, unbanning them or restoring their stripped roles).
* **With the command:** run `/anti-nuke undo`, then select the event from the dropdown menu.

Either way, the bot attempts to restore all affected resources using the stored snapshots and reports what was restored and what could not be.

:::warning
Undo is a best-effort recovery. Some data cannot be restored: message history in deleted channels is lost, a server's icon and vanity URL are not restored (its name and description are), and member kicks, member prunes, and integration creations have no automated undo. Emoji and sticker recovery depends on the image having been archived. The undo system works best when used promptly after detection.
:::

### Crash safety {#crash-safety}

All detection data is persisted to the database immediately. If the bot crashes or restarts during a nuke event:

* Incomplete response actions are flagged and reported in the log channel on restart.
* Snapshot data is preserved for undo recovery.
* Action tracking records linked to unresolved nuke events are retained until the event is undone or manually resolved.

## Considerations and limitations {#considerations}

:::danger Read this before relying on anti-nuke
Anti-nuke is a **best-effort mitigation layer, not a guarantee of safety.** It watches for destructive patterns and responds according to your thresholds, but it can be evaded, misconfigured, or simply offline at the wrong moment. Treat it as one layer in a defence-in-depth setup and nothing more. Enabling this module is done at your own risk.
:::

### It is not a replacement for good security hygiene {#considerations-hygiene}

Anti-nuke does not remove the need for any of the following, and is far weaker without them:

- Sound Discord role and channel permission hygiene (do not hand out Administrator freely).
- Verified, trusted staff, ideally with enforced 2FA.
- Regular audit-log reviews.
- Independent, off-platform backups of anything you cannot afford to lose.

### Detection limits {#considerations-detection}

- The bot relies on Discord's gateway events and audit log. Some actions produce no audit-log entry, some are reported with missing or delayed executor information, and Discord rate limits or outages can drop or delay events. Any such event may go undetected.
- Thresholds are time-windowed counters. An attacker acting slowly enough to stay under your thresholds, or using actions that are not tracked, will not trigger a response.
- False positives are possible. Legitimate bulk operations by staff can trip thresholds and cause the bot to strip roles, ban, or alert on people you did not intend. Tune thresholds and use the **Exempt Users** list or `/anti-nuke whitelist add` before planned bulk work.
- Misconfiguration silently reduces protection. Disabled action types, raised thresholds, a **Response Action** of **Alert only**, an unset log channel, an overly broad Exempt Users list, or a short snapshot-retention window all weaken or disable protection without surfacing a visible error.

### Downtime and availability {#considerations-downtime}

Anti-nuke **only works while the bot is running, connected to Discord, and actively receiving events.** During any period in which the bot is offline, restarting, updating, disconnected, rate-limited, or otherwise not processing events:

- No detection of any kind occurs.
- No response actions are executed.
- No snapshots are written.
- Actions taken during that period are **not** retroactively evaluated once the bot returns.

Downtime can be caused by Discord outages, gateway instability or rate limits, network or hosting incidents, SCNX platform maintenance, module updates and restarts, database issues, or bugs. SCNX makes no uptime guarantee for this module or the bot as a whole.

### Hierarchy and scope {#considerations-hierarchy}

- The bot **cannot act against the server owner** under any circumstances. If the owner account is compromised, this module will not protect you.
- The bot **cannot act on users whose highest role is at or above the bot's own highest role.** Keep the bot's role near the top of the role list, or response actions will silently fail.
- The bot cannot act on users it cannot see (for example, someone who has already left), and cannot reverse actions performed by Discord itself.

### Undo limitations {#considerations-undo}

Undo restores only the resources the bot snapshotted before the event. It is a partial recovery aid, **not** a backup, and it cannot recover:

- Deleted message content or message history of any kind.
- Kicks or bans that were already lifted, pruned members, or anything outside the configured snapshot-retention window.
- Emojis or stickers whose image could not be archived, and resource types with no automated undo (member kicks, member prunes, integration creations).
- Anything Discord does not expose to bots (server boosts, vanity URL, partnership or discovery settings, and similar).

### Configuration bypass risk {#considerations-bypass}

Anyone with dashboard configuration access for this bot can fully bypass anti-nuke, as described in the warning at the top of this page. The **Exempt Users** list is also the only gate for `/anti-nuke` command access. Anti-nuke cannot protect against someone who already has the ability to change its configuration, so review and minimise who holds server ownership, co-owner status, or the "Change and Reload Configuration" permission.

### Your responsibility {#considerations-responsibility}

You are solely responsible for your threshold configuration, response-action choice, Exempt Users list, log channel, snapshot retention, role hierarchy, staff vetting, 2FA enforcement, dashboard access control, and off-platform backups, as well as for testing your configuration and keeping it reviewed as your server grows. Anti-nuke is provided as-is and as-available, without warranty of any kind, and SCNX accepts no liability for damage, data loss, missed or delayed detections, false positives, downtime, or configuration bypass, regardless of cause.

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

All commands (and the alert **Undo** button) are restricted to users on the **Exempt Users** list configured in the [General Configuration](#configuration-general). Discord permissions such as Administrator do not grant access on their own.

## Configuration {#configuration}

### General Configuration {#configuration-general}

Configure the general settings of the anti-nuke system. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=anti-nuke%7Cconfiguration).

| Field                       | Description                                                                                          |
|-----------------------------|------------------------------------------------------------------------------------------------------|
| Log Channel                 | Channel where anti-nuke alerts and event logs are sent.                                              |
| Response Action             | What to do when a nuke is detected: **Alert only**, **Strip all roles**, **Ban**, or **Strip dangerous permissions**. |
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
    <li>Actions performed by the server owner are still detected and logged, but no automated response can be taken. Discord does not allow bots to ban or strip roles from the server owner. See the next section for details.</li>
  </ul>
</details>

<details>
  <summary>The bot detected a nuke but did not take action</summary>
  <ul>
    <li>Check that the <strong>Response Action</strong> is set to something other than <strong>Alert only</strong>.</li>
    <li>Ensure the bot's role is positioned above the executor's highest role in the role hierarchy. The bot cannot strip roles from or ban users with a higher role.</li>
    <li>If the executor is the server owner, the bot will only send an alert. Discord does not allow bots to take action against the server owner.</li>
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
    <li>Ensure snapshots have not expired. Check the <strong>Snapshot Retention</strong> setting in the configuration.</li>
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
