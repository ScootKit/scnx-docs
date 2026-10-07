# Reaktionsrollen

Lass Nutzer sich Rollen auf die gute alte Art selbst zuweisen – ganz einfach durch das Hinzufügen und Entfernen einer Reaktion.

<ModuleOverview moduleName="reaction-roles" />

## Funktionen {#features}

- Ermögliche es Nutzern, sich selbst Rollen zuzuweisen, indem sie mit einem bestimmten Emoji auf eine Nachricht reagieren.
- Automatisches Entfernen von Rollen beim Entfernen der Reaktion.
- Unterstützung für die Zuweisung mehrerer Rollen pro Nachricht durch die Verwendung verschiedener Emojis.
- Unterstützung für die Zuweisung mehrerer Rollen mit einer einzigen Reaktion.
- Der Bot fügt die konfigurierten Reaktionen selbst zur Nachricht hinzu.
- Unterstützt sowohl Standard- als auch benutzerdefinierte Emojis.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=reaction-roles) auf deinem Server.
2. Sende eine Nachricht auf deinem Server, die du für Reaction Roles nutzen möchtest (oder verwende eine bereits bestehende Nachricht). Kopiere den Nachrichtenlink (Rechtsklick auf die Nachricht und „Nachrichtenlink kopieren").
3. Öffne die [Nachrichten-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=reaction-roles%7Cmessages) und erstelle ein neues Konfigurationselement.
4. Füge den Link in das Feld „Nachrichtenlink" ein.
5. Füge im Feld „Reaktionen" Schlüssel-Wert-Paare hinzu, wobei der Schlüssel das Emoji ist (z. B. das Unicode-Emoji oder die Kennung eines benutzerdefinierten Emojis) und der Wert eine oder mehrere Rollen, die du mit der üblichen Rollenauswahl wählst.
6. Stelle sicher, dass der Bot über die Berechtigung **Rollen verwalten** verfügt und dass die höchste Rolle des Bots über den Rollen steht, die du zuweisen möchtest.
7. Der Bot benötigt außerdem die Berechtigungen **Kanal anzeigen** und **Nachrichtenverlauf anzeigen** in dem Kanal, in dem sich die Nachricht befindet.
8. Der Bot fügt nach dem Speichern alle konfigurierten Reaktionen automatisch zur Nachricht hinzu, sodass Mitglieder sie sofort nutzen können.

## Nutzung {#usage}

- Nutzer reagieren einfach mit dem festgelegten Emoji auf die konfigurierte Nachricht, um die zugehörige(n) Rolle(n) zu erhalten.
- Wenn ein Nutzer seine Reaktion entfernt, werden die zugehörigen Rollen automatisch wieder entzogen.
- Der Bot fügt der Nachricht seine eigene Reaktion hinzu, sobald der erste Nutzer reagiert. Dies dient als visueller Indikator.

## Konfiguration {#configuration}

Dies ist die Konfigurationsdatei für das Modul. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=reaction-roles%7Cmessages).

| Feld            | Beschreibung                                                                                                                                                                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nachrichtenlink | Der Link zur Nachricht, die für die Rollenvergabe genutzt werden soll.                                                                                                                                                                               |
| Reaktionen      | Schlüssel-Wert-Paare, wobei der Schlüssel das Emoji ist (z. B. das Unicode-Emoji oder die Kennung eines benutzerdefinierten Emojis) und der Wert eine oder mehrere Rollen. Bestehende kommagetrennte Rollenauswahlen wurden automatisch umgewandelt. |

## Fehlerbehebung {#troubleshooting}

- **Der Bot reagiert nicht auf Reaktionen**: Stelle sicher, dass der Bot im Kanal über die Berechtigungen „Kanal anzeigen" und „Nachrichtenverlauf anzeigen" verfügt. Überprüfe außerdem, ob der Nachrichtenlink in der Konfiguration auf die Nachricht zeigt, auf die du reagierst.
- **Rollen werden nicht zugewiesen**: Stelle sicher, dass der Bot über die Berechtigung „Rollen verwalten" verfügt und dass die höchste Rolle des Bots oberhalb der Rollen positioniert ist, die er zuweisen soll. Überprüfe zudem, ob die Rollen in der Konfiguration korrekt sind.
- **Benutzerdefinierte Emojis funktionieren nicht**: Stelle sicher, dass die Emoji-Kennung in der Konfiguration exakt dem Format entspricht, das Discord intern verwendet. Bei benutzerdefinierten Emojis ist dies normalerweise der Name und die ID im Format `Name:ID`.
- **Ziehe in Erwägung, stattdessen einen Selbst-Rollen-Knopf zu verwenden.**: Für eine bessere Benutzererfahrung solltest du die Verwendung von Selbst-Rollen-Knöpfen und Rollen-Elementen in Betracht ziehen. Diese sind über das [Als Bot anmelden](/docs/custom-bot/login-as-bot/) Feature auf SCNX verfügbar und bieten eine modernere Benutzeroberfläche.
