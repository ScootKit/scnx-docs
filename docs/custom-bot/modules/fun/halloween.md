# Halloween Event

Run a yearly Halloween event on your server: your members collect candy, spook each other and spend everything in a shop you set up.

<ModuleOverview moduleName="halloween" />

## Features {#features}

- The event runs automatically every year from October 1st to October 31st. Nothing has to be started or stopped by hand.
- Candy is the event currency. Members earn it with a daily `/trickortreat`, by claiming pumpkins that spawn in your channels and by spooking each other.
- `/trickortreat` hands out treats, rare jackpots or a trick: lost candy, a temporary "haunted" role or a harmless scare.
- Pumpkins spawn in the channels you pick, both when your server is active and at random times during the day. The first member to click the button gets the candy.
- `/spook` lets members steal candy from each other, with a chance of the spook backfiring. It can be switched off completely.
- `/trickortreat` and `/spook` can be used once per day or, if you prefer, with a cooldown of a few hours that you set.
- In the last days of October, bosses appear in a channel you pick. Members stake candy together against each boss: if they win, everybody gets their stake back multiplied, if not, the stake is gone. See [Boss fights](#bosses).
- `/candyshop` sells the items you define: roles the bot hands out automatically, or custom prizes you fulfil yourself. Both support a global stock and a limit per member.
- A self-updating leaderboard message ranks everyone by the candy they hold, plus the candy they spent in the shop and the candy they have staked in an open boss fight. Shopping never costs a place, while tricks, being spooked and lost boss fights do, and successful spooks and won boss fights raise it. It is posted year-round, showing a countdown to the next Halloween outside the event.
- A countdown channel is renamed once a day, all year round.
- On October 31st all earnings are doubled, and once the event is over the bot posts the final standings.
- Between November 8th and September 30th the commands answer with a countdown to the next Halloween.

## Setup {#setup}

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=halloween&ref=scnx-app-docs).
2. Open the [configuration](#configuration-config) and set the channels and roles for the features you want. Everything else already works with the default values.
3. Add the items your members can buy to the [Candy Shop Items](#configuration-shop-items) configuration.
4. Make sure the bot has the permissions listed below.

Each feature is activated by a single setting. A feature whose setting is empty is simply skipped, the rest of the event keeps working:

| Feature                                    | What you have to set                                                                                                                                                                     |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pumpkin spawns                             | Add at least one channel to "Pumpkin Spawn Channels". While the list is empty, no pumpkins spawn at all.                                                                                 |
| Leaderboard and the closing announcement   | Set a "Leaderboard Channel", a text or announcement channel. The bot keeps one message up to date there and posts the final standings into the same channel once the event is over.      |
| Countdown channel                          | Set a "Countdown Channel", usually a voice channel nobody can join. Optionally adjust "Countdown Channel Name" and "Countdown Channel Name on Halloween".                                |
| Haunted trick                              | Set a "Haunted Role". Without it, `/trickortreat` never uses the haunting trick and only rolls the other two.                                                                            |
| Candy shop                                 | Add at least one item to the [Candy Shop Items](#configuration-shop-items) configuration. Without items, `/candyshop` answers that the shop is empty.                                    |
| Custom item fulfillment                    | Set a "Fulfillment Channel" so purchases of items of the type "Custom" are posted there instead of the bot's log channel.                                                                |
| Boss fights                                | Set a "Boss Channel", a text or announcement channel. While it is empty, no bosses appear. Bosses show up from the "Boss Week Start Day" until October 31st, see [Boss fights](#bosses). |
| Spooking                                   | Nothing. `/spook` is on by default and can be switched off with "Enable /spook".                                                                                                         |
| `/trickortreat`, candy, off-season replies | Nothing. These work out of the box.                                                                                                                                                      |

The bot needs these permissions:

- "View Channel", "Send Messages" and "Embed Links" in the spawn channels, the leaderboard channel and the fulfillment channel, if you set one.
- "View Channel", "Send Messages", "Embed Links", "Read Message History" and "Pin Messages" in the test channel, so it can post and pin the test leaderboard and the explainer message.
- "View Channel", "Send Messages", "Embed Links" and "Read Message History" in the boss channel. To ping a role with the boss message, the role has to be mentionable, or the bot needs the "Mention Everyone" permission.
- "Manage Channels" for the countdown channel, so it can be renamed.
- "Manage Roles" for the haunted role and for every role sold in the shop. The bot's own role has to be above them in the role hierarchy.

## Testing the event {#testing}

You can try the event at any time of the year in a test channel, without affecting the real event. Enable "Test Mode" in the [configuration](#configuration-config) and set a "Test Channel". Use channel permissions to decide who can see the test channel and take part.

While test mode is on:

- The test channel always behaves like the live event: `/trickortreat`, `/spook` and `/candyshop` work there at any time of the year, pumpkins spawn there and the test channel gets its own leaderboard.
- The first message posted in a fresh test session spawns a pumpkin right away, so you don't have to wait out the normal spawn interval. After that, pumpkins follow the normal interval.
- A boss appears in the test channel right when a test session starts. After that, test bosses follow the daily schedule ("Bosses per Day" at random times between the wake-up spawn hours), on any date, regardless of the "Boss Channel" and the "Boss Week Start Day". Test bosses have their own data, so they never touch the real event.
- When a test session starts, the bot posts an explainer message into the test channel and pins it, together with the test leaderboard.
- Test candy, purchases and the test leaderboard are completely separate from the real event. The real leaderboard, the closing announcement and the season reset never see test data, and test purchases do not use up the real stock.
- The haunted role and roles bought in the shop are handed out for real, so you can check the whole setup.

When you turn test mode off or change the test channel, all test data is removed: test candy, test purchases, test boss fights, the test leaderboard, the explainer message, the haunted role from test tricks and the shop roles bought in the test channel. Members keep shop roles they already had before testing.

If you restricted the Halloween commands to certain channels in your Discord server settings (Integrations), allow them in the test channel too.

## Usage {#usage}

### The event year {#event-year}

All dates use the timezone configured for your bot.

| Period                                                          | What happens                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| October 1st to October 31st                                     | The event is live: `/trickortreat`, pumpkin spawns, `/spook`, the shop and the live leaderboard all work.                                                                                                                                                                                   |
| "Boss Week Start Day" (October 25th by default) to October 31st | Boss week: bosses appear in the "Boss Channel", see [Boss fights](#bosses). A fight that is still open at the end of October 31st is decided then, at the latest.                                                                                                                           |
| October 31st                                                    | All candy earned from `/trickortreat` and from pumpkins is doubled. Candy moved by a spook and boss payouts are not doubled.                                                                                                                                                                |
| November 1st to November 7th                                    | Earning is over. `/trickortreat` and `/spook` answer with the wind-down message and no pumpkins spawn, but `/candyshop` stays open so nobody sits on unspent candy. The bot posts the closing announcement and the leaderboard switches to the final standings.                             |
| November 8th                                                    | The season is reset: all candy, all purchases, all boss fights and the haunted role are removed automatically.                                                                                                                                                                              |
| November 8th to September 30th                                  | Off-season. Every command and every leftover button answers with a countdown to the next Halloween. The countdown channel keeps counting down, and the leaderboard message (once a "Leaderboard Channel" is set) shows "Halloween is coming" with the same countdown, refreshed once a day. |

### Earning candy {#earning-candy}

- **`/trickortreat`** can be used once per day, or once per cooldown if you set "/trickortreat Cooldown (hours)". By default the result is posted for the whole channel to see, which you can switch off so that only the member who ran it sees it. Most of the time it is a treat and gives a random amount of candy, and a treat can turn into a much larger jackpot. Otherwise it is a trick: the member loses some candy (never below a balance of 0), gets the haunted role for a while, or just gets a harmless scare.
- **Pumpkins** spawn in two ways. After a random waiting time the next message in one of your spawn channels drops a pumpkin, and on top of that the bot drops a configurable number of pumpkins per day at random times inside a time window you define, even when nobody is talking. Every pumpkin has a claim button: the first member to click it gets the candy, everyone else is told they were too late. A pumpkin nobody claims rots away after the configured time, and no pumpkin survives past the end of the event.
- **`/spook`** can be used once per day on another member, or once per cooldown if you set "/spook Cooldown (hours)". If it works, the spooker takes a percentage of the target's candy, up to a maximum amount. If it backfires, the very same amount moves from the spooker to the target instead. If there is nothing to take, the attempt is announced but nobody loses anything. Members cannot spook themselves, bots, the same person twice in a row or anyone below the configured minimum balance.

Both cooldown settings count in hours and allow decimals such as `0.5`. With the default of 0, the command can be used once per day and resets at midnight in your server's timezone. With a value above 0, a member has to wait that many hours after the last use instead, and the reply tells them when they can try again. Short cooldowns hand out candy much faster, so consider a lower "Treat Chance (%)" and higher shop prices when you shorten them.

### Spending candy {#spending-candy}

`/candyshop` shows the item list, each item with its price and description, and the member's balance, only visible to the member who ran it. Items whose stock is used up are struck through and marked as sold out, both in the list and in the buy menu below it.

Picking an item from the menu shows a confirmation on the same message: the item and its description, the price, the member's balance before and after the purchase, how many are left when the item has a stock, and how many more times the member may buy it when it has a limit per member. If the member cannot buy it (not enough candy, sold out, the limit reached, or the item not available), the "Confirm purchase" button is disabled and the reason is shown. A "Back to shop" button returns to the full list, or the member can pick another item from the menu instead. After a successful purchase, the member gets the purchase message and the shop message updates to the list with the new balance.

- Items of the type "Role" hand out the configured role immediately and permanently. If the role cannot be given, the purchase is cancelled and the candy is refunded.
- Items of the type "Custom" are posted to the "Fulfillment Channel" so you can hand out the prize yourself. Left empty, or if it cannot be reached, they go to the bot's log channel instead.
- Stock and limit per member apply to the whole season and are checked while buying, so an item can never be oversold.
- Every item can carry its own purchase message, written with the same editor as the messages in [Messages](#configuration-strings) - plain text or a full embed, with the `%item%`, `%price%`, `%balance%` and `%user%` placeholders. Left empty, the item uses the general purchase confirmation.

### Boss fights {#bosses}

During boss week, from the "Boss Week Start Day" (October 25th by default) to October 31st, bosses appear in the "Boss Channel". Leave the channel empty to switch bosses off.

- **Appearance:** every day of boss week, "Bosses per Day" bosses (1 by default, at most 5) show up at random times between "Wake-Up Spawns: earliest hour" and "Wake-Up Spawns: latest hour". Set it to 0 to pause bosses. Each boss is picked at random from your "Bosses" list, which can also carry an image per boss. Your "Boss Spawn Message" is shown on the boss message, and a role mentioned in it is pinged once when the boss appears.
- **Joining:** the boss message has buttons to stake a preset amount (20%, 50% and 100% of the "Stake Limit per Member") and a button for a custom amount. A member can stake several times, up to the stake limit in total per boss. The stake is taken from their candy immediately and is final: it cannot be taken back.
- **Boss HP:** the HP is fixed when the boss appears and grows with the number of active players, which are the members who used the module themselves within the last "Activity Window (days)" (`/trickortreat`, `/spook`, a shop purchase, a claimed pumpkin or a boss stake; being spooked does not count). HP is "Boss HP per Active Player" times the number of active players, counted as at least "Minimum Active Players". It is never lower than twice the "Stake Limit per Member", so nobody can beat a boss alone.
- **Win chance:** with almost nothing staked, the chance to win is the "Base Win Chance (%)". It rises with the candy pool up to the "Maximum Win Chance (%)", which is reached once the pool equals the boss HP. The boss message shows the current chance.
- **Result:** after "Fight Duration (minutes)", and never later than the end of October 31st, one roll decides the fight for everybody. If the fighters win, everybody gets their stake multiplied by the "Win Multiplier" (rounded down), and this is not doubled on October 31st. If the boss wins, all stakes are lost. If nobody staked anything, the boss wanders off and nobody loses anything. The boss message then turns into a result listing every fighter with their stake and payout.
- **Leaderboard:** candy staked in a fight that is still open counts towards the leaderboard. Won fights raise a member's score, lost fights lower it.

Fights are saved, so a bot restart never loses a stake: an open fight continues, and one that ended in the meantime is decided right away.

### Leaderboard and countdown {#leaderboard}

The bot posts a single message in the leaderboard channel and keeps it up to date, at most once per minute, as soon as a "Leaderboard Channel" is set - in every phase of the year, not just while the event runs. Outside the event it shows "Halloween is coming" with a countdown to the next Halloween, refreshed once a day so it never goes stale. Once the event is live it ranks members by the candy they hold, plus the candy they spent in the shop and the candy they staked in a boss fight that is still open. Buying something in the shop or staking candy therefore never costs a place, while losing candy to a trick, being spooked or losing a boss fight does. Spooking successfully and winning boss fights raises a member's place. Members are shown as mentions, or as usernames if you enable "Use User's Tags instead of their Mention in the Leaderboard", which is recommended for large servers. From November 1st to 7th it shows the final standings, and the closing announcement is posted once the event ends. The message is protected against auto-delete.

The message is a title with a thumbnail next to it, the configured image directly below, a divider, then the ranking and the countdown. Its title, final title, color, thumbnail and image can all be customized in [Messages](#configuration-strings). The test leaderboard uses the same look, so you can preview it in the test channel. A leaderboard message posted by an older bot version (an embed) is replaced by a new message once automatically, and the old one is deleted.

The countdown channel is renamed once a day, including outside the event, and gets its own name on October 31st.

## Commands {#commands}

<SlashCommandExplanation />

| Command              | Description                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `/trickortreat`      | Go trick-or-treating and collect candy. Can be used once per day (or per cooldown) and results in a treat, a jackpot or a trick. |
| `/spook user:<User>` | Try to spook another member and steal some of their candy. Can be used once per day (or per cooldown) and can backfire.          |
| `/candyshop`         | Show the candy shop with your balance and buy an item. Stays available until November 7th.                                       |

## Configuration {#configuration}

This module has multiple configuration files. Please review them below.

### Configuration {#configuration-config}

In this configuration file, you can set up the Halloween event. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=halloween%7Cconfig).

| Field                                                       | Description                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Countdown Channel                                           | Channel that is renamed once a day to show the days left until Halloween. Usually a voice channel nobody can join.                                                                                                                                                      |
| Countdown Channel Name                                      | Name the countdown channel is renamed to. Use `%days%` for the days left until Halloween.                                                                                                                                                                               |
| Countdown Channel Name on Halloween                         | Name the countdown channel is renamed to on October 31st.                                                                                                                                                                                                               |
| Treat Chance (%)                                            | Chance that `/trickortreat` gives candy instead of playing a trick.                                                                                                                                                                                                     |
| Minimum Treat Reward                                        | Lowest amount of candy a treat can give.                                                                                                                                                                                                                                |
| Maximum Treat Reward                                        | Highest amount of candy a treat can give.                                                                                                                                                                                                                               |
| Jackpot Chance (%)                                          | Chance that a treat turns into a jackpot instead of a normal reward.                                                                                                                                                                                                    |
| Jackpot Reward                                              | Amount of candy a jackpot gives.                                                                                                                                                                                                                                        |
| Minimum Trick Loss                                          | Lowest amount of candy a member can lose to a trick. The balance never drops below 0.                                                                                                                                                                                   |
| Maximum Trick Loss                                          | Highest amount of candy a member can lose to a trick. The balance never drops below 0.                                                                                                                                                                                  |
| Show /trickortreat to everybody                             | If enabled, the result of `/trickortreat` is posted publicly so the rest of the channel can see it. Switch it off to show it only to the member who ran the command. The "already collected today" and cooldown replies stay private either way.                        |
| /trickortreat Cooldown (hours)                              | Hours a member has to wait between two uses of `/trickortreat`. 0 keeps one use per day, resetting at midnight. Decimals like 0.5 are allowed. Short cooldowns hand out candy much faster.                                                                              |
| Haunted Role                                                | Role given to a member for a while when a trick haunts them. Leave empty to skip this kind of trick.                                                                                                                                                                    |
| Haunted Duration (minutes)                                  | How long the haunted role stays on a member before the bot removes it again.                                                                                                                                                                                            |
| Pumpkin Spawn Channels                                      | Channels in which pumpkins can spawn. The bot needs permission to send messages in each of them. Leave empty to disable pumpkin spawns completely.                                                                                                                      |
| Minimum Spawn Interval (hours)                              | Shortest wait before the next pumpkin is armed. Once armed, it drops on the next message in one of the spawn channels.                                                                                                                                                  |
| Maximum Spawn Interval (hours)                              | Longest wait before the next pumpkin is armed.                                                                                                                                                                                                                          |
| Minimum Pumpkin Reward                                      | Lowest amount of candy claiming a pumpkin gives.                                                                                                                                                                                                                        |
| Maximum Pumpkin Reward                                      | Highest amount of candy claiming a pumpkin gives.                                                                                                                                                                                                                       |
| Despawn Time (minutes)                                      | How long an unclaimed pumpkin stays claimable before it rots away. Pumpkins never survive past midnight of November 1st, no matter how long this is.                                                                                                                    |
| Wake-Up Spawns per Day                                      | Number of pumpkins dropped into a random spawn channel every day, even when nobody is talking. Set to 0 to only spawn on activity. At most 10.                                                                                                                          |
| Wake-Up Spawns: earliest hour                               | Earliest hour of the day (0-23) at which a wake-up pumpkin may drop.                                                                                                                                                                                                    |
| Wake-Up Spawns: latest hour                                 | Latest hour of the day (0-23) at which a wake-up pumpkin may drop. Has to be later than the earliest hour.                                                                                                                                                              |
| Enable /spook                                               | If enabled, members can try to steal candy from each other with `/spook`, once per day or with the cooldown below.                                                                                                                                                      |
| /spook Cooldown (hours)                                     | Hours a member has to wait between two uses of `/spook`. 0 keeps one use per day, resetting at midnight. Decimals like 0.5 are allowed. Short cooldowns let candy change hands much faster.                                                                             |
| Spook Success Chance (%)                                    | Chance that a spook succeeds. If it fails, the same amount of candy moves the other way instead.                                                                                                                                                                        |
| Spook Steal Percentage (%)                                  | Percentage of the target's balance that is stolen on a successful spook.                                                                                                                                                                                                |
| Spook Steal Cap                                             | Maximum amount of candy a single spook can move, no matter the percentage.                                                                                                                                                                                              |
| Minimum Target Balance                                      | Members with less candy than this cannot be spooked.                                                                                                                                                                                                                    |
| Leaderboard Channel                                         | Text or announcement channel for the self-updating leaderboard message and the closing announcement. Leave empty to disable both.                                                                                                                                       |
| Leaderboard Entries                                         | How many members are shown on the leaderboard message and in the closing announcement.                                                                                                                                                                                  |
| Use User's Tags instead of their Mention in the Leaderboard | If enabled, the leaderboard message and the closing announcement show each member's username instead of a mention. Recommended for large servers.                                                                                                                       |
| Fulfillment Channel                                         | Channel where purchases of items of the type "Custom" are posted so you can hand them out. Left empty, or if the channel cannot be reached, they go to the bot's log channel instead. Purchases made in the test channel are posted here too, marked as test purchases. |
| Boss Channel                                                | Text or announcement channel in which bosses appear during boss week. Leave empty to disable bosses.                                                                                                                                                                    |
| Boss Week Start Day                                         | Day of October on which bosses start to appear. They keep appearing until October 31st.                                                                                                                                                                                 |
| Bosses per Day                                              | Number of bosses that appear every day of boss week, at random times between the wake-up spawn hours. 0 pauses bosses. At most 5.                                                                                                                                       |
| Fight Duration (minutes)                                    | How long members can stake candy against a boss before the fight is decided.                                                                                                                                                                                            |
| Boss HP per Active Player                                   | HP a boss gets for every active player. Never lower than twice the stake limit.                                                                                                                                                                                         |
| Minimum Active Players                                      | Boss HP is calculated with at least this many active players, so bosses on quiet servers are not trivial.                                                                                                                                                               |
| Activity Window (days)                                      | A member counts as an active player if they used `/trickortreat`, `/spook`, the shop, claimed a pumpkin or fought a boss within this many days (today included).                                                                                                        |
| Stake Limit per Member                                      | The most candy one member can stake against a single boss in total.                                                                                                                                                                                                     |
| Base Win Chance (%)                                         | Chance to beat a boss with almost nothing staked. It rises with the candy pool until the pool reaches the boss HP.                                                                                                                                                      |
| Maximum Win Chance (%)                                      | Chance to beat a boss once the candy pool reaches its HP. A value below the base win chance is treated as the base win chance.                                                                                                                                          |
| Win Multiplier                                              | When a boss is beaten, every fighter gets their stake back multiplied by this value (rounded down). When the boss wins, the stakes are lost. Not doubled on October 31st.                                                                                               |
| Bosses                                                      | Bosses to pick from at random: the name, and optionally an image URL shown on the boss message.                                                                                                                                                                         |
| Test Mode                                                   | If enabled, the event runs with separate test data in the test channel, so you can try it at any time. See [Testing the event](#testing).                                                                                                                               |
| Test Channel                                                | Channel in which the test event runs while Test Mode is enabled.                                                                                                                                                                                                        |

### Messages {#configuration-strings}

In this configuration file, you can customize every message of the event. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=halloween%7Cstrings).

| Field                                     | Description                                                                                                                                            |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Off-Season Message                        | Reply to every command and button outside of the event (November 8th to September 30th).                                                               |
| Wind-Down Message                         | Reply to the earning commands between November 1st and 7th, when candy can only be spent.                                                              |
| Closing Announcement                      | Posted in the leaderboard channel once Halloween is over.                                                                                              |
| "Double candy"-Note                       | Added to reward messages on October 31st, when all earnings are doubled.                                                                               |
| "Already collected today"-Message         | Sent when a member already used their daily `/trickortreat`.                                                                                           |
| "Cooldown active"-Message                 | Sent when a member tries `/trickortreat` again before the configured cooldown is over. Only used with a cooldown above 0 hours.                        |
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
| Spook Rejected: cooldown active           | Sent when a member tries to spook again before the configured `/spook` cooldown is over. Only used with a cooldown above 0 hours.                      |
| Spook Rejected: disabled                  | Sent when spooking is switched off on this server.                                                                                                     |
| Candy Shop Message                        | Message of the `/candyshop` command. The item list is added into the message (into the embed when it is one); the buy menu is added below it.          |
| "Shop is empty"-Message                   | Sent when no shop items have been configured.                                                                                                          |
| "Item is gone"-Message                    | Sent when the picked item is not in the shop anymore, for example because it was removed or renamed while the listing was open.                        |
| "Not enough candy"-Message                | Sent when a member cannot afford the item they picked.                                                                                                 |
| "Sold out"-Message                        | Sent when the stock of an item is used up.                                                                                                             |
| "Limit reached"-Message                   | Sent when a member already bought an item as often as allowed.                                                                                         |
| "Purchase could not be completed"-Message | Sent when a purchase could not be finished, for example because the role could not be handed out. The purchase is cancelled and the candy is refunded. |
| Purchase Confirmation                     | Sent when a purchase went through. Items with their own purchase message use that one instead.                                                         |
| Leaderboard Title                         | Title of the live leaderboard message. Defaults to "🎃 Halloween Leaderboard".                                                                         |
| Leaderboard Title: final standings        | Title of the leaderboard message once it switches to the final standings. Defaults to "🎃 Final Halloween standings".                                  |
| Leaderboard Color                         | Accent color of the leaderboard message, set with a color picker. Defaults to orange (`#e67e22`).                                                      |
| Leaderboard Thumbnail                     | Small image shown next to the leaderboard title. Leave empty for none.                                                                                 |
| Leaderboard Image                         | Large image shown below the leaderboard title. Leave empty for none.                                                                                   |
| Boss Spawn Message                        | Shown on the boss message while the fight is open. Role mentions in it ping the role once when the boss appears.                                       |
| Boss Defeated Message                     | Shown on the boss message after the fighters won.                                                                                                      |
| Boss Victorious Message                   | Shown on the boss message after the boss won and the stakes were lost.                                                                                 |
| Boss Fled Message                         | Shown on the boss message when nobody staked any candy.                                                                                                |

### Candy Shop Items {#configuration-shop-items}

In this configuration file, you can set up what your members can buy with their candy. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=halloween%7Cshop-items).

| Field                       | Description                                                                                                                                                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Item Name                   | Name of the item, shown in the shop. Should be unique. Renaming an item during the season resets its stock and its limit per member.                                                                                                               |
| Item Description            | Short description of the item, shown next to its name in the shop.                                                                                                                                                                                 |
| Price                       | Amount of candy this item costs.                                                                                                                                                                                                                   |
| Item Type                   | Role items grant the configured role automatically. Custom items are only logged, so you can hand them out yourself - configure a Fulfillment Channel in this module's configuration, otherwise the purchase falls back to your bot's log channel. |
| Role (for "Role" items)     | Role granted permanently when the item is bought. Only used for items of the type "Role".                                                                                                                                                          |
| Stock                       | How often this item can be bought in total this season. Set to 0 for unlimited.                                                                                                                                                                    |
| Limit per User              | How often a single member can buy this item this season. Set to 0 for unlimited.                                                                                                                                                                   |
| (optional) Purchase Message | Message the buyer receives instead of the default purchase confirmation. Leave empty to use the default one.                                                                                                                                       |

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
    <summary>Bosses do not appear</summary>
    <ul>
        <li>Make sure a "Boss Channel" is set. While it is empty, bosses are off.</li>
        <li>Bosses only appear from the "Boss Week Start Day" until October 31st, at random times between "Wake-Up Spawns: earliest hour" and "Wake-Up Spawns: latest hour".</li>
        <li>Make sure "Bosses per Day" is above 0.</li>
        <li>Make sure the bot has "View Channel", "Send Messages", "Embed Links" and "Read Message History" in the boss channel.</li>
        <li>While test mode is on, a boss channel that is the same as the test channel is ignored. Test bosses appear in the test channel instead.</li>
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
<details>
    <summary>The leaderboard message is not posted</summary>
    <ul>
        <li>Make sure a "Leaderboard Channel" is set in the configuration.</li>
        <li>Make sure the bot has "View Channel", "Send Messages", "Embed Links" and "Read Message History" there.</li>
    </ul>
</details>
<details>
    <summary>Custom purchases do not show up</summary>
    <ul>
        <li>Make sure a "Fulfillment Channel" is set, or that the bot's log channel is configured, and that the bot has "View Channel", "Send Messages" and "Embed Links" there.</li>
    </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every participating member:

- The Discord User ID
- The current candy balance and the total candy earned this season
- The days and, if a cooldown in hours is set, the exact times at which they last used `/trickortreat` and `/spook`, and the member they spooked last
- The last day on which they were active, which decides how many active players a boss has
- The point in time at which the haunted role expires
- Metadata about the entry (date when created and last updated)

The following data is being stored about every purchase:

- The Discord User ID of the buyer
- The name, type and price of the bought item
- Metadata about the entry (date when created and last updated)

Test mode stores the same member, purchase, boss fight and stake data separately for the test channel. It is deleted when test mode is turned off or the test channel is changed.

The following data is being stored about every boss fight:

- The channel ID and message ID of the boss message
- The name and image of the boss, its HP and the point in time at which the fight ends
- The outcome of the fight (open, won, lost or fled), the win chance and the roll
- Metadata about the entry (date when created and last updated)

The following data is being stored about every stake in a boss fight:

- The Discord User ID of the member and the staked amount
- Metadata about the entry (date when created and last updated)

The following data is being stored for the event itself:

- The channel ID and message ID of the leaderboard message
- Which season has already received its closing announcement and which one has already been reset
- While test mode is on: the active test channel, the channel ID and message ID of the test leaderboard and the explainer message, and the roles handed out in the test channel (Discord User ID and role ID)
- Metadata about the entry (date when created and last updated)

All member data, all purchases and all boss fights of the real event are deleted automatically on November 8th, when the season is reset.

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
