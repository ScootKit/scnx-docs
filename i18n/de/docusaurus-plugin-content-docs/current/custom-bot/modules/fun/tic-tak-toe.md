# Tic Tac Toe

Lasse deine Nutzer gegeneinander Tic Tac Toe spielen!

<ModuleOverview moduleName="tic-tak-toe" />

## Funktionen {#features}

- Fordere einen anderen Nutzer zu einer Runde Tic Tac Toe heraus.
- Interaktives 3x3-Spielfeld aus Buttons direkt in Discord.
- Einladungssystem mit Annehmen/Ablehnen und automatischem Ablauf.
- Der startende Spieler wird zufällig ausgewählt, damit es fair bleibt.
- Farbcodierte Spielsteine (grüne und gelbe Kreise) zur einfachen Unterscheidung.

## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=tic-tak-toe&ref=scnx-app-docs).
2. Es ist keine weitere Konfiguration nötig. Das Modul hat keine Konfigurationsdatei.

## Nutzung {#usage}

Nutze den Befehl `/tic-tac-toe`, um einen anderen Nutzer herauszufordern. Der herausgeforderte Nutzer hat 2 Minuten Zeit, die Einladung anzunehmen oder abzulehnen.

Sobald das Spiel startet, erscheint ein 3x3-Feld aus Buttons. Die Spieler klicken abwechselnd auf leere Felder, um ihren Stein zu setzen. Wer beginnt, wird zufällig bestimmt. Der Spieler, der am Zug ist, wird gepingt.

Das Spiel endet, wenn:

- ein Spieler drei Steine in einer Reihe (waagerecht, senkrecht oder diagonal) hat und gewinnt.
- alle Felder belegt sind, ohne dass es einen Gewinner gibt, und das Spiel unentschieden endet.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                        | Beschreibung                                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `/tic-tac-toe user:<Nutzer>`                  | Fordere einen anderen Nutzer zu einer Runde Tic Tac Toe heraus.                                                     |
| Challenge to Tic Tac Toe (Nutzer-Kontextmenü) | Rechtsklick auf einen Nutzer und "Apps" > "Challenge to Tic Tac Toe" wählen, um ihn zu einer Runde herauszufordern. |

Kontextmenü-Befehle sind standardmäßig ausgeschaltet. Siehe [Kontextmenü-Befehle einrichten](/de/docs/custom-bot/commands#context-menus), um sie zu aktivieren.

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Die Einladung ist abgelaufen</summary>
    <ul>
        <li>Der herausgeforderte Nutzer hat 2 Minuten Zeit, die Einladung anzunehmen. Danach läuft sie automatisch ab.</li>
    </ul>
</details>
