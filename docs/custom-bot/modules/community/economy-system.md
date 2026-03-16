# Economy

A simple economy system, containing a shop system, message-drops and commands to earn money.

<ModuleOverview moduleName="economy-system" />

## Features {#features}

* Users can earn virtual currency through working, committing crimes, collecting daily and weekly rewards, and message drops.
* A banking system allows users to deposit and withdraw funds for safekeeping.
* Rob other users to steal a percentage of their balance.
* A shop system where users can buy roles with their earned currency.
* Shop managers can create, edit, and delete shop items.
* An auto-updating leaderboard shows the wealthiest users.
* Message drops randomly reward users with currency when chatting.
* Users can toggle message drop notifications on or off.
* Admin commands to add, remove, or set user balances (optional, can be disabled for fairness).

## Setup {#setup}

1. Optionally configure a leaderboard channel and a shop channel in the [module configuration](#configuration-config) -- the bot will send and maintain auto-updating embeds in these channels.
2. Make sure the bot has `View Channel`, `Send Messages`, `Embed Links`, and `Manage Messages` permissions in the leaderboard and shop channels.
3. If using the shop system with role rewards, ensure the bot has the `Manage Roles` permission and its role is above the rewarded roles.
4. Configure currency name, symbol, and earning parameters in the [module configuration](#configuration-config).

## Usage {#usage}

Users can interact with the economy using the `/economy` command:

* **Earn currency**: Use `/economy work`, `/economy crime`, `/economy daily`, or `/economy weekly` to earn money. Each command has its own configurable cooldown.
* **Rob users**: Use `/economy rob` to steal a percentage of another user's balance (capped at a configurable maximum).
* **Check balance**: Use `/economy balance` to view your own or another user's balance, bank, and total.
* **Banking**: Use `/economy deposit` and `/economy withdraw` to move funds between your balance and bank. Use "all" as the amount to transfer everything.
* **Message drops**: Toggle drop notifications with `/economy msg_drop_msg enable` or `/economy msg_drop_msg disable`.

Shop managers and administrators can manage the shop:

* Use `/shop add` to create new items with a name, ID, price, and role reward.
* Use `/shop edit` to modify existing items.
* Use `/shop delete` to remove items.
* Users can browse the shop with `/shop list` and purchase items with `/shop buy`.

If admin cheats are enabled, administrators can use `/economy add`, `/economy remove`, `/economy set`, and `/economy destroy` to manage user balances.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description |
|---------|-------------|
| `/economy work` | Work to earn a random amount of currency (within configured min/max range). Subject to cooldown. |
| `/economy crime` | Attempt a crime with a 50% chance of success. On success, earn currency; on failure, lose half your balance. Subject to cooldown. |
| `/economy rob user:<User>` | Rob another user to steal a percentage of their balance, capped at a configured maximum. Subject to cooldown. |
| `/economy daily` | Collect your daily currency reward. Can be used once every 24 hours. |
| `/economy weekly` | Collect your weekly currency reward. Can be used once every 7 days. |
| `/economy balance [user:<User>]` | View your own balance or another user's balance, bank, and total. |
| `/economy deposit amount:<Text>` | Deposit currency from your balance into your bank. Use "all" to deposit everything. |
| `/economy withdraw amount:<Text>` | Withdraw currency from your bank into your balance. Use "all" to withdraw everything. |
| `/economy msg_drop_msg enable` | Enable message drop notifications for yourself. |
| `/economy msg_drop_msg disable` | Disable message drop notifications for yourself (you will still earn drops, just without notifications). |
| `/economy add user:<User> amount:<Integer>` | (Admin only) Add currency to a user's balance. Requires admin cheats to be enabled. |
| `/economy remove user:<User> amount:<Integer>` | (Admin only) Remove currency from a user's balance. Requires admin cheats to be enabled. |
| `/economy set user:<User> balance:<Integer>` | (Admin only) Set a user's balance to a specific amount. Requires admin cheats to be enabled. |
| `/economy destroy [confirm:<Boolean>]` | (Admin only) Destroy the entire economy, removing all user data, shop items, and cooldowns. Requires admin cheats to be enabled. |
| `/shop add item-name:<Text> item-id:<Text> price:<Integer> role:<Role>` | (Shop manager only) Create a new shop item with a name, ID, price, and role reward. |
| `/shop buy [item-name:<Text>] [item-id:<Text>]` | Purchase an item from the shop by name or ID. The role associated with the item will be granted. |
| `/shop list` | View all available items in the shop. |
| `/shop delete [item-name:<Text>] [item-id:<Text>]` | (Shop manager only) Delete a shop item by name or ID. |
| `/shop edit item-id:<Text> [item-new-name:<Text>] [new-price:<Integer>] [new-role:<Role>]` | (Shop manager only) Edit an existing shop item's name, price, or role. |

## Configuration {#configuration}

This module has multiple configuration files. Please review them below.

### Module configuration {#configuration-config}

In this configuration file, you can configure the functionality of this module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=economy-system%7Cconfigs%2Fconfig).

| Field | Description |
|-------|-------------|
| Administrators | User IDs of economy administrators who can perform admin-only actions such as managing user balances. Bot operators always have this permission. |
| allowCheats | Allow administrators to edit user balances. Not recommended for a fair system. |
| selfBalance | Allow administrators to edit their own balance. Not recommended. |
| shop-managers | User IDs of shop managers who can create, edit, and delete shop items. Bot operators always have this permission. |
| Start Money | The amount of currency given to new users when they first interact with the economy. |
| currency name | The name of your virtual currency. |
| Symbol of the currency | The symbol or emoji displayed alongside currency amounts. |
| max work money | The maximum amount of currency earnable from a single work command. |
| min work money | The minimum amount of currency earnable from a single work command. |
| work cooldown | The cooldown duration (in minutes) between uses of the work command. |
| max crime money | The maximum amount of currency earnable from a successful crime. |
| min crime money | The minimum amount of currency earnable from a successful crime. |
| crime cooldown | The cooldown duration (in minutes) between uses of the crime command. |
| max rob amount | The maximum amount of currency that can be stolen in a single rob. |
| rob percent | The percentage of a user's balance that can be stolen in a rob. |
| rob cooldown | The cooldown duration (in minutes) between uses of the rob command. |
| leaderboard-channel | The channel where the auto-updating leaderboard embed will be displayed. Leave empty to disable. |
| shop channel | The channel where the shop embed will be displayed. Leave empty to disable. |
| message-drops ignored channels | Channels where message drops are disabled. |
| messageDrops | The chance to receive a message drop (1 in this value). Set to 0 to disable message drops. |
| messageDropsMax | The maximum amount of currency in a message drop. |
| messageDropsMin | The minimum amount of currency in a message drop. |
| dailyReward | The amount of currency given for the daily reward. |
| weeklyReward | The amount of currency given for the weekly reward. |
| Public Command-Replies | If enabled, command responses will be visible to everyone instead of only the command user. |

### Module messages {#configuration-strings}

In this configuration file, you can customize the messages sent by this module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=economy-system%7Cconfigs%2Fstrings).

