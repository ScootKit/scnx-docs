# Analytics: Was erfasst wird

Analytics zählt die Aktivität auf deinem Server, damit du siehst, wie viel los ist, welche Kanäle genutzt werden und wie sich deine Mitgliederzahl entwickelt. Diese Seite beschreibt genau, was dabei erfasst wird, wo diese Daten liegen und was du und deine Mitglieder damit tun können.

Gib diese Seite gerne an deine Mitglieder weiter.

## Kurz gesagt

- Analytics erfasst **Zahlen und Zeitpunkte**, niemals Textinhalte.
- Die Daten liegen in **der Datenbank deines eigenen Bots**, auf dem Bot-Hosting, das ScootKit für dich betreibt. Sie fließen nicht in einen gemeinsamen SCNX-Analytics-Dienst ein.
- **Du** entscheidest, ob Analytics überhaupt läuft, wofür du es nutzt und ob sich Mitglieder abmelden können. Datenschutzrechtlich bist du dafür der Verantwortliche.
- Solange du Analytics nicht einschaltest, wird nichts erfasst.

## Was erfasst wird

Alles, was unten steht, ist eine Zahl oder ein Datum. Nachrichtentext kommt darin nirgendwo vor.

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

Pro Tag wird gezählt, wie oft welche Art der automatischen Moderation ausgelöst wurde, zum Beispiel bei einem blockierten Einladungslink oder einer Spam-Welle. Erfasst werden nur die Art des Auslösers und die Anzahl. Wer ihn ausgelöst hat, steckt nicht in dieser Zahl.

### Pro Kanal

Nachrichtenzahlen pro Kanal und Tag. Welche Kanäle am meisten genutzt werden und welche eingeschlafen sind.

### Pro Rolle

Nachrichtenzahlen pro Rolle und Tag. Welche Teile deiner Community aktiv sind.

### Pro Mitglied

Nachrichten, Reaktionen und Sekunden in Sprachkanälen pro Mitglied und Tag, dazu eine Gesamtzahl aller Nachrichten, das Datum der ersten Nachricht und das Datum der letzten Aktivität. Daraus speisen sich die Liste der aktivsten Mitglieder und das, was `/mystats` einem Mitglied über sich selbst zeigt.

### Aktuelle Aktivitätseinträge

Eine begrenzte Liste einzelner Ereignisse, die jeweils nur eine Ereignisart, eine Mitglieds-ID, eine Kanal-ID und einen Zeitstempel enthalten. Sie ist dafür da, dass sich Aktivität für einen kurzen Zeitraum genauer nachvollziehen lässt. Ihre Größe ist fest begrenzt: Sobald neue Einträge dazukommen, fallen die ältesten automatisch heraus. Auf einem belebten Server umfasst sie daher Tage, auf einem ruhigen Monate.

## Was nicht erfasst wird

- **Der Text von Nachrichten.** Analytics speichert ihn nicht, liest ihn nicht und fordert ihn nicht an. Zum Zählen einer Nachricht genügt eine Übermittlung ohne Textinhalt, und die Discord-Berechtigung, die den Text mitliefern würde, fordert Analytics gar nicht erst an. Das liegt daran, wie Analytics mit Discord verbunden ist, und ist kein Versprechen darüber, was Analytics bewusst übergeht. Andere Module brauchen den Nachrichtentext dagegen zwingend, um überhaupt zu funktionieren; hast du eines davon eingeschaltet, fordert dein Bot die Berechtigung für dieses Modul an. Für Analytics ändert das nichts: Nichts in Analytics liest den Text einer Nachricht, und in den Analytics-Daten gibt es kein Feld, das ihn aufnehmen könnte.
- **Anhänge, Bilder, Dateien oder Links.** Weder deren Inhalte noch deren Anzahl.
- **Bearbeitungen oder Löschungen von Nachrichten.**
- **Direktnachrichten.** Gezählt wird nur Aktivität auf dem Server selbst.
- **Alles aus Kanälen, die dein Bot nicht sieht.** Hat der Bot keinen Zugriff, taucht der Kanal in Analytics überhaupt nicht auf.
- **Bots.** Nachrichten und Befehle anderer Bots werden vollständig ignoriert.

## Wo die Daten liegen

