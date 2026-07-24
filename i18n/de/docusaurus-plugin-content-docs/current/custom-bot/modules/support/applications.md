# Bewerbungen

Lass deine Mitglieder sich für Teampositionen, Partnerschaften und mehr bewerben - mit anpassbaren Fragen und einem Annahme- oder Ablehnungs-Workflow.

<ModuleOverview moduleName="applications" />

## Funktionen {#features}

- Erstelle mehrere Bewerbungs-Kategorien, jede mit eigenen Fragen, eigenem Benachrichtigungs-Kanal und eigenen Rollen.
- Nutzer starten den Bewerbungsprozess über den Befehl `/apply` oder über ein Drop-Down-Menü in einem konfigurierten Informationskanal.
- Fragen werden dem Bewerber per PN gesendet und die Antworten nacheinander gesammelt.
- Teammitglieder können Bewerbungen direkt im Benachrichtigungs-Kanal per Knopf annehmen oder ablehnen.
- Angenommene Nutzer können automatisch die konfigurierten Rollen erhalten.
- Optional kannst du bestimmte Rollen verlangen, um sich zu bewerben oder um Bewerbungen zu bearbeiten.
- Einstellbare Abklingzeit zwischen Bewerbungen, um Spam zu verhindern.
- Optional kann ein verkürzter Bewerbungsinhalt direkt in der Discord-Benachrichtigungsnachricht angezeigt werden.
- Anpassbare Nachrichten für jede Phase des Prozesses (Fragen, Absende-Bestätigung, Annahme, Ablehnung).

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=applications) auf deinem Server.
2. Öffne die [Bewerbungen-Kategorien-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=applications%7Ccategories) und erstelle mindestens eine Bewerbungs-Kategorie. Lege den Kategorie-Namen, den Benachrichtigungs-Kanal, die Fragen und alle bei Annahme zu vergebenden Rollen fest.
3. Öffne die [Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=applications%7Cconfig), um Nachrichten und Abklingzeit-Einstellungen anzupassen und optional einen Informationskanal mit Drop-Down-Menü für einen einfachen Zugang einzurichten.
4. Wenn du die Informationskanal-Funktion nutzen willst, setze den "Bewerbungsinfokanal" auf einen Textkanal. Der Bot sendet dann eine Nachricht mit einem Drop-Down-Menü, über das Nutzer eine Kategorie auswählen und sich bewerben können.
5. Stelle sicher, dass der Bot in den Benachrichtigungs-Kanälen die Berechtigungen **Kanal anzeigen** und **Nachrichten senden** hat. Für die Rollenvergabe bei Annahme benötigt der Bot **Rollen verwalten**, wobei seine höchste Rolle über den zu vergebenden Rollen stehen muss.

## Nutzung {#usage}

- Nutzer können sich mit `/apply` und der Auswahl einer Kategorie bewerben oder über das Drop-Down-Menü im Informationskanal (falls konfiguriert).
- Der Bot sendet dem Nutzer die erste Frage per PN. Der Nutzer antwortet mit einer Nachricht und der Bot sendet die nächste Frage. Das geht so weiter, bis alle Fragen beantwortet sind.
- Nutzer können ihre Bewerbung jederzeit abbrechen, indem sie während des PN-Prozesses `!cancel` senden.
- Eine Bewerbungs-Sitzung wird erst nach 30 Minuten Inaktivität beendet. Der Timer wird mit jeder Antwort zurückgesetzt, sodass lange Bewerbungen nicht mehr mitten im Prozess ablaufen - nur wirklich abgebrochene Sitzungen werden bereinigt. Wenn eine Sitzung abläuft, schickt der Bot dem Nutzer eine PN, um ihn zu informieren, dass die Bewerbung abgelaufen ist und dass er mit `/apply` von vorne beginnen kann.
- Sobald alle Fragen beantwortet sind, wird die Bewerbung eingereicht. Der Bewerber erhält eine Bestätigungsnachricht mit einem Link zu seinen eingereichten Antworten und eine Benachrichtigung wird in den konfigurierten Benachrichtigungs-Kanal gesendet.
- Im Benachrichtigungs-Kanal können Teammitglieder die Bewerbung ansehen und die Knöpfe "Annehmen" oder "Ablehnen" drücken. Sie können optional einen Grund angeben. Sobald eine Bewerbung bearbeitet wurde, werden deren eigene Annehmen- und Ablehnen-Knöpfe deaktiviert.
- Der Bewerber wird per PN über die Annahme oder Ablehnung informiert, inklusive Grund, falls einer angegeben wurde.
- Wenn für die Kategorie Rollen konfiguriert sind, erhalten angenommene Bewerber diese Rollen automatisch.
- Nutzer können keine neue Bewerbung einreichen, solange sie eine offene Bewerbung haben. Wenn eine Abklingzeit konfiguriert ist, müssen Nutzer zusätzlich die angegebene Dauer zwischen den Einreichungen warten.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                       | Beschreibung                                                                                              |
| ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| `/apply category:<Category>` | Starte eine Bewerbung in der angegebenen Kategorie. Das Kategorie-Feld unterstützt Autovervollständigung. |

