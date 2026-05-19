# Schach

Spiele Schach gegen andere Servermitglieder oder die KI, direkt in Discord!

<ModuleOverview moduleName="chess" />

## Funktionen {#features}

- Fordere ein anderes Mitglied zu einer PvP-Schachpartie heraus oder starte ein Spiel gegen die KI (Leicht, Mittel, Schwer).
- Spiele laufen in dedizierten Discord-Threads für ein sauberes, asynchrones Gameplay. Threads werden automatisch archiviert, wenn das Spiel endet.
- Drei Möglichkeiten, Züge zu machen: Gib einen Zug direkt im Spiel-Thread ein, verwende die algebraische Notation über ein Popup-Modal (z. B. `e2e4`, `Nf3`, `O-O`) oder nutze geführte Auswahlmenüs, um deine Figur und das Zielfeld auszuwählen.
- Volle Rochade-Unterstützung – verwende die Standardnotation (`O-O`, `O-O-O`) oder die Koordinatennotation (`e1g1`). Rochadezüge sind in den Auswahlmenüs gekennzeichnet.
- **Bauerntransformations-Auswahl** – Wenn ein Bauer die letzte Reihe erreicht, wähle über ein Dropdown-Menü aus, in welche Figur er umgewandelt werden soll (Dame, Turm, Läufer oder Springer), anstatt immer zu einer Dame gezwungen zu sein.
- **Materialbilanz-Anzeige** – Das Spiel-Embed zeigt nach jedem Zug an, wer materiell im Vorteil ist (z. B. *Weiß +3*).
- Visuelle Schachbrett-Bilder werden für jeden Zug generiert, inklusive Hervorhebung von Schach und dem letzten Zug. Das Brett wird automatisch aus der Perspektive des Spielers gerendert, der an der Reihe ist, sodass asynchrone Spiele deine eigenen Figuren immer unten anzeigen.
- Remisangebote, Aufgaben und die Zughistorie sind integriert. Remisangebote sind nur in PvP-Spielen verfügbar, nicht gegen die KI.
- Beendete Spiele enthalten eine **Züge**-Schaltfläche im letzten Brett-Embed, um den gesamten Spielverlauf schnell zu überprüfen.
- Konfigurierbares Zug-Zeitlimit mit automatischen Erinnerungen und Aufgeben-Niederlage bei Inaktivität.
- Mehrere gleichzeitige Spiele pro Spieler (keine doppelten Spiele zwischen denselben zwei Spielern).
- Spiele werden automatisch als verloren gewertet, wenn ein Spieler den Server verlässt.

## Einrichtung {#setup}

