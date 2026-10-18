# Weekly Activity

Reward the most active members of the week: the module scores message, voice and reaction activity, posts a weekly leaderboard and can give a role to the top members until the next run.

<ModuleOverview moduleName="weekly-activity" />

## Features {#features}

- Scores activity with its own points. It works on its own and does not need the [Levels](/docs/custom-bot/modules/community/levels) module.
- Points for messages, voice activity and reactions. Each source can be turned off and has its own point value.
- Posts a leaderboard of the most active members in a channel of your choice on a weekday and time you choose.
- Optionally gives a reward role to the top members of the week and removes it again at the next run, so the role always shows who was most active last week.
- Every week starts from zero, so inactive members with a high level never crowd out the members who are active right now.
- Channels and roles can be excluded from scoring.

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=weekly-activity) on your server.
2. Open the [configuration](#configuration) and select the "Leaderboard channel". Make sure the bot can send messages there.
3. Choose the "Weekday" and the "Time" at which the leaderboard is posted. The time uses the time zone of your server.
4. Adjust which activities earn points and how many. See [How points are earned](#points).
5. If you want a reward role, create it on your server and select it as "Reward role". The bot needs the `Manage Roles` permission, and its highest role must be above the reward role.

## How points are earned {#points}

Points are collected for the current week only. After each weekly run they are reset.

- **Messages**: A member earns "Points per message" for each message. Two messages of the same member only both count if at least "Message cooldown (seconds)" lie between them. Bots and messages outside of your server are ignored.
- **Voice activity**: A member earns "Points per voice minute" for every minute in a voice channel. Time only counts while the member is not alone with other members, is not muted or deafened, and is not in the AFK channel or a stage channel.
- **Reactions**: A member earns "Points per reaction" when they react to a message. Each member earns points at most once per message, no matter how many emojis they add. Reactions from bots, reactions on your own messages and removing a reaction are ignored.

Channels in "Blacklisted channels" and members with a role from "Blacklisted roles" never earn points.

## Usage {#usage}

On the configured weekday and time, the bot:

1. Counts the points of the week and ranks the members. Members who left the server and members without points are not listed.
2. Gives the "Reward role" to the best members and removes it from the previous winners.
3. Posts the top members in the leaderboard channel. Members with the same points are ranked by who was active first.
4. Starts a new week.

If nobody earned any points, nothing is posted, and the reward role is removed from the previous winners.

If the bot is offline at the scheduled time, it still runs the leaderboard when it is back within 6 hours. If it is back later, that week is skipped and a new week starts, so a leaderboard never covers two weeks.

You can change the reward role at any time. At the next run, the bot removes the old role from the previous winners before giving out the new one. Roles you gave to members by hand are not touched.

## Configuration {#configuration}

In this configuration file, you can configure the module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=weekly-activity%7Cconfigs/config).

| Field                      | Description                                                                                                                                           |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Points for messages?       | If enabled, members earn points for sending messages.                                                                                                 |
| Points per message         | Points a member earns for each counted message.                                                                                                       |
| Message cooldown (seconds) | Minimum time between two messages of the same member that both earn points.                                                                           |
| Points for voice activity? | If enabled, members earn points for time spent in voice channels together with other members.                                                         |
| Points per voice minute    | Points a member earns for each minute of eligible voice activity.                                                                                     |
| Points for reactions?      | If enabled, members earn points for reacting to messages of other members. Each member earns points at most once per message.                         |
| Points per reaction        | Points a member earns for a counted reaction.                                                                                                         |
| Blacklisted channels       | Activity in these channels does not earn points.                                                                                                      |
| Blacklisted roles          | Members with one of these roles do not earn points.                                                                                                   |
| Leaderboard channel        | Channel in which the weekly leaderboard is posted.                                                                                                    |
| Weekday                    | Day of the week on which the leaderboard is posted.                                                                                                   |
| Time                       | Time of day (in the server time zone) at which the leaderboard is posted. The dashboard shows a 12-hour or 24-hour picker depending on your language. |
| Leaderboard size           | How many members are shown on the leaderboard (1 to 50).                                                                                              |
| Reward role                | Role given to the most active members of the week and removed again at the next weekly run. Leave empty to disable.                                   |
| Reward role members        | How many of the top members receive the reward role (0 to 50).                                                                                        |
| Leaderboard message        | The message that is posted every week. Nobody is pinged, regardless of the content.                                                                   |
| User display mode          | How members are shown on the leaderboard: Tag, Mention or Nickname.                                                                                   |
| Row format                 | The line shown for each member on the leaderboard.                                                                                                    |

## Customizing the post {#customizing}

The "Leaderboard message" is a normal message field, so you can change the title, color and images, or switch to a different layout, just like in other modules. By default, the leaderboard is posted as an orange card titled "Weekly Activity Highlights".

You can use these placeholders in the message:

| Placeholder     | Replaced with                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `%leaderboard%` | The ranked list of members, one line per member.                                                                                                              |
| `%week%`        | The week that just ended as a date range, for example "Oct 11, 2026 - Oct 18, 2026". Discord shows the dates in each viewer's language and format.            |
| `%winners%`     | Mentions of the members who received the reward role. Members the bot could not give the role to are not listed. Empty if you did not select a "Reward role". |

Use "User display mode" to choose how members appear in the list:

- **Tag**: The username, for example `alex`. Recommended for large servers.
- **Mention**: A clickable `@mention`. This is the default.
- **Nickname**: The server nickname. Members without a nickname are shown with their display name, and if that is not available, with their username.

Special characters in names, such as `*`, `_` or links, are shown as plain text and do not change the formatting of the message.

"Row format" controls each line of the list. Use `%rank%` for the position, `%user%` for the member and `%points%` for the points. The default is `%rank%. %user% - %points% points`.

:::info
The post never pings anyone, even if your message contains `@everyone`, a role or a mention. Mentions are shown, but nobody receives a notification.
:::

If the list is too long for a Discord message, whole lines are removed from the end of the list, so the members with the best ranks are kept and no line is cut in half. The bot counts every use of `%leaderboard%`, `%week%` and `%winners%` in your message, and the limits of the chosen message type. If you remove `%leaderboard%` from the message, the list is not posted.

## Troubleshooting {#troubleshooting}

**No leaderboard is posted**

- Check that a "Leaderboard channel" is selected and that the bot can view it and send messages there.
- Make sure at least one member earned points during the week. Nothing is posted for a week without points.
- If the bot was offline for more than 6 hours after the scheduled time, that week was skipped.

**The reward role is not given**

- The bot needs the `Manage Roles` permission, and its highest role must be above the reward role.
- The leaderboard is still posted if the role cannot be managed. Check the bot's role position and try again next week.

**Voice activity gives no points**

- Voice time only counts while the member is not alone, not muted or deafened, and not in the AFK channel or a stage channel.
- Check that the channel and the member's roles are not blacklisted.

## Stored data {#data-usage}

The following data is stored for the current week:

- The Discord User ID of every member who earned points
- The points collected this week and the time of the member's first activity this week
- The Discord Message ID and User ID of every message a member reacted to this week (to count each message only once)
- The date of the last weekly run, the User IDs of the last winners and the ID of the reward role that was given to them (to take the role away again at the next run)

Points and reaction entries are deleted at every weekly run. To delete all data stored by this module, [reset the module database](/docs/custom-bot/additional-features/#reset-module-database).
