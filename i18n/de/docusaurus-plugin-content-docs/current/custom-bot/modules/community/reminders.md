# Erinnerungen

Gibt Nutzern die Möglichkeit, sich selbst Erinnerungen zu setzen – entweder über Direktnachrichten oder Kanäle.

<ModuleOverview moduleName="reminders" />

## Funktionen {#features}

* Benutzer können persönliche Erinnerungen mit einer benutzerdefinierten Nachricht und Dauer festlegen.
* Erinnerungen können entweder in dem Kanal, in dem der Befehl verwendet wurde, oder per Direktnachricht zugestellt werden.
* Schlummer-Buttons ermöglichen es Benutzern, eine Erinnerung um 10 Minuten, 30 Minuten, 1 Stunde oder 1 Tag zu verschieben.
* Erinnerungen bleiben über Bot-Neustarts hinweg bestehen – anstehende Erinnerungen werden beim Start automatisch neu geplant.
* Unterstützt flexible Zeitangaben (z. B. „2h30m", „1d", „45m").

## Einrichtung {#setup}

1. Stelle sicher, dass der Bot in den Kanälen, in denen Erinnerungen zugestellt werden, über die Berechtigungen `Kanal anzeigen`, `Nachrichten senden` und `Links einbetten` verfügt.
2. Passe die Erinnerungs-Benachrichtigung an in der [Modul-Konfiguration](#configuration).

## Nutzung {#usage}

Benutzer können eine Erinnerung über `/remind-me` einstellen:

* Gib mithilfe des Parameters `in` an, wann du erinnert werden möchtest. Verwende dabei ein [unterstütztes Zeitformat](/de/docs/custom-bot/additional-features/#durations) (z. B. „2h", „30m", „1d12h").
* Gib die Erinnerungsnachricht im Parameter `what` an.
* Setze optional `dm` auf `true`, um die Erinnerung per Direktnachricht anstatt im aktuellen Kanal zu erhalten.

Die Erinnerung muss mindestens 1 Minute in der Zukunft liegen.

Wenn die Erinnerung ausgelöst wird, sendet der Bot die konfigurierte Benachrichtigung zusammen mit Schlummer-Buttons. Benutzer können auf diese Schaltflächen klicken, um die Erinnerung um zusätzliche 10 Minuten, 30 Minuten, 1 Stunde oder 1 Tag zu verschieben.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
|---------|-------------|
| `/remind-me in:<Text> what:<Text> [dm:<Boolean>]` | Erstelle eine Erinnerung. Der Parameter `in` akzeptiert ein [Zeitformat](/de/docs/custom-bot/additional-features/#durations) (z. B. „2h", „30m", „1d"). Der Parameter `what` ist die Erinnerungsnachricht. Setze `dm` auf `true`, um die Erinnerung per Direktnachricht zu erhalten. |

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du das Modul konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=reminders%7Cconfig).

| Feld | Beschreibung |
|-------|-------------|
| Erinnerungs-Nachricht | Die Benachrichtigung, die gesendet wird, wenn eine Erinnerung ausgelöst wird. Unterstützt Parameter für die Benutzererwähnung, den Text der Erinnerungsnachricht, das Benutzer-Tag und die URL des Benutzer-Avatars. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Erinnerungen werden nicht zugestellt</summary>
  <ul>
    <li>Stelle sicher, dass der Bot in dem Kanal, in dem die Erinnerung eingestellt wurde, über die Berechtigungen <code>Kanal anzeigen</code> und <code>Nachrichten senden</code> verfügt.</li>
    <li>Falls die Erinnerung als Direktnachricht eingestellt wurde, stelle sicher, dass der Benutzer Direktnachrichten von Servermitgliedern aktiviert hat.</li>
    <li>Die Erinnerungsdauer muss mindestens 1 Minute in der Zukunft liegen.</li>
  </ul>
</details>

## Gespeicherte Daten {#data-usage}

Folgende Daten werden zu jeder Erinnerung gespeichert:

* Ein automatisch hochzählender, eindeutiger Bezeichner
* Die Discord-Benutzer-ID des Benutzers, der die Erinnerung erstellt hat.
* Der Erinnerungstext
* Die Kanal-ID, an die die Erinnerung gesendet werden soll (oder „DM" für Direktnachrichten)
* Der geplante Termin und die Uhrzeit für die Erinnerung
* Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
