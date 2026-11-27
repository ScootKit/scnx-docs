# Winter Holidays

Add a countdown to Christmas, create an advent calendar and run a Christmas candy event on your Discord to celebrate the holidays!

<ModuleOverview moduleName="holidays" />

## Features {#features}

- Christmas/New Year countdown displayed as a voice channel or category name, updated hourly.
- Interactive advent calendar with 24 doors that users can open during December.
- Customizable messages for each calendar day.
- Optional role rewards for opening individual days or all 24 days.
- Optional button randomization for a more engaging advent calendar experience.
- Optional candy cane rewards and a private message for every advent calendar door.
- An optional Christmas candy event: a daily claim, gifts that spawn in your channels, a community boss fight against the Grinch, a candy cane shop and a self-updating leaderboard.
- Every part of the Christmas event is switched off until you turn it on. Servers that only use the advent calendar and the countdown notice no change.

## Setup {#setup}

### Christmas Countdown

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=holidays&ref=scnx-app-docs).
2. Open the [Countdown configuration](#config-countdown) and enable it.
3. Create a voice channel or category on your server and set it in the configuration. The bot will rename this channel to show the countdown.
4. The bot needs the "Manage Channels" permission for the countdown channel.

### Advent Calendar

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=holidays&ref=scnx-app-docs).
2. Open the [Advent Calendar configuration](#config-calendar) and enable it.
3. Create an empty text channel and set it in the configuration.
4. Customize the message for each of the 24 days and optionally configure role rewards.
   Optionally, give doors a candy cane reward or a private message in [Advent Calendar Door Rewards](#config-advent-rewards).
5. The bot needs the "Send Messages", "Read Message History", and "Manage Messages" permissions in the calendar channel.

### Christmas Event {#setup-event}

The Christmas event lives in the [Christmas Event configuration](#config-event) and is switched off by default. Nothing happens, and no feature works, until you enable "Enable Christmas Event". Pick one of these two common setups.

**Advent calendar with candy cane rewards and a shop only**

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=holidays&ref=scnx-app-docs).
2. Open the [Christmas Event configuration](#config-event) and enable "Enable Christmas Event" and "Enable Gift Shop".
3. Leave "Enable Daily Claim" off, and leave the "Gift Spawn Channels", "Boss Channel" and "Leaderboard Channel" empty.
4. Add your items in [Candy Cane Shop Items](#config-shop-items).
5. Give doors a candy range in [Advent Calendar Door Rewards](#config-advent-rewards). Members collect candy canes by opening doors and spend them in `/giftshop`.

**The full event**

1. Enable the module in [your SCNX dashboard](https://scnx.app/glink?page=bot/modules?query=holidays&ref=scnx-app-docs).
2. Open the [Christmas Event configuration](#config-event) and enable "Enable Christmas Event", "Enable Daily Claim" and "Enable Gift Shop".
3. Choose a "Currency Name" and "Currency Emoji", or keep the default Candy Canes.
4. Set "Gift Spawn Channels" to let gifts appear, "Boss Channel" to enable the boss event and "Leaderboard Channel" to post the self-updating leaderboard. Each of these is off while its channel is empty.
5. Add your items in [Candy Cane Shop Items](#config-shop-items) and, if you like, change the texts in [Messages](#config-strings).
6. Optionally add rewards to the advent calendar doors in [Advent Calendar Door Rewards](#config-advent-rewards).

The bot needs these permissions:

- "View Channel", "Send Messages" and "Embed Links" in the gift spawn channels, the boss channel, the leaderboard channel and the fulfillment channel, if you set one.
- "View Channel", "Send Messages", "Embed Links", "Read Message History" and "Pin Messages" in the test channel.
- "Manage Roles" for the Grinch Role and for every role sold in the shop. The bot's own role has to be above them in the role hierarchy.

### Testing the event {#testing}

You can try the event at any time of the year in a test channel without affecting the real event. Enable "Test Mode" in the [Christmas Event configuration](#config-event) and set a "Test Channel". Use channel permissions to decide who can see the test channel and take part.

- The test channel always behaves like the live event: `/candycane` and `/giftshop` work there at any time of the year, gifts spawn there and it gets its own test leaderboard.
- Bosses never appear on their own in the test channel. Members with the Manage Server permission use the "Spawn test boss" button instead.
- The on/off toggles ("Enable Christmas Event", "Enable Daily Claim", "Enable Gift Shop") are not checked in the test channel.
- Test currency, purchases and the test leaderboard are completely separate from the real event.
- The Grinch Role and roles bought in the shop are handed out for real, so you can check the whole setup.
- When you turn Test Mode off or change the Test Channel, all test data is removed.

If you restricted the commands to certain channels in your Discord server settings (Integrations), allow them in the test channel too.

## Usage {#usage}

### Christmas Countdown

Once enabled, the bot automatically updates the configured channel name hourly to display a countdown to the selected date (Christmas Eve, Christmas Day, or New Year). When the date has passed, the channel name reflects that.

### Advent Calendar

The bot posts an interactive message in the configured channel with 24 buttons (one for each day). During December:

- Users can click the button for the current day to "open" the door and receive a customized message.
- Buttons for other days are disabled (unless button randomization is enabled).
- If role rewards are configured for a day, users automatically receive those roles when they open the door.
- Users who open all 24 doors can receive additional reward roles.
- Each user can only open each day once (unless re-opening is enabled).
- If a door has a candy cane reward, the user receives a random amount between its minimum and maximum when they open the door for the first time, and the `%candy%` placeholder in the door message shows the amount. The reward is only paid while the Christmas event is enabled and live (December 1st to 26th), and never again when a door is re-opened. Otherwise the door still works, it just pays no candy canes and `%candy%` shows 0.
- If a door has a private message, the bot sends it to the user after they open the door. It supports the `%day%`, `%daysToGo%` and `%candy%` placeholders. If the user has private messages disabled, it is skipped.

### Christmas Event {#usage-event}

#### The event year {#event-year}

All dates use the timezone configured for your bot.

| Period                       | What happens                                                                                                                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| December 1st to 26th         | The event is live: `/candycane`, gift spawns, bosses, the shop, advent door rewards and the live leaderboard all work.                                                         |
| December 24th                | Double reward day. Candy earned from `/candycane` and from gifts is doubled. Advent door rewards and boss payouts are not doubled.                                             |
| December 27th to January 2nd | Spend-only. Earning is over, but `/giftshop` stays open so nobody sits on unspent candy. The bot posts the closing announcement and the leaderboard shows the final standings. |
| All other days               | The event is dormant. The commands answer that the event is over or not started yet, and the leaderboard and countdown show how long it is until Christmas.                    |

On January 3rd, right after the spend-only period ends (at the first day change of the off-season), the balances, purchases and bosses of the season are reset, so leftover currency is gone. The reset waits if the closing announcement is still owed and is skipped if nobody played. Test Mode lets you try the event outside these dates.

#### Earning candy {#earning-candy}

- **`/candycane`** can be used once per day, or once per cooldown if you set a "Daily Claim Cooldown (hours)". Most of the time it gives a random amount of candy canes, and a gift can turn into a much larger jackpot. Otherwise the Grinch plays a trick: the member loses a little currency (never below 0), gets the Grinch Role for a while (only if you set one), or just gets a scare and keeps everything. The role is removed by an hourly sweep, so it can stay up to an hour longer than configured. Requires "Enable Daily Claim".
- **Gifts** spawn in your "Gift Spawn Channels". After a random waiting time the next message in one of the channels drops a gift, and on top of that the bot drops a number of gifts per day at random times, even when nobody is talking. The first member to click the claim button gets the reward. A gift nobody claims is gone after the "Despawn Time (minutes)".
- **The boss event** runs in the "Boss Channel" from the "Boss Week Start Day" until December 24th. Bosses start on the "Boss Week Start Day" (default 10), so no bosses appear on December 1st to 9th unless you change it. Bosses such as the Grinch appear at random times between the earliest and latest hour of "Wake-Up Spawns", and the whole community fights together: every member can stake some of their currency against the boss until the fight duration runs out. The more is staked, the higher the chance to win, up to a maximum chance once the pool reaches the boss's HP, and the boss's HP scales with the number of active members. If the boss is beaten, every fighter gets their stake back multiplied by the "Win Multiplier". If the boss wins, the stakes are lost. The bot can ping all fighters when the fight ends.
- Advent door rewards and boss payouts are never doubled on December 24th, only `/candycane` and gifts are.
- Members cannot steal from each other. There is no stealing in the Christmas event.
- Advent calendar doors can pay candy canes too, see [Advent Calendar](#usage).

#### Spending candy {#spending-candy}

`/giftshop` shows the item list with prices and descriptions and the member's balance, only visible to the member who ran it. Picking an item shows a confirmation with the price and the balance before and after, and the "Confirm purchase" button is disabled with a reason when the member cannot buy it (not enough currency, sold out, limit reached).

- Items of the type "Role (default)" hand out the configured role immediately and permanently. If the role cannot be given, the purchase is cancelled and the currency is refunded.
- Items of the type "Custom (fulfilled manually)" are posted to the "Fulfillment Channel" so you can hand out the prize yourself. Left empty, they go to the bot's log channel.
- Stock and limit per user apply to the whole season.
- Every item can carry its own purchase message with the `%item%`, `%price%`, `%balance%` and `%user%` placeholders.

#### Leaderboard and countdown {#leaderboard}

When a "Leaderboard Channel" is set, the bot posts a single message and keeps it up to date, in every phase of the year. Outside the event it shows how long it is until Christmas. While the event is live it ranks members by the currency they hold plus what they spent in the shop, so buying things never costs a place. Grinch tricks and lost boss fights do. After the event it shows the final standings. Its look can be customized in [Messages](#config-strings).

The Christmas countdown channel is not part of the Christmas Event. It is set up in the separate [Christmas Countdown](#config-countdown) configuration and works independently of the event.

The bot also posts a closing announcement after the event, but only if a "Leaderboard Channel" is set and someone earned currency that season.

## Commands {#commands}

<SlashCommandExplanation />

| Command      | Description                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `/candycane` | Open your daily gift from Santa and collect currency. Can be used once per day or per cooldown. Requires "Enable Daily Claim". |
| `/giftshop`  | Show the gift shop with your balance and buy an item. Requires "Enable Gift Shop". Stays available until January 2nd.          |

Both commands are registered on every server that uses the module. While the matching feature is switched off, they simply answer that it is not active.

## Configuration {#configuration}

### Christmas Countdown {#config-countdown}

In this configuration file, you can set up the Christmas countdown. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=holidays%7Cconfigs/countdown).

| Field             | Description                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| Enabled?          | Enable or disable the countdown feature.                                                                   |
| Countdown-Channel | A voice channel or category whose name will be updated to show the countdown.                              |
| Countdown until   | Select the target date: December 24 (Christmas Eve), December 25 (Christmas Day), or January 1 (New Year). |

### Advent Calendar {#config-calendar}

In this configuration file, you can set up the advent calendar. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=holidays%7Cconfigs/advent-calendar).

| Field                                                                      | Description                                                                                                                                                             |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled?                                                                   | Enable or disable the advent calendar feature.                                                                                                                          |
| Calendar Channel                                                           | An empty text channel where the advent calendar message will be posted.                                                                                                 |
| Calendar message                                                           | The main message displayed above the calendar buttons.                                                                                                                  |
| "Already opened" Message                                                   | Message shown when a user tries to re-open a door they already opened.                                                                                                  |
| Reward roles for claiming all days (optional)                              | Roles given to users who open all 24 doors.                                                                                                                             |
| Allow users to see the calender message of the current day multiple times? | If enabled, users can view the day's message again after opening it.                                                                                                    |
| Randomize buttons hourly?                                                  | If enabled, the button order is shuffled every hour. All buttons become clickable, but only the current day's door can be successfully opened.                          |
| Wrong day message                                                          | Message shown when a user tries to open a door that is not today's.                                                                                                     |
| Day 1-24 Claiming Message                                                  | The message displayed when a user opens the corresponding day's door, with `%day%`, `%daysToGo%` and `%candy%` placeholders. Each day has its own configurable message. |
| Day 1-24 Reward Roles (optional)                                           | Roles given to users when they open the corresponding day's door.                                                                                                       |
| Emojis                                                                     | The emojis shown on the calendar buttons. You can set one emoji for each day (1-24).                                                                                    |

### Christmas Event {#config-event}

In this configuration file, you can set up the Christmas event. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=holidays%7Cconfigs/christmas-event). Most fields are hidden until you enable the event. The claim fields only appear once "Enable Daily Claim" is on, and "Fulfillment Channel" only once "Enable Gift Shop" is on.

| Field                             | Description                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------- |
| Enable Christmas Event            | Master switch, off by default. While off, the event does nothing at all.                       |
| Enable Daily Claim                | Allow members to collect currency with `/candycane`.                                           |
| Enable Gift Shop                  | Allow members to spend currency with `/giftshop`.                                              |
| Currency Name                     | Name of the event currency (plural), default "Candy Canes".                                    |
| Currency Emoji                    | Emoji shown next to amounts, default 🍬. Only standard emojis are supported.                   |
| Test Mode                         | Try the event with separate test data, see [Testing the event](#testing).                      |
| Test Channel                      | The channel the test event runs in.                                                            |
| Gift Chance (%)                   | Chance that `/candycane` gives currency instead of a Grinch trick.                             |
| Minimum Gift Reward               | Lowest reward of a daily claim gift.                                                           |
| Maximum Gift Reward               | Highest reward of a daily claim gift.                                                          |
| Jackpot Chance (%)                | Chance that a won gift becomes a jackpot.                                                      |
| Jackpot Reward                    | Reward of a jackpot.                                                                           |
| Minimum Grinch Trick Loss         | Lowest amount a member can lose to a Grinch trick.                                             |
| Maximum Grinch Trick Loss         | Highest amount a member can lose to a Grinch trick.                                            |
| Show the daily claim to everybody | Post the result of `/candycane` publicly instead of only to the member.                        |
| Daily Claim Cooldown (hours)      | Cooldown between claims. 0 means once per day.                                                 |
| Grinch Role                       | Role given for a while when the Grinch plays a trick. Leave empty to skip.                     |
| Grinch Role Duration (minutes)    | How long the Grinch Role stays on a member.                                                    |
| Gift Spawn Channels               | Channels in which gifts spawn. Leave empty to disable gift spawns.                             |
| Minimum Spawn Interval (hours)    | Shortest wait between two gifts that spawn from chat activity.                                 |
| Maximum Spawn Interval (hours)    | Longest wait between two gifts that spawn from chat activity.                                  |
| Minimum Gift Spawn Reward         | Lowest reward of a spawned gift.                                                               |
| Maximum Gift Spawn Reward         | Highest reward of a spawned gift.                                                              |
| Despawn Time (minutes)            | How long an unclaimed gift stays claimable.                                                    |
| Wake-Up Spawns per Day            | Gifts dropped every day at random times even when nobody is talking. 0 means only on activity. |
| Wake-Up Spawns: earliest hour     | Earliest hour of the day for these gifts.                                                      |
| Wake-Up Spawns: latest hour       | Latest hour of the day for these gifts.                                                        |
| Leaderboard Channel               | Channel for the self-updating leaderboard. Leave empty to disable.                             |
| Leaderboard Entries               | How many members the leaderboard and closing announcement show.                                |
| User Display Mode                 | Whether members are shown as mention, tag or nickname.                                         |
| Fulfillment Channel               | Channel where purchases of custom shop items are posted. Empty uses the bot's log channel.     |
| Boss Channel                      | Channel in which bosses appear. Leave empty to disable the boss event.                         |
| Boss Week Start Day               | Day of December on which bosses start to appear. They keep appearing until December 24th.      |
| Bosses per Day                    | Number of bosses per day of boss week. 0 pauses bosses.                                        |
| Fight Duration (minutes)          | How long members can stake against a boss.                                                     |
| Boss HP per Active Player         | How much the boss HP grows for every active member.                                            |
| Minimum Active Players            | Boss HP is calculated with at least this many active members.                                  |
| Activity Window (days)            | A member counts as active if they were active within this many days.                           |
| Stake Limit per Member            | The most one member can stake against a single boss.                                           |
| Base Win Chance (%)               | Chance to beat a boss with almost nothing staked.                                              |
| Maximum Win Chance (%)            | Chance to beat a boss once the pool reaches its HP.                                            |
| Win Multiplier                    | Fighters get their stake back multiplied by this when the boss is beaten.                      |
| Ping Fighters When a Boss Ends    | Reply to the boss message and ping every fighter when the fight is decided.                    |
| Bosses                            | The bosses to pick from at random, each with a name and an optional image URL.                 |

### Messages {#config-strings}

In this configuration file, you can customize the messages of the Christmas event, such as the spawn, boss, shop and leaderboard texts. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=holidays%7Cconfigs/christmas-strings).

### Candy Cane Shop Items {#config-shop-items}

In this configuration file, you can set up what your members can buy in `/giftshop`. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=holidays%7Cconfigs/christmas-shop-items).

| Field                       | Description                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| Item Name                   | Name of the item.                                                                             |
| Item Description            | Description shown in the shop.                                                                |
| Price                       | Price in the event currency.                                                                  |
| Item Type                   | "Role (default)" gives a role automatically, "Custom (fulfilled manually)" is posted for you. |
| Role (for "Role" items)     | The role to give.                                                                             |
| Stock                       | How many of the item can be bought in total.                                                  |
| Limit per User              | How many times one member can buy it.                                                         |
| (optional) Purchase Message | Message sent after buying, with `%item%`, `%price%`, `%balance%` and `%user%`.                |

### Advent Calendar Door Rewards {#config-advent-rewards}

In this configuration file, you can give advent calendar doors a candy cane reward and a private message. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=holidays%7Cconfigs/advent-rewards). Rewards are only paid while the Christmas event is enabled and live.

| Field                      | Description                                                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Door                       | The door (day of December, 1-24) this entry belongs to.                                                                                     |
| Minimum Candy Canes        | Lowest amount of candy canes for opening this door.                                                                                         |
| Maximum Candy Canes        | Highest amount of candy canes. A random amount between minimum and maximum is rolled once per member and door. Set both to 0 for no reward. |
| (optional) Private Message | Message sent to the member in a private message when they open the door. Supports `%day%`, `%daysToGo%` and `%candy%`.                      |

## Troubleshooting {#troubleshooting}

<details>
    <summary>The countdown channel is not updating</summary>
    <ul>
        <li>Make sure the countdown is enabled in the configuration.</li>
        <li>Ensure the bot has the "Manage Channels" permission for the selected channel.</li>
        <li>Note that the channel name updates hourly. Discord also rate-limits channel name changes.</li>
    </ul>
</details>
<details>
    <summary>The advent calendar buttons are not showing</summary>
    <ul>
        <li>Make sure the advent calendar is enabled and a valid empty text channel is configured.</li>
        <li>Ensure the bot has the required permissions in the calendar channel.</li>
    </ul>
</details>
<details>
    <summary>Users are not receiving role rewards</summary>
    <ul>
        <li>Make sure the bot's role is higher than the reward roles in the server role hierarchy.</li>
        <li>Verify that the roles are correctly configured for the specific day.</li>
    </ul>
</details>
<details>
    <summary>Nothing happens, the Christmas event does not do anything</summary>
    <ul>
        <li>Make sure "Enable Christmas Event" is turned on. While it is off, nothing in the event works, `/candycane` and `/giftshop` included.</li>
        <li>Make sure the toggle for the feature is on: "Enable Daily Claim" for `/candycane`, "Enable Gift Shop" for `/giftshop`. Gifts, bosses and the leaderboard each need their channel to be set.</li>
        <li>Check the season dates: the event is live from December 1st to 26th and spend-only until January 2nd. On other days it is dormant. All dates use the timezone configured for your bot. Use <strong>Test Mode</strong> to try it at any time.</li>
    </ul>
</details>
<details>
    <summary>A command says that the feature is not active</summary>
    <ul>
        <li>`/candycane` and `/giftshop` are registered on every server with the module. They answer that they are not active while "Enable Christmas Event" or their own toggle ("Enable Daily Claim" for `/candycane`, "Enable Gift Shop" for `/giftshop`) is off.</li>
    </ul>
</details>
<details>
    <summary>The boss never appears</summary>
    <ul>
        <li>Make sure a "Boss Channel" is set and the bot can send messages there.</li>
        <li>Bosses only appear from the "Boss Week Start Day" (default 10) until December 24th, and "Bosses per Day" must be above 0.</li>
    </ul>
</details>
<details>
    <summary>No gifts are spawning</summary>
    <ul>
        <li>Make sure at least one channel is added to "Gift Spawn Channels" and that the bot can send messages there.</li>
        <li>Gifts only spawn from December 1st to 26th. Activity gifts wait a random time between "Minimum Spawn Interval (hours)" and "Maximum Spawn Interval (hours)" and then drop on the next message in a spawn channel.</li>
    </ul>
</details>
<details>
    <summary>A shop role or the Grinch Role is not being given</summary>
    <ul>
        <li>Make sure the bot has the "Manage Roles" permission and its own role is above the role in the hierarchy.</li>
        <li>If a shop role cannot be given, the purchase is cancelled and the currency is refunded.</li>
    </ul>
</details>
<details>
    <summary>Advent doors do not pay candy canes</summary>
    <ul>
        <li>Make sure the door has a maximum above 0 in <a href="#config-advent-rewards">Advent Calendar Door Rewards</a>.</li>
        <li>Rewards only pay while "Enable Christmas Event" is on and the event is live (December 1st to 26th), and only the first time a door is opened.</li>
    </ul>
</details>

## Stored data {#data-usage}

The following data is being stored about every advent calendar door opening:

- The user ID of the user who opened the door
- The day number that was opened
- The year of the opening
- Metadata about the entry (date when created and last updated)

If the Christmas event is enabled, the following data is stored as well:

- For every participating member: the Discord User ID, the current balance, when they last claimed, and when the Grinch Role expires
- For every purchase: the Discord User ID of the buyer and the name, type and price of the item
- For bosses: the boss fight and, for every fighter, the Discord User ID and their stake
- The channel ID and message ID of the leaderboard message and which season already got its closing announcement
- While Test Mode is on: the same data for the test channel, deleted when Test Mode is turned off or the Test Channel is changed

The balances, purchases and bosses of a season are deleted automatically on January 3rd, after the spend-only period. The total earned is stored but not used for the leaderboard ranking.

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
