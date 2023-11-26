# Automatic Publishing

Publishes messages in announcement channels

<ModuleOverview moduleName="auto-publisher" />

## Features {#features}

* Automatically publish messages sent in announcement channels in your server.
* Whitelist or blacklist channels from automatic publishing.
* Ignore messages sent by bots (optional).

## Setup {#setup}

1. Make sure the bot has the "Manage messages" and "Send message" on all announcement channels the bot should follow.
2. [Configure](#configuration) the module.
3. Reload your configuration to apply changes.

## Usage {#usage}

Messages sent in eligible announcement channels (based on your [configuration](#configuration)) will be published to all
servers that follow your channel automatically.
When the module publishes a message, the bot will react with a `✅` as emoji to indicate publication success. This
reaction will be removed automatically after a few seconds.

## Configuration {#configuration}

Without any configuration, your bot will publish every message sent in announcement channels. Using the configuration,
you can fine-tune this behavior for your use-case.
Open [this file in your Dashboard](https://scnx.app/glink?page=bot/configuration?file=auto-publisher|config).

| Field                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message Publishing Mode | This will determine in which announcement channels the module should publish new messages. The following options are available: <ul><li><code>all</code>: This is the default behavior. Messages sent in all announcement channels will be published automatically.</li><li><code>whitelist</code>: If this option is set, only messages sent in channels that are added to the "whitelist" field will be published automatically.</li><li><code>blacklist</code>: If this option is set, only messages sent in channels that are not added to the "blacklist" field will be published automatically.</li></ul> |
| Blacklist               | *This will only work if you set "Message Publishing Mode" to "blacklist".*<br/>Messages sent in channels configured in this field won't be published.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Whitelist               | *This will only work if you set "Message Publishing Mode" to "whitelist".*<br/>Messages sent in channels configured in this field will be published automatically.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Ignore bots?            | If enabled, messages sent by bots won't be published automatically.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Troubleshooting {#troubleshooting}

If you believe the bot is not publishing messages automatically, please make sure that

* the current channel is added to the Whitelist field if "Message Publishing Mode" is set to `whitelist` in
  your [configuration](#configuration).
* the current channel is NOT added to the Blacklist field if "Message Publishing Mode" is set to `blacklist` in
  your [configuration](#configuration).
* the bot has "Send messages" and "Manage messages" permissions on the current channel.
* the message that you want published hasn't been sent by a bot (unless you have "Ignore bots?" disabled in
  your [configuration](#configuration)).
* the message was sent in an announcement channel and hasn't been published before.
* the number of messages sent in the announcement channel is relatively low (Discord only allows a limited number of
  messages to be published).