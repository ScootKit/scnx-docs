# Teammitglieder-Ziele

Setze wöchentliche Nachrichtenziele für deine Teammitglieder.

<ModuleOverview moduleName="team-goals" />

## Funktionen {#features}

* Setze ein Nachrichtenziel für deine Teammitglieder.
* Der Bot wird jede Woche überprüfen, ob die Teammitglieder das Nachrichtenziel erreicht haben.
* Überprüfe mit [Befehlen](#commands) deinen aktuellen Fortschritt und Erfolge in der Vergangenheit.
* Sende Nutzern jede Woche über PNs ihr Ergebnis oder in einen konfigurierten Kanal.
* Lasse Kanäle optional von den Zielen ignorieren.

## Einrichtung {#setup}

1. Wähle (oder erstelle) eine Rolle. Die Aktivität von Nutzern mit dieser Rolle wird gewertet.
2. [Konfiguriere das Modul](#configuration).
3. [Setze bitte Berechtigungen](./../../slash-commands) für Slash-Befehle, um unerlaubte Nutzung zu unterbinden.
4. Gebe Mitgliedern, deren Aktivität ausgewertet werden soll, die Rolle.

## Nutzung {#usage}

* Die Anforderungen werden alle 7 Tage nach Aktivierung des Moduls automatisch [ausgewertet](#module-terms).
* Du kannst immer den Fortschritt von dir oder einem anderem Nutzer mit [`/team-goals progress`](#commands) und die Zielhistorie mit [`/team-goals history`](#commands) einsehen.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl                                 | Beschreibung                                                                                                                                                                                                                        |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/team-goals progress [user:<Nutzer>]` | Zeigt den Fortschritt (Anzahl der Nachrichten, die zum Erreichen des Ziels gebraucht werden, verbleibende Zeit, …) für das Ziel des aktuellen [Bewertungszeitraums](#module-terms) an (wenn leer, wird dein Fortschritt angezeigt). |
| `/team-goals history [user:<Nutzer>]`  | Zeigt die Zielhistorie (Anzahl der Nachrichten, Ziel erreicht oder nicht, Prozentsatz der erreichten Ziele) der letzten 10 Wochen des angegebenen Benutzers an (wenn leer, wird dein Fortschritt angezeigt).                        |

## Definition von modulspezifischen Begriffen {#module-terms}

* Eine **Auswertung** ist der Zeitpunkt, zu dem ein Nutzer ausgewertet wird. Dies geschieht einmal pro Woche. Der eigentliche         Zeitpunkt ist davon abhängig, wann das Modul zum ersten mal aktiviert wurde - die erste Auswertung wird genau eine Woche
  später stattfinden. Bei der Auswertung vergleicht der Bot die Anzahl der im aktuellen Bewertungszeitraum gesendeten Nachrichten mit dem [konfigurierten Ziel](#configuration) und löst die konfigurierten Nachrichten für [Fehlgeschlagen / Erreicht](#configuration) aus. Sobald alle Benutzer ausgewertet wurden, beginnt der nächste Bewertungszeitraum.
* Ein **Bewertungszeitraum** ist die Zeit zwischen der letzten und der nächsten Auswertung und ist genau eine Woche lang.

## Konfiguration {#configuration}

Diese Konfigurationsdatei ermöglicht es dir, die Funktionsweise des Moduls und das Ziel selbst zu konfigurieren.
Öffne sie in
deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?query=goal&file=team-goals%7Cconfig).

| Feld                                                     | Beschreibung                                                                                                                                                                                                                                  | 
|----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Team-Rollen                                              | Diese Rollen werden jede Woche hinsichtlich ihres Fortschritts zum Ziel [ausgewertet](#module-terms). Nur von Nutzern mit diesen Rollen werden die Nachrichten gezählt.                                                                       |
| Wöchentliche Nachrichten Ziele                           | Die Anzahl der Nachrichten, die Teammitglieder in jedem [Bewertungszeitraum](#module-terms) senden müssen, um das Ziel zu erreichen.                                                                                                          | 
| Ziel erfüllt-Nachricht                                   | Das ist die Nachricht, die jede [Auswertung](#module-terms) für jeden Nutzer, der ausgewertet wird (jeder mit einer konfigurierten Team-Rolle) per PN oder in den konfigurierten Kanal gesendet wird, wenn das Ziel erreicht wurde.           |
| Ziel fehlgeschlagen-Nachricht                            | Das ist die Nachricht, die jede [Auswertung](#module-terms) für jeden Nutzer, der ausgewertet wird (jeder mit einer konfigurierten Team-Rolle) per PN oder in den konfigurierten Kanal gesendet wird, wenn das Ziel **nicht** erreicht wurde. |
| Nachrichten in Kanal statt per PN schicken               | Wenn aktiviert, werden Teammitglieder ihre [Auswertung](#module-terms) in einem Kanal statt per PN erhalten.                                                                                                                                  |
| Kanal, in welchen die Nachrichten gesendet werden sollen | *Nur sichtbar, wenn "Nachrichten in Kanal statt per PN schicken" aktiviert ist.*<br/>Die [Auswertung](#module-terms) wird in diesen Kanal statt per PN gesendet.                                                                              |
| Ignorierte Channel                                       | Nachrichten von Nutzern mit mindestens einer der Teammitglieder-Rollen werden in diesen Kanälen nicht zu ihrem Ziel hinzugerechnet.                                                                                                           |

## Fehlerbehebung {#troubleshooting}

<details>
  <summary>Von meinem Team gesendete Nachrichten werden nicht richtig gezählt</summary>
  Bitte stelle sicher, dass
  <ul>
    <li>der Bot Zugriff auf jeden Kanal hat, von welchem Nachrichten gezählt werden sollen und dass der Kanal kein <a href="#configuration">ignorierter Kanal</a> ist.</li>
    <li>der Nutzer mindestens eine der <a href="#configuration">konfigurierten Teammitglieder-Rollen</a> hat. Es werden nur Nachrichten gezählt, die gesendet wurden, während mindestens eine Teammitglieder-Rolle besessen wurde - Nachrichten, die gesendet wurden, bevor Nutzer die Teammitglieder-Rolle hatten, werden nie gezählt.</li>
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
    <li>der Bot die Berecchtigung hat, Nachrichten in den <a href="#configuration">konfigurierten Kanal</a> zu senden, wenn aktiviert.</li>
    <li>deine Teammitglieder mindestens eine der <a href="#configuration">konfigurierten Team-Rollen</a> besitzen.</li>
    <li>die <a href="#configuration">konfigurierte Nachricht</a> nicht inkorrekt ist.</li>
  </ul>
  Selbst wenn keine Auswertung gesendet wurde, kannst du immer die Zielhistorie mit dem Slash-Befehl <a href="#commands"><code>/team-goals history</code></a> einsehen.
</details>

<details>
  <summary>Can I use this module to evaluate the message activity of my members? / SCNX is adding a "Report Abuse" button below my DM messages</summary>
  Such usage would violate our <a href="https://sc-net.work/scnx-tos">Terms of Service</a> as you are using our software to spam your users. You may only use this module
  to evaluate activity of your staff members and only with their consent.
  If you are using the DM feature of this module, SCNX might automatically add a "Report abuse" button below your message if you are messaging an unusually high amount of 
  members of your server. You can learn more about this behavior on <a href="https://sc-net.work/report-mass-dm">sc-net.work/report-mass-dm</a> (this is also the URL linked in the button).
  Most of our users never fit this category, and you usually do not need to worry about this if you are using this module as intended.
</details>

## Stored data {#data-usage}

The following data is being stored about every user with a [configured Staff-Role](#configuration) once they send a
message ("User Entry"):

* Their unique Discord User-ID
* The amount of messages they sent in the [current evaluation period](#module-terms)
* Metadata about the entry (date when created and last updated)

The following is stored at every [evaluation](#module-terms) about every user that has one of
the [configured Staff-Roles](#configuration) ("Goal History Entry"):

* An unique integer identifying the database entry
* Their unique Discord User-ID
* The amount of messages they sent in the [evaluation period](#module-terms)
* The [configured goal](#configuration) in the current [evaluation period](#module-terms)
* Metadata about the entry (date when created and last updated)

There is no way to remove the user entry or the goal history entry from the database. Messages sent by users without
any [configured Staff-Roles](#configuration) will never be counted and will not create a User entry.

To remove all data, [purge the module database](./../../additional-features#reset-module-database). 
