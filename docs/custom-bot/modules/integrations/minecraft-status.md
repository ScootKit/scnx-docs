# Minecraft Server Status

Show the amount of players on your Minecraft server in a channel and display your MOTD and more in a message.

<ModuleOverview moduleName="minecraft-status" />

## Features {#features}

- Display the current player count and status of your Minecraft server in a voice channel or category name.
- Show detailed server information (MOTD, version, player count) in an automatically updating message embed.
- Support for both Java and Bedrock edition servers.
- Support for SRV records and custom ports.
- Customizable online and offline status messages.
- Use the `%lastUpdated%` placeholder in the online and offline status messages to show when the status was last checked, as a relative time. It works in the message description and field values, but not in titles or footers.

## Setup {#setup}

1. Make sure your Minecraft server is reachable from data centers. Some DDoS protection providers (such as Cloudflare or TCPShield) may block status checks from data centers, in which case your server will be shown as offline.
2. Open the [Minecraft Servers configuration](https://scnx.app/glink?page=bot/configuration?file=minecraft-status%7Cservers).
3. Click on "Add new Minecraft server" and configure it as described in the [configuration section](#configuration). If your server is a Bedrock server, enter the server address together with its port, for example `play.example.com:19133`. Bedrock has no SRV records (unlike Java), so without a port the bot checks port 19132 and your server is shown as offline if it uses a different port. Many hosts (for example Aternos) give Bedrock servers a custom port, which you can find in the host's panel or connection info. Java servers normally don't need a port.
4. If you want to use the status channel feature, create a voice channel or category and make sure the bot has "View channel" and "Manage channel" permissions on it.
5. If you want to use the status message feature, make sure the bot has "View channel", "Send messages" and "Embed links" permissions on the configured text channel.
6. Reload your bot's configuration to apply the changes.

## Usage {#usage}

After [setting up](#setup) and [configuring](#configuration) this module, no additional actions are required. The bot will automatically check the status of your configured Minecraft servers every 10 minutes and update the configured channels and messages accordingly.

- If you enabled the **status channel** feature, the name of the configured voice channel or category will be updated to reflect the current player count or show an offline message.
- If you enabled the **status message** feature, the bot will send a message in the configured text channel and keep it updated with the current server status, including player count, version, MOTD and more. The message is only edited when something changed.

Good to know:

- Results can be up to 15 minutes old, because SCNX caches them.
- A server is only shown as offline after two separate checks both found it offline. It can therefore take up to about 40 minutes until a server that went offline is shown as offline, while a server that came back online is shown within about 25 minutes.
- If the status cannot be determined (the check itself failed), the bot keeps the last status instead of showing the server as offline.
- The status checks identify as a recent Minecraft version, so your server answers the way it would for a current client. If your server or a plugin shows a different MOTD or version text depending on the player's Minecraft version, the status message and channel name show what a recent client sees. This can differ from what you see with an older version.
- Server owners can opt out of SCNX status checks. If the owner of a server opted out, its status is no longer updated. If you own a server and want to opt out, you can [submit a request here](https://scnx.app/user/support/new?topic=cmuo8ox8b018211gx6lx0t2i0).

## Configuration {#configuration}

This configuration file allows you to add and configure your Minecraft servers. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=minecraft-status%7Cservers).

| Field                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server Address                 | The address of your Minecraft server: a hostname or IPv4 address, optionally with a port. SRV records are supported (Java). IPv6 addresses, hostnames with special (non-ASCII) characters and private or local network addresses are not supported. Allowed ports are 25565, 19132 and any port from 1024 upwards. Bedrock servers usually need the port, for example `play.example.com:19133`, because Bedrock has no SRV records. |
| Bedrock server?                | Enable this if your server is a Bedrock edition server instead of Java edition. Bedrock servers usually need a port in the server address.                                                                                                                                                                                                                                                                                          |
| Enable status as channel name? | If enabled, a voice channel or category can be used to display the server status in its name.                                                                                                                                                                                                                                                                                                                                       |
| Status Channel                 | The voice channel or category whose name will be updated to reflect the server status. Only available if the status channel feature is enabled.                                                                                                                                                                                                                                                                                     |
| Offline status                 | The channel name to display when the server is not reachable. Only available if the status channel feature is enabled.                                                                                                                                                                                                                                                                                                              |
| Online status                  | The channel name to display when the server is reachable. Only available if the status channel feature is enabled.<br/><i>Please review available parameters in your dashboard.</i>                                                                                                                                                                                                                                                 |
| Enable status as a message?    | If enabled, a message will be sent and automatically updated with the server status.                                                                                                                                                                                                                                                                                                                                                |
| Channel to send message into   | The text channel in which the status message will be sent and updated automatically. Only available if the status message feature is enabled.                                                                                                                                                                                                                                                                                       |
| Online status message          | The message displayed when the server is online. Supports embeds. Only available if the status message feature is enabled. You can use `%lastUpdated%` to show when the status was last checked.<br/><i>Please review available parameters in your dashboard.</i>                                                                                                                                                                   |
| Offline status message         | The message displayed when the server is not reachable. Supports embeds. Only available if the status message feature is enabled. You can use `%lastUpdated%` to show when the status was last checked.<br/><i>Please review available parameters in your dashboard.</i>                                                                                                                                                            |

## Troubleshooting {#troubleshooting}

<details>
<summary>The server status is not updating</summary>
<ul>
    <li>Verify that the server address you entered is correct and reachable.</li>
    <li>If your server has been flagged as "Breaking Minecraft EULA", it will not be supported.</li>
    <li>Ensure the bot has the "Manage channel" permission on the configured voice channel (for channel name updates) or "Send messages" and "Embed links" permissions on the text channel (for status messages).</li>
    <li>The status is checked every 10 minutes. Please wait for the next update cycle.</li>
    <li>If the status is not updated, the bot keeps the last status and writes a message to the bot log. The log messages mean that the status could not be determined right now, that the configured address is not a valid Minecraft server address, or that the owner of the server has opted out of status checks.</li>
</ul>
</details>

<details>
<summary>The server shows offline although it is online</summary>
<ul>
    <li>A DDoS protection or firewall (such as Cloudflare or TCPShield) may be blocking status checks from data centers. Make sure your server is reachable from data centers.</li>
    <li>Your server might not be answering status requests.</li>
    <li>Verify that the server address and port you entered are correct.</li>
    <li>If your server is a Bedrock server and you did not add its port to the address, add it, for example `play.example.com:19133`. You can find the port in your host's panel.</li>
    <li>Please wait for the next check. A server is only shown as offline after two checks both found it offline, and coming back online can take up to about 25 minutes to show.</li>
</ul>
</details>

<details>
<summary>The MOTD or version text differs from what I see in Minecraft</summary>
<ul>
    <li>The status checks identify as a recent Minecraft version. If your server or a plugin shows a different MOTD or version text depending on the player's Minecraft version, the bot shows what a recent client sees.</li>
    <li>Check your plugins and proxy settings for an option that changes the status depending on the client's Minecraft version.</li>
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

- The channel ID combined with the server address (used as a unique identifier)
- The ID of the status message sent by the bot
- Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
