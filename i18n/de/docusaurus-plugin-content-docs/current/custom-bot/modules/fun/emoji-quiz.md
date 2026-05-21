# Emoji-Quiz

Bestimme einen Kanal als Emoji-Quiz-Kanal und lass deine Benutzer Emoji-Kombinationen erraten.

<ModuleOverview moduleName="emoji-quiz" />

## Funktionen {#features}

- Automatisches Emoji-Quizspiel, das in einem festgelegten Kanal läuft.
- Benutzer erraten die durch Emoji-Kombinationen dargestellte Antwort, indem sie in den Kanal schreiben.
- Integrierte Fragedatenbank oder Verwendung eigener, benutzerdefinierter Fragen.
- Tipp-Anforderungs-, Anfangsbuchstaben-Freischaltungs- und Überspringen-Funktion mit konfigurierbaren Ratenbegrenzungen.
- Optionale Bestenliste zur Verfolgung der Benutzerpunkte.
- Falsche Tipps können automatisch gelöscht werden, um den Kanal übersichtlich zu halten.
- Immunitätsrollen, um Ratenbegrenzungen bei Aktionen zu umgehen.

## Einrichtung {#setup}

1. Aktiviere das Modul in [deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=emoji-quiz&ref=scnx-app-docs).
2. Erstelle einen leeren Textkanal auf deinem Server für das Quiz.
3. Öffne die [Konfiguration](#configuration) und setze den "Spiel-Kanal" auf den leeren Kanal.
4. Der Bot benötigt die Berechtigungen "Nachrichten verwalten", "Kanäle verwalten" und "Nachrichtenverlauf anzeigen" im Spiel-Kanal.
5. Konfiguriere optional benutzerdefinierte Fragen oder aktiviere die Bestenliste.

## Nutzung {#usage}

Sobald der Bot eingerichtet ist, postet er eine Emoji-Kombination im Spiel-Kanal. Benutzer erraten die Antwort, indem sie ihre Tipps direkt in den Kanal schreiben. Der Bot erzwingt eine Abklingzeit von 5 Sekunden zwischen den Tipps.

- Wenn der Tipp richtig ist, reagiert der Bot mit einem Feier-Emoji und postet eine neue Frage.
- Wenn der Tipp falsch ist, reagiert der Bot mit einem Kreuz-Emoji. Falsche Tipps werden optional nach 5 Sekunden gelöscht.
- Benutzer können auf die Schaltflächen unter der Quiz-Nachricht klicken, um:
  - **Tipp anfordern** – Zeigt einen Texthinweis für die aktuelle Frage an (falls verfügbar).
  - **Ersten Buchstaben freischalten** – Zeigt den ersten Buchstaben der Antwort an.
  - **Aufgabe überspringen** – Überspringt die aktuelle Frage und lädt eine neue.
  - **Infos über Fragen** – Zeigt Details zur aktuellen und vorherigen Frage an.
  - **Bestenliste anzeigen** – Zeigt die 25 besten Spieler an (wenn die Bestenliste aktiviert ist).

Wenn die Bestenliste aktiviert ist, erhalten Benutzer 2 Punkte für einen richtigen Tipp (oder 1 Punkt, wenn ein Hinweis verwendet wurde).

## Konfiguration {#configuration}

### Konfiguration {#config-main}

In dieser Konfigurationsdatei kannst du das Emoji-Quiz konfigurieren. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=emoji-quiz%7Cconfig).

| Feld                                                    | Beschreibung                                                                                                                                    |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Eigene Spiel-Fragen verwenden?                             | Falls aktiviert, werden deine benutzerdefinierten Fragen anstelle der integrierten Datenbank verwendet. Dies deaktiviert einige Funktionen wie den Schutz vor doppelten Fragen. |
| Spiel-Kanal                                            | Der Textkanal, in dem das Quiz stattfindet. Der Kanal muss leer sein.                                                                     |
| Maximale Anzahl von Tipps pro Nutzer pro Stunde | Maximale Anzahl an Freischaltungen des ersten Buchstabens, die ein Benutzer pro Stunde anfordern kann.                                                                            |
| Maximale Anzahl von Tipps pro Nutzer pro Stunde               | Maximale Anzahl an Tippanfragen, die ein Benutzer pro Stunde stellen kann.                                                                                     |
| Maximale Anzahl von Überspringen pro Nutzer pro Stunde              | Maximale Anzahl an Überspringungen einer Frage, die ein Benutzer pro Stunde durchführen kann.                                                                                  |
| Falsche Antworten löschen? (empfohlen)                      | Falls aktiviert, werden falsche Tipps nach 5 Sekunden gelöscht, um den Kanal sauber zu halten.                                                             |
| Bestenliste aktivieren                                 | Falls aktiviert, erscheint eine Bestenlisten-Schaltfläche und Benutzer erhalten Punkte für richtige Tipps.                                                          |
| Immune Rollen                                      | Rollen, die von den Limits für das Überspringen, Hinweisen und Enthüllen des ersten Buchstabens ausgenommen sind.                                                                        |

### Eigene Spielfragen {#config-custom}

In dieser Konfigurationsdatei kannst du deine eigenen Quizfragen hinzufügen. Öffne sie in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=emoji-quiz%7Ccustom-questions).

| Feld             | Beschreibung                                                                         |
| ----------------- | ------------------------------------------------------------------------------------- |
| Fragestellung (= Emojis) | Die den Benutzern angezeigte Emoji-Kombination.                                            |
| Tipp (optional)   | Ein Text-Hinweis, den Benutzer anfordern können. Leer lassen, um die Tipp-Schaltfläche für diese Frage auszublenden. |
| Lösung         | Die Antwort, die Benutzer erraten müssen.                                                  |

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Der Bot postet keine Quizfragen</summary>
    <ul>
        <li>Stelle sicher, dass der Spiel-Kanal leer und in der Konfiguration korrekt eingestellt ist.</li>
        <li>Stelle sicher, dass der Bot die Berechtigungen "Nachrichten verwalten", "Kanäle verwalten" und "Nachrichtenverlauf anzeigen" im Spiel-Kanal hat.</li>
    </ul>
</details>
<details>
    <summary>Eigene Fragen werden nicht verwendet</summary>
    <ul>
        <li>Stelle sicher, dass "Eigene Spiel-Fragen verwenden??" in der Konfiguration aktiviert ist.</li>
        <li>Nach dem Ändern dieser Einstellung musst du die aktuelle Frage überspringen oder lösen, damit die Änderung wirksam wird.</li>
    </ul>
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden für den Spielstatus gespeichert:

- Aktuelle Fragendaten und vorherige Fragendaten (einschließlich Frage, Lösung und Tippnutzung)
- Die ID der angepinnten Infonachricht im Spielkanal
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Die folgenden Daten werden über jede Spielaktion gespeichert (Tipp, Überspringen, Freischalten des ersten Buchstabens):

- Die Benutzer-ID desjenigen, der die Aktion ausgeführt hat
- Die Art der Aktion
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Wenn die Bestenliste aktiviert ist, werden die folgenden Daten über jeden teilnehmenden Benutzer gespeichert:

- Die Benutzer-ID
- Die Gesamtpunktzahl
- Metadaten über den Eintrag (Erstellungsdatum und Datum der letzten Aktualisierung)

Um alle von diesem Modul gespeicherten Daten zu löschen [setze die Modul-Datenbank zurück](/de/docs/custom-bot/additional-features/#reset-module-database).
