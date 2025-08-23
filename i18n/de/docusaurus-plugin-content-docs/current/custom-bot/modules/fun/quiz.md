# Quiz-Modul

Erstelle Quizze für deine Nutzer und lasse sie gegeneinander antreten.

<ModuleOverview moduleName="quiz" />

## Funktionen {#features}
Erstelle einfach Quizze auf deinem Server, lasse deine Mitglieder auf einer Bestenliste konkurrieren und beantworte automatisch eine festgelegte Anzahl von Fragen pro Tag.

## Einrichtung {#setup}

Aktiviere das Modul [in deinem SCNX-Dashboard](https://scnx.app/de/glink?page=bot/modules?query=quiz&ref=scnx-app-docs) und [konfiguriere](#configuration) es.

## Verwendung {#usage}

Um ein öffentliches Quiz zu starten, verwende die Befehle `/quiz create` oder `/quiz create-bool`, wie unten im Befehlsbereich beschrieben.
Beachte, dass du die in der [Hauptkonfiguration](#config-main) festgelegte Rolle besitzen musst, um diese Befehle nutzen zu können.

Wenn Quizze in der [Quiz-Liste](#config-quiz) erstellt wurden, kann jeder Nutzer ein privates Quiz mit dem Befehl `/quiz play` starten.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                                                                                              | Beschreibung                                                                            |
|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| `/quiz create <Beschreibung> <Kanal> <Quiz-Dauer> <Option 1> <Option 2> [<Kann Stimme geändert werden?> <Option 3 bis 9>]` | Erstellt ein öffentliches Quiz mit der angegebenen Beschreibung/Frage im ausgewählten Kanal. |
| `/quiz create-bool <Beschreibung> <Kanal> [<Kann Stimme geändert werden?> <Quiz-Dauer>]`                            | Erstellt ein öffentliches Ja/Nein-Quiz mit der angegebenen Beschreibung/Frage im Kanal.      |
| `/quiz play`                                                                                                        | Spiele ein privates Quiz, das in der CustomBot-Konfiguration eingerichtet ist.                |
| `/quiz leaderboard`                                                                                                 | Zeigt die Bestenliste mit den Gesamt- und Tagespunkten der besten Nutzer an.                 |

## Konfiguration {#configuration}

### Hauptkonfiguration {#config-main}

In diesem Teil kannst du die wichtigsten Einstellungen für das Quiz einrichten.
Du findest die Seite in deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=quiz%7Cconfig).

| Feld                           | Beschreibung                                                                                                   |
|---------------------------------|----------------------------------------------------------------------------------------------------------------|
| Emojis                         | Welche Emojis der Bot für die Buttons verwendet. Du kannst Emojis sowohl für normale als auch für Ja/Nein-Quiz konfigurieren. |
| Tägliches Quizlimit           | Wie viele Quizze ein Nutzer pro Tag mit `/quiz play` spielen kann. Standardwert ist fünf.                      |
| Quiz-Leaderboard-Kanal        | Wird dieser gesetzt, aktualisiert der Bot automatisch die Bestenliste im Kanal. Der Kanal sollte nur dafür verwendet werden. |
| Rolle zum Erstellen von Quiz   | Rolle, die Quizze mit dem Befehl erstellen darf. Diese Einstellung beeinflusst nicht, wer `/quiz play` nutzen kann. |
| Modus zur Quiz-Auswahl         | Wie das nächste `/quiz play` Quiz für einen Nutzer ausgewählt wird: Bei „Random“ bekommt der Nutzer bei jedem Befehl ein zufälliges Quiz. |
| Live-Vorschau der Ergebnisse   | Zeigt die Antworten der Nutzer bei öffentlichen Quizzen live an, statt erst nach Ende des Quiz.                 |

### Nachrichten {#config-strings}

Mit der [Nachrichten-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=quiz%7Cstrings) kannst du die Nachrichten des Moduls individuell anpassen.

| Feld                 | Beschreibung                                                                                       |
|----------------------|----------------------------------------------------------------------------------------------------|
| title                | Der Titel des Quiz, der im Embed-Titel angezeigt wird.                                             |
| color                | Die Standardfarbe des Quiz-Embeds. |
| options              | Text mit einer Einführung zu den möglichen Quiz-Optionen.                                          |
| liveView             | Wird vor dem Live-Ansichts-Bereich des Quiz angezeigt, falls aktiviert.                            |
| expiresOn            | Name des Zusatzfelds, falls das Quiz ein Enddatum hat.                                             |
| thisQuizExpiresOn    | Zusätzlicher Text im Zusatzfeld, falls ein Enddatum gesetzt ist. `%date%` zeigt ein Discord-Timestamp im lokalen Format des Nutzers. |
| endedQuizTitle       | Titel des Quiz-Embeds, wenn das Quiz beendet ist.                                                  |
| endedQuizColor       | Farbe des Embeds, wenn das Quiz beendet ist.                                                       |
| leaderboardTitle     | Titel der Bestenliste im Embed-Titel.                                                              |
| leaderboardSubtitle  | Untertitel der Bestenliste im Embed-Beschreibung.                                                  |
| leaderboardColor     | Farbe des Bestenlisten-Embeds.                                                                     |
| leaderboardButton    | Text des Knopfes auf der Bestenliste.                                                              |

### Quiz bearbeiten {#config-quiz}

Unter [Quiz berbeiten](https://scnx.app/de/glink?page=bot/configuration?file=quiz%7CquizList) werden die Quizfragen verwaltet. Hier kannst du Fragen hinzufügen, bearbeiten und löschen.

Jede Quizfrage hat folgende Felder:

| Feld                  | Beschreibung                                                                                             |
|-----------------------|----------------------------------------------------------------------------------------------------------|
| Frage oder Behauptung   | Titel des Quiz, sollte eine Frage sein, z.B. „Was ist dein Lieblingsspiel?“.                             |
| Zeitlimit             | Zeit, nach der eine Antwort ungültig ist. Standardwert ist eine Minute.                                  |
| Richtige Antworten    | Liste aller korrekten Antworten. Diese werden mit den falschen Antworten gemischt. Beispiel: „Minecraft“.|
| Falsche Antworten     | Das Gegenteil der richtigen Antworten – bei Auswahl verliert der Nutzer. Beispiel: „Fortnite“.           |

## Fehlerbehebung {#troubleshooting}

<details>
    <summary>Quiz-Nachrichten werden nicht gesendet</summary>
    <li>Überprüfe deine Konfiguration:</li>
	<ul>
		<li>Das Quiz muss mindestens eine richtige und eine falsche Antwort haben.</li>
		<li>Das Quiz muss einen Titel besitzen.</li>
		<li>
			Stelle sicher, dass die <a href="#config-strings">Nachrichten-Konfiguration</a> gültig ist, insbesondere dürfen Felder nicht leer sein.
			Achte auch darauf, dass die verwendete Embed-Farbe gültig ist. Eine Liste der akzeptierten Farben findest du auf der Seite <a href="https://docs.scnx.xyz/de/docs/custom-bot/additional-features#embed-colors">„Zusätzliche CustomBot-Funktionen“</a>.
		</li>
	</ul>
</details>
<details>
    <summary>Leaderboard-Nachricht wird nicht gesendet</summary>
    <li>Stelle sicher, dass der ausgewählte Kanal leer ist und keine Nachrichten enthält, damit der Bot die Bestenliste anzeigen kann.</li>
</details>
<details>
    <summary>Falsche Emoji-Konfiguration</summary>
    <li>Überprüfe die Farbe des Buttons deiner Auswahl – ist er grün, hast du gewonnen! Andernfalls solltest du vielleicht die Regeln von Schere, Stein, Papier erneut lesen...</li>
</details>

## Gespeicherte Daten {#data-usage}

Folgende Daten werden zu jedem mit dem Bot erstellten Quiz gespeichert:

* Die ID der Quiz-Nachricht
* Die Beschreibung/Frage des Quiz
* Liste der Optionen
* Liste der abgegebenen Stimmen
* Datum der letzten möglichen Antwort, falls vorhanden
* Die Channel-ID des Kanals, in dem das Gewinnspiel gestartet wurde
* Ob Nutzer ihre Stimmen ändern dürfen
* Ob das Quiz öffentlich im Kanal (wie eine Umfrage) oder privat per `/quiz play` gestartet wurde
* Die Quiz-Art (z.B. Ja/Nein-Fragen)
* Metadaten zum Eintrag (Erstellungs- und Änderungsdatum)

Der Bot speichert zudem folgende Daten zu jedem Nutzer, der an einem Quiz teilgenommen hat:
* Die Nutzer-ID
* Die Gesamtanzahl Erfahrungspunkte (richtige Antworten)
* Die Anzahl Erfahrungspunkte des aktuellen Tages
* Die Anzahl beantworteter Quizze am aktuellen Tag
* Falls die zufällige Quiz-Auswahl deaktiviert ist, die ID des nächsten Quiz
* Metadaten zum Eintrag (Erstellungs- und Änderungsdatum)

Einmal täglich werden die Quizdaten des Vortags aus der Datenbank entfernt.
Um alle Quiz-bezogenen Daten zu löschen, [lösche die Modul-Datenbank](/de/docs/custom-bot/additional-features#reset-module-database).
