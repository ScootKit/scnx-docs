# Reaction Roles

Let users assign roles to themselves the good old way - by adding and removing a reaction.

<ModuleOverview moduleName="reaction-roles" />

## Features {#features}

- Allow users to self-assign roles by reacting to a message with a specific emoji.
- Automatically remove roles when a user removes their reaction.
- Support for multiple role assignments per message using different emojis.
- Support for assigning multiple roles with a single reaction (comma-separated role IDs).
- Works with both default and custom emojis.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=reaction-roles) on your server.
2. Send a message in your server that you want to use for reaction roles (or use an existing message). Copy the message ID.
3. Open the [Messages configuration](https://scnx.app/glink?page=bot/configuration?file=reaction-roles%7Cmessages) and create a new configuration element.
4. Set the "Message-ID" to the ID of the message you want to use.
5. In the "Reactions" field, add key-value pairs where the key is the emoji (e.g. the unicode emoji or custom emoji identifier) and the value is the role ID (or multiple role IDs separated by commas).
6. Make sure the bot has the **Manage Roles** permission, and that the bot's highest role is above the roles you want to assign.
7. The bot also needs **View Channel** and **Read Message History** permissions in the channel where the message is located.
8. Have a user react with the configured emoji first - the bot will then also add its own reaction to indicate it is active.

## Usage {#usage}

- Users simply react to the configured message with the specified emoji to receive the associated role(s).
- When a user removes their reaction, the associated role(s) are automatically removed.
- The bot will add its own reaction to the message after the first user reacts, serving as a visual indicator.

## Configuration {#configuration}

This is the configuration file for the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=reaction-roles%7Cmessages).

| Field      | Description                                                                                                                                                             |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message-ID | The ID of the message that this reaction role configuration should apply to.                                                                                            |
| Reactions  | Key-value pairs mapping emojis to role IDs. The key is the emoji value and the value is the role ID(s), separated with commas if assigning multiple roles per reaction. |

## Troubleshooting {#troubleshooting}

- **The bot does not respond to reactions**: Make sure the bot has "View Channel" and "Read Message History" permissions in the channel. Also verify that the message ID in the configuration matches the message you are reacting to.
- **Roles are not being assigned**: Ensure the bot has the "Manage Roles" permission and that the bot's highest role is positioned above the roles it needs to assign. Double-check that the role IDs in the configuration are correct.
- **Custom emojis are not working**: Make sure the emoji identifier in the configuration exactly matches the emoji format Discord uses internally. For custom emojis, this is typically the emoji name and ID in the format `name:id`.
- **Consider using Button Roles instead**: For a better user experience, consider using Button-Roles and Self-Role-Elements available in the Login-As-Bot feature on SCNX, which provide a more modern interface.
