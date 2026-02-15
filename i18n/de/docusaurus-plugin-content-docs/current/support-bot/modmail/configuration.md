---
sidebar_position: 3
title: Konfiguration
description: Stelle alle grundlegenden Funktionen für dein Modmail-System ein!
---

# Konfiguration

## Hauptkonfiguration {#main-configuration}

### Funktionen {#main-configuration-features}

* Aktiviere oder deaktiviere das modmail für deinen Discord-Server.
* Stelle verschiedene Kategorien, Kanäle und Rollen ein, um deine Tickets zu organisieren.
* Aktiviere KI-Zusammenfassungen, um nach Schließung eines Tickets eine automatisch generierte Zusammenfassung zu erhalten.
* Konfiguriere weitere Optionen, um die volle Kontrolle über dein modmail zu erhalten.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#main-configuration-setup}

* Erstelle eine Kategorie für neue Tickets und einen privaten Textkanal für Ticket-Logs auf deinem Discord-Server.
* Erstelle entsprechende Rollen auf deinem Discord-Server, welche später Zugriff auf Tickets bekommen sollen.
* Besuche den Abschnitt [Hauptkonfiguration](https://scnx.app/glink?page=support-system/modmail/configuration?show=main) in deinem Dashboard.
* [Konfiguriere](#main-configuration-configuration) verfügbare Optionen.

### Befehle {#main-configuration-commands}

<SlashCommandExplanation />

|         Befehl         |                                                                                                           Beschreibung                                                                                                            |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ``/ticket admin-open`` | *Nur verfügbar, wenn "Mitarbeitern erlauben, Tickets im Namen eines Nutzers zu öffnen?" [aktiviert](#main-configuration-configuration) ist.*<br/>Ermöglicht es Teammitgliedern, neue Tickets mit bestimmten Nutzern zu erstellen. |
| ``/ticket close``      | Erlaubt Teammitgliedern (und Nutzern, wenn [konfiguriert](#ticket-closing-configuration)) das Ticket im jeweiligen Kanal zu schließen.                                                                                            |
| ``/ticket form``       | Versendet ein bestimmtes [Formular](/de/docs/support-bot/general/forms) im Ticket.                                                                                                                                                |
| ``/ticket open``       | *Nur verfügbar, wenn "Nutzern erlauben, Tickets per Befehl zu öffnen?" [aktiviert](#main-configuration-configuration) ist.*<br/>Öffnet ein neues Ticket (mit einem bestimmten Thema) auf deinem Discord-Server.                   |

### Konfiguration {#main-configuration-configuration}

|                               Feld                               |                                                                                                                                                                                                                                              Beschreibung                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Modmail-Funktion aktivieren?                                     | Aktiviert oder deaktiviert das Modmail-System für deinen Discord-Server.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Kategorie für neue Tickets                                       | In dieser Kategorie werden neue Tickets standardmäßig erstellt. Andere Kategorien für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/modmail/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/modmail/ticket-topics).                                                                                                                                                                |
| Standardmäßige Ticket-Zugriffsrechte                             | Nutzer mit diesen Berechtigungen oder Rollen werden Tickets sehen können und bei Erstellung eines neuen Tickets gepingt werden.                                                                                                                                                                                                                                                                                                                                                                         |
| Rollen mit standardmäßigen Zugriffsrechten                       | *Nur verfügbar, wenn "Ausgewählte Rollen" bei "Standardmäßige Ticket-Zugriffsrechte" ausgewählt ist.*<br/>Diese Rollen erhalten standardmäßig Zugriff auf Tickets und werden bei der Erstellung eines neuen Tickets erwähnt. Andere Rollen für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/modmail/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/modmail/ticket-topics).       |
| Log-Kanal                                                        | In diesen Kanal wird dein Bot standardmäßig automatisch alle support-relevanten Nachrichten senden. Andere Log-Kanäle für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/modmail/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/modmail/ticket-topics).                                                                                                                            |
| Ticket-Willkommens-Nachricht                                     | Diese Nachricht wird dein Bot standardmäßig senden, wenn ein Nutzer ein neues Ticket erstellt. Andere Nachrichten für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/modmail/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/modmail/ticket-topics).                                                                                                                                |
| Ticket-Schließungs-Nachricht                                     | Diese Nachricht wird dein Bot standardmäßig senden, wenn ein Ticket geschlossen wird. Andere Nachrichten für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/modmail/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/modmail/ticket-topics).                                                                                                                                         |
| Wartungsmodus aktivieren?                                        | Wenn aktiviert, können keine Ticket-Aktionen ausgeführt werden (wie das Erstellen / Bearbeiten / Schließen von Tickets). In bereits geöffneten Tickets können weiterhin Nachrichten versendet werden.                                                                                                                                                                                                                                                                                                   |
| Nutzern erlauben, Tickets per Befehl zu öffnen?                  | Wenn aktiviert, können deine Nutzer neben Buttons und Dropdown-Menüs auch mit dem Befehl [``/ticket open``](#main-configuration-commands) ein Ticket erstellen.                                                                                                                                                                                                                                                                                                                                         |
| Mitarbeitern erlauben, Tickets im Namen eines Nutzers zu öffnen? | Wenn aktiviert, können Teammitglieder mit dem Befehl [``/ticket admin-open``](#main-configuration-commands) ein Ticket mit einem Nutzer erstellen. Einschränkungen wie mehrere offene Tickets oder Öffnungszeiten werden umgangen.                                                                                                                                                                                                                                                                      |
| Teammitglieder-Rollen                                            | <details><summary>**Hinweis**</summary>*Andere Rollen für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/modmail/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/modmail/ticket-topics).*<br/>*Das ist ein weiterer Hinweis mit einem mittellangen Text.*</details><br/>Diese Rollen erhalten standardmäßig Zugriff auf Tickets und werden bei der Erstellung eines neuen Tickets erwähnt. |
| Insgesamt nur ein Ticket pro Nutzer erlauben                     | Wenn aktiviert, kann ein Nutzer maximal ein Ticket gleichzeitig geöffnet haben.<br/><details><summary>**Hinweis**</summary>*Andere Ticket-Limits für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/modmail/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/modmail/ticket-topics).*</details>                                                                                          |
| KI-Zusammenfassung von Ticket-Transkripten                       | Wenn aktiviert, wird dein Bot nach Schließung des Tickets automatisch eine KI-generierte Zusammenfassung des Ticktes in den festgelegten Log-Kanal senden.<br/>Bitte beachte, dass hierfür das [KI-Guthaben](https://faq.scnx.app/ki-auf-scnx/) deines Servers genutzt und bestimmte Daten mit "modmail.net" (einem SCNX-Produkt) geteilt werden. Unsere Datenschutzerklärung findest du [hier](https://scootk.it/scnx-privacy).                                                                        |
| Teammitgliedern erlauben, Tickets umzubenennen?                  | Wenn aktiviert, können Teammitglieder mit dem Befehl [``/ticket rename``](#main-configuration-commands) Tickets umbenennen.<br/><dl><dt>Hinweis</dt><dd>Beachte, dass nach manueller Bearbeitung der Bot den Namen des Tickets bei Verschiebung nicht mehr ändern wird ([falls aktiviert](/de/docs/support-bot/modmail/ticket-topics)).</dd></dl>                                                                                                                                                       |
| Knopf zum Umbenennen unter Ticket-Nachricht anzeigen?            | *Nur verfügbar, wenn "Teammitgliedern erlauben, Tickets umzubenennen?" aktiviert ist.*<br/>Wenn aktiviert, wird ein Knopf unter der Ticket-Nachricht hinzugefügt, sodass Teammitglieder den Ticketnamen schneller bearbeiten können - anderenfalls müssen sie den Befehl [``/ticket rename``](#main-configuration-commands) verwenden.                                                                                                                                                                   |
| Inhalt des Umbenennungsknopfs                                    | *Nur verfügbar, wenn "Teammitgliedern erlauben, Tickets umzubenennen?" und "Knopf zum Umbenennen unter Ticket-Nachricht anzeigen?" aktiviert sind.*<br/>Dieser Text wird im Knopf unter der Ticket-Nachricht angezeigt.                                                                                                                                                                                                                                                                                 |
| Ticket-Umbennenungsnachricht                                     | *Nur verfügbar, wenn "Teammitgliedern erlauben, Tickets umzubenennen?" aktiviert ist.*<br/>Diese Nachricht wird dein Bot in den Ticket-Kanal senden, wenn ein Ticket umbenannt wurde.                                                                                                                                                                                                                                                                                                                   |

## Ticketöffnungsnachricht {#ticket-open-messages}

### Funktionen {#ticket-open-messages-features}

* Lass deine Nutzer neue Tickets einfach über Knöpfe oder Dropdown-Menüs erstellen.
* Sende mehrere Ticketöffnungsnachrichten mit verschiedenen [Ticket-Themen](/de/docs/support-bot/modmail/ticket-topics) in unterschiedliche Kanäle, um die Erstellung auf mehrere Kanäle zu verteilen.
* Entscheide dich bei jeder Nachricht zwischen Knöpfen oder Dropdown-Menüs für eine optimale Nutzer-Erfahrung.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#ticket-open-messages-setup}

* Besuche den Abschnitt [Ticketöffnungsnachricht](https://scnx.app/glink?page=support-system/modmail/configuration?show=ticket-opening-messages) in deinem Dashboard.
* Klicke auf den blauen Knopf "Ticket-Öffnungsnachricht hinzufügen", um eine neue Ticketöffnungsnachricht zu erstellen.
* [Konfiguriere](#ticket-open-messages-configuration) verfügbare Optionen.

### Konfiguration {#ticket-open-messages-configuration}

|                          Feld                          |                                                                                                        Beschreibung                                                                                                         |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanal, in welchen die Nachricht verschickt werden soll | In diesen Kanal wird deine konfigurierte Nachricht gesendet.                                                                                                                                                                |
| Nachricht                                              | Diese Nachricht wird dein Bot in den ausgewählten Kanal senden.                                                                                                                                                             |
| Nur bestimmte Ticket-Themen anzeigen?                  | Wenn aktiviert, wird dein Bot nur bestimmte deiner konfigurierten [Ticket-Themen](/de/docs/support-bot/modmail/ticket-topics) verwenden. Falls du Knöpfe verwenden möchtest, darfst du hier maximal ein Thema wählen. |
| Knöpfe verwenden?                                      | Wenn aktiviert, wird dein Bot Knöpfe anstatt des standardmäßigen Dropdown-Menüs verwenden.                                                                                                                                  |

## Ticketschließung {#ticket-closing}

### Funktionen {#ticket-closing-features}

* Füge einen Schließen‑Knopf zur Ticket‑Nachricht hinzu, damit Tickets per Klick geschlossen werden können.
* Erlaube das Schließen von Tickets durch den Ersteller (anstatt ausschließlich durch Teammitglieder).
* Aktiviere Schließungs-Anfragen, um das sofortige Schließen des Tickets durch Teammitglieder zu vermeiden.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#ticket-closing-setup}

* Besuche den Abschnitt [Ticketschließung](https://scnx.app/glink?page=support-system/modmail/configuration?show=ticket-close) in deinem Dashboard.
* [Konfiguriere](#ticket-closing-configuration) verfügbare Optionen.

### Befehle {#ticket-closing-commands}

<SlashCommandExplanation />

|               Befehl                |                                                                                                                                         Beschreibung                                                                                                                                         |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ``/ticket close [force:<Boolean>]`` | *Nur verfügbar, wenn "Teammitgliedern erlauben, Tickets auch ohne Bestätigung zu schließen?" [aktiviert](#ticket-closing-configuration) ist.*<br/>Erlaubt es Teammitgliedern, Tickets trotz geöffneter Schließungs-Anfrage zu schließen, indem sie die ``force``-Option auf ``True`` setzen. |
| ``/ticket close-schedule``          | *Nur verfügbar, wenn "Können Mitarbeiter manuell planen, wann Tickets geschlossen werden sollen?" [aktiviert](#ticket-closing-configuration) ist.*<br/>Ermöglicht es Teammitgliedern, das Schließen von Tickets zu planen, anstatt sie sofort zu schließen.                                  |

### Konfiguration {#ticket-closing-configuration}

|                                     Feld                                      |                                                                                                                                                                       Beschreibung                                                                                                                                                                        |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ticketschließungsknopf in der Ticket-Nachricht anzeigen?                      | Wenn aktiviert, wird ein Knopf zur Ticket-Nachricht hinzugefügt, mit welchem Team-Mitglieder (oder Nutzer, falls aktiviert) das Ticket schließen können - anderenfalls müssen sie den Befehl [``/ticket close``](#ticket-closing-commands) verwenden.                                                                                                     |
| Inhalt des Ticketschließungsknopfs                                            | *Nur verfügbar, wenn "Ticketschließungsknopf in der Ticket-Nachricht anzeigen?" aktiviert ist.*<br/>Dieser Text wird im Knopf unter der Ticket-Nachricht angezeigt.                                                                                                                                                                                       |
| Erlauben, dass Nutzer ihre eigenen Tickets schließen?                         | Wenn aktiviert, können neben Team-Mitgliedern auch Nutzer ihre Tickets schließen.                                                                                                                                                                                                                                                                         |
| Bestätigung von Teammitgliedern verlangen, bevor das Ticket geschlossen wird? | *Nur verfügbar, wenn "Erlauben, dass Nutzer ihre eigenen Tickets schließen?" aktiviert ist.*<br/>Wenn aktiviert, muss der Nutzer eine Schließungs-Anfrage stellen, bevor das Ticket geschlossen werden kann.                                                                                                                                              |
| Nutzer-Bestätigungsnachricht bei Ticketschließungsanfrage                     | *Nur verfügbar, wenn "Erlauben, dass Nutzer ihre eigenen Tickets schließen?" und "Bestätigung von Teammitgliedern verlangen, bevor das Ticket geschlossen wird?" aktiviert sind.*<br/>Diese Nachricht wird dein Bot in den Ticket-Kanal senden, wenn ein Nutzer eine Schließungs-Anfrage stellt.                                                          |
| Bestätigung per Privatnachricht schicken, wenn ein Ticket geschlossen wird?   | Wenn aktiviert, wird dein Bot nach Schließen des Tickets eine Privatnachricht an den Nutzer senden.                                                                                                                                                                                                                                                       |
| Ticket-Schließungs-Bestätigung per Privatnachricht                            | *Nur verfügbar, wenn "Bestätigung per Privatnachricht schicken, wenn ein Ticket geschlossen wird?" aktiviert ist.*<br/>Hier kannst du die Nachricht anpassen, welcher der Bot nach Schließen des Tickets an den Nutzer sendet.                                                                                                                            |
| Transkript an die Ticket-Schließungs-Privatnachricht anhängen?                | *Nur verfügbar, wenn "Bestätigung per Privatnachricht schicken, wenn ein Ticket geschlossen wird?" aktiviert ist.*<br/>Wenn aktiviert, wird der Bot ein Transkript des Tickets an die Privatnachricht anhängen.                                                                                                                                           |
| Bestätigung des Nutzers verlangen, bevor das Ticket geschlossen wird?         | Wenn aktiviert, wird anstatt der sofortigen Schließung eines Tickets durch ein Teammitglied eine Schließungs-Anfrage an den Nutzer gesendet, welche dieser bestätigen muss, um das Ticket endgültig zu schließen.                                                                                                                                         |
| Nachricht bei Ticketschließungsanfrage durch Teammitglied                     | *Nur verfügbar, wenn "Bestätigung des Nutzers verlangen, bevor das Ticket geschlossen wird?" aktiviert ist.*<br/>Diese Nachricht sendet dein Bot bei einer Schließungs-Anfrage in das jeweilige Ticket.                                                                                                                                                   |
| Zeitüberschreitung bei der Schließungsanfrage                                 | *Nur verfügbar, wenn "Bestätigung des Nutzers verlangen, bevor das Ticket geschlossen wird?" aktiviert ist.*<br/>In diesem Zeitraum muss der Nutzer auf die Schließungs-Anfrage antworten, bevor sein Ticket automatisch geschlossen wird. Wie du Zeitangaben in SCNX einstellst, erfährst du [hier](/de/docs/custom-bot/additional-features/#durations). |
| Teammitgliedern erlauben, Tickets auch ohne Bestätigung zu schließen?         | *Nur verfügbar, wenn "Bestätigung des Nutzers verlangen, bevor das Ticket geschlossen wird?" aktiviert ist.*<br/>Wenn aktiviert, können Teammitglieder trotz Schließungs-Anfrage das Ticket mit dem Befehl [``/ticket close [force:<Boolean>]``](#ticket-closing-commands) schließen.                                                                     |
| Können Teammitglieder manuell planen, wann Tickets geschlossen werden sollen? | Wenn aktiviert, können Teammitglieder mit dem Befehl [``/ticket close-schedule``](#ticket-closing-commands) die Schließung von Tickets planen.                                                                                                                                                                                                            |
| Geplante Schließungs-Nachricht                                                | *Nur verfügbar, wenn "Können Teammitglieder manuell planen, wann Tickets geschlossen werden sollen?" aktiviert ist.*<br/>Diese Nachricht wird dein Bot in den Ticket-Kanal senden, sobald ein Teammitglied den Befehl ausgeführt hat.                                                                                                                     |

## Zusätzliche Ticketmitglieder {#additional-ticket-members}

### Funktionen {#additional-ticket-members-features}

* Füge weitere (Team)Mitglieder zu einem Ticket hinzu (oder entferne sie), um Probleme besser lösen zu können.
* Stelle ein, ob der Ersteller selbst neue Mitglieder zu Tickets hinzufügen kann.
* Benachrichtige den Nutzer mit einer Nachricht über das Hinzufügen und Entfernen von Nutzern.
* Füge einen Knopf zur Ticket-Nachricht hinzu, um Mitglieder per Klick hinzufügen zu können.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#additional-ticket-members-setup}

* Besuche den Abschnitt [Zusätzliche Ticketmitglieder](https://scnx.app/glink?page=support-system/modmail/configuration?show=additional-users) in deinem Dashboard.
* [Konfiguriere](#additional-ticket-members-configuration) verfügbare Optionen.

### Befehle {#additional-ticket-members-commands}

<SlashCommandExplanation />

|                              Befehl                               |                       Beschreibung                        |
| ----------------------------------------------------------------- | --------------------------------------------------------- |
| ``/ticket users add``                                             | Fügt einen neuen Nutzer zum Ticket hinzu.                 |
| ``/ticket users remove existing-additional-ticket-user:<Nutzer>`` | Entfernt einen zuvor hinzugefügten Nutzer aus dem Ticket. |

### Konfiguration {#additional-ticket-members-configuration}

|                                 Feld                                 |                                                                                    Beschreibung                                                                                    |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zusätzliche Ticketmitglieder erlauben?                               | Aktiviert oder deaktiviert die Funktion für dein modmail.                                                                                                                    |
| Knopf zum Hinzufügen zusätzlicher Nutzer in Ticketnachricht anzeigen | Wenn aktiviert, wird ein Knopf zum Hinzufügen von Ticketmitgliedern zur Ticket-Nachricht hinzugefügt – anderenfalls müssen sie den Befehl ``/ticket users add`` verwenden.         |
| Inhalt des Nutzer-Hinzufügen Knopfs                                  | *Nur verfügbar, wenn "Knopf zum Hinzufügen zusätzlicher Nutzer in Ticketnachricht anzeigen" aktiviert ist.*<br/>Hier kannst du den Text anpassen, welcher im Knopf angezeigt wird. |
| Kann der Ticket-Besitzer weitere Nutzer hinzufügen?                  | Wenn aktiviert, können neben Team-Mitgliedern auch Nutzer weitere Mitglieder zu ihren Tickets hinzufügen.                                                                          |
| Nachricht zur Auswahl zusätzlicher Nutzer                            | Diese Nachricht wird dem Nutzer angezeigt, wenn er den Knopf zum Hinzufügen eines Nutzers geklickt oder den Befehl ausgeführt hat.                                                 |
| Nachricht, wenn ein Nutzer entfernt wird                             | Diese Nachricht wird dein Bot senden, wenn ein Mitglied aus dem Ticket entfernt wurde.                                                                                             |
| Nachricht, wenn ein Nutzer hinzugefügt wird                          | Diese Nachricht wird dein Bot senden, wenn ein Mitglied zum Ticket hinzugefügt wurde.                                                                                              |

## Automatisches Ticket-Schließen {#auto-close-tickets}

### Funktionen {#auto-close-tickets-features}

* Schließe Tickets bei Inaktivität von Nutzern automatisch, um Ordnung in deine Ticket-Liste zu bringen.
* Sende eine Warnung vor der automatischen Schließung, um den Nutzer an sein Ticket zu erinnern.
* Markiere Tickets automatisch als gelöst, wenn der Nutzer den Server verlässt.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#auto-close-tickets-setup}

* Besuche den Abschnitt [Automatisches Ticket-Schließen](https://scnx.app/glink?page=support-system/modmail/configuration?show=auto-close) in deinem Dashboard.
* [Konfiguriere](#auto-close-tickets-configuration) verfügbare Optionen.

### Konfiguration {#auto-close-tickets-configuration}

|                               Feld                                |                                                                                                                                                                      Beschreibung                                                                                                                                                                      |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ticket automatisch schließen, wenn ein Nutzer den Server verlässt | Wenn aktiviert, wird dein Bot das Ticket automatisch schließen, falls der Nutzer deinen Server verlassen sollte.                                                                                                                                                                                                                                       |
| Inaktivitätsbenachrichtigung schicken?                            | Wenn aktiviert, wird dein Bot vor der automatischen Schließung des Tickets eine Warnung an den Nutzer senden, damit er die Möglichkeit hat, auf sein Ticket zu antworten.                                                                                                                                                                              |
| Benachrichtigungs-Nachricht                                       | *Nur verfügbar, wenn "Inaktivitätsbenachrichtigung senden?" aktiviert ist.*<br/>Hier kannst du die Nachricht anpassen, welche dein Bot als Warnung senden wird.                                                                                                                                                                                        |
| Benachrichtigungs-Zeitraum                                        | *Nur verfügbar, wenn "Inaktivitätsbenachrichtigung senden?" aktiviert ist.*<br/>Hier kannst du die Zeit anpassen, für welche der Nutzer inaktiv sein muss, um die Warnung zu senden. In welchem Format du Zeitangaben in SCNX einstellst, erfährst du [hier](https://docs.scnx.xyz/de/docs/custom-bot/additional-features/#durations).                 |
| Inaktive Tickets automatisch schließen                            | Wenn aktiviert, wird dein Bot das Ticket bei Inaktivität des Nutzers automatisch schließen.                                                                                                                                                                                                                                                            |
| Zeitfenster für das automatische Schließen von Tickets            | *Nur verfügbar, wenn "Inaktive Tickets automatisch schließen" aktiviert ist.*<br/>Hier kannst du die Zeit anpassen, für welche der Nutzer inaktiv sein muss, um das Ticket automatisch zu schließen. In welchem Format du Zeitangaben in SCNX einstellst, erfährst du [hier](https://docs.scnx.xyz/de/docs/custom-bot/additional-features/#durations). |

## Ticketerinnerungen {#ticket-reminders}

### Funktionen {#ticket-reminders-features}

* Sende eine automatische Erinnerung, wenn ein Teammitglied in seinem Ticket inaktiv ist.
* Erwähne noch nicht bearbeitete Tickets in deinem Erinnerungskanal, um auf nicht-beantwortete Tickets aufmerksam zu machen.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#ticket-reminders-setup}

* Erstelle einen privaten Textkanal für die Erinnerungs-Benachrichtigungen auf deinem Discord-Server.
* Besuche den Abschnitt [Ticketerinnerungen](https://scnx.app/glink?page=support-system/modmail/configuration?show=ticket-reminders) in deinem Dashboard.
* [Konfiguriere](#ticket-reminders-configuration) verfügbare Optionen.

### Konfiguration {#ticket-reminders-configuration}

|                                          Feld                                           |                                                                                                                                                                                                Beschreibung                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erinnerungskanal                                                                        | In diesen Kanal wird dein Bot die Erinnerungen senden.                                                                                                                                                                                                                                                                                                                       |
| Letztes (oder zugewiesenes) Teammitglied erinnern?                                      | Wenn aktiviert, wird dein Bot eine Erinnerungsnachricht für das zuständige Teammitglied senden.                                                                                                                                                                                                                                                                                                             |
| Letztes Teammitglied Erinnerungszeitraum                                                | *Nur verfügbar, wenn "Letztes (oder zugewiesenes) Teammitglied erinnern?" aktiviert ist.*<br/>Hier kannst du die Zeit festlegen, in welcher das Teammitglied inaktiv sein muss, damit eine Erinnerung versendet wird. In welchem Format du Zeitangaben in SCNX einstellst, erfährst du [hier](https://docs.scnx.xyz/de/docs/custom-bot/additional-features/#durations).                                     |
| Erinnerungsnachricht für das letzte Teammitglied                                        | *Nur verfügbar, wenn "Letztes (oder zugewiesenes) Teammitglied erinnern?" aktiviert ist.*<br/>Hier kannst du die Nachricht anpassen, welche als Erinnerungsnachricht versendet wird.                                                                                                                                                                                                                        |
| Erneut erwähnen, wenn ein Ticket noch keine Antwort von einem Teammitglied erhalten hat | Wenn aktiviert, wird dein Bot eine Erinnerungsnachricht über noch nicht bearbeitete Tickets senden.                                                                                                                                                                                                                                                                                                         |
| Zeitraum vor Erinnerung aufgrund eines unzugewiesenen Tickets                           | *Nur verfügbar, wenn "Erneut erwähnen, wenn ein Ticket noch keine Antwort von einem Teammitglied erhalten hat" aktiviert ist.*<br/>Hier kannst du die Zeit einstellen, in welcher Tickets unbearbeitet sein müssen, bevor eine Erinnerung versendet wird. In welchem Format du Zeitangaben in SCNX einstellst, erfährst du [hier](https://docs.scnx.xyz/de/docs/custom-bot/additional-features/#durations). |
| Unzugewiesene Ticketerinnerungsnachricht                                                | *Nur verfügbar, wenn "Erneut erwähnen, wenn ein Ticket noch keine Antwort von einem Teammitglied erhalten hat" aktiviert ist.*<br/>Hier kannst du die Nachricht anpassen, welche als Erinnerung für noch nicht bearbeitete Tickets versendet werden soll.                                                                                                                                                   |

## Ticket-Pausierung {#ticket-hold}

### Funktionen {#ticket-hold-features}

* Setze ein Ticket in den Pausierungs-Modus, um es beispielsweise an andere Team-Mitglieder oder Gruppen weiterzuleiten.
* Informiere den Nutzer mit einer Nachricht über das Aktivieren/Deaktivieren der Pausierung in seinem Ticket.
* Sperre den Kanal, damit Mitglieder während der ausstehenden Zuweisung in einer Pausierung nicht in den Kanal schreiben können.
* Sobald ein Ticket pausiert ist, wird das [Automatische Ticket-Schließen](#auto-close-tickets) für dieses Ticket deaktiviert.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#ticket-hold-setup}

* Besuche den Abschnitt [Ticket-Pausierung](https://scnx.app/glink?page=support-system/modmail/configuration?show=ticket-hold) in deinem Dashboard.
* [Konfiguriere](#ticket-hold-configuration) verfügbare Optionen.

### Befehle {#ticket-hold-commands}

<SlashCommandExplanation />

|      Befehl      |                                Beschreibung                                |
| ---------------- | -------------------------------------------------------------------------- |
| ``/ticket hold`` | Aktiviert oder deaktiviert den Pausierungs-Status für das aktuelle Ticket. |

### Konfiguration {#ticket-hold-configuration}

|                  Feld                  |                                         Beschreibung                                          |
| -------------------------------------- | --------------------------------------------------------------------------------------------- |
| Ticket-Pausierungs-Befehl aktivieren?  | Wenn aktiviert, ist die Ticket-Pausierung in deinem modmail aktiv.                      |
| Ticket sperren, wenn es pausiert wird? | Wenn aktiviert, wird der Ticket-Kanal automatisch gesperrt, sobald das Ticket pausiert wurde. |
| Pausierungsnachricht                   | Diese Nachricht wird beim Aktivieren der Pausierung gesendet.                                 |
| Entpausierungsnachricht                | Diese Nachricht wird beim Deaktivieren der Pausierung gesendet.                               |

## Erweiterte Nachrichten-Konfiguration {#advanced-message-configuration}

### Funktionen {#advanced-message-configuration-features}

* Lege die Formatierung von Ticket-Kanal-Namen fest, um Tickets eindeutig zuordnen zu können.
* Konfiguriere verschiedene Nachrichten, um alles perfekt auf deinen Server abzustimmen.
* Ändere den Typ deiner Ticket-ID-Generierung, um eine andere Variante für die Ticket-ID im Kanalnamen auszuwählen.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#advanced-message-configuration-setup}

* Besuche den Abschnitt [Erweiterte Nachrichten-Konfiguration](https://scnx.app/glink?page=support-system/modmail/configuration?show=advanced-messaging) in deinem Dashboard.
* [Konfiguriere](#advanced-message-configuration-configuration) verfügbare Optionen.

### Konfiguration {#advanced-message-configuration-configuration}

|                                 Feld                                  |                                                                                                                                                                             Beschreibung                                                                                                                                                                             |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ticket-Kanalname-Format                                               | In diesem Format wird dein Bot den Namen von neuen Ticket-Kanälen erstellen. Du kannst andere Formatierungen für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/modmail/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu [hier](/de/docs/support-bot/modmail/ticket-topics). |
| Fehlermeldung: Nutzer hat bereits ein Ticket offen                    | *Nur gesendet, wenn [konfiguriert](#main-configuration-configuration).*<br/>Diese Nachricht wird dein Bot senden, wenn ein Nutzer versucht, ein weiteres Ticket zu öffnen, obwohl er noch ein aktives Ticket offen hat.                                                                                                                                              |
| Fehler: Ticket nicht gefunden                                         | Diese Nachricht wird dein Bot senden, wenn ein Teammitglied versucht, ein Ticket zu [claimen](/de/docs/support-bot/modmail/claiming), welches aber bereits geschlossen oder gelöscht wurde.                                                                                                                                                                    |
| Fehler: Befehl außerhalb von Ticketkanälen verwendet                  | Diese Nachricht wird dein Bot senden, wenn ein Teammitglied Ticket-Befehle außerhalb eines Ticket-Kanals ausführt.                                                                                                                                                                                                                                                   |
| Ticket per Befehl Bestätigungsnachricht                               | Diese Nachricht wird dein Bot senden, wenn ein Nutzer versucht, ein neues Ticket mit ``/ticket open`` zu öffnen ([wenn konfiguriert](#main-configuration-configuration)).                                                                                                                                                                                            |
| Fehler: Nicht genügend Rechte, um Nutzer zu einem Ticket hinzuzufügen | Diese Nachricht wird dein Bot senden, wenn ein Nutzer mit fehlenden Berechtigungen versucht, einen neuen Nutzer zum Ticket hinzuzufügen/entfernen ([wenn konfiguriert](#additional-ticket-members-configuration)).                                                                                                                                                   |
| Fehler: Benutzer wurde bereits zum Ticket hinzugefügt                 | Diese Nachricht wird gesendet, wenn versucht wird, einen neuen Nutzer zum Ticket hinzuzufügen, welcher aber bereits Zugriff auf das Ticket besitzt.                                                                                                                                                                                                                  |
| Ticket-ID-Generator                                                   | Diese ID wird dein Bot für den Ticket-Kanal-Namen verwenden.                                                                                                                                                                                                                                                                                                         |

## Statistik-Kanäle {#statistics-channels}

### Funktionen {#statistics-channels-features}

* Stelle verschiedene Statistiken in unterschiedlichen Kanälen dar und gebe so Auskunft über dein modmail.
* Füge deine Wunsch-Statistiken hinzu und passe den Kanal-Namen entsprechend an.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#statistics-channels-setup}

* Erstelle mindestens einen Sprachkanal für Statistiken auf deinem Discord-Server.
* Besuche den Abschnitt [Statistik-Kanäle](https://scnx.app/glink?page=support-system/modmail/configuration?show=stats-channel) in deinem Dashboard.
* Klicke auf den blauen Knopf "Statistik-Kanal hinzufügen", um ein neues Element zu erstellen.
* [Konfiguriere](#statistics-channels-configuration) verfügbare Optionen.

### Konfiguration {#statistics-channels-configuration}

|                           Feld                           |                                                                Beschreibung                                                                 |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanal                                                    | Dieser Sprachkanal wird für das Statistik‑Element verwendet.                                                                                |
| Nur Tickets mit bestimmten Ticket-Themen berücksichtigen | Wenn aktiviert, werden nur ausgewählte [Ticket-Themen](/de/docs/support-bot/modmail/ticket-topics) in den Statistiken berücksichtigt. |
| Name des Kanals                                          | Dieser Text wird als Kanal-Name verwendet.                                                                                                  |