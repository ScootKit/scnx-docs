---
sidebar_position: 2
title: Starter Guide
description: Complete starter guide for your Discord Modmail system — learn how to create, claim, respond to, and close tickets with your team.
---

# Starter Guide (Modmail 101)

:::tip Feel free to share me!
Feel free to forward this guide to your team members so they can find their way around Modmail faster and discover the full feature set!
:::

Welcome to the Starter Guide for the Modmail system of the SCNX Support-Bot!

We know Modmail can feel overwhelming at first, and you might not fully understand every feature yet — that's completely normal.
That's exactly why this page is written from a team member's perspective, so you'll quickly find your way around Modmail and use all features without problems.
In general, every server can enable different features for their Modmail system, so some features may not be available in your server's setup.

But now we'll leave the reading to you and wish you the best of luck!

## Create tickets {#create-tickets}

Users can create tickets either by sending a direct message to the bot or via a ticket opening message (button/dropdown) on your server.
If ticket topics are set up, users must select a topic before opening a ticket.

As soon as a ticket is created, your bot creates a new channel in the configured category.
Messages sent by the user via DM will automatically appear in the ticket channel, and messages sent by team members in the ticket channel will be relayed to the user via DM.



## Claim tickets {#claim-tickets}

:::note Note:
If your server does not use ticket claiming, you can skip directly to the next step.
:::

To keep tickets better organized across team members, you first need to assign a ticket to yourself (also called "claiming").

To claim a ticket, use the ``/modmail claim`` command or the claim button (if enabled). After the ticket is assigned to you, other team members will be notified.
If you want to remove your assignment, use ``/modmail remove-claim``. To assign a specific team member, use ``/modmail assign``.



## Send messages {#send-messages}

As soon as you have access to the ticket channel, you can send messages to the user by simply typing in the channel. Your message will be relayed to the user via DM.

To send internal messages that are **not** relayed to the user, prefix your message with `!` (for example, `!This is an internal note`).



## Anonymous messages {#anonymous-messages}

Sometimes, staff members prefer not to share their name with the user. To send an anonymous message (credited to your highest role instead of your name), prefix your message with `!ar ` (for example, `!ar Your request has been processed.`).

While the identity of staff members won't be displayed to users when using anonymous messages, their identity will still be visible in the log and the ticket channel.

