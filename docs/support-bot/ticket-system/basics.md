---
sidebar_position: 2
title: Starter Guide
description: Step-by-step guide for the ticket system, made for you and your team for the best possible start!
---

# Starter Guide (Ticket System 101)

:::tip Feel free to share me!
Feel free to forward this guide to your team members so they can find their way around the ticket system faster and discover the full feature set!
:::

Welcome to the Starter Guide for the ticket system of the SCNX Support-Bot!

We know the ticket system can feel overwhelming at first, and you might not fully understand every feature yet — that’s completely normal.
That’s exactly why this page is written from a team member’s perspective, so you’ll quickly find your way around the ticket system and use all features without problems.
In general, every server can enable different features for their ticket system, so some features may not be available in your server’s ticket system.
At the end of each section, we’ve included screenshots to show the features in more detail.

But now we’ll leave the reading to you and wish you the best of luck!

## Create tickets {#create-tickets}

Members can create tickets either via ticket opening messages or with the command [``/ticket open``](#use-commands).
If ticket topics are set up, they must be selected both in the ticket opening message and when running the command.

As soon as a ticket is created, your bot creates a new channel in the configured category, which may vary from ticket topic to ticket topic.

<h4>Images coming soon ✨</h4>

## Claim tickets {#claim-tickets}

:::note Note:
If your server does not use ticket claiming, you can skip directly to the next step.
:::

To keep tickets better organized across team members, you first need to assign a ticket to yourself (also called "claiming").

To do this, open the configured channel in Discord and click the "Claim ticket" button under the message. After the ticket is assigned to you, the message is deleted automatically.
Alternatively, you can also open the channel of the new ticket directly and click the button under the assignment message (the message in the notification channel will also be deleted).
If you don’t see any new ticket channels, this option has been disabled in your ticket system.

<h4>Images coming soon ✨</h4>

## Send messages {#send-messages}

As soon as you have access to the ticket channel, you can send messages, emojis, stickers, GIFs, and more depending on your permissions.

Since tickets usually aren’t just regular messages, we’ll show you more features below that you can use in ticket channels.

<h4>Images coming soon ✨</h4>

<a id="use-commands"></a>

## Use commands {#use-commands}

The ticket system includes a set of commands that allow different actions depending on your configuration.
If a command is not shown in the ticket channel, you either don’t have permission for that command or the feature hasn’t been configured.

| Command | Description |
| --- | --- |
| ``/blocklist add`` | Adds a user to the blocklist. |
| ``/blocklist list`` | Shows all currently blocked users. |
| ``/blocklist remove`` | Removes a user from the blocklist. |
| ``/blocklist status`` | Shows the block status of the selected user. |
| ``/ticket admin-open`` | Opens a new ticket with the selected user. |
| ``/ticket close`` | Closes the ticket. Alternatively, you can also use the button under the ticket message. |
| ``/ticket form`` | Sends a form into the ticket. |
| ``/ticket hold`` | Enables/disables pausing for the ticket. |
| ``/ticket rename`` | Edits the ticket name. |
| ``/ticket schedule-close`` | Schedules closing a ticket. |
| ``/ticket transfer`` | Moves a ticket to another topic. Alternatively, you can also use the button under the ticket message. |
| ``/ticket users add`` | Adds a new user to the ticket. |
| ``/ticket users remove`` | Removes a previously added user from the ticket. |

### Blocklist {#blocklist}

Using the blocklist, you can have users blocked from the entire Support-Bot. This block applies to both the ticket and modmail system (if used).

If you want to block a user, use the command [``/blocklist add``](#use-commands) and select the relevant user — optionally, you can provide the reason and the duration of the block.
If you want to remove a user from the blocklist, use the command [``/blocklist remove``](#use-commands).

<h4>Images coming soon ✨</h4>

### Send forms {#send-forms}

So you don’t always have to collect information manually, you can simply have users fill out a configured form, which lets you receive necessary data quickly and securely.

To send a form into a ticket channel, use the command [``/ticket form``](#use-commands) and select the relevant form from the list.
If no form is in the list or a specific form isn’t shown, it has either not been configured yet or there is an error in the configuration.
In that case, ask the person responsible for your server so they can contact our support if needed.

<h4>Images coming soon ✨</h4>

### Pause tickets {#hold-tickets}

If a ticket needs to be forwarded or is waiting for a response from another party, you can pause the ticket using the command [``/ticket hold``](#use-commands)
so automatic ticket closing is disabled and the channel is locked, which means no messages can be sent until pausing is disabled.
To disable pausing, use the command [``/ticket hold``](#use-commands) again.

<h4>Images coming soon ✨</h4>

### Rename tickets {#rename-tickets}

If you want to rename a ticket, run the command [``/ticket rename``](#use-commands) and set the new ticket name in the dialog.
When moving to another ticket topic, the name is changed automatically if configured.

:::caution Important:
Once a ticket has been renamed, the bot can no longer automatically change the ticket name when moving it to another ticket topic!
:::

<h4>Images coming soon ✨</h4>

### Change ticket topic {#change-ticket-topic}

If a user selected the wrong topic for their ticket, you can move it to the correct topic using the command [``/ticket transfer``](#use-commands).
The name is updated automatically and the ticket is released for claiming again.

<h4>Images coming soon ✨</h4>

### Add and remove users {#add-and-remove-users}

To handle certain requests that involve multiple people more easily, you can add the relevant users to the ticket using the command [``/ticket users add``](#use-commands),
which gives them access to the ticket channel (in addition to the team member and the ticket creator).
If you want to remove users, use the command [``/ticket users remove``](#use-commands).

<h4>Images coming soon ✨</h4>

## Close tickets {#close-tickets}

After a user’s request has been resolved, you can close the ticket either with the command [``/ticket close``](#use-commands) or the button under the ticket message right away, or
schedule closing with [``/ticket schedule-close``](#use-commands) after a certain period of time (automatic closing is disabled in that case).

<h4>Images coming soon ✨</h4>

## Support feedback {#support-feedback}

If support feedback is enabled in your server’s ticket system, users automatically receive a DM after the ticket is closed where they can leave feedback for that ticket.
This feedback is optional and, if submitted, is sent to the configured channel where you can view the feedback.

<h4>Images coming soon ✨</h4>

## Ticket logs {#ticket-logs}

All messages of a ticket are logged and shown in a ticket log after the ticket is closed.
If your server has AI summaries enabled, you’ll also see a short summary of the ticket content in the message in the channel.
Using the button under the message, you’ll either be taken to a modmail.net website (if enabled) (where the logs are shown in a nice web layout) or to a text file
that you can download.

<h4>Images coming soon ✨</h4>

## Done 🎉 {#done}

Yay, you made it 🎉

You’ve reached the end of the guide and hopefully now have a good overview of how the ticket system of the SCNX Support-Bot works and how to use it.

If you still have questions or something is unclear, feel free to ask the person responsible for your server or create a ticket on our [Discord server](https://scootk.it/dc-de),
we’ll be happy to help!
