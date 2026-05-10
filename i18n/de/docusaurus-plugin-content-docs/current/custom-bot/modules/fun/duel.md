# Duell

Lasse Benutzer das Spiel „Duell“ auf deinem Discord spielen.

<ModuleOverview moduleName="duel" />

## Funktionen {#features}

- Fordere einen anderen Benutzer zu einem rundenbasierten Duell-Spiel heraus.
- Einfache Spielmechanik mit drei Aktionen: Schießen, Blocken und Nachladen.
- Interaktives, Button-basiertes Gameplay direkt in Discord.
- Einladungssystem mit Optionen zum Annehmen/Ablehnen und automatischem Ablauf.

## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=duel&ref=scnx-app-docs).
2. Keine weitere Konfiguration erforderlich. Das Modul besitzt keine Konfigurationsdatei.

## Nutzung {#usage}

Verwende den Befehl `/duel`, um einen anderen Benutzer herauszufordern. Der herausgeforderte Benutzer hat 2 Minuten Zeit, die Einladung anzunehmen oder abzulehnen.

Sobald das Spiel beginnt, wählen beide Spieler in jeder Runde eine von drei Aktionen durch das Klicken von Buttons aus:

- **Schießen** – Feuere deine Waffe auf den Gegner ab. Erfordert mindestens eine Patrone. Wenn der Gegner nicht blockt, gewinnst du.
- **Blocken** – Verteidige dich gegen einen Schuss. Du kannst nicht mehr als 5-mal hintereinander blocken; danach wird dein Block durchbrochen.
- **Nachladen** – Füge deiner Waffe eine Patrone hinzu. Du kannst maximal 5 Patronen halten. Während des Nachladens bist du verwundbar.

Beide Spieler treffen ihre Wahl gleichzeitig. Sobald beide gewählt haben, wird die Runde aufgelöst und die nächste Runde beginnt. Das Spiel endet, wenn ein Spieler erfolgreich einen ungeschützten Gegner erschießt.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl             | Beschreibung                    |
| ------------------- | --------------------------------- |
| `/duel user:<User>` | Fordere einen anderen Benutzer zu einem Duell heraus. |

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Die Einladung ist abgelaufen</summary>
    <ul>
        <li>Der herausgeforderte Benutzer hat 2 Minuten Zeit, die Einladung anzunehmen. Danach läuft sie automatisch ab.</li>
    </ul>
</details>
