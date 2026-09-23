# Teammitglieder-Ziele

Setze wöchentliche Nachrichtenziele und Sprachaktivitätsziele für deine Teammitglieder.

<ModuleOverview moduleName="team-goals" />

## Funktionen {#features}

- Setze ein Nachrichtenziel für deine Teammitglieder.
- Optional: Setze ein Sprachaktivitätsziel, um die in Sprachkanälen verbrachte Zeit zu verfolgen.
- Der Bot überprüft jede Woche, ob die Teammitglieder ihre Ziele erreicht haben.
- Mit [Befehlen](#commands) kannst du deinen aktuellen Fortschritt und deinen Zielverlauf in der Vergangenheit überprüfen.
- Sende Nutzern ihr Ergebnis jede Woche per PN oder in einen konfigurierten Kanal.
- Lasse Kanäle optional von Nachrichten- oder Sprachzielen ignorieren.

## Einrichtung {#setup}

1. Wähle (oder erstelle) eine Rolle. Die Aktivität von Nutzern mit dieser Rolle wird gewertet.
2. [Konfiguriere das Modul](#configuration).
3. [Setze bitte Berechtigungen](/docs/custom-bot/slash-commands) für Slash-Befehle, um unerlaubte Nutzung zu unterbinden.
4. Gebe Mitgliedern, deren Aktivität ausgewertet werden soll, die Rolle.

## Nutzung {#usage}

- Die Anforderungen werden automatisch einmal pro Woche am eingestellten "Wöchentlicher Zusammenfassungstag" und der "Wöchentliche Zusammenfassungsuhrzeit" [ausgewertet](#module-terms).
- Du kannst immer den Nachrichtenfortschritt von dir oder einem anderen Nutzer mit [`/team-goals progress`](#commands) und den früheren Zielverlauf mit [`/team-goals history`](#commands) einsehen.
- Wenn das Sprachziel aktiviert ist, kannst du den Sprachaktivitätsfortschritt mit [`/team-goals voice-progress`](#commands) einsehen.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                       | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/team-goals progress [user:<Nutzer>]`       | Zeigt deinen Fortschritt zum Ziel des aktuellen [Bewertungszeitraums](#module-terms) an (wenn leer, wird dein Fortschritt angezeigt). Ist das Sprachziel deaktiviert, ist dies ein Absatz mit den noch fehlenden Nachrichten bis zum Ziel, einem Fortschrittsbalken und der Frist. Ist das Sprachziel aktiviert, werden stattdessen drei Statuszeilen angezeigt - gesendete Nachrichten/Ziel, gesendete Sprachminuten/Ziel und das Datum der nächsten Zusammenfassung - jede mit eigenem Haken oder Kreuz, wobei Titel und Farbe des Embeds das Gesamtergebnis gemäß dem eingestellten "Zielmodus" widerspiegeln. |
| `/team-goals voice-progress [user:<Nutzer>]` | Zeigt den Sprachaktivitätsfortschritt (Minuten in Sprachkanälen, Ziel, verbleibende Zeit) für das Sprachziel des aktuellen [Bewertungszeitraums](#module-terms) an. Nur verfügbar, wenn das Sprachziel aktiviert ist.                                                                                                                                                                                                                                                                                                                                                                                             |
| `/team-goals history [user:<Nutzer>]`        | Zeigt den früheren Zielverlauf (Anzahl der Nachrichten, Sprachminuten, wenn das Sprachziel aktiviert ist, Ziel erreicht oder nicht gemäß dem eingestellten "Zielmodus", Prozentsatz der erreichten Ziele) der letzten 10 Wochen des angegebenen Benutzers an (wenn leer, wird dein Verlauf angezeigt).                                                                                                                                                                                                                                                                                                            |

## Definition von modulspezifischen Begriffen {#module-terms}

- Eine **Auswertung** ist der Zeitpunkt, zu dem ein Nutzer ausgewertet wird. Dies geschieht einmal pro Woche, am konfigurierten [Wöchentlichen Zusammenfassungstag zur Wöchentlichen Zusammenfassungsuhrzeit](#configuration), in der eingestellten Zeitzone des Bots. Bei der Auswertung vergleicht der Bot die Anzahl der im aktuellen Bewertungszeitraum gesendeten Nachrichten mit dem [konfigurierten Ziel](#configuration) und löst die konfigurierten Nachrichten für [Fehlgeschlagen / Erreicht](#configuration) aus. Sobald alle Benutzer ausgewertet wurden, beginnt der nächste Bewertungszeitraum.
- Ein **Bewertungszeitraum** ist die Zeit zwischen der letzten und der nächsten Auswertung und ist genau eine Woche lang.

## Konfiguration {#configuration}

Diese Konfigurationsdatei ermöglicht es dir, die Funktionsweise des Moduls und das Ziel selbst zu konfigurieren.
Öffne sie in
deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?query=goal&file=team-goals%7Cconfig).

:::info
Die wöchentliche Zusammenfassung wird jetzt an dem eingestellten "Wöchentlicher Zusammenfassungstag" und der
"Wöchentliche Zusammenfassungsuhrzeit" gesendet, in der eingestellten Zeitzone des Bots, statt zu dem festen
Zeitpunkt, an dem das Modul ursprünglich aktiviert wurde. Bei der ersten Auswertung nach dem Update wechseln
bestehende Server von ihrem bisherigen, willkürlichen Zeitpunkt zum neuen - dadurch wird genau eine Woche um bis zu
sieben Tage kürzer oder länger.
:::

:::info
Wenn das Sprachziel aktiviert ist, erhalten Teammitglieder jetzt standardmäßig eine einzige kombinierte wöchentliche
Nachricht statt getrennter Nachrichten für das Nachrichten- und das Sprachziel (siehe "Kombinierte Ziel
erfüllt-Nachricht" und "Kombinierte Ziel fehlgeschlagen-Nachricht" weiter unten). Um das bisherige Verhalten
beizubehalten, deaktiviere "Eine kombinierte Nachricht pro Teammitglied senden" - deine bestehenden Vorlagen für
Ziel erfüllt-Nachricht, Ziel fehlgeschlagen-Nachricht, Sprachziel erreicht-Nachricht und Sprachziel
fehlgeschlagen-Nachricht bleiben unverändert und greifen sofort wieder.
:::

| Feld                                                     | Beschreibung                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Team-Rollen                                              | Diese Rollen werden jede Woche hinsichtlich ihres Fortschritts zum Ziel [ausgewertet](#module-terms). Es werden nur die Nachrichten von Nutzern mit dieser Rolle gezählt.                                                                                                                                                                                           |
| Wöchentliche Nachrichten Ziele                           | Die Anzahl der Nachrichten, die Teammitglieder in jedem [Bewertungszeitraum](#module-terms) senden müssen, um das Ziel zu erreichen.                                                                                                                                                                                                                                |
| Ziel erfüllt-Nachricht                                   | Das ist die Nachricht, die jede [Auswertung](#module-terms) für jeden Nutzer, der ausgewertet wird (jeder mit einer konfigurierten Team-Rolle) per PN oder in den konfigurierten Kanal gesendet wird, wenn das Ziel erreicht wurde. Unterstützt `%voiceMinutes%` und `%voiceGoal%`, die auch bei deaktiviertem Sprachziel befüllt werden (mit `0`).                 |
| Ziel fehlgeschlagen-Nachricht                            | Das ist die Nachricht, die jede [Auswertung](#module-terms) für jeden Nutzer, der ausgewertet wird (jeder mit einer konfigurierten Team-Rolle) per PN oder in den konfigurierten Kanal gesendet wird, wenn das Ziel **nicht** erreicht wurde. Unterstützt `%voiceMinutes%` und `%voiceGoal%`, die auch bei deaktiviertem Sprachziel befüllt werden (mit `0`).       |
| Nachrichten in Kanal statt per PN schicken               | Wenn aktiviert, werden Teammitglieder ihre [Auswertung](#module-terms) in einem Kanal statt per PN erhalten.                                                                                                                                                                                                                                                        |
| Kanal, in welchen die Nachrichten gesendet werden sollen | _Nur sichtbar, wenn "Nachrichten in Kanal statt per PN schicken" aktiviert ist._<br/>Die [Auswertung](#module-terms) wird in diesen Kanal statt per PN gesendet.                                                                                                                                                                                                    |
| Ignorierte Kanäle                                        | Nachrichten von Nutzern mit mindestens einer der Teammitglieder-Rollen werden in diesen Kanälen nicht zu ihrem Ziel hinzugerechnet.                                                                                                                                                                                                                                 |
| Nachrichtenziel-Überschreibungen                         | Optional kannst du das wöchentliche Nachrichtenziel für bestimmte Rollen überschreiben. Erstes Feld: Rollen-ID. Zweites Feld: Benutzerdefiniertes Ziel für diese Rolle.                                                                                                                                                                                             |
| Sprachziel aktivieren                                    | Wenn aktiviert, werden Teammitglieder auch anhand ihrer Sprachkanal-Aktivität ausgewertet. Sprachminuten werden erfasst, wenn ein Nutzer mit einer Team-Rolle in einem Sprachkanal verbunden ist.                                                                                                                                                                   |
| Wöchentliches Sprachziel (Minuten)                       | _Nur sichtbar, wenn "Sprachziel aktivieren" aktiviert ist._<br/>Die Anzahl der Minuten, die Teammitglieder in jedem [Bewertungszeitraum](#module-terms) in Sprachkanälen verbringen müssen, um das Sprachziel zu erreichen. Standard: 60.                                                                                                                           |
| Ignorierte Sprachkanäle                                  | _Nur sichtbar, wenn "Sprachziel aktivieren" aktiviert ist._<br/>In diesen Sprachkanälen verbrachte Zeit wird nicht zum Sprachziel gezählt.                                                                                                                                                                                                                          |
| Sprachziel erreicht-Nachricht                            | _Nur sichtbar, wenn "Sprachziel aktivieren" aktiviert ist._<br/>Die Nachricht, die jede Auswertung an Teammitglieder gesendet wird, die ihr Sprachziel erreicht haben. Leer lassen, um keine separate Sprachziel-Nachricht zu senden. Unterstützt `%voiceMinutes%`, `%voiceGoal%` und alle Nachrichtenziel-Parameter.                                               |
| Sprachziel fehlgeschlagen-Nachricht                      | _Nur sichtbar, wenn "Sprachziel aktivieren" aktiviert ist._<br/>Die Nachricht, die jede Auswertung an Teammitglieder gesendet wird, die ihr Sprachziel nicht erreicht haben. Leer lassen, um keine separate Sprachziel-Nachricht zu senden. Unterstützt `%voiceMinutes%`, `%voiceGoal%` und alle Nachrichtenziel-Parameter.                                         |
| Sprachziel-Überschreibungen                              | _Nur sichtbar, wenn "Sprachziel aktivieren" aktiviert ist._<br/>Optional kannst du das wöchentliche Sprachziel für bestimmte Rollen überschreiben. Erstes Feld: Rollen-ID. Zweites Feld: Benutzerdefiniertes Sprachziel in Minuten.                                                                                                                                 |
| Wöchentlicher Zusammenfassungstag                        | Der Wochentag, an dem die wöchentliche Zusammenfassung gesendet wird und der [Bewertungszeitraum](#module-terms) zurückgesetzt wird, in der eingestellten Zeitzone des Bots. Standard: Montag.                                                                                                                                                                      |
| Wöchentliche Zusammenfassungsuhrzeit                     | Die volle Stunde, zu der die wöchentliche Zusammenfassung gesendet wird, in der eingestellten Zeitzone des Bots. Standard: 09:00.                                                                                                                                                                                                                                   |
| Eine kombinierte Nachricht pro Teammitglied senden       | _Nur sichtbar, wenn "Sprachziel aktivieren" aktiviert ist._<br/>Wenn aktiviert, werden das Nachrichtenziel und das Sprachziel in einer einzigen wöchentlichen Nachricht statt in zwei getrennten Nachrichten gemeldet. Standardmäßig aktiviert.                                                                                                                     |
| Zielmodus                                                | _Nur sichtbar, wenn "Sprachziel aktivieren" aktiviert ist._<br/>Ob ein Teammitglied sowohl das Nachrichtenziel als auch das Sprachziel erreichen muss, oder ob die Erfüllung eines der beiden Ziele ausreicht, um die [Auswertung](#module-terms) zu bestehen.                                                                                                      |
| Kombinierte Ziel erfüllt-Nachricht                       | _Nur sichtbar, wenn "Eine kombinierte Nachricht pro Teammitglied senden" aktiviert ist._<br/>Die Nachricht, die einmal pro Woche an Teammitglieder gesendet wird, die ihr wöchentliches Ziel erreicht haben, wenn kombinierte Nachrichten aktiviert sind. Unterstützt `%messageStatus%`, `%voiceStatus%` und alle Parameter des Nachrichten- und Sprachziels.       |
| Kombinierte Ziel fehlgeschlagen-Nachricht                | _Nur sichtbar, wenn "Eine kombinierte Nachricht pro Teammitglied senden" aktiviert ist._<br/>Die Nachricht, die einmal pro Woche an Teammitglieder gesendet wird, die ihr wöchentliches Ziel nicht erreicht haben, wenn kombinierte Nachrichten aktiviert sind. Unterstützt `%messageStatus%`, `%voiceStatus%` und alle Parameter des Nachrichten- und Sprachziels. |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Von meinem Team gesendete Nachrichten werden nicht richtig gezählt</summary>

Bitte stelle sicher, dass

  <ul>
    <li>der Bot Zugriff auf jeden Kanal hat, in welchem Nachrichten gezählt werden sollen, und dass der Kanal kein <a href="#configuration">ignorierter Kanal</a> ist.</li>
    <li>der Nutzer mindestens eine der <a href="#configuration">konfigurierten Teammitglieder-Rollen</a> hat. Es werden nur Nachrichten gezählt, die von Nutzern gesendet wurden, welche während dem Senden mindestens eine Teammitglieder-Rolle besessen haben - Nachrichten, die gesendet werden, bevor ein Nutzer die Teammitglieder-Rolle hat, werden nicht gezählt.</li>
  </ul>
</details>

<details>
  <summary>Wie kann ich die Zeit verändern, wann Nutzer ausgewertet werden?</summary>

Öffne die <a href="#configuration">Modulkonfiguration</a> und ändere "Wöchentlicher Zusammenfassungstag" und/oder
"Wöchentliche Zusammenfassungsuhrzeit" auf den Wochentag und die Uhrzeit (in der eingestellten Zeitzone des Bots), zu
der die Auswertung stattfinden soll. Die Änderung wird beim nächsten Neuladen der Modulkonfiguration wirksam - du
musst das Modul dafür weder deaktivieren noch seine Datenbank löschen.

Beachte, dass der aktuelle Bewertungszeitraum immer beim nächsten Eintreten des neu eingestellten Zeitpunkts endet -
eine Änderung während eines laufenden Zeitraums macht diesen daher einmalig kürzer oder länger, genau wie eine
Verschiebung des Zusammenfassungstages von Montag auf Dienstag an einem Montagnachmittag. Das gilt auch direkt nach
der Aktivierung des Moduls: Aktivierst du es beispielsweise an einem Sonntag um 20:00 Uhr mit den Standardwerten
(Montag, 09:00 Uhr), findet die erste Auswertung schon etwa 13 Stunden später statt, wodurch ein Ziel von 100
Nachrichten mit 0 gesendeten Nachrichten als nicht erreicht angezeigt wird. Stelle Tag und Uhrzeit daher am besten
direkt nach der Installation ein, bevor deine Teammitglieder mit dem Sammeln von Nachrichten beginnen, um einen
unerwartet kurzen ersten Zeitraum zu vermeiden.

</details>

<details>
  <summary>Die Auswertung funktioniert nicht richtig (z.B. werden Auswertungsnachrichten nicht gesendet)</summary>

Bitte stelle sicher, dass

   <ul>
    <li>der Bot die Berechtigung hat, Nachrichten in den <a href="#configuration">konfigurierten Kanal</a> zu senden, wenn aktiviert.</li>
    <li>deine Teammitglieder mindestens eine der <a href="#configuration">konfigurierten Team-Rollen</a> besitzen.</li>
    <li>die <a href="#configuration">konfigurierte Nachricht</a> nicht inkorrekt ist.</li>
  </ul>
  Selbst wenn keine Auswertung gesendet wurde, kannst du immer den früheren Zielverlauf mit dem Slash-Befehl <a href="#commands"><code>/team-goals history</code></a> einsehen.
</details>

<details>
  <summary>Kann ich das Modul nutzen, um die Aktivität meiner Nutzer auszuwerten? / SCNX fügt einen "Missbrauch melden"-Knopf an meine Nachrichten an</summary>

Eine solche Nutzung verstößt gegen unsere <a href="https://scootk.it/scnx-tos">Nutzungsbedingungen</a>, da du unsere Software nutzt, um deine Nutzer mit Spam zu belästigen. Du darfst das Modul nur
zum Auswerten der Aktivität deiner Teammitglieder und nur mit deren Einverständnis nutzen.
Wenn du die PN-Funktion von diesem Modul nutzt und eine ungewöhnlich hohe Anzahl an Mitgliedern auf deinem Server auswertest, wird SCNX eventuell automatisch einen "Missbrauch melden"-Knopf an deine Nachrichten anhängen.
Du kannst auf <a href="https://scootk.it/report-mass-dm">scootk.it/report-mass-dm</a> mehr darüber erfahren (das ist auch der im Knopf verlinkte Link).
Die meisten unserer Nutzer sind nie davon betroffen, und du musst dir normalerweise keine Gedanken machen, wenn du das Modul wie beschrieben benutzt.

</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jeden Nutzer mit einer [konfigurierten Team-Rolle](#configuration) gespeichert, sobald sie eine
Nachricht gesendet haben ("Nutzer-Eintrag"):

- Die eindeutige Discord-Nutzer-ID
- Die Anzahl der Nachrichten, die in dem [aktuellen Bewertungszeitraum](#module-terms) gesendet wurden
- Die Anzahl der Sprachminuten im aktuellen [Bewertungszeitraum](#module-terms) (wenn das Sprachziel aktiviert ist)
- Metadaten zum Eintrag (Datum der Erstellung und der letzten Aktualisierung)

Das folgende wird bei jeder [Auswertung](#module-terms) für jeden Nutzer gespeichert, der eine der
[konfigurierten Team-Rollen](#configuration) hat ("Zielverlauf-Eintrag"):

- Eine eindeutige Nummer zur Identifizierung des Datenbankeintrags
- Die eindeutige Discord-Nutzer-ID
- Die Anzahl der Nachrichten, die der Nutzer im [Bewertungszeitraum](#module-terms) gesendet hat
- Das [konfigurierte Nachrichtenziel](#configuration) des aktuellen [Bewertungszeitraums](#module-terms)
- Die Anzahl der Sprachminuten im [Bewertungszeitraum](#module-terms) (wenn das Sprachziel aktiviert ist)
- Das [konfigurierte Sprachziel](#configuration) des aktuellen [Bewertungszeitraums](#module-terms) (wenn das Sprachziel aktiviert ist)
- Metadaten zum Eintrag (Datum der Erstellung und der letzten Aktualisierung)

Es gibt keine Möglichkeit, den Nutzer-Eintrag oder den Zielverlauf-Eintrag aus der Datenbank zu entfernen.
Nachrichten, die von Nutzern ohne eine [konfigurierte Team-Rolle](#configuration) gesendet werden, werden niemals gezählt und erstellen keinen Nutzer-Eintrag.

Um alle Daten zu löschen, [lösche die Modul-Datenbank](/docs/custom-bot/additional-features#reset-module-database).
