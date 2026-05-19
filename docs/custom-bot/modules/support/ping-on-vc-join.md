# Voice-Channel Actions

Send notifications when someone joins a voice channel and assign roles to users connected to voice channels.

<ModuleOverview moduleName="ping-on-vc-join" />

## Features {#features}

- Send a customizable notification message to a text channel when a user joins a specific voice channel.
- Optionally send a direct message to the user who joins the voice channel.
- Assign roles to users while they are connected to any voice channel, and remove the roles when they disconnect.
- Support for multiple voice channel configurations, each with its own message and notification channel.
- Configurable cooldown to prevent notification spam.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=ping-on-vc-join) on your server.
2. To set up **join notifications**: Open the [Message on Voice Join configuration](https://scnx.app/glink?page=bot/configuration?file=ping-on-vc-join%7Cconfig) and create a new configuration element. Add the voice channels to monitor, set the notification channel, and customize the message.
3. To set up **voice roles**: Open the [Configuration](https://scnx.app/glink?page=bot/configuration?file=ping-on-vc-join%7Cactual-config) and enable "Assign roles to members connected to voice channels". Add the roles to assign in the "Roles for users that are connected to voice channels" field.
4. Make sure the bot has the **View Channel** permission for the voice channels and **Send Messages** and **Embed Links** permissions in the notification channel. For voice roles, the bot also needs the **Manage Roles** permission.

## Usage {#usage}

- **Join notifications**: When a user joins one of the monitored voice channels, the bot waits 3 seconds (to confirm they stay in the channel), then sends the configured message to the notification channel. If a direct message is enabled, the user will also receive a DM.
- **Voice roles**: When a user connects to any voice channel, the configured roles are assigned to them. When they disconnect entirely (not just switching channels), the roles are removed. Bots are excluded from voice role assignment.
- **Cooldown**: If cooldown is enabled, the notification for a specific channel will only be sent once within the cooldown period. If cooldown is disabled, a per-user cooldown of 5 minutes is applied instead.

## Configuration {#configuration}

### Message on Voice Join {#configuration-config}

In this configuration file, you set up notifications for voice channel joins. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=ping-on-vc-join%7Cconfig).

| Field                       | Description                                                                                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channels                    | Voice channels that should trigger the notification when a user joins.                                                                                    |
| Message                     | The message sent in the notification channel when a user joins. Supports `%tag%` (user tag), `%vc%` (voice channel name), and `%mention%` (user mention). |
| Notification-Channel        | The text channel where the notification message will be sent.                                                                                             |
| Enable Cooldown?            | When enabled, messages will only be sent once per channel within the cooldown period.                                                                     |
| Cooldown Duration (Minutes) | Duration in minutes to wait before sending another message for the same channel. Only applies if cooldown is enabled.                                     |
| Join-DM                     | If enabled, the bot will send a direct message to the user who joins the voice channel.                                                                   |
| Join-DM-Message             | The DM message sent to the user. Supports `%vc%` (voice channel name). Only applies if Join-DM is enabled.                                                |

### Configuration {#configuration-actual-config}

In this configuration file, you can set up voice channel role assignment. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=ping-on-vc-join%7Cactual-config).

| Field                                                | Description                                                                                                            |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Assign roles to members connected to voice channels? | If enabled, users will receive a role when they join a voice channel, which is removed when they leave.                |
| Roles for users that are connected to voice channels | The roles to assign to users while they are connected to a voice channel. Only applies if the above option is enabled. |

## Troubleshooting {#troubleshooting}

- **Notifications are not being sent**: Verify that the voice channel IDs are correct in the configuration and that the bot has "View Channel" permission in both the voice channel and the notification text channel. Also check that the notification channel ID is correct.
- **Notifications are sent with a delay**: The bot intentionally waits 3 seconds before sending the notification to confirm that the user stays in the voice channel.
- **DMs are not being sent**: Some users have DMs disabled. The bot will silently skip users who cannot receive DMs.
- **Voice roles are not being assigned or removed**: Make sure the bot has the "Manage Roles" permission and that the bot's highest role is above the roles it needs to assign. Voice roles are not applied to bots.
