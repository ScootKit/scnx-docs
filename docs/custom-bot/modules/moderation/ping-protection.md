# Ping-Protection

Protect specific members and roles from unwanted mentions with configurable moderation actions.

<ModuleOverview moduleName="ping-protection" />

## Features {#features}

* Protect specific users and roles from being pinged by unauthorized members.
* Automatically protect all users who have a protected role if enabled.
* Whitelist specific users, roles, and channels that are exempt from ping protection.
* Optionally use Discord's native AutoMod to block messages containing protected pings before they are sent.
* Configurable moderation actions (mute or kick) when a user pings protected members/roles too many times.
* View ping history and moderation actions for any user.
* Configurable data retention policies for ping history and moderation logs.
* Track users who leave and rejoin the server.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=ping-protection) on your server.
2. Open the [General Configuration](#configuration-general) and add the users and/or roles you want to protect.
3. Configure any whitelisted users, roles, and/or channels that should be allowed to ping protected roles/members.
4. Optionally you can use Discord's native AutoMod feature to block messages before they are sent. This can be enabled by enabling 'Enable automod' in the configuration.
5. Optionally configure [moderation actions](#configuration-moderation) to automatically punish users who repeatedly ping protected members.
6. Make sure the bot has `View Channel`, `Send Messages`, and `Embed Links` permissions in channels where protected members/roles might be pinged. If using AutoMod, the bot also needs `Manage Server` permission. For moderation actions, the bot needs `Time out members` (for mute) and `Kick, Approve and Reject Members` (for kick).

## Usage {#usage}

Once set up, the module works automatically:

* When a user pings a protected member or role, the bot sends a warning message in the channel.
* If AutoMod is enabled, the message is blocked before it is sent, and the user sees a custom block message.
* Pings are recorded in the user's history. If configured moderation thresholds are reached, the bot automatically mutes or kicks the user.

### Viewing ping history and actions {#viewing-history}

* Users can use the `/ping-protection user history` command to view a **user's (or their own) ping history**. Each pinging event is logged (if enabled) with a timestamp, and a link to the message containing the ping.
* Users can use the `/ping-protection user actions-history` command to view a **user's (or their own) moderation actions history**. Each moderation action is logged, and contains the punishment type, the duration (only if the action was a mute), a timestamp and the reason.

### Protected and whitelisted lists {#lists}

Use `/ping-protection list protected` to see all **protected users and roles**.
Use `/ping-protection list whitelisted` to see all **whitelisted users, roles, and channels**.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description |
|---------|-------------|
| `/ping-protection user panel user:<User>` | Display a management panel for a user with their ping and action counts, and a data deletion option. |
| `/ping-protection user history user:<User>` | View the ping history of a specific user. |
| `/ping-protection user actions-history user:<User>` | View moderation actions taken against a user. |
| `/ping-protection list protected` | View all protected users and roles. |
| `/ping-protection list whitelisted` | View all whitelisted roles, channels, and users. |

## Configuration {#configuration}

### General Configuration {#configuration-general}

In this configuration file, you set up the protection and ping rules, whitelists, AutoMod settings and the warning message. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=ping-protection%7Cconfigs/configuration).

| Field | Description |
|-------|-------------|
| Protected Roles | Roles that are protected from pings. |
| Protect all users with protected role | If enabled, all users with at least one protected role are protected, even if not listed individually. |
| Protected Users | Specific users who are protected from pings. |
| Whitelisted Roles | Roles that are allowed to ping protected members/roles. |
| Whitelisted Channels | Channels where pings to protected members/roles are ignored. |
| Whitelisted Users | Specific users whose pings to protected members/roles are ignored. |
| Allow Reply Pings | If enabled, replying to a protected user's message (with mention enabled) is allowed. |
| Self-Ping configuration | Choose what happens when a protected user pings themselves: get punished, ignored, or receive fun easter eggs. Fun easter eggs also includes a special easter egg that has a 1% chance of appearing. |
| Enable AutoMod | If enabled, the bot uses Discord's native AutoMod to block messages with pings to protected members/roles. |
| AutoMod Log Channel | The channel where AutoMod alerts are sent. Only applies if AutoMod is enabled. |
| AutoMod Block Message | The message shown to users when their message is blocked by AutoMod. |
| Warning Message | The message sent in the channel when a user pings a protected member or role. Supports `%target-name%`, `%target-mention%`, `%target-id%`, and `%pinger-id%` message parameters. |

### Moderation Actions {#configuration-moderation}

In this configuration file, you set up automatic punishments for repeated pings. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=ping-protection%7Cconfigs/moderation).

You can configure multiple punishment rules, each with its own threshold and action.

| Field | Description |
|-------|-------------|
| Pings to trigger moderation | The number of pings required to trigger this moderation action. |
| Use a custom timeframe | If enabled, you can set a custom timeframe in days for this rule. |
| Timeframe (days) | The number of days in which the pings must occur to trigger this action. Only applies if custom timeframe is enabled. |
| Action | The punishment to apply: mute or kick. |
| Mute Duration | How long to mute the user in minutes. Only applies when the action type is mute. |
| Enable action logging | If enabled, a message is sent in the channel when a moderation action is taken. |
| Action log message | The message sent when a user is punished. Supports `%pinger-mention%`, `%pinger-name%`, `%action%`, `%pings%`, `%timeframe%`, and `%duration%` message parameters. |

