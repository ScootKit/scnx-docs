# Willkommen und Boosts

Einfaches Modul, um neuen Nutzern "Hi" zu sagen, ihnen Rollen zu geben und um sich bei Nutzern, die deinen Server geboostet haben, zu bedanken.

<ModuleOverview moduleName="welcomer" />

## Funktionen {#features}

* Heiße neue Nutzer mit eigenen Nachrichten (und dynamischen Bildern) willkommen.
* Sage Tschüss zu Nutzern, die deinen Server verlassen haben.
* Bedanke dich bei Nutzern, die deinen Server geboostet haben mit eigenen Nachrichten Thank users who boosted your server with custom messages und erpresse sie emotional, indem du ihnen eine Nachricht sendest, wenn sie deinen Server entboostet haben.
* Füge unbegrenzt viele an Nachrichten zum Beitritt, Boost oder Verlassen in verschiedenen Kanälen hinzu.
* Füge neuen Nutzern und Boostern automatisch Rollen hinzu.
* Lasse den Bot zufällige Nachrichten nutzen, um ein wenig Verschiedenheit in deine Willkommens, Verlassen, Boost und Entboost-Nachrichten zu bekommen.
* Lösche Willkommens-Nachrichten von Nutzern, die deinen Server innerhalb von 7 Tagen wieder verlassen haben, automatisch.
* Füge einen Button unter Willkommens-Nachrichten hinzu, der es deinen bestehenden Nutzern erlaubt, Mitglieder willkommen zu heißen.

## Einrichtung {#setup}

### Willkommens-Nachricht einrichten {#setup-welcome-messages}

