# Winter-Feiertage

Füge einen Countdown bis Weihnachten hinzu, erstelle einen Adventskalender und veranstalte ein Weihnachts-Süßigkeiten-Event auf deinem Discord, um die Feiertage zu feiern!

<ModuleOverview moduleName="holidays" />

## Funktionen {#features}

- Weihnachts-/Neujahrs-Countdown, der als Name eines Sprachkanals oder einer Kategorie angezeigt und stündlich aktualisiert wird.
- Interaktiver Adventskalender mit 24 Türchen, die Benutzer im Dezember öffnen können.
- Anpassbare Nachrichten für jeden Kalendertag.
- Optionale Rollenbelohnungen für das Öffnen einzelner Tage oder aller 24 Tage.
- Optionale Zufallsanordnung der Buttons für ein spannenderes Adventskalender-Erlebnis.
- Optionale Zuckerstangen-Belohnungen und eine private Nachricht für jedes Türchen des Adventskalenders.
- Ein optionales Weihnachts-Süßigkeiten-Event: tägliches Abholen, Geschenke, die in deinen Kanälen erscheinen, ein gemeinsamer Bosskampf gegen den Grinch, ein Zuckerstangen-Shop und eine sich selbst aktualisierende Bestenliste.
- Jeder Teil des Weihnachts-Events ist ausgeschaltet, bis du ihn aktivierst. Server, die nur den Adventskalender und den Countdown nutzen, bemerken keine Änderung.

## Einrichtung {#setup}

