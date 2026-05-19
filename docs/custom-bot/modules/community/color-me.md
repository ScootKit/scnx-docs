# Color me

Simple module to reward users who have boosted your server with a custom role.

<ModuleOverview moduleName="color-me" />

## Features {#features}

- Allow server boosters (or all users) to create a personal role with a custom name, color, and icon.
- Optionally remove custom roles automatically when a user stops boosting.
- Optionally recreate a user's previous custom role when they boost again.
- Configurable cooldown to prevent frequent role edits.
- Custom roles can optionally be displayed separately in the member list.
- Supports role icons on servers with Boost Level 2 or higher.

## Setup {#setup}

1. Make sure the bot has the `Manage Roles` permission.
2. Ensure the bot's role is positioned above the position where custom roles will be created in the server's role hierarchy.
3. Configure a "Role position" in the [module configuration](#configuration-config) to control where custom roles appear in the role hierarchy.
4. Set up [slash command permissions](/docs/custom-bot/slash-commands) for `/color-me` to control who can use the command (e.g., restrict to boosters only).

## Usage {#usage}

Users can manage their custom role using the `/color-me` command:

- Use `/color-me manage` to create or update your custom role. Provide a name, and optionally a hex color code and an icon image.
- Use `/color-me remove` to delete your custom role.

If a user already has a custom role, using `manage` will update the existing role. If the role was deleted (e.g., due to unboosting), it will be recreated with the same settings when the user boosts again (if "Recreate roles" is enabled).

A cooldown can be configured to limit how frequently users can edit their role.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                                           | Description                                                                                                                                                               |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/color-me manage name:<Text> [color:<Text>] [icon:<Attachment>]` | Create or update your custom role. Provide a name for the role. Optionally specify a hex color code (e.g., `#FF5733`) and upload an icon image (requires Boost Level 2+). |
| `/color-me remove confirm:<Boolean>`                              | Delete your custom role. Set confirm to `true` to confirm the deletion.                                                                                                   |

## Configuration {#configuration}

This module has multiple configuration files. Please review them below.

### Module configuration {#configuration-config}

In this configuration file, you can configure the functionality of this module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=color-me%7Cconfigs%2Fconfig).

| Field                         | Description                                                                                                                                                             |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Recreate roles                | If enabled, a user's custom role will be automatically recreated with its previous settings when they boost the server again.                                           |
| Separate roles in member-list | If enabled, custom roles will be displayed separately (hoisted) in the server's member list.                                                                            |
| Remove role on unboost        | If enabled, a user's custom role will be deleted automatically when they stop boosting the server. Disable this if non-boosters should also be able to use the command. |
| Role update cooldown          | The time (in hours) a user must wait before they can edit their custom role again.                                                                                      |
| Role position                 | The role beneath which custom roles will be created in the role hierarchy.                                                                                              |

### Module messages {#configuration-strings}

In this configuration file, you can customize the messages sent by this module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=color-me%7Cconfigs%2Fstrings).

| Field                     | Description                                                                                                                   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Role created              | Message shown when a user successfully creates their custom role.                                                             |
| Role created without icon | Message shown when a custom role is created but the role icon could not be applied because the server is below Boost Level 2. |
| Role updated              | Message shown when a user successfully updates their custom role.                                                             |
| Role updated without icon | Message shown when a custom role is updated but the role icon could not be applied because the server is below Boost Level 2. |
| Role removed              | Message shown when a user successfully deletes their custom role.                                                             |
| Role-limit reached        | Message shown when a custom role cannot be created because the server has reached Discord's maximum role limit.               |
| Cooldown                  | Message shown when a user tries to edit their role before the cooldown has expired.                                           |
| Invalid Color             | Message shown when the user provides an invalid hex color code.                                                               |

## Troubleshooting {#troubleshooting}

<details>
  <summary>Custom roles are not being created</summary>
  <ul>
    <li>Make sure the bot has the <code>Manage Roles</code> permission.</li>
    <li>Ensure the bot's role is positioned above the configured "Role position" in the role hierarchy.</li>
    <li>Check if your server has reached Discord's maximum role limit (250 roles).</li>
  </ul>
</details>

<details>
  <summary>Role icons are not being applied</summary>

Role icons require the server to be at Boost Level 2 or higher. If your server does not meet this requirement, the role will be created without an icon.

</details>

## Stored data {#data-usage}

The following data is being stored about every custom role:

- The Discord User ID of the role owner
- The Discord Role ID of the custom role
- The role name and color
- The timestamp of the last role edit (used for cooldown calculation)
- Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
