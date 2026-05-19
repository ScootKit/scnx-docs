# Automatic reactions

Automatically reacts with selected emojis in selected channels or if a user gets pinged.

<ModuleOverview moduleName="auto-react" />

## Features {#features}

- Automatically react to every message in configured channels or categories with specified emojis.
- React to messages when a specific user is mentioned (via @mention).
- React to messages sent by specific users (authors) or users with specific roles.
- Automatically reply with a configured message when a specific user is mentioned.
- Support for multiple emojis per trigger (separated by `|`).
- Option to only react to direct @mentions or also to inline-reply mentions.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=auto-react&ref=scnx-app-docs).
2. Configure the module as described in the [configuration section](#configuration) to set up your reactions and replies.
3. The bot needs the "Add Reactions" permission in any channel where you want it to react.

## Usage {#usage}

Once configured, the module works automatically without any user interaction. When a message is sent, the bot checks the following triggers in order and reacts accordingly:

- If the message is in a configured **channel**, the bot reacts with the specified emojis.
- If the message is in a channel inside a configured **category**, the bot reacts with the specified emojis.
- If the message author has a configured **role**, the bot reacts with the specified emojis.
- If the message is sent by a configured **author**, the bot reacts with the specified emojis.
- If a configured **user is mentioned** in the message, the bot reacts with the specified emojis.
- If a configured **user is mentioned** and a reply is configured, the bot replies with the configured message.

## Configuration {#configuration}

### Configuration {#config-main}

In this configuration file, you can configure automatic reactions. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=auto-react%7Cconfigs/config).

| Field                    | Description                                                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Channels                 | Add channels and the emojis the bot should react with on every message. Multiple emojis can be separated with `\|`.                                    |
| Mentions                 | Add users and the emojis the bot should react with when they are mentioned. Multiple emojis can be separated with `\|`.                                |
| Roles                    | Add roles. When a user with one of these roles sends a message, the bot reacts with the configured emojis. Multiple emojis can be separated with `\|`. |
| Authors                  | Add users and the emojis the bot should react with on their messages. Multiple emojis can be separated with `\|`.                                      |
| Categories               | Add categories and the emojis the bot should react with on every message in channels of that category. Multiple emojis can be separated with `\|`.     |
| Only react to @mentions? | If enabled, the bot only reacts to direct @mentions. If disabled, the bot will also react to mentions in inline-replies or other mention types.        |

### Replies {#config-replies}

In this configuration file, you can configure automatic replies to user mentions. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=auto-react%7Cconfigs/replies).

| Field | Description                                                                 |
| ----- | --------------------------------------------------------------------------- |
| User  | The user whose mention should trigger the reply.                            |
| Reply | The reply message that the bot sends when the configured user is mentioned. |

## Troubleshooting {#troubleshooting}

<details>
    <summary>The bot is not reacting to messages</summary>
    <ul>
        <li>Make sure the bot has the "Add Reactions" permission in the channel.</li>
        <li>Make sure the emojis are valid. If using custom emojis, the bot must have access to them.</li>
        <li>Verify that the correct channel, user, or role IDs are configured.</li>
    </ul>
</details>
<details>
    <summary>The bot is not reacting to mentions in replies</summary>
    <ul>
        <li>By default, the bot only reacts to direct @mentions. Disable the "Only react to @mentions?" option to also react to mentions in inline-replies.</li>
    </ul>
</details>