### Weihnachts-Countdown

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=holidays&ref=scnx-app-docs).
2. Öffne die [Countdown-Konfiguration](#config-countdown) und aktiviere sie.
3. Erstelle einen Sprachkanal oder eine Kategorie auf deinem Server und lege sie in der Konfiguration fest. Der Bot benennt diesen Kanal um, um den Countdown anzuzeigen.
4. Der Bot benötigt die Berechtigung "Kanäle verwalten" für den Countdown-Kanal.

### Adventskalender

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=holidays&ref=scnx-app-docs).
2. Öffne die [Adventskalender-Konfiguration](#config-calendar) und aktiviere sie.
3. Erstelle einen leeren Textkanal und lege ihn in der Konfiguration fest.
4. Passe die Nachricht für jeden der 24 Tage an und konfiguriere optional Rollenbelohnungen.
   Gib Türchen optional eine Zuckerstangen-Belohnung oder eine private Nachricht in den [Adventskalender-Türchen-Belohnungen](#config-advent-rewards).
5. Der Bot benötigt die Berechtigungen "Nachrichten senden", "Nachrichtenverlauf anzeigen" und "Nachrichten verwalten" im Kalenderkanal.

### Weihnachts-Event {#setup-event}

Das Weihnachts-Event wird in der [Konfiguration des Weihnachts-Events](#config-event) eingerichtet und ist standardmäßig ausgeschaltet. Es passiert nichts und keine Funktion arbeitet, bis du "Weihnachts-Event aktivieren" einschaltest. Wähle eines der beiden üblichen Setups.

**Nur Adventskalender mit Zuckerstangen-Belohnungen und Shop**

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=holidays&ref=scnx-app-docs).
2. Öffne die [Konfiguration des Weihnachts-Events](#config-event) und aktiviere "Weihnachts-Event aktivieren" und "Geschenk-Shop aktivieren".
3. Lass "Tägliches Abholen aktivieren" aus und lass "Geschenk-Spawn-Kanäle", "Boss-Kanal" und "Bestenlisten-Kanal" leer.
4. Lege deine Artikel in den [Zuckerstangen-Shop-Artikeln](#config-shop-items) an.
5. Gib Türchen in den [Adventskalender-Türchen-Belohnungen](#config-advent-rewards) einen Zuckerstangen-Bereich. Mitglieder sammeln Zuckerstangen durch das Öffnen von Türchen und geben sie mit `/giftshop` aus.

**Das komplette Event**

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=holidays&ref=scnx-app-docs).
2. Öffne die [Konfiguration des Weihnachts-Events](#config-event) und aktiviere "Weihnachts-Event aktivieren", "Tägliches Abholen aktivieren" und "Geschenk-Shop aktivieren".
3. Wähle einen "Name der Währung" und ein "Emoji der Währung" oder behalte die Standard-Zuckerstangen.
4. Lege "Geschenk-Spawn-Kanäle" fest, damit Geschenke erscheinen, den "Boss-Kanal" für das Boss-Event und den "Bestenlisten-Kanal" für die sich selbst aktualisierende Bestenliste. Jede dieser Funktionen ist aus, solange ihr Kanal leer ist.
5. Lege deine Artikel in den [Zuckerstangen-Shop-Artikeln](#config-shop-items) an und passe bei Bedarf die Texte in den [Nachrichten](#config-strings) an.
6. Füge optional den Türchen des Adventskalenders Belohnungen in den [Adventskalender-Türchen-Belohnungen](#config-advent-rewards) hinzu.

Der Bot benötigt diese Berechtigungen:

- "Kanal ansehen", "Nachrichten senden" und "Links einbetten" in den Geschenk-Spawn-Kanälen, im Boss-Kanal, im Bestenlisten-Kanal und im Abwicklungs-Kanal, falls du einen festlegst.
- "Kanal ansehen", "Nachrichten senden", "Links einbetten", "Nachrichtenverlauf anzeigen" und "Nachrichten anheften" im Test-Kanal.
- "Rollen verwalten" für die Grinch-Rolle und für jede im Shop verkaufte Rolle. Die Rolle des Bots muss in der Rollenhierarchie darüber stehen.

### Das Event testen {#testing}

Du kannst das Event zu jeder Jahreszeit in einem Test-Kanal ausprobieren, ohne das echte Event zu beeinflussen. Aktiviere den "Testmodus" in der [Konfiguration des Weihnachts-Events](#config-event) und lege einen "Test-Kanal" fest. Über die Kanalberechtigungen bestimmst du, wer den Test-Kanal sehen und teilnehmen kann.

- Der Test-Kanal verhält sich immer wie das Live-Event: `/candycane` und `/giftshop` funktionieren dort zu jeder Jahreszeit, Geschenke erscheinen dort und er bekommt eine eigene Test-Bestenliste.
- Bosse erscheinen im Test-Kanal nie von selbst. Mitglieder mit der Berechtigung "Server verwalten" nutzen stattdessen den Button "Spawn test boss".
- Die Ein/Aus-Schalter ("Weihnachts-Event aktivieren", "Tägliches Abholen aktivieren", "Geschenk-Shop aktivieren") werden im Test-Kanal nicht geprüft.
- Test-Währung, Käufe und die Test-Bestenliste sind komplett vom echten Event getrennt.
- Die Grinch-Rolle und im Shop gekaufte Rollen werden echt vergeben, damit du das ganze Setup prüfen kannst.
- Wenn du den Testmodus ausschaltest oder den Test-Kanal änderst, werden alle Testdaten entfernt.

Falls du die Befehle in den Discord-Servereinstellungen (Integrationen) auf bestimmte Kanäle beschränkt hast, erlaube sie auch im Test-Kanal.

## Nutzung {#usage}

### Weihnachts-Countdown

Sobald er aktiviert ist, aktualisiert der Bot den Namen des konfigurierten Kanals automatisch stündlich, um einen Countdown bis zum ausgewählten Datum (Heiligabend, erster Weihnachtstag oder Neujahr) anzuzeigen. Ist das Datum verstrichen, spiegelt der Kanalname das wider.

### Adventskalender

Der Bot sendet eine interaktive Nachricht im konfigurierten Kanal mit 24 Buttons (einer für jeden Tag). Im Dezember gilt:

- Benutzer können auf den Button des aktuellen Tages klicken, um das Türchen zu "öffnen" und eine angepasste Nachricht zu erhalten.
- Die Buttons für andere Tage sind deaktiviert (außer die Zufallsanordnung der Buttons ist aktiviert).
- Wenn für einen Tag Rollenbelohnungen konfiguriert sind, erhalten Benutzer diese Rollen automatisch beim Öffnen des Türchens.
- Benutzer, die alle 24 Türchen öffnen, können zusätzliche Belohnungsrollen erhalten.
- Jeder Benutzer kann jeden Tag nur einmal öffnen (außer das erneute Ansehen ist aktiviert).
- Hat ein Türchen eine Zuckerstangen-Belohnung, erhält der Benutzer beim ersten Öffnen eine zufällige Menge zwischen Minimum und Maximum, und der Platzhalter `%candy%` in der Türchen-Nachricht zeigt die Menge. Die Belohnung wird nur ausgezahlt, solange das Weihnachts-Event aktiviert und live ist (1. bis 26. Dezember), und nie erneut beim wiederholten Öffnen. Andernfalls funktioniert das Türchen weiterhin, zahlt aber keine Zuckerstangen aus und `%candy%` zeigt 0.
- Hat ein Türchen eine private Nachricht, sendet der Bot sie dem Benutzer, nachdem er das Türchen geöffnet hat. Sie unterstützt die Platzhalter `%day%`, `%daysToGo%` und `%candy%`. Hat der Benutzer private Nachrichten deaktiviert, wird sie übersprungen.

### Weihnachts-Event {#usage-event}

#### Das Eventjahr {#event-year}

Alle Daten richten sich nach der für deinen Bot eingestellten Zeitzone.

| Zeitraum                   | Was passiert                                                                                                                                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. bis 26. Dezember        | Das Event ist live: `/candycane`, Geschenk-Spawns, Bosse, der Shop, Türchen-Belohnungen und die Live-Bestenliste funktionieren.                                                                               |
| 24. Dezember               | Doppelter Belohnungstag. Zuckerstangen aus `/candycane` und aus Geschenken werden verdoppelt. Türchen-Belohnungen und Boss-Auszahlungen werden nicht verdoppelt.                                              |
| 27. Dezember bis 2. Januar | Nur ausgeben. Das Sammeln ist vorbei, aber `/giftshop` bleibt offen, damit niemand auf ungenutzten Zuckerstangen sitzen bleibt. Der Bot sendet die Abschlussnachricht und die Bestenliste zeigt den Endstand. |
| Alle anderen Tage          | Das Event ruht. Die Befehle antworten, dass das Event vorbei ist oder noch nicht begonnen hat, und die Bestenliste und der Countdown zeigen, wie lange es bis Weihnachten dauert.                             |

Am 3. Januar, direkt nach dem Ende der Nur-ausgeben-Phase (beim ersten Tageswechsel der Nebensaison), werden Guthaben, Käufe und Bosse der Saison zurückgesetzt, übrige Währung ist also weg. Das Zurücksetzen wartet, wenn die Abschlussnachricht noch aussteht, und entfällt, wenn niemand mitgespielt hat. Mit dem Testmodus kannst du das Event außerhalb dieser Daten ausprobieren.

#### Zuckerstangen sammeln {#earning-candy}

- **`/candycane`** kann einmal pro Tag genutzt werden, oder einmal pro Abklingzeit, wenn du eine "Abklingzeit des täglichen Abholens (Stunden)" festlegst. Meistens gibt es eine zufällige Menge Zuckerstangen, und ein Geschenk kann zu einem viel größeren Jackpot werden. Sonst spielt der Grinch einen Streich: Das Mitglied verliert etwas Währung (nie unter 0), bekommt für eine Weile die Grinch-Rolle (nur wenn du eine festlegst) oder erschrickt nur und behält alles. Die Rolle wird von einem stündlichen Durchlauf entfernt und kann deshalb bis zu eine Stunde länger bleiben als eingestellt. Erfordert "Tägliches Abholen aktivieren".
- **Geschenke** erscheinen in deinen "Geschenk-Spawn-Kanälen". Nach einer zufälligen Wartezeit lässt die nächste Nachricht in einem der Kanäle ein Geschenk erscheinen, und zusätzlich lässt der Bot pro Tag eine einstellbare Anzahl Geschenke zu zufälligen Zeiten erscheinen, auch wenn niemand schreibt. Das erste Mitglied, das auf den Abholen-Button klickt, bekommt die Belohnung. Ein Geschenk, das niemand abholt, verschwindet nach der "Verfallszeit (Minuten)".
- **Das Boss-Event** läuft im "Boss-Kanal" vom "Starttag der Boss-Woche" bis zum 24. Dezember. Bosse starten am "Starttag der Boss-Woche" (Standard 10), vom 1. bis 9. Dezember erscheinen also keine Bosse, solange du ihn nicht änderst. Bosse wie der Grinch erscheinen zu zufälligen Zeiten zwischen der frühesten und spätesten Stunde der "Automatischen Spawns", und die ganze Community kämpft gemeinsam: Jedes Mitglied kann einen Teil seiner Währung gegen den Boss einsetzen, bis die Kampfdauer abgelaufen ist. Je mehr eingesetzt wird, desto höher die Siegchance, bis zu einer maximalen Chance, sobald der Pool die LP des Bosses erreicht, und die LP des Bosses skalieren mit der Zahl der aktiven Mitglieder. Wird der Boss besiegt, bekommt jeder Kämpfer seinen Einsatz multipliziert mit dem "Gewinn-Multiplikator" zurück. Gewinnt der Boss, sind die Einsätze verloren. Der Bot kann alle Kämpfer pingen, wenn der Kampf endet.
- Türchen-Belohnungen und Boss-Auszahlungen werden am 24. Dezember nie verdoppelt, nur `/candycane` und Geschenke.
- Mitglieder können einander nichts stehlen. Im Weihnachts-Event gibt es kein Stehlen.
- Auch Türchen des Adventskalenders können Zuckerstangen auszahlen, siehe [Adventskalender](#usage).

#### Zuckerstangen ausgeben {#spending-candy}

`/giftshop` zeigt die Artikelliste mit Preisen und Beschreibungen sowie das Guthaben des Mitglieds, nur für das Mitglied sichtbar, das den Befehl ausgeführt hat. Beim Auswählen eines Artikels erscheint eine Bestätigung mit dem Preis und dem Guthaben vor und nach dem Kauf, und der Button "Kauf bestätigen" ist mit Begründung deaktiviert, wenn das Mitglied den Artikel nicht kaufen kann (nicht genug Währung, ausverkauft, Limit erreicht).

- Artikel vom Typ "Rolle (Standard)" vergeben die konfigurierte Rolle sofort und dauerhaft. Kann die Rolle nicht vergeben werden, wird der Kauf abgebrochen und die Währung erstattet.
- Artikel vom Typ "Benutzerdefiniert (manuell abgewickelt)" werden im "Abwicklungs-Kanal" gepostet, damit du den Gewinn selbst vergeben kannst. Ist er leer, landen sie im Log-Kanal des Bots.
- Bestand und Limit pro Nutzer gelten für die ganze Saison.
- Jeder Artikel kann eine eigene Kauf-Nachricht mit den Platzhaltern `%item%`, `%price%`, `%balance%` und `%user%` haben.

#### Bestenliste und Countdown {#leaderboard}

Sobald ein "Bestenlisten-Kanal" festgelegt ist, sendet der Bot eine einzelne Nachricht und hält sie aktuell, zu jeder Jahreszeit. Außerhalb des Events zeigt sie, wie lange es bis Weihnachten dauert. Solange das Event live ist, sortiert sie die Mitglieder nach der Währung, die sie besitzen, plus dem, was sie im Shop ausgegeben haben. Käufe kosten also nie einen Platz, Grinch-Streiche und verlorene Bosskämpfe schon. Solange das Event live ist, endet die Bestenliste mit einer Countdown-Zeile: an den meisten Tagen mit den verbleibenden Tagen zum Sammeln, am 24. Dezember mit einem Frohe-Weihnachten-Text und am 25. und 26. Dezember mit "die letzten Tage zum Sammeln". Nach dem Event zeigt sie den Endstand. Das Aussehen lässt sich in den [Nachrichten](#config-strings) anpassen.

Der Weihnachts-Countdown-Kanal gehört nicht zum Weihnachts-Event. Du richtest ihn in der separaten Konfiguration [Weihnachtscountdown](#config-countdown) ein, und er funktioniert unabhängig vom Event.

Nach dem Event postet der Bot außerdem eine Abschlussnachricht, aber nur, wenn ein "Bestenlisten-Kanal" festgelegt ist und jemand in dieser Saison Währung verdient hat.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl       | Beschreibung                                                                                                                                                |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/candycane` | Öffne dein tägliches Geschenk vom Weihnachtsmann und sammle Währung. Einmal pro Tag oder pro Abklingzeit nutzbar. Erfordert "Tägliches Abholen aktivieren". |
| `/giftshop`  | Zeigt den Geschenk-Shop mit deinem Guthaben und kauft einen Artikel. Erfordert "Geschenk-Shop aktivieren". Bleibt bis zum 2. Januar verfügbar.              |

Beide Befehle sind auf jedem Server registriert, der das Modul nutzt. Solange die jeweilige Funktion ausgeschaltet ist, antworten sie einfach, dass sie nicht aktiv ist.

## Konfiguration {#configuration}

### Weihnachtscountdown {#config-countdown}

In dieser Konfigurationsdatei kannst du den Weihnachts-Countdown einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=holidays%7Cconfigs/countdown).

| Feld            | Beschreibung                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| Aktiviert?      | Aktiviere oder deaktiviere die Countdown-Funktion.                                                             |
| Countdown-Kanal | Ein Sprachkanal oder eine Kategorie, deren Name aktualisiert wird, um den Countdown anzuzeigen.                |
| Countdown bis   | Wähle das Zieldatum: 24. Dezember (Heiligabend), 25. Dezember (erster Weihnachtstag) oder 1. Januar (Neujahr). |

### Adventskalender {#config-calendar}

In dieser Konfigurationsdatei kannst du den Adventskalender einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=holidays%7Cconfigs/advent-calendar).

| Feld                                                                        | Beschreibung                                                                                                                                                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiviert?                                                                  | Aktiviere oder deaktiviere die Adventskalender-Funktion.                                                                                                                                                      |
| Adventskalenderkanal                                                        | Ein leerer Textkanal, in dem die Adventskalender-Nachricht gesendet wird.                                                                                                                                     |
| Kalendernachricht                                                           | Die Hauptnachricht, die über den Kalender-Buttons angezeigt wird.                                                                                                                                             |
| "Bereits geöffnet" Nachricht                                                | Nachricht, die angezeigt wird, wenn ein Benutzer versucht, ein bereits geöffnetes Türchen erneut zu öffnen.                                                                                                   |
| Belohnungsrollen für das Öffnen aller Türchen (optional)                    | Rollen, die Benutzer erhalten, die alle 24 Türchen öffnen.                                                                                                                                                    |
| Nutzern erlauben, die Kalendernachricht am aktuellen Tag mehrfach zu sehen? | Wenn aktiviert, können Benutzer die Nachricht des Tages erneut ansehen, nachdem sie das Türchen geöffnet haben.                                                                                               |
| Knöpfe stündlich mixen?                                                     | Wenn aktiviert, wird die Reihenfolge der Buttons jede Stunde neu gemischt. Alle Buttons sind anklickbar, aber nur das Türchen des aktuellen Tages lässt sich erfolgreich öffnen.                              |
| Nachricht beim Öffnen von falschen Tagen                                    | Nachricht, die angezeigt wird, wenn ein Benutzer versucht, ein Türchen zu öffnen, das nicht das heutige ist.                                                                                                  |
| Tag 1-24 Öffnungsnachricht                                                  | Die Nachricht, die angezeigt wird, wenn ein Benutzer das Türchen des jeweiligen Tages öffnet, mit den Platzhaltern `%day%`, `%daysToGo%` und `%candy%`. Jeder Tag hat seine eigene konfigurierbare Nachricht. |
| Tag 1-24 Belohnungsrollen (optional)                                        | Rollen, die Benutzer erhalten, wenn sie das Türchen des jeweiligen Tages öffnen.                                                                                                                              |
| Emojis                                                                      | Die Emojis, die auf den Kalender-Buttons angezeigt werden. Du kannst für jeden Tag (1-24) ein Emoji festlegen.                                                                                                |

### Weihnachts-Event {#config-event}

In dieser Konfigurationsdatei kannst du das Weihnachts-Event einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=holidays%7Cconfigs/christmas-event). Die meisten Felder sind ausgeblendet, bis du das Event aktivierst. Die Felder zum täglichen Abholen erscheinen erst, wenn "Tägliches Abholen aktivieren" an ist, und der "Abwicklungs-Kanal" erst, wenn "Geschenk-Shop aktivieren" an ist.

| Feld                                         | Beschreibung                                                                                                        |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Weihnachts-Event aktivieren                  | Hauptschalter, standardmäßig aus. Solange er aus ist, tut das Event überhaupt nichts.                               |
| Tägliches Abholen aktivieren                 | Erlaubt Mitgliedern, mit `/candycane` Währung zu sammeln.                                                           |
| Geschenk-Shop aktivieren                     | Erlaubt Mitgliedern, mit `/giftshop` Währung auszugeben.                                                            |
| Name der Währung                             | Name der Event-Währung (Mehrzahl), Standard "Candy Canes".                                                          |
| Emoji der Währung                            | Emoji neben den Beträgen, Standard 🍬. Nur Standard-Emojis werden unterstützt.                                      |
| Testmodus                                    | Probiere das Event mit getrennten Testdaten aus, siehe [Das Event testen](#testing).                                |
| Test-Kanal                                   | Der Kanal, in dem das Test-Event läuft.                                                                             |
| Geschenk-Chance (%)                          | Chance, dass `/candycane` Währung gibt statt eines Grinch-Streichs.                                                 |
| Minimale Geschenk-Belohnung                  | Kleinste Belohnung eines Geschenks beim täglichen Abholen.                                                          |
| Maximale Geschenk-Belohnung                  | Größte Belohnung eines Geschenks beim täglichen Abholen.                                                            |
| Jackpot-Chance (%)                           | Chance, dass ein gewonnenes Geschenk zum Jackpot wird.                                                              |
| Jackpot-Belohnung                            | Belohnung eines Jackpots.                                                                                           |
| Minimaler Verlust bei einem Grinch-Streich   | Kleinster Betrag, den ein Mitglied durch einen Grinch-Streich verlieren kann.                                       |
| Maximaler Verlust bei einem Grinch-Streich   | Größter Betrag, den ein Mitglied durch einen Grinch-Streich verlieren kann.                                         |
| Tägliches Abholen für alle sichtbar          | Das Ergebnis von `/candycane` öffentlich statt nur für das Mitglied posten.                                         |
| Abklingzeit des täglichen Abholens (Stunden) | Abklingzeit zwischen zwei Abholungen. 0 bedeutet einmal pro Tag.                                                    |
| Grinch-Rolle                                 | Rolle, die für eine Weile vergeben wird, wenn der Grinch einen Streich spielt. Leer lassen zum Überspringen.        |
| Dauer der Grinch-Rolle (Minuten)             | Wie lange die Grinch-Rolle bei einem Mitglied bleibt.                                                               |
| Geschenk-Spawn-Kanäle                        | Kanäle, in denen Geschenke erscheinen. Leer lassen, um Geschenk-Spawns zu deaktivieren.                             |
| Minimaler Spawn-Abstand (Stunden)            | Kürzeste Wartezeit zwischen zwei durch Aktivität erscheinenden Geschenken.                                          |
| Maximaler Spawn-Abstand (Stunden)            | Längste Wartezeit zwischen zwei durch Aktivität erscheinenden Geschenken.                                           |
| Minimale Belohnung für ein Geschenk          | Kleinste Belohnung eines erschienenen Geschenks.                                                                    |
| Maximale Belohnung für ein Geschenk          | Größte Belohnung eines erschienenen Geschenks.                                                                      |
| Verfallszeit (Minuten)                       | Wie lange ein nicht abgeholtes Geschenk abholbar bleibt.                                                            |
| Automatische Spawns pro Tag                  | Geschenke, die jeden Tag zu zufälligen Zeiten erscheinen, auch wenn niemand schreibt. 0 bedeutet nur bei Aktivität. |
| Automatische Spawns: früheste Stunde         | Früheste Uhrzeit am Tag für diese Geschenke.                                                                        |
| Automatische Spawns: späteste Stunde         | Späteste Uhrzeit am Tag für diese Geschenke.                                                                        |
| Bestenlisten-Kanal                           | Kanal für die sich selbst aktualisierende Bestenliste. Leer lassen zum Deaktivieren.                                |
| Einträge der Bestenliste                     | Wie viele Mitglieder die Bestenliste und die Abschlussnachricht anzeigen.                                           |
| Benutzeranzeigemodus                         | Ob Mitglieder als Erwähnung, Tag oder Nickname angezeigt werden.                                                    |
| Abwicklungs-Kanal                            | Kanal, in dem Käufe von benutzerdefinierten Shop-Artikeln gepostet werden. Leer nutzt den Log-Kanal des Bots.       |
| Boss-Kanal                                   | Kanal, in dem Bosse erscheinen. Leer lassen, um das Boss-Event zu deaktivieren.                                     |
| Starttag der Boss-Woche                      | Tag im Dezember, ab dem Bosse erscheinen. Sie erscheinen bis zum 24. Dezember.                                      |
| Bosse pro Tag                                | Anzahl der Bosse pro Tag der Boss-Woche. 0 pausiert Bosse.                                                          |
| Kampfdauer (Minuten)                         | Wie lange Mitglieder Einsätze gegen einen Boss platzieren können.                                                   |
| Boss-LP pro aktivem Spieler                  | Um wie viel die LP des Bosses für jedes aktive Mitglied steigen.                                                    |
| Mindestanzahl aktiver Spieler                | Die Boss-LP werden mit mindestens so vielen aktiven Mitgliedern berechnet.                                          |
| Aktivitätszeitraum (Tage)                    | Ein Mitglied gilt als aktiv, wenn es innerhalb dieser Tage aktiv war.                                               |
| Einsatzlimit pro Mitglied                    | Das meiste, was ein Mitglied gegen einen einzelnen Boss einsetzen kann.                                             |
| Grundchance auf den Sieg (%)                 | Chance, einen Boss mit fast nichts im Pool zu besiegen.                                                             |
| Maximale Siegchance (%)                      | Chance, einen Boss zu besiegen, sobald der Pool seine LP erreicht.                                                  |
| Gewinn-Multiplikator                         | Kämpfer bekommen ihren Einsatz mit diesem Wert multipliziert zurück, wenn der Boss besiegt wird.                    |
| Kämpfer pingen, wenn ein Boss endet          | Auf die Boss-Nachricht antworten und jeden Kämpfer pingen, wenn der Kampf entschieden ist.                          |
| Bosse                                        | Die Bosse, aus denen zufällig gewählt wird, jeweils mit Name und optionaler Bild-URL.                               |

### Nachrichten {#config-strings}

In dieser Konfigurationsdatei kannst du die Nachrichten des Weihnachts-Events anpassen, zum Beispiel die Texte für Spawns, Bosse, Shop und Bestenliste. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=holidays%7Cconfigs/christmas-strings).

### Zuckerstangen-Shop-Artikel {#config-shop-items}

In dieser Konfigurationsdatei kannst du festlegen, was deine Mitglieder in `/giftshop` kaufen können. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=holidays%7Cconfigs/christmas-shop-items).

| Feld                                 | Beschreibung                                                                                                         |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Artikel-Name                         | Name des Artikels.                                                                                                   |
| Artikel-Beschreibung                 | Beschreibung, die im Shop angezeigt wird.                                                                            |
| Preis                                | Preis in der Event-Währung.                                                                                          |
| Artikel-Typ                          | "Rolle (Standard)" vergibt automatisch eine Rolle, "Benutzerdefiniert (manuell abgewickelt)" wird für dich gepostet. |
| Rolle (bei Artikeln vom Typ "Rolle") | Die Rolle, die vergeben wird.                                                                                        |
| Bestand                              | Wie oft der Artikel insgesamt gekauft werden kann.                                                                   |
| Limit pro Nutzer                     | Wie oft ein Mitglied ihn kaufen kann.                                                                                |
| (optional) Kauf-Nachricht            | Nachricht nach dem Kauf, mit `%item%`, `%price%`, `%balance%` und `%user%`.                                          |

### Adventskalender-Türchen-Belohnungen {#config-advent-rewards}

In dieser Konfigurationsdatei kannst du Türchen des Adventskalenders eine Zuckerstangen-Belohnung und eine private Nachricht geben. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=holidays%7Cconfigs/advent-rewards). Belohnungen werden nur ausgezahlt, solange das Weihnachts-Event aktiviert und live ist.

| Feld                         | Beschreibung                                                                                                                                                                            |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Türchen                      | Das Türchen (Tag im Dezember, 1-24), zu dem dieser Eintrag gehört.                                                                                                                      |
| Minimale Zuckerstangen       | Kleinste Menge Zuckerstangen für das Öffnen dieses Türchens.                                                                                                                            |
| Maximale Zuckerstangen       | Größte Menge Zuckerstangen. Pro Mitglied und Türchen wird einmal eine zufällige Menge zwischen Minimum und Maximum ausgewürfelt. Setze beide auf 0, wenn es keine Belohnung geben soll. |
| (optional) Private Nachricht | Nachricht, die dem Mitglied privat gesendet wird, wenn es das Türchen öffnet. Unterstützt `%day%`, `%daysToGo%` und `%candy%`.                                                          |

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Der Countdown-Kanal wird nicht aktualisiert</summary>
    <ul>
        <li>Stelle sicher, dass der Countdown in der Konfiguration aktiviert ist.</li>
        <li>Stelle sicher, dass der Bot die Berechtigung "Kanäle verwalten" für den ausgewählten Kanal hat.</li>
        <li>Beachte, dass der Kanalname stündlich aktualisiert wird. Außerdem begrenzt Discord die Häufigkeit von Kanalnamen-Änderungen.</li>
    </ul>
</details>
<details>
    <summary>Mein Countdown- oder Adventskalender-Kanal wurde gelöscht</summary>
    <ul>
        <li>Ein Kanal, der nicht gefunden wird, landet im Bot-Log und nur diese eine Funktion wird übersprungen. Der Rest des Moduls, auch das Weihnachts-Event, läuft weiter.</li>
        <li>Lege in der Konfiguration einen gültigen Kanal fest oder deaktiviere die Funktion.</li>
    </ul>
</details>
<details>
    <summary>Die Buttons des Adventskalenders werden nicht angezeigt</summary>
    <ul>
        <li>Stelle sicher, dass der Adventskalender aktiviert und ein gültiger, leerer Textkanal konfiguriert ist.</li>
        <li>Stelle sicher, dass der Bot die benötigten Berechtigungen im Kalenderkanal hat.</li>
    </ul>
</details>
<details>
    <summary>Benutzer erhalten keine Rollenbelohnungen</summary>
    <ul>
        <li>Stelle sicher, dass die Rolle des Bots in der Rollenhierarchie des Servers höher ist als die Belohnungsrollen.</li>
        <li>Überprüfe, ob die Rollen für den jeweiligen Tag korrekt konfiguriert sind.</li>
    </ul>
</details>
<details>
    <summary>Nichts passiert, das Weihnachts-Event tut nichts</summary>
    <ul>
        <li>Stelle sicher, dass "Weihnachts-Event aktivieren" eingeschaltet ist. Solange es aus ist, funktioniert nichts im Event, auch nicht `/candycane` und `/giftshop`.</li>
        <li>Stelle sicher, dass der Schalter der Funktion an ist: "Tägliches Abholen aktivieren" für `/candycane`, "Geschenk-Shop aktivieren" für `/giftshop`. Geschenke, Bosse und die Bestenliste brauchen jeweils einen festgelegten Kanal.</li>
        <li>Prüfe die Saisondaten: Das Event ist vom 1. bis 26. Dezember live und bis zum 2. Januar nur zum Ausgeben offen. An anderen Tagen ruht es. Alle Daten richten sich nach der für deinen Bot eingestellten Zeitzone. Mit dem <strong>Testmodus</strong> kannst du es jederzeit ausprobieren.</li>
    </ul>
</details>
<details>
    <summary>Ein Befehl sagt, dass die Funktion nicht aktiv ist</summary>
    <ul>
        <li>`/candycane` und `/giftshop` sind auf jedem Server mit dem Modul registriert. Sie antworten, dass sie nicht aktiv sind, solange "Weihnachts-Event aktivieren" oder ihr eigener Schalter ("Tägliches Abholen aktivieren" für `/candycane`, "Geschenk-Shop aktivieren" für `/giftshop`) aus ist.</li>
    </ul>
</details>
<details>
    <summary>Der Boss erscheint nie</summary>
    <ul>
        <li>Stelle sicher, dass ein "Boss-Kanal" festgelegt ist und der Bot dort Nachrichten senden kann.</li>
        <li>Bosse erscheinen nur vom "Starttag der Boss-Woche" bis zum 24. Dezember (Standard 10), und "Bosse pro Tag" muss über 0 liegen.</li>
    </ul>
</details>
<details>
    <summary>Es erscheinen keine Geschenke</summary>
    <ul>
        <li>Stelle sicher, dass mindestens ein Kanal bei den "Geschenk-Spawn-Kanälen" eingetragen ist und der Bot dort Nachrichten senden kann.</li>
        <li>Geschenke erscheinen nur vom 1. bis 26. Dezember. Aktivitäts-Geschenke warten eine zufällige Zeit zwischen "Minimaler Spawn-Abstand (Stunden)" und "Maximaler Spawn-Abstand (Stunden)" und erscheinen dann bei der nächsten Nachricht in einem Spawn-Kanal.</li>
    </ul>
</details>
<details>
    <summary>Eine Shop-Rolle oder die Grinch-Rolle wird nicht vergeben</summary>
    <ul>
        <li>Stelle sicher, dass der Bot die Berechtigung "Rollen verwalten" hat und seine eigene Rolle in der Hierarchie über der Rolle steht.</li>
        <li>Kann eine Shop-Rolle nicht vergeben werden, wird der Kauf abgebrochen und die Währung erstattet.</li>
    </ul>
</details>
<details>
    <summary>Türchen zahlen keine Zuckerstangen aus</summary>
    <ul>
        <li>Stelle sicher, dass das Türchen in den <a href="#config-advent-rewards">Adventskalender-Türchen-Belohnungen</a> ein Maximum über 0 hat.</li>
        <li>Belohnungen werden nur gezahlt, solange "Weihnachts-Event aktivieren" an und das Event live ist (1. bis 26. Dezember), und nur beim ersten Öffnen eines Türchens.</li>
    </ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden für jedes geöffnete Türchen des Adventskalenders gespeichert:

- Die Benutzer-ID des Benutzers, der das Türchen geöffnet hat
- Die Nummer des geöffneten Tages
- Das Jahr des Öffnens
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Wenn das Weihnachts-Event aktiviert ist, werden zusätzlich diese Daten gespeichert:

- Für jedes teilnehmende Mitglied: die Discord-Benutzer-ID, das aktuelle Guthaben, wann es zuletzt abgeholt hat und wann die Grinch-Rolle abläuft
- Für jeden Kauf: die Discord-Benutzer-ID des Käufers sowie Name, Typ und Preis des Artikels
- Für Bosse: der Bosskampf und für jeden Kämpfer die Discord-Benutzer-ID und sein Einsatz
- Die Kanal-ID und Nachrichten-ID der Bestenlisten-Nachricht und welche Saison ihre Abschlussnachricht schon erhalten hat
- Solange der Testmodus an ist: dieselben Daten für den Test-Kanal, die gelöscht werden, wenn der Testmodus ausgeschaltet oder der Test-Kanal geändert wird

Guthaben, Käufe und Bosse einer Saison werden automatisch am 3. Januar nach der Nur-ausgeben-Phase gelöscht. Die insgesamt gesammelte Menge wird gespeichert, aber nicht für die Rangfolge der Bestenliste verwendet.

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
