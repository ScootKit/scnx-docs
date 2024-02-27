# Umfragen

Einfaches Modul zum Erstellen neuer Umfragen auf Ihrem Server!

<ModuleOverview moduleName="polls" />

## Funktionen {#funktionen}

* Erstelle anonyme und öffentliche Umfragen mit bis zu neun Optionen pro Umfrage.
* Nutzer können via ein Dropdown-Menü ihre Option auswählen.
* Automatisch endende Umfragen, nach Ablauf einer festgelegten Zeit.
* Leicht verständliche Ergebnisanzeige, welche live geupdatet wird.

Hier ist ein Beispiel, wenn eine Umfrage beendet, ist:

![](@site/docs/assets/custom-bot/modules/polls/example.png)

## Einrichtung {#einrichtung}

* Um mit dem Modul Umfragen zu starten, stelle sicher, dass dein Bot in jedem Channel, in dem du Umfragen verwenden willst,
  folgende Rechte hat: Nachrichten lesen, Nachrichten senden, Links einbetten..
* Stellen Sie sicher, dass Sie [die Rechte](./../../slash-commands) für [`/poll`](#befehle) korrekt eingestellt haben.

## Verwendung {#verwendung}

Administratoren können Umfragen mit folgenden Commands managen:

* [`/poll create`](#befehle) zum Erstellen neuer Umfragen.
* [`/poll end`](#befehle) to end a poll zum Beenden einer Umfrage (Umfragen enden automatisch, wenn sie `/poll create` den Dauerparameter gesetzt haben).

Benutzer können:

* Über Umfragen abstimmen, unter Verwendung des Auswahl Menüs unter der Umfrage.
* Ihre Antwort einsehen, für die sie gestimmt haben, über den Knopf „Für was habe ich abgestimmt“ unter der Abstimmung.
* hre Stimme entfernen, wenn sie zuerst „Für was habe ich gestimmt“ ausgewählt haben und danach auf „Meine Stimme entfernen“ unter der Rückmeldung klicken.
* Liveergebnisse im Umfragen Embed sehen.
* Sich anschauen, wer für welche Option gestimmt hat, indem Sie auf den Button „Aktuelle
  Stimmen anzeigen“ unter dem Abstimmungs-Embed klicken (falls die Umfrage auf Öffentlich gestellt ist).

## Befehle {#befehle}

<SlashCommandExplanation />

| Command                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/polls create description:<Text> channel:<TextChannel> option1:<Text> option2:<Text> [option{n}:<Text>] [duration:<TimeDuration>] [public:<Boolean>]` | Create a new poll in the desired channel. Enter the the poll question as the `description` value and add possible options with the `option{n}` element. Optionally, make a poll public (meaning that anyone can view what users have voted for) using the `public` option - if enabled, a "View current voters" button will be added below the poll. To end a poll automatically, specify a `duration` in a [supported time duration value](./../../additional-features#durations). |
| `/polls end msg-id:<PollMessageID>`                                                                                                                    | Ends an already existing poll that hasn't ended yet instantly. The `msg-id` option will support auto complete, meaning that you can easily search for the poll description of the poll you want to end.                                                                                                                                                                                                                                                                             |

## Configuration {#configuration}

### Configuration {#configuration-config}

In this file, you can customize the emojis next to the voting options. Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?query=poll&file=polls|configs/config).

| Field  | Description                                                                                                                                                                                                                                            |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Emojis | In this fields, you can customize the emojis that will be displayed next to each voting option in the dropdown menu and in the embed. Make sure you enter Unicode values for built-in-emojis or valid Emoji-IDs (not just the name) for custom emojis. |

### Messages {#configuration-strings}

In this file you can customize how the poll embed will appear in Discord. Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?query=poll&file=polls|configs/strings).

| Field | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Embed | This configuration option allows you to customize how the poll embed will appear in Discord. The following values can be customized: <ul><li><code>title</code>: The title of the embed.</li><li><code>color</code>: The color of the embed, must be a <a href="../../additional-features#embed-colors">supported color value</a>.</li><li><code>options</code>: The header of the options field in the embed.</li><li><code>liveView</code>: The header of the (live) result display in the embed.</li><li><code>expiresOn</code>: The header of the expiration time display in the embed.</li><li><code>endedPollTitle</code>: The header of embed if the poll has ended.</li><li><code>endedPollColor</code>: The color of the embed if the poll has ended, must be a <a href="../../additional-features#embed-colors">supported color value</a>.</li><li><code>visibility</code>: The header of visibility section of the poll embed.</li></ul> |

## Troubleshooting {#troubleshooting}

If you are experiencing issues with the poll module please make sure that

* you haven't started a poll in an announcement channel (as messages can't be updated as frequently in such channels).
* your [message configuration](#configuration-strings) doesn't include any empty fields and that
  are [color values are valid](../../additional-features#embed-colors).
* your [configuration](#configuration-config) only includes valid emoji values (unicode for built-in emojis and full
  emoji IDs for custom emojis).
* the bot has the following permissions on the channel you want to start a poll in: Read messages, Send messages, Embed
  Links.

## Stored data {#data-usage}

The following data is being stored about every poll created via [commands](#commands):

* The ID of the poll message sent after creation
* The ID of the channel the poll was created in
* The question of the poll (`description` value in the command), including whether the poll is public or not
* The value of every voting option (`option{n}` values in the command)
* If enabled: Exact time at which the poll will expire (controlled by the `duration` option in the command) and whether
  the poll has ended
* View Metadata about your server (like name, icon, owner, …)

Additionally, the following data will be stored about every user when they vote for an option:

* The ID of the user
* The number of the option they voted for

If the poll hasn't ended yet, users can [remove their vote](#usage). After a poll has ended, this option isn't available
anymore.

There is no way to remove polls from the database (you can always delete the poll regardless). To
remove all polls, [purge the module database](./../../additional-features#reset-module-database).
