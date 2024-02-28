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

| Befehl                                                                                                                                                | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/polls create description:<Text> channel:<TextChannel> option1:<Text> option2:<Text> [option{n}:<Text>] [duration:<TimeDuration>] [public:<Boolean>]` | Erstelle im gewünschten Kanal eine neue Umfrage. Geben Sie die Umfragefrage als `description` Wert ein und fügen Sie mögliche Optionen mit dem Element `option{n}` hinzu. Optional können Sie eine Umfrage mit der Option `public` öffentlich machen (das bedeutet, dass jeder sehen kann, wofür Benutzer gestimmt haben). Wenn diese Option aktiviert ist, wird unterhalb der Umfrage die Schaltfläche „Aktuelle Stimmen anzeigen“ hinzugefügt. Um eine Umfrage automatisch zu beenden, geben Sie eine `duration` in einem [unterstützten Zeitdauerwert](./../../additional-features#durations) an. |
| `/polls end msg-id:<PollMessageID>`                                                                                                                    | Beendet eine bereits bestehende Umfrage, die noch nicht beendet wurde, sofort. Die Option „msg-id“ unterstützt die automatische Vervollständigung, sodass Sie problemlos nach der Umfragebeschreibung der Umfrage suchen können, die Sie beenden möchten.                                                                                                                                                                                                                        |

## Konfiguration {#konfiguration}

### Konfiguration {#konfiguration-konfig}

In dieser Datei können Sie die Emojis neben den Abstimmungsoptionen anpassen. Öffnen Sie es in 
Ihrem [dashboard](https://scnx.app/de/glink?page=bot/configuration?query=poll&file=polls|configs/config).

| Feld  | Beschreibung                                                                                                                                                                                                                                            |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Emojis | In diesen Feldern können Sie die Emojis anpassen, die neben jeder Abstimmungsoption im Dropdown-Menü und in der Einbettung angezeigt werden. Stellen Sie sicher, dass Sie Unicode-Werte für integrierte Emojis oder gültige Emoji-IDs (nicht nur den Namen) für benutzerdefinierte Emojis eingeben. |

### Nachricht {#konfigurations-string}

In dieser Datei kannst du anpassen, wie die Umfrageeinbettung in Discord angezeigt wird. Öffnen Sie es in Ihrem
[dashboard](https://scnx.app/de/glink?page=bot/configuration?query=poll&file=polls|configs/strings).

| Feld | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Embed | Mit dieser Konfigurationsoption können Sie anpassen, wie die Umfrageeinbettung in Discord angezeigt wird. Die folgenden Werte können angepasst werden: <ul><li><code>title</code>: Der Name des Embeds.</li><li><code>color</code>: Die Farbe des Embeds, muss ein <a href="../../additional-features#embed-colors">unterstützter Farbwert</a>.</li><li><code>options</code>: Die Kopfzeile des Optionsfelds inm Embed.</li><li><code>liveView</code>: Der Header der (Live-)Ergebnisanzeige in der Einbettung.</li><li><code>expiresOn</code>: Der Header der Anzeige der Ablaufzeit im Embed.</li><li><code>endedPollTitle</code>: Der Header von embed, wenn die Umfrage beendet wurde.</li><li><code>endedPollColor</code>: Die Farbe des Embeds wenn die Umfrage beendet ist, muss ein <a href="../../additional-features#embed-colors">unterstützter Farbwert</a> sein.</li><li><code>visibility</code>: Die Kopfzeile des Sichtbarkeitsabschnitts der Umfrageeinbettung.</li></ul> |

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
