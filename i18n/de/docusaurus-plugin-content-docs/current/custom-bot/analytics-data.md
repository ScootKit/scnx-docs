# Analytics: Was erfasst wird

Analytics zählt die Aktivität auf deinem Server, damit du siehst, wie viel los ist, welche Kanäle genutzt werden und wie sich deine Mitgliederzahl entwickelt. Diese Seite beschreibt genau, was erfasst wird, wo es gespeichert ist und was du und deine Mitglieder damit machen können.

Du darfst diese Seite gerne an deine Mitglieder weitergeben.

## Kurz gesagt

- Analytics erfasst **Zahlen und Zeitpunkte**, niemals den Text von irgendetwas.
- Die Daten liegen in **der Datenbank deines eigenen Bots**, auf dem Bot-Hosting, das ScootKit für dich betreibt. Sie fließen nicht in einen gemeinsamen SCNX-Analytics-Dienst ein.
- **Du** entscheidest, ob Analytics überhaupt läuft, wofür du es nutzt und ob Mitglieder sich abmelden können. Datenschutzrechtlich bist du dafür der Verantwortliche.
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

### Automatische Moderation

Eine Anzahl pro Tag, wie oft welche Art der automatischen Moderation ausgelöst hat, zum Beispiel ein blockierter Einladungslink oder eine Spam-Welle. Erfasst wird nur die Art des Auslösers und wie oft er gegriffen hat. Wer ihn ausgelöst hat, gehört nicht zu dieser Zahl.

### Pro Kanal

Nachrichtenzahlen pro Kanal und Tag. Welche Kanäle am aktivsten sind und welche eingeschlafen sind.

### Pro Rolle

Nachrichtenzahlen pro Rolle und Tag. Welche Teile deiner Community aktiv sind.

### Pro Mitglied

Nachrichten, Reaktionen und Sprachsekunden pro Mitglied und Tag, dazu eine Gesamtzahl der Nachrichten, das Datum der ersten Nachricht und das Datum der letzten Aktivität. Daraus entstehen die Liste der aktivsten Mitglieder und das persönliche `/mystats`.

### Aktuelle Aktivitätseinträge

Eine begrenzte Liste einzelner Ereignisse, die jeweils nur eine Ereignisart, eine Mitglieds-ID, eine Kanal-ID und einen Zeitstempel enthalten. Sie existiert, damit Aktivität für einen kurzen Zeitraum genauer betrachtet werden kann. Ihre Größe ist fest begrenzt, ältere Einträge werden automatisch verworfen. Auf einem belebten Server umfasst sie daher Tage, auf einem ruhigen Monate.

## Was nicht erfasst wird

- **Der Text von Nachrichten.** Analytics speichert ihn nicht, liest ihn nicht und fordert ihn nicht an. Für das Zählen einer Nachricht genügt eine Übermittlung ohne Textinhalt, und Analytics fordert die Discord-Berechtigung, die diesen Inhalt liefern würde, gar nicht erst an. Das ist eine Eigenschaft der Verbindung von Analytics zu Discord, kein Versprechen darüber, was ignoriert wird. Manche anderen Module brauchen den Nachrichtentext dagegen zwingend, um überhaupt zu funktionieren. Wenn du eines davon eingeschaltet hast, fordert dein Bot die Berechtigung für dieses Modul an. Für Analytics ändert das nichts: Nichts in Analytics liest den Text einer Nachricht, und in den Analytics-Daten gibt es kein Feld, das ihn aufnehmen könnte.
- **Anhänge, Bilder, Dateien oder Links.** Weder deren Inhalte noch deren Anzahl.
- **Bearbeitungen oder Löschungen von Nachrichten.**
- **Direktnachrichten.** Nur Aktivität auf dem Server selbst wird gezählt.
- **Alles aus Kanälen, die dein Bot nicht sieht.** Hat der Bot keinen Zugriff, taucht der Kanal in Analytics überhaupt nicht auf.
- **Bots.** Nachrichten und Befehle anderer Bots werden vollständig ignoriert.

## Wo die Daten liegen

