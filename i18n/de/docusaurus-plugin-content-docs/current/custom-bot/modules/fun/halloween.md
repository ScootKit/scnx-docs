# Halloween Event

Veranstalte jedes Jahr ein Halloween-Event auf deinem Server: Deine Mitglieder sammeln Süßigkeiten, erschrecken sich gegenseitig und geben alles in einem Shop aus, den du einrichtest.

<ModuleOverview moduleName="halloween" />

## Funktionen {#features}

- Das Event läuft jedes Jahr automatisch vom 1. bis zum 31. Oktober. Du musst nichts von Hand starten oder beenden.
- Süßigkeiten sind die Währung des Events. Mitglieder verdienen sie mit dem täglichen `/trickortreat`, indem sie Kürbisse in deinen Kanälen einsammeln und indem sie sich gegenseitig erschrecken.
- `/trickortreat` verteilt Süßes, seltene Jackpots oder Saures: verlorene Süßigkeiten, eine zeitlich begrenzte Spuk-Rolle oder einen harmlosen Schreck.
- Kürbisse spawnen in den Kanälen, die du auswählst - sowohl wenn auf deinem Server etwas los ist als auch zu zufälligen Zeiten am Tag. Wer zuerst auf den Knopf klickt, bekommt die Süßigkeiten.
- Mit `/spook` können Mitglieder sich gegenseitig Süßigkeiten stehlen, mit dem Risiko, dass der Schreck nach hinten losgeht. Der Befehl lässt sich komplett abschalten.
- `/trickortreat` und `/spook` können einmal pro Tag oder, wenn du das lieber möchtest, mit einer von dir eingestellten Abklingzeit von einigen Stunden genutzt werden.
- In den letzten Oktobertagen tauchen Bosse in einem Kanal auf, den du auswählst. Mitglieder setzen gemeinsam Süßigkeiten gegen jeden Boss: Gewinnen sie, bekommt jeder seinen Einsatz vervielfacht zurück, sonst ist der Einsatz weg. Siehe [Boss-Kämpfe](#bosses).
- `/candyshop` verkauft die Artikel, die du festlegst: Rollen, die der Bot automatisch vergibt, oder eigene Preise, die du selbst aushändigst. Beide unterstützen einen Gesamtbestand und ein Limit pro Mitglied.
- Eine sich selbst aktualisierende Bestenlisten-Nachricht sortiert alle nach den Süßigkeiten, die sie besitzen, plus denen, die sie im Shop ausgegeben haben, und denen, die sie in einem offenen Boss-Kampf gesetzt haben. Einkaufen kostet nie einen Platz, Saures, Erschreckt-werden und verlorene Boss-Kämpfe dagegen schon, und erfolgreiches Erschrecken und gewonnene Boss-Kämpfe verbessern ihn. Sie wird das ganze Jahr über gepostet und zeigt außerhalb des Events einen Countdown bis zum nächsten Halloween.
- Ein Countdown-Kanal wird einmal täglich umbenannt, das ganze Jahr über.
- Am 31. Oktober werden alle Einnahmen verdoppelt, und nach dem Event postet der Bot den Endstand.
- Zwischen dem 8. November und dem 30. September antworten die Befehle mit einem Countdown bis zum nächsten Halloween.

## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=halloween&ref=scnx-app-docs).
2. Öffne die [Konfiguration](#configuration-config) und lege die Kanäle und Rollen für die Funktionen fest, die du nutzen möchtest. Alles andere funktioniert bereits mit den Standardwerten.
3. Trage die Artikel, die deine Mitglieder kaufen können, in die Konfiguration [Süßigkeiten-Shop-Artikel](#configuration-shop-items) ein.
4. Stelle sicher, dass der Bot die unten aufgeführten Berechtigungen hat.

Jede Funktion wird über eine einzige Einstellung aktiviert. Eine Funktion, deren Einstellung leer ist, wird einfach übersprungen, der Rest des Events läuft weiter:

| Funktion                                                     | Was du einstellen musst                                                                                                                                                                                              |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kürbis-Spawns                                                | Trage mindestens einen Kanal in "Kürbis-Spawn-Kanäle" ein. Solange die Liste leer ist, spawnen überhaupt keine Kürbisse.                                                                                             |
| Bestenliste und Abschluss-Ankündigung                        | Lege einen "Bestenlisten-Kanal" fest, einen Text- oder Ankündigungskanal. Der Bot hält dort eine Nachricht aktuell und postet nach dem Event den Endstand in denselben Kanal.                                        |
| Countdown-Kanal                                              | Lege einen "Countdown-Kanal" fest, üblicherweise ein Sprachkanal, den niemand betreten kann. Passe optional "Name des Countdown-Kanals" und "Name des Countdown-Kanals an Halloween" an.                             |
| Spuk bei Saures                                              | Lege eine "Spuk-Rolle" fest. Ohne sie nutzt `/trickortreat` den Spuk nie und würfelt nur die beiden anderen Varianten aus.                                                                                           |
| Süßigkeiten-Shop                                             | Trage mindestens einen Artikel in die Konfiguration [Süßigkeiten-Shop-Artikel](#configuration-shop-items) ein. Ohne Artikel antwortet `/candyshop`, dass der Shop leer ist.                                          |
| Abwicklung eigener Artikel                                   | Lege einen "Abwicklungs-Kanal" fest, damit Käufe von Artikeln vom Typ "Eigener Artikel" dort gepostet werden statt im Log-Kanal des Bots.                                                                            |
| Boss-Kämpfe                                                  | Lege einen "Boss-Kanal" fest, einen Text- oder Ankündigungskanal. Solange er leer ist, tauchen keine Bosse auf. Bosse erscheinen ab dem "Starttag der Boss-Woche" bis zum 31. Oktober, siehe [Boss-Kämpfe](#bosses). |
| Erschrecken                                                  | Nichts. `/spook` ist standardmäßig aktiv und lässt sich über "/spook aktivieren" abschalten.                                                                                                                         |
| `/trickortreat`, Süßigkeiten, Antworten außerhalb der Saison | Nichts. Das funktioniert sofort.                                                                                                                                                                                     |

Der Bot benötigt diese Berechtigungen:

- "Kanal ansehen", "Nachrichten senden" und "Links einbetten" in den Spawn-Kanälen, im Bestenlisten-Kanal und im Abwicklungs-Kanal, falls du einen einrichtest.
- "Kanal ansehen", "Nachrichten senden", "Links einbetten", "Nachrichtenverlauf anzeigen" und "Nachrichten anheften" im Test-Kanal, damit er die Test-Bestenliste und die Erklär-Nachricht posten und anheften kann.
- "Kanal ansehen", "Nachrichten senden", "Links einbetten" und "Nachrichtenverlauf anzeigen" im Boss-Kanal. Um mit der Boss-Nachricht eine Rolle zu pingen, muss die Rolle erwähnbar sein, oder der Bot braucht die Berechtigung "@everyone, @here und alle Rollen erwähnen".
- "Kanäle verwalten" für den Countdown-Kanal, damit er umbenannt werden kann.
- "Rollen verwalten" für die Spuk-Rolle und für jede Rolle, die im Shop verkauft wird. Die eigene Rolle des Bots muss in der Rollenhierarchie über diesen Rollen stehen.

## Das Event testen {#testing}

Du kannst das Event zu jeder Zeit im Jahr in einem Test-Kanal ausprobieren, ohne das echte Event zu beeinflussen. Aktiviere den "Testmodus" in der [Konfiguration](#configuration-config) und lege einen "Test-Kanal" fest. Über die Kanalberechtigungen bestimmst du, wer den Test-Kanal sieht und mitmachen kann.

Solange der Testmodus aktiv ist:

- Der Test-Kanal verhält sich immer wie das laufende Event: `/trickortreat`, `/spook` und `/candyshop` funktionieren dort zu jeder Zeit im Jahr, Kürbisse spawnen dort und der Test-Kanal bekommt eine eigene Bestenliste.
- Die erste Nachricht einer neuen Testsitzung lässt sofort einen Kürbis erscheinen, sodass du nicht das normale Intervall abwarten musst. Danach folgen die Kürbisse dem normalen Spawn-Intervall.
- Sobald eine Testsitzung beginnt, erscheint im Test-Kanal sofort ein Boss. Danach folgen Test-Bosse dem täglichen Zeitplan ("Bosse pro Tag" zu zufälligen Zeiten zwischen den Stunden der automatischen Spawns), an jedem beliebigen Datum, unabhängig vom "Boss-Kanal" und vom "Starttag der Boss-Woche". Test-Bosse haben eigene Daten und berühren das echte Event nie.
- Sobald eine Testsitzung beginnt, postet der Bot eine Erklär-Nachricht in den Test-Kanal und heftet sie zusammen mit der Test-Bestenliste an.
- Test-Süßigkeiten, Testkäufe und die Test-Bestenliste sind komplett vom echten Event getrennt. Die echte Bestenliste, die Abschluss-Ankündigung und das Zurücksetzen der Saison sehen keine Testdaten, und Testkäufe verbrauchen keinen echten Bestand.
- Die Spuk-Rolle und im Shop gekaufte Rollen werden wirklich vergeben, sodass du die gesamte Einrichtung prüfen kannst.

Wenn du den Testmodus ausschaltest oder den Test-Kanal änderst, werden alle Testdaten entfernt: Test-Süßigkeiten, Testkäufe, Test-Boss-Kämpfe samt ihren Nachrichten, die Test-Bestenliste, die Erklär-Nachricht, die Spuk-Rolle aus Test-Streichen und die im Test-Kanal gekauften Shop-Rollen. Shop-Rollen, die ein Mitglied schon vor dem Test hatte, bleiben erhalten.

Wenn du die Halloween-Befehle in deinen Discord-Servereinstellungen (Integrationen) auf bestimmte Kanäle eingeschränkt hast, erlaube sie auch im Test-Kanal.

## Nutzung {#usage}

### Das Event-Jahr {#event-year}

Alle Daten richten sich nach der Zeitzone, die für deinen Bot eingestellt ist.

| Zeitraum                                                              | Was passiert                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. bis 31. Oktober                                                    | Das Event läuft: `/trickortreat`, Kürbis-Spawns, `/spook`, der Shop und die Live-Bestenliste sind aktiv.                                                                                                                                                                                                                                |
| "Starttag der Boss-Woche" (standardmäßig 25. Oktober) bis 31. Oktober | Boss-Woche: Bosse tauchen im "Boss-Kanal" auf, siehe [Boss-Kämpfe](#bosses). Ein Kampf, der am Ende des 31. Oktober noch offen ist, wird spätestens dann entschieden.                                                                                                                                                                   |
| 31. Oktober                                                           | Alle Süßigkeiten aus `/trickortreat` und aus Kürbissen werden verdoppelt. Süßigkeiten, die beim Erschrecken den Besitzer wechseln, und Boss-Auszahlungen nicht.                                                                                                                                                                         |
| 1. bis 7. November                                                    | Das Sammeln ist vorbei. `/trickortreat` und `/spook` antworten mit der Ausklang-Nachricht und es spawnen keine Kürbisse mehr, aber `/candyshop` bleibt offen, damit niemand auf seinen Süßigkeiten sitzen bleibt. Der Bot postet die Abschluss-Ankündigung und die Bestenliste zeigt den Endstand.                                      |
| 8. November                                                           | Die Saison wird zurückgesetzt: Alle Süßigkeiten, alle Käufe, alle Boss-Kämpfe und die Spuk-Rolle werden automatisch entfernt.                                                                                                                                                                                                           |
| 8. November bis 30. September                                         | Außerhalb der Saison. Jeder Befehl und jeder übrig gebliebene Knopf antwortet mit einem Countdown bis zum nächsten Halloween. Der Countdown-Kanal zählt weiter herunter, und die Bestenlisten-Nachricht (sobald ein "Bestenlisten-Kanal" eingestellt ist) zeigt "Halloween kommt" mit demselben Countdown, einmal täglich aktualisiert. |

### Süßigkeiten verdienen {#earning-candy}

- **`/trickortreat`** kann einmal pro Tag oder, wenn du "/trickortreat-Abklingzeit (Stunden)" einstellst, einmal pro Abklingzeit genutzt werden. Standardmäßig wird das Ergebnis öffentlich im Kanal gepostet - du kannst das abschalten, sodass es nur das Mitglied sieht, das den Befehl ausgeführt hat. Meistens gibt es Süßes und damit eine zufällige Menge Süßigkeiten, und aus Süßem kann ein deutlich größerer Jackpot werden. Andernfalls gibt es Saures: Das Mitglied verliert Süßigkeiten (das Guthaben fällt nie unter 0), bekommt für eine Weile die Spuk-Rolle oder einfach nur einen harmlosen Schreck.
- **Kürbisse** spawnen auf zwei Wegen. Nach einer zufälligen Wartezeit lässt die nächste Nachricht in einem deiner Spawn-Kanäle einen Kürbis fallen, und zusätzlich lässt der Bot eine einstellbare Anzahl Kürbisse pro Tag zu zufälligen Zeiten innerhalb eines von dir festgelegten Zeitfensters fallen, auch wenn gerade niemand schreibt. Jeder Kürbis hat einen Knopf zum Einsammeln: Wer zuerst klickt, bekommt die Süßigkeiten, allen anderen wird gesagt, dass sie zu spät waren. Ein Kürbis, den niemand einsammelt, verrottet nach der eingestellten Zeit, und kein Kürbis überlebt das Ende des Events.
- **`/spook`** kann einmal pro Tag auf ein anderes Mitglied angewendet werden, oder einmal pro Abklingzeit, wenn du "/spook-Abklingzeit (Stunden)" einstellst. Klappt es, nimmt sich der Erschreckende einen Prozentsatz der Süßigkeiten des Ziels, bis zu einem Höchstbetrag. Geht es nach hinten los, wandert genau derselbe Betrag stattdessen vom Erschreckenden zum Ziel. Gibt es nichts zu holen, wird der Versuch zwar verkündet, aber niemand verliert etwas. Mitglieder können weder sich selbst noch Bots erschrecken, nicht zweimal hintereinander dieselbe Person und niemanden unterhalb des eingestellten Mindest-Guthabens.

Beide Abklingzeit-Einstellungen zählen in Stunden und erlauben Dezimalzahlen wie `0.5`. Beim Standardwert 0 kann der Befehl einmal pro Tag genutzt werden und wird um Mitternacht in der Zeitzone deines Servers zurückgesetzt. Bei einem Wert über 0 muss ein Mitglied stattdessen so viele Stunden nach der letzten Nutzung warten, und die Antwort sagt, wann es wieder versuchen kann. Kurze Abklingzeiten verteilen Süßigkeiten deutlich schneller, senke beim Verkürzen also am besten die "Chance auf Süßes (%)" und erhöhe die Shop-Preise.

### Süßigkeiten ausgeben {#spending-candy}

`/candyshop` zeigt die Artikelliste, jeden Artikel mit seinem Preis und seiner Beschreibung, und das Guthaben des Mitglieds an, sichtbar nur für das Mitglied, das den Befehl ausgeführt hat. Artikel, deren Bestand aufgebraucht ist, werden durchgestrichen und als ausverkauft markiert, sowohl in der Liste als auch im Kaufmenü darunter.

Wählt das Mitglied einen Artikel aus dem Menü aus, zeigt dieselbe Nachricht eine Bestätigung: den Artikel mit seiner Beschreibung, den Preis, das Guthaben des Mitglieds vor und nach dem Kauf, wie viele noch übrig sind, wenn der Artikel einen Bestand hat, und wie oft das Mitglied ihn noch kaufen darf, wenn er ein Limit pro Mitglied hat. Kann das Mitglied ihn nicht kaufen (nicht genug Süßigkeiten, ausverkauft, Limit erreicht oder der Artikel nicht verfügbar), ist der Knopf "Kauf bestätigen" deaktiviert und der Grund wird angezeigt. Ein Knopf "Zurück zum Shop" führt zur vollständigen Liste zurück, oder das Mitglied wählt stattdessen einen anderen Artikel aus dem Menü. Nach einem erfolgreichen Kauf erhält das Mitglied die Kauf-Nachricht, und die Shop-Nachricht aktualisiert sich zur Liste mit dem neuen Guthaben.

- Artikel vom Typ "Rolle" vergeben die eingestellte Rolle sofort und dauerhaft. Kann die Rolle nicht vergeben werden, wird der Kauf abgebrochen und die Süßigkeiten werden zurückerstattet.
- Artikel vom Typ "Eigener Artikel" werden im "Abwicklungs-Kanal" gepostet, damit du den Preis selbst aushändigen kannst. Bleibt er leer, oder ist er nicht erreichbar, landen sie stattdessen im Log-Kanal des Bots.
- Bestand und Limit pro Mitglied gelten für die gesamte Saison und werden beim Kauf geprüft, sodass ein Artikel nie öfter verkauft werden kann als vorgesehen.
- Jeder Artikel kann seine eigene Kauf-Nachricht haben, die du mit demselben Editor wie die Nachrichten unter [Nachrichten](#configuration-strings) schreibst - reiner Text oder ein vollständiges Embed, mit den Platzhaltern `%item%`, `%price%`, `%balance%` und `%user%`. Bleibt sie leer, verwendet der Artikel die allgemeine Kauf-Bestätigung.

### Boss-Kämpfe {#bosses}

Während der Boss-Woche, vom "Starttag der Boss-Woche" (standardmäßig 25. Oktober) bis zum 31. Oktober, tauchen Bosse im "Boss-Kanal" auf. Lass den Kanal leer, um Bosse auszuschalten.

- **Auftauchen:** An jedem Tag der Boss-Woche erscheinen "Bosse pro Tag" Bosse (standardmäßig 1, höchstens 5) zu zufälligen Zeiten zwischen "Automatische Spawns: früheste Stunde" und "Automatische Spawns: späteste Stunde". Mit 0 pausierst du Bosse. Jeder Boss wird zufällig aus deiner Liste "Bosse" gewählt, die pro Boss auch ein Bild enthalten kann. Deine "Boss-Spawn-Nachricht" wird auf der Boss-Nachricht angezeigt, und eine darin erwähnte Rolle wird einmal gepingt, wenn der Boss auftaucht.
- **Mitmachen:** Die Boss-Nachricht hat Knöpfe, um einen festen Betrag zu setzen (20 %, 50 % und 100 % des "Einsatzlimits pro Mitglied"), und einen Knopf für einen eigenen Betrag. Ein Mitglied kann mehrmals setzen, insgesamt aber höchstens bis zum Einsatzlimit pro Boss. Der Einsatz wird sofort von den Süßigkeiten des Mitglieds abgezogen und ist endgültig: Er kann nicht zurückgenommen werden.
- **Boss-LP:** Die LP stehen fest, sobald der Boss auftaucht, und wachsen mit der Zahl der aktiven Spieler. Das sind die Mitglieder, die das Modul innerhalb der letzten "Aktivitätszeitraum (Tage)" selbst benutzt haben (`/trickortreat`, `/spook`, ein Shop-Kauf, ein eingesammelter Kürbis oder ein Boss-Einsatz; erschreckt zu werden zählt nicht). Die LP ergeben sich aus "Boss-LP pro aktivem Spieler" mal der Zahl der aktiven Spieler, wobei mindestens "Mindestanzahl aktiver Spieler" gezählt werden. Sie liegen nie unter dem Doppelten des "Einsatzlimits pro Mitglied", sodass niemand einen Boss allein besiegen kann.
- **Siegchance:** Mit fast keinem Einsatz ist die Chance auf den Sieg die "Grundchance auf den Sieg (%)". Sie steigt mit dem Süßigkeiten-Einsatz bis zur "Maximalen Siegchance (%)", die erreicht ist, sobald der Einsatz den LP des Bosses entspricht. Die Boss-Nachricht zeigt die aktuelle Chance.
- **Ergebnis:** Nach "Kampfdauer (Minuten)", spätestens aber zum Ende des 31. Oktober, entscheidet ein einziger Wurf den Kampf für alle. Gewinnen die Kämpfer, bekommt jeder seinen Einsatz mal dem "Gewinn-Multiplikator" zurück (abgerundet), und das wird am 31. Oktober nicht verdoppelt. Gewinnt der Boss, sind alle Einsätze verloren. Hat niemand etwas gesetzt, zieht der Boss davon und niemand verliert etwas. Die Boss-Nachricht wird dann zum Ergebnis, das jeden Kämpfer mit Einsatz und Auszahlung auflistet.
- **Bestenliste:** Süßigkeiten, die in einem noch offenen Kampf stecken, zählen für die Bestenliste mit. Gewonnene Kämpfe erhöhen den Punktestand eines Mitglieds, verlorene senken ihn.

Kämpfe werden gespeichert, ein Neustart des Bots verliert also nie einen Einsatz: Ein offener Kampf läuft weiter, und einer, der in der Zwischenzeit zu Ende ging, wird sofort entschieden.

### Bestenliste und Countdown {#leaderboard}

Der Bot postet eine einzelne Nachricht im Bestenlisten-Kanal und hält sie aktuell, höchstens einmal pro Minute, sobald ein "Bestenlisten-Kanal" eingestellt ist - in jeder Phase des Jahres, nicht nur während das Event läuft. Außerhalb des Events zeigt sie "Halloween kommt" mit einem Countdown bis zum nächsten Halloween, einmal täglich aktualisiert, damit er nie veraltet. Sobald das Event läuft, sortiert sie nach den Süßigkeiten, die ein Mitglied besitzt, plus denen, die es im Shop ausgegeben hat, und denen, die es in einem noch offenen Boss-Kampf gesetzt hat. Ein Einkauf im Shop oder ein Einsatz kostet also nie einen Platz, verlorene Süßigkeiten durch Saures, Erschreckt-werden oder ein verlorener Boss-Kampf dagegen schon. Erfolgreiches Erschrecken und gewonnene Boss-Kämpfe verbessern den Platz eines Mitglieds. Mitglieder werden als Erwähnungen angezeigt, oder als Benutzernamen, wenn du "Nutzer-Tags statt Erwähnungen in der Bestenliste verwenden" aktivierst, was bei großen Servern empfohlen wird. Vom 1. bis zum 7. November zeigt sie den Endstand, und die Abschluss-Ankündigung wird gepostet, sobald das Event endet. Die Nachricht ist vor dem automatischen Löschen geschützt.

Die Nachricht besteht aus einem Titel mit einem Vorschaubild daneben, dem eingestellten Bild direkt darunter, einem Trenner, dann der Rangliste und dem Countdown. Titel, Endstand-Titel, Farbe, Vorschaubild und Bild lassen sich in [Nachrichten](#configuration-strings) anpassen. Die Test-Bestenliste verwendet dieselbe Optik, sodass du sie im Test-Kanal ansehen kannst. Eine Bestenlisten-Nachricht, die von einer älteren Bot-Version gepostet wurde (ein Embed), wird einmalig automatisch durch eine neue Nachricht ersetzt, die alte wird gelöscht.

Der Countdown-Kanal wird einmal täglich umbenannt, auch außerhalb des Events, und bekommt am 31. Oktober einen eigenen Namen.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl               | Beschreibung                                                                                                                                               |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/trickortreat`      | Geh Süßes-oder-Saures sammeln. Einmal pro Tag (oder pro Abklingzeit) nutzbar, mit Süßem, einem Jackpot oder Saurem als Ergebnis.                           |
| `/spook user:<User>` | Versuche, ein anderes Mitglied zu erschrecken und ihm Süßigkeiten zu stehlen. Einmal pro Tag (oder pro Abklingzeit) nutzbar und kann nach hinten losgehen. |
| `/candyshop`         | Zeigt den Süßigkeiten-Shop mit deinem Guthaben und kauft einen Artikel. Bleibt bis zum 7. November verfügbar.                                              |

## Konfiguration {#configuration}

Dieses Modul hat mehrere Konfigurationsdateien. Bitte sieh dir alle unten an.

### Konfiguration {#configuration-config}

In dieser Konfigurationsdatei kannst du das Halloween-Event einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=halloween%7Cconfig).

| Feld                                                       | Beschreibung                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Countdown-Kanal                                            | Kanal, der einmal täglich umbenannt wird, um die verbleibenden Tage bis Halloween zu zeigen. Üblicherweise ein Sprachkanal, den niemand betreten kann.                                                                                                                                               |
| Name des Countdown-Kanals                                  | Name, auf den der Countdown-Kanal umbenannt wird. Verwende `%days%` für die verbleibenden Tage bis Halloween.                                                                                                                                                                                        |
| Name des Countdown-Kanals an Halloween                     | Name, auf den der Countdown-Kanal am 31. Oktober umbenannt wird.                                                                                                                                                                                                                                     |
| Chance auf Süßes (%)                                       | Chance, dass `/trickortreat` Süßigkeiten gibt, statt dem Mitglied einen Streich zu spielen.                                                                                                                                                                                                          |
| Minimale Süßes-Belohnung                                   | Geringste Menge an Süßigkeiten, die es für Süßes geben kann.                                                                                                                                                                                                                                         |
| Maximale Süßes-Belohnung                                   | Größte Menge an Süßigkeiten, die es für Süßes geben kann.                                                                                                                                                                                                                                            |
| Jackpot-Chance (%)                                         | Chance, dass aus Süßem ein Jackpot statt einer normalen Belohnung wird.                                                                                                                                                                                                                              |
| Jackpot-Belohnung                                          | Menge an Süßigkeiten, die ein Jackpot gibt.                                                                                                                                                                                                                                                          |
| Minimaler Verlust bei einem Streich                        | Geringste Menge an Süßigkeiten, die ein Mitglied bei einem Streich verlieren kann. Das Guthaben fällt nie unter 0.                                                                                                                                                                                   |
| Maximaler Verlust bei einem Streich                        | Größte Menge an Süßigkeiten, die ein Mitglied bei einem Streich verlieren kann. Das Guthaben fällt nie unter 0.                                                                                                                                                                                      |
| /trickortreat für alle sichtbar                            | Wenn aktiviert, wird das Ergebnis von `/trickortreat` öffentlich gepostet, sodass der Rest des Kanals mitlesen kann. Schalte die Option aus, um es nur dem Mitglied zu zeigen, das den Befehl ausgeführt hat. Die "Heute schon gesammelt"- und die Abklingzeit-Antwort bleiben in jedem Fall privat. |
| /trickortreat-Abklingzeit (Stunden)                        | Stunden, die ein Mitglied zwischen zwei Nutzungen von `/trickortreat` warten muss. 0 behält eine Nutzung pro Tag bei, mit Zurücksetzung um Mitternacht. Dezimalzahlen wie 0.5 sind erlaubt. Kurze Abklingzeiten verteilen Süßigkeiten deutlich schneller.                                            |
| Spuk-Rolle                                                 | Rolle, die ein Mitglied für eine Weile bekommt, wenn es von Saurem verspukt wird. Leer lassen, um diese Variante zu überspringen.                                                                                                                                                                    |
| Spuk-Dauer (Minuten)                                       | Wie lange die Spuk-Rolle bei einem Mitglied bleibt, bevor der Bot sie wieder entfernt.                                                                                                                                                                                                               |
| Kürbis-Spawn-Kanäle                                        | Kanäle, in denen Kürbisse spawnen können. Der Bot braucht in jedem dieser Kanäle die Berechtigung, Nachrichten zu senden. Leer lassen, um Kürbis-Spawns komplett zu deaktivieren.                                                                                                                    |
| Minimaler Spawn-Abstand (Stunden)                          | Kürzeste Wartezeit, bis der nächste Kürbis scharfgeschaltet wird. Danach fällt er bei der nächsten Nachricht in einem der Spawn-Kanäle.                                                                                                                                                              |
| Maximaler Spawn-Abstand (Stunden)                          | Längste Wartezeit, bis der nächste Kürbis scharfgeschaltet wird.                                                                                                                                                                                                                                     |
| Minimale Kürbis-Belohnung                                  | Geringste Menge an Süßigkeiten, die das Einsammeln eines Kürbisses gibt.                                                                                                                                                                                                                             |
| Maximale Kürbis-Belohnung                                  | Größte Menge an Süßigkeiten, die das Einsammeln eines Kürbisses gibt.                                                                                                                                                                                                                                |
| Verfallszeit (Minuten)                                     | Wie lange ein nicht eingesammelter Kürbis einsammelbar bleibt, bevor er verrottet. Kürbisse überleben nie über Mitternacht am 1. November hinaus, egal wie hoch der Wert ist.                                                                                                                        |
| Automatische Spawns pro Tag                                | Anzahl der Kürbisse, die täglich in einen zufälligen Spawn-Kanal fallen, auch wenn niemand schreibt. Auf 0 setzen, um nur bei Aktivität zu spawnen. Höchstens 10.                                                                                                                                    |
| Automatische Spawns: früheste Stunde                       | Früheste Stunde des Tages (0-23), zu der ein automatischer Kürbis fallen darf.                                                                                                                                                                                                                       |
| Automatische Spawns: späteste Stunde                       | Späteste Stunde des Tages (0-23), zu der ein automatischer Kürbis fallen darf. Muss später als die früheste Stunde sein.                                                                                                                                                                             |
| /spook aktivieren                                          | Wenn aktiviert, können Mitglieder mit `/spook` versuchen, sich gegenseitig Süßigkeiten zu stehlen, einmal am Tag oder mit der unten eingestellten Abklingzeit.                                                                                                                                       |
| /spook-Abklingzeit (Stunden)                               | Stunden, die ein Mitglied zwischen zwei Nutzungen von `/spook` warten muss. 0 behält eine Nutzung pro Tag bei, mit Zurücksetzung um Mitternacht. Dezimalzahlen wie 0.5 sind erlaubt. Kurze Abklingzeiten lassen Süßigkeiten deutlich schneller den Besitzer wechseln.                                |
| Erfolgschance beim Erschrecken (%)                         | Chance, dass ein Schreck gelingt. Misslingt er, wandert dieselbe Menge Süßigkeiten in die andere Richtung.                                                                                                                                                                                           |
| Gestohlener Anteil (%)                                     | Anteil des Guthabens des Ziels, der bei einem gelungenen Schreck gestohlen wird.                                                                                                                                                                                                                     |
| Maximale Beute                                             | Höchstmenge an Süßigkeiten, die ein einzelner Schreck bewegen kann, unabhängig vom Prozentsatz.                                                                                                                                                                                                      |
| Mindest-Guthaben des Ziels                                 | Mitglieder mit weniger Süßigkeiten als diesem Wert können nicht erschreckt werden.                                                                                                                                                                                                                   |
| Bestenlisten-Kanal                                         | Text- oder Ankündigungskanal für die sich selbst aktualisierende Bestenlisten-Nachricht und die Abschluss-Ankündigung. Leer lassen, um beides zu deaktivieren.                                                                                                                                       |
| Einträge der Bestenliste                                   | Wie viele Mitglieder auf der Bestenlisten-Nachricht und in der Abschluss-Ankündigung angezeigt werden.                                                                                                                                                                                               |
| Nutzer-Tags statt Erwähnungen in der Bestenliste verwenden | Wenn aktiviert, zeigen die Bestenlisten-Nachricht und die Abschluss-Ankündigung den Benutzernamen jedes Mitglieds statt einer Erwähnung an. Bei großen Servern empfohlen.                                                                                                                            |
| Abwicklungs-Kanal                                          | Kanal, in dem Käufe von Artikeln vom Typ "Eigener Artikel" gepostet werden, damit du sie aushändigen kannst. Bleibt er leer, oder ist er nicht erreichbar, landen sie stattdessen im Log-Kanal des Bots. Käufe im Test-Kanal werden ebenfalls hier gepostet, markiert als Testkäufe.                 |
| Boss-Kanal                                                 | Text- oder Ankündigungskanal, in dem während der Boss-Woche Bosse auftauchen. Leer lassen, um Bosse zu deaktivieren.                                                                                                                                                                                 |
| Starttag der Boss-Woche                                    | Tag im Oktober, ab dem Bosse auftauchen. Sie tauchen bis zum 31. Oktober auf.                                                                                                                                                                                                                        |
| Bosse pro Tag                                              | Anzahl an Bossen, die an jedem Tag der Boss-Woche zu zufälligen Zeiten zwischen den Stunden der automatischen Spawns auftauchen. 0 pausiert Bosse. Höchstens 5.                                                                                                                                      |
| Kampfdauer (Minuten)                                       | So lange können Mitglieder Süßigkeiten gegen einen Boss setzen, bevor der Kampf entschieden wird.                                                                                                                                                                                                    |
| Boss-LP pro aktivem Spieler                                | LP, die ein Boss pro aktivem Spieler bekommt. Nie weniger als das Doppelte des Einsatzlimits.                                                                                                                                                                                                        |
| Mindestanzahl aktiver Spieler                              | Die Boss-LP werden mit mindestens so vielen aktiven Spielern berechnet, damit Bosse auf ruhigen Servern nicht zu leicht sind.                                                                                                                                                                        |
| Aktivitätszeitraum (Tage)                                  | Ein Mitglied zählt als aktiver Spieler, wenn es innerhalb so vieler Tage (heute eingeschlossen) `/trickortreat`, `/spook` oder den Shop benutzt, einen Kürbis eingesammelt oder gegen einen Boss gekämpft hat.                                                                                       |
| Einsatzlimit pro Mitglied                                  | So viele Süßigkeiten kann ein Mitglied insgesamt höchstens gegen einen einzelnen Boss setzen.                                                                                                                                                                                                        |
| Grundchance auf den Sieg (%)                               | Chance, einen Boss mit fast keinem Einsatz zu besiegen. Sie steigt mit dem Einsatz, bis dieser die LP des Bosses erreicht.                                                                                                                                                                           |
| Maximale Siegchance (%)                                    | Chance, einen Boss zu besiegen, sobald der Einsatz seine LP erreicht. Ein Wert unter der Grundchance wird wie die Grundchance behandelt.                                                                                                                                                             |
| Gewinn-Multiplikator                                       | Wird ein Boss besiegt, bekommt jeder Kämpfer seinen Einsatz mal diesen Wert zurück (abgerundet). Gewinnt der Boss, ist der Einsatz verloren. Wird am 31. Oktober nicht verdoppelt.                                                                                                                   |
| Bosse                                                      | Bosse, aus denen zufällig gewählt wird: der Name und optional eine Bild-URL, die auf der Boss-Nachricht angezeigt wird.                                                                                                                                                                              |
| Testmodus                                                  | Wenn aktiviert, läuft das Event mit getrennten Testdaten im Test-Kanal, damit du es jederzeit ausprobieren kannst. Siehe [Das Event testen](#testing).                                                                                                                                               |
| Test-Kanal                                                 | Kanal, in dem das Test-Event läuft, solange der Testmodus aktiv ist.                                                                                                                                                                                                                                 |

### Nachrichten {#configuration-strings}

In dieser Konfigurationsdatei kannst du jede Nachricht des Events anpassen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=halloween%7Cstrings).

| Feld                                               | Beschreibung                                                                                                                                                                                    |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nachricht außerhalb der Saison                     | Antwort auf jeden Befehl und jeden Knopf außerhalb des Events (8. November bis 30. September).                                                                                                  |
| Nachricht zum Ausklang                             | Antwort auf die Sammel-Befehle zwischen dem 1. und 7. November, wenn Süßigkeiten nur noch ausgegeben werden können.                                                                             |
| Abschluss-Ankündigung                              | Wird im Bestenlisten-Kanal gepostet, sobald Halloween vorbei ist.                                                                                                                               |
| "Doppelte Süßigkeiten"-Hinweis                     | Wird am 31. Oktober an Belohnungsnachrichten angehängt, wenn alle Einnahmen verdoppelt werden.                                                                                                  |
| "Heute schon gesammelt"-Nachricht                  | Wird gesendet, wenn ein Mitglied sein tägliches `/trickortreat` schon genutzt hat.                                                                                                              |
| "Abklingzeit aktiv"-Nachricht                      | Wird gesendet, wenn ein Mitglied `/trickortreat` erneut versucht, bevor die eingestellte Abklingzeit vorbei ist. Wird nur bei einer Abklingzeit über 0 Stunden verwendet.                       |
| Süßes-Nachricht                                    | Wird gesendet, wenn `/trickortreat` einem Mitglied Süßigkeiten gibt.                                                                                                                            |
| Jackpot-Nachricht                                  | Wird gesendet, wenn aus Süßem ein Jackpot wird.                                                                                                                                                 |
| Saures-Nachricht: Süßigkeiten verloren             | Wird gesendet, wenn Saures das Mitglied Süßigkeiten kostet.                                                                                                                                     |
| Saures-Nachricht: verspukt                         | Wird gesendet, wenn Saures dem Mitglied für eine Weile die Spuk-Rolle gibt.                                                                                                                     |
| Saures-Nachricht: harmloser Schreck                | Wird gesendet, wenn Saures nur ein Schreck ist und nichts kostet.                                                                                                                               |
| Kürbis-Spawn-Nachricht                             | Nachricht, die gepostet wird, wenn ein Kürbis spawnt. Der Einsammeln-Knopf wird darunter angehängt.                                                                                             |
| Kürbis-eingesammelt-Nachricht                      | Die Spawn-Nachricht wird hierzu bearbeitet, sobald jemand den Kürbis eingesammelt hat.                                                                                                          |
| Kürbis-verrottet-Nachricht                         | Die Spawn-Nachricht wird hierzu bearbeitet, wenn niemand den Kürbis rechtzeitig eingesammelt hat.                                                                                               |
| "Zu spät"-Nachricht                                | Wird privat an Mitglieder gesendet, die den Einsammeln-Knopf drücken, nachdem jemand anderes schneller war.                                                                                     |
| Nachricht bei erfolgreichem Erschrecken            | Wird gesendet, wenn ein Schreck gelingt und die Süßigkeiten zum Erschreckenden wandern.                                                                                                         |
| Nachricht bei fehlgeschlagenem Erschrecken         | Wird gesendet, wenn ein Schreck misslingt und die Süßigkeiten stattdessen zum Ziel wandern.                                                                                                     |
| Erschrecken: nichts zu holen                       | Wird gesendet, wenn ein Schreck ausgewürfelt wurde, aber überhaupt keine Süßigkeiten den Besitzer gewechselt haben, sodass keine Seite etwas verliert.                                          |
| Erschrecken abgelehnt: Ziel zu arm                 | Wird gesendet, wenn das Ziel das eingestellte Mindest-Guthaben nicht hat.                                                                                                                       |
| Erschrecken abgelehnt: dasselbe Ziel               | Wird gesendet, wenn ein Mitglied dieselbe Person wie beim letzten Mal erschrecken will.                                                                                                         |
| Erschrecken abgelehnt: du selbst                   | Wird gesendet, wenn ein Mitglied sich selbst erschrecken will.                                                                                                                                  |
| Erschrecken abgelehnt: Bot                         | Wird gesendet, wenn ein Mitglied einen Bot erschrecken will.                                                                                                                                    |
| Erschrecken abgelehnt: heute schon benutzt         | Wird gesendet, wenn ein Mitglied seinen täglichen Schreck schon genutzt hat.                                                                                                                    |
| Erschrecken abgelehnt: Abklingzeit aktiv           | Wird gesendet, wenn ein Mitglied erneut erschrecken möchte, bevor die eingestellte `/spook`-Abklingzeit vorbei ist. Wird nur bei einer Abklingzeit über 0 Stunden verwendet.                    |
| Erschrecken abgelehnt: deaktiviert                 | Wird gesendet, wenn das Erschrecken auf diesem Server abgeschaltet ist.                                                                                                                         |
| Süßigkeiten-Shop-Nachricht                         | Nachricht des Befehls `/candyshop`. Die Artikelliste wird in die Nachricht eingefügt (in das Embed, wenn sie eins ist); das Kaufmenü wird darunter angehängt.                                   |
| "Shop ist leer"-Nachricht                          | Wird gesendet, wenn keine Shop-Artikel eingerichtet sind.                                                                                                                                       |
| "Artikel ist weg"-Nachricht                        | Wird gesendet, wenn der gewählte Artikel nicht mehr im Shop steht, zum Beispiel weil er entfernt oder umbenannt wurde, während die Liste offen war.                                             |
| "Nicht genug Süßigkeiten"-Nachricht                | Wird gesendet, wenn ein Mitglied sich den gewählten Artikel nicht leisten kann.                                                                                                                 |
| "Ausverkauft"-Nachricht                            | Wird gesendet, wenn der Bestand eines Artikels aufgebraucht ist.                                                                                                                                |
| "Limit erreicht"-Nachricht                         | Wird gesendet, wenn ein Mitglied einen Artikel schon so oft gekauft hat wie erlaubt.                                                                                                            |
| "Kauf konnte nicht abgeschlossen werden"-Nachricht | Wird gesendet, wenn ein Kauf nicht abgeschlossen werden konnte, zum Beispiel weil die Rolle nicht vergeben werden konnte. Der Kauf wird abgebrochen und die Süßigkeiten werden zurückerstattet. |
| Kauf-Bestätigung                                   | Wird nach einem erfolgreichen Kauf gesendet. Artikel mit eigener Kauf-Nachricht verwenden stattdessen diese.                                                                                    |
| Bestenlisten-Titel                                 | Titel der laufenden Bestenlisten-Nachricht. Standardmäßig "🎃 Halloween-Bestenliste".                                                                                                           |
| Bestenlisten-Titel: Endstand                       | Titel der Bestenlisten-Nachricht, sobald sie auf den Endstand umschaltet. Standardmäßig "🎃 Endstand der Halloween-Bestenliste".                                                                |
| Bestenlisten-Farbe                                 | Akzentfarbe der Bestenlisten-Nachricht, festgelegt über einen Farbwähler. Standardmäßig Orange (`#e67e22`).                                                                                     |
| Bestenlisten-Vorschaubild                          | Kleines Bild, das neben dem Bestenlisten-Titel angezeigt wird. Leer lassen für keins.                                                                                                           |
| Bestenlisten-Bild                                  | Großes Bild, das unter dem Bestenlisten-Titel angezeigt wird. Leer lassen für keins.                                                                                                            |
| Boss-Spawn-Nachricht                               | Wird auf der Boss-Nachricht angezeigt, solange der Kampf läuft. Rollen-Erwähnungen darin pingen die Rolle einmal, wenn der Boss auftaucht.                                                      |
| Nachricht: Boss besiegt                            | Wird auf der Boss-Nachricht angezeigt, nachdem die Kämpfer gewonnen haben.                                                                                                                      |
| Nachricht: Boss siegt                              | Wird auf der Boss-Nachricht angezeigt, nachdem der Boss gewonnen hat und die Einsätze verloren sind.                                                                                            |
| Nachricht: Boss geflohen                           | Wird auf der Boss-Nachricht angezeigt, wenn niemand Süßigkeiten gesetzt hat.                                                                                                                    |

### Süßigkeiten-Shop-Artikel {#configuration-shop-items}

In dieser Konfigurationsdatei legst du fest, was deine Mitglieder mit ihren Süßigkeiten kaufen können. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=halloween%7Cshop-items).

| Feld                                 | Beschreibung                                                                                                                                                                                                                                                           |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Artikel-Name                         | Name des Artikels, wie er im Shop angezeigt wird. Sollte eindeutig sein. Wird ein Artikel während der Saison umbenannt, setzt das seinen Bestand und sein Limit pro Mitglied zurück.                                                                                   |
| Artikel-Beschreibung                 | Kurze Beschreibung des Artikels, die im Shop neben seinem Namen steht.                                                                                                                                                                                                 |
| Preis                                | Menge an Süßigkeiten, die dieser Artikel kostet.                                                                                                                                                                                                                       |
| Artikel-Typ                          | Rollen-Artikel vergeben die eingestellte Rolle automatisch. Eigene Artikel werden nur protokolliert, damit du sie selbst vergeben kannst - stelle dazu einen Abwicklungs-Kanal in der Konfiguration dieses Moduls ein, sonst landet der Kauf im Log-Kanal deines Bots. |
| Rolle (bei Artikeln vom Typ "Rolle") | Rolle, die beim Kauf dauerhaft vergeben wird. Wird nur bei Artikeln vom Typ "Rolle" verwendet.                                                                                                                                                                         |
| Bestand                              | Wie oft dieser Artikel diese Saison insgesamt gekauft werden kann. Für unbegrenzt auf 0 setzen.                                                                                                                                                                        |
| Limit pro Nutzer                     | Wie oft ein einzelnes Mitglied diesen Artikel diese Saison kaufen kann. Für unbegrenzt auf 0 setzen.                                                                                                                                                                   |
| (optional) Kauf-Nachricht            | Nachricht, die der Käufer statt der Standard-Kaufbestätigung erhält. Leer lassen, um die Standardnachricht zu verwenden.                                                                                                                                               |

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Es spawnen keine Kürbisse</summary>
    <ul>
        <li>Stelle sicher, dass mindestens ein Kanal in "Kürbis-Spawn-Kanäle" eingetragen ist und der Bot dort Nachrichten senden darf.</li>
        <li>Kürbisse spawnen nur zwischen dem 1. und dem 31. Oktober.</li>
        <li>Aktivitäts-Spawns warten eine zufällige Stundenzahl zwischen "Minimaler Spawn-Abstand (Stunden)" und "Maximaler Spawn-Abstand (Stunden)" und fallen dann bei der nächsten Nachricht in einem Spawn-Kanal.</li>
    </ul>
</details>
<details>
    <summary>Es tauchen keine Bosse auf</summary>
    <ul>
        <li>Stelle sicher, dass ein "Boss-Kanal" eingestellt ist. Solange er leer ist, sind Bosse aus.</li>
        <li>Bosse erscheinen nur ab dem "Starttag der Boss-Woche" bis zum 31. Oktober, zu zufälligen Zeiten zwischen "Automatische Spawns: früheste Stunde" und "Automatische Spawns: späteste Stunde".</li>
        <li>Stelle sicher, dass "Bosse pro Tag" größer als 0 ist.</li>
        <li>Stelle sicher, dass der Bot im Boss-Kanal "Kanal ansehen", "Nachrichten senden", "Links einbetten" und "Nachrichtenverlauf anzeigen" hat.</li>
        <li>Solange der Testmodus aktiv ist, wird ein Boss-Kanal ignoriert, der dem Test-Kanal entspricht. Test-Bosse erscheinen stattdessen im Test-Kanal.</li>
    </ul>
</details>
<details>
    <summary>Die Befehle antworten nur mit einem Countdown</summary>
    <ul>
        <li>Das ist die Antwort außerhalb der Saison. Das Event läuft vom 1. bis zum 31. Oktober, der Shop bleibt bis zum 7. November offen.</li>
        <li>Alle Daten richten sich nach der Zeitzone, die für deinen Bot eingestellt ist.</li>
        <li>Wenn du das Event außerhalb von Oktober testen möchtest, aktiviere <strong>Testmodus</strong> und lege einen Test-Kanal in der Konfiguration fest.</li>
    </ul>
</details>
<details>
    <summary>Die Spuk-Rolle oder eine Shop-Rolle wird nicht vergeben</summary>
    <ul>
        <li>Stelle sicher, dass der Bot die Berechtigung "Rollen verwalten" hat.</li>
        <li>Stelle sicher, dass die eigene Rolle des Bots in der Rollenhierarchie über der zu vergebenden Rolle steht.</li>
        <li>Kann eine Shop-Rolle nicht vergeben werden, wird der Kauf abgebrochen und die Süßigkeiten werden automatisch zurückerstattet.</li>
    </ul>
</details>
<details>
    <summary>Der Countdown-Kanal wird nicht umbenannt</summary>
    <ul>
        <li>Stelle sicher, dass der Bot die Berechtigung "Kanäle verwalten" für diesen Kanal hat.</li>
        <li>Der Kanal wird einmal pro Tag umbenannt, nicht sofort nach einer Änderung der Konfiguration.</li>
    </ul>
</details>
<details>
    <summary>Die Bestenlisten-Nachricht wird nicht gepostet</summary>
    <ul>
        <li>Stelle sicher, dass ein "Bestenlisten-Kanal" in der Konfiguration eingestellt ist.</li>
        <li>Stelle sicher, dass der Bot dort die Berechtigungen "Kanal ansehen", "Nachrichten senden", "Links einbetten" und "Nachrichtenverlauf anzeigen" hat.</li>
    </ul>
</details>
<details>
    <summary>Käufe eigener Artikel tauchen nicht auf</summary>
    <ul>
        <li>Stelle sicher, dass ein "Abwicklungs-Kanal" eingestellt ist, oder dass der Log-Kanal des Bots konfiguriert ist, und dass der Bot dort die Berechtigungen "Kanal ansehen", "Nachrichten senden" und "Links einbetten" hat.</li>
    </ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jedes teilnehmende Mitglied gespeichert:

- Die Discord-Benutzer-ID
- Das aktuelle Süßigkeiten-Guthaben und die insgesamt in dieser Saison verdienten Süßigkeiten
- Die Tage und, wenn eine Abklingzeit in Stunden eingestellt ist, die genauen Zeitpunkte, an denen zuletzt `/trickortreat` und `/spook` genutzt wurden, sowie das zuletzt erschreckte Mitglied
- Der letzte Tag, an dem das Mitglied aktiv war, der bestimmt, wie viele aktive Spieler ein Boss hat
- Der Zeitpunkt, an dem die Spuk-Rolle abläuft
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Die folgenden Daten werden über jeden Kauf gespeichert:

- Die Discord-Benutzer-ID des Käufers
- Name, Typ und Preis des gekauften Artikels
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Der Testmodus speichert dieselben Mitglieder-, Kauf-, Boss-Kampf- und Einsatzdaten getrennt für den Test-Kanal. Sie werden gelöscht, wenn der Testmodus ausgeschaltet oder der Test-Kanal geändert wird.

Die folgenden Daten werden über jeden Boss-Kampf gespeichert:

- Die Kanal-ID und die Nachrichten-ID der Boss-Nachricht
- Name und Bild des Bosses, seine LP und der Zeitpunkt, an dem der Kampf endet
- Der Ausgang des Kampfes (offen, gewonnen, verloren oder geflohen), die Siegchance und der Wurf
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Die folgenden Daten werden über jeden Einsatz in einem Boss-Kampf gespeichert:

- Die Discord-Benutzer-ID des Mitglieds und der gesetzte Betrag
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Die folgenden Daten werden für das Event selbst gespeichert:

- Die Kanal-ID und die Nachrichten-ID der Bestenlisten-Nachricht
- Welche Saison bereits ihre Abschluss-Ankündigung bekommen hat und welche bereits zurückgesetzt wurde
- Solange der Testmodus aktiv ist: der aktive Test-Kanal, die Kanal-ID und Nachrichten-ID der Test-Bestenliste und der Erklär-Nachricht sowie die im Test-Kanal vergebenen Rollen (Discord-Benutzer-ID und Rollen-ID)
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Alle Mitglieder-Daten, alle Käufe und alle Boss-Kämpfe des echten Events werden am 8. November automatisch gelöscht, wenn die Saison zurückgesetzt wird.

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
