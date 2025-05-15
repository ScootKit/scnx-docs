# Ticket-System

Let users create tickets to message your staff

<ModuleOverview moduleName="tickets" />

:::info
Looking for a more professional support experience with claiming, ticket-topics, forms and more?
Check [Modmail](https://modmail.net) at SCNX - starting at
only <PlanPrice plan="UNLIMITED" type="MONTHLY"/> (<PlanPrice plan="UNLIMITED" type="YEARLY"/>).
:::

## Features {#features}

* Users can open a ticket by clicking a button below a customizable message.
* Add multiple ticket category with independent configuration.
* Automatically generate encrypted ticket transcripts.

## Setup {#setup}

1. Create a category in which new tickets should get created. The bot needs to be able to create and manage channels in
   this category.
2. Create a channel in which users will be able to open tickets using a button below a message.
3. [Configure](#configuration) the module.
4. Reload the configuration once you've configured the module to send the ticket creation message automatically.

## Usage {#usage}

* Users will be able to open new tickets by clicking on a button below the ticket creation message.
* Once a ticket has been opened, the bot will create a new channel in the configured category and mentions the
  configured roles.
* Staff members and the user who created the ticket will be able to close the ticket by clicking on the "Close Ticket"
  button below the first message sent in the ticket by the bot (will also be pinned).
* Once a ticket has been closed, the bot will generate a ticket transcript containing all message sent. This transcript
  will be sent
  in the configured log channel and to the user (if enabled).

## Configuration {#configuration}

In this file, you can configure Ticket-Category. Each ticket category will have its own ticket creation message sent in
the
channel you selected. Ticket-Category operate independently of each other. You can open
the [file in your dashboard](https://scnx.app/glink?page=bot/configuration?file=tickets|config) to get started.

It's not possible to configure multiple ticket categories into one ticket creation message. If you are not a PRO user
and the field values are on a different language,
consider [switching the language](/docs/scnx/guilds/bots#bot-language) of your bot.

| Field                                | Description                                                                                                                                                                                         |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                                 | Name of the ticket category. This will be displayed to users and staff members.                                                                                                                     |
| Ticket create category               | New ticket channels will be created in this category on your Discord when a user opens a new ticket.                                                                                                |
| Ticket create channel                | The ticket creation message will be sent into this channel. Users will be able to open a ticket in this category by clicking on a button below the message sent into this channel.                  |
| Ticket roles                         | These roles will be pinged when a new ticket gets opened in this category and these roles will be given access to ticket channels.                                                                  |
| Log channel                          | The transcript of closed channels will be sent into this channel.                                                                                                                                   |
| Ticket create message                | This message will be sent in the "Ticket create channel" and users will be able to open a ticket in this category by clicking on a button below this message.                                       |
| Send user DM when ticket gets closed | If enabled, users will be sent a DM when their ticket gets closed.                                                                                                                                  |
| User DM                              | <i>Only visible if "Send user DM when ticket gets closed" is enabled.</i><br/>This message will be sent to the user when their ticket gets closed. You can include a link to the ticket transcript. |
| Ticket-Created Message               | This message will be sent into new tickets when they get created. A button to close the ticket will be added below this message.                                                                    |
| Ticket create button                 | This will be the content of the button below the ticket creation message and will open a new ticket when clicked.                                                                                   |
| Ticket close button                  | This will be the content of the button below the ticket created message and will close the ticket when clicked.                                                                                     |

## Troubleshooting {#troubleshooting}

If you are experiencing issues with this module please make sure that

* the bot has enough permissions to create, delete and manage channels.
* your [category configuration](#configuration) is valid and no empty categories are added.
* your server has less than 500 channels (limit by Discord).
* The ticket log channel is configured correctly, and the bot has permissions to send messages into it.
* The content of the ticket create and close buttons are correct.
* The ticket create channel is empty.

## Stored data {#data-usage}

The following data will be stored about every ticket created by clicking on a button:

* An unique integer identifying the database entry.
* Whether the ticket has been closed.
* The ID of the user who created the ticket.
* The ID of the ticket channel.
* If the ticket was closed: The URL to the ticket transcript.
* The number of messages sent in the ticket.
* Any additional users added to the ticket (currently unsupported).
* The category of the ticket.
* Metadata about the entry (date when created and last updated).

The following data will be stored about every ticket creation message (these are the messages that allow users to open
tickets):

* An unique integer identifying the database entry.
* The ID of the message.
* The ID of the channel the message was sent in.
* The category of the ticket.
* Metadata about the entry (date when created and last updated)

Ticket Transcripts will be encrypted and stored at [ScootKit Paste](https://paste.scootkit.net)
running [PrivateBin](https://github.com/PrivateBin/PrivateBin). This means that ScootKit won't be able to decrypt ticket
transcripts. Ticket transcripts will be decrypted by your browser when accessing the URL. This ensures the privacy of
your users. Ticket transcripts will be deleted after one year.

There is no way to remove a ticket from the database.  
To remove all data stored about tickets, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).