Willkommens-Nachrichten werden jedes mal gesendet, wenn ein neuer Nutzer deinen Server betritt. Du kannst einen Willkommen-Button hinzufügen, welcher es bestehenden Nutzern erlaubt, den neuen Nutzer willkommen zu heißen. Zusätzlich wird, falls [aktiviert](#configuration-config), die Nachricht gelöscht, wenn der Nutzer den Server innerhalb 7 Tage wieder verlässt.

1. Erstelle oder wähle einen deiner Kanäle, in welchen der Bot deine Nachricht schicken soll, wenn ein Nutzer beitritt. Der Bot muss die Berechtigungen "Kanal 
   ansehen" ("View channel"), "Nachrichten senden" ("Send messages") und "Nachrichtenverlauf einsehen" ("View message history") auf diesem haben.
3. Füge den Kanal zur 
   [Kanal-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels) hinzu. Nutze dafür als Kanal-Typ "join" und 
   [konfiguriere es](#configuration-channels).
4. Konfiguriere die Nachrichten:
   * Wenn du zufällige Nachrichten verwenden willst, aktiviere die Option "Zufällige Nachrichten?", öffne die 
     [Zufällige Nachrichten](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Frandom-messages)-
     Konfigurationsdatei und [konfiguriere](#configuration-random-messages) die zufälligen Nachrichten mit dem Nachrichten-Typ
     "join".
   * Wenn du immer die gleiche Nachricht gesendet haben willst, nutze die 
     [Kanal-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels), um die 
     [Nachricht zu konfigurieren](#configuration-channels).

### Boost / Unboost Nachrichten einrichten {#setup-boost-messages}

Boost-Nachrichten werden gesendet, wenn ein Nutzer deinen Server *das erste mal* boostet und die Unboost-Nachricht wird gesendet, wenn ein Nutzer *alle seine Boosts* von deinem Server entfernt hat. Aufgrund [Einschränkungen in Discords API]((https://github.com/discord/discord-api-docs/discussions/3228#discussioncomment-1717560)) werden diese Nachrichten nicht gesendet, wenn ein Nutzer die Anzahl seiner Boosts auf deinem Server erhöht oder verringert.

1. Erstelle oder wähle einen deiner Kanäle, in welchen der Bot eine Nachricht schreiben soll, wenn ein Mitglied deinen Server geboostet hat. Der Bot benötigt 
   die Rechte "Kanal anzeigen" ("View channel"), "Nachrichten senden" ("Send messages") und "Nachrichtenverlauf anzeigen" ("View message history") auf diesen Kanal.
2. Füge den Kanal zur
   [Kanal-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels) hinzu, indem du 
   den Kanal-Typ "Boost" oder "Unboost" benutzt
   und das Element [konfigurierst](#configuration-channels).
3. Konfiguriere die Nachricht:
   * Wenn du zufällige Nachrichten verwendest willst, aktiviere die "Zufällige Nachrichten?"-Option, öffne
     die [Zufällige Nachrichten](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Frandom-messages)-Konfigurationsdatei 
     und [konfigure](#configuration-random-messages) die zufälligen Nachrichten mit dem Nachrichten-Typ "
     boost" oder "unboost".
   * If you want to send the same message every time, use
     the [channel configuration](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels)
     to [configure the message](#configuration-channels).

### Set up Leave Messages {#setup-leave-messages}

Leave messages will get send every time a user leaves your server.

1. Create or select one of your channels in which the bot should send when a member leaves your server. The bot has
   to have the "View channel", "Send messages" and "View message history" permissions on it.
2. Add the channel to
   the [channel configuration](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels) using
   the "leave" Message-Type
   and [configure it](#configuration-channels).
3. Configure the message:
   * If you want to use random messages, enable the "Random messages?" option, open
     the [random messages](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Frandom-messages)
     configuration file and [configure](#configuration-random-messages) the random messages with the Message-Type "
     leave".
   * Wenn du jedes mal die gleiche Nachricht senden willst, nutze 
     die [Kanal-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels), 
     um die [Nachricht zu konfigurieren](#configuration-channels).

### Beitritts- und Boost-Rollen einrichten {#setup-join-roles}

:::caution
Momentan werden Beitritts-Rollen Rollen, die sich Nutzer selbst über 
Discords Einführung gegeben haben, überschreiben oder entfernen.
Dieser Fehler ist bekannt und wird bearbeitet.
:::

1. Öffne die [Modul-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fconfig).
2. Wähle die gewünschten Rollen in dem [jeweiligen Konfigurationsfeld](#configuration-config).

## Nutzung {#usage}

Nach dem [Einrichten](#setup) des Moduls werden die Nachrichten automatisch jedes mal gesendet, wenn die Aktion ausgelöst wird.      

Um Nutzern zu erlauben, einen Willkommen-Button zu benutzen, [aktiviere diese Funktion](#configuration-config) einfach in deiner Konfiguration. 
Nach dem Einstellen werden neue Nachrichten einen (konfigurierbaren) Knopf haben. Wenn dieser Knopf von einem deiner Mitglieder gedrückt wird, 
wird er inaktiv (= kann nicht mehr gedrückt werden) und eine [konfigurierbare](#configuration-config)
Nachricht wird in den konfigurierten Kanal gesendet.

## Konfiguration {#configuration}

Dieses Modul ist in mehrere Konfigurationsdateien unteteilt. Du kannst diese weiter unten finden.

### Kanäle {#configuration-channels}

In this configuration file, you can set up the channels in which this module is supposed to operate in and allows
configuration of these channels. Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fchannels).

:::info
This configuration file uses "Config-Elements". One Config-Element represents each channel that should receive messages
when a supported event is triggered. You can add a channel multiple times, this is especially required if you want to
send different event types in the same channel.
:::

Each Channel has the following configuration options:

| Field                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Channel                                                   | This is the channel the message will get sent in.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Channel-Type                                              | Depending on this value, this particular Config-Element will represent the configuration for a specific event type (see [setup](#setup). The following options are available: <ul><li><code>join</code>: This Config-Element will be applied when a new member joins your server.</li><li><code>leave</code>: This Config-Element will be applied when a member leaves your server.</li><li><code>boost</code>: This Config-Element will be applied when a member boosts your server for the first time.</li><li><code>unboost</code>: This Config-Element will be applied when a member removes their last boost from your server.</li></ul> |
| Random messages                                           | If this option is enabled, the "Message" value will *NOT* be applied. Instead, a [random message](#configuration-random-messages) with the same Channel-Type will get sent randomly.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Message                                                   | This will be the message sent in this channel, if "Random messages" is not enabled. This option [supports dynamic image generation](https://sc-net.work/imgen) to make your messages even more pretty ✨.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Welcome Button                                            | *This option is only available, when "Channel Type" is set to "join"*<br/>If enabled, a button will get added below each message. One other member can then click on this button, which will trigger the configured message to be sent.                                                                                                                                                                                                                                                                                                                                                                                                       |
| Welcome Button Content                                    | *Only visible if "Welcome Button" is enabled.*<br/>This will be the content of the button added below messages. The value needs to be less than 100 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Channel in which the welcome-button should send a message | *Only visible if "Welcome Button" is enabled.*<br/>This is the channel the welcome message will get sent in once another member presses the welcome button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Welcome Button Message                                    | *Only visible if "Welcome Button" is enabled.*<br/>This is the message that gets sent in the configured channel when another member presses the welcome button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Module configuration {#configuration-config}

In this configuration file allows you to [set up welcome- and boost roles](#setup-join-roles) and configure other basic
features of this module. Open it in
your [dashboard](https://scnx.app/glink?page=bot/configuration?file=welcomer%7Cconfigs%2Fconfig).

| Field                          | Description                                                                                                                                                                          |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Give roles on join             | These roles will be given to members who joined your server. This won't get applied retroactively, use the [massrole module](./../tools/massrole) to do this.                        |
| Ignore bots?                   | If enabled (this is highly recommended), welcome and leave messages won't get sent if the user joining or leaving is a bot.                                                          |
| Give additional roles on boost | These roles will be given to members who boosted your server in addition to their boost-role assigned by Discord. The roles will get removed if the member removes all their boosts. |
| Delete welcome message         | If enabled, sent welcome messages will get deleted automatically if the user leaves your server within seven days after join.                                                        |

### Random messages {#configuration-random-messages}

This configuration file will get used if a [configured channel](#configuration-channels) uses the "Random messages"
option. In this case, the bot will randomly select one of the messages configured in this file with the same type as
configured in the channel.

:::info
This configuration file uses "Config-Elements". One Config-Element represents a message which a specified type.
When [a channel](#configuration-channels) uses the "Random messages" option, a random message with the same type will
get selected.
:::

| Field        | Description                                                                                                                                                                                                |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message-Type | *see the "Channel-Type" option in the [channel configuration](#configuration-channels).*                                                                                                                   |
| Message      | This is the message that gets send if this message object will get selected randomly. This option [supports dynamic image generation](https://sc-net.work/imgen) to make your messages even more pretty ✨. |

## Troubleshooting {#troubleshooting}

This module is notoriously trick to troubleshoot, as its highly flexible and customizable design introduces a
complicated configuration structure. If none of the steps below help (please try them first!), you can always reach out
to our friendly staff at [scnx.app/help](https://scnx.app/help).

<details>
   <summary>A message is not being sent or the message is "Message not found".</summary>
   <ul>
      <li>Make sure your bot has the "View channel", "Send messages" and "View message history" permissions on the configured channel.</li>
      <li>Make sure a correct <a href="#configuration-channels">channel entry</a> is set up of the correct channel and correct event type.</li>
      <li>If you are using Random Messages: Make sure at least one <a href="#configuration-random-message">random message</a> is configured for this event-type. The message in the <a href="#configuration-channels">channel entry</a> will be ignored.</li>
      <li>If you are not using Random Messages: Make sure you have configured a valid message in your <a href="#configuration-channels">channel entry</a>.</li>
   </ul>
</details>

<details>
   <summary>I am experiencing issues with a dynamically generated image.</summary>

   Please visit <a href="https://sc-net.work/imgen">sc-net.work/imgen</a>, as shown in the error image.
</details>

<details>
   <summary>No message is being sent when a user adds another boost to their existing server boost.</summary>

   This happens due to a <a href="https://github.com/discord/discord-api-docs/discussions/3228#discussioncomment-1717560">Discord API limitation</a>. We cannot change this behavior.
</details>

## Gespeicherte Daten {#data-usage}

The following data will get stored for every configured welcome messsage every time when a new member joins:

* An unique integer identifying the database entry
* Die einzigartige Discord Nutzer-ID des Nutzers, der deinem Server beigetreten ist und die Willkommens-Nachricht ausgelöst hat
* Die einzigartige Discord Nachrichten-ID der Willkommens-Nachricht, die vom Bot gesendet wurde
* Die einzigartige Discord Kanal-ID des Kanals, in welchen der Bot die Willkommens-Nachricht geschrieben hat
* Der genaue Zeitpunkt, wann der Nutzer deinem Server beigetreten ist
* Metadata about the entry (date when created and last updated)

This data will get used to delete the sent welcome messages if the user leaves the server within seven days after
joins (if [enabled](#configuration-config)). There is no way to stop the bot from storing data (as toggling this feature
should be retroactive), but the data won't get used unless the feature is enabled.

To remove all data, [purge the module database](./../../additional-features#reset-module-database).
