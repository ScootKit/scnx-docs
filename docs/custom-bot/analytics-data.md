# Analytics: what is collected

Analytics counts activity on your server so you can see how busy it is, which channels people use, and how your membership changes over time. This page describes exactly what is recorded, where it is stored, and what you and your members can do about it.

You are welcome to link your members to this page.

## The short version

- Analytics records **counts and timestamps**, never the text of anything.
- The data lives in **your own bot**, on your own hosting, not on SCNX servers.
- **You** decide whether it runs at all, and whether members can opt out.
- Nothing is collected until you switch analytics on.

## What is recorded

Everything below is a number or a date. There is no message text anywhere in it.

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

### Per channel

Message counts per channel, per day. Which channels are busiest, and which have gone quiet.

### Per role

Message counts per role, per day. Which parts of your community are active.

### Per member

Message counts, reaction counts and voice seconds per member, per day, plus a lifetime message total, the date of their first message, and the date they were last active. This is what powers the most-active-members list and each member's own `/mystats`.

### Recent activity records

A capped list of recent individual events, each holding only an event type, a member ID, a channel ID and a timestamp. It exists so activity can be examined in detail for a short period. It has a fixed size limit and older records are discarded automatically as new ones arrive, so on a busy server it covers days and on a quiet one it covers months.

## What is not recorded

- **The text of messages.** Not stored, not processed, not received. Your bot does not request the Discord permission that would deliver message content, so it never arrives in the first place. This is a property of how the bot connects to Discord, not a promise about what it chooses to ignore.
- **Attachments, images, files or links.** None of their contents, and no counts of them either.
- **Message edits or deletions.**
- **Direct messages.** Only activity in the server itself is counted.
- **Anything from channels your bot cannot see.** If the bot has no access to a channel, that channel does not appear in analytics at all.
- **Bots.** Other bots' messages and commands are ignored entirely.

## Where the data is stored

In your bot's own database, on the hosting that runs your bot. It is not copied to SCNX, and SCNX keeps no cache of it. When you open the analytics tab, the dashboard asks your bot for the figures at that moment and displays them without storing them.

This means you control the data directly, and it also means the analytics tab needs your bot to be running. If your bot is stopped, the tab will tell you so rather than showing you old numbers.

## How long it is kept

| Data                                                          | Kept for                                           |
| ------------------------------------------------------------- | -------------------------------------------------- |
| Daily and hourly totals, per channel, per role and per member | Indefinitely, until you delete it                  |
| Per channel and per hour detail                               | 30 days                                            |
| Recent activity records                                       | Until the size limit is reached, then oldest first |

## Who is responsible for this data

Because collection happens in your own bot rather than on a shared SCNX service, **you are responsible for your members' activity data**, not SCNX. You decide whether analytics runs, whether members can opt out, and when data is deleted.

That is also why the member opt-out is something you switch on rather than something that is always present. Whether your server needs one depends on your community and on the rules that apply to you, and that judgement is yours to make.

## Letting members opt out

Analytics has a setting called **Allow members to opt out**. It is off by default.

When you switch it on, members can run `/analytics-privacy` in your server to stop being individually counted.

For a member who opts out:

- Their existing per-day activity records are made anonymous, and their lifetime totals, first-message date and last-active date are cleared.
- Their recent activity records are removed.
- Future activity is still counted in your server totals, but is never linked to them.

Server totals do not change when someone opts out. Their messages genuinely happened and still count towards how busy your server is. What disappears is the link between those messages and the person.

Opting out takes effect straight away. A member can opt back in later, but data already removed is not restored.

:::note
Because role activity is counted per role rather than per person, a role with only one or two members can still indicate who was active. Bear that in mind if you use single-member roles.
:::

## Turning analytics off, and deleting the data

Switching analytics off stops all collection. Your existing data is kept, so you can switch it back on later and pick up where you left off.

Deleting the data is a separate, deliberate action, because it cannot be undone and there is no backup anywhere else.

## History from before you moved to your own bot

If your server used analytics before it moved into your own bot, your history was transferred across and the old copy was deleted.

Some things were never recorded by the old system, specifically **joins, leaves and first-time posters**. For dates before the transfer, the analytics tab shows those as _not recorded_ rather than as zero, and marks the point where your own bot's collection began. A zero there would mean nobody joined, which is not what happened. We would rather show you an honest gap.

## Your members' rights

If a member asks what you hold about them, `/mystats` shows them their own figures. It only ever shows the person running it; nobody can look up anyone else.

If a member asks you to delete their data, switching on the member opt-out lets them do it themselves with `/analytics-privacy`.
