---
sidebar_position: 2
title: Starter Guide
description: Step-by-step ticket system guide for you and your team.
---

# Starter Guide (Ticket System 101)

:::tip Feel free to share this!
Send this guide to your team members so they can get familiar with the ticket system faster and discover the full feature set.
:::

Welcome to the Starter Guide for the SCNX Support-Bot ticket system!

We know the ticket system can feel overwhelming at first and you might not fully understand every feature yet — that’s completely normal.
That’s exactly why this page is written from a team member’s perspective, so you’ll quickly find your way around and use all features without problems.
In general, every server can enable different features for their ticket system, so some features described here may not be available on your server.
At the end of each section, we’ve included screenshots to show the features in more detail.

Now it’s over to you — enjoy reading and good luck!

## Create tickets {#create-tickets}

Members can create tickets either via ticket opening messages or with the command [`/ticket open`](#use-commands).
If ticket topics are set up, they must be selected both in the ticket opening message and when running the command.

As soon as a ticket is opened, your bot creates a new channel in the configured category, which may vary depending on the ticket topic.

<h4>Images coming soon ✨</h4>

## Claim tickets {#claim-tickets}

:::note Note:
If your server does not use ticket claiming, you can skip directly to the next step.
:::

To keep tickets organized across team members, you first need to assign a ticket to yourself (also called “claiming”).

To do this, open the configured channel in Discord and click the “Claim ticket” button under the message. After the ticket is assigned to you, the message is deleted automatically.
Alternatively, you can open the newly created ticket channel directly and click the button under the assignment message (the message in the notification channel will also be deleted).
If you don’t see any new ticket channels, this option has been disabled in your ticket system.

<h4>Images coming soon ✨</h4>

## Send messages {#send-messages}

Once you have access to the ticket channel, you can send messages, emojis, stickers, GIFs, and more — depending on your permissions.

Since tickets usually contain more than just regular messages, we’ll show you additional features below that you can use in ticket channels.

<h4>Images coming soon ✨</h4>

## Use commands {#use-commands}

The ticket system includes a set of commands that allow different actions depending on your configuration.
If a command is not available in the ticket channel, you either don’t have permission for it or the feature hasn’t been configured.

| Command | Description |
| --- | --- |
| `/blocklist add` | Adds a user to the blocklist. |
| `/blocklist list` | Shows all currently blocked users. |
| `/blocklist remove` | Removes a user from the blocklist. |
| `/blocklist status` | Shows the block status of the selected user. |
| `/ticket admin-open` | Opens a new ticket with the selected user. |
| `/ticket close` | Closes the ticket. You can also use the button under the ticket message. |
| `/ticket form` | Sends a form into the ticket. |
| `/ticket hold` | Enables/disables pausing for the ticket. |
| `/ticket rename` | Changes the ticket name. |
| `/ticket schedule-close` | Schedules the ticket to be closed. |
| `/ticket transfer` | Moves a ticket to a different topic. You can also use the button under the ticket message. |
| `/ticket users add` | Adds a new user to the ticket. |
| `/ticket users remove` | Removes a previously added user from the ticket. |

### Blocklist {#blocklist}

Using the blocklist, you can block users from the entire Support-Bot. This block applies to both the ticket and modmail system (if used).

To block a user, use [`/blocklist add`](#use-commands) and select the user. Optionally, you can provide a reason and the duration of the block.
If you want to remove a user from the blocklist, use [`/blocklist remove`](#use-commands).

<h4>Images coming soon ✨</h4>

### Send forms {#send-forms}

So you don’t have to collect information manually every time, you can have users fill out a configured form, allowing you to get the required data quickly and securely.

To send a form into a ticket channel, use [`/ticket form`](#use-commands) and select the relevant form from the list.
If no forms appear in the list or a specific form is missing, it’s either not configured yet or there is an error in the configuration.
In that case, ask the person responsible for your server so they can contact our support if needed.

<h4>Images coming soon ✨</h4>

### Pause tickets {#hold-tickets}

If a ticket needs to be forwarded or is waiting for a response from another party, you can pause it with [`/ticket hold`](#use-commands).
This disables automatic ticket closing and locks the channel, so no messages can be sent until pausing is disabled.
To disable pausing, use [`/ticket hold`](#use-commands) again.

<h4>Images coming soon ✨</h4>

### Rename tickets {#rename-tickets}

If you want to rename a ticket, run [`/ticket rename`](#use-commands) and set the new ticket name in the dialog.
When transferring to another ticket topic, the name may be changed automatically (if configured).

:::caution Important:
Once a ticket has been renamed, the bot can no longer automatically change the ticket name when transferring it to another ticket topic.
:::

<h4>Images coming soon ✨</h4>

### Change ticket topic {#change-ticket-topic}

If a user selected the wrong topic for their ticket, you can move it to the correct topic using [`/ticket transfer`](#use-commands).
The name will be updated automatically and the ticket will be released for claiming again.

<h4>Images coming soon ✨</h4>

### Add and remove users {#add-and-remove-users}

To handle certain requests more easily when multiple people are involved, you can add the relevant users to the ticket using [`/ticket users add`](#use-commands).
This gives them access to the ticket channel (in addition to the team member and the ticket creator).
To remove users, use [`/ticket users remove`](#use-commands).

<h4>Images coming soon ✨</h4>

## Close tickets {#close-tickets}

After a user’s request has been resolved, you can close the ticket immediately using [`/ticket close`](#use-commands) or the button under the ticket message.
You can also schedule the ticket to be closed after a certain time using [`/ticket schedule-close`](#use-commands) (automatic closing will be disabled in this case).

<h4>Images coming soon ✨</h4>

## Support feedback {#support-feedback}

If support feedback is enabled in your server’s ticket system, users will automatically receive a DM after the ticket is closed, where they can leave feedback for the ticket.
This feedback is optional. If submitted, it will be sent to the configured channel where you can view it.

<h4>Images coming soon ✨</h4>

## Ticket logs {#ticket-logs}

All messages in a ticket are logged and shown in a ticket log after the ticket is closed.
If your server has AI summaries enabled, you’ll also see a short summary of the ticket content in the channel message.
Using the button under the message, you can either open a modmail.net website (if enabled) where the logs are displayed in a nice web layout, or download a text file.

<h4>Images coming soon ✨</h4>

## Done 🎉 {#done}

You made it 🎉

You’ve reached the end of the guide and (hopefully) now have a solid overview of how the SCNX Support-Bot ticket system works and how to use it.

If you still have questions or something is unclear, ask the person responsible for your server or open a ticket on our [Discord server](https://scootk.it/dc-de) — we’ll be happy to help!