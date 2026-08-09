# Analytics: what is collected

Analytics counts what happens on your server: messages sent, members joining and leaving, which channels get used. This page lists exactly what it records, where the data sits, and how to get a copy or delete it. If a member asks what the bot knows about them, you can send them this page.

## The short version

- Analytics records counts and timestamps. It never stores the text of a message, and it never asks Discord for the permission to read one.
- The data sits in your own bot's database, on the Bot-Host you picked. The dashboard keeps no copy, and nothing is merged with other servers.
- Nothing is collected until you switch analytics on.
- You are responsible for this data: in data-protection terms you're the controller, and ScootKit processes it for you.

## What is recorded

Everything analytics stores is a number or a date.

Until you switch analytics on, none of it exists. The database tables are never created, the bot attaches no listeners, and it doesn't even ask Discord for the events involved.

### Server totals, per day and per hour

| What                                     | Recorded as      |
| ---------------------------------------- | ---------------- |
| Messages sent                            | A count          |
| Slash commands used, and how many failed | A count          |
| Reactions added                          | A count          |
| Time spent in voice channels             | Total seconds    |
| Threads created                          | A count          |
| Members joining and leaving              | A count each     |
| Members posting for the first time       | A count          |
| Members and bots on the server           | A daily snapshot |

### Automatic moderation

How often each kind of automatic moderation fired, per day: a blocked invite link, a spam burst, and so on. Only the type of trigger and the count are stored. Who triggered it is not in there.

### Per channel and per role

Message counts per day, for each channel and each role. This is what shows you which channels are busy and which parts of your community are active.

### Per member

Messages, reactions and voice seconds per day, plus a lifetime message total, the date of their first message and the date they were last active. This powers the most-active-members list and each member's own `/mystats`.

### Recent activity records

A list of the latest individual events. Each entry holds only an event type, a member ID, a channel ID and a timestamp. The list has a fixed size cap: as new events arrive, the oldest fall off. On a busy server it reaches back a few days, on a quiet one a few months.

## What is never recorded

- **Message text.** Counting a message needs no text. Discord tells the bot that a message happened without including what it said, and analytics never requests the permission that would add the text. Some other modules do need that permission and request it when you switch them on. Even then, nothing in analytics reads a message's text, and there is no field in the analytics data that could hold one.
- **Attachments, images, files or links.** Neither their contents nor how many there were.
- **Message edits or deletions.**
- **Direct messages.** Only activity inside the server counts.
- **Channels your bot cannot see.** No access, no data.
- **Other bots.** Their messages and commands are ignored.

## Where the data lives and who's responsible

Your bot has its own database, and everything above lives in it. The bot runs on a Bot-Host, one of the servers ScootKit operates. [Which one is your choice](/docs/scnx/guilds/bots#bot-host), and because Bot-Hosts sit in different regions, that choice also decides which country the data is physically in.

Two things follow from that setup:

- Your figures stay your server's own. There is no shared SCNX analytics service, and no merging across servers.
- The dashboard stores nothing. Each time you open the analytics tab, it asks your bot for the figures right then. If your bot is stopped, there is nothing to ask, and the tab tells you so.

In data-protection terms you are the controller for this data and ScootKit is the processor, under the [Data Processing Agreement](https://corp.scootkit.com/docs/scnx/policies/data-processing-agreement/) that comes with your SCNX contract. The hosting companies ScootKit uses are listed as sub-processors on your server's Policy & Compliance tab. The decisions about the data are yours: whether analytics runs, what the figures are used for, when they are deleted. ScootKit won't make them for you.

## How long it is kept

| Data                                                       | Kept for                                         |
| ---------------------------------------------------------- | ------------------------------------------------ |
| Daily and hourly totals, per channel, per role, per member | Until you delete them                            |
| Recent activity records                                    | Until the size cap is reached, then oldest first |

## Letting members opt out

There is a setting for this: **Let members opt out of analytics**. It's off by default. Whether to offer it is your call; that depends on your community and the rules that apply to you.

With it on, members can run `/analytics-privacy` in your server to stop being counted as individuals. For a member who opts out:

- Their existing per-day records are anonymised, and their lifetime total, first-message date and last-active date are cleared.
- Their recent activity records are deleted.
- Their future activity still counts in the server totals, with no link back to them.

Server totals don't drop when someone opts out. Their messages really happened; what disappears is the connection between those messages and the person.

Opting out takes effect immediately. A member can opt back in later, but removed data stays gone.

:::note
Role activity is counted per role. If a role has only one or two members, its numbers can still show who was active. Keep that in mind if you use single-member roles.
:::

## Getting a copy

**Download a copy of this data** sits under **Privacy** on the analytics tab, and only the server owner can use it. It builds a single JSON file in your browser from your bot's answers. Nothing is stored at ScootKit along the way.

The file covers your entire history, whatever time range you have on screen, and includes cards you've hidden from your dashboard. It also always contains a list of anything that could not be exported, even when that list is empty.

## Switching off, and deleting

Switching analytics off stops all collection. Your existing data is kept, so you can switch it back on later and pick up where you left off.

**Delete all analytics data**, in the same **Privacy** section, is the permanent step. You have to tick a confirmation first, and the dashboard cannot undo it. The deletion runs as a single database transaction: it either completes in full or changes nothing at all. Afterwards you get a report of what was removed, table by table, with a row count for each.

Two things survive it on purpose:

- **Your members' opt-out choices.** Anyone who opted out stays opted out. Their data is deleted like everyone else's, and the record of their choice is kept, so deleting the data doesn't quietly re-enrol them.
- **Disaster-recovery backups.** These exist so a server can be restored after a failure. A copy can persist in them for up to 90 days.

## History from before your own bot

If your server used analytics before moving to its own bot, the history was transferred and the old copy deleted.

The old system never recorded joins, leaves or first-time posters. For dates before the transfer, those figures show as _not recorded_, and the point where your own bot took over is marked.

## When a member asks

`/mystats` shows a member their own figures and nothing else. Nobody can look up another person. If you need to answer a data request yourself, the JSON copy above contains everything your bot holds.

For deletion requests, switch on the member opt-out and the member can handle it themselves with `/analytics-privacy`.

You are the contact for questions about this data. If a member wants something changed or removed beyond that, the decision is yours to make as the controller.
