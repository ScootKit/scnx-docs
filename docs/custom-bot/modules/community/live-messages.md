# Live Messages

Send messages with dynamic server stats (members, boosts, channels, and more) that automatically update every 5 minutes.

<ModuleOverview moduleName="live-messages" />

## Features {#features}

* Send messages that display live server statistics and automatically update every 5 minutes.
* Use a wide variety of parameters for member counts, channel counts, boost stats, and more.
* Display stats from other enabled modules, such as open tickets, active giveaways, level stats, and moderation actions.
* Count members with a specific role using dynamic role parameters.
* Support for embeds to create rich, formatted stat displays.
* If a live message is deleted, the bot automatically recreates it on the next update.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=live-messages) on your server.
2. Open the [configuration](#configuration) and add a new live message element.
3. Select the channel where the message should be sent and configure the message content using the available [parameters](#parameters).
4. Make sure the bot has `View Channel`, `Send Messages`, and `Embed Links` permissions in the configured channel.
5. Reload your bot's configuration to apply changes.

## Usage {#usage}

After setting up and configuring a live message, the bot will automatically send and update it every 5 minutes. No additional actions are required.

* The bot replaces all parameters in the message with current server statistics before sending.
* If the message gets deleted, the bot will send a new one on the next update cycle.
* You can configure multiple live messages, each in a different channel with different content.

### Available parameters {#parameters}

The following parameters can be used in your live message content. They will be replaced with current values on every update.

**Member statistics:**

| Parameter | Description |
|-----------|-------------|
| `%memberCount%` | Total member count |
| `%userCount%` | Human user count (excluding bots) |
| `%botCount%` | Bot count |
| `%onlineMemberCount%` | Members with online status |
| `%dndMemberCount%` | Members with Do Not Disturb status |
| `%idleMemberCount%` | Members with idle status |
| `%offlineMemberCount%` | Members with offline status |
| `%voiceUserCount%` | Members currently in voice channels |
| `%userWithRoleCount-<ID>%` | Members with a specific role (replace `<ID>` with the role ID) |
| `%onlineUserWithRoleCount-<ID>%` | Online members with a specific role (replace `<ID>` with the role ID) |

**Server information:**

| Parameter | Description |
|-----------|-------------|
| `%guildName%` | Server name |
| `%guildIcon%` | Server icon URL |
| `%guildBanner%` | Server banner URL |
| `%verificationLevel%` | Server verification level |
| `%vanityURL%` | Vanity invite URL (if available) |
| `%daysSinceCreation%` | Days since server creation |
| `%guildCreationTimestamp%` | Formatted server creation date |
| `%guildCreationDiscordTimestamp%` | Discord-rendered creation timestamp |

**Channel and content statistics:**

| Parameter | Description |
|-----------|-------------|
| `%channelCount%` | Total channel count |
| `%textChannelCount%` | Text channel count |
| `%voiceChannelCount%` | Voice channel count |
| `%categoryCount%` | Category count |
| `%forumCount%` | Forum channel count |
| `%stageChannelCount%` | Stage channel count |
| `%roleCount%` | Total role count |
| `%emojiCount%` | Total emoji count |
| `%stickerCount%` | Total sticker count |

**Boost statistics:**

| Parameter | Description |
|-----------|-------------|
| `%guildBoosts%` | Number of boosts |
| `%boostLevel%` | Current boost tier |
| `%boosterCount%` | Number of boosters |

**Module-dependent parameters** (only available if the respective module is enabled):

| Parameter | Required Module | Description |
|-----------|----------------|-------------|
| `%openTickets%` | Tickets | Number of currently open tickets |
| `%totalTickets%` | Tickets | Total number of tickets |
| `%totalSuggestions%` | Suggestions | Total number of suggestions |
| `%activeGiveaways%` | Giveaways | Number of active giveaways |
| `%totalGiveaways%` | Giveaways | Total number of giveaways |
| `%totalModActions%` | Moderation | Total moderation actions |
| `%totalWarns%` | Moderation | Total warnings |
| `%totalMutes%` | Moderation | Total mutes |
| `%totalBans%` | Moderation | Total bans |
| `%totalKicks%` | Moderation | Total kicks |
| `%totalLevelUsers%` | Levels | Users in the level system |
| `%highestLevel%` | Levels | Highest level achieved |
| `%highestXP%` | Levels | Highest XP achieved |
| `%totalEconomy%` | Economy | Total currency in circulation |
| `%totalBalance%` | Economy | Total wallet currency |
| `%totalBank%` | Economy | Total bank currency |
| `%economyUsers%` | Economy | Users with an economy balance |
| `%activeTempChannels%` | Temp Channels | Active temporary channels |
| `%activePolls%` | Polls | Number of active polls |
| `%totalPolls%` | Polls | Total number of polls |
| `%totalInvites%` | Invite Tracking | Total tracked invites |
| `%afkUsers%` | AFK System | Users currently AFK |
| `%birthdayUsers%` | Birthday | Users with registered birthdays |
| `%starboardMessages%` | Starboard | Messages on the starboard |
| `%totalPartners%` | Partner List | Total partners |
| `%totalApplications%` | Applications | Total applications |
| `%pendingApplications%` | Applications | Pending applications |
| `%twitchLiveCount%` | Twitch Notifications | Currently live streamers |
| `%counterValue%` | Counter | Current counter value |
| `%totalStreakUsers%` | Activity Streaks | Users with activity streaks |
| `%longestStreak%` | Activity Streaks | Longest activity streak |

You can also use `%newline%` to insert a line break.

## Configuration {#configuration}

In this configuration file, you can set up your live messages. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=live-messages%7Cconfigs/config).

| Field | Description |
|-------|-------------|
| Channel | The channel where the live message should be sent and updated. |
| Message | The message content with parameters that will be replaced with live values. Supports embeds. |

## Troubleshooting {#troubleshooting}

<details>
  <summary>The live message is not appearing</summary>
  <ul>
    <li>Make sure the configured channel exists and the bot has <code>View Channel</code>, <code>Send Messages</code>, and <code>Embed Links</code> permissions.</li>
    <li>Reload your bot's configuration after making changes.</li>
  </ul>
</details>

<details>
  <summary>Module-dependent parameters show as empty or zero</summary>
  <ul>
    <li>Make sure the respective module is enabled on your server.</li>
    <li>Some parameters require the module to have data (e.g., tickets need to exist for ticket counts to show).</li>
  </ul>
</details>

<details>
  <summary>The message is not updating</summary>
  <ul>
    <li>Live messages update every 5 minutes. Wait for the next update cycle.</li>
    <li>If the message was deleted, a new one will be created on the next update.</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is being stored for every live message:

* The Discord channel ID where the message is sent
* The Discord message ID of the live message
* The index of the configuration element
* Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
