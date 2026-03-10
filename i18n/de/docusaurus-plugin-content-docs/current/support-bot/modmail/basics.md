---
sidebar_position: 2
title: Starter-Guide
description: Kompletter Starter-Guide für dein Discord-Modmail-System — lerne, wie du Tickets erstellst, beanspruchst, beantwortest und schließt.
---

# Modmail Starter-Guide (Modmail 101)

:::tip Gerne weitergeben!
Leite diesen Guide gerne an deine Teammitglieder weiter, damit sie sich schneller im Modmail-System zurechtfinden und alle Funktionen entdecken können!
:::

Willkommen zum Starter-Guide für das Modmail-System vom SCNX Support-Bot!

Wir wissen, dass Modmail am Anfang überwältigend sein kann und du vielleicht noch nicht jede Funktion komplett verstehst — das ist völlig normal.
Genau deshalb ist diese Seite aus der Perspektive eines Teammitglieds geschrieben, damit du dich schnell im Modmail-System zurechtfindest und alle Funktionen problemlos nutzen kannst.
Generell kann jeder Server unterschiedliche Funktionen für sein Modmail-System aktivieren, daher sind manche Funktionen möglicherweise nicht in deinem Server verfügbar.

Aber jetzt überlassen wir dir das Lesen und wünschen dir viel Erfolg!

## Tickets erstellen {#create-tickets}

Nutzer können Tickets entweder erstellen, indem sie dem Bot eine Direktnachricht senden, oder über eine Ticket-Eröffnungsnachricht (Knopf/Dropdown-Menü) auf deinem Server.
Wenn Ticket-Themen eingerichtet sind, müssen Nutzer ein Thema auswählen, bevor sie ein Ticket öffnen können.

Sobald ein Ticket erstellt wurde, erstellt dein Bot einen neuen Kanal in der konfigurierten Kategorie.
Nachrichten, die der Nutzer per DM sendet, erscheinen automatisch im Ticket-Kanal, und Nachrichten von Teammitgliedern im Ticket-Kanal werden per DM an den Nutzer weitergeleitet.

<h4>Bilder Coming Soon ✨</h4>

## Tickets claimen {#claim-tickets}

:::note Hinweis:
Wenn dein Server kein Ticket-Claiming verwendet, kannst du direkt zum nächsten Schritt springen.
:::

Um Tickets besser über Teammitglieder hinweg zu organisieren, musst du ein Ticket zuerst dir selbst zuweisen (auch "Claimen" genannt).

Um ein Ticket zu claimen, verwende den Befehl ``/modmail claim`` oder den Claim-Knopf (falls aktiviert). Nachdem das Ticket dir zugewiesen wurde, werden andere Teammitglieder benachrichtigt.
Wenn du deine Zuweisung entfernen möchtest, verwende ``/modmail remove-claim``. Um ein bestimmtes Teammitglied zuzuweisen, verwende ``/modmail assign``.

<h4>Bilder Coming Soon ✨</h4>

## Nachrichten senden {#send-messages}

Sobald du Zugriff auf den Ticket-Kanal hast, kannst du dem Nutzer Nachrichten senden, indem du einfach im Kanal schreibst. Deine Nachricht wird per DM an den Nutzer weitergeleitet.

Um interne Nachrichten zu senden, die **nicht** an den Nutzer weitergeleitet werden, stelle deiner Nachricht ein `!` voran (zum Beispiel `!Das ist eine interne Notiz`).

<h4>Bilder Coming Soon ✨</h4>

## Anonyme Nachrichten {#anonymous-messages}

Manchmal möchten Teammitglieder ihren Namen nicht mit dem Nutzer teilen. Um eine anonyme Nachricht zu senden (die statt deinem Namen deine höchste Rolle anzeigt), stelle deiner Nachricht `!ar ` voran (zum Beispiel `!ar Deine Anfrage wurde bearbeitet.`).

