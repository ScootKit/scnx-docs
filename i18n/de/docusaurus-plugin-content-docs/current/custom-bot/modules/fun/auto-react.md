# Automatisches Reagieren

Reagiert automatisch mit ausgewählten Emojis in ausgewählten Kanälen oder wenn ein Benutzer markiert wird.

<ModuleOverview moduleName="auto-react" />

## Funktionen {#features}

* Reagiert in konfigurierten Kanälen oder Kategorien automatisch mit festgelegten Emojis auf jede Nachricht.
* Reagiert auf Nachrichten, wenn ein bestimmter Benutzer erwähnt wird (per @mention).
* Reagiert auf Nachrichten von bestimmten Benutzern (Autoren) oder Benutzern mit bestimmten Rollen.
* Antwortet automatisch mit einer konfigurierten Nachricht, wenn ein bestimmter Benutzer erwähnt wird.
* Unterstützung für mehrere Emojis pro Trigger (getrennt durch `|`).
* Option, nur auf direkte @Erwähnungen oder auch auf Erwähnungen in Antworten zu reagieren.

## Einrichtung {#setup}

1. Aktiviere das Modul in deinem [SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=auto-react&ref=scnx-app-docs).
2. Konfiguriere das Modul wie im [Abschnitt Konfiguration](#configuration) beschrieben, um deine Reaktionen und Antworten einzurichten..
3. Der Bot benötigt die Berechtigung "Reaktionen hinzufügen" in jedem Kanal, in dem er reagieren soll.

## Nutzung {#usage}

Sobald das Modul konfiguriert ist, arbeitet es automatisch ohne jegliche Benutzerinteraktion. Wenn eine Nachricht gesendet wird, prüft der Bot die folgenden Trigger nacheinander und reagiert entsprechend:

* Wenn die Nachricht in einem konfigurierten **Kanal** gesendet wird, reagiert der Bot mit den festgelegten Emojis.
* Wenn die Nachricht in einem Kanal innerhalb einer konfigurierten **Kategorie** gesendet wird, reagiert der Bot mit den festgelegten Emojis.
* Wenn der Autor der Nachricht eine konfigurierte **Rolle** hat, reagiert der Bot mit den festgelegten Emojis.
* Wenn die Nachricht von einem konfigurierten **Autor** gesendet wird, reagiert der Bot mit den festgelegten Emojis.
* Wenn ein konfigurierter **Benutzer in der Nachricht erwähnt wird**, reagiert der Bot mit den festgelegten Emojis.
* Wenn ein konfigurierter **Benutzer erwähnt wird** und eine Antwort konfiguriert ist, antwortet der Bot mit der festgelegten Nachricht.

## Konfiguration {#configuration}

### Konfiguration {#config-main}

In dieser Konfigurationsdatei kannst du automatische Reaktionen konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=auto-react%7Cconfigs/config).

| Feld | Beschreibung |
|-------|-------------|
| Kanäle | Füge Kanäle und die Emojis hinzu, mit denen der Bot auf jede Nachricht reagieren soll. Mehrere Emojis können mit `\|` getrennt werden. |
| Erwähnungen | Füge Benutzer und die Emojis hinzu, mit denen der Bot reagieren soll, wenn sie erwähnt werden. Mehrere Emojis können mit `\|` getrennt werden. |
| Rollen | Füge Rollen hinzu. Wenn ein Benutzer mit einer dieser Rollen eine Nachricht sendet, reagiert der Bot mit den konfigurierten Emojis. Mehrere Emojis können mit `\|` getrennt werden. |
| Autoren | Füge Benutzer und die Emojis hinzu, mit denen der Bot auf deren Nachrichten reagieren soll. Mehrere Emojis können mit `\|` getrennt werden. |
| Kategorien | Füge Kategorien und die Emojis hinzu, mit denen der Bot auf jede Nachricht in Kanälen dieser Kategorie reagieren soll. Mehrere Emojis können mit `\|` getrennt werden. |
| Nur auf @Erwähnungen reagieren? | Wenn aktiviert, reagiert der Bot nur auf direkte @Erwähnungen. Wenn deaktiviert, reagiert der Bot auch auf Erwähnungen in Antworten oder andere Arten von Erwähnungen. |

### Antworten {#config-replies}

In dieser Konfigurationsdatei kannst du automatische Antworten auf Erwähnungen von Benutzern konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=auto-react%7Cconfigs/replies).

| Feld | Beschreibung |
|-------|-------------|
| Nutzer | Der Benutzer, dessen Erwähnung die Antwort auslösen soll. |
| Antwort | Die Antwortnachricht, die der Bot sendet, wenn der konfigurierte Benutzer erwähnt wird. |

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Der Bot reagiert nicht auf Nachrichten</summary>
    <ul>
        <li>Stelle sicher, dass der Bot die Berechtigung "Reaktionen hinzufügen" in dem Kanal hat.</li>
        <li>Stelle sicher, dass die Emojis gültig sind. Wenn benutzerdefinierte Emojis verwendet werden, muss der Bot Zugriff darauf haben.</li>
        <li>Vergewissere dich, dass die korrekten Kanal-, Benutzer- oder Rollen-IDs konfiguriert sind.</li>
    </ul>
</details>
<details>
    <summary>Der Bot reagiert nicht auf Erwähnungen in Antworten</summary>
    <ul>
        <li>Standardmäßig reagiert der Bot nur auf direkte @Erwähnungen. Deaktiviere die Option "Nur auf @Erwähnungen reagieren?", um auch auf Erwähnungen in Antworten zu reagieren.</li>
    </ul>
</details>
