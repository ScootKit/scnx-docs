# Wichteln

Veranstalte Wichteln auf deinem Server: Mitglieder melden sich an, bekommen zufällig eine beschenkte Person zugelost und markieren ihre Geschenke als verschickt und erhalten.

<ModuleOverview moduleName="wichteln" />

## Funktionen {#features}

- Mitglieder treten über einen Button an der Anmeldenachricht bei und schreiben einen Wunschzettel mit Wünschen, Hobbys und Dingen, die sie nicht mögen.
- Jedes Mitglied bekommt genau eine beschenkte Person und wird von genau einem anderen Mitglied beschenkt. Niemand zieht sich selbst.
- Die Auslosung läuft automatisch zu einem Termin, den du festlegst, oder manuell mit `/wichteln draw`.
- Nach der Auslosung bekommt jeder Wichtel eine private Nachricht mit der beschenkten Person und deren Wunschzettel.
- Wichtel markieren ihr Geschenk per Button als verschickt, die beschenkten Personen als erhalten.
- Optionaler Wunschzettel-Zwang, Geschenk-Erinnerungen und ein Enthüllungs-Beitrag am Ende der Runde.
- Mitglieder, die auf "Verlassen" drücken oder mit `/wichteln kick` entfernt werden, werden in der Geschenkkette ersetzt. Mitglieder, die den Server selbst verlassen, werden nicht automatisch ersetzt, nutze dafür `/wichteln kick`.
- Jeder Text, jede Button-Beschriftung und jede Nachricht ist anpassbar.
- Das Modul ist optional: Es passiert nichts, bis ein Admin mit `/wichteln start` eine Runde startet.

## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=wichteln&ref=scnx-app-docs).
2. Öffne die [Konfiguration](#configuration-config) und wähle den "Wichtel-Kanal". Der Bot benötigt dort die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten".
3. Lege optional die [Termine](#dates), einen "Enthüllungs-Kanal", einen "Log-Kanal" und die Texte in den [Nachrichten](#configuration-messages) fest (zum Beispiel das Budget im "Budget-Text").
4. Starte eine Runde mit `/wichteln start`. Der Bot postet die Anmeldenachricht im Wichtel-Kanal.

## Nutzung {#usage}

### Anmeldung {#signup}

Die Anmeldenachricht zeigt das Budget, die Regeln, den Anmeldeschluss und die Zahl der Teilnehmenden. Mitglieder nutzen die Buttons darunter:

- **Beitreten** nimmt das Mitglied in die Runde auf.
- **Wunschzettel schreiben** öffnet ein Fenster, in dem das Mitglied seinen Wunschzettel schreibt. Der Wunschzettel kann bis zur Auslosung geändert werden.
- **Verlassen** entfernt das Mitglied aus der Runde.

Beitreten ist bis zum Anmeldeschluss möglich, oder bis zur Auslosung, wenn du keinen Anmeldeschluss festgelegt hast. Mitglieder müssen Direktnachrichten von Servermitgliedern erlauben, sonst kann der Bot sie nicht erreichen.

Andere Mitglieder können den Wunschzettel nicht sehen. Nach der Auslosung erhält ihn der Wichtel des Mitglieds per Direktnachricht.

### Auslosung {#draw}

Es werden mindestens 3 Teilnehmende benötigt. Sind es weniger, wird die Runde abgebrochen. Die Auslosung läuft automatisch zum eingestellten Auslosungs-Termin. Lässt du den Auslosungs-Termin leer, wird nur gelost, wenn ein Admin `/wichteln draw` ausführt.

Ist "Wunschzettel erforderlich" aktiviert, bekommen Mitglieder ohne Wunschzettel etwa einen Tag vor der automatischen Auslosung eine Warnung. Mitglieder, die bei der Auslosung noch keinen Wunschzettel haben, werden ausgeschlossen und per Direktnachricht darüber informiert. Mitglieder ohne Wunschzettel erhalten eine Warnung statt einer Erinnerung, und nur wenn ein Auslosungs-Termin gesetzt ist.

### Schenken {#gifting}

Nach der Auslosung bekommt jeder Wichtel eine Direktnachricht mit der beschenkten Person und dem Wunschzettel. Die Buttons an der Dashboard-Nachricht zeigen die beschenkte Person erneut an und markieren das Geschenk:

- Der Wichtel drückt **Geschenk verschickt**. Die beschenkte Person erhält eine Direktnachricht mit einem Button **Geschenk erhalten**.
- Die beschenkte Person drückt **Geschenk erhalten**, um den Erhalt zu bestätigen.

Wenn du "Erinnerungstage vor der Enthüllung" einstellst, erhalten Wichtel, die ihr Geschenk noch nicht als verschickt markiert haben, so viele Tage vor der Enthüllung eine Erinnerung.

### Enthüllung und Ende der Runde {#reveal}

Zum Enthüllungs-Termin postet der Bot im Enthüllungs-Kanal eine Nachricht, die auflistet, wer wen beschenkt hat, gefolgt von den Summen der verschickten und erhaltenen Geschenke. Die Summen sind eine eigene Nachricht, die nur gepostet wird, wenn ihr Text in der Nachrichten-Konfiguration nicht leer ist. Danach endet die Runde und die Dashboard-Nachricht zeigt den Abschlusstext. Die Paare sind im Enthüllungs-Kanal öffentlich sichtbar. Die Runde endet zum Enthüllungs-Termin, oder bis zu 3 Tage später, falls der Enthüllungs-Beitrag nicht gepostet werden konnte. Ohne Enthüllungs-Termin endet die Runde 14 Tage nach der Auslosung. Ohne Enthüllungs-Kanal gibt es keinen Enthüllungs-Beitrag und die Runde endet trotzdem zum Enthüllungs-Termin.

### Mitglieder, die austreten {#repair}

Wenn ein Mitglied nach der Auslosung auf "Verlassen" drückt oder von einem Admin entfernt wird, repariert der Bot die Geschenkkette: Der Wichtel des fehlenden Mitglieds bekommt dessen beschenkte Person, und beide Seiten werden per Direktnachricht informiert. Bleiben weniger als 3 Teilnehmende übrig, wird die Runde abgebrochen.

**Einschränkung:** Der Bot bemerkt nicht, wenn ein Mitglied den Server selbst verlässt. Die Geschenkkette bleibt dann unverändert, bis ein Admin das Mitglied mit `/wichteln kick user:<User>` entfernt.

### Termine {#dates}

Anmeldeschluss, Auslosung und Enthüllung bestehen jeweils aus drei Feldern: Monat, Tag und Stunde. Die Zeiten richten sich nach der Zeitzone deines Servers (der Zeitzone des Bots). Setzt du den Monat auf 0, bleibt der Termin ungesetzt. Ein Tag, den es im Monat nicht gibt, etwa der 31. Februar, springt in den nächsten Monat.

Das Jahr gibst du nicht an. Der Bot verwendet das Jahr, in dem die Runde gestartet wurde, und wendet eine fortlaufende Regel an: Ein späterer Termin, der im Kalender vor dem vorherigen Termin liegt, gehört zum nächsten Jahr. Zum Beispiel reicht ein Anmeldeschluss am 20. November, eine Auslosung am 1. Dezember und eine Enthüllung am 6. Januar über den Jahreswechsel.

Ist ein Termin in diesem Jahr beim Start der Runde schon vorbei, läuft der passende Schritt bei der nächsten stündlichen Prüfung. Startest du eine Runde zum Beispiel nach dem eingestellten Auslosungs-Termin, wird sofort gelost. Der Zeitplaner läuft einmal pro Stunde, automatische Schritte passieren daher bis zu etwa eine Stunde nach der eingestellten Zeit.

## Befehle {#commands}

<SlashCommandExplanation />

Alle Befehle benötigen die Berechtigung "Server verwalten".

| Befehl                       | Beschreibung                                                                              |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| `/wichteln start`            | Startet eine neue Runde und postet die Anmeldenachricht im Wichtel-Kanal.                 |
| `/wichteln draw`             | Lost die beschenkten Personen sofort aus, ohne auf den Auslosungs-Termin zu warten.       |
| `/wichteln cancel`           | Bricht die aktuelle Runde ab.                                                             |
| `/wichteln kick user:<User>` | Entfernt ein Mitglied aus der Runde. Nach der Auslosung wird die Geschenkkette repariert. |

Es kann immer nur eine Runde aktiv sein.

## Konfiguration {#configuration}

### Konfiguration {#configuration-config}

In dieser Konfigurationsdatei kannst du die Kanäle, Termine und Regeln des Wichtelns einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=wichteln%7Cconfigs/wichteln).

| Feld                               | Beschreibung                                                                                                                                                                                                                                                                                           |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Wichtel-Kanal                      | Kanal, in dem die Anmeldenachricht gepostet wird. Hier treten Mitglieder bei, schreiben Wunschzettel und markieren Geschenke.                                                                                                                                                                          |
| Anmeldeschluss Monat               | Monat des Anmeldeschlusses (1-12). 0 bedeutet nicht gesetzt.                                                                                                                                                                                                                                           |
| Anmeldeschluss Tag                 | Tag des Monats des Anmeldeschlusses (1-31).                                                                                                                                                                                                                                                            |
| Anmeldeschluss Stunde              | Stunde des Anmeldeschlusses (0-23, Serverzeit).                                                                                                                                                                                                                                                        |
| Auslosung Monat                    | Monat der automatischen Auslosung (1-12). 0 bedeutet nicht gesetzt.                                                                                                                                                                                                                                    |
| Auslosung Tag                      | Tag des Monats der automatischen Auslosung (1-31).                                                                                                                                                                                                                                                     |
| Auslosung Stunde                   | Stunde der automatischen Auslosung (0-23, Serverzeit).                                                                                                                                                                                                                                                 |
| Enthüllung Monat                   | Monat der Enthüllung (1-12). 0 bedeutet nicht gesetzt.                                                                                                                                                                                                                                                 |
| Enthüllung Tag                     | Tag des Monats der Enthüllung (1-31).                                                                                                                                                                                                                                                                  |
| Enthüllung Stunde                  | Stunde der Enthüllung (0-23, Serverzeit).                                                                                                                                                                                                                                                              |
| Enthüllungs-Kanal                  | Kanal, in dem der Enthüllungs-Beitrag am Ende der Runde veröffentlicht wird.                                                                                                                                                                                                                           |
| Log-Kanal                          | Optionaler Kanal, der eine Log-Zeile für Beitritte, Austritte, versendete und erhaltene Geschenke, Entfernungen, Abbrüche und die Auslosung erhält.                                                                                                                                                    |
| Wunschzettel erforderlich          | Wenn aktiviert, nehmen nur Mitglieder teil, die vor der Auslosung einen Wunschzettel geschrieben haben. Mitglieder ohne Wunschzettel bekommen etwa einen Tag vor der Auslosung eine Warnung und werden, falls sie bei der Auslosung noch keinen haben, per Direktnachricht informiert und ausgelassen. |
| Erinnerungstage vor der Enthüllung | Tage vor der Enthüllung, an denen Wichtel, die ihr Geschenk noch nicht verschickt haben, eine Erinnerung erhalten. 0 deaktiviert die Erinnerung.                                                                                                                                                       |

### Nachrichten {#configuration-messages}

In dieser Konfigurationsdatei kannst du jeden Text des Moduls anpassen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=wichteln%7Cconfigs/wichteln-messages). Die folgenden Platzhalter können verwendet werden, mit einem Prozentzeichen davor geschrieben, zum Beispiel `%giftee%`. Welche Platzhalter eine Nachricht unterstützt, siehst du jeweils im Dashboard.

