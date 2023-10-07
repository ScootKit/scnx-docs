# Vorschläge

Fortschrittliches Modul, um Vorschläge auf deinem Server zu bearbeiten.

<ModuleOverview moduleName="suggestions" />

## Funktionen {#features}

* Lasse deine Nutzer Vorschläge auf Discord einreichen, indem sie
    * Befehle nutzen
    * Nachrichten in einen ausgewählten Kanal schicken (optional)
* Nimm Vorschläge von Nutzern an / lehne sie ab
* Lasse Nutzer für Vorschläge abstimmen, indem sie Reaktionen nutzen
* Öffne automatisch Threads unter neuen Vorschlägen (optional)

## Einrichtung {#setup}

1. Erstelle für die Vorschläge einen Kanal (oder wähle einen aus). Der Bot benötigt folgende Rechte auf diesen: "Kanal
   anzeigen" ("View channel"), "Nachrichten senden ("Send messages") und "Nachrichtenverlauf sehen" ("View message history")
2. Stelle sicher, dass [Berechtigungen](./../../slash-commands) auf `/manage-suggestions` richtig konfiguriert sind, um zu verhindern, 
   dass Nutzer Vorschläge als Admin verwalten können.
3. Öffne die [Modul-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=suggestions%7Cconfig).
4. [Konfiguriere](#configuration) das Modul.
5. Lade die Konfiguration neu, um Änderungen zu übernehmen.

## Nutzung {#usage}

* Nutzer können einen neuen Vorschlag mit `/suggestion` einreichen. Neue Vorschläge werden in den konfigurierten Kanal gesendet.
* Wenn aktiviert, werden Nachrichten, die in den Vorschläge-Kanal gesendet werden, automatisch zu Vorschlägen konvertiert.
* Andere Nutzer können mit den konfigurierten Reaktionen abstimmen und mit Threads zu den Vorschlägen kommentieren.
* Admins können Vorschläge mit `/manage-suggestions` annnehmen oder ablehnen und optional auch einen Kommentar zu ihrer Entscheidung angeben. Das 
  wird den Vorschlags-Ersteller, wenn konfiguriert, über PNs informieren.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                                       | Beschreibung                                                                                                                                    |
|--------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `/suggestion suggestion:<Text>`                              | Erlaubt es Nutzern, einen neuen Vorschlag in den Vorschläge-Kanal einzureichen.                                                                 |
| `/manage-suggestion accept id:<VorschlagsID> comment:<Text>` | Erlaubt es Admins, einen von einem Nutzer eingereichten Vorschlag zu akzeptieren. Der Kommentar wird in der aktualisierten Nachricht angezeigt. |
| `/manage-suggestion deny id:<VorschlagsID> comment:<Text>`   | Erlaubt es Admins, einen von einem Nutzer eingereichten Vorschlag abzulehnen. Der Kommentar wird in der aktualisierten Nachricht angezeigt.     |

## Konfiguration {#configuration}

Mit dieser Konfigurationsdatei kannst du Funktionen des Moduls konfigurieren und das Aussehen von Nachrichten verändern.
Öffne sie in
deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=suggestions%7Cconfig).