| Field | Description |
|-------|-------------|
| not found message | Message shown when a shop item cannot be found. |
| not enough money | Message shown when a user does not have enough currency to buy an item. |
| shop message | The embed displayed in the shop channel showing all available items. |
| item string | The format used for each item in the shop message. |
| cooldown | Message shown when a user attempts to use a command while on cooldown. |
| workSuccess | Array of messages randomly shown when a user successfully works. |
| crimeSuccess | Array of messages randomly shown when a user successfully commits a crime. |
| crimeFail | Array of messages randomly shown when a user fails at committing a crime. |
| robSuccess | Message shown when a user successfully robs another user. |
| leaderboardEmbed | Customize the appearance of the leaderboard embed. |
| dailyReward | Message shown when a user collects their daily reward. |
| weeklyReward | Message shown when a user collects their weekly reward. |
| balanceReply | The embed displayed when a user checks their balance. |
| userNotFound | Message shown when the specified user cannot be found. |
| buyMsg | Message shown when a user purchases a shop item. |
| itemCreate | Message shown when a shop item is created. |
| itemDelete | Message shown when a shop item is deleted. |
| itemEdit | Message shown when a shop item is edited. |
| deposit message | Message shown when a user deposits currency to the bank. |
| withdraw message | Message shown when a user withdraws currency from the bank. |
| message drop message | Array of messages shown when a user receives a message drop. |
| rebuy message | Message shown when a user tries to buy an item they already own. |
| multiple matches | Message shown when multiple shop items match the search query. |
| no matches | Message shown when no shop item matches the search query. |
| item duplicate | Message shown when trying to create a shop item with an existing ID or name. |

## Troubleshooting {#troubleshooting}

<details>
  <summary>The leaderboard or shop embed is not appearing</summary>
  <ul>
    <li>Make sure the configured channel exists and the bot has <code>View Channel</code>, <code>Send Messages</code>, <code>Embed Links</code>, and <code>Manage Messages</code> permissions.</li>
    <li>Verify that the channel ID is correctly configured.</li>
  </ul>
</details>

<details>
  <summary>Shop roles are not being granted</summary>
  <ul>
    <li>Ensure the bot has the <code>Manage Roles</code> permission.</li>
    <li>Make sure the bot's role is positioned above the roles configured as shop item rewards in the server's role hierarchy.</li>
  </ul>
</details>

<details>
  <summary>Admin commands are not available</summary>

  Admin commands (add, remove, set, destroy) are only available when "allowCheats" is enabled in the module configuration. Enable this setting if you want administrators to manage user balances.
</details>

## Stored data {#data-usage}

The following data is being stored:

For every user:
* The Discord User ID
* The current balance and bank amount
* Metadata about the entry (date when created and last updated)

For every cooldown:
* The Discord User ID and command name
* The timestamp of the last command use
* Metadata about the entry (date when created and last updated)

For every shop item:
* The item ID, name, price, and associated role
* Metadata about the entry (date when created and last updated)

For every message drop opt-out:
* The Discord User ID of users who disabled drop notifications
* Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
