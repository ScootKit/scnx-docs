# Konfiguration

## Hauptkonfiguration {#main-configuration}

Um das Ticket-System zu aktivieren und grundlegende Funktionen einzustellen, besuche den Abschnitt [Hauptkonfiguration](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=main) in der Konfiguration und passe alles nach deinen Wünschen an.

| Feld                                              | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                      |
|---------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ticket-System aktivieren?                         | Aktiviert oder deaktiviert das Ticket-System für deinen Discord-Server.                                                                                                                                                                                                                                                                                                                                                           |
| Nutzern erlauben, Tickets per Befehl zu öffnen?   | Falls aktiviert, können deine Nutzer neben Buttons und Dropdown-Menüs auch mit dem Befehl ``/ticket open`` ein Ticket erstellen.                                                                                                                                                                                                                                                                                                  |
| Kategorie für neue Tickets                        | In dieser Kategorie werden neue Tickets standardmäßig erstellt. Andere Kategorien für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/ticket-system/ticket-topics).                                                                              |
| Teammitglieder-Rollen                             | Die Rollen, welche du hier auswählst, erhalten standardmäßig Zugriff auf Tickets und werden bei der Erstellung eines neuen Tickets erwähnt. Andere Rollen für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/ticket-system/ticket-topics).      |
| Log-Kanal                                         | In diesen Kanal wird dein Support-Bot standardmäßig automatisch alle support-relevanten Nachrichten senden. Andere Log-Kanäle für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/ticket-system/ticket-topics).                                  |
| Ticket-Nachricht                                  | Diese Nachricht wird dein Bot standardmäßig senden, wenn ein Nutzer ein neues Ticket erstellt. Andere Nachrichten für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/ticket-system/ticket-topics).                                              |
| Insgesamt nur ein Ticket pro Nutzer erlauben      | Wenn aktiviert, kann ein Nutzer maximal ein Ticket gleichzeitig geöffnet haben. Andere Ticket-Limits für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/ticket-system/ticket-topics).                                                           |
| KI-Zusammenfassung von Ticket-Transkripten        | Wenn aktiviert, wird dein Bot nach Schließung des Tickets automatisch eine KI-generierte Zusammenfassung des Ticktes in den festgelegten Log-Kanal senden. Bitte beachte, dass hierfür das [KI-Guthaben](https://faq.scnx.app/ki-auf-scnx/) deines Servers genutzt und bestimmte Daten mit "modmail.net" (einem ScootKit-Produkt) geteilt werden. Unsere Datenschutzerklärung findest du [hier](https://scootk.it/scnx-privacy).  |
| Teammitgliedern erlauben, Tickets umzubenennen?   | Wenn aktiviert, können Teammitglieder mit dem Befehl ``/ticket rename`` Tickets umbenennen. Beachte, dass nach manueller Bearbeitung der Bot den Namen des Tickets bei Verschiebung nicht mehr ändern wird ([falls aktiviert](/de/docs/support-bot/ticket-system/ticket-topics)).                                                                                                                                                 |

## Ticketöffnungsnachricht {#ticket-open-message}

:::tip Was ist eine Ticketöffnungsnachricht?
Diese Nachricht wird in einen von dir festgelegten Kanal gesendet und erlaubt deinen Mitgliedern, entweder durch Knöpfe oder per Dropdown-Menü ein Ticket auf deinem Server zu erstellen.
Du kannst auch mehrere Nachrichten mit jeweils verschiedenen [Ticket-Themen](/de/docs/support-bot/ticket-system/ticket-topics) erstellen, um die Ticket-Erstellung auf mehrere Kanäle zu verteilen.
:::

Zum Erstellen einer neuen Ticketöffnungsnachricht, besuche den Abschnitt [Ticketöffnungsnachricht](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-opening-messages) in der Konfiguration und klicke auf den blauen Button "Ticket-Öffnunsnachricht hinzufügen". 

Sobald du ein Element hinzugefügt hast, stehen dir folgende Konfigurations-Felder zur Verfügung:

| Feld                                                              | Beschreibung                                                                                                                                                                                                                                  |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Kanal, in welchen die Nachricht verschickt werden soll            | In diesen Kanal wird deine konfigurierte Nachricht gesendet.                                                                                                                                                                                  |
| Nachricht                                                         | Hier kannst du den Inhalt deiner Nachricht anpassen, die dein Bot bei der Erstellung eines Tickets senden wird.                                                                                                                               |
| Nur bestimmte Ticket-Themen anzeigen?                             | Wenn aktiviert, wird dein Bot nur bestimmte deiner konfigurierten [Ticket-Themen](/de/docs/support-bot/ticket-system/ticket-topics) verwenden. Falls du Knöpfe verwenden möchtest, darfst du hier maximal ein Thema wählen.                   |
| Knöpfe verwenden?                                                 | Wenn aktiviert, wird der Bot Knöpfe anstatt des standardmäßigen Dropdown-Menüs verwenden.                                                                                                                                                     |

## Ticketschließung {#ticket-closing}

Damit auch das Schließen von Tickets reibungslos funktioniert, besuche den Abschnitt [Ticketschließung](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-close) in der Konfiguration - folgende Einstellungen kannst du bei der Ticketschließung anpassen:

| Feld                                                                          | Beschreibung                                                                                                                                                                                                                      |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ticketschließungsknopf in der Ticket-Nachricht anzeigen?                      | Wenn aktiviert, wird ein Knopf zur Ticket-Nachricht hinzugefügt, mit welchem Team-Mitglieder (oder Nutzer, falls aktiviert) das Ticket schließen können - anderenfalls müssen sie den Befehl ``/ticket close`` verwenden.         |
| Inhalt des Ticketschließungsknopfs                                            | *Nur verfügbar, wenn "Ticketschließungsknopf in der Ticket-Nachricht anzeigen?" aktiviert ist.*<br/>Hier kannst du den Text anpassen, welcher im Knopf angezeigt wird.                                                             |
| Erlauben, dass Nutzer ihre eigenen Tickets schließen?                         | Wenn aktiviert, können neben Team-Mitgliedern auch Nutzer ihre Tickets schließen.                                                                                                                                                 |
| Bestätigung per Privatnachricht schicken, wenn ein Ticket geschlossen wird?   | Wenn aktiviert, wird der Bot nach Schließen des Tickets eine Privatnachricht an den Nutzer senden.                                                                                                                                |
| Ticket-Schließungs-Bestätigung per Privatnachricht                            | *Nur verfügbar, wenn "Bestätigung per Privatnachricht schicken, wenn ein Ticket geschlossen wird?" aktiviert ist.*<br/>Hier kannst du die Nachricht anpassen, welcher der Bot nach Schließen des Tickets an den Nutzer sendet.     |
| Transkript an die Ticket-Schließungs-Privatnachricht anhängen?                | *Nur verfügbar, wenn "Bestätigung per Privatnachricht schicken, wenn ein Ticket geschlossen wird?" aktiviert ist.*<br/>Wenn aktiviert, wird der Bot ein Transkript des Tickets an die Privatnachricht anhängen.                    |

## Zusätzliche Ticketmitglieder {#additional-ticket-members}

:::tip Wozu benötigt man diese Funktion?
Mit zusätzlichen Ticketmitgliedern kannst du beispielsweise Tea-Mitglieder zu einem Ticket hinzufügen und entfernen oder weitere Mitglieder deiner Community zur Klärung eines Problems/Anfrage hinzuziehen.
:::

Um diese Funktion in deinem Ticket-System zu aktivieren, besuche den Abschnitt [Zusätzliche Ticketmitglieder](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=additional-users) in der Konfiguration und konfiguriere folgende Einstellungen:

| Feld                                                                  | Beschreibung                                                                                                                                                                      |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Zusätzliche Ticketmitglieder erlauben?                                | Aktiviert oder deaktiviert die Funktion für dein Ticket-System.                                                                                                                   |
| Knopf zum Hinzufügen zusätzlicher Nutzer in Ticketnachricht anzeigen  | Wenn aktiviert, wird ein Knopf zum Hinzufügen von Ticketmitgliedern zur Ticket-Nchricht hinzugefügt - anderenfalls müssen sie den Befehl ``/ticket users add`` verwenden.         |
| Inhalt des Nutzer-Hinzufügen Knopfs                                   | *Nur verfügbar, wenn "Knopf zum Hinzufügen zusätzlicher Nutzer in Ticketnachricht anzeigen" aktiviert ist.*<br/>Hier kannst du den Text anpassen, welcher im Knopf angezeigt wird. |
| Kann der Ticket-Besitzer weitere Nutzer hinzufügen?                   | Wenn aktiviert, können neben Team-Mitgliedern auch Nutzer weitere Mitglieder zu ihren Tickets hinzufügen.                                                                         |
| Nachricht zur Auswahl zusätzlicher Nutzer                             | Hier kannst du die Nachricht anpassen, welche dem Nutzer angezeigt wird, wenn er den Knopf geklickt oder den Befehl ausgeführt hat.                                               |
| Nachricht, wenn ein Nutzer entfernt wird                              | Hier kannst du die Nachricht anpassen, welche der Bot sendet, wenn ein Mitglied aus dem Ticket entfernt wird.                                                                     |
| Nachricht, wenn ein Nutzer hinzugefügt wird                           | Hier kannst du die Nachricht anpassen, welche der Bot sendet, wenn ein Mitglied zum Ticket hinzugefügt wird.                                                                      |


## Automatisches Ticket-Schließen {#auto-close-tickets}

## Ticketerinnerungen {#ticket-reminders}

## Ticket-Pausierung {#ticket-hold}

## Erweiterte Nachrichten-Konfiguration {#advanced-message-configuration}

## Statistik-Kanäle {#statistics-channels}