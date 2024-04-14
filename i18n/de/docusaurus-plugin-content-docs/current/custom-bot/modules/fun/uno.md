# Uno

Lasse deine Nutzer gegeneinander Uno spielen!

<ModuleOverview moduleName="uno" />

## Funktionen {#features}
Uno ist ein klassisches Kartenspiel - jetzt auch für deinen eigenen Bot verfügbar! Wenn du mehr über das Spiel erfahren möchtest, schau dir den [Wikipedia Artikel](https://de.wikipedia.org/wiki/Uno_(Kartenspiel)) an.

Jeder Spieler beginnt mit sieben Karten. Die anderen Spieler können nur die Anzahl der Karten jedes Spielers sehen. Wenn ein Spieler keine Karte spielen kann, muss er eine Karte ziehen. Wenn ein Spieler keine Karten mehr hat, gewinnt er das Spiel.

## Einrichtung {#setup}
Die Einrichtung ist wirklich einfach – aktiviere einfach das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=uno&ref=scnx-app-docs) und schon kann es losgehen!

## Verwendung {#usage}

Um ein Uno-Spiel zu starten, führe den Slash-Befehl `/uno` aus - andere Spieler können dann über den Knopf „Spiel beitreten“ beitreten. Nach 90 Sekunden oder nachdem der Benutzer, der den Befehl ausgeführt hat, auf den Knopf „Spiel sofort starten“ geklickt hat, beginnt das Spiel.

:::tip Spiel-Thread 
Es ist am besten, einen Thread für Spieldiskussionen zu erstellen, damit der Kanal nicht zu voll mit spielbezogenen Nachrichten wird.
:::

Inaktive Spieler werden nach 60 Sekunden, nachdem sie an die Reihe gekommen sind, verwarnt und nach weiteren 60 Sekunden aus dem Spiel entfernt.

Das Spiel selbst hat keine zeitliche Begrenzung.

### Wie man spielt {#how-to-play}
Spieler können nur Karten spielen, die dem aktuellen Wert oder der aktuellen Farbe der zuletzt gespielten Karte entsprechen. Ausnahmen gelten für die Sonderkarten „Farbwahl“.

In den meisten Fällen verwendet jeder Spieler eine Karte, indem er eine Karte aus seinem Kartenstapel auswählt, wonach der nächste Spieler an der Reihe ist - beachte, dass die Zugreihenfolge mithilfe der Sonderkarte „Umkehren“ umgekehrt werden kann.

### Karten und Spezialeffekte {#cards}
Es gibt normale Zahlenkarten von 0-9 in den Farben Blau, Grün, Rot und Gelb sowie Sonderkarten. Zu den Sonderkarten gehört die „Farbwahl“, mit der eine gewünschte Farbe für die nächste Karte ausgewählt werden kann; „Umkehren“, was die Spielrichtung ändert; und „Überspringen“, wodurch der nächste Spieler übersprungen wird.

Außerdem gibt es noch die Karten „Ziehe 2“ und „Farbwahl und ziehe 4“: Dadurch wird der nächste Spieler gezwungen, zwei oder vier Karten zu ziehen, sofern er nicht auch eine dieser Karten in seinem Kartenstapel hat. Hat er eine solche Karte, kann er damit die Anzahl der zu ziehenden Karten erhöhen und an den nächsten Spieler weitergeben, wo sich der ganze Vorgang wiederholt.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl  | Beschreibung                                                                                                            |
|---------|------------------------------------------------------------------------------------------------------------------------|
| `/uno`  | Startet ein Uno-Spiel im aktuellen Kanal. Weitere Informationen zur Funktionsweise findest du im [Abschnitt zur Verwendung](#usage) oben. 
                                                                                                                                   |


## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Wie kann ich eine Karte spielen / Wo ist mein Kartendeck?</summary>
    <li>Du kannst eine neue Nachricht mit deinem aktuellen Kartendeck und einem Knopf zum Aktualisieren erhalten, indem du auf den Knopf „Eigene Karten ansehen“ in der ursprünglichen Spielnachricht klickst.</li>
</details>
<details>
    <summary>Der Bot sagt: "⚠️️ Du musst den Uno!-Button nutzen, bevor du die vorletzte Karte legst!" - aber wieso?</summary>
    <li>Du musst zuerst auf den "Uno!"-Knopf der ursprünglichen Spielnachricht klicken, bevor du deine vorletzte Karte ausspielst. Das gilt nicht für das Ausspielen der letzten Karte.</li>
</details>
