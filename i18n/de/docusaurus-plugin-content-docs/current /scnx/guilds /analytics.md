---
sidebar_position: 1
---

# Server Analysen

Unlock great detailed statistics about your server - see which members, channels and days are most active on your
server, unlock information about your member-flow and projections about the future 🔮

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: true, STARTER: true}}/>


:::tip We care about privacy
Wondering what data we store about your server and how we use it? Please read
our [FAQ Article](https://faq.scnx.app/data-collection-with-analytics/) to learn more.

**tl;dr**: We only store data about messages for 30 days and only store the counts after
that. [Users can opt out](#user-opt-out) and no message (or attachment) content will ever be saved.
:::

## Enable analytics {#enable}

To enable analytics, visit the [analytics page](https://scnx.app/glink?page=analytics) of your Discord on SCNX and click
on "Enable analytics".

![](./../../assets/scnx/guilds/analytics/setup.png)

## Use in Dashboard {#dashboard}

In your [analytics dashboard](https://scnx.app/de/glink?page=analytics) you will be able to see the following data based on a timeframe which you can select on the top of your dashboard:
* Messages & Commands: You'll see a graph showing how many messages and commands have been sent on each day in the timeframe.
* 10 most used channels: This is a graph showing what percentage of the messages has been sent in which channel.
* Most active users: These are the 15. most active servers (who haven't enabled [privacy mode](#user-opt-out)).
* Memberflow (always last 30 days): This shows the number of bots, users and active members on each day in the timeframe.
* Most active hours during the day: This graph shows how many messages have been sent on average at what time on your server.
* At a glance: This section gives you a quick overview of your server. It includes the following data:
* Number of messages sent in the timeframe
* Number of commands used in the timeframe
* Average messages per day
* Number of active members on your server (excluding users who haven't enabled [privacy mode](#user-opt-out))
* Number of users on your server
* Number of bots on your server

*Please note that, depending on your timeframe, some of these parts might be unavailable.*

![](./../../assets/scnx/guilds/analytics/dashboard.png)


## Use analytics as Slash-Commands {#slash-commands}

Any user on your server can use the Slash-Commands of the verified SCNX Bot (you can configure this in the
Discord-Server-Settings under "Integrations"). The following commands are available:

* `/stats guild`: Shows a statistics overview of your server. This includes the 10 most active channels and users in the
last 30 days and an "At a glance" section where you can find the total number of messages and commands in the last 30
days.
* `/stats user`: Shows a statistics overview of any user on your server. This includes the 10 most active channels (and the number of messages sent in them) and an "At a glance" section where you can find the total number of messages and commands in the last 30
days. Users who have enabled [privacy mode](#user-opt-out) won't be able to use this command (/ shown data about).

![](./../../assets/scnx/guilds/analytics/commands.png)


## Troubleshooting {#throubleshooting}

<details>
    <summary>Messages are not showing up in the SCNX Analytics dashboard</summary>
    <ul>
        <li>Please make sure that the (verified) SCNX Bot has permissions to view the channel the message has been sent
            into.
        </li>
        <li>Please note that the dashboard is caching a result for a few minutes. Please review the time at which your
            result was generated in the dashboard (displayed at the top of the page, should look like "This summary got
            generated at 11:30:28 AM").
        </li>
        <li>Try refreshing the analytics dashboard in a few minutes.</li>
        <li>Users that have <a href="#user-opt-out">privacy mode</a> enabled will not be displayed in the dashboard.
        </li>
    </ul>
</details>
<details>
    <summary>A user is missing from the dashboard</summary>
    <ul>
        <li>Make sure the user has sent a message into a channel that the (verified) SCNX Bot can view.</li>
        <li>Try refreshing the analytics dashboard in a few minutes.</li>
        <li>Users that have <a href="#user-opt-out">privacy mode</a> enabled will not be displayed in the dashboard.
        </li>
    </ul>
</details>
<details>
    <summary>I see a "There aren't a lot of messages in the selected time-period, so your charts may look a bit weird
        ^^" warning in my dashboard
    </summary>
    <ul>
        <li>Make sure you had analytics enabled for more than 48 hours.</li>
        <li>Refresh your dashboard.</li>
        <li>Make sure you have selected a sufficient timeframe (like "Last 30 days" instead of "Last 24 hours").</li>
        <li>Make sure more than 100 messages have been sent in the selected timeframe.</li>
        <li>Please make sure that the (verified) SCNX Bot has permissions to view the channel that messages have been
            sent
            into.
        </li>
    </ul>
</details>
<details>
    <summary>Instead of seeing my memberflow, the dashboard shows me this warning: "To see data about your memberflow,
        you need to have had analytics enabled for at least 48 hours."
    </summary>
    <ul>
        <li>Make sure you had analytics enabled for more than 48 hours.</li>
        <li>Refresh your dashboard.</li>
        <li>Make sure SCNX can view at least on channel on your server.</li>
    </ul>
</details>

## User Opt-Out {#user-opt-out}

:::info Quick reminder
We do not store any message content, only metadata about messages (and that only for 30 days after a message was sent).
To review our data practises, please our [FAQ Article](https://faq.scnx.app/data-collection-with-analytics/).
:::

If you (or a user of your server) do nopt want that the server owner and administrators can view how many messages you
sent, or you are worried about personal data being stored about you, you can enable the "Privacy mode" on SCNX
using `/privacy enable` on any server. This global (meaning that SCNX will store no data about you on any server)
will affect the following:

* All data about messages sent by you will be anonymized (= your Discord-User-ID will be removed from the database
entries) - this means that we will not know that *you* sent a message, we'll only know that a message was sent
* All messages sent in the future by you will be saved anonymized (= not associated with your Discord-User-ID) - this
means that we will not know that *you* sent a message, we'll only know that a message was sent
* Users who have enabled privacy mode will still count towards memberflow data (as this does not incldue storing Discord-User-IDs)

You disable this privacy mode (opt back) using `/privacy enable`. Please note that this will not re-associate past
messages sent by you (this is not even possible), meaning that only new messages will be shown in commands and in the
dashboard.