## Konfiguration {#configuration}

### Bewerbungen-Kategorien {#configuration-categories}

In dieser Konfigurationsdatei richtest du Bewerbungs-Kategorien mit ihren Fragen und Einstellungen ein. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=applications%7Ccategories).

| Feld                                           | Beschreibung                                                                                                                                        |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bewerbungs-Kategorie-Name                      | Der Name der Bewerbungs-Kategorie, der Nutzern angezeigt wird. Sollte eindeutig sein und nach eingegangenen Bewerbungen nicht mehr geändert werden. |
| Benachrichtigungs-Kanal                        | Kanal, in den eingereichte Bewerbungen zur Prüfung durch das Team gesendet werden. Hier kann das Team Bewerbungen annehmen oder ablehnen.           |
| Fragen                                         | Die Fragen, die Nutzern der Reihe nach gestellt werden. Nutzer beantworten jede Frage per PN mit bis zu 4000 Zeichen (2000 für Nicht-Nitro-Nutzer). |
| Rollen                                         | Rollen, die Nutzern gegeben werden, deren Bewerbung angenommen wurde.                                                                               |
| Rolle verlangen, um Bewerbungen zu bearbeiten? | Wenn aktiviert, können nur Nutzer mit bestimmten Rollen Bewerbungen in dieser Kategorie annehmen oder ablehnen.                                     |
| Rollen, die Bewerbungen bearbeiten können      | Nur Nutzer mit einer dieser Rollen können Bewerbungen annehmen oder ablehnen (gilt nur, wenn die obige Option aktiviert ist).                       |
| Rolle zum Bewerben verlangen?                  | Wenn aktiviert, benötigen Nutzer eine der konfigurierten Rollen, um sich in dieser Kategorie zu bewerben.                                           |
| Zum Bewerben notwendige Rollen                 | Nur Nutzer mit einer dieser Rollen können sich in dieser Kategorie bewerben (gilt nur, wenn die obige Option aktiviert ist).                        |
| "Notwendige Rolle fehlt" Nachricht             | Nachricht, die Nutzern angezeigt wird, die sich bewerben wollen, aber nicht die notwendigen Rollen haben.                                           |
| Emoji                                          | Emoji für diese Kategorie, das im Drop-Down-Menü der Informationsnachricht verwendet wird, falls aktiviert.                                         |
| Kategoriebeschreibung                          | Beschreibung für diese Kategorie, die im Drop-Down-Menü der Informationsnachricht verwendet wird, falls aktiviert.                                  |

### Konfiguration {#configuration-config}

In dieser Konfigurationsdatei kannst du Nachrichten und Einstellungen anpassen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=applications%7Cconfig).

