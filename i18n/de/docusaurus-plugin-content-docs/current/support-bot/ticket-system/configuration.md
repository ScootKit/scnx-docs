---
sidebar_position: 3
title: Konfiguration
description: Stelle alle grundlegenden Funktionen für dein Ticket-System ein!
---

# Konfiguration

## Hauptkonfiguration {#main-configuration}

### Funktionen {#main-configuration-features}

* Aktiviere oder deaktiviere das Ticket-System für deinen Discord-Server.
* Stelle verschiedene Kategorien, Kanäle und Rollen ein, um deine Tickets zu organisieren.
* Aktiviere KI-Zusammenfassungen, um nach Schließung eines Tickets eine automatisch generierte Zusammenfassung zu erhalten.
* Konfiguriere weitere Optionen, um die volle Kontrolle über dein Ticket-System zu erhalten.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#main-configuration-setup}

* Erstelle eine Kategorie für neue Tickets und einen privaten Textkanal für Ticket-Logs auf deinem Discord-Server.
* Erstelle entsprechende Rollen auf deinem Discord-Server, welche später Zugriff auf Tickets bekommen sollen.
* Besuche den Abschnitt [Hauptkonfiguration](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=main) in deinem Dashboard.
* [Konfiguriere](#main-configuration-configuration) verfügbare Optionen.

### Befehle {#main-configuration-commands}

<SlashCommandExplanation />

|         Befehl         |                                                                                                                                                           Beschreibung                                                                                                                                                           |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ``/ticket admin-open`` | Ermöglicht es Teammitgliedern, neue Tickets mit ausgewählten Nutzern zu erstellen.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Teammitgliedern erlauben, Tickets im Namen eines Nutzers zu öffnen?" [aktiviert](#main-configuration-configuration) ist.*</blockquote></details></small> |
| ``/ticket close``      | Erlaubt Teammitgliedern und Nutzern, Tickets zu schließen.<br/><small><details><summary>Hinweis</summary><blockquote>*Nutzer können Tickets nur schließen, wenn "Erlauben, dass Nutzer ihre eigenen Tickets schließen?" [aktiviert](#ticket-closing-configuration) ist.*</blockquote></details></small>                           |
| ``/ticket form``       | Sendet ein bestimmtes [Formular](/de/docs/support-bot/general/forms) in einen Ticket-Kanal.                                                                                                                                                                                                                                      |
| ``/ticket open``       | Öffnet ein neues Ticket (mit einem bestimmten Ticket-Thema).<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Nutzern erlauben, Tickets per Befehl zu öffnen?" [aktiviert](#main-configuration-configuration) ist.*</blockquote></details></small>                                          |

### Konfiguration {#main-configuration-configuration}

|                                Feld                                 |                                                                                                                                                                                                                        Beschreibung                                                                                                                                                                                                                        |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ticket-System aktivieren?                                           | Aktiviert oder deaktiviert das Ticket-System.                                                                                                                                                                                                                                                                                                                                                                                                              |
| Wartungsmodus aktivieren?                                           | Wenn aktiviert, können keine Aktionen in Bezug auf Tickets ausgeführt werden.<br/><small><details><summary>Hinweis</summary><blockquote>*In bereits geöffneten Tickets können weiterhin Aktionen ausgeführt und Nachrichten versendet werden.*</blockquote></details></small>                                                                                                                                                                              |
| Wartungsmodus                                                       | Diese Nachricht wird beim Ausführen von Ticket-Aktionen während des Wartungsmodus angezeigt.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Wartungsmodus aktivieren?" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                                               |
| Nutzern erlauben, Tickets per Befehl zu öffnen?                     | Wenn aktiviert, können Nutzer mit dem Befehl [``/ticket open``](#main-configuration-commands) ein neues Ticket erstellen.                                                                                                                                                                                                                                                                                                                                  |
| Teammitgliedern erlauben, Tickets im Namen eines Nutzers zu öffnen? | Wenn aktiviert, können Teammitglieder mit dem Befehl [``/ticket admin-open``](#main-configuration-commands) ein Ticket mit einem Nutzer erstellen.<br/><small><details><summary>Hinweis</summary><blockquote>*Einschränkungen wie mehrere gleichzeitig offene Tickets oder Öffnungszeiten werden ignoriert.*</blockquote></details></small>                                                                                                                |
| Kategorie für neue Tickets                                          | In dieser Kategorie werden neue Tickets standardmäßig erstellt.<br/><small><details><summary>Hinweis</summary><blockquote>*Andere Kategorien für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) konfigurieren, mehr Infos [hier](/de/docs/support-bot/ticket-system/ticket-topics).*</blockquote></details></small>                                            |
| Teammitglieder-Rollen                                               | Diese Rollen erhalten standardmäßig Zugriff auf Tickets und werden bei Erstellung eines neuen Tickets erwähnt.<br/><small><details><summary>Hinweis</summary><blockquote>*Andere Rollen für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) konfigurieren, mehr Infos [hier](/de/docs/support-bot/ticket-system/ticket-topics).*</blockquote></details></small> |
| Log-Kanal                                                           | In diesen Kanal werden alle support-relevanten Nachrichten gesendet.<br/><small><details><summary>Hinweis</summary><blockquote>*Andere Log-Kanäle für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) konfigurieren, mehr Infos dazu findest du [hier](/de/docs/support-bot/ticket-system/ticket-topics).*</blockquote></details></small>                       |
| Ticket-Nachricht                                                    | Diese Nachricht wird bei Erstellung eines neuen Tickets in den Ticket-Kanal gesendet.<br/><small><details><summary>Hinweis</summary><blockquote>*Andere Nachrichten für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) konfigurieren, mehr Infos [hier](/de/docs/support-bot/ticket-system/ticket-topics).*</blockquote></details></small>                     |
| Insgesamt nur ein Ticket pro Nutzer erlauben                        | Wenn aktiviert, kann ein Nutzer maximal ein Ticket gleichzeitig geöffnet haben.<br/><small><details><summary>Hinweis</summary><blockquote>*Andere Ticket-Limits für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) konfigurieren, mehr Infos dazu [hier](/de/docs/support-bot/ticket-system/ticket-topics).*</blockquote></details></small>                    |
| KI-Zusammenfassung von Ticket-Transkripten                          | Wenn aktiviert, wird nach Ticketschließung eine Zusammenfassung des Ticket-Transkripts generiert.<br/><small><details><summary>Hinweis</summary><blockquote>*Für diese Funktion wird das [KI-Guthaben](https://faq.scnx.app/ki-auf-scnx/) deines Servers genutzt und bestimmte Daten mit "modmail.net" (einem SCNX-Produkt) geteilt werden. Unsere Datenschutzerklärung findest du [hier](https://scootk.it/scnx-privacy).*</blockquote></details></small> |
| Teammitgliedern erlauben, Tickets umzubenennen?                     | Wenn aktiviert, können Teammitglieder mit dem Befehl [``/ticket rename``](#main-configuration-commands) Tickets umbenennen.<br/><small><details><summary>Hinweis</summary><blockquote>*Nach manueller Bearbeitung des Ticket-Namens wird der Ticket-Name bei Verschiebung des Tickets nicht mehr automatisch geändert ([falls aktiviert](/de/docs/support-bot/ticket-system/ticket-topics)).*</blockquote></details></small>                               |
| Knopf zum Umbenennen unter Ticket-Nachricht anzeigen?               | Wenn aktiviert, wird ein Knopf zum Bearbeiten des Ticket-Namens zur Ticket-Nachricht hinzugefügt.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Teammitgliedern erlauben, Tickets umzubenennen?" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                    |
| Inhalt des Umbenennungsknopfs                                       | Dieser Text wird im Knopf zum Bearbeiten des Ticket-Namens angezeigt.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Knopf zum Umbenennen unter Ticket-Nachricht anzeigen?" aktiviert ist.*</blockquote></details></small>                                                                                                                                   |
| Ticket-Umbennenungsnachricht                                        | Diese Nachricht wird bei Umbenennung eines Ticket-Namens in den Ticket-Kanal gesendet.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Teammitgliedern erlauben, Tickets umzubenennen?" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                               |

## Ticketöffnungsnachricht {#ticket-open-messages}

### Funktionen {#ticket-open-messages-features}

* Lass deine Nutzer neue Tickets einfach über Knöpfe oder Dropdown-Menüs erstellen.
* Sende mehrere Ticketöffnungsnachrichten mit verschiedenen [Ticket-Themen](/de/docs/support-bot/ticket-system/ticket-topics) in unterschiedliche Kanäle, um die Erstellung auf mehrere Kanäle zu verteilen.
* Entscheide dich bei jeder Nachricht zwischen Knöpfen oder Dropdown-Menüs für eine optimale Nutzer-Erfahrung.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#ticket-open-messages-setup}

* Besuche den Abschnitt [Ticketöffnungsnachricht](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-opening-messages) in deinem Dashboard.
* Klicke auf den blauen Knopf "Ticket-Öffnungsnachricht hinzufügen", um eine neue Ticketöffnungsnachricht zu erstellen.
* [Konfiguriere](#ticket-open-messages-configuration) verfügbare Optionen.

### Konfiguration {#ticket-open-messages-configuration}

|                          Feld                          |                                                                                                                                                      Beschreibung                                                                                                                                                      |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanal, in welchen die Nachricht verschickt werden soll | In diesen Kanal wird die Ticketöffnungsnachricht gesendet.                                                                                                                                                                                                                                                             |
| Nachricht                                              | Diese Nachricht wird in den konfigurierten Kanal gesendet.                                                                                                                                                                                                                                                             |
| Nur bestimmte Ticket-Themen anzeigen?                  | Wenn aktiviert, werden nur bestimmte deiner konfigurierten [Ticket-Themen](/de/docs/support-bot/ticket-system/ticket-topics) angezeigt.<br/><small><details><summary>Hinweis</summary><blockquote>*Falls du Knöpfe verwenden möchtest, darfst du hier maximal ein Ticket-Thema wählen.*</blockquote></details></small> |
| Knöpfe verwenden?                                      | Wenn aktiviert, werden Knöpfe anstatt eines Dropdown-Menüs verwendet.                                                                                                                                                                                                                                                  |

## Ticketschließung {#ticket-closing}

### Funktionen {#ticket-closing-features}

* Füge einen Schließen‑Knopf zur Ticket‑Nachricht hinzu, damit Tickets per Klick geschlossen werden können.
* Erlaube das Schließen von Tickets durch den Ersteller (anstatt ausschließlich durch Teammitglieder).
* Aktiviere Schließungs-Anfragen, um das sofortige Schließen des Tickets durch Teammitglieder zu vermeiden.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#ticket-closing-setup}

* Besuche den Abschnitt [Ticketschließung](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-close) in deinem Dashboard.
* [Konfiguriere](#ticket-closing-configuration) verfügbare Optionen.

### Befehle {#ticket-closing-commands}

<SlashCommandExplanation />

|               Befehl                |                                                                                                                                                                       Beschreibung                                                                                                                                                                        |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ``/ticket close [force:<Boolean>]`` | Erlaubt Teammitgliedern, Schließungs-Anfragen zu umgehen, indem sie die ``force``-Option auf ``True`` setzen.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Teammitgliedern erlauben, Tickets auch ohne Bestätigung zu schließen?" [aktiviert](#ticket-closing-configuration) ist.*</blockquote></details></small> |
| ``/ticket close-schedule``          | Ermöglicht Teammitgliedern das Planen einer Ticketschließung.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Können Teammitglieder manuell planen, wann Tickets geschlossen werden sollen?" [aktiviert](#ticket-closing-configuration) ist.*</blockquote></details></small>                                        |

### Konfiguration {#ticket-closing-configuration}

|                                     Feld                                      |                                                                                                                                                                                                                                                            Beschreibung                                                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ticketschließungsknopf in der Ticket-Nachricht anzeigen?                      | Wenn aktiviert, wird ein Knopf zum Schließen des Tickets zur Ticket-Nachricht hinzugefügt.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Inhalt des Ticketschließungsknopfs                                            | Dieser Text wird im Knopf unter der Ticket-Nachricht angezeigt.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Ticketschließungsknopf in der Ticket-Nachricht anzeigen?" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                                                                                                                     |
| Erlauben, dass Nutzer ihre eigenen Tickets schließen?                         | Wenn aktiviert, können neben Teammitgliedern auch Nutzer Tickets schließen.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Bestätigung von Teammitgliedern verlangen, bevor das Ticket geschlossen wird? | Wenn aktiviert, müssen Nutzer eine Schließungs-Anfrage stellen, bevor das Ticket geschlossen werden kann.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Erlauben, dass Nutzer ihre eigenen Tickets schließen?" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                                                                              |
| Nutzer-Bestätigungsnachricht bei Ticketschließungsanfrage                     | Diese Nachricht wird bei einer Schließungs-Anfrage durch einen Nutzer in den Ticket-Kanal gesendet.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Bestätigung von Teammitgliedern verlangen, bevor das Ticket geschlossen wird?" aktiviert ist.*</blockquote></details></small>                                                                                                                                               |
| Bestätigung per Privatnachricht schicken, wenn ein Ticket geschlossen wird?   | Wenn aktiviert, wird nach Schließen des Tickets eine Privatnachricht an den Nutzer gesendet.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Ticket-Schließungs-Bestätigung per Privatnachricht                            | Diese Nachricht wird dem Nutzer nach Ticketschließung gesendet.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Bestätigung per Privatnachricht schicken, wenn ein Ticket geschlossen wird?" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                                                                                                  |
| Transkript an die Ticket-Schließungs-Privatnachricht anhängen?                | Wenn aktiviert, wird ein Transkript des Tickets an die Privatnachricht angehängt.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Bestätigung per Privatnachricht schicken, wenn ein Ticket geschlossen wird?" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                                                                               |
| Bestätigung des Nutzers verlangen, bevor das Ticket geschlossen wird?         | Wenn aktiviert, wird vor Schließung eines Tickets durch ein Teammitglied eine Schließungs-Anfrage an den Nutzer gestellt.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Nachricht bei Ticketschließungsanfrage durch Teammitglied                     | Diese Nachricht wird bei einer Schließungs-Anfrage durch ein Teammitglied in den Ticket-Kanal gesendet.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Bestätigung des Nutzers verlangen, bevor das Ticket geschlossen wird?" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                                                                |
| Zeitüberschreitung bei der Schließungsanfrage                                 | Während dieses Zeitraums muss der Nutzer auf die Schließungs-Anfrage antworten, bevor sein Ticket automatisch geschlossen wird.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Bestätigung des Nutzers verlangen, bevor das Ticket geschlossen wird?" aktiviert ist.*</blockquote></details><details><summary>Hinweis</summary><blockquote>*Wie du Zeitangaben in SCNX einstellst, erfährst du [hier](/de/docs/custom-bot/additional-features/#durations).*</blockquote></details></small> |
| Teammitgliedern erlauben, Tickets auch ohne Bestätigung zu schließen?         | Wenn aktiviert, können Teammitglieder die Schließungs-Anfrage mit dem Befehl [``/ticket close [force]``](#ticket-closing-commands) umgehen.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Bestätigung des Nutzers verlangen, bevor das Ticket geschlossen wird?" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                            |
| Können Teammitglieder manuell planen, wann Tickets geschlossen werden sollen? | Wenn aktiviert, können Teammitglieder das Schließen von Tickets mit dem Befehl [``/ticket close-schedule``](#ticket-closing-commands) planen.                                                                                                                                                                                                                                                                                                                                                                                      |
| Geplante Schließungs-Nachricht                                                | Diese Nachricht wird bei geplanter Schließung eines Tickets in den Ticket-Kanal gesendet.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Können Teammitglieder manuell planen, wann Tickets geschlossen werden sollen?" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                                                                      |

## Zusätzliche Ticketmitglieder {#additional-ticket-members}

### Funktionen {#additional-ticket-members-features}

* Füge weitere (Team)Mitglieder zu einem Ticket hinzu (oder entferne sie), um Probleme besser lösen zu können.
* Stelle ein, ob der Ersteller selbst neue Mitglieder zu Tickets hinzufügen kann.
* Benachrichtige den Nutzer mit einer Nachricht über das Hinzufügen und Entfernen von Nutzern.
* Füge einen Knopf zur Ticket-Nachricht hinzu, um Mitglieder per Klick hinzufügen zu können.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#additional-ticket-members-setup}

* Besuche den Abschnitt [Zusätzliche Ticketmitglieder](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=additional-users) in deinem Dashboard.
* [Konfiguriere](#additional-ticket-members-configuration) verfügbare Optionen.

### Befehle {#additional-ticket-members-commands}

<SlashCommandExplanation />

|                              Befehl                               |                       Beschreibung                        |
| ----------------------------------------------------------------- | --------------------------------------------------------- |
| ``/ticket users add``                                             | Fügt einen neuen Nutzer zum Ticket hinzu.                 |
| ``/ticket users remove existing-additional-ticket-user:<Nutzer>`` | Entfernt einen zuvor hinzugefügten Nutzer aus dem Ticket. |

### Konfiguration {#additional-ticket-members-configuration}

|                                 Feld                                 |                                                                                                                                Beschreibung                                                                                                                                |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zusätzliche Ticketmitglieder erlauben?                               | Aktiviert oder deaktiviert die Funktion für das Ticket-System.                                                                                                                                                                                                             |
| Knopf zum Hinzufügen zusätzlicher Nutzer in Ticketnachricht anzeigen | Wenn aktiviert, wird ein Knopf zum Hinzufügen von Ticketmitgliedern zur Ticket-Nachricht hinzugefügt.                                                                                                                                                                      |
| Inhalt des Nutzer-Hinzufügen Knopfs                                  | Dieser Text wird im Knopf unter der Ticket-Nachricht angezeigt.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Knopf zum Hinzufügen zusätzlicher Nutzer in Ticketnachricht anzeigen" aktiviert ist.*</blockquote></details></small> |
| Kann der Ticket-Besitzer weitere Nutzer hinzufügen?                  | Wenn aktiviert, können Nutzer Ticketmitglieder zu Tickets hinzufügen.                                                                                                                                                                                                      |
| Nachricht zur Auswahl zusätzlicher Nutzer                            | Diese Nachricht wird bei der Auswahl zum Hinzufügen eines Ticketmitglieds angezeigt.                                                                                                                                                                                       |
| Nachricht, wenn ein Nutzer entfernt wird                             | Diese Nachricht wird bei Entfernung eines Ticketmitglieds in den Ticket-Kanal gesendet.                                                                                                                                                                                    |
| Nachricht, wenn ein Nutzer hinzugefügt wird                          | Diese Nachricht wird beim Hinzufügen eines Ticketmitglieds in den Ticket-Kanal gesendet.                                                                                                                                                                                   |

## Automatisches Ticket-Schließen {#auto-close-tickets}

### Funktionen {#auto-close-tickets-features}

* Schließe Tickets bei Inaktivität von Nutzern automatisch, um Ordnung in deine Ticket-Liste zu bringen.
* Sende eine Warnung vor der automatischen Schließung, um den Nutzer an sein Ticket zu erinnern.
* Markiere Tickets automatisch als gelöst, wenn der Nutzer den Server verlässt.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#auto-close-tickets-setup}

* Besuche den Abschnitt [Automatisches Ticket-Schließen](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=auto-close) in deinem Dashboard.
* [Konfiguriere](#auto-close-tickets-configuration) verfügbare Optionen.

### Konfiguration {#auto-close-tickets-configuration}

|                               Feld                                |                                                                                                                                                                                                                                          Beschreibung                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ticket automatisch schließen, wenn ein Nutzer den Server verlässt | Wenn aktiviert, wird das Ticket beim Verlassen des Servers durch den Nutzer automatisch geschlossen.                                                                                                                                                                                                                                                                                                                                                                                            |
| Inaktivitätsbenachrichtigung schicken?                            | Wenn aktiviert, wird eine Inaktivitätswarnung in den Ticket-Kanal gesendet.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Benachrichtigungs-Nachricht                                       | Diese Nachricht wird als Inaktivitätswarnung in den Ticket-Kanal gesendet.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Inaktivitätsbenachrichtigung senden?" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                                                                                           |
| Benachrichtigungs-Zeitraum                                        | Für diesen Zeitraum muss der Nutzer inaktiv sein, um die Inaktivitätswarnung zu erhalten.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Inaktivitätsbenachrichtigung senden?" aktiviert ist.*</blockquote></details><details><summary>Hinweis</summary><blockquote>*In welchem Format du Zeitangaben in SCNX einstellst, erfährst du [hier](https://docs.scnx.xyz/de/docs/custom-bot/additional-features/#durations).*</blockquote></details></small>   |
| Inaktive Tickets automatisch schließen                            | Wenn aktiviert, wird das Ticket bei Inaktivität automatisch geschlossen.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Zeitfenster für das automatische Schließen von Tickets            | Für diesen Zeitraum muss der Nutzer inaktiv sein, um das Ticket automatisch zu schließen.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Inaktive Tickets automatisch schließen" aktiviert ist.*</blockquote></details><details><summary>Hinweis</summary><blockquote>*In welchem Format du Zeitangaben in SCNX einstellst, erfährst du [hier](https://docs.scnx.xyz/de/docs/custom-bot/additional-features/#durations).*</blockquote></details></small> |

## Ticketerinnerungen {#ticket-reminders}

### Funktionen {#ticket-reminders-features}

* Sende eine automatische Erinnerung, wenn ein Teammitglied in seinem Ticket inaktiv ist.
* Erwähne noch nicht bearbeitete Tickets in deinem Erinnerungskanal, um auf nicht-beantwortete Tickets aufmerksam zu machen.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#ticket-reminders-setup}

* Erstelle einen privaten Textkanal für die Erinnerungs-Benachrichtigungen auf deinem Discord-Server.
* Besuche den Abschnitt [Ticketerinnerungen](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-reminders) in deinem Dashboard.
* [Konfiguriere](#ticket-reminders-configuration) verfügbare Optionen.

### Konfiguration {#ticket-reminders-configuration}

|                                          Feld                                           |                                                                                                                                                                                                                                                                    Beschreibung                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erinnerungskanal                                                                        | In diesen Kanal werden Ticketerinnerungen gesendet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Letztes (oder zugewiesenes) Teammitglied erinnern?                                      | Wenn aktiviert, wird eine Erinnerungsnachricht für das zuständige Teammitglied in den Erinnerungskanal gesendet.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Letztes Teammitglied Erinnerungszeitraum                                                | Für diesen Zeitraum muss das Teammitglied inaktiv sein, um eine Erinnerung zu erhalten.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Letztes (oder zugewiesenes) Teammitglied erinnern?" aktiviert ist.*</blockquote></details><details><summary>Hinweis</summary><blockquote>*In welchem Format du Zeitangaben in SCNX einstellst, erfährst du [hier](https://docs.scnx.xyz/de/docs/custom-bot/additional-features/#durations).*</blockquote></details></small>                                          |
| Erinnerungsnachricht für das letzte Teammitglied                                        | Diese Nachricht wird als Erinnerungsnachricht für inaktive Teammitglieder gesendet.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Letztes (oder zugewiesenes) Teammitglied erinnern?" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                                                                                                                       |
| Erneut erwähnen, wenn ein Ticket noch keine Antwort von einem Teammitglied erhalten hat | Wenn aktiviert, wird eine Erinnerungsnachricht für unbearbeitete Tickets in den Erinnerungskanal gesendet.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Zeitraum vor Erinnerung aufgrund eines unzugewiesenen Tickets                           | Für diesen Zeitraum muss ein Ticket unbearbeitet sein, bevor eine Erinnerung gesendet wird.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Erneut erwähnen, wenn ein Ticket noch keine Antwort von einem Teammitglied erhalten hat" aktiviert ist.*</blockquote></details><details><summary>Hinweis</summary><blockquote>*In welchem Format du Zeitangaben in SCNX einstellst, erfährst du [hier](https://docs.scnx.xyz/de/docs/custom-bot/additional-features/#durations).*</blockquote></details></small> |
| Unzugewiesene Ticketerinnerungsnachricht                                                | Diese Nachricht wird als Erinnerungsnachricht für unbearbeitete Tickets gesendet.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Erneut erwähnen, wenn ein Ticket noch keine Antwort von einem Teammitglied erhalten hat" aktiviert ist.*</blockquote></details></small>                                                                                                                                                                                                                                    |

## Ticket-Pausierung {#ticket-hold}

### Funktionen {#ticket-hold-features}

* Setze ein Ticket in den Pausierungs-Modus, um es beispielsweise an andere Team-Mitglieder oder Gruppen weiterzuleiten.
* Informiere den Nutzer mit einer Nachricht über das Aktivieren/Deaktivieren der Pausierung in seinem Ticket.
* Sperre den Kanal, damit Mitglieder während der ausstehenden Zuweisung in einer Pausierung nicht in den Kanal schreiben können.
* Sobald ein Ticket pausiert ist, wird das [Automatische Ticket-Schließen](#auto-close-tickets) für dieses Ticket deaktiviert.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#ticket-hold-setup}

* Besuche den Abschnitt [Ticket-Pausierung](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-hold) in deinem Dashboard.
* [Konfiguriere](#ticket-hold-configuration) verfügbare Optionen.

### Befehle {#ticket-hold-commands}

<SlashCommandExplanation />

|      Befehl      |                            Beschreibung                            |
| ---------------- | ------------------------------------------------------------------ |
| ``/ticket hold`` | Aktiviert oder deaktiviert die Pausierung für das aktuelle Ticket. |

### Konfiguration {#ticket-hold-configuration}

|                  Feld                  |                                       Beschreibung                                       |
| -------------------------------------- | ---------------------------------------------------------------------------------------- |
| Ticket-Pausierungs-Befehl aktivieren?  | Aktiviert oder deaktiviert die Funktion für das Ticket-System.                           |
| Ticket sperren, wenn es pausiert wird? | Wenn aktiviert, wird bei Pausierung eines Tickets der Ticket-Kanal automatisch gesperrt. |
| Pausierungsnachricht                   | Diese Nachricht wird beim Aktivieren der Pausierung gesendet.                            |
| Entpausierungsnachricht                | Diese Nachricht wird beim Deaktivieren der Pausierung gesendet.                          |

## Erweiterte Nachrichten-Konfiguration {#advanced-message-configuration}

### Funktionen {#advanced-message-configuration-features}

* Lege die Formatierung von Ticket-Kanal-Namen fest, um Tickets eindeutig zuordnen zu können.
* Konfiguriere verschiedene Nachrichten, um alles perfekt auf deinen Server abzustimmen.
* Ändere den Typ deiner Ticket-ID-Generierung, um eine andere Variante für die Ticket-ID im Kanalnamen auszuwählen.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#advanced-message-configuration-setup}

* Besuche den Abschnitt [Erweiterte Nachrichten-Konfiguration](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=advanced-messaging) in deinem Dashboard.
* [Konfiguriere](#advanced-message-configuration-configuration) verfügbare Optionen.

### Konfiguration {#advanced-message-configuration-configuration}

|                                 Feld                                  |                                                                                                                                                                                                    Beschreibung                                                                                                                                                                                                    |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ticket-Kanalname-Format                                               | Dieses Format wird für die Namen von Ticket-Kanälen verwendet.<br/><small><details><summary>Hinweis</summary><blockquote>*Andere Formatierungen für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) konfigurieren, mehr Infos [hier](/de/docs/support-bot/ticket-system/ticket-topics).*</blockquote></details></small> |
| Fehlermeldung: Nutzer hat bereits ein Ticket offen                    | Diese Nachricht wird beim Versuch ein weiteres gleichzeitiges Ticket zu erstellen angezeigt.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur angezeigt, wenn "Insgesamt nur ein Ticket pro Nutzer erlauben" [aktiviert](#main-configuration-configuration) ist.*</blockquote></details></small>                                                                                               |
| Fehler: Ticket nicht gefunden                                         | Diese Nachricht wird beim Versuch ein bereits geschlossenes oder gelöschtes Ticket zu claimen angezeigt.                                                                                                                                                                                                                                                                                                           |
| Fehler: Befehl außerhalb von Ticketkanälen verwendet                  | Diese Nachricht wird beim Ausführen von Ticket-Befehlen außerhalb von Ticket-Kanälen angezeigt.                                                                                                                                                                                                                                                                                                                    |
| Ticket per Befehl Bestätigungsnachricht                               | Diese Nachricht wird beim Öffnen eines neuen Tickets mit dem Befehl [``/ticket open``](#main-configuration-commands) angezeigt.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur angezeigt, wenn "Nutzern erlauben, Tickets per Befehl zu öffnen?" [aktiviert](#main-configuration-configuration) ist.*</blockquote></details></small>                                                         |
| Fehler: Nicht genügend Rechte, um Nutzer zu einem Ticket hinzuzufügen | Diese Nachricht wird beim Versuch Ticketmitglieder mit fehlenden Berechtigungen hinzuzufügen oder zu entfernen angezeigt.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur angezeigt, wenn "Zusätzliche Ticketmitglieder erlauben?" [aktiviert](#additional-ticket-members-configuration) ist.*</blockquote></details></small>                                                             |
| Fehler: Benutzer wurde bereits zum Ticket hinzugefügt                 | Diese Nachricht wird beim Versuch ein bereits hinzugefügtes Ticketmitglied hinzuzufügen angezeigt.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur angezeigt, wenn "Zusätzliche Ticketmitglieder erlauben?" [aktiviert](#additional-ticket-members-configuration) ist.*</blockquote></details></small>                                                                                   |
| Ticket-ID-Generator                                                   | Diese ID wird für den Namen des Ticket-Kanals verwendet.                                                                                                                                                                                                                                                                                                                                                           |

## Statistik-Kanäle {#statistics-channels}

### Funktionen {#statistics-channels-features}

* Stelle verschiedene Statistiken in unterschiedlichen Kanälen dar und gebe so Auskunft über dein Ticket-System.
* Füge deine Wunsch-Statistiken hinzu und passe den Kanal-Namen entsprechend an.

<h4>Bilder Coming Soon ✨</h4>

### Einrichtung {#statistics-channels-setup}

* Erstelle mindestens einen Sprachkanal für Statistiken auf deinem Discord-Server.
* Besuche den Abschnitt [Statistik-Kanäle](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=stats-channel) in deinem Dashboard.
* Klicke auf den blauen Knopf "Statistik-Kanal hinzufügen", um ein neues Element zu erstellen.
* [Konfiguriere](#statistics-channels-configuration) verfügbare Optionen.

### Konfiguration {#statistics-channels-configuration}

|                           Feld                           |                                                              Beschreibung                                                              |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Kanal                                                    | Dieser Sprachkanal wird für das Statistik‑Element verwendet.                                                                           |
| Nur Tickets mit bestimmten Ticket-Themen berücksichtigen | Wenn aktiviert, werden nur ausgewählte [Ticket-Themen](/de/docs/support-bot/ticket-system/ticket-topics) in den Statistiken verwendet. |
| Name des Kanals                                          | Dieser Text wird als Kanal-Name verwendet.                                                                                             |