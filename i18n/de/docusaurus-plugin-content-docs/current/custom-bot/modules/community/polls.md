# Umfragen

Einfaches Modul zum Erstellen neuer Umfragen auf deinem Server!

<ModuleOverview moduleName="polls" />

## Funktionen {#features}

* Erstelle anonyme und öffentliche Umfragen mit bis zu neun Optionen pro Umfrage.
* Nutzer können via ein Dropdown-Menü ihre Option auswählen.
* Automatisch endende Umfragen, nach Ablauf einer festgelegten Zeit.
* Leicht verständliche Ergebnisanzeige, welche live geupdatet wird.

Hier ist ein Beispiel, einer beendeten Umfrage:

![](@site/docs/assets/custom-bot/modules/polls/example.png)

## Einrichtung {#setup}

* Um mit dem Modul Umfragen zu starten, stelle sicher, dass dein Bot in jedem Channel, in dem du Umfragen verwenden willst,
  folgende Rechte hat: Nachrichten lesen, Nachrichten senden, Links einbetten.
* Stelle sicher, dass Du [die Rechte](./../../slash-commands) für [`/poll`](#commands) korrekt eingestellt haben.

## Verwendung {#usage}

Administratoren können Umfragen mit folgenden Commands managen:

* [`/poll create`](#commands) Zum Erstellen neuer Umfragen.
* [`/poll end`](#commands) Zum Beenden einer Umfrage (Umfragen enden automatisch, wenn du `/poll create` den Dauerparameter gesetzt haben).

Benutzer können:

* Über Umfragen abstimmen, unter Verwendung des Auswahl Menüs unter der Umfrage.
* Ihre Antwort einsehen, für die Du gestimmt haben, über den Knopf „Für was habe ich abgestimmt“ unter der Abstimmung.
* Ihre Stimme entfernen, wenn Du zuerst „Für was habe ich gestimmt“ ausgewählt haben und danach auf „Meine Stimme entfernen“ unter der Rückmeldung klicken.
* Liveergebnisse im Umfragen Embed sehen.
* Sich anschauen, wer für welche Option gestimmt hat, indem Du auf den Button „Aktuelle
  Stimmen anzeigen“ unter dem Abstimmungs-Embed klicken (falls die Umfrage auf Öffentlich gestellt ist).

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                                                                                                                                | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/polls create description:<Text> channel:<TextChannel> option1:<Text> option2:<Text> [option{n}:<Text>] [duration:<TimeDuration>] [public:<Boolean>]` | Erstelle im gewünschten Kanal eine neue Umfrage. Gib die Umfragefrage als `description` Wert ein und füge mögliche Optionen mit dem Element `option{n}` hinzu. Optional kannst Du eine Umfrage mit der Option `public` öffentlich machen (das bedeutet, dass jeder sehen kann, wofür Benutzer gestimmt haben). Wenn diese Option aktiviert ist, wird unterhalb der Umfrage die Schaltfläche „Aktuelle Stimmen anzeigen“ hinzugefügt. Um eine Umfrage automatisch zu beenden, gibst Du eine `duration` in einem [unterstützten Zeitdauerwert](./../../additional-features#durations) an. |
| `/polls end msg-id:<PollMessageID>`                                                                                                                    | Beendet eine bereits bestehende Umfrage, die noch nicht beendet wurde, sofort. Die Option `msg-id` unterstützt die automatische Vervollständigung, sodass Du problemlos nach der Umfragebeschreibung der Umfrage suchen können, die Du beenden möchten.                                                                                                                                                                                                                        |

## Konfiguration {#configuration}

### Konfiguration {#configuration-config}

In dieser Datei kannst DU die Emojis neben den Abstimmungsoptionen anpassen. Öffne es in 
Ihrem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?query=poll&file=polls|configs/config).

| Feld  | Beschreibung                                                                                                                                                                                                                                            |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Emojis | In diesen Feldern kannst Du die Emojis anpassen, die neben jeder Abstimmungsoption im Dropdown-Menü und in der Einbettung angezeigt werden. Stelle sicher, dass Du Unicode-Werte für integrierte Emojis oder gültige Emoji-IDs (nicht nur den Namen) für benutzerdefinierte Emojis eingeben. |

### Nachricht {#configuration-strings}

In dieser Datei kannst du anpassen, wie die Umfrageeinbettung in Discord angezeigt wird. Öffne es in Deinem
[Dashboard](https://scnx.app/de/glink?page=bot/configuration?query=poll&file=polls|configs/strings).

| Feld | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Embed | Mit dieser Konfigurationsoption kannst Du anpassen, wie die Umfrageeinbettung in Discord angezeigt wird. Die folgenden Werte können angepasst werden: <ul><li><code>title</code>: Der Name des Embeds.</li><li><code>color</code>: Die Farbe des Embeds, muss ein <a href="../../additional-features#embed-colors">unterstützter Farbwert</a>.</li><li><code>options</code>: Die Kopfzeile des Optionsfelds inm Embed.</li><li><code>liveView</code>: Der Header der (Live-)Ergebnisanzeige in der Einbettung.</li><li><code>expiresOn</code>: Der Header der Anzeige der Ablaufzeit im Embed.</li><li><code>endedPollTitle</code>: Der Header von embed, wenn die Umfrage beendet wurde.</li><li><code>endedPollColor</code>: Die Farbe des Embeds wenn die Umfrage beendet ist, muss ein <a href="../../additional-features#embed-colors">unterstützter Farbwert</a> sein.</li><li><code>visibility</code>: Die Kopfzeile des Sichtbarkeitsabschnitts der Umfrageeinbettung.</li></ul> |

## Fehlerbehebung {#troubleshooting}

Wenn Du Probleme mit dem Umfragemodul haben, stelle bitte sicher, dass

* Du hast keine Umfrage in einem Ankündigungskanal gestartet (da Nachrichten in solchen Kanälen nicht so häufig aktualisiert werden können).
* Ihre [Nachrichtenkonfiguration](#configuration-strings) keine leeren Felder enthält, und das [Farbwerte gültig sind](../../additional-features#embed-colors).    
* Ihre [Konfiguration](#configuration-config) onnur gültige Emoji-Werte (Unicode für integrierte Emojis und Emoji-IDs für benutzerdefinierte Emojis)enthält .
* Der Bot über die folgenden Berechtigungen für den Kanal, in dem Du eine Umfrage starten möchten: Nachrichten lesen, Nachrichten senden, Links einbetten verfügt.

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jede Abfrage gespeichert, die über [Befehle](#commands) erstellt wird :

* Die ID der Umfragenachricht, die nach der Erstellung gesendet wurde
* Die ID des Kanals, in dem die Umfrage erstellt wurde
* Die Frage nach der Umfrage (Wert im Befehl), einschließlich der Frage, ob die Umfrage öffentlich ist oder nicht (`description` value in the command), einschließlich der Frage, ob die Umfrage öffentlich ist oder nicht
* Der Wert jeder Abstimmungsoption ( Werte im Befehl) (`option{n}` values in the command)
* Falls aktiviert: Genaue Uhrzeit, zu der die Abfrage abläuft (gesteuert durch die Option im Befehl) und ob Die Umfrage ist beendet (controlled by the `duration` option in the command) und ob
  die Umfrage ist beendet
* Metadaten über Ihren Server anzeigen (z. B. Name, Symbol, Besitzer, ...)

Darüber hinaus werden die folgenden Daten über jeden Benutzer gespeichert, wenn er für eine Option abstimmt:

* Die ID des Benutzers
* Die Nummer der Option, für die Du gestimmt haben

Wenn die Umfrage noch nicht beendet ist, können Benutzer [ihre Stimme entfernen](#usage). ANach Beendigung einer Umfrage ist diese Option nicht mehr verfügbar.

Es gibt keine Möglichkeit, Umfragen aus der Datenbank zu entfernen (Du kannst die Umfrage trotzdem jederzeit löschen). Zum
löschen aller Umfragen, [lösche die Moduldatenbank](./../../additional-features#reset-module-database).
