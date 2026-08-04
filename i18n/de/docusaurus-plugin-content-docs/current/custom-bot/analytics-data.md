# Analytics: Was erfasst wird

Analytics zählt die Aktivität auf deinem Server, damit du siehst, wie viel los ist, welche Kanäle genutzt werden und wie sich deine Mitgliederzahl entwickelt. Diese Seite beschreibt genau, was erfasst wird, wo es gespeichert ist und was du und deine Mitglieder damit machen können.

Du darfst diese Seite gerne an deine Mitglieder weitergeben.

## Kurz gesagt

- Analytics erfasst **Zahlen und Zeitpunkte**, niemals den Text von irgendetwas.
- Die Daten liegen in **deinem eigenen Bot**, auf deinem eigenen Hosting, nicht auf SCNX-Servern.
- **Du** entscheidest, ob Analytics überhaupt läuft und ob Mitglieder sich abmelden können.
- Solange du Analytics nicht einschaltest, wird nichts erfasst.

## Was erfasst wird

Alles unten ist eine Zahl oder ein Datum. Nachrichtentext kommt darin nirgends vor.

### Server-Summen, pro Tag und pro Stunde

| Was                                                      | Erfasst als             |
| -------------------------------------------------------- | ----------------------- |
| Gesendete Nachrichten                                    | Anzahl                  |
| Genutzte Slash-Befehle und wie viele fehlgeschlagen sind | Anzahl                  |
| Hinzugefügte Reaktionen                                  | Anzahl                  |
| Zeit in Sprachkanälen                                    | Sekunden gesamt         |
| Erstellte Threads                                        | Anzahl                  |
| Beitritte und Austritte                                  | Jeweils eine Anzahl     |
| Mitglieder, die zum ersten Mal schreiben                 | Anzahl                  |
| Mitglieder und Bots auf dem Server                       | Tägliche Momentaufnahme |

### Pro Kanal

Nachrichtenzahlen pro Kanal und Tag. Welche Kanäle am aktivsten sind und welche eingeschlafen sind.

### Pro Rolle

Nachrichtenzahlen pro Rolle und Tag. Welche Teile deiner Community aktiv sind.

### Pro Mitglied

Nachrichten, Reaktionen und Sprachsekunden pro Mitglied und Tag, dazu eine Gesamtzahl der Nachrichten, das Datum der ersten Nachricht und das Datum der letzten Aktivität. Daraus entstehen die Liste der aktivsten Mitglieder und das persönliche `/mystats`.

### Aktuelle Aktivitätseinträge

Eine begrenzte Liste einzelner Ereignisse, die jeweils nur eine Ereignisart, eine Mitglieds-ID, eine Kanal-ID und einen Zeitstempel enthalten. Sie existiert, damit Aktivität für einen kurzen Zeitraum genauer betrachtet werden kann. Ihre Größe ist fest begrenzt, ältere Einträge werden automatisch verworfen. Auf einem belebten Server umfasst sie daher Tage, auf einem ruhigen Monate.

## Was nicht erfasst wird

- **Der Text von Nachrichten.** Wird nicht gespeichert, nicht verarbeitet, nicht empfangen. Dein Bot fordert die Discord-Berechtigung, die Nachrichteninhalte liefert, gar nicht erst an. Der Inhalt kommt also nie an. Das ist eine Eigenschaft der Verbindung zu Discord, kein Versprechen darüber, was der Bot ignoriert.
- **Anhänge, Bilder, Dateien oder Links.** Weder deren Inhalte noch deren Anzahl.
- **Bearbeitungen oder Löschungen von Nachrichten.**
- **Direktnachrichten.** Nur Aktivität auf dem Server selbst wird gezählt.
- **Alles aus Kanälen, die dein Bot nicht sieht.** Hat der Bot keinen Zugriff, taucht der Kanal in Analytics überhaupt nicht auf.
- **Bots.** Nachrichten und Befehle anderer Bots werden vollständig ignoriert.

## Wo die Daten liegen

In der Datenbank deines eigenen Bots, auf dem Hosting, das deinen Bot betreibt. Sie werden nicht zu SCNX kopiert, und SCNX hält keinen Zwischenspeicher davon. Wenn du den Analytics-Tab öffnest, fragt das Dashboard deinen Bot in diesem Moment nach den Zahlen und zeigt sie an, ohne sie zu speichern.

