# Vier gewinnt

Lasse deine Nutzer gegen andere Vier gewinnt spielen!

<ModuleOverview moduleName="connect-four" />

## Funktionen {#features}
Vier gewinnt ist ein sehr altes Spiel - erfahre mehr über es auf [Wikipedia](https://de.wikipedia.org/wiki/Vier_gewinnt). Das Spiel wird auf einem 7x6 Feld ausgetragen, auf dem zwei Spieler mit Hilfe von Marken 
Züge spielen, indem sie die Marken auf die Felder fallen lassen. Der Spieler, der zuerst vier Marken in einer Reihe hat, gewinnt.

## Einrichtung {#setup}
The Einrichtigung ist sehr einfach - aktiviere einfach das Modul und du bist startklar!

## Verwendung {#usage}
Ein Vier gewinnt-Spiel kann mit dem Slash-Befehl `/connect-four` gestartet werden - du kannst im [Befehle](#commands)-Abschnitt mehr über in erfahren.
Wenn ein Nutzer den Befehl ausgeführt hat, muss der ausgewählte Nutzer die Einladung mit dem Button annehmen. Wenn er dies innerhalb zwei Minuten tut, startet das Spiel.

Nach dem Akzeptieren sendet der Bot eine Nachricht mit dem Spielfeld und Knöpfe, nummeriert von 1 bis zur Spielfeld-Größe.
Beide Spieler nehmen nun Züge vor, indem sie die Marken durch Klicken auf die Knöpfe auf das Feld fallen lassen.
Die Marken fallen zur tiefstmöglichen Position in der gewählten Spalte, genau wie im echten Vier gewinnt.

Der erste Spieler, der vier Rechtecke seiner Farbe in einer beliebigen Reihe hat, gewinnt das Spiel. Die Rechtecke können horizontal, vertikal oder diagonal sein.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl          | Beschreibung                                                                                                                                                                                                                                       |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/connect-four` | Dieser Befehl startet ein Vier gewinnt-Spiel gegen den ausgewählten Nutzer. Du kannst außerdem die `field_size`-Option verwenden, um die Breite und Höhe festzulegen - diese ist standardmäßig 7, du kannst aber jede Zahl von 4 bis 10 eintragen. |
