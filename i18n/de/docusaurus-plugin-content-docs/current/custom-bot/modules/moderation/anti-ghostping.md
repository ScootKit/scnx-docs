# Anti-Ghostping

Dieses Modul erkennt Ghostpings und sendet eine Nachricht, sobald einer auftritt. Ghost-Pings sind Pings in Nachrichten, welche gelöscht werden, aber der Ping immer noch Nutzern angezeigt wird.

<ModuleOverview moduleName="anti-ghostping" />

## Funktionen {#features}

:::info Erklärung
**Was ist ein Ghost-Ping?**

Pings werden in Discord durch eine hervorgehobene, gelbe Nachricht gekennzeichnet und treten auf, wenn ein Nutzer einen anderen pingt (@username) oder auf eine Nachricht geantwortet wird.

Ein "Ghost-Ping" tritt auf, wenn in einem Kanal ein Nutzer einen anderen pingt und seine Nachricht kurz daruaf wieder löscht. Der Ping wird dem anderen Nutzer jedoch weiter angezeigt, während die Nachricht verborgen bleibt.
Das kann sehr nervig für Nutzer sein, da sie den Kanal öffnen und feststellen müssen, dass diese Nachricht gar nicht mehr existiert.
:::

Dieses Modul erkennt Ghost-Pings und sendet automatisch eine Nachricht in den Kanal, um den gepingten Nutzer über den Nutzer und den Inhalt der Nachricht zu informieren.
Außerdem erkennt dieses Modul Bots, welche eine Original-Nachricht durch eine Webhook-Nachricht ersetzen. Des Weiteren kannst du [konfigurieren](#configuration), ob bestimmte Kanäle für Ghost-Pings ignoriert werden sollen.

## Einrichtung {#setup}

1. Stelle sicher, dass dein Bot die Berechtigungen "Nachrichten lesen", "Nachrichten senden" und "Nachrichten verwalten" in den Kanälen besitzt, wo Ghost-Pings erkannt werden sollen.
2. Aktiviere das Modul - dein Bot sollte nun in der Lage sein, Ghost-Pings zu erkennen.
3. Optional kannst du die Nachricht, ignorierte Kanäle und die Option Bots abzuwarten [konfigurieren](#configuration).

## Verwendung {#usage}

Wenn das Modul einen Ghost-Ping in einem Kanal erkennt, wird eine Nachricht in den Kanal gesendet, welche den gepingten Nutzer über den Nutzer und den Inhalt der Nachricht informiert.

Wenn die [Option](#configuration) "Botnachrichten abwarten" aktiviert ist, wird dein Bot ungefähr zwei Sekunden nach Erkennung eines Ghost-Pings warten.
Falls ein Bot oder Webhook eine Nachricht in diesem Zeitraum sendet, wird die Ghost-Ping-Erkennung für diese Nachricht deaktiviert und keine Erkennungs-Nachricht gesendet.
Das ist nützlich für andere Bots, welche originale Nachrichten durch Webhook-Nachrichten ersetzen.

## Konfiguration {#configuration}

Du kannst einige Optionen (unter anderem die Erkennungs-Nachricht) in der [Konfiguration](https://scnx.app/de/glink?page=bot/configuration?query=anti&file=anti-ghostping|config) dieses Moduls einstellen.

| Option                   | Beschreibung                                                                                                                                                                                                                                                                                                                                                    |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Botnachrichten abwarten  | Wenn aktiviert, wird dein Bot ungefähr zwei Sekunden nach der Erkennung eines Ghost-Pings warten. Falls in diesem Zeitraum eine Nachricht von einem anderen Bot oder Webhook gesendet wird, wird diese Aktion nicht als Ghost-Ping erkannt. In der Kategorie "[Verwendung](#usage)" erfährst du mehr darüber, in welchen Situationen dies nützlich sein könnte. |
| Ignorierte Channel       | Der Bot wird in den festgelegten Kanälen und Kategorien keine Ghost-Pings erkennen.                                                                                                                                                                                                                                                                             |
| Ghostping-Nachricht      | Diese Nachricht wird dein Bot bei Erkennung eines Ghost-Pings in den entsprechenden Kanal senden.                                                                                                                                                                                                                                                               |

## Fehlerbehebung {#troubleshooting}

* Stelle sicher, dass dein Bot die Berechtigungen "Nachrichten lesen", "Nachrichten senden" und "Nachrichten verwalten" in den Kanälen besitzt, wo Ghost-Pings erkannt werden sollen.
* Überprüfe, ob die gelöschte Nachricht die Voraussetzungen für einen Ghost-Ping erfüllt:
   * Die Nachricht muss einen Ping zu einem anderen Server-Mitglied enthalten. Bitte beachte, dass nicht alle Erwähnungen (@username) Pings sind (beispielsweise Silent-Nachrichten).
   * Die Nachricht wurde innerhalb von einer Minute nach dem Senden gelöscht.
   * Die Nachricht wurde nicht in einem [ignorierten Kanal](#configuration) gesendet.
* Bitte beachte, dass Nachrichten, welche von Team-Mitgliedern gelöscht wurden, auch als Ghost-Pings erkannt werden können, da der Bot nicht erkennen kann, wer die Nachricht gelöscht hat.

:::info Auf der Suche nach etwas anderem?
Wenn du den Inhalt aller Nachricht loggen möchtest, kannst du das Modul [Fortgeschrittenes Logging](/de/docs/custom-bot/modules/administration/logging) verwenden.
:::
