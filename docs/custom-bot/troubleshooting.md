# Troubleshooting Custom-Bot Issues

This guide helps you resolve common issues with your SCNX Custom-Bot. If your issue is related to a specific module,
check the [module-specific troubleshooting](#module-troubleshooting) section below.

## General issues {#general}

### Bot is offline {#bot-offline}

<details>
  <summary>The bot is not online on Discord</summary>
  <ul>
    <li>Open your <a href="https://scnx.app/glink?page=bot/manage">Bot Status Panel</a> and check if the bot is running.</li>
    <li>If the bot is stopped, click "Start bot" to bring it online.</li>
    <li>If the bot shows as running but appears offline in Discord, wait a few minutes - Discord can take up to 5 minutes to update the status.</li>
    <li>Try restarting the bot from the Bot Status Panel.</li>
    <li>Check the error log in your dashboard for any startup errors.</li>
  </ul>
</details>

### Bot is not responding to commands {#not-responding}

<details>
  <summary>The bot does not respond when using slash commands</summary>
  <ul>
    <li>Make sure the bot is online (see <a href="#bot-offline">Bot is offline</a>).</li>
    <li>Ensure the bot has been invited to your server with the correct permissions. Re-invite the bot from your <a href="https://scnx.app/glink?page=bot/manage">dashboard</a> if needed.</li>
    <li>Make sure the bot has <code>View Channel</code> and <code>Send Messages</code> permissions in the channel you are using.</li>
    <li>Check if the command is restricted to specific roles or channels in your Discord server settings (Server Settings > Integrations).</li>
    <li>Try reloading the bot's configuration from the Bot Status Panel.</li>
  </ul>
</details>

### Slash commands are not showing up {#missing-commands}

<details>
  <summary>Slash commands are not visible in the command picker</summary>
  <ul>
    <li>Make sure the module that provides the command is enabled in your <a href="https://scnx.app/glink?page=bot/modules">dashboard</a>.</li>
    <li>After enabling a module, reload your bot's configuration or restart the bot.</li>
    <li>Discord can take up to an hour to sync slash commands globally. Try restarting your Discord client.</li>
    <li>Check that the bot has the <code>applications.commands</code> scope. You can verify this by re-inviting the bot from your dashboard.</li>
    <li>Make sure the command is not restricted via Discord's integration permissions (Server Settings > Integrations > your bot).</li>
  </ul>
</details>

## Permission issues {#permissions}

### Missing Access / Missing Permissions {#missing-access}

Many issues with the Custom-Bot are caused by missing permissions. If the bot is not working as expected, the error log
in your dashboard will often show errors like "Missing Access" or "Missing Permissions".

Here are the most common permission-related issues and how to resolve them:

<details>
  <summary>Missing Access</summary>

  The bot cannot see the channel it needs to operate in. To fix this:
  <ol>
    <li>Go to the channel settings in Discord.</li>
    <li>Open the "Permissions" tab.</li>
    <li>Add the bot's role (or the bot itself) and grant <code>View Channel</code> permission.</li>
    <li>If the channel is in a category, make sure the bot also has access to the category.</li>
  </ol>
</details>

<details>
  <summary>Missing Permissions to send messages</summary>

  The bot can see the channel but cannot send messages. Grant the bot the following permissions in the channel:
  <ul>
    <li><code>Send Messages</code></li>
    <li><code>Embed Links</code> (required for embeds)</li>
    <li><code>Attach Files</code> (if the bot needs to send images or files)</li>
  </ul>
</details>

<details>
  <summary>Missing Permissions to manage roles</summary>

  The bot cannot assign or remove roles. To fix this:
  <ol>
    <li>Make sure the bot has the <code>Manage Roles</code> permission on your server.</li>
    <li>In the server's role hierarchy (Server Settings > Roles), the bot's role must be <strong>above</strong> any role it needs to assign or remove.</li>
    <li>The bot can never manage roles that are higher than or equal to its own highest role.</li>
  </ol>
</details>

<details>
  <summary>Missing Permissions to manage channels</summary>

  The bot cannot modify channel settings (e.g., for channel stats, temp channels, or locking). Grant the bot the <code>Manage Channels</code> permission on the server or on the specific channels.
</details>

<details>
  <summary>Missing Permissions to moderate members</summary>

  The bot cannot mute (timeout) members. Make sure:
  <ul>
    <li>The bot has the <code>Moderate Members</code> permission.</li>
    <li>The bot's role is above the target user's highest role in the role hierarchy.</li>
  </ul>
</details>

<details>
  <summary>Missing Permissions to kick or ban members</summary>

  Make sure:
  <ul>
    <li>The bot has the <code>Kick Members</code> and/or <code>Ban Members</code> permissions.</li>
    <li>The bot's role is above the target user's highest role in the role hierarchy.</li>
    <li>The target user is not the server owner (the server owner can never be kicked or banned).</li>
  </ul>
</details>

### Cannot change server owner's nickname {#owner-nickname}

The bot cannot change the nickname of the server owner. This is a Discord limitation that applies to all bots, regardless
of their permissions or role position. There is no workaround for this.

## Configuration issues {#configuration}

<details>
  <summary>Changes to configuration are not being applied</summary>
  <ul>
    <li>After changing configuration options in the dashboard, you need to reload your bot's configuration from the <a href="https://scnx.app/glink?page=bot/manage">Bot Status Panel</a>.</li>
    <li>Some changes (like enabling new modules) may require a full bot restart.</li>
    <li>Check the error log for any configuration-related errors.</li>
  </ul>
</details>

<details>
  <summary>Invalid configuration values</summary>
  <ul>
    <li>Make sure all required fields are filled in.</li>
    <li>Check that channel and role IDs are valid and that the referenced channels/roles still exist on your server.</li>
    <li>For embed configurations, make sure you are using a valid <a href="/docs/custom-bot/additional-features#embed-colors">color value</a>.</li>
    <li>Check the error log in your dashboard for specific error messages about invalid configuration.</li>
  </ul>
</details>

## Common log errors {#log-errors}

Here are common errors you might find in your bot's error log and what they mean:

| Error | Meaning | Solution |
|-------|---------|----------|
| `Missing Access` | The bot cannot see a channel. | Grant the bot `View Channel` permission in the affected channel. |
| `Missing Permissions` | The bot lacks a required permission for an action. | Check which permission is needed and grant it to the bot. |
| `Unknown Channel` | A configured channel no longer exists. | Update your configuration to use a valid channel. |
| `Unknown Role` | A configured role no longer exists. | Update your configuration to use a valid role. |
| `Unknown Message` | A referenced message was deleted. | Reconfigure the module or let the bot recreate the message. |
| `Invalid Form Body` | A message or embed exceeds Discord's character limits. | Shorten your configured messages or embed content. |
| `DiscordAPIError[50013]` | The bot lacks permissions for the action. | Review and fix the bot's permissions (see [Permission issues](#permissions)). |
| `DiscordAPIError[50001]` | The bot cannot access the resource. | Grant the bot access to the channel or resource. |
| `DiscordAPIError[30005]` | Too many roles on the server. | Discord limits the number of roles. Remove unused roles. |

## Using the error log {#error-log}

The error log is your most important tool for diagnosing issues. You can find it in your [Bot Status Panel](https://scnx.app/glink?page=bot/manage).

1. Open your [dashboard](https://scnx.app/glink?page=bot/manage) and click on "Error log".
2. Look for recent error messages that match the timeframe of your issue.
3. The error message usually contains the name of the module and a description of what went wrong.
4. If you cannot resolve the issue yourself, share the error log with the [SCNX support team](https://scnx.app/help).

## Module-specific troubleshooting {#module-troubleshooting}

If your issue is related to a specific module, check its troubleshooting section for targeted help:

### Administration modules

* [Admin-Tools](/docs/custom-bot/modules/administration/admin-tools#troubleshooting) - Channel/role moving, emoji importing, temporary roles
* [Auto-Delete](/docs/custom-bot/modules/administration/auto-delete#troubleshooting) - Automatic message deletion
* [Channel-Stats](/docs/custom-bot/modules/administration/channel-stats#troubleshooting) - Statistics channels
* [Logging](/docs/custom-bot/modules/administration/logging#troubleshooting) - Server change logging
* [Partner-List](/docs/custom-bot/modules/administration/partner-list#troubleshooting) - Partner listing
* [Status-Roles](/docs/custom-bot/modules/administration/status-roles#troubleshooting) - Roles based on Discord status
* [Suggestions](/docs/custom-bot/modules/administration/suggestions#troubleshooting) - Suggestion system
* [Staff-Goals](/docs/custom-bot/modules/administration/team-goals#troubleshooting) - Weekly staff message goals
* [Staff-List](/docs/custom-bot/modules/administration/team-list#troubleshooting) - Auto-updating staff embed
* [Welcome and Boosts](/docs/custom-bot/modules/administration/welcomer#troubleshooting) - Welcome, leave, and boost messages

### Bot modules

* [Betterstatus](/docs/custom-bot/modules/bot/betterstatus#troubleshooting) - Custom bot status
* [Reaction Roles](/docs/custom-bot/modules/bot/reaction-roles#troubleshooting) - Self-assignable roles via reactions

### Community modules

* [Activity Streaks](/docs/custom-bot/modules/community/activity-streak#troubleshooting) - Activity streak tracking
* [Anonymous Chat](/docs/custom-bot/modules/community/anonymous-chat#troubleshooting) - Anonymous messaging
* [Birthday-Calendar](/docs/custom-bot/modules/community/birthday#troubleshooting) - Birthday tracking
* [Color me](/docs/custom-bot/modules/community/color-me#troubleshooting) - Custom color roles
* [Economy](/docs/custom-bot/modules/community/economy-system#troubleshooting) - Virtual economy system
* [Giveaways](/docs/custom-bot/modules/community/giveaways#troubleshooting) - Giveaway system
* [Hunt the Code](/docs/custom-bot/modules/community/hunt-the-code#troubleshooting) - Code hunting game
* [Level System](/docs/custom-bot/modules/community/levels#troubleshooting) - XP and leveling
* [Live Messages](/docs/custom-bot/modules/community/live-messages#troubleshooting) - Dynamic stats messages
* [Nicknames](/docs/custom-bot/modules/community/nicknames#troubleshooting) - Role-based nicknames
* [Polls](/docs/custom-bot/modules/community/polls#troubleshooting) - Poll system
* [Reminders](/docs/custom-bot/modules/community/reminders#troubleshooting) - Reminder system
* [Server Information](/docs/custom-bot/modules/community/serverinfo#troubleshooting) - Server info channel
* [Starboard](/docs/custom-bot/modules/community/starboard#troubleshooting) - Message starboard
* [Sticky Messages](/docs/custom-bot/modules/community/sticky-messages#troubleshooting) - Sticky messages
* [Temp Channels](/docs/custom-bot/modules/community/temp-channels#troubleshooting) - Temporary voice channels

### Games & Fun modules

* [Auto-React](/docs/custom-bot/modules/fun/auto-react#troubleshooting) - Automatic reactions
* [Count-Game](/docs/custom-bot/modules/fun/counter#troubleshooting) - Counting game
* [Duel](/docs/custom-bot/modules/fun/duel#troubleshooting) - Duel game
* [Emoji-Quiz](/docs/custom-bot/modules/fun/emoji-quiz#troubleshooting) - Emoji guessing game
* [Flag-Quiz](/docs/custom-bot/modules/fun/flag-quiz#troubleshooting) - Flag guessing game
* [Fun Commands](/docs/custom-bot/modules/fun/fun#troubleshooting) - Social interaction commands
* [Guess the Number](/docs/custom-bot/modules/fun/guess-the-number#troubleshooting) - Number guessing game
* [Holidays](/docs/custom-bot/modules/fun/holidays#troubleshooting) - Holiday features
* [Quiz](/docs/custom-bot/modules/fun/quiz#troubleshooting) - Quiz system
* [Rock-Paper-Scissors](/docs/custom-bot/modules/fun/rock-paper-scissors#troubleshooting) - RPS game
* [Tic-Tac-Toe](/docs/custom-bot/modules/fun/tic-tak-toe#troubleshooting) - Tic-Tac-Toe game
* [UNO](/docs/custom-bot/modules/fun/uno#troubleshooting) - UNO card game

### Integration modules

* [Minecraft-Status](/docs/custom-bot/modules/integrations/minecraft-status#troubleshooting) - Minecraft server status
* [Reddit Notifications](/docs/custom-bot/modules/integrations/reddit-notifications#troubleshooting) - Reddit post notifications
* [RSS Notifications](/docs/custom-bot/modules/integrations/rss-notifications#troubleshooting) - RSS feed notifications
* [Threads Notifications](/docs/custom-bot/modules/integrations/threads-notifications#troubleshooting) - Threads post notifications
* [TikTok Notifications](/docs/custom-bot/modules/integrations/tiktok-notifications#troubleshooting) - TikTok video notifications
* [Twitch Notifications](/docs/custom-bot/modules/integrations/twitch-notifications#troubleshooting) - Twitch stream notifications
* [YouTube Notifications](/docs/custom-bot/modules/integrations/youtube-notifications#troubleshooting) - YouTube video/stream notifications

### Moderation modules

* [Anti-Ghostping](/docs/custom-bot/modules/moderation/anti-ghostping#troubleshooting) - Ghost-ping detection
* [Info-Commands](/docs/custom-bot/modules/moderation/info-commands#troubleshooting) - Information commands
* [Invite-Tracking](/docs/custom-bot/modules/moderation/invite-tracking#troubleshooting) - Invite tracking
* [Moderation](/docs/custom-bot/modules/moderation/moderation#troubleshooting) - Full moderation system
* [Ping-Protection](/docs/custom-bot/modules/moderation/ping-protection#troubleshooting) - Ping protection

### Support modules

* [Applications](/docs/custom-bot/modules/support/applications#troubleshooting) - Application system
* [Forum-Support](/docs/custom-bot/modules/support/forum-support#troubleshooting) - Forum-based support
* [Ping on VC-Join](/docs/custom-bot/modules/support/ping-on-vc-join#troubleshooting) - Voice channel join notifications
* [Tickets](/docs/custom-bot/modules/support/tickets#troubleshooting) - Ticket system

### Tool modules

* [AFK-System](/docs/custom-bot/modules/tools/afk-system#troubleshooting) - AFK status system
* [Auto-Messager](/docs/custom-bot/modules/tools/auto-messager#troubleshooting) - Automated messages
* [Auto-Publisher](/docs/custom-bot/modules/tools/auto-publisher#troubleshooting) - Auto-publish in news channels
* [Auto-Thread](/docs/custom-bot/modules/tools/auto-thread#troubleshooting) - Automatic thread creation
* [Massrole](/docs/custom-bot/modules/tools/massrole#troubleshooting) - Mass role assignment
* [Name List Cleaner](/docs/custom-bot/modules/tools/name-list-cleaner#troubleshooting) - Username cleaning

## Still need help? {#help}

If none of the above solutions resolve your issue:

1. Check the error log in your [dashboard](https://scnx.app/glink?page=bot/manage) for specific error messages.
2. Try reloading your bot's configuration or restarting your bot.
3. Contact the [SCNX support team](https://scnx.app/help) and share your error log for further assistance.
