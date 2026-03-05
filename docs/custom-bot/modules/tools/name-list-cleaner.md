# Name List Cleaner

Remove special characters from the beginning of usernames to keep the member list clean and sorted.

<ModuleOverview moduleName="name-list-cleaner" />

## Features {#features}

* Automatically remove special characters from the beginning of member nicknames.
* Choose between cleaning nicknames (keeping the rest) or removing them entirely.
* Configure a whitelist or blacklist of allowed/blocked characters.
* Exempt specific users from name cleaning.
* Optionally check usernames in addition to nicknames.
* Processes all existing members on bot startup and monitors changes in real-time.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=name-list-cleaner) on your server.
2. Make sure the bot has the `Manage Nicknames` permission and that its role is positioned above the roles of members whose nicknames should be cleaned.
3. Optionally [configure](#configuration) a character whitelist or blacklist to fine-tune which characters are allowed.

## Usage {#usage}

Once enabled, the module works automatically:

* When the bot starts, it scans all existing members and cleans any nicknames that start with special characters.
* When a member updates their nickname or username, the bot checks and cleans it in real-time.
* By default, all non-alphanumeric characters at the start of names are removed. You can customize this behavior with the whitelist/blacklist configuration.
* If "Keep Nickname" is enabled, the cleaned nickname is set (with the offending characters removed). If disabled, the nickname is removed entirely, showing the user's username instead.

:::info
The bot cannot change the nickname of the server owner. This is a Discord limitation.
:::

## Configuration {#configuration}

In this configuration file, you can configure the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=name-list-cleaner%7Cconfigs/config).

| Field | Description |
|-------|-------------|
| Keep Nickname | If enabled, special characters are removed from the nickname and the cleaned version is set. If disabled, the nickname is removed entirely and the username is shown instead. |
| Symbol Whitelist | A list of characters that are allowed (whitelist mode) or blocked (blacklist mode) at the start of names. If empty, all non-alphanumeric characters are removed. |
| Is Blacklist | If enabled, the character list is treated as a blacklist (listed characters are blocked). If disabled, the list is treated as a whitelist (only listed characters and alphanumeric characters are allowed). |
| User Whitelist | Users that are exempt from name cleaning. Their nicknames will not be modified. |
| Also check usernames | If enabled, usernames are also checked for special characters in addition to nicknames. |

## Troubleshooting {#troubleshooting}

* **The bot is not cleaning nicknames**: Make sure the bot has the `Manage Nicknames` permission and its role is above the roles of the affected members.
* **The server owner's nickname is not being cleaned**: The bot cannot change the nickname of the server owner. This is a limitation from Discord.
* **Certain characters are not being removed**: Check your whitelist/blacklist configuration. If the symbol list is empty, only non-alphanumeric characters are removed from the start of names.