| Feld                                             | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frage-Nachricht                                  | Die Nachricht, die Nutzern mit der zu beantwortenden Frage gesendet wird. Unterstützt `%question%`, `%applicationName%`, `%currentQuestionNumber%` und `%amountOfTotalQuestions%`.                                                                                                                                                                                                                               |
| Abgesendet-Nachricht                             | Die Bestätigungsnachricht, die Nutzern gesendet wird, nachdem sie ihre Bewerbung eingereicht haben. Unterstützt `%applicationName%` und `%applicationContentURL%`.                                                                                                                                                                                                                                               |
| Benachrichtigung-Nachricht                       | Die Nachricht, die in den Benachrichtigungs-Kanal gesendet wird, wenn eine Bewerbung eingeht. Unterstützt `%applicationName%`, `%userTag%`, `%userID%` und `%applicationContentURL%`. Sowohl das klassische Embed-Format als auch der [V4-Nachrichten-Editor](/docs/scnx/guilds/message-editor#v4) werden unterstützt.                                                                                           |
| Team- Ablehnung / Annahme Grund zwingen          | Wenn aktiviert, müssen Teammitglieder beim Annehmen oder Ablehnen einer Bewerbung einen Grund angeben.                                                                                                                                                                                                                                                                                                           |
| Verkürzten Bewerbungsinhalt in Discord anzeigen? | Wenn aktiviert, wird der Benachrichtigungsnachricht eine Vorschau des Bewerbungsinhalts angehängt. Bei der klassischen Embed-basierten Benachrichtigung wird sie als zusätzliches Embed hinzugefügt; bei einer [V4-Benachrichtigung](/docs/scnx/guilds/message-editor#v4) wird sie als Container mit einem Text-Display pro Frage angehängt (bis zu 10 Fragen). Lange Antworten werden in beiden Fällen gekürzt. |
| Angenommen-Nachricht                             | Nachricht, die an den Nutzer gesendet wird, wenn seine Bewerbung angenommen wird. Unterstützt `%applicationName%` und `%reason%`.                                                                                                                                                                                                                                                                                |
| Abgelehnt-Nachricht                              | Nachricht, die an den Nutzer gesendet wird, wenn seine Bewerbung abgelehnt wird. Unterstützt `%applicationName%` und `%reason%`.                                                                                                                                                                                                                                                                                 |
| Cooldown zwischen Bewerbungen aktivieren?        | Wenn aktiviert, müssen Nutzer eine bestimmte Dauer zwischen dem Einreichen von Bewerbungen warten.                                                                                                                                                                                                                                                                                                               |
| Cooldown Länge                                   | Die Zeit, die Nutzer zwischen Bewerbungen warten müssen (z. B. "14d" für 14 Tage).                                                                                                                                                                                                                                                                                                                               |
| Cooldown Nachricht                               | Nachricht, die Nutzern angezeigt wird, die sich bewerben wollen, während sie noch in der Abklingzeit sind. Unterstützt `%timeRelative%` und `%timeAbsolute%`.                                                                                                                                                                                                                                                    |
| Bewerbungsinfokanal                              | Kanal, in den eine Nachricht mit einem Drop-Down-Menü gesendet wird, über das Nutzer sich durch Auswahl einer Kategorie bewerben können.                                                                                                                                                                                                                                                                         |
| Informationsnachricht                            | Die Nachricht, die im Informationskanal über dem Kategorie-Drop-Down-Menü gesendet wird.                                                                                                                                                                                                                                                                                                                         |

## Fehlerbehebung {#troubleshooting}

- **Nutzer können sich nicht bewerben**: Stelle sicher, dass der Nutzer PNs aktiviert hat, da der Bewerbungsprozess in PNs stattfindet. Prüfe außerdem, dass der Nutzer keine offene Bewerbung hat und sich nicht in der Abklingzeit befindet.
- **Der Bot sagt, der Nutzer hat eine offene Bewerbung**: Eine vorherige Bewerbung befindet sich möglicherweise noch im Status "eingereicht". Bearbeite sie (annehmen oder ablehnen), bevor der Nutzer eine neue einreichen kann.
- **Annahme-/Ablehnungs-Knöpfe funktionieren nicht**: Wenn "Rolle verlangen, um Bewerbungen zu bearbeiten" aktiviert ist, stelle sicher, dass das Teammitglied eine der konfigurierten Rollen hat. Andernfalls kann jeder Nutzer mit Zugriff auf den Benachrichtigungs-Kanal Bewerbungen bearbeiten.
- **Rollen werden bei Annahme nicht vergeben**: Stelle sicher, dass der Bot die Berechtigung "Rollen verwalten" hat und dass die höchste Rolle des Bots über den zu vergebenden Rollen steht.
- **Die Nachricht im Informationskanal wird nicht angezeigt**: Stelle sicher, dass du den "Bewerbungsinfokanal" in der Konfiguration gesetzt hast und dass der Bot in diesem Kanal die Berechtigung hat, Nachrichten und Embeds zu senden. Lade die Bot-Konfiguration nach Änderungen neu.

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jede Bewerbung gespeichert:

- Die Nutzer-ID des Bewerbers
- Der Status der Bewerbung (eingereicht, angenommen, abgelehnt)
- Der Name der Kategorie
- Die Nutzer-ID des Teammitglieds, das die Bewerbung bearbeitet hat
- Die Nachrichten-ID und Kanal-ID der Einreichung
- Die Antworten auf alle Fragen
- Metadaten über den Eintrag (Datum der Erstellung und letzten Aktualisierung)

Zusätzlich werden Referenzen der Informationsnachricht (Kanal-ID und Nachrichten-ID) gespeichert, um die Drop-Down-Menü-Nachrichten zu verwalten.

Um alle von diesem Modul gespeicherten Daten zu entfernen, [lösche die Modul-Datenbank](/docs/custom-bot/additional-features#reset-module-database).