In der Datenbank deines eigenen Bots. Dein Bot läuft auf einem Bot-Host, also auf einem der physischen Server, die ScootKit genau dafür betreibt. Diese Datenbank liegt damit auf dem Hosting von ScootKit und nicht auf einem Rechner, der dir gehört. Du wählst selbst, welchen Bot-Host dein Bot nutzt, und die Bot-Hosts stehen in verschiedenen Regionen. Mit dieser Wahl entscheidest du also auch, in welchem Land diese Daten physisch liegen. Siehe [Bot-Host wechseln](/de/docs/scnx/guilds/bots#bot-host).

ScootKit verarbeitet diese Daten in deinem Auftrag und nach deinen Weisungen, auf Grundlage der [Auftragsverarbeitungsvereinbarung (AVV)](https://corp.scootkit.com/de/docs/scnx/policies/data-processing-agreement/), die zu deinem SCNX-Vertrag gehört. In der Sprache dieser Vereinbarung bist du der Verantwortliche und ScootKit der Auftragsverarbeiter. Welche Unternehmen ScootKit für den Betrieb des Hostings einsetzt, steht als Liste der Unterauftragsverarbeiter im Tab **Richtlinien & Compliance** deines Servers.

Zwei Dinge werden damit leicht verwechselt, und bei beiden lohnt sich Genauigkeit:

- Deine Zahlen fließen **nicht** in einen gemeinsamen SCNX-Analytics-Dienst ein. Sie bleiben die Zahlen deines Servers und werden nicht mit denen anderer Server zusammengeführt.
- Das Dashboard behält **keine Kopie** davon. Wenn du den Tab **Statistiken** öffnest, fragt es die Zahlen in genau diesem Moment bei deinem Bot ab und zeigt sie an, ohne sie zu speichern.

Deshalb braucht der Tab **Statistiken** einen laufenden Bot. Ist dein Bot gestoppt, sagt der Tab dir das, statt dir alte Zahlen zu zeigen.

## Wie lange die Daten bleiben

| Daten                                                           | Aufbewahrung                              |
| --------------------------------------------------------------- | ----------------------------------------- |
| Tages- und Stundensummen, pro Kanal, pro Rolle und pro Mitglied | Unbegrenzt, bis du sie löschst            |
| Aktuelle Aktivitätseinträge                                     | Bis zur Größengrenze, dann älteste zuerst |

## Wer für diese Daten verantwortlich ist

**Du bist für die Aktivitätsdaten deiner Mitglieder verantwortlich**, nicht SCNX. Du bist dafür der Verantwortliche im datenschutzrechtlichen Sinn: Du entscheidest, ob Analytics überhaupt läuft, wofür du die Zahlen nutzt, ob sich Mitglieder abmelden können und wann Daten gelöscht werden. ScootKit verarbeitet sie in deinem Auftrag und nach deinen Weisungen, auf Grundlage der [Auftragsverarbeitungsvereinbarung](https://corp.scootkit.com/de/docs/scnx/policies/data-processing-agreement/), die zu deinem SCNX-Vertrag gehört.

Deshalb schaltest du die Abmeldemöglichkeit für Mitglieder auch selbst ein; sie ist nicht von vornherein da. Ob dein Server eine braucht, hängt von deiner Community und von den Regeln ab, die für dich gelten. Diese Einschätzung liegt bei dir.

## Mitgliedern die Abmeldung erlauben

Analytics hat dafür eine Einstellung: **Mitgliedern erlauben, sich von der individuellen Analytics-Erfassung abzumelden**. Sie ist standardmäßig aus.

Wenn du sie einschaltest, können Mitglieder auf deinem Server `/analytics-privacy` ausführen, um nicht mehr einzeln gezählt zu werden.

Für ein Mitglied, das sich abmeldet, gilt:

- Seine bestehenden Tagesdaten werden anonymisiert. Gelöscht werden seine Gesamtzahlen, das Datum der ersten Nachricht und das Datum der letzten Aktivität.
- Seine aktuellen Aktivitätseinträge werden entfernt.
- Künftige Aktivität zählt weiterhin in deine Server-Summen, wird ihm aber nie zugeordnet.

Die Server-Summen ändern sich durch eine Abmeldung nicht. Die Nachrichten sind tatsächlich geschrieben worden und zählen weiterhin dazu, wie viel auf deinem Server los ist. Was verschwindet, ist die Verbindung zwischen diesen Nachrichten und der Person.

Die Abmeldung wirkt sofort. Ein Mitglied kann sich später wieder anmelden; bereits entfernte Daten kommen aber nicht zurück.

:::note
Weil Rollenaktivität pro Rolle und nicht pro Person gezählt wird, kann eine Rolle mit nur einem oder zwei Mitgliedern trotzdem erkennen lassen, wer aktiv war. Denk daran, wenn du Rollen mit nur einem Mitglied verwendest.
:::

## Analytics ausschalten und Daten löschen

Wenn du Analytics ausschaltest, wird nichts mehr erfasst. Deine vorhandenen Daten bleiben erhalten. Du kannst Analytics später wieder einschalten und dort weitermachen, wo du aufgehört hast.

Das Löschen der Daten ist ein eigener, bewusster Schritt, weil das Dashboard es nicht rückgängig machen kann. Die Daten verschwinden sofort aus der laufenden Datenbank deines Bots. Zusätzlich hält ScootKit für das Hosting Sicherungskopien für den Notfall vor; sie dienen allein dazu, einen Server nach einem Ausfall wiederherzustellen. Darin kann eine Kopie noch bis zu 90 Tage überdauern, bevor sie aus der Rotation fällt.

## Verlauf aus der Zeit vor deinem eigenen Bot

Wenn dein Server Analytics schon genutzt hat, bevor er in deinen eigenen Bot umgezogen ist, wurde dein Verlauf mit übernommen und die alte Kopie gelöscht.

Manches hat das alte System nie erfasst, konkret **Beitritte, Austritte und neue Poster**. Für Tage vor dem Umzug zeigt der Tab **Statistiken** diese Werte als _Nicht aufgezeichnet_ an statt als Null und markiert den Punkt, ab dem dein eigener Bot zu erfassen begonnen hat. Eine Null dort würde bedeuten, dass niemand beigetreten ist. Das stimmt aber nicht, und wir zeigen dir lieber eine ehrliche Lücke.

## Die Rechte deiner Mitglieder

Möchte ein Mitglied wissen, was du über es gespeichert hast, zeigt ihm `/mystats` seine eigenen Zahlen. Der Befehl zeigt immer nur die Zahlen der Person, die ihn ausführt; niemand kann jemand anderen abfragen.

Bittet dich ein Mitglied, seine Daten zu löschen, kann es das über `/analytics-privacy` selbst erledigen, sobald du die Abmeldemöglichkeit eingeschaltet hast.

Hat ein Mitglied eine Frage zu diesen Daten oder möchte es sie ändern oder entfernen lassen, bist du die richtige Ansprechperson. Du bist der Verantwortliche, also liegen diese Entscheidungen bei dir. ScootKit betreibt das Hosting in deinem Auftrag auf Grundlage der oben beschriebenen Auftragsverarbeitungsvereinbarung und trifft diese Entscheidungen nicht für dich.
