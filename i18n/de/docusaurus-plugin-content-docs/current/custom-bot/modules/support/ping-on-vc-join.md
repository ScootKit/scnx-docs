# Sprachkanal-Aktionen

Sende Benachrichtigungen, wenn jemand einem Sprachkanal beitritt, und vergib Rollen an Nutzer, die mit Sprachkanälen verbunden sind.

<ModuleOverview moduleName="ping-on-vc-join" />

## Funktionen {#features}

- Sende eine anpassbare Benachrichtigung in einen Textkanal, wenn ein Nutzer einem bestimmten Sprachkanal beitritt.
- Sende optional eine Direktnachricht an den Nutzer, der dem Sprachkanal beitritt.
- Vergib Rollen an Nutzer, solange sie mit einem beliebigen Sprachkanal verbunden sind, und entferne die Rollen, wenn sie die Verbindung trennen.
- Unterstützung für mehrere Sprachkanal-Konfigurationen, jeweils mit eigener Nachricht und eigenem Benachrichtigungskanal.
- Konfigurierbare Abklingzeit, um Benachrichtigungs-Spam zu verhindern.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=ping-on-vc-join) auf deinem Server.
2. Um **Beitritts-Benachrichtigungen** einzurichten: Öffne die [Konfiguration "Nachricht beim Kanalbeitritt"](https://scnx.app/de/glink?page=bot/configuration?file=ping-on-vc-join%7Cconfig) und erstelle ein neues Konfigurationselement. Füge die zu überwachenden Sprachkanäle hinzu, lege den Benachrichtigungskanal fest und passe die Nachricht an.
3. Um **Sprachkanal-Rollen** einzurichten: Öffne die [Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=ping-on-vc-join%7Cactual-config) und aktiviere "Nutzer, die mit Sprachkanälen verbunden sind, Rollen zuweisen?". Füge die zu vergebenden Rollen im Feld "Rollen für Nutzer, die mit Sprachkanälen verbunden sind" hinzu.
4. Stelle sicher, dass der Bot die Berechtigung **Kanal anzeigen** für die Sprachkanäle sowie die Berechtigungen **Nachrichten senden** und **Links einbetten** im Benachrichtigungskanal hat. Für Sprachkanal-Rollen benötigt der Bot außerdem die Berechtigung **Rollen verwalten**.

## Nutzung {#usage}

- **Beitritts-Benachrichtigungen**: Wenn ein Nutzer einem der überwachten Sprachkanäle beitritt, wartet der Bot 3 Sekunden (um zu bestätigen, dass der Nutzer im Kanal bleibt) und sendet dann die konfigurierte Nachricht in den Benachrichtigungskanal. Ist eine Direktnachricht aktiviert, erhält der Nutzer zusätzlich eine DM.
- **Sprachkanal-Rollen**: Wenn ein Nutzer sich mit einem beliebigen Sprachkanal verbindet, werden ihm die konfigurierten Rollen zugewiesen. Trennt er die Verbindung vollständig (nicht nur beim Wechsel zwischen Kanälen), werden die Rollen entfernt. Bots sind von der Rollenvergabe ausgeschlossen.
- **Abklingzeit**: Ist die Abklingzeit aktiviert, wird die Benachrichtigung für einen bestimmten Kanal innerhalb der Abklingzeit nur einmal gesendet. Ist die Abklingzeit deaktiviert, gilt stattdessen eine Abklingzeit von 5 Minuten pro Nutzer.

## Konfiguration {#configuration}

### Nachricht beim Kanalbeitritt {#configuration-config}

In dieser Konfigurationsdatei richtest du Benachrichtigungen für Sprachkanal-Beitritte ein. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=ping-on-vc-join%7Cconfig).

| Feld                        | Beschreibung                                                                                                                                                                             |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auslöserkanäle              | Sprachkanäle, die die Benachrichtigung auslösen, wenn ein Nutzer beitritt.                                                                                                               |
| Nachricht                   | Die Nachricht, die in den Benachrichtigungskanal gesendet wird, wenn ein Nutzer beitritt. Unterstützt `%tag%` (Nutzer-Tag), `%vc%` (Sprachkanalname) und `%mention%` (Nutzer-Erwähnung). |
| Benachrichtigungskanal      | Der Textkanal, in den die Benachrichtigung gesendet wird.                                                                                                                                |
| Abklingzeit aktivieren?     | Wenn aktiviert, werden Nachrichten nur einmal pro Kanal innerhalb der Abklingzeit gesendet.                                                                                              |
| Abklingzeit-Dauer (Minuten) | Dauer in Minuten, die gewartet wird, bevor eine weitere Nachricht für denselben Kanal gesendet wird. Gilt nur, wenn die Abklingzeit aktiviert ist.                                       |
| Join-PN                     | Wenn aktiviert, sendet der Bot eine Direktnachricht an den Nutzer, der dem Sprachkanal beitritt.                                                                                         |
| Join-PN-Nachricht           | Die DM-Nachricht, die an den Nutzer gesendet wird. Unterstützt `%vc%` (Sprachkanalname). Gilt nur, wenn Join-PN aktiviert ist.                                                           |

### Konfiguration {#configuration-actual-config}

In dieser Konfigurationsdatei richtest du die Rollenvergabe für Sprachkanäle ein. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=ping-on-vc-join%7Cactual-config).

| Feld                                                           | Beschreibung                                                                                                                                |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Nutzer, die mit Sprachkanälen verbunden sind, Rollen zuweisen? | Wenn aktiviert, erhalten Nutzer beim Beitritt zu einem Sprachkanal eine Rolle, die entfernt wird, wenn sie ihn verlassen.                   |
| Rollen für Nutzer, die mit Sprachkanälen verbunden sind        | Die Rollen, die Nutzern zugewiesen werden, solange sie mit einem Sprachkanal verbunden sind. Gilt nur, wenn die obige Option aktiviert ist. |

## Fehlerbehebung {#troubleshooting}

- **Benachrichtigungen werden nicht gesendet**: Prüfe, ob die Sprachkanal-IDs in der Konfiguration korrekt sind und ob der Bot die Berechtigung "Kanal anzeigen" sowohl im Sprachkanal als auch im Benachrichtigungs-Textkanal hat. Prüfe außerdem, ob die ID des Benachrichtigungskanals korrekt ist.
- **Benachrichtigungen werden verzögert gesendet**: Der Bot wartet absichtlich 3 Sekunden, bevor er die Benachrichtigung sendet, um zu bestätigen, dass der Nutzer im Sprachkanal bleibt.
- **DMs werden nicht gesendet**: Manche Nutzer haben DMs deaktiviert. Der Bot überspringt Nutzer, die keine DMs erhalten können, ohne Fehlermeldung.
- **Sprachkanal-Rollen werden nicht zugewiesen oder entfernt**: Stelle sicher, dass der Bot die Berechtigung "Rollen verwalten" hat und dass die höchste Rolle des Bots über den Rollen liegt, die er vergeben soll. Sprachkanal-Rollen werden nicht auf Bots angewendet.
