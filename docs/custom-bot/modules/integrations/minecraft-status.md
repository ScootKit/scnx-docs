# Minecraft Server Status

Show the amount of players on your Minecraft server in a channel and display your MOTD and more in a message.

<ModuleOverview moduleName="minecraft-status" />

## Features {#features}

* Display the current player count and status of your Minecraft server in a voice channel or category name.
* Show detailed server information (MOTD, version, player count) in an automatically updating message embed.
* Support for both Java and Bedrock edition servers.
* Support for SRV records and custom ports.
* Customizable online and offline status messages.

## Setup {#setup}

1. Make sure your Minecraft server has the `enable-query` option set to `true` in your `server.properties` file.
2. Open the [Minecraft Servers configuration](https://scnx.app/glink?page=bot/configuration?file=minecraft-status%7Cservers).
3. Click on "Add new Minecraft server" and configure it as described in the [configuration section](#configuration).
4. If you want to use the status channel feature, create a voice channel or category and make sure the bot has "View channel" and "Manage channel" permissions on it.
5. If you want to use the status message feature, make sure the bot has "View channel", "Send messages" and "Embed links" permissions on the configured text channel.
6. Reload your bot's configuration to apply the changes.

## Usage {#usage}

After [setting up](#setup) and [configuring](#configuration) this module, no additional actions are required. The bot will automatically check the status of your configured Minecraft servers every six minutes and update the configured channels and messages accordingly.

* If you enabled the **status channel** feature, the name of the configured voice channel or category will be updated to reflect the current player count or show an offline message.
* If you enabled the **status message** feature, the bot will send a message in the configured text channel and keep it updated with the current server status, including player count, version, MOTD and more.

## Configuration {#configuration}

This configuration file allows you to add and configure your Minecraft servers. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=minecraft-status%7Cservers).

| Field | Description |
|-------|-------------|
| Server Address | The address of your Minecraft server. You can include a port if needed. SRV records are supported. |
| Bedrock server? | Enable this if your server is a Bedrock edition server instead of Java edition. |
| Enable status as channel name? | If enabled, a voice channel or category can be used to display the server status in its name. |
| Status Channel | The voice channel or category whose name will be updated to reflect the server status. Only available if the status channel feature is enabled. |
| Offline status | The channel name to display when the server is not reachable. Only available if the status channel feature is enabled. |
| Online status | The channel name to display when the server is reachable. Only available if the status channel feature is enabled.<br/><i>Please review available parameters in your dashboard.</i> |
| Enable status as a message? | If enabled, a message will be sent and automatically updated with the server status. |
| Channel to send message into | The text channel in which the status message will be sent and updated automatically. Only available if the status message feature is enabled. |
| Online status message | The message displayed when the server is online. Supports embeds. Only available if the status message feature is enabled.<br/><i>Please review available parameters in your dashboard.</i> |
| Offline status message | The message displayed when the server is not reachable. Supports embeds. Only available if the status message feature is enabled.<br/><i>Please review available parameters in your dashboard.</i> |

## Troubleshooting {#troubleshooting}

<details>
<summary>The server status is not updating</summary>
<ul>
    <li>Make sure your Minecraft server has the <code>enable-query</code> option set to <code>true</code> in your <code>server.properties</code> file.</li>
    <li>Verify that the server address you entered is correct and reachable.</li>
    <li>If your server has been flagged as "Breaking Minecraft EULA", it will not be supported.</li>
    <li>Ensure the bot has the "Manage channel" permission on the configured voice channel (for channel name updates) or "Send messages" and "Embed links" permissions on the text channel (for status messages).</li>
    <li>The status updates every six minutes. Please wait for the next update cycle.</li>
</ul>
</details>

<details>
<summary>The channel name is not changing</summary>
<ul>
    <li>Discord rate-limits channel name changes. It may take longer than expected for the change to appear.</li>
    <li>Make sure the bot has "View channel" and "Manage channel" permissions on the configured channel.</li>
    <li>The channel name will only be updated if the new name differs from the current one.</li>
</ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every status message:

* The channel ID combined with the server address (used as a unique identifier)
* The ID of the status message sent by the bot
* Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
