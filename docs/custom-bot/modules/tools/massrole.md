# Massrole

Simple module to manage the roles of many members at once.

<ModuleOverview moduleName="massrole" />

## Features {#features}

* Add a role to all members, only bots, or only humans on your server with a single command.
* Remove a role from all members, only bots, or only humans on your server.
* Remove all non-managed roles from all members, only bots, or only humans.
* Restrict usage to specific admin roles for security.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=massrole) on your server.
2. Open the [module configuration](https://scnx.app/glink?page=bot/configuration?file=massrole%7Cconfigs/config) and add the roles that should be allowed to use the `/massrole` command to the "Adminroles" field.
3. Make sure the bot has the **Manage Roles** permission, and that the bot's highest role is above the roles you want to manage.
4. In your Discord server settings, ensure that users with the configured admin roles are permitted to use the `/massrole` command (the command requires the Administrator permission by default).

## Usage {#usage}

* Use `/massrole add` to add a role to members on your server. You can optionally specify a target to limit the action to all users, only bots, or only humans.
* Use `/massrole remove` to remove a specific role from members.
* Use `/massrole remove-all` to remove all non-managed roles from members. This is a destructive action - use with caution.
* All commands will provide feedback on whether the action was executed successfully or if errors occurred (typically due to insufficient permissions for some members).

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description |
|---------|-------------|
| `/massrole add role:<Role> [target:<Target>]` | Adds the specified role to the targeted members. Target can be "all", "bots", or "humans" (defaults to "all"). |
| `/massrole remove role:<Role> [target:<Target>]` | Removes the specified role from the targeted members. Target can be "all", "bots", or "humans" (defaults to "all"). |
| `/massrole remove-all [target:<Target>]` | Removes all non-managed roles from the targeted members. Target can be "all", "bots", or "humans" (defaults to "all"). |

## Configuration {#configuration}

### Configuration {#configuration-config}

In this configuration file, you can configure the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=massrole%7Cconfigs/config).

| Field | Description |
|-------|-------------|
| Adminroles | Roles that are allowed to use the `/massrole` command. Users need to have at least one of these roles. |

### Messages {#configuration-strings}

In this configuration file, you can customize the messages sent by the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=massrole%7Cconfigs/strings).

| Field | Description |
|-------|-------------|
| Action executed | Message sent when a massrole action was executed successfully. |
| Action not executed | Message sent when a massrole action could not be fully executed, usually because the bot lacks sufficient permissions for some members. |

## Troubleshooting {#troubleshooting}

* **The bot reports the action was not executed**: Make sure the bot has the "Manage Roles" permission and that the bot's highest role is positioned above the roles it needs to manage. The bot cannot modify roles of members whose highest role is above the bot's highest role.
* **The command is not available**: Ensure that the admin roles are configured in the module configuration and that the user running the command has one of those roles. Additionally, verify that the command permissions in your Discord server settings allow the appropriate users to execute `/massrole`.
* **The command takes a long time**: On large servers, massrole operations may take several minutes as the bot processes each member individually. The bot will respond once the operation is complete.
