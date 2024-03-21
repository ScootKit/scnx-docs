# Uno

Lasst eure User gegeneinander Uno spielen!

<ModuleOverview moduleName="uno" />

## Funktionen {#features}
Uno ist ein klassisches Kartenspiel - jetzt auch für deinen Eigenen Bot verfügbar! Wenn du mehr über das Spiel selbst erfahren möchten, schauen dir den [Wikipedia Artikel](https://de.wikipedia.org/wiki/Uno_(Kartenspiel)) an.

Jeder Spieler beginnt mit sieben Karten. Die anderen Spieler können nur die Anzahl der Karten jedes Spielers sehen. Wenn ein Spieler keine Karte spielen kann, muss er eine Karte ziehen. Wenn ein Spieler keine Karten mehr hat, gewinnt er das Spiel.

## Einrichtung {#setup}
Die Einrichtung ist wirklich einfach – aktivieren sie einfach das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=uno&ref=scnx-app-docs) und schon kann es losgehen!

## Verwendung {#usage}

Um ein Uno-Spiel zu starten, führen sie den Slash-Befehl `/uno` aus – andere Spieler können dann über die Schaltfläche „Spiel beitreten“ beitreten. Nach 90 Sekunden oder nachdem der Benutzer, der den Befehl ausführt, auf die Schaltfläche „Spiel starten“ geklickt hat, beginnt das Spiel.

:::tip Spiel Thread 
Es ist am besten, einen Thread für Spieldiskussionen zu erstellen, damit der Kanal nicht zu voll mit spielbezogenen Nachrichten wird.
:::

Inaktive Spieler werden nach 60 Sekunden, wenn sie an der Reihe sind, verwarnt und nach weiteren 60 Sekunden aus dem Spiel geworfen.

Das Spiel selbst hat keine zeitliche Begrenzung.

### Wie man spielt {#how-to-play}
Spieler können nur Karten spielen, die dem aktuellen Wert oder der aktuellen Farbe der zuletzt gespielten Karte entsprechen. Ausnahmen gelten für die Sonderkarten „Farbwahl“.

In den meisten Fällen verwendet jeder Spieler eine Karte, indem er eine Karte aus seinem Kartenstapel auswählt, und dann ist der nächste Spieler an der Reihe – beachten Sie, dass die Zugreihenfolge mithilfe der Sonderkarte „Umkehren“ umgekehrt werden kann.

### Karten und Specialeffekte {#cards}
Es gibt normale Zahlenkarten von 0-9 in den Farben Blau, Grün, Rot und Gelb sowie Sonderkarten. Zu den Sonderkarten gehört die Funktion „Farbwahl“, mit der eine gewünschte Farbe für die nächste Karte ausgewählt werden kann; „Reverse“, was die Spielrichtung ändert; und „Überspringen“, wodurch der nächste Spieler übersprungen wird.

Außerdem gibt es noch die Karten „Ziehe 2“ und „Farbwahl und ziehe 4“: Dadurch wird der nächste Spieler gezwungen, zwei oder vier Karten zu ziehen, sofern er nicht auch eine dieser Karten in seinem Kartenstapel hat. Hat er eine solche Karte, kann er damit die Anzahl der zu ziehenden Karten erhöhen und an den nächsten Spieler weitergeben, wo sich der ganze Vorgang wiederholt.

## Commands {#commands}

<SlashCommandExplanation />

| Command | Description                                                                                                            |
|---------|------------------------------------------------------------------------------------------------------------------------|
| `/uno`  | Startet ein Uno-Spiel im aktuellen Kanal. Weitere Informationen zur Funktionsweise finden sie im [Abschnitt zur Verwendung](#usage) oben. 
                                                                                                                                   |


## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Wie kann ich eine Karte spielen/Wo ist mein Kartendeck?</summary>
    <li>Sie können eine neue Nachricht mit Ihrem aktuellen Kartendeck erhalten, einschließlich einer Schaltfläche zum Aktualisieren, indem du auf die Schaltfläche „Deck anzeigen“ in der ursprünglichen Spielnachricht klicken.</li>
</details>
<details>
    <summary>TDer Bot sagt: "⚠️️ Sie müssen die Uno!-Taste verwenden, bevor Sie Ihre vorletzte Karte verwenden!" - aber warum?</summary>
    <li>Sie müssen zuerst auf Uno! klicken. Klicken Sie auf die Schaltfläche auf der ursprünglichen Spielnachricht, bevor Sie Ihre vorletzte Karte ausspielen. Dies gilt nicht für das Ausspielen der letzten Karte.</li>
</details>