### Data Storage {#configuration-storage}

In this configuration file, you configure data retention policies. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=ping-protection%7Cconfigs/storage).

| Field | Description |
|-------|-------------|
| Enable Ping History | If enabled, the bot keeps a history of pings to enforce moderation actions. ***This is required when you have moderation actions!***|
| Ping History Retention | How long to keep ping history, in weeks (minimum 4, maximum 96). This is the timeframe used for moderation actions (unless a custom timeframe is set). |
| Delete all the pings in history after timeframe | If enabled, all ping history for a user is deleted when the retention period expires, instead of only the oldest entries. This is useful if you want to treat the data history timeframe as a complete wipe to start fresh. |
| Moderation Log Retention | How long to keep moderation action records, in months (minimum 1, maximum 24). |
| Keep user logs after they leave | If enabled, the bot keeps data about users after they leave the server. |
| Leaver Data Retention | How long to keep data after a user leaves, in days (minimum 1, maximum 7). Only applies if leaver data retention is enabled. |

## Troubleshooting {#troubleshooting}

In this module, issues can often appear when permissions are set incorrectly, hierarchy issues and more. Please make sure to check and try the steps below. If your issue is not listed, or the steps mentioned here did not fix your issue, feel free to contact [our support team](https://scnx.app/help).

<details>
    <summary>The warning message is not being sent after a protected member/role is pinged.</summary>
    <ul>
        <li>Make sure your bot has the 'View channel', 'Send messages', 'View message history' and 'Embed links' permissions so the bot can send (embed) messages in the channel.</li>
        <li>Make sure the pinged role or member is actually protected in the <a href="#configuration-general">general configuration</a>.</li>
        <li>Make sure the user is not whitelisted, or has a whitelisted role.</li>
        <li>Make sure the user did not ping in a whitelisted channel.</li>
    </ul>
</details>

<details>
    <summary>AutoMod is not blocking the messages.</summary>
    <ul>
        <li>Make sure your bot has the 'Manage server' permissions so it can make an AutoMod rule.</li>
        <li>Make sure that AutoMod is actually enabled in the <a href="#configuration-general">general configuration</a>.</li>
        <li>Make sure that the custom block message is not longer than 150 characters.</li>
        <li>The bot might be facing a rate limit from Discord, consider waiting a few minutes and then restarting the bot.</li>
    </ul>
</details>

<details>
    <summary>The user is not being punished.</summary>
    <ul>
        <li>Make sure your <a href="#configuration-moderation">moderation actions</a> are correctly set up.</li>
        <li>Make sure that the user met the pings threshold in the set timeframe. Older logs might be deleted because they are too old according to your data retention, or the user might have older pings outside your custom timeframe for the set punishment.</li>
    </ul>
</details>

<details>
    <summary>I am getting this error when punishing: I cannot punish (user) because their role is higher than or equal to my highest role.</summary>
    
    This happens because the highest role of the user who pinged is higher than (or the same as) the highest role of the bot. To fix this, put your bot's highest role higher than the highest role of most users. It is recommended to put your bot's highest role in a position near the top.
</details>

<details>
    <summary>I am getting this error when punishing: Missing Permissions.</summary>
    <ul>
        <li>Make sure your bot has the 'Time out members' and 'Kick, Approve and Reject Members' permissions to mute and kick members.</li>
        <li>Make sure the user the bot is trying to punish does not have administrator permissions.</li>
    </ul>
</details>

## Stored data {#data-usage}

The following data is being stored by this module:

| Data | Reason for storage | When this is stored/used |
|------|--------------------|--------------------------|
| User ID | This is stored from both the pinger, the protected user(s) and the pinged user. This is stored so the bot knows who pinged who, and who are protected from pings. | When someone pings a protected user, when a moderation action needs to be done, when the user history is viewed and when the user leaves the server. |
| Message URL | This is stored so the bot knows the link to the message where a ping occurred. | When someone pings a protected user/role and when viewed in history. If the message was blocked by AutoMod, it shows "Blocked by AutoMod". |
| Role ID | This is stored so the bot knows if someone has a protected or whitelisted role. | When configured and set and when a user/role is being pinged to check it |
| Time and date for a ping | This is stored so the bot knows when a message containing a ping towards a protected user or role was sent - this is showcased in the user history | When a protected ping occurs and when viewed in history. |
| Moderation action type | This is stored so the bot knows which action types exist, and are used in [moderation actions](#configuration-moderation). | When set up, when a moderation action should be done and when history is viewed. |
| Moderation reason and duration | This is stored so the bot knows why and how long a moderation action was done - this is showcased in the user history.  | When set up, when a moderation action should be done and when history is viewed. |
| Time and date for the moderation action | This is stored so the bot knows when the moderation action was done - this is showcased in the user history. | When a moderation action should be done and when history is viewed. |
| Time and date of the user leaving | This is stored so the bot knows when a user left the server - this is showcased in the logs and uses the configuration to know when to automatically delete the user logs depending on the [leaver retention](#configuration-storage) in the configuration.|

Data is automatically deleted based on the configured retention periods. You can also delete all data for a specific user through the [`/ping-protection user panel`](#commands) command. To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).