Obwohl die Identität von Teammitgliedern dem Nutzer bei anonymen Nachrichten nicht angezeigt wird, ist sie weiterhin im Log und im Ticket-Kanal sichtbar.

[Snippets](#snippets) können auch anonym gesendet werden, indem `!!!<SnippetKey>` oder der Befehl ``/as`` verwendet wird.

<h4>Bilder Coming Soon ✨</h4>

<a id="use-commands"></a>

## Befehle verwenden {#use-commands}

Modmail beinhaltet eine Reihe von Befehlen, die je nach Konfiguration verschiedene Aktionen ermöglichen.
Wenn ein Befehl nicht im Ticket-Kanal angezeigt wird, hast du entweder keine Berechtigung für diesen Befehl, oder die Funktion wurde nicht konfiguriert.

| Befehl | Beschreibung |
| --- | --- |
| ``/blocklist add`` | Fügt einen Nutzer zur Blockierungsliste hinzu. |
| ``/blocklist list`` | Zeigt alle aktuell blockierten Nutzer an. |
| ``/blocklist remove`` | Entfernt einen Nutzer von der Blockierungsliste. |
| ``/blocklist status`` | Zeigt den Blockierungsstatus des ausgewählten Nutzers an. |
| ``/modmail new-thread`` | Öffnet ein neues Ticket mit dem ausgewählten Nutzer. |
| ``/modmail claim`` | Claimt das aktuelle Ticket. |
| ``/modmail remove-claim`` | Entfernt deine Zuweisung vom aktuellen Ticket. |
| ``/modmail assign`` | Weist einem bestimmten Teammitglied das aktuelle Ticket zu. |
| ``/modmail close`` | Schließt das aktuelle Ticket. |
| ``/modmail transfer`` | Verschiebt ein Ticket in ein anderes Thema. |
| ``/modmail rename`` | Benennt den aktuellen Ticket-Kanal um. |
| ``/modmail form`` | Sendet ein Formular in das aktuelle Ticket. |
| ``/modmail s`` | Sendet ein Snippet in das aktuelle Ticket. |
| ``/modmail as`` | Sendet ein Snippet anonym in das aktuelle Ticket. |
| ``/modmail edit`` | Bearbeitet eine zuvor gesendete Nachricht anhand der Team-Nachrichten-ID. |
| ``/modmail delete`` | Löscht eine zuvor gesendete Nachricht anhand der Team-Nachrichten-ID. |
| ``/ticket hold`` | Aktiviert/deaktiviert die Pausierung für das Ticket. |
| ``/ticket close-schedule`` | Plant das Schließen eines Tickets. |
| ``/ticket users add`` | Fügt einen neuen Nutzer zum Ticket hinzu. |
| ``/ticket users remove`` | Entfernt einen zuvor hinzugefügten Nutzer vom Ticket. |

### Blockierungsliste {#blocklist}

Mit der Blockierungsliste kannst du Nutzer vom gesamten Support-Bot sperren. Diese Sperrung gilt sowohl für das Modmail- als auch das Ticket-System (falls genutzt).

Wenn du einen Nutzer blockieren möchtest, verwende den Befehl [``/blocklist add``](#use-commands) und wähle den entsprechenden Nutzer aus — optional kannst du den Grund und die Dauer der Sperre angeben.
Wenn du einen Nutzer von der Blockierungsliste entfernen möchtest, verwende den Befehl [``/blocklist remove``](#use-commands).

<h4>Bilder Coming Soon ✨</h4>

## Snippets {#snippets}

Manchmal müssen ähnliche oder sich wiederholende Nachrichten an Nutzer gesendet werden. Um nicht immer wieder dieselbe Nachricht eintippen zu müssen,
können Snippets verwendet werden. Snippets sind Textbausteine, die Teammitglieder erstellen und in Tickets verwenden können. Jedes Snippet hat einen
eigenen einzigartigen Snippet-Key, der bei der Erstellung festgelegt wird. Optional kann ein [Formular](/de/docs/support-bot/general/forms) an ein Snippet angehängt werden,
um ein Snippet und ein Formular nicht separat senden zu müssen. Snippets können auch Knöpfe enthalten, die dem Nutzer erlauben, das Ticket direkt zu schließen.

<SlashCommandExplanation />

Um Snippets zu verwenden, können Teammitglieder:

* ``/modmail s snippet:<SnippetKey>`` verwenden, um ein Snippet direkt in ein Ticket zu senden. Ein Autovervollständigungs-Menü hilft bei der Auswahl des richtigen Snippets.
* `!!<SnippetKey>` schreiben (ersetze `<SnippetKey>` durch den Key des Snippets), um den Inhalt eines Snippets direkt in ein Ticket zu senden.
* `{{<SnippetKey>}}` in eine beliebige Nachricht einbauen (ersetze `<SnippetKey>` durch den Key des Snippets). Der Platzhalter wird durch den Snippet-Inhalt ersetzt, während der Rest der Nachricht unverändert bleibt.

Um Snippets zu verwalten, stehen Teammitgliedern folgende Befehle zur Verfügung:

* `/modmail snippets create key:<SnippetKey> [close-buttons:<Boolean>] [form:<Form>]` — Erstellt ein neues Snippet. Gib einen neuen, unbenutzten Snippet-Key als `key` Parameter ein. Optional kannst du `close-buttons` aktivieren, um einen Schließen-Knopf unter der Snippet-Nachricht hinzuzufügen, oder `form` setzen, um ein Formular anzuhängen. Ein Dialog erscheint zur Eingabe des Snippet-Inhalts.
* `/modmail snippets edit key:<SnippetKey> [close-buttons:<Boolean>] [form:<Form>]` — Bearbeitet ein bestehendes Snippet. Wähle einen existierenden Snippet-Key und aktualisiere seine Einstellungen oder seinen Inhalt.
* `/modmail snippets delete key:<SnippetKey>` — Löscht ein Snippet dauerhaft. Dies kann nicht rückgängig gemacht werden.
* `/modmail snippets preview key:<SnippetKey>` — Zeigt eine Vorschau des Snippet-Inhalts und seiner Details.
* `/modmail snippets list [page:<Number>]` — Listet alle verfügbaren Snippets mit ihren Nutzungszahlen auf.

<h4>Bilder Coming Soon ✨</h4>

### Formulare senden {#send-forms}

Damit du nicht immer manuell Informationen abfragen musst, kannst du Nutzer einfach ein konfiguriertes Formular ausfüllen lassen, um benötigte Daten schnell und sicher zu erhalten.

Um ein Formular in einen Ticket-Kanal zu senden, verwende den Befehl [``/modmail form``](#use-commands) und wähle das entsprechende Formular aus der Liste.
Wenn kein Formular in der Liste angezeigt wird oder ein bestimmtes Formular fehlt, wurde es entweder noch nicht konfiguriert oder es liegt ein Fehler in der Konfiguration vor.

<h4>Bilder Coming Soon ✨</h4>

### Tickets pausieren {#hold-tickets}

Wenn ein Ticket weitergeleitet werden muss oder auf eine Antwort einer anderen Partei wartet, kannst du das Ticket mit dem Befehl [``/ticket hold``](#use-commands) pausieren,
sodass das automatische Ticket-Schließen deaktiviert wird und der Kanal gesperrt ist, was bedeutet, dass keine Nachrichten gesendet werden können, bis die Pausierung aufgehoben wird.
Um die Pausierung aufzuheben, verwende den Befehl [``/ticket hold``](#use-commands) erneut.

<h4>Bilder Coming Soon ✨</h4>

### Tickets umbenennen {#rename-tickets}

Wenn du ein Ticket umbenennen möchtest, führe den Befehl [``/modmail rename``](#use-commands) aus und gib den neuen Ticket-Namen im Dialog ein.
Beim Verschieben in ein anderes Ticket-Thema wird der Name automatisch geändert, wenn dies konfiguriert ist.

:::caution Wichtig:
Sobald ein Ticket umbenannt wurde, kann der Bot den Ticket-Namen beim Verschieben in ein anderes Ticket-Thema nicht mehr automatisch ändern!
:::

<h4>Bilder Coming Soon ✨</h4>

### Ticket-Thema ändern {#change-ticket-topic}

Wenn ein Nutzer das falsche Thema für sein Ticket ausgewählt hat, kannst du es mit dem Befehl [``/modmail transfer``](#use-commands) in das richtige Thema verschieben.
Der Name wird automatisch aktualisiert und das Ticket wird erneut zum Claimen freigegeben.

<h4>Bilder Coming Soon ✨</h4>

### Nutzer hinzufügen und entfernen {#add-and-remove-users}

Um bestimmte Anfragen, die mehrere Personen betreffen, einfacher zu bearbeiten, kannst du die betreffenden Nutzer mit dem Befehl [``/ticket users add``](#use-commands) zum Ticket hinzufügen,
wodurch sie Zugriff auf den Ticket-Kanal erhalten (zusätzlich zum Teammitglied und dem Ticket-Ersteller).
Wenn du Nutzer entfernen möchtest, verwende den Befehl [``/ticket users remove``](#use-commands).

<h4>Bilder Coming Soon ✨</h4>

### Nachrichten bearbeiten und löschen {#edit-delete-messages}

Um eine zuvor gesendete Nachricht zu bearbeiten, verwende den Befehl [``/modmail edit``](#use-commands) und gib die Team-Nachrichten-ID an.
Um eine Nachricht zu löschen, verwende [``/modmail delete``](#use-commands). Wenn konfiguriert, können Teammitglieder auch Nachrichten anderer Teammitglieder bearbeiten oder löschen.

<h4>Bilder Coming Soon ✨</h4>

## Tickets schließen {#close-tickets}

Nachdem die Anfrage eines Nutzers gelöst wurde, kannst du das Ticket entweder mit dem Befehl [``/modmail close``](#use-commands) oder dem Knopf unter der Ticket-Nachricht schließen.
Du kannst das Schließen auch mit [``/ticket close-schedule``](#use-commands) nach einer bestimmten Zeitspanne planen.

<h4>Bilder Coming Soon ✨</h4>

## Support-Feedback {#support-feedback}

Wenn Support-Feedback im Modmail-System deines Servers aktiviert ist, erhalten Nutzer nach dem Schließen des Tickets automatisch eine DM, in der sie Feedback für das Ticket hinterlassen können.
Dieses Feedback ist optional und wird, falls abgegeben, an den konfigurierten Kanal gesendet, wo du es einsehen kannst.

<h4>Bilder Coming Soon ✨</h4>

## Ticket-Logs {#ticket-logs}

Alle Nachrichten eines Tickets werden protokolliert und nach dem Schließen des Tickets in einem Ticket-Log angezeigt.
Wenn dein Server KI-Zusammenfassungen aktiviert hat, siehst du auch eine kurze Zusammenfassung des Ticket-Inhalts in der Log-Kanal-Nachricht.
Über den Knopf unter der Nachricht gelangst du entweder zu einer modmail.net-Webseite (falls aktiviert), auf der die Logs in einem formatierten Web-Layout angezeigt werden, oder zu einer Textdatei,
die du herunterladen kannst.

<h4>Bilder Coming Soon ✨</h4>

## Fertig {#done}

Du hast das Ende des Guides erreicht und hast hoffentlich jetzt einen guten Überblick darüber, wie das Modmail-System vom SCNX Support-Bot funktioniert und wie du es nutzen kannst.

Wenn du noch Fragen hast oder etwas unklar ist, frage gerne die verantwortliche Person auf deinem Server oder erstelle ein Ticket auf unserem [Discord-Server](https://scootk.it/dc-de) — wir helfen dir gerne weiter!
