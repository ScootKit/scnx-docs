---
sidebar_position: 2
---

# Server Analytics

See which members, channels and days keep your server busy, how members come and go, and where things are heading. Analytics is collected by your server's own bot, so the figures stay with your server.

:::tip We care about privacy
Analytics only counts things. It never stores the text of a message or any attachment. The data lives in your own bot's database, and SCNX keeps no copy. [Read exactly what is collected](/docs/custom-bot/analytics-data).
:::

:::info
Analytics needs your server's own bot. If your server doesn't have one yet, the analytics page will offer to [set one up](/docs/scnx/guilds/bots). The SCNX bot is no longer used for analytics.
:::

## Enable analytics {#enable}

1. Open the [analytics page](https://scnx.app/glink?page=analytics) of your server.
2. Click **Enable analytics**. Only the server owner and co-owners can do this.
3. Restart your bot. Your bot only starts collecting the next time it starts up, so the page shows a **Restart bot now** button. A restart takes a few seconds, and your bot is offline until it's back.

Nothing is recorded before the restart. After it, new activity shows up within about a minute.

If your bot is running a version from before analytics existed, the page asks you to update it first.

### History from the SCNX bot {#history}

If your server used analytics with the SCNX bot before, that history was moved into your own bot. The old system never recorded joins, leaves or first-time posters, so charts mark those figures as "not recorded" for dates before the move.

## The dashboard {#dashboard}

Pick a timeframe at the top of the [analytics page](https://scnx.app/glink?page=analytics): **Last 24 hours**, **Last week** or **Last 30 days**. Every card follows it. The page asks your bot for fresh figures each time you open it, so there is no delay or cached summary.

Times are shown in your server's analytics timezone (UTC by default). The server owner can change it. A new timezone only applies to activity recorded after the change.

The dashboard is split into cards. The main ones:

- **At a glance**: messages, commands, average messages per day, active members, users and bots.
- **Messages & Commands**, **Activity by day of week**, **Most active hours during the day** and a heatmap of **when your server is active**.
- **10 most used channels** and **Most active users**.
- **Member flow**: users, bots, joins, leaves, new posters and net growth for the selected timeframe.
- **Voice, threads and reactions**: time in voice, peak voice usage per hour, thread activity and reactions.
- **Retention and engagement**: retention cohorts, lurker rate, new vs. returning posters, time to first message, a member leaderboard with rising stars, at-risk regulars, activity by role, channel and category leaderboards and dead channels.

Lists show the top 5 first. Click **Show more** to see the rest.

### Module cards {#module-cards}

Some cards only appear when the matching module is enabled on your bot:

| Module                                                                 | Cards                                                                                        |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Moderation](/docs/custom-bot/modules/moderation)                      | Moderation actions by type, automod triggers, joins and quarantine markers, repeat offenders |
| [Invite tracking](/docs/custom-bot/modules/moderation/invite-tracking) | Joins by invite source, invite source vs. retention                                          |
| Tickets, giveaways, suggestions, applications                          | Opened and closed tickets, giveaway participation, submitted suggestions and applications    |
| Levels, activity streaks, economy                                      | Level distribution, longest activity streaks, economy balances                               |
| Custom commands                                                        | Custom command runs                                                                          |

Cards for most-used commands, command failure rate and module command usage are always available.

### Customize the layout {#layout}

Click **Customize layout** to reorder or hide cards. Drag a card by its handle or use the arrows, then click **Save layout**. Hidden cards aren't loaded at all. The layout is saved for the whole server.

When new cards are added to analytics, they show up below your saved layout so you can place them.

### Server Wrapped {#wrapped}

Around the end of each year, a **Server Wrapped** banner appears on the analytics page. It sums up your server's year on one card you can share. Wrapped cards from past years stay available all year.

## Slash commands {#slash-commands}

Your bot adds two commands for members. Both reply privately, so only the person who ran them sees the answer.

- `/mystats`: shows a member their own messages and when they were first and last active. Nobody can look up another member.
- `/serverstats`: shows server-wide totals for the last 7 days: messages, commands, average messages per day, active members, members and bots.

The server owner can turn each command off under **Privacy** at the bottom of the analytics page. Turned-off commands disappear without a restart.

## Privacy and member opt-out {#user-opt-out}

The server owner can turn on **Let members opt out of analytics** under **Privacy**. It's off by default. With it on, members can run `/analytics-privacy opt-out` on your server to stop being counted as individuals:

- Their past activity is anonymised. Their lifetime total and first and last activity dates are cleared.
- Their future activity still counts towards server totals, but isn't linked to them.
- They no longer appear in any member list or leaderboard.

Opt-out applies to your server only. A member can run `/analytics-privacy opt-in` to be counted again from then on. Anonymised history stays anonymous.

[Read more about opt-out](/docs/custom-bot/analytics-data#letting-members-opt-out).

## Download or delete your data {#data}

Both options are under **Privacy** on the analytics page, and only the server owner can use them.

- **Download analytics data** builds one JSON file in your browser with everything your bot holds for analytics. It covers the whole history, not only the timeframe on screen.
- **Delete all analytics data** permanently removes every analytics figure your bot holds for your server. Your bot's database is the only copy, so this cannot be undone. Download a copy first if you need one. Members who opted out stay opted out.

If analytics is still on afterwards, collection starts again from zero.

## Who can see analytics {#permissions}

The server owner and co-owners can see and use analytics. You can give [trusted admins](/docs/scnx/guilds/trusted-admins) access with the **View & use analytics** permission. Enabling analytics, the privacy settings, the timezone, downloading and deleting stay with the server owner.

## Troubleshooting {#troubleshooting}

<details>
    <summary>The page says "Your bot is currently offline"</summary>
    <ul>
        <li>Your bot collects analytics itself, so there is nothing to show while it's offline. Start your bot from its dashboard.</li>
        <li>Bots on the free plan stop automatically after a period of inactivity.</li>
    </ul>
</details>
<details>
    <summary>Analytics is enabled, but nothing shows up</summary>
    <ul>
        <li>Make sure you restarted your bot after enabling analytics. Nothing is recorded until then.</li>
        <li>If the page says your bot is missing events analytics needs, click <b>Restart bot now</b>. If the notice comes back, check that the Server Members Intent is enabled for your bot in the Discord Developer Portal.</li>
    </ul>
</details>
<details>
    <summary>Messages from a channel are missing</summary>
    <ul>
        <li>Your bot only counts channels it can view. Check its permissions for that channel.</li>
        <li>Messages from bots, including your own bot, are not counted.</li>
    </ul>
</details>
<details>
    <summary>A member is missing from the lists</summary>
    <ul>
        <li>Make sure the member has sent a message in a channel your bot can view during the selected timeframe.</li>
        <li>Members who opted out are not shown in member lists.</li>
    </ul>
</details>
<details>
    <summary>The command count looks too low</summary>
    <ul>
        <li>Commands only count slash commands run on your own bot. Commands of other bots are not included.</li>
    </ul>
</details>
<details>
    <summary>I see "Member flow needs at least 48 hours of analytics data."</summary>
    <ul>
        <li>Member flow needs at least two days of data. Check back once analytics has been running for 48 hours.</li>
    </ul>
</details>
<details>
    <summary>I see "Not enough data to draw a chart for this timeframe."</summary>
    <ul>
        <li>Choose a longer timeframe, like "Last 30 days" instead of "Last 24 hours".</li>
        <li>A gap in a line means nothing was recorded that day, not that the value was zero.</li>
    </ul>
</details>
<details>
    <summary>The page says "Your bot does not have analytics yet"</summary>
    <ul>
        <li>Your bot is running an older version. Update it from your bot's dashboard and the page will work.</li>
    </ul>
</details>