| Feld                                               | Beschreibung                                                                                                                                                                                                                                                     |
|----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Vorschlagskanal                                    | Kanal, in welchen neue Vorschläge gesendet und (wenn "Vorschläge von Nachrichten im Kanal erstellen" aktiviert ist) erstellt werden.                                                                                                                             |
| Vorschläge von Nachrichten im Kanal erstellen      | Wenn aktiviert, werden Nachrichten, die von Nutzern in den Vorschläge-Kanal gesendet werden, automatisch zu Vorschlägen konvertiert.                                                                                                                             |
| Reaktionen                                         | Der Bot wird diese Reaktionen unter Vorschläge hinzufügen. Du kannst diese Reaktionen als Abstimmung verwenden (z. B. mit „👍“ und „👎“). Bitte gib entweder die Unicode-Version (für integrierte Emojis) oder die Emoji-ID (für benutzerdefinierte Emojis) an. |
| Nutzerkommentare in Threads                        | Wenn aktiviert, wird der Bot unter jedem Vorschlag einen neuen Thread erstellen, damit Nutzer kommentieren können. Kommentieren über Befehle wurde entfernt.                                                                                                     |
| Thread-Name                                        | *Nur sichtbar, wenn "Nutzerkommentare in Threads" aktiviert ist*<br/>Das ist der Name der Threads, die unter Vorschlägen erstellt werden.                                                                                                                        |
| "Erfolgreich eingreicht"-Nachricht                 | Dies ist die Nachricht, welche Nutzer sehen, nachdem sie ihren Vorschlag über den Befehl [`/suggestion`](#commands) eingereicht haben.                                                                                                                           |
| Benachrichtigungsrolle                             | Diese Rolle wird jedes mal erwähnt, wenn ein neuer Vorschlag erstellt wurde.                                                                                                                                                                                     |
| PN-Benachrichtugungen senden                       | Wenn aktiviert, bekommt der Ersteller eine PN, wenn ein Administrator seinen Vorschlag bearbeitet hat.                                                                                                                                                           |
| PN-Statusbenachrichtigung                          | *Nur sichtbar, wenn "PN-Benachrichtugungen senden" aktiviert ist*<br/>Das ist die Nachricht, welche dem Ersteller gesendet wird, wenn sein Vorschlag von einem Administrator bearbeitet wurde.                                                                   |
| Unbeantwortete Vorschlags-Nachricht                | So sieht ein Vorschlag im Vorschläge-Kanal aus, wenn noch kein Admin den Vorschlag bearbeitet hat. Die Nachricht wird bearbeitet, wenn ein Admin den Vorschlag bearbeitet hat.                                                                                   |
| Abgelehnte Vorschlags-Nachricht                    | So sieht ein Vorschlag im Vorschläge-Kanal aus, wenn ein Admin den Vorschlag abgelehnt hat. Die originale Nachricht ("Unbeantwortete Vorschlags-Nachricht") wird zu diesem Wert verändert, wenn ein Admin den Vorschlag abgelehnt hat.                           |
| Angenommene Vorschlags-Nachricht                   | So sieht ein Vorschlag im Vorschläge-Kanal aus, wenn ein Admin den Vorschlag angenommen hat. Die originale Nachricht ("Unbeantwortete Vorschlags-Nachricht") wird zu diesem Wert verändert, wenn ein Admin den Vorschlag angenommen hat.                         |

## Fehlerbehebung {#troubleshooting}

<details>
<summary>Ein Vorschlag wird nicht erstellt</summary>
Bitte überprüfe folgendes:
<ul>
    <li>Stelle sicher, dass die Felder "Unbeantwortete Vorschlags-Nachricht", "Abgelehnte Vorschlags-Nachricht" und "Angenommene Vorschlags-Nachricht" richtig konfiguriert sind.</li>
    <li>Stelle sicher, dass der Bot die benötigten Berechtigungen auf den Vorschläge-Kanal hat: "Kanal anzeigen" ("View channel"), "Nachrichten senden ("Send messages") und "Nachrichtenverlauf sehen" ("View message history").</li>
    <li>Stelle sicher, dass die konfigurierte Benachrichtigungsrolle korrekt ist (oder das Feld leer).</li>
    <li>Stelle sicher, dass der Thread-Name kürzer als 100 Zeichen ist.</li>
    <li>Stelle sicher, dass die Reaktionen im richtigen Unicode-Format (wenn du ein integriertes Emoji verwendest) oder im Discord-Emoji-Format (für benutzerdefinierte Emojis) sind.</li>
    <li>Wenn du die Funktion "Vorschläge von Nachrichten im Kanal erstellen" aktiviert hast, stelle bitte sicher, dass der Bot die Berechtigung "Nachrichten verwalten" ("Manage messages") hat.</li>
</ul>
</details>

<details>
    <summary>Ich kann nicht als Admin auf einen Vorschlag antworten</summary>
Bitte überprüfe folgendes:
<ul>
    <li>Stelle sicher, dass die Felder "Abgelehnte Vorschlags-Nachricht" und "Angenommene Vorschlags-Nachricht" richtig konfiguriert sind.</li>
    <li>Stelle sicher, dass der Bot die benötigten Berechtigungen auf den Vorschläge-Kanal hat: "Kanal anzeigen" ("View channel"), "Nachrichten senden ("Send messages") und "Nachrichtenverlauf sehen" ("View message history").</li>
    <li>Stelle sicher, dass der Vorschlag nicht bereits von einem Admin beantwortet wurde. Wenn du noch nicht die <a href="./../../slash-commands">Berechtigungen</a> für <code>/manage-suggestion</code> <a href="./../../slash-commands">eingestellt hast</a>, können Nutzer eventuell als Admin auf den Vorschlag geantwortet haben.</li>
</ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jeden Vorschlag, der über [Befehle](#commands) oder durch Senden einer Nachricht in 
den [konfigurierten](#configuration) Kanal (wenn aktiviert) gespeichert:

* Eine eindeutige Zahl, die den Datenbankeintrag identifiziert
* Der Inhalt des Vorschlags (`suggestion`-Parameter des [`/suggestion`](#commands)-Befehls oder der Inhalt der
  gesendeten Nachricht)
* Die ID der Nachricht, die vom Bot in den konfigurierten Kanal gesendet wurde
* ID des Nutzers, der den Vorschlag eingereicht hat
* Die Antwort des Admins, beinhaltet folgendes:
    * Typ der Antwort (`deny` oder `approve`)
    * Grund für die Antwort (`comment`-Parameter vom Befehl [`/manage-suggestion`](#commands))
    * ID des Admins
* Für Vorschläge, die vor Version v3.4.6 erstellt wurden: Alle Kommentare, die über Befehle eingereicht wurden, beinhaltet folgendes:
    * Inhalt des Kommentars
    * ID des Nutzers, der den Kommentar hinzugefügt hat
* Metadaten zum Eintrag (Datum der Erstellung und letzte Aktualisierung)

Es gibt keinen Weg, einen Vorschlag aus der Datenbank zu entfernen (du kannst natürlich die Vorschlags-Nachricht löschen). Um 
alle Vorschläge zu entfernen, [lösche die Modul-Datenbank](./../../additional-features#reset-module-database).