1. [Aktiviere das Modul](https://scnx.app/de/glink?page=bot/modules?query=chess) auf deinem Server.
2. Öffne optional die [Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=chess%7Cconfiguration) um die Einstellungen für **Zugzeitüberschreitung**, **Aufgeben Zeitüberschreitung**, **Maximale gleichzeitige Spiele** und **KI-Gegner aktiviert** anzupassen.

Spiel-Threads werden in dem Kanal erstellt, in dem der Befehl `/chess` verwendet wird – es muss kein dedizierter Spiel-Kanal konfiguriert werden.

## Nutzung {#usage}

### Einen Spieler herausfordern {#challenging}

Verwende `/chess challenge`, um ein anderes Mitglied herauszufordern. Der herausgeforderte Benutzer hat 2 Minuten Zeit, um die Einladung anzunehmen oder abzulehnen. Sobald sie angenommen wurde, wird im aktuellen Kanal ein neuer Thread mit dem Schachbrett und den Aktionsschaltflächen erstellt.

### Gegen die KI spielen {#ai}

Verwende `/chess challenge-ai`, um ein Spiel gegen die KI zu starten. Wähle eine Schwierigkeitsstufe: Leicht, Mittel oder Schwer. Du spielst immer als Weiß.

### Züge ausführen {#moves}

Wenn du an der Reihe bist, hast du drei Optionen:

- **Im Thread schreiben** – Gib deinen Zug einfach als Nachricht im Spiel-Thread ein (z. B. `e2e4`, `Nf3`, `O-O`). Die Nachricht wird automatisch gelöscht und der Zug wird verarbeitet.
- **Zug-Schaltfläche** – Klicke auf "Zug", um ein Pop-up-Fenster zu öffnen, in dem du deinen Zug in algebraischer Notation eingibst (z. B. `e2e4`, `e2-e4`, `Nf3`).
- **Auswahlmenüs** – Der Bot zeigt ein Auswahlmenü für Figuren an. Wähle eine Figur und anschließend das Zielfeld im nächsten Menü. Rochade-Züge sind gekennzeichnet, sofern sie verfügbar sind.

Wenn ein Bauer die letzte Reihe erreicht, ersetzt der Bot die Spielsteuerung durch ein **Beförderungs-Auswahlmenü**. Wähle die gewünschte Figur (Dame, Turm, Läufer oder Springer) und der Zug wird mit deiner Auswahl abgeschlossen.

Nach deinem Zug wird das Bild des Schachbretts aktualisiert und der Gegner wird markiert.

### Remis, Aufgeben und Verlauf {#actions}

- **Remis anbieten** – Klicke auf die Schaltfläche "Remis anbieten" (nur in PvP-Spielen, gegen die KI nicht verfügbar). Dein Gegner sieht bei seinem nächsten Zug eine Schaltfläche „Remis annehmen“. Wenn er stattdessen einen Zug ausführt, wird das Remis-Angebot implizit abgelehnt.
- **Aufgeben** – Klicke auf "Aufgeben" und bestätige die Auswahl. Der Gegner gewinnt sofort.
- **Züge** – Klicke auf "Züge", um den vollständigen Spielverlauf anzuzeigen.
  
### Zugzeitüberschreitungen {#timeouts}

Wenn ein Spieler innerhalb des konfigurierten Zeitlimits keinen Zug ausführt, erhält er eine Erinnerung im Thread. Wenn er innerhalb der Verfallzeit immer noch keinen Zug ausführt, wird das Spiel automatisch als verloren gewertet.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                               | Beschreibung                                                     |
| ----------------------------------------------------- | --------------------------------------------------------------- |
| `/chess challenge user:<User>`                        | Fordere ein anderes Mitglied zu einer Schachpartie heraus.                      |
| `/chess challenge-ai [difficulty:<Easy/Medium/Hard>]` | Starte eine Schachpartie gegen die KI (Standard-Schwierigkeitsgrad: Mittel). |
| `/chess games`                                        | Zeige deine aktiven Schachpartien an.                                  |
| `/chess history [user:<User>]`                        | Zeige den Verlauf beendeter Schachpartien an (deine eigenen oder die eines anderen Spielers).  |

## Konfiguration {#configuration}

Öffne die Konfiguration in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=chess%7Cconfiguration).

| Feld                   | Beschreibung                                                                                              | Standard |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Zugzeitüberschreitung (Stunden)    | Stunden, bis eine Erinnerung im Spiel-Thread gesendet wird.                                               | 24      |
| Aufgeben Zeitüberschreitung (Stunden) | Stunden der Inaktivität, bis das Spiel automatisch als verloren gewertet wird.                                                        | 48      |
| Maximale gleichzeitige Spiele    | Maximale Anzahl aktiver Spiele pro Spieler.                                                         | 5       |
| KI-Gegner aktiviert     | Ermögliche Spielern, Partien gegen die KI zu starten. Wenn diese Option deaktiviert ist, wird der Befehl `/chess challenge-ai` ausgeblendet. | true    |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Das Brettbild wird nicht angezeigt</summary>
  <ul>
    <li>Das Brettbild wird von einer externen API generiert. Falls die API vorübergehend nicht verfügbar ist, funktioniert das Spiel trotzdem – das Bild fehlt dann lediglich im Embed.</li>
  </ul>
</details>

<details>
  <summary>Mein Zug wurde als ungültig abgelehnt</summary>
  <ul>
    <li>Stelle sicher, dass du einen legalen Zug eingibst. Die Fehlermeldung listet alle legalen Züge für deine aktuelle Position auf.</li>
    <li>Wenn du eine Notation wie <code>Nf3</code> erwendest und mehrere Springer f3 erreichen können, nutze stattdessen die Koordinatennotation (z. B. <code>G1F3</code>).</li>
  </ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden von diesem Modul gespeichert:

- **Spielaufzeichnungen**: Spieler-IDs, Brettzustand (FEN), Anzahl der Züge, Spielstatus, Thread-/Kanal-IDs und Zeitstempel für jedes Spiel. Beendete Spiele werden für den Verlauf unbegrenzt aufbewahrt.

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