| Nachrichtengruppe | Inhalt                                                                                                                                     | Platzhalter                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Dashboards        | Die Nachrichten für Anmeldung, Ausgelost, Beendet und Abgebrochen im Wichtel-Kanal sowie Budget und Regeln.                                | `%budget%`, `%deadline%`, `%count%`, `%sent%`, `%received%`, `%server%` |
| Buttons           | Beschriftungen der Buttons Beitreten, Wunschzettel, Verlassen, Beschenkte Person, Verschickt und Erhalten sowie des Wunschzettel-Fensters. | keine                                                                   |
| Direktnachrichten | Die Auslosungs-Nachricht, Verschickt- und Erhalten-Hinweise, Wunschzettel-Warnungen, Erinnerungen, Reparatur- und Entfernungs-Hinweise.    | `%giftee%`, `%letter%`, `%budget%`, `%deadline%`, `%server%`            |
| Antworten         | Kurze private Antworten, wenn Mitglieder oder Admins einen Button drücken oder einen Befehl nutzen.                                        | `%giftee%`, `%letter%`, `%count%`, `%user%`, `%server%`                 |
| Enthüllung        | Der Enthüllungs-Beitrag und die Summen-Nachricht. Lass die Summen leer, um sie zu überspringen.                                            | `%pairs%`, `%count%`, `%sent%`, `%received%`                            |
| Log               | Zeilen für Beitritte, Austritte, verschickte und erhaltene Geschenke, Entfernungen, Abbrüche und die Auslosung.                            | `%user%`, `%santa%`, `%giftee%`, `%count%`                              |

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Die Anmeldenachricht wird nicht gepostet</summary>
    <ul>
        <li>Stelle sicher, dass in der Konfiguration ein "Wichtel-Kanal" festgelegt ist.</li>
        <li>Stelle sicher, dass der Bot in diesem Kanal die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.</li>
        <li>Es kann nur eine Runde aktiv sein. Brich die aktuelle Runde zuerst mit <code>/wichteln cancel</code> ab.</li>
    </ul>