In der Datenbank deines eigenen Bots. Dein Bot läuft auf einem Bot-Host, also auf einem der physischen Server, die ScootKit genau dafür betreibt. Diese Datenbank liegt damit auf dem Hosting von ScootKit und nicht auf einem Rechner, der dir gehört. Du wählst selbst, welchen Bot-Host dein Bot nutzt, und die Bot-Hosts stehen in verschiedenen Regionen. Diese Wahl entscheidet also auch darüber, in welchem Land diese Daten physisch liegen. Siehe [Bot-Host wechseln](/docs/scnx/guilds/bots#bot-host).

ScootKit verarbeitet die Daten für dich, in deinem Auftrag, auf Grundlage der Auftragsverarbeitungsvereinbarung (AVV), die Teil deines SCNX-Vertrags ist. In der Sprache dieser Vereinbarung bist du der Verantwortliche und ScootKit der Auftragsverarbeiter. Welche Unternehmen ScootKit für den Betrieb des Hostings einsetzt, steht als Liste der Unterauftragsverarbeiter im Tab **Richtlinien & Compliance** deines Servers.

Zwei Dinge werden damit leicht verwechselt, und bei beiden lohnt sich Genauigkeit:

- Deine Zahlen fließen **nicht** in einen gemeinsamen SCNX-Analytics-Dienst ein. Sie bleiben die Zahlen deines Servers und werden nicht mit denen anderer Server zusammengeführt.
- Das Dashboard behält **keine Kopie** davon. Wenn du den Analytics-Tab öffnest, fragt es deinen Bot in diesem Moment nach den Zahlen und zeigt sie an, ohne sie zu speichern.

Wegen des zweiten Punktes braucht der Analytics-Tab deinen laufenden Bot. Ist dein Bot gestoppt, sagt der Tab dir das, statt dir alte Zahlen zu zeigen.

## Wie lange die Daten bleiben

| Daten                                                           | Aufbewahrung                              |
| --------------------------------------------------------------- | ----------------------------------------- |
| Tages- und Stundensummen, pro Kanal, pro Rolle und pro Mitglied | Unbegrenzt, bis du sie löschst            |
| Aktuelle Aktivitätseinträge                                     | Bis zur Größengrenze, dann älteste zuerst |

## Wer für diese Daten verantwortlich ist

**Du bist für die Aktivitätsdaten deiner Mitglieder verantwortlich**, nicht SCNX. Du bist dafür der Verantwortliche im datenschutzrechtlichen Sinn: Du entscheidest, ob Analytics überhaupt läuft, wofür du die Zahlen nutzt, ob Mitglieder sich abmelden können und wann Daten gelöscht werden. ScootKit verarbeitet sie für dich, in deinem Auftrag, auf Grundlage der Auftragsverarbeitungsvereinbarung, die zu deinem SCNX-Vertrag gehört.

Deshalb ist die Abmeldemöglichkeit für Mitglieder auch etwas, das du einschaltest, und nicht etwas, das immer da ist. Ob dein Server eine braucht, hängt von deiner Community und von den für dich geltenden Regeln ab. Diese Einschätzung liegt bei dir.

## Mitgliedern die Abmeldung erlauben

Analytics hat eine Einstellung namens **Mitgliedern erlauben, Analytics zu deaktivieren**. Sie ist standardmäßig aus.

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

Das Löschen der Daten ist ein eigener, bewusster Schritt, weil das Dashboard es nicht rückgängig machen kann. Es entfernt die Daten sofort aus der laufenden Datenbank deines Bots. Zusätzlich führt ScootKit für das Hosting Notfall-Datensicherungen, die allein dazu dienen, einen Server nach einem Ausfall wiederherzustellen. Darin kann eine Kopie noch bis zu 90 Tage bestehen bleiben, bis sie aus der Rotation fällt.

## Verlauf aus der Zeit vor deinem eigenen Bot

Wenn dein Server Analytics schon genutzt hat, bevor es in deinen eigenen Bot umgezogen ist, wurde dein Verlauf übertragen und die alte Kopie gelöscht.

Manches hat das alte System nie erfasst, konkret **Beitritte, Austritte und Erstschreibende**. Für Daten vor dem Umzug zeigt der Analytics-Tab diese als _nicht erfasst_ an statt als Null, und markiert den Punkt, ab dem dein eigener Bot zu erfassen begonnen hat. Eine Null dort würde bedeuten, dass niemand beigetreten ist, und das ist nicht das, was passiert ist. Wir zeigen dir lieber eine ehrliche Lücke.

## Die Rechte deiner Mitglieder

Fragt ein Mitglied, was du über es gespeichert hast, zeigt `/mystats` ihm seine eigenen Zahlen. Der Befehl zeigt immer nur die Person, die ihn ausführt. Niemand kann jemand anderen abfragen.

Bittet ein Mitglied dich, seine Daten zu löschen, kann es das mit eingeschalteter Abmeldemöglichkeit über `/analytics-privacy` selbst tun.

Hat ein Mitglied eine Frage zu diesen Daten oder möchte es sie ändern oder entfernen lassen, ist die richtige Ansprechperson du. Du bist der Verantwortliche, also liegen diese Entscheidungen bei dir. ScootKit betreibt das Hosting in deinem Auftrag auf Grundlage der oben beschriebenen Auftragsverarbeitungsvereinbarung und trifft sie nicht für dich.
