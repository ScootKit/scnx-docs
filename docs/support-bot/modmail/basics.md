---
sidebar_position: 2
title: Staff & User Guide
description: Please adjust this description. Should be less than 100 characters.
---

# Modmail starter guide (Modmail 101)

:::warning
Page has not been updated for Support Bot V3 and might not be complete.
:::

In this document, we've collected everything that is helpful to understand how to use modmail on any server.

:::info
You can also send this document to your support team so they understand how the Modmail-Bot works.
:::

## Creating and processing tickets {#basics}

Users can create tickets by either sending a direct message to the Modmail-Bot or using a button below
an [information message](/docs/modmail/configuration/modmail-info). When a user opens a ticket, they
can [select a Ticket Topic](/docs/modmail/advanced-features/ticket-topics) if enabled. Once done, a ticket channel will be created
in which staff members can send messages. Messages sent into this channel will be transmitted to the user via a direct
message, where the user can reply. Any messages sent via DM to the bot will automatically show up in the ticket channel.

Staff members can coordinate with each other or make notes that are not sent to users by prefixing their message with
`!`. By default, anyone who has access to the ticket channel will be treated as a staff member, so make sure to
configure the correct permissions for the ticket category. Sometimes, you might not want the name of the staff member to
be shown to your user. For this, you can send [anonymous messages](#anonymous-messages).

In big servers, tickets might need to be assigned to specific staff members. For this,
the [Claiming](/docs/modmail/advanced-features/ticket-claiming) feature can be used.

Once a ticket has been resolved, the staff members (and the user if [configured](/docs/modmail/configuration/ticket-close)) can
close the ticket using the `/close` slash-command.

When a ticket gets closed, a transcript called "Log" will be generated. The transcript will be sent into
a [Log channel](/docs/modmail/configuration/bot-configuration) and can also be sent to the user,
if [configured](/docs/modmail/configuration/ticket-close).

Sometimes similar information needs to be collected from users to process their requests. For
this [Forms](/docs/modmail/advanced-features/forms) can be created that allow users to enter required information using a native
form. To send a form to a user, use the `/form` command.

When closing a ticket, the user will receive a notification that [can be configured](/docs/modmail/configuration/bot-configuration).
You can also collect feedback from users using the [Feedback](/docs/modmail/advanced-features/support-feedback) feature.

Staff members can monitor support activity and optimize support processes using
the [Analytics](/docs/modmail/advanced-features/analytics) feature.

## Snippets {#snippets}

Sometimes, similar or repetitive messages need to be sent to users. To avoid typing out the same message over and over,
snippets can be used. Snippets are text-modules that staff members can create and use in tickets. Each snippet has their
own unique Snippet-Key that can be set when creating a snippet. Optionally, you can also attach
a [form](/docs/modmail/advanced-features/forms) to a snippet to avoid typing multiple commands to send a snippet and a form at the
same time. Snippets can also include buttons that allow users to close the ticket directly.

<SlashCommandExplanation />

To use snippets staff members can

* use the `/s snippet:<SnippetKey>` to send a snippet directly into a ticket. This is the easiest way as an
  auto-complete menu will help staff members to select the correct snippet.
* write `!!<SnippetKey>` (replace `<SnippetKey>` with the key of the snippet) to directly send the content of a snippet
  into a ticket.
* include `{{<SnippetKey}}` (replace `<SnippetKey>` with the key of the snippet) into any message that you send to a
  user. The `{{<SnippetKey}}` will be replaced by the snippet content while leaving the rest of the message unchanged.

To manage snippets, the following commands are available to staff members:

* Create a new snippet with `/snippets create key:<SnippetKey> [close-buttons:<Boolean>] [form:<Form>]`. Enter a new,
  unused snippet key as the `key` parameter. If you want to give users the option to directly close tickets using
  buttons that will be added below the snippet message, enable the `close-buttons` parameter. If you also want to send
  a [form](/docs/modmail/advanced-features/forms) with the snippet, set the `form` parameter. Once you submit the command, a dialog
  will appear in which you can enter your snippet content.
* To edit an existing snippet, use `/snippets edit key:<SnippetKey> [close-buttons:<Boolean>] [form:<Form>]`. Select an
  existing snippet as the `key` parameter. If you want to give users the option to directly close tickets using
  buttons that will be added below the snippet message, enable the `close-buttons` parameter. If you also want to send
  a [form](/docs/modmail/advanced-features/forms) with the snippet, set the `form` parameter. Once you submit the command, a dialog
  will appear in which you can edit your snippet key and content.
* To delete a snippet, use the `/snippet delete key:<SnippetKey>` slash command. Select an existing snippet as the `key`
  parameter and submit the command to delete the snippet. Once submitted, the snippet will be deleted permanently. This
  cannot be undone.
* To preview the content of a snippet, use the `/snippet preview key:<SnippetKey>` slash command. Select an existing
  snippet as the `key` parameter. Once you submit the command, the content of the snippet and some additional details
  will be displayed.
* To list all available snippets, use the `/snippets list [page:<Number>]` slash command. This command will display all
  snippets on your server and will also include the usage count of each snippet. If you have a lot of snippets, please
  set the `page` parameter to switch between pages.

## Anonymous messages {#anonymous-messages}

Sometimes, staff members are not comfortable sharing their name with staff members. To fit your need, you can always
adjust
your [message configuration](/docs/modmail/configuration/advanced-messaging), to hide the identity of staff members. Still, you
might want a setup were staff members appear with their name in most cases, but in certain tickets you want them to send
messages that are credited to their highest role (e.g. send a message that will be displayed to users as "Moderator:
Your message here").

While the identity of staff members won't be displayed to users when using anonymous messages, their identity will still
be visible in the log and the ticket channel.

* Anonymous messages can be sent by sending `!ar <Message>`. Any content behind the `!ar ` prefix will be treated as the
  message content.
* [Snippets](#snippets) can be sent as anonymous by either writing `!!!<SnippetKey>` or using the `/as` slash command.

## Blocklisting users {#blacklist}

Sometimes users abuse support services. To avoid these users spamming your Modmail-system, consider using the blocklist
feature. Once the feature [is enabled](/docs/modmail/configuration/bot-configuration), staff members can use the following commands
to manage the blocklist:

<SlashCommandExplanation />

* `/blacklist list`: List all users that are on the blocklist.
* `/blacklist add user:<User> reason:<Text> [duration:<Duration>]`: Add a user to the blocklist. By default, blocklist
  entries are permanent unless a duration is being configured in the duration parameter (e.g. `2d4h` will result in a
  block of 2 days and 4 hours).
* `/blacklist remove user:<User>`: Removes a user from the blocklist.
* `/blacklist status user:<User>`: Check if a user has been blocklisted. The reason and duration of the block will also
  be displayed.