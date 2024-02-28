# Umfragen

Einfaches Modul zum Erstellen neuer Umfragen auf Ihrem Server!

<ModuleOverview moduleName="polls" />

### Funktionen {#funktionen}

* Erstelle anonyme und öffentliche Umfragen mit bis zu neun Optionen pro Umfrage.
* Nutzer können via ein Dropdown-Menü ihre Option auswählen.
* Automatisch endende Umfragen, nach Ablauf einer festgelegten Zeit.
* Leicht verständliche Ergebnisanzeige, welche live geupdatet wird.

Hier ist ein Beispiel, wenn eine Umfrage beendet, ist:

![](@site/docs/assets/custom-bot/modules/polls/example.png)

### Einrichtung {#einrichtung}

* Um mit dem Modul Umfragen zu starten, stelle sicher, dass dein Bot in jedem Channel, in dem du Umfragen verwenden willst,
  folgende Rechte hat: Nachrichten lesen, Nachrichten senden, Links einbetten..
* Stellen Sie sicher, dass Sie [die Rechte](./../../slash-commands) für [`/poll`](#befehle) korrekt eingestellt haben.

### Verwendung {#verwendung}

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

### Befehle {#befehle}

<SlashCommandExplanation />

| Befehl                                                                                                                                                | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/polls create description:<Text> channel:<TextChannel> option1:<Text> option2:<Text> [option{n}:<Text>] [duration:<TimeDuration>] [public:<Boolean>]` | Erstelle im gewünschten Kanal eine neue Umfrage. Geben Sie die Umfragefrage als `description` Wert ein und fügen Sie mögliche Optionen mit dem Element `option{n}` hinzu. Optional können Sie eine Umfrage mit der Option `public` öffentlich machen (das bedeutet, dass jeder sehen kann, wofür Benutzer gestimmt haben). Wenn diese Option aktiviert ist, wird unterhalb der Umfrage die Schaltfläche „Aktuelle Stimmen anzeigen“ hinzugefügt. Um eine Umfrage automatisch zu beenden, geben Sie eine `duration` in einem [unterstützten Zeitdauerwert](./../../additional-features#durations) an. |
| `/polls end msg-id:<PollMessageID>`                                                                                                                    | Beendet eine bereits bestehende Umfrage, die noch nicht beendet wurde, sofort. Die Option `msg-id` unterstützt die automatische Vervollständigung, sodass Sie problemlos nach der Umfragebeschreibung der Umfrage suchen können, die Sie beenden möchten.                                                                                                                                                                                                                        |

### Konfiguration {#konfiguration}

### Konfiguration {#konfiguration-config}

In dieser Datei können Sie die Emojis neben den Abstimmungsoptionen anpassen. Öffnen Sie es in 
Ihrem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?query=poll&file=polls|configs/config).

| Feld  | Beschreibung                                                                                                                                                                                                                                            |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Emojis | In diesen Feldern können Sie die Emojis anpassen, die neben jeder Abstimmungsoption im Dropdown-Menü und in der Einbettung angezeigt werden. Stellen Sie sicher, dass Sie Unicode-Werte für integrierte Emojis oder gültige Emoji-IDs (nicht nur den Namen) für benutzerdefinierte Emojis eingeben. |

### Nachricht {#konfigurations-string}

In dieser Datei kannst du anpassen, wie die Umfrageeinbettung in Discord angezeigt wird. Öffnen Sie es in Ihrem
[Dashboard](https://scnx.app/de/glink?page=bot/configuration?query=poll&file=polls|configs/strings).

| Feld | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Embed | Mit dieser Konfigurationsoption können Sie anpassen, wie die Umfrageeinbettung in Discord angezeigt wird. Die folgenden Werte können angepasst werden: <ul><li><code>title</code>: Der Name des Embeds.</li><li><code>color</code>: Die Farbe des Embeds, muss ein <a href="../../additional-features#embed-colors">unterstützter Farbwert</a>.</li><li><code>options</code>: Die Kopfzeile des Optionsfelds inm Embed.</li><li><code>liveView</code>: Der Header der (Live-)Ergebnisanzeige in der Einbettung.</li><li><code>expiresOn</code>: Der Header der Anzeige der Ablaufzeit im Embed.</li><li><code>endedPollTitle</code>: Der Header von embed, wenn die Umfrage beendet wurde.</li><li><code>endedPollColor</code>: Die Farbe des Embeds wenn die Umfrage beendet ist, muss ein <a href="../../additional-features#embed-colors">unterstützter Farbwert</a> sein.</li><li><code>visibility</code>: Die Kopfzeile des Sichtbarkeitsabschnitts der Umfrageeinbettung.</li></ul> |

### Fehlerbehebung {#fehlerbehebung}

Wenn Sie Probleme mit dem Umfragemodul haben, stellen Sie bitte sicher, dass

* Sie haben keine Umfrage in einem Ankündigungskanal gestartet (da Nachrichten in solchen Kanälen nicht so häufig aktualisiert werden können).
* Ihre [Nachrichtenkonfiguration](#konfigurations-string) keine leeren Felder enthält, und das [Farbwerte gültig sind](../../additional-features#embed-colors).    
* Ihre [Konfiguration](#konfiguration-config) onnur gültige Emoji-Werte (Unicode für integrierte Emojis und Emoji-IDs für benutzerdefinierte Emojis)enthält .
* Der Bot über die folgenden Berechtigungen für den Kanal, in dem Sie eine Umfrage starten möchten: Nachrichten lesen, Nachrichten senden, Links einbetten verfügt.

### Gespeicherte Daten {#gespeicherte-daten}

Die folgenden Daten werden über jede Abfrage gespeichert, die über [Befehle](#befehle) erstellt wird :

* Die ID der Umfragenachricht, die nach der Erstellung gesendet wurde
* Die ID des Kanals, in dem die Umfrage erstellt wurde
* Die Frage nach der Umfrage (Wert im Befehl), einschließlich der Frage, ob die Umfrage öffentlich ist oder nicht (`description` value in the command), einschließlich der Frage, ob die Umfrage öffentlich ist oder nicht
* Der Wert jeder Abstimmungsoption ( Werte im Befehl) (`option{n}` values in the command)
* Falls aktiviert: Genaue Uhrzeit, zu der die Abfrage abläuft (gesteuert durch die Option im Befehl) und ob Die Umfrage ist beendet (controlled by the `duration` option in the command) und ob
  die Umfrage ist beendet
* Metadaten über Ihren Server anzeigen (z. B. Name, Symbol, Besitzer, ...)

Darüber hinaus werden die folgenden Daten über jeden Benutzer gespeichert, wenn er für eine Option abstimmt:

* Die ID des Benutzers
* Die Nummer der Option, für die sie gestimmt haben

Wenn die Umfrage noch nicht beendet ist, können Benutzer [ihre Stimme entfernen](#verwendung). ANach Beendigung einer Umfrage ist diese Option nicht mehr verfügbar.

Es gibt keine Möglichkeit, Umfragen aus der Datenbank zu entfernen (Sie können die Umfrage trotzdem jederzeit löschen). Zum
löschen aller Umfragen, [löschen Sie die Moduldatenbank](./../../additional-features#reset-module-database).
