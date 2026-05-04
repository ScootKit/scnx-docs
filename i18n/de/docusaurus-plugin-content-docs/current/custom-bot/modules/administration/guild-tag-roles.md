# Server-Tag-Rollen

Belohne Benutzer, die den Server-Tag deines Servers ausrüsten, mit Rollen.

<ModuleOverview moduleName="guild-tag-roles" />

## Funktionen {#features}

- Weise Benutzern, die den Server-Tag deines Servers ausgerüstet haben und anzeigen lassen, automatisch Rollen zu.
- Entferne die zugewiesenen Rollen automatisch, wenn ein Benutzer das Server-Tag ablegt oder ausblendet.
- Echtzeit-Erkennung über User-Update-Events, sobald Discord Änderungen am Server-Tag erkennt.
- Regelmäßiger vollständiger Sync alle 3 Stunden, um verpasste Änderungen zu erfassen.

## Einrichtung {#setup}

1. Stelle sicher, dass dein Server in den Discord-Servereinstellungen ein Server-Tag eingerichtet hat.
2. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=guild-tag-roles) auf deinem Server.
3. Öffne die [Modul-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=guild-tag-roles%7Cconfig) und füge die Rollen hinzu, die Benutzern mit ausgerüstetem Server-Tag zugewiesen werden sollen.
4. Stelle sicher, dass der Bot über die Berechtigung **Rollen verwalten** verfügt und dass die höchste Rolle des Bots über den Rollen steht, die du zuweisen möchtest.

## Nutzung {#usage}

Einmal konfiguriert, arbeitet das Modul automatisch. Wenn ein Benutzer das Server-Tag deines Servers ausrüstet oder ablegt, versucht der Bot, die konfigurierten Rollen in Echtzeit zuzuweisen oder zu entfernen. Zusätzlich wird beim Bot-Start sowie alle 3 Stunden ein vollständiger Sync aller Mitglieder durchgeführt, um sicherzustellen, dass die Rollen korrekt bleiben.

## Konfiguration {#configuration}

Dies ist die Konfigurationsdatei für das Modul. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=guild-tag-roles%7Cconfig).

| Feld | Beschreibung                                                                       |
| ----- | --------------------------------------------------------------------------------- |
| Rollen | Rollen, die Benutzern zugewiesen werden sollen, die das Server-Tag deines Servers ausgerüstet haben und anzeigen lassen. |

## Fehlerbehebung {#troubleshooting}

- **Rollen werden nicht zugewiesen**: Stelle sicher, dass der Bot über die Berechtigung „Rollen verwalten“ verfügt und dass die höchste Rolle des Bots über den Rollen steht, die du zuweisen möchtest. Überprüfe außerdem, ob der Benutzer das Server-Tag sowohl ausgerüstet als auch auf „sichtbar“ gestellt hat.
- **Rollen werden nicht sofort aktualisiert**: Die Echtzeit-Erkennung hängt davon ab, dass Discord Daten zum Server-Tag in User-Update-Events sendet. Falls eine Änderung nicht sofort erfasst wird, korrigiert der regelmäßige Sync (alle 3 Stunden) dies nach.
- **Das Modul scheint Änderungen am Server-Tag nicht zu erkennen**: Stelle sicher, dass für deinen Discord-Server in den Server-Einstellungen tatsächlich ein Server-Tag konfiguriert wurde. Der Bot prüft, ob der primäre Server des Benutzers mit deinem Server übereinstimmt.
