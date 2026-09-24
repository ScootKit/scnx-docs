# Halloween Event

Veranstalte jedes Jahr ein Halloween-Event auf deinem Server: Deine Mitglieder sammeln Süßigkeiten, erschrecken sich gegenseitig und geben alles in einem Shop aus, den du einrichtest.

<ModuleOverview moduleName="halloween" />

## Funktionen {#features}

- Das Event läuft jedes Jahr automatisch vom 1. bis zum 31. Oktober. Du musst nichts von Hand starten oder beenden.
- Süßigkeiten sind die Währung des Events. Mitglieder verdienen sie mit dem täglichen `/trickortreat`, indem sie Kürbisse in deinen Kanälen einsammeln und indem sie sich gegenseitig erschrecken.
- `/trickortreat` verteilt Süßes, seltene Jackpots oder Saures: verlorene Süßigkeiten, eine zeitlich begrenzte Spuk-Rolle oder einen harmlosen Schreck.
- Kürbisse spawnen in den Kanälen, die du auswählst - sowohl wenn auf deinem Server etwas los ist als auch zu zufälligen Zeiten am Tag. Wer zuerst auf den Knopf klickt, bekommt die Süßigkeiten.
- Mit `/spook` können Mitglieder sich gegenseitig Süßigkeiten stehlen, mit dem Risiko, dass der Schreck nach hinten losgeht. Der Befehl lässt sich komplett abschalten.
- `/candyshop` verkauft die Artikel, die du festlegst: Rollen, die der Bot automatisch vergibt, oder eigene Preise, die du selbst aushändigst. Beide unterstützen einen Gesamtbestand und ein Limit pro Mitglied.
- Eine sich selbst aktualisierende Bestenlisten-Nachricht sortiert alle nach den verdienten Süßigkeiten, sodass Ausgeben niemals einen Platz kostet.
- Ein Countdown-Kanal wird einmal täglich umbenannt, das ganze Jahr über.
- Am 31. Oktober werden alle Einnahmen verdoppelt, und nach dem Event postet der Bot den Endstand.
- Zwischen dem 8. November und dem 30. September antworten die Befehle mit einem Countdown bis zum nächsten Halloween.

## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=halloween&ref=scnx-app-docs).
2. Öffne die [Konfiguration](#configuration-config) und lege die Kanäle und Rollen für die Funktionen fest, die du nutzen möchtest. Alles andere funktioniert bereits mit den Standardwerten.
3. Trage die Artikel, die deine Mitglieder kaufen können, in die Konfiguration [Süßigkeiten-Shop-Artikel](#configuration-shop-items) ein.
4. Stelle sicher, dass der Bot die unten aufgeführten Berechtigungen hat.

Jede Funktion wird über eine einzige Einstellung aktiviert. Eine Funktion, deren Einstellung leer ist, wird einfach übersprungen, der Rest des Events läuft weiter:

| Funktion                                                     | Was du einstellen musst                                                                                                                                                                  |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kürbis-Spawns                                                | Trage mindestens einen Kanal in "Kürbis-Spawn-Kanäle" ein. Solange die Liste leer ist, spawnen überhaupt keine Kürbisse.                                                                 |
| Bestenliste und Abschluss-Ankündigung                        | Lege einen "Bestenlisten-Kanal" fest, einen Text- oder Ankündigungskanal. Der Bot hält dort eine Nachricht aktuell und postet nach dem Event den Endstand in denselben Kanal.            |
| Countdown-Kanal                                              | Lege einen "Countdown-Kanal" fest, üblicherweise ein Sprachkanal, den niemand betreten kann. Passe optional "Name des Countdown-Kanals" und "Name des Countdown-Kanals an Halloween" an. |
| Spuk bei Saures                                              | Lege eine "Spuk-Rolle" fest. Ohne sie nutzt `/trickortreat` den Spuk nie und würfelt nur die beiden anderen Varianten aus.                                                               |
| Süßigkeiten-Shop                                             | Trage mindestens einen Artikel in die Konfiguration [Süßigkeiten-Shop-Artikel](#configuration-shop-items) ein. Ohne Artikel antwortet `/candyshop`, dass der Shop leer ist.              |
| Erschrecken                                                  | Nichts. `/spook` ist standardmäßig aktiv und lässt sich über "/spook aktivieren" abschalten.                                                                                             |
| `/trickortreat`, Süßigkeiten, Antworten außerhalb der Saison | Nichts. Das funktioniert sofort.                                                                                                                                                         |

Der Bot benötigt diese Berechtigungen:

- "Kanal ansehen", "Nachrichten senden" und "Links einbetten" in den Spawn-Kanälen und im Bestenlisten-Kanal.
- "Kanäle verwalten" für den Countdown-Kanal, damit er umbenannt werden kann.
- "Rollen verwalten" für die Spuk-Rolle und für jede Rolle, die im Shop verkauft wird. Die eigene Rolle des Bots muss in der Rollenhierarchie über diesen Rollen stehen.

## Das Event testen {#testing}

Du kannst das Event zu jeder Zeit im Jahr in einem Test-Kanal ausprobieren, ohne das echte Event zu beeinflussen. Aktiviere den "Testmodus" in der [Konfiguration](#configuration-config) und lege einen "Test-Kanal" fest. Über die Kanalberechtigungen bestimmst du, wer den Test-Kanal sieht und mitmachen kann.

Solange der Testmodus aktiv ist:

- Der Test-Kanal verhält sich immer wie das laufende Event: `/trickortreat`, `/spook` und `/candyshop` funktionieren dort, Kürbisse spawnen dort und der Test-Kanal bekommt eine eigene Bestenliste.
- Test-Süßigkeiten, Testkäufe und die Test-Bestenliste sind komplett vom echten Event getrennt. Die echte Bestenliste, die Abschluss-Ankündigung und das Zurücksetzen der Saison sehen keine Testdaten, und Testkäufe verbrauchen keinen echten Bestand.
- Die Spuk-Rolle und im Shop gekaufte Rollen werden wirklich vergeben, sodass du die gesamte Einrichtung prüfen kannst.

Wenn du den Testmodus ausschaltest oder den Test-Kanal änderst, werden alle Testdaten entfernt: Test-Süßigkeiten, Testkäufe, die Test-Bestenliste, die Spuk-Rolle aus Test-Streichen und die im Test-Kanal gekauften Shop-Rollen. Shop-Rollen, die ein Mitglied schon vor dem Test hatte, bleiben erhalten.

## Nutzung {#usage}

### Das Event-Jahr {#event-year}

Alle Daten richten sich nach der Zeitzone, die für deinen Bot eingestellt ist.

| Zeitraum                      | Was passiert                                                                                                                                                                                                                                                                                       |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. bis 31. Oktober            | Das Event läuft: `/trickortreat`, Kürbis-Spawns, `/spook`, der Shop und die Live-Bestenliste sind aktiv.                                                                                                                                                                                           |
| 31. Oktober                   | Alle Süßigkeiten aus `/trickortreat` und aus Kürbissen werden verdoppelt. Süßigkeiten, die beim Erschrecken den Besitzer wechseln, nicht.                                                                                                                                                          |
| 1. bis 7. November            | Das Sammeln ist vorbei. `/trickortreat` und `/spook` antworten mit der Ausklang-Nachricht und es spawnen keine Kürbisse mehr, aber `/candyshop` bleibt offen, damit niemand auf seinen Süßigkeiten sitzen bleibt. Der Bot postet die Abschluss-Ankündigung und die Bestenliste zeigt den Endstand. |
| 8. November                   | Die Saison wird zurückgesetzt: Alle Süßigkeiten, alle Käufe und die Spuk-Rolle werden automatisch entfernt.                                                                                                                                                                                        |
| 8. November bis 30. September | Außerhalb der Saison. Jeder Befehl und jeder übrig gebliebene Knopf antwortet mit einem Countdown bis zum nächsten Halloween. Der Countdown-Kanal zählt weiter herunter.                                                                                                                           |

### Süßigkeiten verdienen {#earning-candy}

- **`/trickortreat`** kann einmal pro Tag genutzt werden. Standardmäßig wird das Ergebnis öffentlich im Kanal gepostet - du kannst das abschalten, sodass es nur das Mitglied sieht, das den Befehl ausgeführt hat. Meistens gibt es Süßes und damit eine zufällige Menge Süßigkeiten, und aus Süßem kann ein deutlich größerer Jackpot werden. Andernfalls gibt es Saures: Das Mitglied verliert Süßigkeiten (das Guthaben fällt nie unter 0), bekommt für eine Weile die Spuk-Rolle oder einfach nur einen harmlosen Schreck.
- **Kürbisse** spawnen auf zwei Wegen. Nach einer zufälligen Wartezeit lässt die nächste Nachricht in einem deiner Spawn-Kanäle einen Kürbis fallen, und zusätzlich lässt der Bot eine einstellbare Anzahl Kürbisse pro Tag zu zufälligen Zeiten innerhalb eines von dir festgelegten Zeitfensters fallen, auch wenn gerade niemand schreibt. Jeder Kürbis hat einen Knopf zum Einsammeln: Wer zuerst klickt, bekommt die Süßigkeiten, allen anderen wird gesagt, dass sie zu spät waren. Ein Kürbis, den niemand einsammelt, verrottet nach der eingestellten Zeit, und kein Kürbis überlebt das Ende des Events.
- **`/spook`** kann einmal pro Tag auf ein anderes Mitglied angewendet werden. Klappt es, nimmt sich der Erschreckende einen Prozentsatz der Süßigkeiten des Ziels, bis zu einem Höchstbetrag. Geht es nach hinten los, wandert genau derselbe Betrag stattdessen vom Erschreckenden zum Ziel. Gibt es nichts zu holen, wird der Versuch zwar verkündet, aber niemand verliert etwas. Mitglieder können weder sich selbst noch Bots erschrecken, nicht zweimal hintereinander dieselbe Person und niemanden unterhalb des eingestellten Mindest-Guthabens. Gestohlene Süßigkeiten verändern nur die Guthaben, sie verbessern die Position des Diebs auf der Bestenliste nicht.

### Süßigkeiten ausgeben {#spending-candy}

`/candyshop` zeigt die Artikelliste und das Guthaben des Mitglieds an, sichtbar nur für das Mitglied, das den Befehl ausgeführt hat. Es wählt einen Artikel aus dem Menü aus und bestätigt den Kauf mit einem Knopf. Artikel, deren Bestand aufgebraucht ist, werden im Menü als ausverkauft markiert.

- Artikel vom Typ "Rolle" vergeben die eingestellte Rolle sofort und dauerhaft. Kann die Rolle nicht vergeben werden, wird der Kauf abgebrochen und die Süßigkeiten werden zurückerstattet.
- Artikel vom Typ "Eigener Artikel" werden im Log-Kanal des Bots protokolliert, damit du den Preis selbst aushändigen kannst.
- Bestand und Limit pro Mitglied gelten für die gesamte Saison und werden beim Kauf geprüft, sodass ein Artikel nie öfter verkauft werden kann als vorgesehen.
- Jeder Artikel kann seine eigene Kauf-Nachricht haben, die du mit demselben Editor wie die Nachrichten unter [Nachrichten](#configuration-strings) schreibst - reiner Text oder ein vollständiges Embed, mit den Platzhaltern `%item%`, `%price%`, `%balance%` und `%user%`. Bleibt sie leer, verwendet der Artikel die allgemeine Kauf-Bestätigung.

### Bestenliste und Countdown {#leaderboard}

Der Bot hält eine einzelne Nachricht im Bestenlisten-Kanal aktuell, höchstens einmal pro Minute. Sortiert wird nach den Süßigkeiten, die im Laufe der Saison verdient wurden - ein Einkauf im Shop, verlorene Süßigkeiten durch Saures oder ein erfolgreicher Schreck kosten also nie einen Platz. Die Nachricht zeigt außerdem, wie viele Tage es noch bis Halloween sind, und ist vor dem automatischen Löschen geschützt.

Der Countdown-Kanal wird einmal täglich umbenannt, auch außerhalb des Events, und bekommt am 31. Oktober einen eigenen Namen.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl               | Beschreibung                                                                                                                        |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `/trickortreat`      | Geh Süßes-oder-Saures sammeln. Einmal pro Tag nutzbar, mit Süßem, einem Jackpot oder Saurem als Ergebnis.                           |
| `/spook user:<User>` | Versuche, ein anderes Mitglied zu erschrecken und ihm Süßigkeiten zu stehlen. Einmal pro Tag nutzbar und kann nach hinten losgehen. |
| `/candyshop`         | Zeigt den Süßigkeiten-Shop mit deinem Guthaben und kauft einen Artikel. Bleibt bis zum 7. November verfügbar.                       |

## Konfiguration {#configuration}

Dieses Modul hat mehrere Konfigurationsdateien. Bitte sieh dir alle unten an.

### Konfiguration {#configuration-config}

In dieser Konfigurationsdatei kannst du das Halloween-Event einrichten. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=halloween%7Cconfig).

| Feld                                   | Beschreibung                                                                                                                                                                                                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Countdown-Kanal                        | Kanal, der einmal täglich umbenannt wird, um die verbleibenden Tage bis Halloween zu zeigen. Üblicherweise ein Sprachkanal, den niemand betreten kann.                                                                                                                         |
| Name des Countdown-Kanals              | Name, auf den der Countdown-Kanal umbenannt wird. Verwende `%days%` für die verbleibenden Tage bis Halloween.                                                                                                                                                                  |
| Name des Countdown-Kanals an Halloween | Name, auf den der Countdown-Kanal am 31. Oktober umbenannt wird.                                                                                                                                                                                                               |
| Chance auf Süßes (%)                   | Chance, dass `/trickortreat` Süßigkeiten gibt, statt dem Mitglied einen Streich zu spielen.                                                                                                                                                                                    |
| Minimale Süßes-Belohnung               | Geringste Menge an Süßigkeiten, die es für Süßes geben kann.                                                                                                                                                                                                                   |
| Maximale Süßes-Belohnung               | Größte Menge an Süßigkeiten, die es für Süßes geben kann.                                                                                                                                                                                                                      |
| Jackpot-Chance (%)                     | Chance, dass aus Süßem ein Jackpot statt einer normalen Belohnung wird.                                                                                                                                                                                                        |
| Jackpot-Belohnung                      | Menge an Süßigkeiten, die ein Jackpot gibt.                                                                                                                                                                                                                                    |
| Minimaler Verlust bei einem Streich    | Geringste Menge an Süßigkeiten, die ein Mitglied bei einem Streich verlieren kann. Das Guthaben fällt nie unter 0.                                                                                                                                                             |
| Maximaler Verlust bei einem Streich    | Größte Menge an Süßigkeiten, die ein Mitglied bei einem Streich verlieren kann. Das Guthaben fällt nie unter 0.                                                                                                                                                                |
| /trickortreat für alle sichtbar        | Wenn aktiviert, wird das Ergebnis von `/trickortreat` öffentlich gepostet, sodass der Rest des Kanals mitlesen kann. Schalte die Option aus, um es nur dem Mitglied zu zeigen, das den Befehl ausgeführt hat. Die "Heute schon gesammelt"-Antwort bleibt in jedem Fall privat. |
| Spuk-Rolle                             | Rolle, die ein Mitglied für eine Weile bekommt, wenn es von Saurem verspukt wird. Leer lassen, um diese Variante zu überspringen.                                                                                                                                              |
| Spuk-Dauer (Minuten)                   | Wie lange die Spuk-Rolle bei einem Mitglied bleibt, bevor der Bot sie wieder entfernt.                                                                                                                                                                                         |
| Kürbis-Spawn-Kanäle                    | Kanäle, in denen Kürbisse spawnen können. Der Bot braucht in jedem dieser Kanäle die Berechtigung, Nachrichten zu senden. Leer lassen, um Kürbis-Spawns komplett zu deaktivieren.                                                                                              |
| Minimaler Spawn-Abstand (Stunden)      | Kürzeste Wartezeit, bis der nächste Kürbis scharfgeschaltet wird. Danach fällt er bei der nächsten Nachricht in einem der Spawn-Kanäle.                                                                                                                                        |
| Maximaler Spawn-Abstand (Stunden)      | Längste Wartezeit, bis der nächste Kürbis scharfgeschaltet wird.                                                                                                                                                                                                               |
| Minimale Kürbis-Belohnung              | Geringste Menge an Süßigkeiten, die das Einsammeln eines Kürbisses gibt.                                                                                                                                                                                                       |
| Maximale Kürbis-Belohnung              | Größte Menge an Süßigkeiten, die das Einsammeln eines Kürbisses gibt.                                                                                                                                                                                                          |
| Verfallszeit (Minuten)                 | Wie lange ein nicht eingesammelter Kürbis einsammelbar bleibt, bevor er verrottet. Kürbisse überleben nie über Mitternacht am 1. November hinaus, egal wie hoch der Wert ist.                                                                                                  |
| Automatische Spawns pro Tag            | Anzahl der Kürbisse, die täglich in einen zufälligen Spawn-Kanal fallen, auch wenn niemand schreibt. Auf 0 setzen, um nur bei Aktivität zu spawnen.                                                                                                                            |
| Automatische Spawns: früheste Stunde   | Früheste Stunde des Tages (0-23), zu der ein automatischer Kürbis fallen darf.                                                                                                                                                                                                 |
| Automatische Spawns: späteste Stunde   | Späteste Stunde des Tages (0-23), zu der ein automatischer Kürbis fallen darf. Muss später als die früheste Stunde sein.                                                                                                                                                       |
| /spook aktivieren                      | Wenn aktiviert, können Mitglieder einmal am Tag mit `/spook` versuchen, sich gegenseitig Süßigkeiten zu stehlen.                                                                                                                                                               |
| Erfolgschance beim Erschrecken (%)     | Chance, dass ein Schreck gelingt. Misslingt er, wandert dieselbe Menge Süßigkeiten in die andere Richtung.                                                                                                                                                                     |
| Gestohlener Anteil (%)                 | Anteil des Guthabens des Ziels, der bei einem gelungenen Schreck gestohlen wird.                                                                                                                                                                                               |
| Maximale Beute                         | Höchstmenge an Süßigkeiten, die ein einzelner Schreck bewegen kann, unabhängig vom Prozentsatz.                                                                                                                                                                                |
| Mindest-Guthaben des Ziels             | Mitglieder mit weniger Süßigkeiten als diesem Wert können nicht erschreckt werden.                                                                                                                                                                                             |
| Bestenlisten-Kanal                     | Text- oder Ankündigungskanal für die sich selbst aktualisierende Bestenlisten-Nachricht und die Abschluss-Ankündigung. Leer lassen, um beides zu deaktivieren.                                                                                                                 |
| Einträge der Bestenliste               | Wie viele Mitglieder auf der Bestenlisten-Nachricht und in der Abschluss-Ankündigung angezeigt werden.                                                                                                                                                                         |
| Testmodus                              | Wenn aktiviert, läuft das Event mit getrennten Testdaten im Test-Kanal, damit du es jederzeit ausprobieren kannst. Siehe [Das Event testen](#testing).                                                                                                                         |
| Test-Kanal                             | Kanal, in dem das Test-Event läuft, solange der Testmodus aktiv ist.                                                                                                                                                                                                           |

### Nachrichten {#configuration-strings}

In dieser Konfigurationsdatei kannst du jede Nachricht des Events anpassen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=halloween%7Cstrings).

| Feld                                               | Beschreibung                                                                                                                                                                                    |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nachricht außerhalb der Saison                     | Antwort auf jeden Befehl und jeden Knopf außerhalb des Events (8. November bis 30. September).                                                                                                  |
| Nachricht zum Ausklang                             | Antwort auf die Sammel-Befehle zwischen dem 1. und 7. November, wenn Süßigkeiten nur noch ausgegeben werden können.                                                                             |
| Abschluss-Ankündigung                              | Wird im Bestenlisten-Kanal gepostet, sobald Halloween vorbei ist.                                                                                                                               |
| "Doppelte Süßigkeiten"-Hinweis                     | Wird am 31. Oktober an Belohnungsnachrichten angehängt, wenn alle Einnahmen verdoppelt werden.                                                                                                  |
| "Heute schon gesammelt"-Nachricht                  | Wird gesendet, wenn ein Mitglied sein tägliches `/trickortreat` schon genutzt hat.                                                                                                              |
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
| Erschrecken abgelehnt: deaktiviert                 | Wird gesendet, wenn das Erschrecken auf diesem Server abgeschaltet ist.                                                                                                                         |
| Süßigkeiten-Shop-Nachricht                         | Nachricht des Befehls `/candyshop`. Die Artikelliste und das Kaufmenü werden darunter angehängt.                                                                                                |
| "Shop ist leer"-Nachricht                          | Wird gesendet, wenn keine Shop-Artikel eingerichtet sind.                                                                                                                                       |
| "Artikel ist weg"-Nachricht                        | Wird gesendet, wenn der gewählte Artikel nicht mehr im Shop steht, zum Beispiel weil er entfernt oder umbenannt wurde, während die Liste offen war.                                             |
| "Nicht genug Süßigkeiten"-Nachricht                | Wird gesendet, wenn ein Mitglied sich den gewählten Artikel nicht leisten kann.                                                                                                                 |
| "Ausverkauft"-Nachricht                            | Wird gesendet, wenn der Bestand eines Artikels aufgebraucht ist.                                                                                                                                |
| "Limit erreicht"-Nachricht                         | Wird gesendet, wenn ein Mitglied einen Artikel schon so oft gekauft hat wie erlaubt.                                                                                                            |
| "Kauf konnte nicht abgeschlossen werden"-Nachricht | Wird gesendet, wenn ein Kauf nicht abgeschlossen werden konnte, zum Beispiel weil die Rolle nicht vergeben werden konnte. Der Kauf wird abgebrochen und die Süßigkeiten werden zurückerstattet. |
| Kauf-Bestätigung                                   | Wird nach einem erfolgreichen Kauf gesendet. Artikel mit eigener Kauf-Nachricht verwenden stattdessen diese.                                                                                    |

### Süßigkeiten-Shop-Artikel {#configuration-shop-items}

In dieser Konfigurationsdatei legst du fest, was deine Mitglieder mit ihren Süßigkeiten kaufen können. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=halloween%7Cshop-items).

| Feld                                 | Beschreibung                                                                                                                                                                         |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Artikel-Name                         | Name des Artikels, wie er im Shop angezeigt wird. Sollte eindeutig sein. Wird ein Artikel während der Saison umbenannt, setzt das seinen Bestand und sein Limit pro Mitglied zurück. |
| Artikel-Beschreibung                 | Kurze Beschreibung des Artikels, die im Shop neben seinem Namen steht.                                                                                                               |
| Preis                                | Menge an Süßigkeiten, die dieser Artikel kostet.                                                                                                                                     |
| Artikel-Typ                          | Rollen-Artikel vergeben die eingestellte Rolle automatisch. Eigene Artikel werden nur protokolliert, damit du sie selbst aushändigen kannst.                                         |
| Rolle (bei Artikeln vom Typ "Rolle") | Rolle, die beim Kauf dauerhaft vergeben wird. Wird nur bei Artikeln vom Typ "Rolle" verwendet.                                                                                       |
| Bestand                              | Wie oft dieser Artikel diese Saison insgesamt gekauft werden kann. Für unbegrenzt auf 0 setzen.                                                                                      |
| Limit pro Nutzer                     | Wie oft ein einzelnes Mitglied diesen Artikel diese Saison kaufen kann. Für unbegrenzt auf 0 setzen.                                                                                 |
| (optional) Kauf-Nachricht            | Nachricht, die der Käufer statt der Standard-Kaufbestätigung erhält. Leer lassen, um die Standardnachricht zu verwenden.                                                             |

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

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jedes teilnehmende Mitglied gespeichert:

- Die Discord-Benutzer-ID
- Das aktuelle Süßigkeiten-Guthaben und die insgesamt in dieser Saison verdienten Süßigkeiten
- Die Tage, an denen zuletzt `/trickortreat` und `/spook` genutzt wurden, sowie das zuletzt erschreckte Mitglied
- Der Zeitpunkt, an dem die Spuk-Rolle abläuft
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Die folgenden Daten werden über jeden Kauf gespeichert:

- Die Discord-Benutzer-ID des Käufers
- Name, Typ und Preis des gekauften Artikels
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Die folgenden Daten werden für das Event selbst gespeichert:

- Die Kanal-ID und die Nachrichten-ID der Bestenlisten-Nachricht
- Welche Saison bereits ihre Abschluss-Ankündigung bekommen hat und welche bereits zurückgesetzt wurde
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Alle Mitglieder-Daten und alle Käufe werden am 8. November automatisch gelöscht, wenn die Saison zurückgesetzt wird.

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
