# Role-Nicknames

Simple module to edit user nicknames based on roles.

<ModuleOverview moduleName="nicknames" />

## Features {#features}

- Automatically add prefixes and/or suffixes to member nicknames based on their roles.
- Supports multiple roles with different prefixes and suffixes -- the highest role in the hierarchy takes priority.
- Nicknames update automatically when a member's roles or nickname changes, including same-size role swaps where one
  role is removed and another is added in the same update.
- All existing members are renamed on bot startup.
- Optionally force the use of display names instead of custom nicknames.
- Coordinates with other nickname-modifying modules (Activity-Streak, AFK-System, Moderation, Name-List-Cleaner,
  Custom Commands) through a [central nickname manager](#central-nickname-manager) so prefixes, suffixes and
  overrides no longer overwrite each other.

## Setup {#setup}

1. Make sure the bot has the `Manage Nicknames` permission.
2. Ensure the bot's role is positioned above the roles of members whose nicknames should be modified in the server's role hierarchy. Note that the server owner's nickname cannot be changed.
3. Configure role prefixes and suffixes in the [Roles configuration](#configuration-strings).

## Usage {#usage}

This module works automatically -- there are no commands. When a member's roles or nickname changes, the bot will automatically apply the appropriate prefix and/or suffix based on their highest matching role.

The module evaluates roles from highest to lowest position in the role hierarchy. The first matching role configuration found will be applied. If a member has no matching roles, their nickname will remain unchanged (though existing prefixes/suffixes from previously matching roles will be removed).

When the bot starts, it scans all existing members and applies the correct prefixes and suffixes.

If a member's nickname is edited externally (in Discord, by another bot, or via `/nick`), the new value is taken as
the member's stored base name -- the next role-driven update will rebuild the nickname from that base, with the
configured prefix/suffix re-applied on top.

## Central nickname manager {#central-nickname-manager}

Every bot-initiated nickname change on the server is coordinated by a single nickname manager. Each module that
modifies nicknames (role prefix/suffix here, activity-streak suffixes, AFK markers, mute / quarantine prefixes,
name-list-cleaner sanitization, the `Change nickname` action in Custom Commands) contributes its piece, and the
manager renders the final string in a fixed order:

1. The base name. When this module is enabled, it provides the member's stored preferred name; otherwise the manager
   falls back to the member's Discord display name.
2. Sanitization from the [Name-List-Cleaner](/docs/custom-bot/modules/tools/name-list-cleaner), if enabled.
3. Role prefixes / suffixes from this module (only when enabled) and streak suffixes from
   [Activity-Streak](/docs/custom-bot/modules/community/activity-streak).
4. Wrapping overrides such as `[Muted]`, `[AFK]`, or quarantine prefixes.

The manager only calls Discord when the rendered value actually differs from the member's current nickname, which
reduces audit-log noise and Discord API call volume on busy servers.

The manager itself is always active, regardless of which modules are enabled. With this module disabled, role
prefixes and suffixes are not applied, but contributions from other modules (mute, AFK, cleaner, ...) still
coordinate through the same pipeline.

## Configuration {#configuration}

This module has multiple configuration files. Please review them below.

### Module configuration {#configuration-config}

In this configuration file, you can configure the functionality of this module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=nicknames%7Cconfigs%2Fconfig).

| Field              | Description                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Force display name | If enabled, the bot will use the user's display name instead of their custom server nickname as the base name for applying prefixes and suffixes. |

### Roles {#configuration-strings}

In this configuration file, you can define prefix and suffix rules for each role. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=nicknames%7Cconfigs%2Fstrings).

Each entry in this list represents a role rule with the following fields:

| Field  | Description                                                    |
| ------ | -------------------------------------------------------------- |
| Role   | The role for which the prefix and/or suffix should be applied. |
| Prefix | The text to prepend to the member's nickname.                  |
| Suffix | The text to append to the member's nickname.                   |

## Troubleshooting {#troubleshooting}

<details>
  <summary>Nicknames are not being updated</summary>
  <ul>
    <li>Make sure the bot has the <code>Manage Nicknames</code> permission.</li>
    <li>Ensure the bot's role is positioned above the member's highest role in the role hierarchy.</li>
    <li>The server owner's nickname cannot be changed by bots -- this is a Discord limitation.</li>
  </ul>
</details>

<details>
  <summary>The wrong prefix/suffix is being applied</summary>

The module uses the highest role in the server hierarchy that has a configured prefix/suffix. Make sure your role rules are configured for the correct roles and that the role positions in your server match your expectations.

</details>

<details>
  <summary>The nickname has duplicated prefixes or suffixes</summary>

This was a known issue when the role-nicknames module ran alongside Activity-Streak (and similar nickname-modifying modules) on older bot versions: each streak update could re-append the role suffix, eventually filling the entire 32-character nickname with stacked decorations. The [central nickname manager](#central-nickname-manager) prevents this by rendering the final string from each module's contributions instead of repeatedly editing the nickname in place. If you still see duplicated decorations, restart the bot once so the manager can rebuild the affected members' base names from their current nicknames.

</details>

## Stored data {#data-usage}

The following data is being stored about every member:

- The Discord User ID
- The member's base nickname (without any prefix or suffix applied)
- Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
