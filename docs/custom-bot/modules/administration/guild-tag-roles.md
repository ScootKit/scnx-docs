# Guild-Tag-Roles

Reward users who equip your server's guild tag with roles.

<ModuleOverview moduleName="guild-tag-roles" />

## Features {#features}

* Automatically assign roles to users who have your server's guild tag equipped and displayed.
* Automatically remove the assigned roles when a user unequips or hides the guild tag.
* Real-time detection via user update events when Discord reports guild tag changes.
* Periodic full sync every 3 hours to catch any missed changes.

## Setup {#setup}

1. Make sure your server has a guild tag set up in your Discord server settings.
2. [Enable the module](https://scnx.app/glink?page=bot/modules?query=guild-tag-roles) on your server.
3. Open the [module configuration](https://scnx.app/glink?page=bot/configuration?file=guild-tag-roles%7Cconfig) and add the roles that should be assigned to users with your guild tag equipped.
4. Make sure the bot has the **Manage Roles** permission, and that the bot's highest role is above the roles you want to assign.

## Usage {#usage}

Once configured, the module works automatically. When a user equips or unequips your server's guild tag, the bot will attempt to assign or remove the configured roles in real-time. Additionally, a full sync of all members runs on bot startup and every 3 hours to ensure roles stay accurate.

## Configuration {#configuration}

This is the configuration file for the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=guild-tag-roles%7Cconfig).

| Field | Description |
|-------|-------------|
| Roles | Roles to assign to users who have your server's guild tag equipped and displayed. |

## Troubleshooting {#troubleshooting}

* **Roles are not being assigned**: Make sure the bot has the "Manage Roles" permission and that the bot's highest role is above the roles you want to assign. Also verify that the user has the guild tag both equipped and set to visible.
* **Roles are not updated immediately**: Real-time detection depends on Discord sending guild tag data in user update events. If a change isn't picked up immediately, the periodic sync (every 3 hours) will correct it.
* **The module does not seem to detect guild tag changes**: Ensure your Discord server actually has a guild tag configured in server settings. The bot checks if the user's primary guild matches your server.
