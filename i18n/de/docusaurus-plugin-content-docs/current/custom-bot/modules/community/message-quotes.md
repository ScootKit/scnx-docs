# Nachrichten-Zitate

Poste eine Discord-Nachricht automatisch als formatiertes Zitat, sobald jemand ihren Nachrichtenlink einfügt.

<ModuleOverview moduleName="message-quotes" />

## Funktionen {#features}

- Erkennt Discord-Nachrichtenlinks, die in den Chat eingefügt werden, und postet die verlinkte Nachricht als formatiertes Zitat erneut.
- Optionale Aktion **Quote Message** im Apps-Menü von Discord (Rechtsklick), sodass Nutzer eine Nachricht zitieren können, ohne ihren Link einzufügen.
- Das gerenderte Zitat kann den ursprünglichen Autor, den Spitznamen, den Avatar, den Kanal, den Nachrichteninhalt, einen Discord-Zeitstempel, einen Link zurück zum Original und dessen erstes Bild anzeigen.
- Vollständig anpassbare Zitat-Nachricht - erstelle sie als Embed oder als generiertes Bild mit Parametern für jedes Feld.
- Kanal-/Kategorie- und Rollen-Blacklists, um das Zitieren aus bestimmten Orten (und von bestimmten Personen) fernzuhalten.
- Schalter, um Botnachrichten zu ignorieren, Selbst-Zitate zu erlauben, auf die Auslösernachricht zu antworten und die Auslösernachricht zu löschen.
- Optionales Zitieren von Anhängen, bei dem die Dateien der verlinkten Nachricht zusammen mit dem Zitat erneut hochgeladen werden.
- Das erste Bild der zitierten Nachricht wird in die [Dateibibliothek](/docs/scnx/guilds/files) deines Servers archiviert, sodass Zitate ihr Bild behalten, auch nachdem Discords CDN-URLs abgelaufen sind.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=message-quotes) auf deinem Server.
2. Stelle sicher, dass der Bot in den Kanälen, in denen das Zitieren funktionieren soll, die Berechtigungen `Kanal anzeigen`, `Nachrichten senden`, `Nachrichtenverlauf lesen` und `Links einbetten` besitzt. Um **Auslöser löschen?** zu nutzen, benötigt er außerdem `Nachrichten verwalten`.
3. Öffne die [Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=message-quotes%7Cconfigs/config) und passe die Blacklists, Schalter und die Zitat-Nachricht an deinen Server an.

## Nutzung {#usage}

