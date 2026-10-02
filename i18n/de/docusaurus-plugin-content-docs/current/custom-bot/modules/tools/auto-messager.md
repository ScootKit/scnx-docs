# Automatische Nachrichten

Sende automatische Nachrichten nach Zeitplan - stündlich, täglich oder mit eigenen Cron-Ausdrücken.

<ModuleOverview moduleName="auto-messager" />

## Funktionen {#features}

- Sende automatische Nachrichten auf [stündlicher](#hourly) Basis, optional mit Filterung nach Stunden.
- Sende automatische Nachrichten auf [täglicher](#daily) Basis, optional mit Filterung nach Wochentag oder Tag des Monats.
- Plane Nachrichten mit [Cron-Ausdrücken](#cronjob) für volle Kontrolle über den Zeitpunkt.
- Unterstützung für reine Textnachrichten und Embeds.
- Konfiguriere mehrere automatische Nachrichten, die jeweils in unterschiedliche Kanäle und nach unterschiedlichen Zeitplänen gesendet werden.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=auto-messager) auf deinem Server.
2. Öffne je nach gewünschtem Zeitplan die Konfiguration für eine der drei Zeitplan-Arten:
   - [Stündliche Basis](https://scnx.app/de/glink?page=bot/configuration?file=auto-messager%7Chourly) - für Nachrichten, die jede Stunde oder zu bestimmten Stunden gesendet werden.
   - [Tägliche Basis](https://scnx.app/de/glink?page=bot/configuration?file=auto-messager%7Cdaily) - für Nachrichten, die jeden Tag oder an bestimmten Wochentagen/Tagen des Monats gesendet werden.
   - [Cronjobs (fortgeschritten)](https://scnx.app/de/glink?page=bot/configuration?file=auto-messager%7Ccronjob) - für erweiterte Zeitpläne mit Cron-Ausdrücken.
3. Erstelle ein neues Konfigurationselement und lege den Kanal, die Nachricht und gewünschte Zeitbeschränkungen fest.
4. Stelle sicher, dass der Bot die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" im Zielkanal hat.

## Nutzung {#usage}

Sobald das Modul konfiguriert ist, läuft es automatisch. Nachrichten werden entsprechend der konfigurierten Zeitpläne gesendet, ohne dass Benutzer etwas tun müssen.

### Stündliche Nachrichten {#hourly}

Stündliche Nachrichten werden einmal pro Stunde gesendet. Du kannst einschränken, zu welchen Stunden die Nachricht gesendet wird, indem du die erlaubten Stunden (0-23) angibst. Sind keine Stunden angegeben, wird die Nachricht jede Stunde gesendet. Stündliche Nachrichten werden in Minute 1 der Stunde gesendet (zum Beispiel 14:01).

### Tägliche Nachrichten {#daily}

Tägliche Nachrichten werden einmal pro Tag gesendet. Du kannst einschränken, an welchen Tagen die Nachricht gesendet wird, indem du erlaubte Wochentage (1 = Sonntag, 2 = Montag, ..., 7 = Samstag) und/oder erlaubte Tage des Monats (1-31) angibst. Sind keine Einschränkungen gesetzt, wird die Nachricht jeden Tag gesendet. Tägliche Nachrichten werden um 06:01 Uhr gesendet.

### Cron-Nachrichten {#cronjob}

Für erweiterte Zeitpläne kannst du Cron-Ausdrücke verwenden. Damit hast du volle Kontrolle darüber, wann Nachrichten gesendet werden. Das Format des Cron-Ausdrucks folgt dem Standardformat mit fünf Feldern: `Minute Stunde Tag-des-Monats Monat Wochentag`. Der Standardausdruck ist `1 6 1-31 * *` (jeden Tag um 06:01 Uhr).

## Konfiguration {#configuration}

### Stündliche Basis {#configuration-hourly}

Öffne diese Konfiguration in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=auto-messager%7Chourly).

| Feld                  | Beschreibung                                                                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Kanal                 | Der Kanal, in dem die Nachricht gesendet werden soll.                                                                                    |
| Nachricht             | Der Inhalt der Nachricht, die gesendet werden soll. Unterstützt Embeds.                                                                  |
| Stunden begrenzen auf | Sind eine oder mehrere Stunden (0-23) gesetzt, wird die Nachricht nur zu diesen Stunden gesendet. Leer lassen, um jede Stunde zu senden. |

### Tägliche Basis {#configuration-daily}

Öffne diese Konfiguration in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=auto-messager%7Cdaily).

| Feld                     | Beschreibung                                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Kanal                    | Der Kanal, in dem die Nachricht gesendet werden soll.                                                                  |
| Nachricht                | Der Inhalt der Nachricht, die gesendet werden soll. Unterstützt Embeds.                                                |
| Wochentage begrenzen auf | Sind ein oder mehrere Werte gesetzt (1 = Sonntag, 7 = Samstag), wird die Nachricht nur an diesen Wochentagen gesendet. |
| Tage begrenzen auf       | Sind ein oder mehrere Werte gesetzt (1-31), wird die Nachricht nur an diesen Tagen des Monats gesendet.                |

### Cronjobs (fortgeschritten) {#configuration-cronjob}

Öffne diese Konfiguration in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=auto-messager%7Ccronjob).

| Feld      | Beschreibung                                                                                                                      |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Kanal     | Der Kanal, in dem die Nachricht gesendet werden soll.                                                                             |
| Nachricht | Der Inhalt der Nachricht, die gesendet werden soll. Unterstützt Embeds.                                                           |
| Ausdruck  | Ein Cron-Ausdruck, der festlegt, wann die Nachricht gesendet werden soll. Format: `Minute Stunde Tag-des-Monats Monat Wochentag`. |

## Fehlerbehebung {#troubleshooting}

- **Nachrichten werden nicht gesendet**: Stelle sicher, dass der Bot die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" im Zielkanal hat. Überprüfe außerdem, ob die Kanal-ID in der Konfiguration korrekt ist.
- **Nachrichten werden zu unerwarteten Zeiten gesendet**: Der Bot verwendet die Zeitzone des Servers. Überprüfe deine Werte für Stunde, Tag oder Cron-Ausdruck noch einmal. Bei stündlichen Nachrichten werden die Stunden im 24-Stunden-Format (0-23) angegeben.
- **Cron-Ausdruck funktioniert nicht**: Stelle sicher, dass der Cron-Ausdruck dem Standardformat mit fünf Feldern folgt. Zum Beispiel sendet `0 9 * * 1-5` eine Nachricht um 9:00 Uhr an Wochentagen.