Das heißt, du hast die Daten direkt in der Hand. Es heißt aber auch, dass der Analytics-Tab deinen laufenden Bot braucht. Ist dein Bot gestoppt, sagt der Tab dir das, statt dir alte Zahlen zu zeigen.

## Wie lange die Daten bleiben

| Daten                                                           | Aufbewahrung                              |
| --------------------------------------------------------------- | ----------------------------------------- |
| Tages- und Stundensummen, pro Kanal, pro Rolle und pro Mitglied | Unbegrenzt, bis du sie löschst            |
| Detail pro Kanal und pro Stunde                                 | 30 Tage                                   |
| Aktuelle Aktivitätseinträge                                     | Bis zur Größengrenze, dann älteste zuerst |

## Wer für diese Daten verantwortlich ist

Weil die Erfassung in deinem eigenen Bot stattfindet und nicht auf einem gemeinsamen SCNX-Dienst, bist **du für die Aktivitätsdaten deiner Mitglieder verantwortlich**, nicht SCNX. Du entscheidest, ob Analytics läuft, ob Mitglieder sich abmelden können und wann Daten gelöscht werden.

Deshalb ist die Abmeldemöglichkeit für Mitglieder auch etwas, das du einschaltest, und nicht etwas, das immer da ist. Ob dein Server eine braucht, hängt von deiner Community und von den für dich geltenden Regeln ab. Diese Einschätzung liegt bei dir.

## Mitgliedern die Abmeldung erlauben

Analytics hat eine Einstellung namens **Mitgliedern erlauben, sich abzumelden**. Sie ist standardmäßig aus.

Wenn du sie einschaltest, können Mitglieder auf deinem Server `/analytics-privacy` ausführen, um nicht mehr einzeln gezählt zu werden.

Für ein Mitglied, das sich abmeldet:

- Seine bestehenden Tagesdaten werden anonymisiert, seine Gesamtzahlen, das Datum der ersten Nachricht und das der letzten Aktivität werden gelöscht.
- Seine aktuellen Aktivitätseinträge werden entfernt.
- Künftige Aktivität zählt weiterhin in deine Server-Summen, wird ihm aber nie zugeordnet.

Die Server-Summen ändern sich durch eine Abmeldung nicht. Die Nachrichten sind tatsächlich geschrieben worden und zählen weiterhin dazu, wie viel auf deinem Server los ist. Was verschwindet, ist die Verbindung zwischen diesen Nachrichten und der Person.

Die Abmeldung wirkt sofort. Ein Mitglied kann sich später wieder anmelden, bereits entfernte Daten kommen aber nicht zurück.

:::note
Weil Rollenaktivität pro Rolle und nicht pro Person gezählt wird, kann eine Rolle mit nur ein oder zwei Mitgliedern trotzdem erkennen lassen, wer aktiv war. Denk daran, wenn du Rollen mit nur einem Mitglied verwendest.
:::

## Analytics ausschalten und Daten löschen

Analytics auszuschalten stoppt jede Erfassung. Deine vorhandenen Daten bleiben erhalten, du kannst also später wieder einschalten und dort weitermachen, wo du aufgehört hast.

Das Löschen der Daten ist ein eigener, bewusster Schritt, weil es sich nicht rückgängig machen lässt und es nirgends eine Sicherung gibt.

## Verlauf aus der Zeit vor deinem eigenen Bot

Wenn dein Server Analytics schon genutzt hat, bevor es in deinen eigenen Bot umgezogen ist, wurde dein Verlauf übertragen und die alte Kopie gelöscht.

Manches hat das alte System nie erfasst, konkret **Beitritte, Austritte und Erstschreibende**. Für Daten vor dem Umzug zeigt der Analytics-Tab diese als _nicht erfasst_ an statt als Null, und markiert den Punkt, ab dem dein eigener Bot zu erfassen begonnen hat. Eine Null dort würde bedeuten, dass niemand beigetreten ist, und das ist nicht das, was passiert ist. Wir zeigen dir lieber eine ehrliche Lücke.

## Die Rechte deiner Mitglieder

Fragt ein Mitglied, was du über es gespeichert hast, zeigt `/mystats` ihm seine eigenen Zahlen. Der Befehl zeigt immer nur die Person, die ihn ausführt. Niemand kann jemand anderen abfragen.

Bittet ein Mitglied dich, seine Daten zu löschen, kann es das mit eingeschalteter Abmeldemöglichkeit über `/analytics-privacy` selbst tun.