[Snippets](#snippets) can also be sent anonymously by using `!!!<SnippetKey>` or the ``/as`` command.



<a id="use-commands"></a>

## Use commands {#use-commands}

Modmail includes a set of commands that allow different actions depending on your configuration.
If a command is not shown in the ticket channel, you either don't have permission for that command or the feature hasn't been configured.

| Command | Description |
| --- | --- |
| ``/blocklist add`` | Adds a user to the blocklist. |
| ``/blocklist list`` | Shows all currently blocked users. |
| ``/blocklist remove`` | Removes a user from the blocklist. |
| ``/blocklist status`` | Shows the block status of the selected user. |
| ``/modmail new-thread`` | Opens a new ticket with the selected user. |
| ``/modmail claim`` | Claims the current ticket. |
| ``/modmail remove-claim`` | Removes your assignment from the current ticket. |
| ``/modmail assign`` | Assigns a specific team member to the current ticket. |
| ``/modmail close`` | Closes the current ticket. |
| ``/modmail transfer`` | Moves a ticket to another topic. |
| ``/modmail rename`` | Renames the current ticket channel. |
| ``/modmail form`` | Sends a form into the current ticket. |
| ``/modmail s`` | Sends a snippet into the current ticket. |
| ``/modmail as`` | Sends a snippet anonymously into the current ticket. |
| ``/modmail edit`` | Edits a previously sent message by team message ID. |
| ``/modmail delete`` | Deletes a previously sent message by team message ID. |
| ``/ticket hold`` | Enables/disables pausing for the ticket. |
| ``/ticket close-schedule`` | Schedules closing a ticket. |
| ``/ticket users add`` | Adds a new user to the ticket. |
| ``/ticket users remove`` | Removes a previously added user from the ticket. |

### Blocklist {#blocklist}

Using the blocklist, you can have users blocked from the entire Support-Bot. This block applies to both the Modmail and Ticket System (if used).

If you want to block a user, use the command [``/blocklist add``](#use-commands) and select the relevant user — optionally, you can provide the reason and the duration of the block.
If you want to remove a user from the blocklist, use the command [``/blocklist remove``](#use-commands).



## Snippets {#snippets}

Sometimes, similar or repetitive messages need to be sent to users. To avoid typing out the same message over and over,
snippets can be used. Snippets are text modules that staff members can create and use in tickets. Each snippet has its
own unique Snippet-Key that can be set when creating a snippet. Optionally, you can also attach
a [form](/docs/support-bot/general/forms) to a snippet to avoid sending a snippet and a form separately.
Snippets can also include buttons that allow users to close the ticket directly.

<SlashCommandExplanation />

To use snippets, staff members can:

* use ``/modmail s snippet:<SnippetKey>`` to send a snippet directly into a ticket. An auto-complete menu will help you select the correct snippet.
* write `!!<SnippetKey>` (replace `<SnippetKey>` with the key of the snippet) to directly send the content of a snippet into a ticket.
* include `{{<SnippetKey>}}` (replace `<SnippetKey>` with the key of the snippet) into any message. The placeholder will be replaced by the snippet content while leaving the rest of the message unchanged.

To manage snippets, the following commands are available to staff members:

* `/modmail snippets create key:<SnippetKey> [close-buttons:<Boolean>] [form:<Form>]` — Create a new snippet. Enter a new, unused snippet key as the `key` parameter. Optionally enable `close-buttons` to add a close button below the snippet message or set `form` to attach a form. A dialog will appear to enter the snippet content.
* `/modmail snippets edit key:<SnippetKey> [close-buttons:<Boolean>] [form:<Form>]` — Edit an existing snippet. Select an existing snippet key and update its settings or content.
* `/modmail snippets delete key:<SnippetKey>` — Delete a snippet permanently. This cannot be undone.
* `/modmail snippets preview key:<SnippetKey>` — Preview a snippet's content and details.
* `/modmail snippets list [page:<Number>]` — List all available snippets with their usage counts.



### Send forms {#send-forms}

So you don't always have to collect information manually, you can simply have users fill out a configured form, which lets you receive necessary data quickly and securely.

To send a form into a ticket channel, use the command [``/modmail form``](#use-commands) and select the relevant form from the list.
If no form is in the list or a specific form isn't shown, it has either not been configured yet or there is an error in the configuration.



### Pause tickets {#hold-tickets}

If a ticket needs to be forwarded or is waiting for a response from another party, you can pause the ticket using the command [``/ticket hold``](#use-commands)
so automatic ticket closing is disabled and the channel is locked, which means no messages can be sent until pausing is disabled.
To disable pausing, use the command [``/ticket hold``](#use-commands) again.



### Rename tickets {#rename-tickets}

If you want to rename a ticket, run the command [``/modmail rename``](#use-commands) and set the new ticket name in the dialog.
When moving to another ticket topic, the name is changed automatically if configured.

:::caution Important:
Once a ticket has been renamed, the bot can no longer automatically change the ticket name when moving it to another ticket topic!
:::



### Change ticket topic {#change-ticket-topic}

If a user selected the wrong topic for their ticket, you can move it to the correct topic using the command [``/modmail transfer``](#use-commands).
The name is updated automatically and the ticket is released for claiming again.



### Add and remove users {#add-and-remove-users}

To handle certain requests that involve multiple people more easily, you can add the relevant users to the ticket using the command [``/ticket users add``](#use-commands),
which gives them access to the ticket channel (in addition to the team member and the ticket creator).
If you want to remove users, use the command [``/ticket users remove``](#use-commands).



### Edit and delete messages {#edit-delete-messages}

To edit a previously sent message, use the command [``/modmail edit``](#use-commands) and provide the team message ID.
To delete a message, use [``/modmail delete``](#use-commands). If configured, staff members can also edit or delete each other's messages.



## Close tickets {#close-tickets}

After a user's request has been resolved, you can close the ticket either with the command [``/modmail close``](#use-commands) or the button under the ticket message.
You can also schedule closing with [``/ticket close-schedule``](#use-commands) after a certain period of time.



## Support feedback {#support-feedback}

If support feedback is enabled in your server's Modmail system, users automatically receive a DM after the ticket is closed where they can leave feedback for that ticket.
This feedback is optional and, if submitted, is sent to the configured channel where you can view the feedback.



## Ticket logs {#ticket-logs}

All messages of a ticket are logged and shown in a ticket log after the ticket is closed.
If your server has AI summaries enabled, you'll also see a short summary of the ticket content in the log channel message.
Using the button under the message, you'll either be taken to a modmail.net website (if enabled) where the logs are shown in a formatted web layout, or to a text file
that you can download.



## Done {#done}

You've reached the end of the guide and hopefully now have a good overview of how the Modmail system of the SCNX Support-Bot works and how to use it.

If you still have questions or something is unclear, feel free to ask the person responsible for your server or create a ticket on our [Discord server](https://scootk.it/dc-de) — we'll be happy to help!