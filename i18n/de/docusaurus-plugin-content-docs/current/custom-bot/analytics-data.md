# Analytics: Was erfasst wird

Analytics zählt, was auf deinem Server passiert: geschriebene Nachrichten, Beitritte und Austritte, welche Kanäle genutzt werden. Diese Seite listet auf, was genau gespeichert wird, wo die Daten liegen und wie du eine Kopie bekommst oder alles löschst. Wenn ein Mitglied wissen möchte, was der Bot über es speichert, kannst du ihm einfach diese Seite schicken.

## Kurz gesagt

- Analytics speichert Zahlen und Zeitpunkte. Nachrichtentext wird nie gespeichert, und die Discord-Berechtigung zum Mitlesen fordert Analytics gar nicht erst an.
- Die Daten liegen in der Datenbank deines eigenen Bots, auf dem Bot-Host, den du ausgewählt hast. Das Dashboard behält keine Kopie, und mit anderen Servern wird nichts zusammengeführt.
- Solange du Analytics nicht einschaltest, wird nichts erfasst.
- Verantwortlich für diese Daten bist du: Datenschutzrechtlich bist du der Verantwortliche, ScootKit verarbeitet sie in deinem Auftrag.

## Was erfasst wird

Alles, was Analytics speichert, ist eine Zahl oder ein Datum.

Bevor du Analytics einschaltest, existiert davon nichts. Die Datenbanktabellen werden gar nicht erst angelegt, der Bot hört auf keine Ereignisse und fordert die dafür nötigen Discord-Ereignisse nicht einmal an.

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

Wie oft jede Art automatischer Moderation ausgelöst hat, pro Tag: ein blockierter Einladungslink, eine Spam-Welle und so weiter. Gespeichert werden die Art des Auslösers und die Anzahl. Wer ihn ausgelöst hat, steht nicht darin.

### Pro Kanal und pro Rolle

Nachrichtenzahlen pro Tag, für jeden Kanal und jede Rolle. Daran siehst du, welche Kanäle viel genutzt werden und welche Teile deiner Community aktiv sind.

### Pro Mitglied

Nachrichten, Reaktionen und Sekunden in Sprachkanälen pro Tag, dazu die Gesamtzahl aller Nachrichten, das Datum der ersten Nachricht und das Datum der letzten Aktivität. Daraus speisen sich die Liste der aktivsten Mitglieder und die eigenen Zahlen in `/mystats`.

### Aktuelle Aktivitätseinträge

Eine Liste der letzten einzelnen Ereignisse. Jeder Eintrag enthält nur eine Ereignisart, eine Mitglieds-ID, eine Kanal-ID und einen Zeitstempel. Die Liste hat eine feste Größengrenze: Kommen neue Einträge dazu, fallen die ältesten heraus. Auf einem belebten Server reicht sie ein paar Tage zurück, auf einem ruhigen einige Monate.

## Was nie erfasst wird

- **Nachrichtentext.** Zum Zählen braucht es keinen Text. Discord meldet dem Bot, dass eine Nachricht geschrieben wurde, ohne den Inhalt mitzuschicken, und die Berechtigung, die den Text ergänzen würde, fordert Analytics nie an. Manche anderen Module brauchen diese Berechtigung und fordern sie an, wenn du sie einschaltest. Auch dann liest nichts in Analytics den Text einer Nachricht, und in den Analytics-Daten gibt es kein Feld, das ihn aufnehmen könnte.
- **Anhänge, Bilder, Dateien oder Links.** Weder ihre Inhalte noch ihre Anzahl.
- **Bearbeitungen oder Löschungen von Nachrichten.**
- **Direktnachrichten.** Gezählt wird nur, was auf dem Server selbst passiert.
- **Kanäle, die dein Bot nicht sehen kann.** Kein Zugriff, keine Daten.
- **Andere Bots.** Ihre Nachrichten und Befehle werden ignoriert.

## Wo die Daten liegen und wer verantwortlich ist

