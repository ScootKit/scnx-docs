# Umfragen

Einfaches Modul zum Erstellen neuer Umfragen auf deinem Server!

<ModuleOverview moduleName="polls" />

## Funktionen {#features}

* Erstelle anonyme und öffentliche Umfragen mit bis zu neun Optionen pro Umfrage.
* Nutzer können via ein Dropdown-Menü ihre Option auswählen.
* Umfragen können nach Ablauf einer festgelegten Zeit automatisch enden.
* Leicht verständliche Ergebnisanzeige, welche live aktualisiert wird.

Hier ist ein Beispiel einer beendeten Umfrage:

![](@site/docs/assets/custom-bot/modules/polls/example.png)

## Einrichtung {#setup}

* Um mit dem Modul Umfragen zu starten, stelle sicher, dass dein Bot in jedem Kanal, in dem du Umfragen verwenden willst,
  folgende Rechte hat: Nachrichten lesen, Nachrichten senden, Links einbetten.
* Stelle sicher, dass du [die Rechte](/docs/custom-bot/slash-commands) für [`/poll`](#commands) korrekt eingestellt hast.

## Verwendung {#usage}

Administratoren können Umfragen mit folgenden Befehlen verwalten:

* [`/poll create`](#commands) zum Erstellen neuer Umfragen.
* [`/poll end`](#commands) zum Beenden einer Umfrage (Umfragen enden automatisch, wenn du bei `/poll create` den zeitparameter gesetzt hast).

Benutzer können:

* Mit dem Dropdown-Menü unter Umfragen abstimmen.
* Sehen, für was sie gestimmt haben, indem sie den Knopf „Für was habe ich abgestimmt?“ unter der Abstimmung nutzen.
* Ihre Stimme entfernen, wenn sie zuerst „Für was habe ich abgestimmt?“ auswählen und danach auf „Meine Stimme entfernen“ unter der Antwort klicken.
* Liveergebnisse im Umfragen-Embed sehen.
* Sich anschauen, wer für welche Option gestimmt hat, indem sie auf den Knopf „Aktuelle
  Stimmen anzeigen“ unter dem Abstimmungs-Embed klicken (falls die Umfrage auf öffentlich gestellt ist).

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                                                                                                                                 | Beschreibung                                                                                                 |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/polls create description:<Text> channel:<TextKanal> option1:<Text> option2:<Text> [option{n}:<Text>] [duration:<ZeitDauer>] [public:<Boolean>]`      | Erstelle im gewünschten Kanal eine neue Umfrage. Gib die Umfragefrage als `description` Wert ein und füge mögliche Optionen mit dem Element `option{n}` hinzu. Optional kannst Du eine Umfrage mit der Option `public` öffentlich machen (das bedeutet, dass jeder sehen kann, wofür Benutzer gestimmt haben). Wenn diese Option aktiviert ist, wird unterhalb der Umfrage die Schaltfläche „Aktuelle Stimmen anzeigen“ hinzugefügt. Um eine Umfrage automatisch zu beenden, gibst du eine `duration` in einem [unterstützten Zeitdauerwert](/docs/custom-bot/additional-features#durations) an. |
| `/polls end msg-id:<UmfragenNachrichtID>`                                                                                                              | Beendet sofort eine bereits bestehende Umfrage, die noch nicht beendet wurde. Die Option `msg-id` unterstützt die automatische Vervollständigung, sodass du problemlos nach der Umfragebeschreibung der Umfrage suchen kannst, die du beenden möchtest.                                                                                                                                                                                                                                                                            |

## Konfiguration {#configuration}

### Konfiguration {#configuration-config}

In dieser Datei kannst du die Emojis neben den Abstimmungsoptionen anpassen. Öffnen sie es in 
deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?query=poll&file=polls|configs/config).

| Feld   | Beschreibung                                                                                                                                                                                                                                           |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Emojis | In diesen Feldern kannst du die Emojis anpassen, die neben jeder Abstimmungsoption im Dropdown-Menü und im Embed angezeigt werden. Stelle sicher, dass du Unicode-Werte für integrierte Emojis oder gültige Emoji-IDs (nicht nur den Namen) für benutzerdefinierte Emojis eingibst.                                                                                                                                                                                                                               |

### Nachrichten {#configuration-strings}

In dieser Datei kannst du anpassen, wie das Umfrage-Embed in Discord angezeigt wird. Öffne sie in deinem
[Dashboard](https://scnx.app/de/glink?page=bot/configuration?query=poll&file=polls|configs/strings).

| Feld  | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Embed | Mit dieser Konfigurationsoption kannst Du anpassen, wie das Umfrage-Embed in Discord angezeigt wird. Die folgenden Werte können angepasst werden: <ul><li><code>title</code>: Der Name des Embeds.</li><li><code>color</code>: Die Farbe des Embeds, muss ein <a href="/de/docs/custom-bot/additional-features#embed-colors">unterstützter Farbwert</a> sein.</li><li><code>options</code>: Die Überschrift des Optionsfelds im Embed.</li><li><code>liveView</code>: Die Überschrift der (Live-)Ergebnisanzeige im Embed.</li><li><code>expiresOn</code>: Die Überschrift des Embeds, wenn die Umfrage beendet wurde.</li><li><code>endedPollTitle</code>: Die Überschrift des Embeds, wenn die Umfrage beendet wurde.</li><li><code>endedPollColor</code>: Die Farbe des Embeds, wenn die Umfrage beendet ist. Muss ein <a href="/de/docs/custom-bot/additional-features#embed-colors">unterstützter Farbwert</a> sein.</li><li><code>visibility</code>: Die Überschrift des Öffentlichkeitsabschnitts des Embeds.</li></ul> 
                                                                                                                                      |

## Fehlerbehebung {#troubleshooting}

Wenn du Probleme mit dem Umfragemodul hast, stelle bitte sicher, dass

* du keine Umfrage in einem Ankündigungskanal gestartet hast (da Nachrichten in solchen Kanälen nicht so häufig aktualisiert werden können).
* deine [Nachrichtenkonfiguration](#configuration-strings) keine leeren Felder enthält und das [Farbwerte gültig sind](/docs/custom-bot/additional-features#embed-colors).    
* deine [Konfiguration](#configuration-config) nur gültige Emoji-Werte (Unicode für integrierte Emojis und Emoji-IDs für benutzerdefinierte Emojis) enthält.
* der Bot über die folgenden Berechtigungen in dem Kanal, in dem du eine Umfrage starten möchtest, verfügt: Nachrichten lesen, Nachrichten senden, Links einbetten.

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jede Umfrage gespeichert, die über [Befehle](#commands) erstellt wird:

* Die eindeutige Identifikationsnummer der Umfragenachricht, die nach der Erstellung gesendet wurde
* Die eindeutige Identifikationsnummer des Kanals, in dem die Umfrage erstellt wurde
* Die Frage der Umfrage (`description`-Wert im Befehl), inkludiert, ob die Umfrage öffentlich ist oder nicht
* Der Wert jeder Abstimmungsoption (`option{n}`-Wert im Befehl)
* Falls aktiviert: Genaue Uhrzeit, zu der die Umfrage abläuft (gesteuert durch den `duration`-Wert im Befehl) und ob die Umfrage beendet ist
* Metadaten über deinen Server anzeigen (z. B. Name, Symbol, Besitzer, ...)

Darüber hinaus werden die folgenden Daten über jeden Benutzer gespeichert, wenn er für eine Option abstimmt:

* Die eindeutige Identifikationsnummer des Benutzers
* Die Nummer der Option, für die abgestimmt wurde

Wenn die Umfrage noch nicht beendet ist, können Benutzer [ihre Stimme entfernen](#usage). Nach Beendigung einer Umfrage ist diese Option nicht mehr verfügbar.

Es gibt keine Möglichkeit, Umfragen aus der Datenbank zu entfernen (du kannst die Umfrage trotzdem jederzeit löschen). Zum
Löschen aller Umfragen, [lösche die Moduldatenbank](/docs/custom-bot/additional-features#reset-module-database).