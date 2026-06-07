# Errate die Flagge!

Lege einen Kanal als Flaggen-Raten-Kanal fest und lasse deine Benutzer Flaggen von Ländern und US-Bundesstaaten erraten.

<ModuleOverview moduleName="flag-quiz" />

## Funktionen {#features}

- Automatisches Flaggen-Raten-Spiel, das in einem festgelegten Kanal läuft.
- Benutzer erraten den Namen des Landes oder Bundesstaates, der durch ein angezeigtes Flaggenbild dargestellt wird.
- Konfigurierbarer Schwierigkeitsgrad von 1 (am einfachsten) bis 5 (am schwersten).
- Funktion zum Aufdecken des ersten Buchstabens und zum Überspringen mit konfigurierbaren Ratenbegrenzungen.
- Optionale Bestenliste zur Verfolgung von Benutzerpunkten.
- Falsche Rateversuche können automatisch gelöscht werden, um den Kanal sauber zu halten.
- Details über die vorherige Flagge anzeigen, nachdem sie gelöst oder übersprungen wurde (Ländercode, Hauptstadt, Region, Kontinent).
- Immunitätsrollen zur Umgehung von Ratenbegrenzungen bei Aktionen.
  
## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=flag-quiz&ref=scnx-app-docs).
2. Erstelle einen leeren Textkanal auf deinem Server für das Quiz.
3. Öffne die [Konfiguration](#configuration) und setze den "Spiel-Kanal" auf den leeren Kanal.
4. Der Bot benötigt die Berechtigungen "Manage Messages", "Manage Channels" und "Read Message History" im Spiel-Kanal.
5. Passe optional den Schwierigkeitsgrad an oder aktiviere die Bestenliste.

## Nutzung {#usage}

Sobald das Spiel eingerichtet ist, postet der Bot ein Flaggenbild im Spiel-Kanal. Benutzer erraten den Namen des Landes oder Bundesstaates, indem sie ihre Rateversuche direkt in den Kanal schreiben. Der Bot erzwingt eine Abklingzeit zwischen den Rateversuchen.

- Wenn der Rateversuch korrekt ist, reagiert der Bot mit einem Feier-Emoji und postet eine neue Flagge.
- Wenn der Rateversuch falsch ist, reagiert der Bot mit einem Kreuz-Emoji. Falsche Rateversuche werden optional nach 5 Sekunden gelöscht.
- Benutzer können auf Schaltflächen unter der Quiz-Nachricht klicken, um:
  - **Ersten Buchstaben freischalten** - Zeigt den ersten Buchstaben des Landes- oder Bundesstaatennamens an.
  - **Flagge überspringen** - Überspringt die aktuelle Flagge und lädt eine neue. Die Antwort der übersprungenen Flagge wird offengelegt.
  - **Infos über die letzte Flagge** - Zeigt Details zur vorherigen Flagge an, einschließlich Ländercode, Hauptstadt, Region und Kontinent.
  - **Bestenliste anzeigen** - Zeigt die Top-25-Spieler an (sofern die Bestenliste aktiviert ist).

Wenn die Bestenliste aktiviert ist, erhalten Benutzer 1 Punkt für jeden korrekten Rateversuch.

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du das Flaggen-Quiz konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=flag-quiz%7Cconfig).

| Feld                                     | Beschreibung                                                                         |
| ----------------------------------------- | ----------------------------------------------------------------------------------- |
| Spiel-Kanal                              | Der Textkanal, in dem das Quiz stattfindet. Der Kanal muss leer sein.             |
| Maximale Anzahl von Tipps pro Nutzer pro Stunde | Maximale Anzahl an ersten Buchstaben, die ein Benutzer pro Stunde anfordern kann.                 |
| Maximale Anzahl von Überspringen pro Nutzer pro Stunde | Maximale Anzahl an Flaggen, die ein Benutzer pro Stunde überspringen kann.                          |
| Falsche Antworten löschen? (empfohlen)       | Wenn diese Option aktiviert ist, werden falsche Rateversuche nach 5 Sekunden gelöscht, um den Kanal sauber zu halten.    |
| Minimale Schwierigkeit                      | Die minimale Schwierigkeit der angezeigten Flaggen (1 = am leichtesten, 5 = am schwersten).                   |
| Maximale Schwierigkeit                      | Die maximale Schwierigkeit der angezeigten Flaggen (1 = am leichtesten, 5 = am schwersten).                   |
| Bestenliste aktivieren                        | Wenn diese Option aktiviert ist, wird eine Bestenlisten-Schaltfläche angezeigt und Benutzer erhalten Punkte für korrekte Rateversuche. |
| Immune Rollen                           | Rollen, die von den Limits für das Überspringen und das Anzeigen des ersten Buchstabens ausgenommen sind.                       |

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Der Bot postet keine Flaggen</summary>
    <ul>
        <li>Stelle sicher, dass der Spielkanal leer ist und in der Konfiguration korrekt eingestellt ist.</li>
        <li>Stelle sicher, dass der Bot die Berechtigungen "Nachrichten verwalten", "Kanäle verwalten" und "Nachrichtenverlauf anzeigen" im Spielkanal hat.</li>
    </ul>
</details>
<details>
    <summary>Es erscheinen keine Flaggen mit meinen Schwierigkeitseinstellungen</summary>
    <ul>
        <li>Stelle sicher, dass die minimale Schwierigkeit niedriger als oder gleich der maximalen Schwierigkeit ist.</li>
        <li>Versuche, den Schwierigkeitsbereich zu erweitern, um mehr Flaggen einzuschließen.</li>
    </ul>
</details>

## Gespeicherte Daten {#data-usage}

Für den Spielstatus werden folgende Daten gespeichert:

- Aktuelle Flaggen-Daten und vorherige Flaggen-Daten (einschließlich Bild-URL, Ländernamen und Nutzung des ersten Buchstabens)
- Die ID der angepinnten Infonachricht im Spielkanal
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Für jede Spielaktion (Überspringen, Enthüllen des ersten Buchstabens) werden folgende Daten gespeichert:

- Die Benutzer-ID der Person, die die Aktion ausgeführt hat
- Der Typ der Aktion
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Wenn die Bestenliste aktiviert ist, werden folgende Daten über jeden teilnehmenden Benutzer gespeichert:

- Die Benutzer-ID
- Ihre Gesamtpunktzahl
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu löschen, [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