Dein Bot hat seine eigene Datenbank, und dort liegt alles oben Genannte. Der Bot läuft auf einem Bot-Host, einem der Server, die ScootKit betreibt. [Welchen, wählst du selbst](/de/docs/scnx/guilds/bots#bot-host), und weil die Bot-Hosts in verschiedenen Regionen stehen, entscheidet diese Wahl auch, in welchem Land die Daten physisch liegen.

Aus diesem Aufbau folgt zweierlei:

- Deine Zahlen bleiben die Zahlen deines Servers. Es gibt keinen gemeinsamen SCNX-Analytics-Dienst, und mit anderen Servern wird nichts zusammengeführt.
- Das Dashboard speichert nichts. Jedes Mal, wenn du den Tab **Statistiken** öffnest, fragt es die Zahlen in dem Moment bei deinem Bot ab. Ist dein Bot gestoppt, gibt es nichts abzufragen, und der Tab sagt dir das.

Datenschutzrechtlich bist du für diese Daten der Verantwortliche und ScootKit der Auftragsverarbeiter, auf Grundlage der [Auftragsverarbeitungsvereinbarung](https://corp.scootkit.com/de/docs/scnx/policies/data-processing-agreement/), die zu deinem SCNX-Vertrag gehört. Die Hosting-Unternehmen, die ScootKit einsetzt, findest du als Unterauftragsverarbeiter im Tab **Richtlinien & Compliance** deines Servers. Die Entscheidungen über die Daten liegen bei dir: ob Analytics läuft, wofür du die Zahlen nutzt, wann sie gelöscht werden. ScootKit trifft sie nicht für dich.

## Wie lange die Daten bleiben

| Daten                                                                   | Aufbewahrung                                          |
| ----------------------------------------------------------------------- | ----------------------------------------------------- |
| Tages- und Stundensummen sowie die Zahlen pro Kanal, Rolle und Mitglied | Bis du sie löschst                                    |
| Aktuelle Aktivitätseinträge                                             | Bis zur Größengrenze, dann fallen die ältesten heraus |

## Mitgliedern die Abmeldung erlauben

Dafür gibt es eine Einstellung: **Mitgliedern erlauben, sich von der individuellen Analytics-Erfassung abzumelden**. Sie ist standardmäßig aus. Ob du sie anbietest, entscheidest du; das hängt von deiner Community und den Regeln ab, die für dich gelten.

Ist sie an, können Mitglieder auf deinem Server `/analytics-privacy` ausführen, um nicht mehr einzeln gezählt zu werden. Für ein Mitglied, das sich abmeldet:

- Seine bisherigen Tagesdaten werden anonymisiert; seine Gesamtzahl, das Datum der ersten Nachricht und das Datum der letzten Aktivität werden gelöscht.
- Seine aktuellen Aktivitätseinträge werden entfernt.
- Seine künftige Aktivität zählt weiter in die Server-Summen, ohne Verbindung zu seiner Person.

Die Server-Summen sinken durch eine Abmeldung nicht. Die Nachrichten wurden ja tatsächlich geschrieben; was verschwindet, ist die Verbindung zwischen diesen Nachrichten und der Person.

Die Abmeldung wirkt sofort. Ein Mitglied kann sich später wieder anmelden, aber entfernte Daten kommen nicht zurück.

:::note
Rollenaktivität wird pro Rolle gezählt. Hat eine Rolle nur ein oder zwei Mitglieder, lassen ihre Zahlen trotzdem erkennen, wer aktiv war. Denk daran, wenn du Rollen mit einzelnen Mitgliedern nutzt.
:::

## Eine Kopie bekommen

**Kopie dieser Daten herunterladen** findest du im Bereich **Datenschutz** im Tab **Statistiken**; nutzen kann es nur der Serverinhaber. Dabei entsteht eine einzelne JSON-Datei, die dein Browser aus den Antworten deines Bots zusammensetzt. Bei ScootKit wird dabei nichts gespeichert.

Die Datei umfasst deinen gesamten Verlauf, egal welchen Zeitraum du gerade auf dem Bildschirm hast, und enthält auch Karten, die du im Dashboard ausgeblendet hast. Außerdem steht darin immer eine Liste von allem, was sich nicht exportieren ließ, auch wenn diese Liste leer ist.

## Ausschalten und Löschen

Schaltest du Analytics aus, wird nichts mehr erfasst. Deine vorhandenen Daten bleiben erhalten, du kannst also später wieder einschalten und dort weitermachen.

**Alle Analysedaten löschen**, ebenfalls im Bereich **Datenschutz**, ist der endgültige Schritt. Du musst vorher eine Bestätigung setzen, und das Dashboard kann das Löschen nicht rückgängig machen. Es läuft als eine einzige Datenbanktransaktion: Entweder wird es vollständig ausgeführt, oder es ändert sich gar nichts. Danach bekommst du eine Übersicht, was entfernt wurde, Tabelle für Tabelle mit der Anzahl der Einträge.

Zwei Dinge überstehen das Löschen mit Absicht:

- **Die Abmeldungen deiner Mitglieder.** Wer sich abgemeldet hat, bleibt abgemeldet. Seine Daten werden wie bei allen anderen gelöscht, und der Vermerk über die Abmeldung bleibt bestehen, damit das Löschen niemanden stillschweigend wieder anmeldet.
- **Sicherungskopien für den Notfall.** Sie existieren, damit ein Server nach einem Ausfall wiederhergestellt werden kann. Darin kann eine Kopie bis zu 90 Tage überdauern.

## Verlauf aus der Zeit vor deinem eigenen Bot

Hat dein Server Analytics schon genutzt, bevor er auf seinen eigenen Bot umgezogen ist, wurde der Verlauf übernommen und die alte Kopie gelöscht.

Beitritte, Austritte und Mitglieder, die zum ersten Mal schreiben, hat das alte System nie erfasst. Für Tage vor dem Umzug zeigt der Tab **Statistiken** diese Werte als _Nicht aufgezeichnet_ an und markiert den Punkt, ab dem dein eigener Bot übernommen hat.

## Wenn ein Mitglied fragt

`/mystats` zeigt jedem Mitglied nur die eigenen Zahlen. Niemand kann jemand anderen nachschlagen. Musst du eine Auskunftsanfrage selbst beantworten, steht in der oben beschriebenen JSON-Kopie alles, was dein Bot gespeichert hat.

Bei Löschwünschen schaltest du die Abmeldemöglichkeit ein, dann erledigt das Mitglied es selbst mit `/analytics-privacy`.

Ansprechpartner für Fragen zu diesen Daten bist du. Möchte ein Mitglied darüber hinaus etwas geändert oder entfernt haben, ist das deine Entscheidung als Verantwortlicher.