- Sobald das Modul [eingerichtet](#setup) ist, fügt ein Nutzer einfach einen Link zu einer anderen Nachricht (vom selben Server) in einen beliebigen, nicht auf der Blacklist stehenden Kanal ein. Der Bot ruft die verlinkte Nachricht ab und postet sie als Zitat erneut.
- Die verlinkte Nachricht wird nur zitiert, wenn sowohl der Nutzer, der den Link eingefügt hat, als auch der Bot sie tatsächlich sehen können (beide benötigen `Kanal anzeigen` und `Nachrichtenverlauf lesen` im Ausgangskanal). Links, die auf einen anderen Server verweisen, werden ignoriert.
- Abhängig von deiner Konfiguration wird das Zitat als Antwort auf die Auslösernachricht gesendet, und die Auslösernachricht kann anschließend gelöscht werden.
- Eine kurze Abklingzeit pro Nutzer verhindert, dass ein einzelner Nutzer in schneller Folge Zitate spammt.
- Alternativ können Nutzer mit Rechtsklick (oder langem Drücken) auf eine beliebige Nachricht das **Apps**-Menü öffnen und **Quote Message** auswählen, um das Zitat zu posten, ohne einen Link einzufügen. Siehe [Befehle](#commands).

### Dauerhafte Bildarchivierung {#image-archival}

Wenn ein Zitat gerendert wird, wird das erste Bild der verlinkten Nachricht in die [Dateibibliothek](/docs/scnx/guilds/files) deines Servers hochgeladen, und das Zitat wird mit dieser dauerhaften URL erstellt. So brechen Zitate nicht mehr, sobald Discords kurzlebige CDN-URLs ablaufen.

Archivierte Bilder zählen auf das [Datei-Speicherkontingent](/docs/scnx/guilds/files#understanding-storage-limits) deines Servers. Um dies zu deaktivieren, aktiviere **Anhang-Archivierung deaktivieren** in der allgemeinen Konfiguration des Bots; bei deaktivierter Archivierung greifen Zitat-Bilder wieder auf Discords ablaufende URLs zurück, und alte Zitate werden mit der Zeit erneut defekt sein.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl          | Beschreibung                                                                                                                                                                                   |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Quote Message` | Eine Kontextmenü-Aktion für Nachrichten (Apps). Klicke mit der rechten Maustaste auf eine Nachricht oder drücke lange darauf und wähle sie aus, um diese Nachricht als Zitat erneut zu posten. |

Die **Quote Message**-Aktion berücksichtigt dieselbe Konfiguration wie das linkbasierte Zitieren. Wenn das Zitieren für das Ziel unterdrückt wird (zum Beispiel weil **Botnachrichten ignorieren?** aktiviert ist oder **Selbst-Zitate erlauben?** deaktiviert ist und du deine eigene Nachricht zitierst), antwortet der Bot privat (ephemeral) und postet nichts.

## Konfiguration {#configuration}

Konfiguriere das Nachrichten-Zitierungssystem. Öffne es in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=message-quotes%7Cconfigs/config).

| Feld                        | Beschreibung                                                                                                                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rollen, die kein XP sammeln | Rollen, die vom Zitieren ausgeschlossen sind. Mitglieder mit einer aufgeführten Rolle können kein Zitat auslösen.                                                                                                                                       |
| Channel ohne XP             | Kanäle, die vom Zitieren ausgeschlossen sind. Kanäle und Kategorien werden unterstützt; eine Kategorie schließt alle ihre Kanäle aus.                                                                                                                   |
| Dateien anhängen            | Sollen alle Anhänge zitiert werden? Die Dateien der verlinkten Nachricht werden zusammen mit dem Zitat erneut hochgeladen. Deaktivierung empfohlen, wenn "Nachricht"-Komponenten v2 verwendet werden.                                                   |
| Botnachrichten ignorieren?  | Wenn aktiviert, werden von Bots gesendete Nachrichten nicht zitiert.                                                                                                                                                                                    |
| Selbst-Zitate erlauben?     | Ob Nutzer ihre eigenen Nachrichten zitieren können.                                                                                                                                                                                                     |
| Auf Nachricht antworten     | Antwortet auf die Nachricht, die das Zitat ausgelöst hat. Wird ignoriert, wenn **Auslöser löschen?** aktiviert ist.                                                                                                                                     |
| Auslöser löschen?           | Wenn aktiviert, wird die Nachricht, die das Zitat ausgelöst hat, nach dem Posten des Zitats gelöscht. Erfordert die Berechtigung `Nachrichten verwalten`.                                                                                               |
| Nachricht                   | Die Nachricht, in der das Zitat zurückgegeben wird. Erstelle sie als Embed oder als generiertes Bild; die verfügbaren Parameter (Autor, Spitzname, Avatar, Kanal, Zeitstempel, Link, erstes Bild, Inhalt und mehr) sind in deinem Dashboard aufgeführt. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Es passiert nichts, wenn ein Nachrichtenlink eingefügt wird</summary>
  <ul>
    <li>Stelle sicher, dass das Modul aktiviert ist und der Bot <code>Kanal anzeigen</code>, <code>Nachrichten senden</code>, <code>Nachrichtenverlauf lesen</code> und <code>Links einbetten</code> sowohl im Kanal, in dem der Link eingefügt wird, als auch im Kanal, in dem die verlinkte Nachricht liegt, besitzt.</li>
    <li>Stelle sicher, dass der Kanal (oder seine Kategorie) nicht in <strong>Channel ohne XP</strong> steht und der Nutzer keine Rolle aus <strong>Rollen, die kein XP sammeln</strong> hat.</li>
    <li>Die verlinkte Nachricht muss sich auf demselben Server befinden. Links zu Nachrichten auf anderen Servern werden ignoriert.</li>
    <li>Der Nutzer, der den Link eingefügt hat, muss die verlinkte Nachricht selbst sehen können (<code>Kanal anzeigen</code> und <code>Nachrichtenverlauf lesen</code> im Ausgangskanal).</li>
    <li>Wenn du gerade eine Nachricht zitiert hast, warte ein paar Sekunden - es gilt eine kurze Abklingzeit pro Nutzer.</li>
  </ul>
</details>

<details>
  <summary>Botnachrichten werden nicht zitiert</summary>
  <ul>
    <li>Das ist zu erwarten, wenn <strong>Botnachrichten ignorieren?</strong> aktiviert ist. Deaktiviere es, um das Zitieren von Botnachrichten zu erlauben.</li>
  </ul>
</details>

<details>
  <summary>Die Auslösernachricht wird nicht gelöscht</summary>
  <ul>
    <li>Stelle sicher, dass <strong>Auslöser löschen?</strong> aktiviert ist.</li>
    <li>Stelle sicher, dass der Bot die Berechtigung <code>Nachrichten verwalten</code> im Kanal hat, in dem der Link eingefügt wurde. Ohne sie wird das Zitat trotzdem gepostet, aber die Auslösernachricht bleibt bestehen.</li>
    <li>Solange <strong>Auslöser löschen?</strong> aktiviert ist, wird <strong>Auf Nachricht antworten</strong> ignoriert, da die Nachricht, auf die geantwortet würde, entfernt wird.</li>
  </ul>
</details>

<details>
  <summary>Die "Quote Message"-Aktion meldet, dass die Nachricht nicht zitiert werden kann</summary>
  <ul>
    <li>Das Ziel wird wahrscheinlich durch die Konfiguration unterdrückt - zum Beispiel ist <strong>Botnachrichten ignorieren?</strong> aktiviert und das Ziel wurde von einem Bot gesendet, oder <strong>Selbst-Zitate erlauben?</strong> ist deaktiviert und du zitierst deine eigene Nachricht.</li>
    <li>Außerdem benötigst du die Berechtigung, im aktuellen Kanal Nachrichten zu senden, damit die Aktion das Zitat posten kann.</li>
  </ul>
</details>

<details>
  <summary>Alte Zitate haben ihr Bild verloren</summary>
  <ul>
    <li>Discords CDN-URLs laufen mit der Zeit ab. Zitat-Bilder werden normalerweise in deine <a href="/docs/scnx/guilds/files">Dateibibliothek</a> archiviert, um dies zu verhindern.</li>
    <li>Wenn <strong>Anhang-Archivierung deaktivieren</strong> in der allgemeinen Konfiguration des Bots aktiviert ist, greifen Zitat-Bilder auf Discords ablaufende URLs zurück und werden mit der Zeit defekt.</li>
  </ul>
</details>

## Gespeicherte Daten {#data-usage}

Dieses Modul speichert keine Daten in seiner eigenen Modul-Datenbank. Zitate werden direkt gerendert und gepostet, und die kurze Abklingzeit pro Nutzer wird nur im Arbeitsspeicher gehalten und beim Neustart des Bots zurückgesetzt.

Die einzige Ausnahme ist die Bildarchivierung: Wenn das erste Bild einer zitierten Nachricht archiviert wird, wird dieses Bild in der [Dateibibliothek](/docs/scnx/guilds/files) deines Servers gespeichert (und zählt auf dein [Datei-Speicherkontingent](/docs/scnx/guilds/files#understanding-storage-limits)) und nicht in der Datenbank dieses Moduls. Verwalte oder entferne diese Dateien in der Dateibibliothek in deinem Dashboard.
