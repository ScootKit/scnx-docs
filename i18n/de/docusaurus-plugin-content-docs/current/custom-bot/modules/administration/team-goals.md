# Teammitglieder-Ziele

Setze wöchentliche Nachrichtenziele für deine Teammitglieder.

<ModuleOverview moduleName="team-goals" />

## Funktionen {#features}

* Setze ein Nachrichtenziel für deine Teammitglieder.
* Der Bot überprüft jede Woche, ob die Teammitglieder das gesetze Nachrichtenziel erreicht haben.
* Mit [Befehlen](#commands) kannst du deinen aktuellen Fortschritt und deinen Zielverlauf in der Vergangenheit überprüfen.
* Sende Nutzern ihr Ergebnis jede Woche per PN oder in einen konfigurierten Kanal.
* Lasse Kanäle optional von den Zielen ignorieren.

## Einrichtung {#setup}

1. Wähle (oder erstelle) eine Rolle. Die Aktivität von Nutzern mit dieser Rolle wird gewertet.
2. [Konfiguriere das Modul](#configuration).
3. [Setze bitte Berechtigungen](./../../slash-commands) für Slash-Befehle, um unerlaubte Nutzung zu unterbinden.
4. Gebe Mitgliedern, deren Aktivität ausgewertet werden soll, die Rolle.

## Nutzung {#usage}

* Die Anforderungen werden alle 7 Tage nach Aktivierung des Moduls automatisch [ausgewertet](#module-terms).
* Du kannst immer den Fortschritt von dir oder einem anderen Nutzer mit [`/team-goals progress`](#commands) und den früheren Zielverlauf mit [`/team-goals history`](#commands) einsehen.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                 | Beschreibung                                                                                                                                                                                                                        |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/team-goals progress [user:<Nutzer>]` | Zeigt den Fortschritt (Anzahl der Nachrichten, die zum Erreichen des Ziels gebraucht werden, verbleibende Zeit, …) für das Ziel des aktuellen [Bewertungszeitraums](#module-terms) an (wenn leer, wird dein Fortschritt angezeigt). |
| `/team-goals history [user:<Nutzer>]`  | Zeigt den früheren Zielverlauf (Anzahl der Nachrichten, Ziel erreicht oder nicht, Prozentsatz der erreichten Ziele) der letzten 10 Wochen des angegebenen Benutzers an (wenn leer, wird dein Verlauf angezeigt).                        |

## Definition von modulspezifischen Begriffen {#module-terms}

* Eine **Auswertung** ist der Zeitpunkt, zu dem ein Nutzer ausgewertet wird. Dies geschieht einmal pro Woche. Der eigentliche Zeitpunkt ist abhängig davon, wann das Modul zum ersten mal aktiviert wurde - die erste Auswertung wird genau eine Woche
  später stattfinden. Bei der Auswertung vergleicht der Bot die Anzahl der im aktuellen Bewertungszeitraum gesendeten Nachrichten mit dem [konfigurierten Ziel](#configuration) und löst die konfigurierten Nachrichten für [Fehlgeschlagen / Erreicht](#configuration) aus. Sobald alle Benutzer ausgewertet wurden, beginnt der nächste Bewertungszeitraum.
* Ein **Bewertungszeitraum** ist die Zeit zwischen der letzten und der nächsten Auswertung und ist genau eine Woche lang.

## Konfiguration {#configuration}

Diese Konfigurationsdatei ermöglicht es dir, die Funktionsweise des Moduls und das Ziel selbst zu konfigurieren.
Öffne sie in
deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?query=goal&file=team-goals%7Cconfig).

| Feld                                                     | Beschreibung                                                                                                                                                                                                                                  | 
|----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Team-Rollen                                              | Diese Rollen werden jede Woche hinsichtlich ihres Fortschritts zum Ziel [ausgewertet](#module-terms). Es werden nur die Nachrichten von Nutzern mit dieser Rolle gezählt.                                                                       |
| Wöchentliche Nachrichten Ziele                           | Die Anzahl der Nachrichten, die Teammitglieder in jedem [Bewertungszeitraum](#module-terms) senden müssen, um das Ziel zu erreichen.                                                                                                          | 
| Ziel erfüllt-Nachricht                                   | Das ist die Nachricht, die jede [Auswertung](#module-terms) für jeden Nutzer, der ausgewertet wird (jeder mit einer konfigurierten Team-Rolle) per PN oder in den konfigurierten Kanal gesendet wird, wenn das Ziel erreicht wurde.           |
| Ziel fehlgeschlagen-Nachricht                            | Das ist die Nachricht, die jede [Auswertung](#module-terms) für jeden Nutzer, der ausgewertet wird (jeder mit einer konfigurierten Team-Rolle) per PN oder in den konfigurierten Kanal gesendet wird, wenn das Ziel **nicht** erreicht wurde. |
| Nachrichten in Kanal statt per PN schicken               | Wenn aktiviert, werden Teammitglieder ihre [Auswertung](#module-terms) in einem Kanal statt per PN erhalten.                                                                                                                                  |
| Kanal, in welchen die Nachrichten gesendet werden sollen | *Nur sichtbar, wenn "Nachrichten in Kanal statt per PN schicken" aktiviert ist.*<br/>Die [Auswertung](#module-terms) wird in diesen Kanal statt per PN gesendet.                                                                              |
| Ignorierte Kanäle                                        | Nachrichten von Nutzern mit mindestens einer der Teammitglieder-Rollen werden in diesen Kanälen nicht zu ihrem Ziel hinzugerechnet.                                                                                                           |

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

  Es gibt keinen einfachen Weg, das zu tun. Der Auswertungszeitpunkt basiert auf dem genauen Zeitpunkt, zu dem das Modul das erste mal aktiviert wurde (die Auswertung findet jede Woche an diesem Tag zu dieser Zeit statt). Wenn du <i>wirklich</i> einen anderen Auswertungszeitpunkt benötigst, kannst du das Modul deaktivieren, 
  die <a href="./../../additional-features#reset-module-database">Modul-Datenbank löschen</a> und warten, bis der genaue Zeitpunkt erreicht ist, zu der die Auswertung stattfinden soll, und dann das Modul wieder aktivieren.
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
 
Eine solche Nutzung verstößt gegen unsere <a href="https://sc-net.work/scnx-tos">Nutzungsbedingungen</a>, da du unsere Software nutzt, um deine Nutzer mit Spam zu belästigen. Du darfst das Modul nur
  zum Auswerten der Aktivität deiner Teammitglieder und nur mit deren Einverständnis nutzen.
  Wenn du die PN-Funktion von diesem Modul nutzt und eine ungewöhnlich hohe Anzahl an Mitgliedern auf deinem Server auswertest, wird SCNX eventuell automatisch einen "Missbrauch melden"-Knopf an deine Nachrichten anhängen.
  Du kannst auf <a href="https://sc-net.work/report-mass-dm">sc-net.work/report-mass-dm</a> mehr darüber erfahren (das ist auch der im Knopf verlinkte Link).
  Die meisten unserer Nutzer sind nie davon betroffen, und du musst dir normalerweise keine Gedanken machen, wenn du das Modul wie beschrieben benutzt.
</details>

## Gespeicherte Daten {#data-usage}

Die folgenden Daten werden über jeden Nutzer mit einer [konfigurierten Team-Rolle](#configuration) gespeichert, sobald sie eine
Nachricht gesendet haben ("Nutzer-Eintrag"):

* Die eindeutige Discord-Nutzer-ID
* Die Anzahl der Nachrichten, die in dem [aktuellen Bewertungszeitraum](#module-terms) gesendet wurden
* Metadaten zum Eintrag (Datum der Erstellung und der letzten Aktualisierung)

Das folgende wird bei jeder [Auswertung](#module-terms) für jeden Nutzer gespeichert, der eine der
[konfigurierten Team-Rollen](#configuration) hat ("Zielverlauf-Eintrag"):

* Eine eindeutige Nummer zur Identifizierung des Datenbankeintrags
* Die eindeutige Discord-Nutzer-ID
* Die Anzahl der Nachrichten, die der Nutzer im [Bewertungszeitraum](#module-terms) gesendet hat
* Das [konfigurierte Ziel](#configuration) des aktuellen [Bewertungszeitraums](#module-terms)
* Metadaten zum Eintrag (Datum der Erstellung und der letzten Aktualisierung)

Es gibt keine Möglichkeit, den Nutzer-Eintrag oder den Zielverlauf-Eintrag aus der Datenbank zu entfernen.
Nachrichten, die von Nutzern ohne eine [konfigurierte Team-Rolle](#configuration) gesendet werden, werden niemals gezählt und erstellen keinen Nutzer-Eintrag.

Um alle Daten zu löschen, [lösche die Modul-Datenbank](./../../additional-features#reset-module-database).