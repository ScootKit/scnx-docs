# Temporary channels

Allow users to quickly create voice channels by joining a voice channel.

<ModuleOverview moduleName="temp-channels" />

## Features {#features}

* Users can create a personal voice channel by joining a designated "creation" voice channel.
* Temporary voice channels are automatically deleted when all members leave (with a configurable delay), or optionally archived and restored later.
* Optionally create a "no-mic" text channel alongside each voice channel, visible only to users currently in the voice channel.
* Channel owners can change the access mode (public/private), add or remove users, and edit channel settings (name, bitrate, user limit, NSFW).
* Settings can be managed via slash commands, a settings panel with buttons, or Discord's built-in channel editing.
* Configurable channel name format with support for username, nickname, tag, and channel number.
* Optionally send a DM to users when their temporary channel is created.
* If a user already has an active temporary channel, joining the creation channel moves them to their existing channel instead of creating a new one.
* Optionally limit the maximum number of simultaneously active temporary channels.
* Orphaned or empty channels are automatically cleaned up on bot startup.

## Setup {#setup}

1. Create a voice channel that users will join to create their temporary channel. Configure it in the [module configuration](#configuration).
2. Create a category where temporary channels will be created and configure it in the module configuration.
3. Make sure the bot has `View Channel`, `Manage Channels`, `Move Members`, and `Connect` permissions in both the creation channel and the target category.
4. If using no-mic channels, the bot additionally needs `Send Messages`, `Embed Links`, and `Manage Roles` permissions on the category.
5. Optionally configure a settings channel where the bot will post a settings panel with buttons for users to manage their channels.

## Usage {#usage}

**Creating a temporary channel**: Join the configured creation voice channel. The bot will create a new voice channel (and optionally a no-mic text channel) and move you into it.

**Managing your channel**: While in your temporary channel, you can:

* Use `/temp-channel mode` to switch between public and private access.
* Use `/temp-channel add-user` to grant a user access to your private channel.
* Use `/temp-channel remove-user` to revoke a user's access.
* Use `/temp-channel list-users` to view who has access.
* Use `/temp-channel edit` to change the channel name, bitrate, user limit, or NSFW setting.

Alternatively, if a settings channel or no-mic channel is configured, you can use the button-based interface to manage your channel.

**Channel deletion / archiving**: When all members leave a temporary channel, it will be automatically deleted after the configured timeout (default: 3 seconds). If [archiving](#archiving) is enabled, the channel is moved to a hidden archive category instead and can be restored when the creator joins the creation channel again.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description |
|---------|-------------|
| `/temp-channel mode public:<Boolean>` | Switch your channel between public and private mode. Only available if "Allow change of channel mode" is enabled. |
| `/temp-channel add-user user:<User>` | Grant a user access to your temporary channel (relevant for private channels). Only available if "Allow change of channel mode" is enabled. |
| `/temp-channel remove-user user:<User>` | Revoke a user's access to your temporary channel. Only available if "Allow change of channel mode" is enabled. |
| `/temp-channel list-users` | View a list of users who have been granted access to your channel. Only available if "Allow change of channel mode" is enabled. |
| `/temp-channel edit [user-limit:<Integer>] [bitrate:<Integer>] [name:<Text>] [nsfw:<Boolean>]` | Edit your temporary channel's settings. Only available if "Allow editing the channel" is enabled. |

## Configuration {#configuration}

In this configuration file, you can configure the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=temp-channels%7Cconfig).

| Field | Description |
|-------|-------------|
| Channel | The voice channel users must join to create a new temporary channel. |
| Allow editing the channel | If enabled, channel creators can change the name and settings of their voice channel via commands and Discord's built-in menus. |
| Deletion timeout | The number of seconds the bot waits after all members leave before deleting the temporary channel. |
| Category | The category where new temporary channels will be created. |
| Channel name | The format for temporary channel names. Supports `%username%`, `%nickname%`, `%number%`, and `%tag%` variables. |
| Create no-mic-channel | If enabled, a text channel will be created alongside each voice channel that is only visible to users currently in the voice channel. |
| no-mic-channel-message | The message sent in the no-mic text channel when it is created. |
| Send DM | If enabled, the bot sends a direct message to the user when their temporary channel is created. |
| DM | The direct message content sent to users when their channel is created. |
| Public channels | If enabled, newly created channels will sync their permissions with the category (making them visible to everyone). |
| Private Mode Bypass Roles | Roles that can always join and see private temporary channels, regardless of who created them. Useful for staff or moderator roles. |
| Allow change of channel mode | If enabled, channel creators can switch between public and private modes and manage user access. |
| Settings channel | A text channel where the bot posts a settings panel with buttons for managing temporary channels. Leave empty to disable. |
| No-Mic-Channel for settings | If enabled, the settings panel is sent into the no-mic channel (or Discord's text-in-voice channel if no-mic channels are disabled). |
| Settings message | The message displayed in the settings panel. |
| Max active channels | The maximum number of simultaneously active (non-archived) temporary channels. Set to `0` for unlimited. |
| Max active channels message | The message sent via DM to a user who tries to create a channel when the limit is reached. |
| Enable archiving | If enabled, channels are moved to a hidden archive category when all members leave instead of being deleted. The creator's channel is restored when they rejoin the creation channel. |
| Archive category | The category where archived channels are moved. This category should be hidden from regular users. |
| Archive delete after (hours) | How long an archived channel is kept before being permanently deleted. Set to `0` to never auto-delete. Default: 168 (7 days). |

### Channel archiving {#archiving}

When archiving is enabled, temporary channels are not deleted when all members leave. Instead, they are moved to a
configured archive category with all permissions revoked. When the original creator joins the creation channel again,
their archived channel is restored (with its previous public/private mode and allowed-users list intact) instead of
creating a new channel.

Archived channels are automatically deleted after the configured duration (default: 7 days). An hourly cleanup job
handles this.

To set up archiving:
1. Create a category for archived channels and hide it from regular users.
2. Enable "Enable archiving" in the [configuration](#configuration) and set the archive category.
3. Optionally adjust the auto-delete duration.

## Troubleshooting {#troubleshooting}

<details>
  <summary>Temporary channels are not being created</summary>
  <ul>
    <li>Make sure the creation voice channel and category are correctly configured.</li>
    <li>Ensure the bot has <code>Manage Channels</code>, <code>Move Members</code>, <code>View Channel</code>, and <code>Connect</code> permissions in the category.</li>
    <li>Check if the user already has an active temporary channel -- in that case, they will be moved to their existing channel instead.</li>
  </ul>
</details>

<details>
  <summary>Channels are not being deleted when empty</summary>
  <ul>
    <li>Ensure the bot has <code>Manage Channels</code> permission.</li>
    <li>The bot waits for the configured timeout before deleting a channel. If someone joins within that window, the channel is preserved.</li>
  </ul>
</details>

<details>
  <summary>No-mic channels are not visible to voice channel members</summary>
  <ul>
    <li>Make sure the bot has <code>Manage Roles</code> permission on the category where channels are created.</li>
    <li>Verify that "Create no-mic-channel" is enabled in the configuration.</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every temporary channel:

* The Discord Channel ID of the temporary voice channel
* The Discord User ID of the channel creator
* The Discord Channel ID of the associated no-mic text channel (if applicable)
* The list of users with access to the channel
* Whether the channel is public or private
* Whether the channel is archived and when it was archived (if archiving is enabled)
* Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
