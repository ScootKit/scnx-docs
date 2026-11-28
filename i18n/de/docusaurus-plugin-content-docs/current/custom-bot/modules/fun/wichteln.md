# Wichteln

Veranstalte Wichteln auf deinem Server: Mitglieder melden sich an, bekommen zufällig eine Person zum Beschenken zugelost und markieren ihre Geschenke als verschickt und erhalten.

<ModuleOverview moduleName="wichteln" />

## Funktionen {#features}

- Mitglieder treten über einen Button an der Anmeldenachricht bei und schreiben einen Wunschzettel mit Wünschen, Hobbys und Dingen, die sie nicht mögen.
- Jedes Mitglied bekommt genau eine beschenkte Person und wird von genau einem anderen Mitglied beschenkt. Niemand zieht sich selbst.
- Die Runde startet von selbst zu einem Termin, den du festlegst, oder manuell mit `/wichteln start`. Bis dahin zeigt der Bot eine "Start am ..."-Nachricht mit Live-Countdown.
- Die Auslosung läuft automatisch zu einem Termin, den du festlegst, oder manuell mit `/wichteln draw`.
- Nach der Auslosung bekommt jeder Wichtel eine private Nachricht mit der beschenkten Person und deren Wunschzettel.
- Wichtel markieren ihr Geschenk per Button als verschickt, die beschenkten Personen als erhalten.
- Optionale Wunschzettel-Pflicht, Geschenk-Erinnerungen und ein Auflösungs-Beitrag am Ende der Runde.
- Mitglieder können mit dem Button "Verlassen" ihrer Beitritts-Bestätigung austreten. Nach der Auslosung werden Mitglieder, die auf "Verlassen" drücken oder mit `/wichteln kick` entfernt werden, in der Geschenkkette ersetzt. Mitglieder, die den Server selbst verlassen, werden nicht automatisch ersetzt, nutze dafür `/wichteln kick`.
- Jeder Text, jede Button-Beschriftung und jede Nachricht ist anpassbar.
- Wird die Dashboard-Nachricht versehentlich gelöscht, postet der Bot sie neu.
- Das Modul ist optional: Es passiert nichts, bis ein Admin mit `/wichteln start` eine Runde startet oder du einen Rundenstart festlegst.

## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=wichteln&ref=scnx-app-docs).
2. Öffne die [Konfiguration](#configuration-config) und wähle den "Wichtel-Kanal". Der Bot benötigt dort die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten".
3. Lege optional die [Termine](#dates), einen "Auflösungs-Kanal", einen "Log-Kanal" und die Texte in den [Nachrichten](#configuration-messages) fest (zum Beispiel das optionale Budget im "Budget-Text").
4. Starte eine Runde mit `/wichteln start`, oder lege den "Rundenstart" fest, dann öffnet der Bot die Anmeldung selbst. Der Bot postet die Anmeldenachricht im Wichtel-Kanal.

## Nutzung {#usage}

### Start {#start}

Eine Runde startet auf zwei Arten:

- **Manuell:** `/wichteln start` öffnet die Anmeldung sofort. Ist schon eine Runde geplant, startet der Befehl sie jetzt.
- **Automatisch:** lege den "Rundenstart" fest. Bis dahin postet der Bot eine "Start am ..."-Nachricht mit Live-Countdown im Wichtel-Kanal, damit der Kanal immer ein Dashboard hat. Zum Startzeitpunkt wird dieselbe Nachricht zur Anmeldenachricht, und der Bot schreibt eine Zeile in den Log-Kanal.

Für den automatischen Start gelten einige Regeln:

- Der Wichtel-Kanal muss gesetzt und nutzbar sein. Sonst wird nichts gepostet, das Problem wird einmal im Log-Kanal und im Bot-Log gemeldet, und der Bot versucht es jede Stunde erneut.
- Ein Rundenstart, der schon vorbei ist, startet die Runde bei der nächsten stündlichen Prüfung, aber nur bis zu 7 Tage nach dem Termin. Danach passiert nichts.
- Jeder Rundenstart startet genau eine Runde. Wurde sie gestartet, abgebrochen oder beendet, startet derselbe Termin keine weitere. Lege für die nächste Runde einen neuen Termin fest.
- Solange eine andere Runde läuft, wird keine Runde geplant oder gestartet.
- Änderst du den Termin, während die Runde geplant ist, wandert der Countdown mit. Leerst du ihn, wird die geplante Runde abgebrochen.
- Mitglieder können der geplanten Runde nicht beitreten. Das geht, sobald die Anmeldung geöffnet ist.

### Anmeldung {#signup}

Die Anmeldenachricht zeigt die Regeln, den Anmeldeschluss und die Zahl der Teilnehmenden, und das Budget, falls du eines festgelegt hast. Mitglieder nutzen die Buttons darunter:

- **Mitmachen** nimmt das Mitglied in die Runde auf.
- **Wunschzettel schreiben** öffnet ein Fenster, in dem das Mitglied seinen Wunschzettel schreibt. Der Wunschzettel kann bis zur Auslosung geändert werden.

Drückt ein Mitglied **Mitmachen**, bekommt es eine private Bestätigung mit den Buttons **Wunschzettel schreiben** und **Verlassen**. Um vor der Auslosung auszutreten, drückt ein Mitglied erneut **Mitmachen** und dann **Verlassen**. Dieselben Buttons erscheinen, wenn jemand **Mitmachen** drückt, der schon dabei ist.

Wird die Anmeldenachricht gelöscht, postet der Bot sie neu. Das passiert bei der nächsten stündlichen Prüfung oder wenn jemand einen Button drückt. Bei Runden, die schon beendet sind, bleibt die Nachricht gelöscht.

Beitreten ist bis zum Anmeldeschluss möglich, oder bis zur Auslosung, wenn du keinen Anmeldeschluss festgelegt hast. Mitglieder müssen Direktnachrichten von Servermitgliedern erlauben, sonst kann der Bot sie nicht erreichen.

Andere Mitglieder können den Wunschzettel nicht sehen. Nach der Auslosung erhält ihn der Wichtel des Mitglieds per Direktnachricht.

### Auslosung {#draw}

Es werden mindestens 3 Teilnehmende benötigt. Sind es weniger, wird die Runde abgebrochen. Die Auslosung läuft automatisch zum eingestellten Auslosungs-Termin. Lässt du den Auslosungs-Termin leer, wird nur gelost, wenn ein Admin `/wichteln draw` ausführt.

Ist "Wunschzettel erforderlich" aktiviert, bekommen Mitglieder ohne Wunschzettel etwa einen Tag vor der automatischen Auslosung eine Warnung. Mitglieder, die bei der Auslosung noch keinen Wunschzettel haben, werden ausgeschlossen und per Direktnachricht darüber informiert. Mitglieder ohne Wunschzettel erhalten eine Warnung statt einer Erinnerung, und zwar nur, wenn ein Auslosungs-Termin gesetzt ist.

### Schenken {#gifting}

Nach der Auslosung bekommt jeder Wichtel eine Direktnachricht mit der beschenkten Person und dem Wunschzettel. Über die Buttons an der Dashboard-Nachricht lässt sich die beschenkte Person erneut anzeigen und das Geschenk markieren:

- Der Wichtel drückt **Geschenk verschickt**. Die beschenkte Person erhält eine Direktnachricht mit einem Button **Geschenk erhalten**.
- Die beschenkte Person drückt **Geschenk erhalten**, um den Erhalt zu bestätigen.

Wenn du "Erinnerungstage vor der Auflösung" einstellst, erhalten Wichtel, die ihr Geschenk noch nicht als verschickt markiert haben, so viele Tage vor der Auflösung eine Erinnerung.

### Auflösung und Ende der Runde {#reveal}

Zum Auflösungs-Termin postet der Bot im Auflösungs-Kanal eine Nachricht, die auflistet, wer wen beschenkt hat, gefolgt von den Summen der verschickten und erhaltenen Geschenke. Die Summen sind eine eigene Nachricht, die nur gepostet wird, wenn ihr Text in der Nachrichten-Konfiguration nicht leer ist. Danach endet die Runde und die Dashboard-Nachricht zeigt den Abschlusstext. Die Paare sind im Auflösungs-Kanal für alle sichtbar. Eine lange Liste von Paaren wird auf mehrere Nachrichten verteilt, die Folgenachrichten verwenden den Text "Auflösungs-Beitrag: Fortsetzung". Die Runde endet zum Auflösungs-Termin, oder bis zu 3 Tage später, falls der Auflösungs-Beitrag nicht gepostet werden konnte. Ohne Auflösungs-Termin endet die Runde 14 Tage nach der Auslosung. Ohne Auflösungs-Kanal gibt es keinen Auflösungs-Beitrag und die Runde endet trotzdem zum Auflösungs-Termin.

### Mitglieder, die austreten {#repair}

Wenn ein Mitglied nach der Auslosung auf "Verlassen" drückt oder von einem Admin entfernt wird, repariert der Bot die Geschenkkette: Der Wichtel des fehlenden Mitglieds bekommt dessen beschenkte Person, und beide Seiten werden per Direktnachricht informiert. Bleiben weniger als 3 Teilnehmende übrig, wird die Runde abgebrochen.

**Einschränkung:** Der Bot bemerkt nicht, wenn ein Mitglied den Server selbst verlässt. Die Geschenkkette bleibt dann unverändert, bis ein Admin das Mitglied mit `/wichteln kick user:<User>` entfernt.

### Termine {#dates}

Rundenstart, Anmeldeschluss, Auslosung und Auflösung stellst du jeweils mit einem Feld für Datum und Uhrzeit ein. Die Uhrzeiten gelten in der Zeitzone deines Servers (der Zeitzone des Bots). Jeder Termin ist absolut und enthält das Jahr, trage also für jede Runde die echten Termine ein. Ein leer gelassener Termin wird nicht verwendet.

- **Rundenstart:** zu diesem Zeitpunkt öffnet der Bot die Anmeldung, siehe [Start](#start). Lass das Feld leer, um manuell mit `/wichteln start` zu starten. Ein Rundenstart in der Vergangenheit ist erlaubt und startet die Runde bei der nächsten stündlichen Prüfung, bis zu 7 Tage nach dem Termin.
- **Anmeldeschluss:** danach können keine Mitglieder mehr beitreten. Ohne Anmeldeschluss können sich Mitglieder bis zur Auslosung anmelden. Ein Anmeldeschluss, der schon in der Vergangenheit liegt, verhindert `/wichteln start`, weil niemand beitreten könnte.
- **Auslosung:** der Bot lost zu diesem Zeitpunkt automatisch aus. Lass das Feld leer, um nur manuell mit `/wichteln draw` auszulosen.
- **Auflösung:** zu diesem Zeitpunkt wird der Auflösungs-Beitrag veröffentlicht und die Runde endet.

Ist der Termin für Auslosung oder Auflösung beim Start der Runde schon vorbei, läuft der passende Schritt bei der nächsten stündlichen Prüfung. Startest du eine Runde zum Beispiel nach dem eingestellten Auslosungs-Termin, wird sofort gelost. Der Zeitplaner läuft einmal pro Stunde, automatische Schritte passieren daher bis zu etwa eine Stunde nach der eingestellten Zeit.

Trägst du einen ungültigen oder unzulässigen Termin von Hand in die Konfigurationsdatei ein, setzt der Bot das Feld beim Laden der Datei auf leer zurück und schreibt eine Warnung ins Bot-Log.

## Befehle {#commands}

<SlashCommandExplanation />

Alle Befehle benötigen die Berechtigung "Server verwalten".

| Befehl                       | Beschreibung                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `/wichteln start`            | Startet eine neue Runde und postet die Anmeldenachricht im Wichtel-Kanal. Eine geplante Runde startet sofort. |
| `/wichteln draw`             | Lost die beschenkten Personen sofort aus, ohne auf den Auslosungs-Termin zu warten.                           |
| `/wichteln cancel`           | Bricht die aktuelle Runde ab, geplant oder laufend.                                                           |
| `/wichteln kick user:<User>` | Entfernt ein Mitglied aus der Runde. Nach der Auslosung wird die Geschenkkette repariert.                     |

Es kann immer nur eine Runde aktiv sein. Eine geplante Runde zählt als aktiv.

## Konfiguration {#configuration}

### Konfiguration {#configuration-config}

In dieser Konfigurationsdatei kannst du die Kanäle, Termine und Regeln des Wichtelns einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=wichteln%7Cconfigs/wichteln).

| Feld                              | Beschreibung                                                                                                                                                                                                                                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wichtel-Kanal                     | Kanal, in dem die Anmeldenachricht gepostet wird. Hier treten Mitglieder bei, schreiben ihren Wunschzettel und markieren ihre Geschenke.                                                                                                                                                                                  |
| Auflösungs-Kanal                  | Kanal, in dem der Auflösungs-Beitrag am Ende der Runde gepostet wird.                                                                                                                                                                                                                                                     |
| Log-Kanal                         | Optionaler Kanal, in den eine Log-Zeile für Beitritte, Austritte, verschickte und erhaltene Geschenke, Entfernungen, Abbrüche und die Auslosung geschrieben wird. Die Log-Zeilen verraten keine Paare, außer du fügst den Texten für "verschickt" und "erhalten" die Platzhalter für Wichtel und beschenkte Person hinzu. |
| Wunschzettel erforderlich         | Wenn aktiviert, nehmen nur Mitglieder teil, die vor der Auslosung einen Wunschzettel geschrieben haben. Wer noch keinen hat, bekommt etwa einen Tag vor der Auslosung eine Warnung. Fehlt der Wunschzettel bei der Auslosung weiterhin, wird die Person per Direktnachricht informiert und nicht mitgelost.               |
| Erinnerungstage vor der Auflösung | Anzahl der Tage vor der Auflösung, an denen Wichtel, die ihr Geschenk noch nicht verschickt haben, eine Erinnerung bekommen. 0 schaltet die Erinnerung aus.                                                                                                                                                               |
| Rundenstart                       | Bis zu diesem Zeitpunkt postet der Bot eine "Start am ..."-Nachricht im Wichtel-Kanal und öffnet dann selbst die Anmeldung, ein Befehl ist nicht nötig. Leer lassen, um manuell mit /wichteln start zu starten. Die Uhrzeit gilt in der Zeitzone des Bots.                                                                |
| Anmeldeschluss                    | Zu diesem Zeitpunkt endet die Anmeldung. Danach können keine Mitglieder mehr beitreten. Leer lassen für keinen Anmeldeschluss. Die Uhrzeit gilt in der Zeitzone des Bots.                                                                                                                                                 |
| Auslosung                         | Zu diesem Zeitpunkt wird automatisch ausgelost. Leer lassen, wenn du nur manuell mit /wichteln draw auslosen willst. Die Uhrzeit gilt in der Zeitzone des Bots.                                                                                                                                                           |
| Auflösung                         | Zu diesem Zeitpunkt wird der Auflösungs-Beitrag veröffentlicht und die Runde endet. Die Uhrzeit gilt in der Zeitzone des Bots.                                                                                                                                                                                            |

### Nachrichten {#configuration-messages}

In dieser Konfigurationsdatei kannst du jeden Text des Moduls anpassen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=wichteln%7Cconfigs/wichteln-messages). Die folgenden Platzhalter können verwendet werden, mit einem Prozentzeichen davor geschrieben, zum Beispiel `%giftee%`. Welche Platzhalter eine Nachricht unterstützt, siehst du jeweils im Dashboard.

| Nachrichtengruppe | Inhalt                                                                                                                                                                                                                                                                                               | Platzhalter                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Dashboards        | Die Nachrichten für Geplant, Anmeldung, Ausgelost, Beendet und Abgebrochen im Wichtel-Kanal sowie die Regeln und das optionale Budget. Das Budget ist standardmäßig leer. Schreib es in den "Budget-Text" und füge `%budget%` in die Nachrichten ein, die es zeigen sollen.                          | `%budget%`, `%deadline%`, `%start%`, `%relative%`, `%count%`, `%sent%`, `%received%`, `%server%`    |
| Buttons           | Beschriftungen der Buttons für Mitmachen, Wunschzettel, Verlassen, Meine beschenkte Person, Verschickt und Erhalten sowie die Texte des Wunschzettel-Fensters.                                                                                                                                       | keine                                                                                               |
| Direktnachrichten | Die Auslosungs-Nachricht, Verschickt- und Erhalten-Hinweise, Wunschzettel-Warnungen, Erinnerungen, Reparatur- und Entfernungs-Hinweise.                                                                                                                                                              | `%giftee%`, `%letter%`, `%budget%`, `%deadline%`, `%server%`                                        |
| Antworten         | Kurze private Antworten, wenn Mitglieder oder Admins einen Button drücken oder einen Befehl nutzen. Die Beitritts-Antworten kommen mit den Buttons Wunschzettel schreiben und Verlassen.                                                                                                             | `%giftee%`, `%letter%`, `%count%`, `%user%`, `%server%`                                             |
| Auflösung         | Der Auflösungs-Beitrag und die Summen-Nachricht. Lass die Summen leer, um sie zu überspringen.                                                                                                                                                                                                       | `%pairs%`, `%count%`, `%sent%`, `%received%`                                                        |
| Log               | Zeilen für Beitritte, Austritte, verschickte und erhaltene Geschenke, Entfernungen, Abbrüche, den automatischen Start, ein wiederhergestelltes Dashboard und die Auslosung. Standardmäßig nennen die Zeilen für verschickt und erhalten niemanden, damit die Paare bis zur Auflösung geheim bleiben. | `%user%`, `%count%` und optional `%santa%` und `%giftee%` in den Zeilen für verschickt und erhalten |
| Probleme          | Die Texte der Konfigurationsprobleme: die Absage, wenn keine Runde gestartet werden kann, die Hinweise, die Log-Zeile und die Beschreibung jedes Problems.                                                                                                                                           | `%setting%`, `%problem%`, `%warnings%`, `%detail%`, `%channel%`, `%permissions%`                    |

## Fehlerbehebung {#troubleshooting}

### Konfigurationsprobleme {#config-problems}

Das Modul prüft deine Konfiguration beim Start des Bots, bei `/wichteln start` und stündlich, solange eine Runde läuft. Wenn eine Einstellung das Modul an etwas hindert, sagt es dir das, statt still nichts zu tun.

- Der automatische Start startet keine Runde mit einem Fehler, etwa einem fehlenden Wichtel-Kanal oder einem Anmeldeschluss in der Vergangenheit. Er meldet den Fehler wie die anderen Probleme und versucht es jede Stunde erneut.
- `/wichteln start` startet keine Runde, wenn der "Wichtel-Kanal" nicht gesetzt ist, nicht gefunden wird oder Berechtigungen fehlen. Die private Antwort nennt die Einstellung und was nicht stimmt. Andere Probleme siehst du in einer zweiten privaten Nachricht, nachdem die Runde gestartet wurde. `/wichteln draw` zeigt Probleme mit dem Auflösungs-Kanal, dem Auflösungs-Termin und den Erinnerungen.
- Im "Log-Kanal" wird jedes Problem einmal pro Runde und pro Bot-Start gepostet. Erst wenn du es behebst und es wiederkommt, steht es erneut dort.
- Das Bot-Log enthält dieselben Zeilen. Probleme mit dem "Log-Kanal" selbst werden nur dort gemeldet.
- Hinweise ohne Folgen für eine funktionierende Einrichtung, zum Beispiel ein fehlender Auslosungs-Termin, siehst du nur beim Start einer Runde.

| Problem                                                                                       | Folge                                                                                |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Wichtel-Kanal nicht gesetzt, nicht gefunden oder Berechtigungen fehlen                        | Die Runde kann nicht gestartet werden.                                               |
| Auflösungs-Termin gesetzt, aber kein Auflösungs-Kanal oder der Kanal ist nicht nutzbar        | Es wird kein Auflösungs-Beitrag gesendet.                                            |
| Auflösungs-Kanal gesetzt, aber kein Auflösungs-Termin                                         | Es wird kein Auflösungs-Beitrag gesendet.                                            |
| Erinnerungstage vor der Auflösung gesetzt, aber kein Auflösungs-Termin                        | Es werden keine Geschenk-Erinnerungen gesendet.                                      |
| Wunschzettel erforderlich, aber kein Auslosungs-Termin                                        | Mitglieder bekommen vor der Auslosung keine Wunschzettel-Warnung.                    |
| Kein Auslosungs-Termin                                                                        | Es wird nicht automatisch ausgelost. Nutze `/wichteln draw`.                         |
| Kein Anmeldeschluss                                                                           | Mitglieder können sich bis zur Auslosung anmelden.                                   |
| Termine in falscher Reihenfolge                                                               | Ein Schritt kann vor dem Schritt laufen, auf den er folgen sollte.                   |
| Der Anmeldeschluss liegt beim Start der Runde schon in der Vergangenheit                      | Die Runde kann nicht gestartet werden. Ändere den Anmeldeschluss oder lass ihn leer. |
| Rundenstart gesetzt, aber der Wichtel-Kanal ist nicht nutzbar                                 | Es wird nichts gepostet. Der Bot versucht es 7 Tage lang jede Stunde erneut.         |
| Der Termin für Auslosung oder Auflösung liegt beim Start der Runde schon in der Vergangenheit | Der Schritt läuft bei der nächsten stündlichen Prüfung.                              |
| Log-Kanal nicht gefunden oder Berechtigungen fehlen                                           | Log-Zeilen gehen verloren. Nur das Bot-Log meldet das.                               |
| Dashboard-Nachricht gelöscht, während die Runde läuft                                         | Der Bot postet sie neu. Ist der Kanal weg, wird das gemeldet.                        |
| Automatische Auslosung mit weniger als 3 Teilnehmenden                                        | Die Runde wird abgebrochen.                                                          |

Alle diese Texte kannst du in der Gruppe "Probleme" der [Nachrichten](#configuration-messages) anpassen.

<details>
    <summary>Die Anmeldenachricht wird nicht gepostet</summary>
    <ul>
        <li>Nennt der Bot bei <code>/wichteln start</code> eine Einstellung, behebe sie wie unter <a href="#config-problems">Konfigurationsprobleme</a> beschrieben.</li>
        <li>Stelle sicher, dass in der Konfiguration ein "Wichtel-Kanal" festgelegt ist.</li>
        <li>Mit einem "Rundenstart" erscheint die Nachricht bei der nächsten stündlichen Prüfung. Ein Termin, der mehr als 7 Tage zurückliegt, wird ignoriert.</li>
        <li>Stelle sicher, dass der Bot in diesem Kanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.</li>
        <li>Es kann nur eine Runde aktiv sein. Brich die aktuelle Runde zuerst mit <code>/wichteln cancel</code> ab.</li>
    </ul>
</details>
<details>
    <summary>Ein Mitglied hat seine Direktnachricht nicht erhalten</summary>
    <ul>
        <li>Das Mitglied muss Direktnachrichten von Servermitgliedern erlauben. Kann die Auslosungs-Nachricht oder eine Reparatur-Nachricht nicht zugestellt werden, wird das nur im Log-Kanal gemeldet, falls du einen festgelegt hast. Das Mitglied kann trotzdem den Button "Meine beschenkte Person" an der Dashboard-Nachricht nutzen.</li>
        <li>Drückt ein Wichtel "Geschenk verschickt" und die beschenkte Person ist per Direktnachricht nicht erreichbar, wird das Geschenk nicht als verschickt markiert und der Wichtel wird gebeten, es später erneut zu versuchen.</li>
        <li>Mit dem Button "Meine beschenkte Person" an der Dashboard-Nachricht kann das Mitglied jederzeit nachsehen, wen es beschenkt.</li>
    </ul>
</details>
<details>
    <summary>Die Runde wurde bei der Auslosung abgebrochen</summary>
    <ul>
        <li>Es werden mindestens 3 Teilnehmende benötigt. Ist "Wunschzettel erforderlich" aktiviert, zählen Mitglieder ohne Wunschzettel nicht mit.</li>
    </ul>
</details>
<details>
    <summary>Es gibt keinen Auflösungs-Beitrag</summary>
    <ul>
        <li>Lege in der Konfiguration einen "Auflösungs-Kanal" und einen Auflösungs-Termin fest.</li>
        <li>Stelle sicher, dass der Bot im Auflösungs-Kanal Nachrichten senden kann.</li>
    </ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jedes teilnehmende Mitglied gespeichert:

- Die Discord-Benutzer-ID des Mitglieds und seiner beschenkten Person
- Der Wunschzettel, den das Mitglied geschrieben hat
- Ob das Geschenk verschickt und erhalten wurde und ob eine Erinnerung gesendet wurde
- Ob das Mitglied aus der Runde entfernt wurde
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Die folgenden Daten werden über jede Runde gespeichert:

- Das Jahr, die Phase der Runde, der Startzeitpunkt, für den sie erstellt wurde, und die Anmeldenachricht
- Der Zeitpunkt der Auslosung und des Rundenendes

Die Daten einer Runde werden 30 Tage nach dem Ende der Runde automatisch gelöscht. Um alle von diesem Modul gespeicherten Daten sofort zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
