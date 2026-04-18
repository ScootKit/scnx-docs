# Anti-Nuke Protection

Detect and respond to destructive server actions (nuking) with configurable thresholds, automatic countermeasures, and undo recovery.

<ModuleOverview moduleName="anti-nuke" />

:::warning
**Anti-nuke cannot protect against users who can reconfigure it.** `/anti-nuke` itself is restricted to users listed under **Exempt Users**, so Discord Administrators alone cannot manage or bypass the system. However, anyone with access to the SCNX dashboard for this bot (the server owner, co-owners, or Trusted Admins with the "Change and Reload Configuration" permission) can:

* Add users to the **Exempt Users** list — which both exempts them from detection and grants them `/anti-nuke` access.
* Raise thresholds, disable action types, or change the **Response Action** to `alert`.
* Reset the module database, wiping action records, snapshots, and undo history.
* Disable the module entirely.

Anti-nuke is designed to slow down compromised accounts and rogue bots before they cause catastrophic damage — it cannot stop someone who has legitimate configuration access and acts deliberately. Only grant Co-Owner or Custom-Bot configuration permissions to people you actually trust. See [Important considerations](#considerations) for the full list of caveats.
:::

## Features {#features}

* Detects 19 different types of destructive server actions, including mass channel/role deletion, mass bans/kicks, permission escalation, webhook spam, and more.
* Hybrid detection system using both gateway events (instant detection) and audit log entries (catch-all backup) with automatic deduplication.
* Configurable per-action thresholds: set how many actions of each type within a sliding time window trigger a response.
* Four response actions: alert only, strip all roles, ban the executor, or strip only dangerous permissions.
* Temporary whitelist system to allow trusted users to perform bulk actions without triggering detection (e.g., during planned restructures).
* Undo system to reverse damage caused by a nuke event — restores deleted channels, roles, emojis, and more from stored snapshots.
* All detection data is stored in the database (not in-memory), ensuring crash safety — if the bot restarts during a nuke, incomplete events are flagged for manual review.
* Permanently exempt specific users from detection.
* Detailed logging of all detected events to a configurable log channel.

## Important considerations {#considerations}

Read this section in full before enabling anti-nuke on a production server. Enabling the module constitutes your acknowledgement of every point below. This section describes what the module is, how it works, what it cannot do, and the terms under which it is provided.

### What anti-nuke is {#considerations-what}

Anti-nuke is a best-effort mitigation tool that watches for destructive actions (mass channel/role/emoji deletions, mass bans/kicks, permission escalations, webhook abuse, and similar patterns) and responds according to your configured thresholds. It is **one layer** of a defence-in-depth setup, **not** a guarantee of safety.

It is not a replacement for:

* Sound Discord role and channel permission hygiene.
* Verified, trusted staff — ideally with enforced 2FA.
* Regular audit-log reviews.
* Independent off-platform backups of anything you cannot afford to lose.

If you are treating anti-nuke as your only line of defence, stop here and fix that first.

### Threat model {#considerations-threat-model}

Anti-nuke is designed to slow down and/or stop **authenticated destructive activity performed from inside the server**, such as:

* A compromised staff account performing mass channel or role deletions.
* A rogue staff member attempting to wipe content before leaving.
* A malicious or misbehaving bot added to the server with elevated permissions.
* A self-bot or hijacked session performing bulk bans, kicks, or permission escalations.

It is **not** designed to protect against, and cannot protect against:

* Attackers who already hold SCNX dashboard configuration access (they can disable the module).
* Compromise of the server owner account (Discord itself disallows bots from acting against the owner).
* Attacks on the bot's hosting infrastructure, the SCNX platform, or Discord itself.
* Phishing, social engineering, token theft, or attacks that occur outside Discord.
* Slow, low-volume attrition attacks that stay below configured thresholds.
* Damage that has already completed before the bot receives the event.
* Destructive actions taken on data or platforms outside of this Discord server.

Think of anti-nuke as a trip-wire against **fast, bulk, in-server** destructive activity, not as a general-purpose security product.

### How it works {#considerations-how-it-works}

The bot watches Discord gateway events and audit log entries for destructive actions. Two detection paths run in parallel:

1. **Gateway events** fire the moment Discord broadcasts a change (e.g. `CHANNEL_DELETE`). They are fast but do not always carry executor information and do not cover every audit-logged action type.
2. **Audit-log polling** fetches newly written audit entries periodically. It is authoritative on who performed an action but lags behind real time by seconds to (occasionally) minutes, and can be rate-limited or delayed by Discord.

Events from the two paths are **deduplicated** using a combination of action type, target ID, executor ID, and a short time window, so a single action is only counted once.

For each tracked action, the bot:

1. Writes a row to the action-tracking table with the action type, target ID, executor ID, and timestamp.
2. Captures a snapshot of the affected resource (where applicable — channel configuration, role settings, emoji image bytes, permission overwrite state, etc.) into the snapshot table, tied to a potential future nuke event.
3. Counts how many rows this executor has accumulated for this action type within the configured sliding time window.
4. If the count exceeds the configured threshold, it creates a `NukeEvent`, runs the configured response action against the executor, and sends a log embed to the configured log channel.

All detection state is database-backed, not in-memory, so a bot restart mid-nuke does not reset the counters. Incomplete nuke responses (bot crashed while running the response action) are surfaced on the next startup. See [Crash safety](#crash-safety).

### Detection limits {#considerations-detection}

* **Discord is the source of truth, not the bot.** The module relies on Discord's gateway events and audit log. Some actions do not produce audit log entries, some are reported with missing or delayed executor information, and Discord rate-limits and outages can drop or delay events entirely. Any such event may go undetected or be attributed to the wrong executor.
* **Thresholds are sliding windows.** A patient attacker who stays just under your configured limits, or uses actions that are not tracked, will not trigger a response. Default thresholds are a conservative starting point — tune them to match your server's legitimate baseline traffic and your own risk tolerance.
* **Non-tracked actions are invisible.** The module tracks a fixed set of action types (see [Tracked action types](#action-types)). Anything outside that list — including future Discord features, niche API calls, and actions Discord does not expose via audit log — will not register at all.
* **Executor attribution can be wrong or missing.** Some audit entries arrive with no executor, a bot executor, or an executor that represents a webhook or integration rather than the person who caused the change. The module cannot magically reconstruct the real actor in these cases and may either miss the event or act against the wrong entity. Review log channel output during suspected incidents.
* **False positives are possible.** Legitimate bulk operations by staff can trip thresholds and cause the bot to strip roles, ban, or alert on users you did not intend. Use **Exempt Users** and `/anti-nuke whitelist add` before any planned bulk work, and keep someone with dashboard access available to reverse a bad response.
* **Hybrid detection reduces but does not eliminate gaps.** The gateway + audit-log combination with deduplication covers most cases, but gaps are inherent to the Discord API and cannot be fully removed. Plan for some percentage of events to be missed, delayed, or misattributed.
* **Misconfiguration silently removes protection.** Disabled action types, raised thresholds, `Response Action` set to `alert`, an unset or inaccessible log channel, an overly broad Exempt Users list, an always-valid whitelist entry, or an expired snapshot retention window all reduce or disable protection without surfacing a visible error. Review the configuration regularly and again after every staff change.
* **Response actions themselves can fail.** The bot can only strip roles or ban users it is able to affect under Discord's permission and hierarchy rules (see [Role hierarchy and scope](#considerations-scope)). A failed response is logged but not retried, and the attacker continues to operate until stopped manually.

### Downtime and availability {#considerations-downtime}

Anti-nuke only works while the bot process is running, connected to Discord, and actively receiving events. During **any** period in which the bot is offline, restarting, updating, disconnected, rate-limited, throttled, queued, reconnecting, or otherwise not actively processing events:

* No detection of any kind will occur.
* No response actions (alert, strip-roles, ban, strip-dangerous-permissions) will be executed.
* No snapshots will be written.
* Actions taken during that period will **not** be retroactively evaluated once the bot returns.

Downtime can be caused by many factors outside any single party's control, including but not limited to:

* Discord API outages, partial outages, or regional incidents.
* Discord gateway instability, reconnection storms, or elevated latency.
* Discord-side rate limits applied to the bot or the guild.
* Network issues, DNS issues, or hosting provider incidents.
* SCNX platform maintenance, deployments, upgrades, or outages.
* Module updates, bot restarts, or configuration reloads (including routine ones you or another staff member trigger from the dashboard).
* Database unavailability, slow queries, or lock contention.
* Bugs or defects in this module or in any dependency.

No service that depends on a third-party API — and this module depends on Discord — can offer a hard real-time protection guarantee. Plan accordingly:

* Do not rely on anti-nuke as your only safeguard.
* Keep independent off-platform backups of server data you care about.
* Consider external monitoring (e.g. a separate status-check tool) to alert you when the bot is offline.

**SCNX makes no uptime guarantee for this module or for the bot as a whole and accepts no liability for damage occurring during any period of reduced availability, regardless of cause or duration.**

### Role hierarchy and scope {#considerations-scope}

* **The server owner is untouchable.** Discord does not allow bots to ban or strip roles from the server owner. Anti-nuke can detect and log owner actions but cannot take an automated response against them. If the owner account is compromised, this module will not protect you — treat owner-account security (strong password, 2FA, session hygiene) as a prerequisite, not a bonus.
* **Role hierarchy is enforced by Discord.** The bot can only strip roles from or ban users whose highest role is below the bot's own highest role. Keep the bot positioned above every staff role it needs to act on — otherwise responses will be logged as failed but not enforced. Review role position after every major reshuffle.
* **Integrations and bots have their own role.** When you add another bot or integration to your server, Discord creates a managed role for it. If that role is placed above the anti-nuke bot's role, anti-nuke cannot stop that bot from nuking. Audit managed roles as well as human-assignable ones.
* **Only users the bot can see.** The bot cannot act on users it no longer has cached or who have already left the server, and cannot reverse actions performed by Discord itself (e.g. Trust & Safety bans, Discord-side deletions).
* **Webhook actions have no executor.** Messages and reactions sent by webhooks are not attributable to a Discord user. Anti-nuke's webhook-spam tracking acts on the webhook itself (e.g. deletion), not the person who created the webhook, if the two can be told apart at all.
* **Bot permissions matter.** Without the permissions listed in [Setup](#setup), individual response actions and undo operations will fail. Permission issues are logged but do not block the rest of the module from running. A bot that cannot ban but is configured to respond with `ban` will silently fail that particular response.

### Undo limitations {#considerations-undo}

Undo restores resources the bot snapshotted prior to the event, and **only** those resources. Understand what the snapshots actually capture:

* **Channels:** configuration, permission overwrites, and position at the moment of deletion. Messages inside the channel are **not** captured — Discord does not permit bots to bulk-copy message history in a way that survives deletion.
* **Roles:** name, colour, permissions, hoist/mentionable flags, and position at the moment of deletion. Role **memberships** (which users had the role) are captured for mass-role-removal events only; for outright role deletion, which users previously held the role cannot be reconstructed with full fidelity.
* **Emojis:** name and the image bytes the bot was able to fetch before deletion. If Discord already purged the image when the bot attempts to download it, the emoji cannot be restored.
* **Permission overwrites:** the prior state of overwrites for a channel. Undoing reverts to that prior state; any legitimate changes made between the snapshot and the undo are overwritten.
* **Mass role removals:** the list of users who held the affected roles at the time of snapshot, so roles can be re-assigned.

Undo **cannot and will not** recover:

* Deleted message content or message history of any kind.
* Kicks or bans that were already lifted, or users who rejoined and left again.
* Member prune actions — pruned members must be re-invited manually.
* Custom stickers, emojis, soundboards, or sticker/emoji metadata not captured by a snapshot (e.g. deleted between audit-log arrival and snapshot download).
* Integrations, webhooks with their original tokens, application commands registered by other bots, or third-party integrations.
* Server boosts, boost perks, vanity URLs, partnership status, discovery settings, or any resource Discord does not expose to bots.
* Anything outside the snapshot retention window you have configured — snapshots older than the configured retention are deleted automatically.

Undo is a partial recovery aid. It is **not** a backup. Treat it as a time-saving tool for recent incidents, and maintain your own independent backups for anything you cannot afford to lose.

### Configuration bypass risk {#considerations-bypass}

Dashboard configuration access for this bot grants the ability to fully bypass anti-nuke. The server owner, all co-owners, and every Trusted Admin with the "Change and Reload Configuration" permission can:

* Lower or remove thresholds, or disable individual action types.
* Disable the module entirely.
* Clear snapshots or reset the module database, erasing undo history.
* Add themselves or anyone else to **Exempt Users** or the whitelist.
* Change the **Response Action** to a harmless value such as `alert`.
* Read or delete snapshot and event data.
* Change the log channel to a private one or to an inaccessible channel so staff cannot see alerts.

The **Exempt Users** list is also the only gate for `/anti-nuke` command access — the command does **not** use Discord permissions. Anti-nuke cannot protect against someone who already has the ability to change its configuration. Mitigations:

* Keep the owner, co-owner, and Trusted Admin rosters as small as practical.
* Pair the "Change and Reload Configuration" permission with high-trust individuals only.
* Review these rosters whenever a staff member changes role or leaves.
* Consider moving the log channel to one only a small group can read, and audit changes to it.
* Remember that disabling the module is logged in the SCNX audit log even if on-Discord activity is not — review that audit log if you suspect tampering.

### Operational guidance {#considerations-operations}

Recommendations that go beyond the defaults:

* **Tune thresholds to your server's baseline.** A 1 000-member hobby server behaves very differently from a 100 000-member community. Watch the log channel for a week before relying on the defaults, and adjust thresholds that produce false alarms or miss real patterns.
* **Whitelist before planned bulk work.** Use `/anti-nuke whitelist add` for planned cleanups. Keep the window short and remove the entry afterwards with `/anti-nuke whitelist remove`.
* **Keep at least two Exempt Users.** A single exempt user is a single point of failure — if their account is compromised or they are unavailable during an incident, nobody can run `/anti-nuke undo`. Two or three trusted users is a reasonable minimum.
* **Use a dedicated log channel.** The log channel should be writable by the bot and readable by your trust-&-safety staff, with restrictive message-edit/delete permissions for everyone else.
* **Monitor bot liveness externally.** Anti-nuke cannot alert you that it is offline. Use an external uptime monitor, or rely on other bot signals (status page, scheduled heartbeats), if catching downtime matters to you.
* **Review after incidents.** After any nuke detection — real or false positive — read the event log, confirm the response was appropriate, and adjust thresholds, whitelists, or exempt lists accordingly.
* **Drill occasionally.** On a staging server, trigger a controlled action above threshold to confirm your alerts, response actions, and undo all still work. Configuration drift is real.

### Your responsibility {#considerations-responsibility}

* You are solely responsible for your threshold configuration, response action choice, Exempt Users list, log channel, snapshot retention, and the overall suitability of this module for your server.
* You are solely responsible for your Discord role hierarchy, channel and role permissions, staff vetting, 2FA enforcement, dashboard access control, and off-platform backups.
* You are solely responsible for testing your configuration and keeping it reviewed as your server grows and your staff changes.
* You are solely responsible for monitoring the bot's availability and for any independent detection or response systems you choose to run alongside anti-nuke.
* You are solely responsible for compliance with Discord's Terms of Service, Community Guidelines, and Developer Policy in relation to the response actions you configure — for example, mass-banning real users based on misconfigured thresholds is your action, not ours.

### Pre-enable checklist {#considerations-checklist}

Before flipping anti-nuke on in production, confirm:

* [ ] You have read this entire *Important considerations* section and accept the stated limits and disclaimers.
* [ ] The bot role is positioned above every staff role you expect it to act on.
* [ ] The bot has the Discord permissions listed in [Setup](#setup).
* [ ] A dedicated log channel exists and the bot can send embeds in it.
* [ ] At least two trusted users are in the **Exempt Users** list so `/anti-nuke undo` can be run during an incident.
* [ ] The list of SCNX dashboard co-owners and Trusted Admins has been reviewed and trimmed to people you actually trust with server-wide destructive power.
* [ ] You have independent off-platform backups of anything you cannot afford to lose.
* [ ] You have planned (and preferably tested) how you would recover from false positives — who can whitelist, who can undo, who can reverse bans.
* [ ] You understand that during any bot/Discord/SCNX downtime, anti-nuke does nothing, and you are comfortable with that risk.

### No warranty and liability disclaimer {#considerations-liability}

Anti-nuke is provided **as-is** and **as-available**, without warranty of any kind — whether express, implied, or statutory — including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, reliability, availability, non-infringement, or uninterrupted operation. No advice or information obtained from SCNX, this bot, its documentation, or its staff creates any warranty not expressly stated here.

To the maximum extent permitted by applicable law, SCNX, its operators, maintainers, contributors, and affiliates accept **no liability** for any direct, indirect, incidental, special, consequential, exemplary, or punitive damages — including but not limited to loss of data, loss of channels, loss of roles, loss of members, loss of messages, loss of revenue, loss of reputation, loss of time, cost of substitute services, or any other intangible loss — arising out of or in connection with:

* The use of, or inability to use, this module.
* Missed detections, delayed detections, false positives, false negatives, incorrect executor attribution, or incorrect responses.
* **Any period of bot, SCNX platform, Discord, or infrastructure downtime, outage, partial outage, degraded service, maintenance window, or unavailability, regardless of cause or duration.**
* Configuration errors, misconfiguration, or bypass by anyone with configuration or dashboard access, including the server owner, co-owners, and Trusted Admins.
* Compromise of the server owner account, staff accounts, bot tokens, or any third-party account.
* Any action or omission of Discord itself, including enforcement actions, feature removals, API changes, outages, and rate limits.
* Loss of snapshots or undo history due to retention policies, database resets, or the module being disabled.
* Bugs, defects, regressions, or unexpected behaviour in this module, in any dependency, or in any service the bot relies on.
* Any response action (alert, strip-roles, ban, strip-dangerous-permissions) taken against a real user, whether correctly or incorrectly, and any downstream consequence of that action.

This applies even if SCNX has been advised of the possibility of such damages and even if a remedy set forth herein is found to have failed of its essential purpose.

Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability for certain damages. In those jurisdictions, SCNX's liability is limited to the minimum extent permitted by applicable law, and the rest of this disclaimer remains in force.

By enabling this module you confirm that you have read, understood, and accepted all of the above in full, and that you are enabling anti-nuke **at your own risk**.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=anti-nuke) on your server.
2. Open the [Configuration](https://scnx.app/glink?page=bot/configuration?file=anti-nuke%7Cconfiguration) and set the **Log Channel** where anti-nuke alerts will be sent.
3. Choose your preferred **Response Action** — this determines what happens to the user who triggered a nuke detection:
   * **alert**: Only send an alert to the log channel. No action is taken against the user.
   * **strip-roles** (default): Remove all roles from the user, preventing further damage.
   * **ban**: Ban the user from the server.
   * **strip-dangerous-permissions**: Remove only dangerous permissions (Administrator, Manage Channels, Manage Roles, etc.) from the user's roles.
4. Add at least one user to the **Exempt Users** list. Users on this list are both exempt from anti-nuke detection **and** the only users allowed to run `/anti-nuke` subcommands (including `/anti-nuke undo`). If the list is empty, nobody — not even the server owner — can use `/anti-nuke`.
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

Before performing planned bulk actions (e.g., reorganizing channels or cleaning up roles), administrators can temporarily whitelist a user. Whitelisted users bypass all anti-nuke detection for the specified duration.

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
Undo is a best-effort recovery. Some data (like message history in deleted channels) cannot be restored. The undo system works best when used promptly after detection.
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

`/anti-nuke` does **not** use Discord permissions. Every subcommand verifies at execution time that the invoking user is listed under **Exempt Users** in the [General Configuration](#configuration-general) — anyone else (including Discord Administrators) is rejected with an error message. Make sure at least one person you trust is in that list, otherwise no one will be able to run `/anti-nuke undo` during an incident.

## Configuration {#configuration}

### General Configuration {#configuration-general}

Configure the general settings of the anti-nuke system. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=anti-nuke%7Cconfiguration).

| Field                       | Description                                                                                          |
|-----------------------------|------------------------------------------------------------------------------------------------------|
| Log Channel                 | Channel where anti-nuke alerts and event logs are sent.                                              |
| Response Action             | What to do when a nuke is detected: `alert`, `strip-roles`, `ban`, or `strip-dangerous-permissions`. |
| Exempt Users                | Users who are completely exempt from anti-nuke detection **and** the only users allowed to run `/anti-nuke` subcommands. |
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
    <li>The bot cannot detect actions performed by the server owner, as Discord prevents bots from taking action against the owner.</li>
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
  <summary>I get "Only users listed in the Anti-Nuke Exempt Users configuration can use /anti-nuke"</summary>
  <ul>
    <li>Open the <a href="#configuration-general">General Configuration</a> and add your user ID to the <strong>Exempt Users</strong> list. The module intentionally does not use Discord permissions — the exempt list is the only way to gain access to <code>/anti-nuke</code>.</li>
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
