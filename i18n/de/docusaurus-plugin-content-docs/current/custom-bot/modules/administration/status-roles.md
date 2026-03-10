# Status-Roles

Ein einfaches Modul, um Nutzer mit Rollen zu belohnen, die bestimmte Wörter in ihrem benutzerdefinierten Discord-Status haben.

<ModuleOverview moduleName="status-roles" />

## Funktionen {#features}

* Weise Nutzern automatisch Rollen zu, die bestimmte Wörter oder Phrasen in ihrem benutzerdefinierten Discord-Status haben.
* Entferne automatisch die zugewiesenen Rollen, wenn ein Nutzer seinen Status ändert und die erforderlichen Wörter nicht mehr enthalten sind.
* Entferne optional alle anderen (nicht verwalteten) Rollen von Nutzern, wenn sie die Status-Kriterien erfüllen.
* Option, Offline-Nutzer zu ignorieren, um das Entfernen von Rollen beim Ausloggen zu verhindern (empfohlen für größere Server).

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=status-roles) auf deinem Server.
2. Öffne die [Modul-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=status-roles%7Cconfig) und füge die Wörter, die Nutzer in ihrem Status haben sollten, in das Feld „Wörter“ ein.
3. Füge die Rollen, die entsprechenden Nutzern zugewiesen werden sollen, im Feld „Rollen“ hinzu.
4. Stelle sicher, dass der Bot über die Berechtigung **Rollen verwalten** verfügt und dass die höchste Rolle des Bots über den Rollen steht, die du zuweisen möchtest.
5. Der Bot benötigt außerdem den **Presence Intent**, um Statusänderungen zu erkennen. Dieser ist bei SCNX standardmäßig aktiviert.
6. Wenn dein Server mehr als 500 Mitglieder hat, wird empfohlen, die Option „Rollen von offline Nutzern nicht entfernen“ zu aktivieren, um einen fehlerhaften Rollenentzug zu verhindern.

## Nutzung {#usage}

* Einmal konfiguriert, arbeitet das Modul automatisch. Wenn ein Nutzer seinen benutzerdefinierten Discord-Status aktualisiert, prüft der Bot, ob eines der konfigurierten Wörter darin vorkommt.
* Wenn eine Übereinstimmung gefunden wird, werden dem Nutzer die konfigurierten Rollen zugewiesen.
* Wenn der Nutzer seinen Status ändert und die Wörter nicht mehr vorhanden sind, werden die Rollen entfernt (es sei denn, der Nutzer ist offline und die Option „Rollen von offline Nutzern nicht entfernen“ ist aktiviert).
* Bei der Wortübereinstimmung wird nicht zwischen Groß- und Kleinschreibung unterschieden.

## Konfiguration {#configuration}

Dies ist die Konfigurationsdatei für das Modul. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=status-roles%7Cconfig).

| Feld | Beschreibung |
|-------|-------------|
| Statusinhalt | Wörter, die Nutzer in ihrem benutzerdefinierten Status haben sollten. Der Bot prüft, ob eines dieser Wörter im Status des Nutzers vorkommt (Groß-/Kleinschreibung wird nicht berücksichtigt). |
| Rollen | Rollen, die Nutzern zugewiesen werden, wenn eines der konfigurierten Wörter in ihrem Status vorkommt. |
| Entferne alle anderen Rollen | Falls aktiviert, werden alle anderen (nicht vom Modul verwalteten) Rollen vom Nutzer entfernt, sobald dieser die Status-Kriterien erfüllt. |
| Rollen von offline Nutzern nicht entfernen | Falls aktiviert, werden die Status-Rollen nicht von Nutzern entfernt, die offline sind. Empfohlen für Server mit mehr als 500 Mitgliedern. |

## Fehlerbehebung {#troubleshooting}

* **Rollen werden nicht zugewiesen**:Stelle sicher, dass der Bot über die Berechtigung „Rollen verwalten“ verfügt und dass die höchste Rolle des Bots über den Rollen steht, die du zuweisen möchtest. Überprüfe außerdem, ob die Wörter in der Konfiguration mit denen übereinstimmen, die Nutzer in ihrem benutzerdefinierten Status haben.
* **Rollen werden entfernt, wenn Nutzer offline gehen**: Aktiviere die Option „Rollen von Offline-Nutzern nicht entfernen“ in der Konfiguration. Wenn Nutzer offline gehen, entfernt Discord deren Statusinformationen, was den Bot zu der Annahme führt, dass die Bedingungen nicht mehr erfüllt sind.
* **Das Modul scheint keine Statusänderungen zu erkennen**: Stelle sicher, dass der „Presence Intent“ für deinen Bot aktiviert ist. Auf SCNX ist dieser standardmäßig aktiviert.
