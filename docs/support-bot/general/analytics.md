---
sidebar_position: 5
title: Analytics
description: Track your Discord support performance with detailed analytics, response times, and team activity stats.
---

# Analytics

## Features {#features}

* View key metrics about your support tickets in one place  - directly in your SCNX dashboard.
* Track the number of open tickets, total tickets, and average messages per ticket.
* Monitor average close time and average initial response time to measure your team's efficiency.
* See the most used close reasons and ticket topics visualized in pie charts.
* View a chart of tickets opened per day over the last 30 days to identify trends.
* Identify your most active team members with a staff leaderboard showing messages sent, average response time, and tickets handled.
* View the average rating and total feedback count from user reviews.
* Filter analytics by system (Modmail, Ticket System, or combined) using tabs.
* Use the `/analytics` slash command to view server-wide or personal analytics directly in Discord.



## Setup {#setup}

* Visit the [Analytics](https://scnx.app/glink?page=support-system/analytics) page in your dashboard.
* Use the tabs at the top to switch between combined, Modmail-only, or Ticket System-only statistics.

## Commands {#commands}

<SlashCommandExplanation />

The following commands are available if enabled in the [Staff Commands configuration](/docs/support-bot/general/bot-configuration#staff-commands):

| Command | Description |
| --- | --- |
| ``/analytics`` | Shows server-wide analytics for your support system (open tickets, average response time, average close time, rating, and more). |
| ``/analytics staff:<User>`` | Shows analytics for a specific team member (messages sent, average response time, tickets handled). |

## Available metrics {#available-metrics}

### Overview metrics

| Metric | Description |
| --- | --- |
| Open tickets | The number of currently open tickets across all systems. |
| Total tickets (30 days) | The total number of tickets created in the last 30 days. |
| Average messages per ticket | The average number of messages exchanged per ticket before it is closed. |
| Average close time | The average time from ticket creation to closing. Helps you understand how quickly issues are resolved. |
| Average initial response time | The average time until the first team member responds to a new ticket. A key metric for user satisfaction. |
| Average rating | The average star rating from user feedback submissions (if [support feedback](/docs/support-bot/modmail/support-feedback) is enabled). |
| Total ratings | The total number of feedback submissions received. |

### Charts & breakdowns

| Chart | Description |
| --- | --- |
| Most used close reasons | A pie chart showing the distribution of close reasons across all tickets. Helps you understand why tickets are being closed. |
| Most used ticket topics | A pie chart showing the distribution of ticket topics. Helps you identify which topics generate the most demand. |
| Tickets per day | A line chart showing how many tickets were opened per day over the last 30 days. Useful for spotting trends and peak times. |

### Staff leaderboard

| Metric | Description |
| --- | --- |
| Messages sent | The total number of messages sent by each team member across all tickets. |
| Average response time | The average time each team member takes to respond to tickets. |
| Tickets responded | The total number of unique tickets each team member has participated in. |
| Average rating | The average feedback rating (1-5) for tickets assigned to this team member. Only shown if [support feedback](/docs/support-bot/modmail/support-feedback) is enabled and the team member has received ratings. |
| Rating count | The number of feedback ratings linked to this team member. |

:::info Hold time and analytics
Time that a ticket spends on hold is automatically excluded from all response time and resolution time calculations. This means your analytics accurately reflect actual staff performance without being inflated by intentional hold periods.
:::