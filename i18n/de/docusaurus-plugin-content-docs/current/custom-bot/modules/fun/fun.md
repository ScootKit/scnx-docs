# Fun-Befehle

Einige Spaß-Befehle, wie /hug oder /random.

<ModuleOverview moduleName="fun" />

## Funktionen {#features}

- Befehle für soziale Interaktion: `/hug`, `/kiss`, `/slap` und `/pat` mit anpassbaren Bildern und Nachrichten.
- Zufallsgeneratoren: Zufallszahlen, Würfelwürfe, Münzwürfe, IKEA-Namensgenerator und 8ball.
- Alle Nachrichten und Bilder sind vollständig anpassbar.

## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=fun&ref=scnx-app-docs).
2. Passe optional die Nachrichten und Bilder in der [Konfiguration](#configuration) an.

## Nutzung {#usage}

Nutzer können die unten beschriebenen Slash-Befehle verwenden, um miteinander zu interagieren oder zufällige Ergebnisse zu erzeugen. Bei den Befehlen für soziale Interaktion (`/hug`, `/kiss`, `/slap`, `/pat`) muss ein anderer Nutzer ausgewählt werden, du kannst sie nicht auf dich selbst anwenden.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                      | Beschreibung                                                                                                                           |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `/hug user:<Nutzer>`                        | Umarme einen anderen Nutzer. Sendet eine konfigurierbare Nachricht und ein zufälliges Bild aus den konfigurierten Umarmungsbildern.    |
| `/kiss user:<Nutzer>`                       | Küsse einen anderen Nutzer. Sendet eine konfigurierbare Nachricht und ein zufälliges Bild aus den konfigurierten Kussbildern.          |
| `/slap user:<Nutzer>`                       | Schlage einen anderen Nutzer. Sendet eine konfigurierbare Nachricht und ein zufälliges Bild aus den konfigurierten Schlag-Bildern.     |
| `/pat user:<Nutzer>`                        | Tätschele einen anderen Nutzer. Sendet eine konfigurierbare Nachricht und ein zufälliges Bild aus den konfigurierten Tätschel-Bildern. |
| `/random number [min:<Zahl>] [max:<Zahl>]`  | Erzeugt eine Zufallszahl zwischen dem angegebenen Minimal- und Maximalwert (Standard: 1 und 42).                                       |
| `/random ikea-name [syllable-count:<Zahl>]` | Erzeugt einen zufälligen IKEA-Produktnamen mit der angegebenen Silbenanzahl (Standard: 1-4, maximal 20).                               |
| `/random dice`                              | Wirf einen sechsseitigen Würfel.                                                                                                       |
| `/random coinflip`                          | Wirf eine Münze.                                                                                                                       |
| `/random 8ball`                             | Stelle dem magischen 8ball eine Frage und erhalte eine zufällige Antwort.                                                              |
| `Hug` (Nutzer-Kontextmenü)                  | Rechtsklick auf einen Nutzer und "Apps" > "Hug" wählen, um ihn zu umarmen. Funktioniert wie `/hug`.                                    |
| `Kiss` (Nutzer-Kontextmenü)                 | Rechtsklick auf einen Nutzer und "Apps" > "Kiss" wählen, um ihn zu küssen. Funktioniert wie `/kiss`.                                   |
| `Slap` (Nutzer-Kontextmenü)                 | Rechtsklick auf einen Nutzer und "Apps" > "Slap" wählen, um ihn zu schlagen. Funktioniert wie `/slap`.                                 |
| `Pat` (Nutzer-Kontextmenü)                  | Rechtsklick auf einen Nutzer und "Apps" > "Pat" wählen, um ihn zu tätscheln. Funktioniert wie `/pat`.                                  |

Kontextmenü-Befehle sind standardmäßig ausgeschaltet. Siehe [Kontextmenü-Befehle einrichten](/de/docs/custom-bot/commands#context-menus), um sie zu aktivieren.

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du die vom Modul verwendeten Nachrichten und Bilder anpassen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=fun%7Cconfig).

| Feld                  | Beschreibung                                                                          |
| --------------------- | ------------------------------------------------------------------------------------- |
| IKEA-Nachricht        | Nachricht, die gesendet wird, wenn jemand `/random ikea-name` benutzt.                |
| Zufallszahl-Nachricht | Nachricht, die gesendet wird, wenn jemand `/random number` benutzt.                   |
| Würfel-Nachricht      | Nachricht, die gesendet wird, wenn jemand `/random dice` benutzt.                     |
| Münzwurf-Nachricht    | Nachricht, die gesendet wird, wenn jemand `/random coinflip` benutzt.                 |
| Umarmungsnachricht    | Nachricht, die gesendet wird, wenn jemand `/hug` benutzt.                             |
| Umarmungsbilder       | Liste von Bild-URLs, aus denen bei Nutzung von `/hug` zufällig eine ausgewählt wird.  |
| Kuss-Nachrichten      | Nachricht, die gesendet wird, wenn jemand `/kiss` benutzt.                            |
| Kussbilder            | Liste von Bild-URLs, aus denen bei Nutzung von `/kiss` zufällig eine ausgewählt wird. |
| Schlag-Nachricht      | Nachricht, die gesendet wird, wenn jemand `/slap` benutzt.                            |
| Schlag-Bilder         | Liste von Bild-URLs, aus denen bei Nutzung von `/slap` zufällig eine ausgewählt wird. |
| Tätschel-Nachricht    | Nachricht, die gesendet wird, wenn jemand `/pat` benutzt.                             |
| Tätschel-Bilder       | Liste von Bild-URLs, aus denen bei Nutzung von `/pat` zufällig eine ausgewählt wird.  |
| 8ball-Nachricht       | Nachricht, die gesendet wird, wenn jemand `/random 8ball` benutzt.                    |
| 8ball-Antworten       | Liste möglicher Antworten, die der 8ball geben kann.                                  |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Bilder werden nicht angezeigt</summary>
  <ul>
    <li>Stelle sicher, dass die Bild-URLs in der Konfiguration gültig und öffentlich erreichbar sind.</li>
    <li>Der Bot benötigt im Kanal die Berechtigung "Dateien anhängen".</li>
  </ul>
</details>
