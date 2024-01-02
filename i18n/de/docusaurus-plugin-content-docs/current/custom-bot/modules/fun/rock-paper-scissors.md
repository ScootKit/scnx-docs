# Schere Stein Papier

Lasse deine Nutzer Schere Stein Papier gegen den Bot oder andere spielen!

<ModuleOverview moduleName="rock-paper-scissors" />

## Funktionen {#features}
Schere Stein Papier ist ein einfaches Spiel, was mit nur 2 Spielern ohne andere Ausrüstung gespielt werden kann. Du kannst auf [Wikipedia](https://de.wikipedia.org/wiki/Schere,_Stein,_Papier) mehr über das Spiel und seine Regeln erfahren.
Normalerweise gibt es drei Optionen, zwischen denen gewählt werden kann: Schere, Stein und Papier - wie es der Name des Spiels sagt. Mit deinem eigenem Bot kannst du gegen den Bot oder andere Nutzer auf deinem Discord Server spielen.

## Einrichtung {#setup}
Die Einrichtigung ist sehr einfach - aktiviere einfach das Modul und du bist startklar!

## Nutzung {#usage}
Ein Schere Stein Papier-Spiel kann mit dem Slash-Befehl `/rock-paper-scissors` gestartet werden - du findest mehr Informationen über den Befehl im [Befehle](#commands)-Abschnitt weiter unten.

Wenn die user (Nutzer)-Option leergelassen oder ein Bot angegeben wird, startet das Spiel automatisch im aktuellen Kanal mit der eigenen Bot-KI.
Andernfalls muss der ausgewählte Nutzer die Einladung zum Spielen gegen dich mit dem Button annehmen. Wenn er dies innerhalb zwei Minuten tut, startet das Spiel.

Nach dem Akzeptieren ändert der Bot die Nachricht und fügt drei Knöpfe für die drei Optionen, angezeigt als Emojis, hinzu. Wenn beide Nutzer ihre Wahl getroffen haben, zeigt der Bot den Gewinner des Spiels an. Wenn du eine weitere Runde spielen möchtest, klicke einfach auf den "Erneut spielen"-Knopf.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehle                | Beschreibung              |                                                                                                                                                               |
|------------------------|----------------------------|
| `/rock-paper-scissors` | Dieser Befehl startet, wenn kein Nutzer oder ein Bot angegeben wurde, ein Schere Stein Papier-Spiel oder sendet eine Einladung an einen anderen Spieler. |


## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Ich habe die richtige Option gewählt, aber der Bot sagt, ich habe verloren!</summary>
    <li>Schaue dir die Farbe des Knopfes mit deiner Wahl an - wenn er grün ist, hast du gewonnen! Andernfalls musst du eventuell noch einmal die Schere Stein Papier-Regeln lesen...</li>
</details>
