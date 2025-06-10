# Anti-Ghostping

Dieses Modul erkennt Ghost-Pings und sendet eine Nachricht, sobald einer auftritt. Ghost-Pings sind Pings in Nachrichten, die gelöscht werden, aber der Ping wird den Nutzern dennoch angezeigt.

<ModuleOverview moduleName="anti-ghostping" />

## Funktionen {#features}

:::info Erklärung
**Was ist ein Ghost-Ping?**

Pings werden in Discord durch eine hervorgehobene, gelbe Nachricht gekennzeichnet und treten auf, wenn ein Nutzer einen anderen pingt (@username) oder auf eine Nachricht antwortet.

Ein "Ghost-Ping" tritt auf, wenn in einem Kanal ein Nutzer einen anderen pingt und seine Nachricht kurz darauf wieder löscht. Der Ping wird dem anderen Nutzer jedoch weiterhin angezeigt, während die Nachricht selbst nicht mehr existiert.  
Das kann sehr nervig für Nutzer sein, da sie den Kanal öffnen und feststellen, dass diese Nachricht gar nicht mehr existiert.
:::

Dieses Modul erkennt Ghost-Pings und sendet automatisch eine Nachricht in den Kanal, um den gepingten Nutzer über den Verfasser und den Inhalt der gelöschten Nachricht zu informieren.  
Außerdem erkennt dieses Modul Bots, die eine Original-Nachricht durch eine Webhook-Nachricht ersetzen. Des Weiteren kannst du [konfigurieren](#configuration), ob bestimmte Kanäle für Ghost-Pings ignoriert werden sollen.

## Einrichtung {#setup}

1. Stelle sicher, dass dein Bot die Berechtigungen „Nachrichten lesen“, „Nachrichten senden“ und „Nachrichten verwalten“ in den Kanälen besitzt, in denen Ghost-Pings erkannt werden sollen.
2. Aktiviere das Modul – dein Bot sollte nun in der Lage sein, Ghost-Pings zu erkennen.
3. Optional kannst du die Nachricht, ignorierte Kanäle und die Option „Botnachrichten abwarten“ [konfigurieren](#configuration).

## Verwendung {#usage}

Wenn das Modul einen Ghost-Ping in einem Kanal erkennt, wird eine Nachricht in den Kanal gesendet, die den gepingten Nutzer über den Verfasser und den Inhalt der gelöschten Nachricht informiert.

Wenn die [Option](#configuration) „Botnachrichten abwarten“ aktiviert ist, wartet dein Bot nach der Erkennung eines Ghost-Pings etwa zwei Sekunden.  
Falls ein Bot oder Webhook in diesem Zeitraum eine Nachricht sendet, wird die Erkennung für diese Nachricht deaktiviert und keine Benachrichtigung versendet.  
Das ist nützlich für andere Bots, die Original-Nachrichten durch Webhook-Nachrichten ersetzen.

## Konfiguration {#configuration}

Du kannst einige Optionen (unter anderem die Erkennungs-Nachricht) in der [Konfiguration](https://scnx.app/de/glink?page=bot/configuration?query=anti&file=anti-ghostping|config) dieses Moduls einstellen:

| Option                   | Beschreibung                                                                                                                                                                                                                |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Botnachrichten abwarten  | Wenn aktiviert, wartet dein Bot nach der Erkennung eines Ghost-Pings etwa zwei Sekunden. Falls in diesem Zeitraum eine Nachricht von einem anderen Bot oder Webhook gesendet wird, wird keine Erkennungsnachricht gesendet. |
| Ignorierte Kanäle        | In den angegebenen Kanälen und Kategorien werden keine Ghost-Pings erkannt.                                                                                                                                                 |
| Ghostping-Nachricht      | Diese Nachricht wird dein Bot bei Erkennung eines Ghost-Pings im entsprechenden Kanal senden.                                                                                                                               |

## Fehlerbehebung {#troubleshooting}

* Stelle sicher, dass dein Bot die Berechtigungen „Nachrichten lesen“, „Nachrichten senden“ und „Nachrichten verwalten“ in den Kanälen besitzt, in denen Ghost-Pings erkannt werden sollen.
* Überprüfe, ob die gelöschte Nachricht die Voraussetzungen für einen Ghost-Ping erfüllt:
   * Die Nachricht muss einen Ping zu einem anderen Server-Mitglied enthalten. Beachte, dass nicht alle Erwähnungen (@username) Pings sind (z. B. stille Nachrichten).
   * Die Nachricht wurde innerhalb von einer Minute nach dem Senden gelöscht.
   * Die Nachricht wurde nicht in einem [ignorierten Kanal](#configuration) gesendet.
* Beachte, dass auch Nachrichten, die von Team-Mitgliedern gelöscht wurden, als Ghost-Pings erkannt werden können, da der Bot nicht erkennen kann, wer die Nachricht gelöscht hat.

:::info Auf der Suche nach etwas anderem?
Wenn du den Inhalt aller Nachrichten loggen möchtest, kannst du das Modul [Fortgeschrittenes Logging](/de/docs/custom-bot/modules/administration/logging) verwenden.
:::
