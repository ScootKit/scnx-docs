# Status-Roles

Simple module to reward users who have specific words in their custom Discord status with roles.

<ModuleOverview moduleName="status-roles" />

## Features {#features}

- Automatically assign roles to users who have specific words or phrases in their custom Discord status.
- Automatically remove the assigned roles when a user changes their status and no longer includes the required words.
- Optionally remove all other (non-managed) roles from users when they match the status criteria.
- Option to ignore offline users, preventing role removal when users go offline (recommended for larger servers).

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=status-roles) on your server.
2. Open the [module configuration](https://scnx.app/glink?page=bot/configuration?file=status-roles%7Cconfig) and add the words users should have in their status to the "Words" field.
3. Add the roles that should be assigned to matching users in the "Roles" field.
4. Make sure the bot has the **Manage Roles** permission, and that the bot's highest role is above the roles you want to assign.
5. The bot also requires the **Presence Intent** to detect status changes. This is enabled by default on SCNX.
6. If your server has more than 500 members, it is recommended to enable "Do not remove roles from offline users" to prevent incorrect role removal.

## Usage {#usage}

- Once configured, the module works automatically. When a user updates their custom Discord status, the bot checks if any of the configured words appear in it.
- If a match is found, the configured roles are assigned to the user.
- If the user changes their status and the words are no longer present, the roles are removed (unless the user is offline and the "Do not remove roles from offline users" option is enabled).
- The word matching is case-insensitive.

## Configuration {#configuration}

This is the configuration file for the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=status-roles%7Cconfig).

| Field                                  | Description                                                                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Words                                  | Words users should have in their custom status. The bot checks if any of these words appear in the user's status (case-insensitive). |
| Roles                                  | Roles to assign to users who have one of the configured words in their status.                                                       |
| Remove all other roles                 | If enabled, all other non-managed roles will be removed from the user when they match the status criteria.                           |
| Do not remove roles from offline users | If enabled, the status roles will not be removed from users who are offline. Recommended on servers with more than 500 members.      |

## Troubleshooting {#troubleshooting}

- **Roles are not being assigned**: Make sure the bot has the "Manage Roles" permission and that the bot's highest role is above the roles you want to assign. Also verify that the words in the configuration match what users have in their custom status.
- **Roles are being removed when users go offline**: Enable "Do not remove roles from offline users" in the configuration. When users go offline, Discord removes their status information, causing the bot to think the user no longer matches.
- **The module does not seem to detect any status changes**: Ensure that the Presence Intent is enabled for your bot. On SCNX, this is enabled by default.
