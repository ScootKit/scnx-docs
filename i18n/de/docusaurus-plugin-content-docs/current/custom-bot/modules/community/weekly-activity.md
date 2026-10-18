# Wöchentliche Aktivität

Belohne die aktivsten Mitglieder der Woche: Das Modul bewertet Nachrichten-, Sprach- und Reaktionsaktivität, postet eine wöchentliche Bestenliste und kann den besten Mitgliedern bis zum nächsten Durchlauf eine Rolle geben.

<ModuleOverview moduleName="weekly-activity" />

## Funktionen {#features}

- Bewertet Aktivität mit eigenen Punkten. Das Modul funktioniert eigenständig und benötigt das [Level-System](/de/docs/custom-bot/modules/community/levels) nicht.
- Punkte für Nachrichten, Sprachaktivität und Reaktionen. Jede Quelle kann deaktiviert werden und hat einen eigenen Punktwert.
- Postet an einem Wochentag und zu einer Uhrzeit deiner Wahl eine Bestenliste der aktivsten Mitglieder in einem Kanal deiner Wahl.
- Vergibt optional eine Belohnungsrolle an die besten Mitglieder der Woche und entfernt sie beim nächsten Durchlauf wieder, sodass die Rolle immer zeigt, wer in der letzten Woche am aktivsten war.
- Jede Woche beginnt bei null, sodass inaktive Mitglieder mit hohem Level nicht die Mitglieder verdrängen, die gerade aktiv sind.
- Kanäle und Rollen können von der Bewertung ausgeschlossen werden.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=weekly-activity) auf deinem Server.
2. Öffne die [Konfiguration](#configuration) und wähle den „Bestenlistenkanal" aus. Stelle sicher, dass der Bot dort Nachrichten senden kann.
3. Wähle den „Wochentag" und die „Uhrzeit (HH:MM)", zu denen die Bestenliste gepostet wird. Die Uhrzeit gilt in der Zeitzone deines Servers.
4. Lege fest, welche Aktivitäten Punkte bringen und wie viele. Siehe [So werden Punkte gesammelt](#points).
5. Wenn du eine Belohnungsrolle möchtest, erstelle sie auf deinem Server und wähle sie als „Belohnungsrolle" aus. Der Bot benötigt die Berechtigung `Rollen verwalten` und seine höchste Rolle muss über der Belohnungsrolle stehen.

## So werden Punkte gesammelt {#points}

Punkte werden nur für die aktuelle Woche gesammelt. Nach jedem wöchentlichen Durchlauf werden sie zurückgesetzt.

- **Nachrichten**: Ein Mitglied erhält „Punkte pro Nachricht" für jede Nachricht. Zwei Nachrichten desselben Mitglieds zählen nur beide, wenn mindestens die „Nachrichten-Abklingzeit (Sekunden)" zwischen ihnen liegt. Bots und Nachrichten außerhalb deines Servers werden ignoriert.
- **Sprachaktivität**: Ein Mitglied erhält „Punkte pro Sprachminute" für jede Minute in einem Sprachkanal. Die Zeit zählt nur, solange das Mitglied nicht allein mit anderen Mitgliedern ist, nicht stummgeschaltet oder taub geschaltet ist und sich nicht im AFK-Kanal oder in einem Stage-Kanal befindet.
- **Reaktionen**: Ein Mitglied erhält „Punkte pro Reaktion", wenn es auf eine Nachricht reagiert. Jedes Mitglied erhält pro Nachricht höchstens einmal Punkte, egal wie viele Emojis es hinzufügt. Reaktionen von Bots, Reaktionen auf eigene Nachrichten und das Entfernen einer Reaktion werden ignoriert.

Kanäle in „Gesperrte Kanäle" und Mitglieder mit einer Rolle aus „Gesperrte Rollen" sammeln nie Punkte.

## Nutzung {#usage}

Am eingestellten Wochentag und zur eingestellten Uhrzeit macht der Bot Folgendes:

1. Er zählt die Punkte der Woche und ordnet die Mitglieder in einer Rangliste. Mitglieder, die den Server verlassen haben, und Mitglieder ohne Punkte werden nicht aufgeführt.
2. Er gibt den besten Mitgliedern die „Belohnungsrolle" und entfernt sie bei den bisherigen Gewinnern.
3. Er postet die besten Mitglieder im Bestenlistenkanal. Mitglieder mit gleicher Punktzahl werden danach geordnet, wer zuerst aktiv war.
4. Er startet eine neue Woche.

Hat niemand Punkte gesammelt, wird nichts gepostet und die Belohnungsrolle wird bei den bisherigen Gewinnern entfernt.

Ist der Bot zur geplanten Zeit offline, führt er die Bestenliste trotzdem aus, wenn er innerhalb von 6 Stunden zurück ist. Ist er später zurück, wird diese Woche übersprungen und eine neue Woche beginnt, sodass eine Bestenliste nie zwei Wochen umfasst.

Du kannst die Belohnungsrolle jederzeit ändern. Beim nächsten Durchlauf entfernt der Bot die alte Rolle bei den bisherigen Gewinnern, bevor er die neue vergibt. Rollen, die du Mitgliedern von Hand gegeben hast, bleiben unberührt.

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du das Modul einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=weekly-activity%7Cconfigs/config).

| Feld                               | Beschreibung                                                                                                                                                    |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Punkte für Nachrichten?            | Wenn aktiviert, sammeln Mitglieder Punkte für das Senden von Nachrichten.                                                                                       |
| Punkte pro Nachricht               | Punkte, die ein Mitglied für jede gezählte Nachricht erhält.                                                                                                    |
| Nachrichten-Abklingzeit (Sekunden) | Mindestabstand zwischen zwei Nachrichten desselben Mitglieds, die beide Punkte bringen.                                                                         |
| Punkte für Sprachaktivität?        | Wenn aktiviert, sammeln Mitglieder Punkte für Zeit in Sprachkanälen zusammen mit anderen Mitgliedern.                                                           |
| Punkte pro Sprachminute            | Punkte, die ein Mitglied für jede Minute berechtigter Sprachaktivität erhält.                                                                                   |
| Punkte für Reaktionen?             | Wenn aktiviert, sammeln Mitglieder Punkte für Reaktionen auf Nachrichten anderer Mitglieder. Pro Nachricht gibt es höchstens einmal Punkte.                     |
| Punkte pro Reaktion                | Punkte, die ein Mitglied für eine gezählte Reaktion erhält.                                                                                                     |
| Gesperrte Kanäle                   | Aktivität in diesen Kanälen bringt keine Punkte.                                                                                                                |
| Gesperrte Rollen                   | Mitglieder mit einer dieser Rollen sammeln keine Punkte.                                                                                                        |
| Bestenlistenkanal                  | Kanal, in dem die wöchentliche Bestenliste gepostet wird.                                                                                                       |
| Wochentag                          | Wochentag, an dem die Bestenliste gepostet wird.                                                                                                                |
| Uhrzeit (HH:MM)                    | Uhrzeit (in der Zeitzone des Servers), zu der die Bestenliste gepostet wird. Ist der Wert keine gültige Uhrzeit, wird `20:00` verwendet.                        |
| Größe der Bestenliste              | Wie viele Mitglieder in der Bestenliste angezeigt werden (1 bis 50).                                                                                            |
| Belohnungsrolle                    | Rolle, die die aktivsten Mitglieder der Woche erhalten und die beim nächsten wöchentlichen Durchlauf wieder entfernt wird. Leer lassen, um sie zu deaktivieren. |
| Mitglieder mit Belohnungsrolle     | Wie viele der besten Mitglieder die Belohnungsrolle erhalten (0 bis 50).                                                                                        |
| Bestenlisten-Nachricht             | Die Nachricht, die jede Woche gepostet wird. Es wird niemand gepingt, unabhängig vom Inhalt.                                                                    |
| Benutzeranzeigemodus               | Wie Mitglieder in der Bestenliste angezeigt werden: Tag, Erwähnung oder Nickname.                                                                               |
| Zeilenformat                       | Die Zeile, die für jedes Mitglied in der Bestenliste angezeigt wird.                                                                                            |

## Beitrag anpassen {#customizing}

Die „Bestenlisten-Nachricht" ist ein normales Nachrichtenfeld, du kannst also Titel, Farbe und Bilder ändern oder ein anderes Layout wählen, genau wie in anderen Modulen. Standardmäßig wird die Bestenliste als orangefarbene Karte mit dem Titel „Wöchentliche Aktivitäts-Highlights" gepostet.

Diese Platzhalter kannst du in der Nachricht verwenden:

| Platzhalter     | Wird ersetzt durch                                                                                                                                                                                   |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `%leaderboard%` | Die Rangliste der Mitglieder, eine Zeile pro Mitglied.                                                                                                                                               |
| `%week%`        | Die soeben beendete Woche als Zeitraum, zum Beispiel „11.10.2026 - 18.10.2026". Discord zeigt die Daten in der Sprache und im Format des jeweiligen Betrachters an.                                  |
| `%winners%`     | Erwähnungen der Mitglieder, die die Belohnungsrolle erhalten haben. Mitglieder, denen der Bot die Rolle nicht geben konnte, werden nicht aufgeführt. Leer, wenn keine „Belohnungsrolle" gewählt ist. |

Mit dem „Benutzeranzeigemodus" legst du fest, wie Mitglieder in der Liste erscheinen:

- **Tag**: Der Benutzername, zum Beispiel `alex`. Empfohlen für große Server.
- **Erwähnung**: Eine klickbare `@Erwähnung`. Das ist der Standard.
- **Nickname**: Der Server-Spitzname. Mitglieder ohne Spitznamen werden mit ihrem Anzeigenamen angezeigt, und falls dieser nicht verfügbar ist, mit ihrem Benutzernamen.

Sonderzeichen in Namen, etwa `*`, `_` oder Links, werden als normaler Text angezeigt und verändern die Formatierung der Nachricht nicht.

Das „Zeilenformat" bestimmt jede Zeile der Liste. Verwende `%rank%` für die Platzierung, `%user%` für das Mitglied und `%points%` für die Punkte. Der Standard ist `%rank%. %user% - %points% Punkte`.

:::info
Der Beitrag pingt nie jemanden, auch wenn deine Nachricht `@everyone`, eine Rolle oder eine Erwähnung enthält. Erwähnungen werden angezeigt, aber niemand erhält eine Benachrichtigung.
:::

Ist die Liste für eine Discord-Nachricht zu lang, werden ganze Zeilen am Ende der Liste entfernt, sodass die Mitglieder mit den besten Platzierungen erhalten bleiben und keine Zeile mittendrin abgeschnitten wird. Der Bot zählt jede Verwendung von `%leaderboard%`, `%week%` und `%winners%` in deiner Nachricht sowie die Grenzen des gewählten Nachrichtentyps. Entfernst du `%leaderboard%` aus der Nachricht, wird die Liste nicht gepostet.

## Fehlerbehebung {#troubleshooting}

**Es wird keine Bestenliste gepostet**

- Prüfe, ob ein „Bestenlistenkanal" ausgewählt ist und der Bot ihn sehen und dort Nachrichten senden kann.
- Stelle sicher, dass mindestens ein Mitglied in der Woche Punkte gesammelt hat. Für eine Woche ohne Punkte wird nichts gepostet.
- War der Bot nach der geplanten Zeit mehr als 6 Stunden offline, wurde diese Woche übersprungen.

**Die Belohnungsrolle wird nicht vergeben**

- Der Bot benötigt die Berechtigung `Rollen verwalten` und seine höchste Rolle muss über der Belohnungsrolle stehen.
- Die Bestenliste wird trotzdem gepostet, wenn die Rolle nicht verwaltet werden kann. Prüfe die Position der Bot-Rolle und versuche es nächste Woche erneut.

**Sprachaktivität bringt keine Punkte**

- Sprachzeit zählt nur, solange das Mitglied nicht allein ist, nicht stummgeschaltet oder taub geschaltet ist und sich nicht im AFK-Kanal oder in einem Stage-Kanal befindet.
- Prüfe, dass der Kanal und die Rollen des Mitglieds nicht gesperrt sind.

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden für die aktuelle Woche gespeichert:

- Die Discord-Nutzer-ID jedes Mitglieds, das Punkte gesammelt hat
- Die in dieser Woche gesammelten Punkte und der Zeitpunkt der ersten Aktivität des Mitglieds in dieser Woche
- Die Discord-Nachrichten-ID und Nutzer-ID jeder Nachricht, auf die ein Mitglied in dieser Woche reagiert hat (damit jede Nachricht nur einmal gezählt wird)
- Das Datum des letzten wöchentlichen Durchlaufs, die Nutzer-IDs der letzten Gewinner und die ID der Belohnungsrolle, die sie erhalten haben (um die Rolle beim nächsten Durchlauf wieder zu entfernen)

Punkte und Reaktionseinträge werden bei jedem wöchentlichen Durchlauf gelöscht. Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