</details>
<details>
    <summary>Ein Mitglied hat seine Direktnachricht nicht erhalten</summary>
    <ul>
        <li>Das Mitglied muss Direktnachrichten von Servermitgliedern erlauben. Kann die Auslosungs-Nachricht oder eine Reparatur-Nachricht nicht zugestellt werden, wird das nur im Log-Kanal gemeldet, falls du einen festgelegt hast. Das Mitglied kann trotzdem "Beschenkte Person anzeigen" auf der Dashboard-Nachricht nutzen.</li>
        <li>Drückt ein Wichtel "Geschenk verschickt" und die beschenkte Person ist per Direktnachricht nicht erreichbar, wird das Geschenk nicht als verschickt markiert und der Wichtel wird gebeten, es später erneut zu versuchen.</li>
        <li>Das Mitglied kann jederzeit auf der Dashboard-Nachricht auf "Beschenkte Person anzeigen" drücken, um seine beschenkte Person erneut zu sehen.</li>
    </ul>
</details>
<details>
    <summary>Die Runde wurde bei der Auslosung abgebrochen</summary>
    <ul>
        <li>Es werden mindestens 3 Teilnehmende benötigt. Ist "Wunschzettel erforderlich" aktiviert, zählen Mitglieder ohne Wunschzettel nicht mit.</li>
    </ul>
</details>
<details>
    <summary>Es gibt keinen Enthüllungs-Beitrag</summary>
    <ul>
        <li>Lege in der Konfiguration einen "Enthüllungs-Kanal" und einen Enthüllungs-Termin fest.</li>
        <li>Stelle sicher, dass der Bot im Enthüllungs-Kanal Nachrichten senden kann.</li>
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

- Das Jahr, die Phase der Runde und die Anmeldenachricht
- Der Zeitpunkt der Auslosung und des Rundenendes

Die Daten einer Runde werden 30 Tage nach dem Ende der Runde automatisch gelöscht. Um alle von diesem Modul gespeicherten Daten sofort zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
