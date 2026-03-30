# Sticky-Nachrichten

Lasse eine festgelegte Nachricht immer am Ende eines Kanals erscheinen.

<ModuleOverview moduleName="sticky-messages" />

## Funktionen {#features}

* Konfiguriere Nachrichten, die immer als die aktuellste Nachricht in einem Kanal angezeigt werden.
* Wann immer eine neue Nachricht in den Kanal gesendet wird, löscht der Bot automatisch die alte Sticky-Nachricht und postet sie neu.
* Unterstützung für mehrere Sticky-Nachrichten in verschiedenen Kanälen.
* Integrierte Ratenbegrenzung zur Vermeidung von Spam bei schnellem Nachrichtenversand (5 Sekunden Cooldown).
* Optionales Reagieren auf Nachrichten von anderen Bots im Kanal.
* Sticky-Nachrichten unterstützen sowohl reinen Text als auch Embed-Formatierungen.

## Einrichtung {#setup}

1. Stelle sicher, dass der Bot in den Kanälen, in denen Sticky-Nachrichten verwendet werden, über die Berechtigungen `Kanal anzeigen`, `Nachrichten senden`, `Links einbetten`, `Nachrichten verwalten` und `Nachrichtenverlauf anzeigen` verfügt.
2. Konfiguriere deine Sticky-Nachrichten in der [Modul-Konfiguration](#configuration).

## Nutzung {#usage}

Dieses Modul arbeitet automatisch – es gibt keine Befehle. Einmal konfiguriert, hält der Bot die Sticky-Nachricht am Ende jedes konfigurierten Kanals aufrecht.

Wenn eine neue Nachricht in einem Kanal mit einer Sticky-Nachricht gesendet wird:
1. Der Bot löscht die vorherige Sticky-Nachricht.
2. Der Bot postet die Sticky-Nachricht als die aktuellste Nachricht neu.

Wenn Nachrichten schnell hintereinander gesendet werden (innerhalb von 5 Sekunden), wartet der Bot und bündelt das erneute Senden, um eine Ratenbegrenzung zu vermeiden.

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du deine Sticky-Nachrichten verwalten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=sticky-messages%7Cconfigs%2Fsticky-messages).

Jeder Eintrag in der Liste stellt eine Sticky-Nachricht mit den folgenden Feldern dar:

| Feld | Beschreibung |
|-------|-------------|
| Kanal | Der Kanal, in dem die Sticky-Nachricht erscheinen soll. |
| Nachricht | Der anzuzeigende Nachrichtentext. Unterstützt Embed-Formatierung. |
| Antworten auf Bots | Falls aktiviert, wird die Sticky-Nachricht auch dann neu gepostet, wenn Nachrichten von anderen Bots im Kanal gesendet werden. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Die Sticky-Nachricht wird nicht angezeigt</summary>
  <ul>
    <li>Stelle sicher, dass der konfigurierte Kanal existiert und der Bot über die Berechtigungen <code>Kanal anzeigen</code>, <code>Nachrichten senden</code>, <code>Links einbetten</code>, <code>Nachrichten verwalten</code>, und <code>Nachrichtenverlauf anzeigen</code> verfügt.</li>
    <li>Überprüfe, ob deine Sticky-Nachrichten-Konfiguration einen gültigen Nachrichtentext enthält.</li>
  </ul>
</details>

<details>
  <summary>Die Sticky-Nachricht wird nicht aktualisiert, wenn Bots Nachrichten senden</summary>

  Standardmäßig reagiert der Bot nicht auf Nachrichten von anderen Bots. Aktiviere die Option „Antworten auf Bots“ in der Sticky-Nachrichten-Konfiguration für den entsprechenden Kanal.
</details>
