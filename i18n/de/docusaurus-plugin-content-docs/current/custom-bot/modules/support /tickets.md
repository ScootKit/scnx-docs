# Ticket-System

Erlaube deinen Mitgliedern, dass Team zu kontaktieren!

<ModuleOverview moduleName="tickets" />

:::Info
Du suchst nach einem professionellen Support-system mit Ticket-Claiming, Ticket-Themen, Formularen und mehr?
siehe dir unseren [SCNX Modmail Bot](https://modmail.net) an - ab <PlanPrice plan="ACTIVE_GUILD" type="MONTHLY"/> (<PlanPrice plan="ACTIVE_GUILD" type="YEARLY"/>).
:::

## Features {#features}

* Nutzer können ein Ticket öffnen, indem sie einen Knopf unter einer einstellbaren Nachricht klicken. 
* Erstelle mehrere Ticket-Themen mit unabhäniger Konfiguration.
* Lasse automatisch Ticket-Transcript erstellen.

## Konfiguration {#setup}

1. Erstelle eine Kategorie in der die Tickets erstellt werden sollen. Der Bot  muss in dieser Kategorie Kanäle erstllen und verwalten können.
2. Erstelle einen Kanal, wo die Nutzer ein Ticket erstellen können, indem sie einen Knopf unter einer Nachricht klicken.
3. [Stelle das Modul ein](#configuration).
4. Lade wenn du das Modul fertig eingrstellt hast die Konfiguration neu, damit die Ticket-Erstellungs_Nachricht automatisch gesendet wird.

## Nutzung {#usage}

* Nutzer können ein neues Ticket öffnen indem sie auf den Knopf unter der Ticket-Erstellungs-Nachricht klicken. 
* Wenn ein Ticket erstellt wurde, wird der Bot einen neuen Kanal in der eingestellten Kategorie erstellen, mit den
  eingestellten Berechtigungen und Erwähnungen.
* Team Mitglieder und der Nutzer, der das Ticket erstellt hat kann das Ticket mit dem Button "Ticket schließen" unter der 1. Nachricht des Kanals schließen. (diese ist immer angepinnt)
* Nachdem das Ticket geschlossen wurde wird der Bot ein Transcript mit allen gesendeten Nachrichten senden. Dies wird in den eingestellten Log-Kanal gesendet und an den Nutzer (falls aktiviert).

## Konfiguration {#configuration}

In dieser Datei kannst du die Ticket-Kategorie einstellen. Jedes Ticket wird ihre eigene Ticket-Erstellungs-Nachricht haben welche in den Kanal gesendet wird, den du eingestellt hast. Die Ticket-Kategorie wird unabhängig von den anderen Kategorien agieren. Du kannst die [Datei in deinem dashboard](https://scnx.app/glink?page=bot/configuration?file=tickets|config) öffnen um zu starten.

It's not possible to configure multiple ticket categories into one ticket creation message. If you are not a PRO user
and the field values are on a different language,
consider [switching the language](./../../../scnx/guilds/bots#bot-language) of your bot.

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
To remove all data stored about tickets, [purge the module database](./../../additional-features#reset-module-database).
