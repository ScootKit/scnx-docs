# Halloween Event

Run a yearly Halloween event on your server: your members collect candy, spook each other and spend everything in a shop you set up.

<ModuleOverview moduleName="halloween" />

## Features {#features}

- The event runs automatically every year from October 1st to October 31st. Nothing has to be started or stopped by hand.
- Candy is the event currency. Members earn it with a daily `/trickortreat`, by claiming pumpkins that spawn in your channels and by spooking each other.
- `/trickortreat` hands out treats, rare jackpots or a trick: lost candy, a temporary "haunted" role or a harmless scare.
- Pumpkins spawn in the channels you pick, both when your server is active and at random times during the day. The first member to click the button gets the candy.
- `/spook` lets members steal candy from each other, with a chance of the spook backfiring. It can be switched off completely.
- `/candyshop` sells the items you define: roles the bot hands out automatically, or custom prizes you fulfil yourself. Both support a global stock and a limit per member.
- A self-updating leaderboard message ranks everyone by the candy they earned, so spending candy never costs a place.
- A countdown channel is renamed once a day, all year round.
- On October 31st all earnings are doubled, and once the event is over the bot posts the final standings.
- Between November 8th and September 30th the commands answer with a countdown to the next Halloween.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=halloween&ref=scnx-app-docs).
2. Open the [configuration](#configuration-config) and set the channels and roles for the features you want. Everything else already works with the default values.
3. Add the items your members can buy to the [Candy Shop Items](#configuration-shop-items) configuration.
4. Make sure the bot has the permissions listed below.

Each feature is activated by a single setting. A feature whose setting is empty is simply skipped, the rest of the event keeps working:

| Feature                                    | What you have to set                                                                                                                                                                |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pumpkin spawns                             | Add at least one channel to "Pumpkin Spawn Channels". While the list is empty, no pumpkins spawn at all.                                                                            |
| Leaderboard and the closing announcement   | Set a "Leaderboard Channel", a text or announcement channel. The bot keeps one message up to date there and posts the final standings into the same channel once the event is over. |
| Countdown channel                          | Set a "Countdown Channel", usually a voice channel nobody can join. Optionally adjust "Countdown Channel Name" and "Countdown Channel Name on Halloween".                           |
| Haunted trick                              | Set a "Haunted Role". Without it, `/trickortreat` never uses the haunting trick and only rolls the other two.                                                                       |
| Candy shop                                 | Add at least one item to the [Candy Shop Items](#configuration-shop-items) configuration. Without items, `/candyshop` answers that the shop is empty.                               |
| Spooking                                   | Nothing. `/spook` is on by default and can be switched off with "Enable /spook".                                                                                                    |
| `/trickortreat`, candy, off-season replies | Nothing. These work out of the box.                                                                                                                                                 |

The bot needs these permissions:

- "View Channel", "Send Messages" and "Embed Links" in the spawn channels and in the leaderboard channel.
- "Manage Channels" for the countdown channel, so it can be renamed.
- "Manage Roles" for the haunted role and for every role sold in the shop. The bot's own role has to be above them in the role hierarchy.

## Testing the event {#testing}

You can try the event at any time of the year in a test channel, without affecting the real event. Enable "Test mode" in the [configuration](#configuration-config) and set a "Test channel". Use channel permissions to decide who can see the test channel and take part.

While test mode is on:

- The test channel always behaves like the live event: `/trickortreat`, `/spook` and `/candyshop` work there, pumpkins spawn there and the test channel gets its own leaderboard.
- Test candy, purchases and the test leaderboard are completely separate from the real event. The real leaderboard, the closing announcement and the season reset never see test data, and test purchases do not use up the real stock.
- The haunted role and roles bought in the shop are handed out for real, so you can check the whole setup.

When you turn test mode off or change the test channel, all test data is removed: test candy, test purchases, the test leaderboard, the haunted role from test tricks and the shop roles bought in the test channel. Members keep shop roles they already had before testing.

## Usage {#usage}

### The event year {#event-year}

All dates use the timezone configured for your bot.

| Period                         | What happens                                                                                                                                                                                                                                                    |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| October 1st to October 31st    | The event is live: `/trickortreat`, pumpkin spawns, `/spook`, the shop and the live leaderboard all work.                                                                                                                                                       |
| October 31st                   | All candy earned from `/trickortreat` and from pumpkins is doubled. Candy moved by a spook is not doubled.                                                                                                                                                      |
| November 1st to November 7th   | Earning is over. `/trickortreat` and `/spook` answer with the wind-down message and no pumpkins spawn, but `/candyshop` stays open so nobody sits on unspent candy. The bot posts the closing announcement and the leaderboard switches to the final standings. |
| November 8th                   | The season is reset: all candy, all purchases and the haunted role are removed automatically.                                                                                                                                                                   |
| November 8th to September 30th | Off-season. Every command and every leftover button answers with a countdown to the next Halloween. The countdown channel keeps counting down.                                                                                                                  |

### Earning candy {#earning-candy}

- **`/trickortreat`** can be used once per day. By default the result is posted for the whole channel to see, which you can switch off so that only the member who ran it sees it. Most of the time it is a treat and gives a random amount of candy, and a treat can turn into a much larger jackpot. Otherwise it is a trick: the member loses some candy (never below a balance of 0), gets the haunted role for a while, or just gets a harmless scare.
- **Pumpkins** spawn in two ways. After a random waiting time the next message in one of your spawn channels drops a pumpkin, and on top of that the bot drops a configurable number of pumpkins per day at random times inside a time window you define, even when nobody is talking. Every pumpkin has a claim button: the first member to click it gets the candy, everyone else is told they were too late. A pumpkin nobody claims rots away after the configured time, and no pumpkin survives past the end of the event.
- **`/spook`** can be used once per day on another member. If it works, the spooker takes a percentage of the target's candy, up to a maximum amount. If it backfires, the very same amount moves from the spooker to the target instead. If there is nothing to take, the attempt is announced but nobody loses anything. Members cannot spook themselves, bots, the same person twice in a row or anyone below the configured minimum balance. Stolen candy only changes balances, it does not raise the thief's position on the leaderboard.

### Spending candy {#spending-candy}

`/candyshop` shows the item list and the member's balance, only visible to the member who ran it. They pick an item from the menu and confirm the purchase with a button. Items whose stock is used up are marked as sold out in the menu.

- Items of the type "Role" hand out the configured role immediately and permanently. If the role cannot be given, the purchase is cancelled and the candy is refunded.
- Items of the type "Custom" are logged in the bot's log channel so you can hand out the prize yourself.
- Stock and limit per member apply to the whole season and are checked while buying, so an item can never be oversold.
- Every item can carry its own purchase message, written with the same editor as the messages in [Messages](#configuration-strings) - plain text or a full embed, with the `%item%`, `%price%`, `%balance%` and `%user%` placeholders. Left empty, the item uses the general purchase confirmation.

### Leaderboard and countdown {#leaderboard}

The bot keeps a single message in the leaderboard channel up to date, at most once per minute. It ranks members by the candy they earned during the season, so buying something in the shop, losing candy to a trick or being spooked never costs a place. The message also shows how many days are left until Halloween and is protected against auto-delete.

The countdown channel is renamed once a day, including outside the event, and gets its own name on October 31st.

## Commands {#commands}

<SlashCommandExplanation />

| Command              | Description                                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------------------------------- |
| `/trickortreat`      | Go trick-or-treating and collect candy. Can be used once per day and results in a treat, a jackpot or a trick. |
| `/spook user:<User>` | Try to spook another member and steal some of their candy. Can be used once per day and can backfire.          |
| `/candyshop`         | Show the candy shop with your balance and buy an item. Stays available until November 7th.                     |

## Configuration {#configuration}

This module has multiple configuration files. Please review them below.

### Configuration {#configuration-config}

In this configuration file, you can set up the Halloween event. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=halloween%7Cconfig).

| Field                               | Description                                                                                                                                                                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Countdown Channel                   | Channel that is renamed once a day to show the days left until Halloween. Usually a voice channel nobody can join.                                                                                                                 |
| Countdown Channel Name              | Name the countdown channel is renamed to. Use `%days%` for the days left until Halloween.                                                                                                                                          |
| Countdown Channel Name on Halloween | Name the countdown channel is renamed to on October 31st.                                                                                                                                                                          |
| Treat Chance (%)                    | Chance that `/trickortreat` gives candy instead of playing a trick.                                                                                                                                                                |
| Minimum Treat Reward                | Lowest amount of candy a treat can give.                                                                                                                                                                                           |
| Maximum Treat Reward                | Highest amount of candy a treat can give.                                                                                                                                                                                          |
| Jackpot Chance (%)                  | Chance that a treat turns into a jackpot instead of a normal reward.                                                                                                                                                               |
| Jackpot Reward                      | Amount of candy a jackpot gives.                                                                                                                                                                                                   |
| Minimum Trick Loss                  | Lowest amount of candy a member can lose to a trick. The balance never drops below 0.                                                                                                                                              |
| Maximum Trick Loss                  | Highest amount of candy a member can lose to a trick. The balance never drops below 0.                                                                                                                                             |
| Show /trickortreat to everybody     | If enabled, the result of `/trickortreat` is posted publicly so the rest of the channel can see it. Switch it off to show it only to the member who ran the command. The "already collected today" reply stays private either way. |
| Haunted Role                        | Role given to a member for a while when a trick haunts them. Leave empty to skip this kind of trick.                                                                                                                               |
| Haunted Duration (minutes)          | How long the haunted role stays on a member before the bot removes it again.                                                                                                                                                       |
| Pumpkin Spawn Channels              | Channels in which pumpkins can spawn. The bot needs permission to send messages in each of them. Leave empty to disable pumpkin spawns completely.                                                                                 |
| Minimum Spawn Interval (hours)      | Shortest wait before the next pumpkin is armed. Once armed, it drops on the next message in one of the spawn channels.                                                                                                             |
| Maximum Spawn Interval (hours)      | Longest wait before the next pumpkin is armed.                                                                                                                                                                                     |
| Minimum Pumpkin Reward              | Lowest amount of candy claiming a pumpkin gives.                                                                                                                                                                                   |
| Maximum Pumpkin Reward              | Highest amount of candy claiming a pumpkin gives.                                                                                                                                                                                  |
| Despawn Time (minutes)              | How long an unclaimed pumpkin stays claimable before it rots away. Pumpkins never survive past midnight of November 1st, no matter how long this is.                                                                               |
| Wake-Up Spawns per Day              | Number of pumpkins dropped into a random spawn channel every day, even when nobody is talking. Set to 0 to only spawn on activity.                                                                                                 |
| Wake-Up Spawns: earliest hour       | Earliest hour of the day (0-23) at which a wake-up pumpkin may drop.                                                                                                                                                               |
| Wake-Up Spawns: latest hour         | Latest hour of the day (0-23) at which a wake-up pumpkin may drop. Has to be later than the earliest hour.                                                                                                                         |
| Enable /spook                       | If enabled, members can try to steal candy from each other once a day with `/spook`.                                                                                                                                               |
| Spook Success Chance (%)            | Chance that a spook succeeds. If it fails, the same amount of candy moves the other way instead.                                                                                                                                   |
| Spook Steal Percentage (%)          | Percentage of the target's balance that is stolen on a successful spook.                                                                                                                                                           |
| Spook Steal Cap                     | Maximum amount of candy a single spook can move, no matter the percentage.                                                                                                                                                         |
| Minimum Target Balance              | Members with less candy than this cannot be spooked.                                                                                                                                                                               |
| Leaderboard Channel                 | Text or announcement channel for the self-updating leaderboard message and the closing announcement. Leave empty to disable both.                                                                                                  |
| Leaderboard Entries                 | How many members are shown on the leaderboard message and in the closing announcement.                                                                                                                                             |
| Test mode                           | If enabled, the event runs with separate test data in the test channel, so you can try it at any time. See [Testing the event](#testing).                                                                                          |
| Test channel                        | Channel in which the test event runs while test mode is enabled.                                                                                                                                                                   |

### Messages {#configuration-strings}

In this configuration file, you can customize every message of the event. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=halloween%7Cstrings).

| Field                                     | Description                                                                                                                                            |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Off-Season Message                        | Reply to every command and button outside of the event (November 8th to September 30th).                                                               |
| Wind-Down Message                         | Reply to the earning commands between November 1st and 7th, when candy can only be spent.                                                              |
| Closing Announcement                      | Posted in the leaderboard channel once Halloween is over.                                                                                              |
| "Double candy"-Note                       | Added to reward messages on October 31st, when all earnings are doubled.                                                                               |
| "Already collected today"-Message         | Sent when a member already used their daily `/trickortreat`.                                                                                           |
| Treat Message                             | Sent when `/trickortreat` gives a member candy.                                                                                                        |
| Jackpot Message                           | Sent when a treat turns into a jackpot.                                                                                                                |
| Trick Message: candy lost                 | Sent when a trick costs the member candy.                                                                                                              |
| Trick Message: haunted                    | Sent when a trick gives the member the haunted role for a while.                                                                                       |
| Trick Message: harmless scare             | Sent when a trick is only a scare and costs nothing.                                                                                                   |
| Pumpkin Spawn Message                     | Message posted when a pumpkin spawns. The claim button is added below it.                                                                              |
| Pumpkin Claimed Message                   | The spawn message is edited to this once somebody claimed the pumpkin.                                                                                 |
| Pumpkin Rotted Message                    | The spawn message is edited to this when nobody claimed the pumpkin in time.                                                                           |
| "Too late"-Message                        | Sent privately to members who click the claim button after somebody else was faster.                                                                   |
| Spook Success Message                     | Sent when a spook succeeds and candy moves to the spooker.                                                                                             |
| Spook Backfire Message                    | Sent when a spook fails and the candy moves to the target instead.                                                                                     |
| Spook: nothing to take                    | Sent when a spook was rolled but there was no candy to move at all, so neither side lost anything.                                                     |
| Spook Rejected: target too poor           | Sent when the target does not have the configured minimum balance.                                                                                     |
| Spook Rejected: same target twice         | Sent when a member tries to spook the same person they spooked last time.                                                                              |
| Spook Rejected: yourself                  | Sent when a member tries to spook themselves.                                                                                                          |
| Spook Rejected: bot                       | Sent when a member tries to spook a bot.                                                                                                               |
| Spook Rejected: already used today        | Sent when a member already used their daily spook.                                                                                                     |
| Spook Rejected: disabled                  | Sent when spooking is switched off on this server.                                                                                                     |
| Candy Shop Message                        | Message of the `/candyshop` command. The item list and the buy menu are added below it.                                                                |
| "Shop is empty"-Message                   | Sent when no shop items have been configured.                                                                                                          |
| "Item is gone"-Message                    | Sent when the picked item is not in the shop anymore, for example because it was removed or renamed while the listing was open.                        |
| "Not enough candy"-Message                | Sent when a member cannot afford the item they picked.                                                                                                 |
| "Sold out"-Message                        | Sent when the stock of an item is used up.                                                                                                             |
| "Limit reached"-Message                   | Sent when a member already bought an item as often as allowed.                                                                                         |
| "Purchase could not be completed"-Message | Sent when a purchase could not be finished, for example because the role could not be handed out. The purchase is cancelled and the candy is refunded. |
| Purchase Confirmation                     | Sent when a purchase went through. Items with their own purchase message use that one instead.                                                         |

### Candy Shop Items {#configuration-shop-items}

In this configuration file, you can set up what your members can buy with their candy. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=halloween%7Cshop-items).

| Field                       | Description                                                                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Item Name                   | Name of the item, shown in the shop. Should be unique. Renaming an item during the season resets its stock and its limit per member. |
| Item Description            | Short description of the item, shown next to its name in the shop.                                                                   |
| Price                       | Amount of candy this item costs.                                                                                                     |
| Item Type                   | Role items grant the configured role automatically. Custom items are only logged, so you can hand them out yourself.                 |
| Role (for "Role" items)     | Role granted permanently when the item is bought. Only used for items of the type "Role".                                            |
| Stock                       | How often this item can be bought in total this season. Set to 0 for unlimited.                                                      |
| Limit per User              | How often a single member can buy this item this season. Set to 0 for unlimited.                                                     |
| (optional) Purchase Message | Message the buyer receives instead of the default purchase confirmation. Leave empty to use the default one.                         |

## Troubleshooting {#troubleshooting}

<details>
    <summary>No pumpkins are spawning</summary>
    <ul>
        <li>Make sure at least one channel is added to "Pumpkin Spawn Channels" and that the bot can send messages there.</li>
        <li>Pumpkins only spawn between October 1st and October 31st.</li>
        <li>Activity spawns wait a random amount of hours between "Minimum Spawn Interval (hours)" and "Maximum Spawn Interval (hours)" and then drop on the next message in a spawn channel.</li>
    </ul>
</details>
<details>
    <summary>The commands only answer with a countdown</summary>
    <ul>
        <li>That is the off-season reply. The event runs from October 1st to October 31st, and the shop stays open until November 7th.</li>
        <li>All dates use the timezone configured for your bot.</li>
        <li>If you want to test the event outside of October, enable <strong>test mode</strong> and set a test channel in the configuration.</li>
    </ul>
</details>
<details>
    <summary>The haunted role or a shop role is not being given</summary>
    <ul>
        <li>Make sure the bot has the "Manage Roles" permission.</li>
        <li>Make sure the bot's own role is above the role it should hand out in the role hierarchy.</li>
        <li>If a shop role cannot be given, the purchase is cancelled and the candy is refunded automatically.</li>
    </ul>
</details>
<details>
    <summary>The countdown channel is not renamed</summary>
    <ul>
        <li>Make sure the bot has the "Manage Channels" permission for that channel.</li>
        <li>The channel is renamed once per day, not immediately after a configuration change.</li>
    </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every participating member:

- The Discord User ID
- The current candy balance and the total candy earned this season
- The days on which they last used `/trickortreat` and `/spook`, and the member they spooked last
- The point in time at which the haunted role expires
- Metadata about the entry (date when created and last updated)

The following data is being stored about every purchase:

- The Discord User ID of the buyer
- The name, type and price of the bought item
- Metadata about the entry (date when created and last updated)

The following data is being stored for the event itself:

- The channel ID and message ID of the leaderboard message
- Which season has already received its closing announcement and which one has already been reset
- Metadata about the entry (date when created and last updated)

All member data and all purchases are deleted automatically on November 8th, when the season is reset.

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
