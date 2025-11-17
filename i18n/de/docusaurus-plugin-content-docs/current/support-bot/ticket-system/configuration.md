---
sidebar_position: 3
title: Konfiguration
description: Stelle alle grundlegenden Funktionen für dein Ticket-System ein!
---

<center><h1>Wird überabeitet ✨</h1></center>

# Konfiguration

## Hauptkonfiguration {#main-configuration}

Um das Ticket-System zu aktivieren und grundlegende Funktionen einzustellen, besuche den Abschnitt [Hauptkonfiguration](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=main) in der Konfiguration und passe alles nach deinen Wünschen an.

|                      Feld                       |                                                                                                                                                                                                         Beschreibung                                                                                                                                                                                                         |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ticket-System aktivieren?                       | Aktiviert oder deaktiviert das Ticket-System für deinen Discord-Server.                                                                                                                                                                                                                                                                                                                                                      |
| Nutzern erlauben, Tickets per Befehl zu öffnen? | Falls aktiviert, können deine Nutzer neben Buttons und Dropdown-Menüs auch mit dem Befehl ``/ticket open`` ein Ticket erstellen.                                                                                                                                                                                                                                                                                             |
| Kategorie für neue Tickets                      | In dieser Kategorie werden neue Tickets standardmäßig erstellt. Andere Kategorien für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/ticket-system/ticket-topics).                                                                         |
| Teammitglieder-Rollen                           | Die Rollen, welche du hier auswählst, erhalten standardmäßig Zugriff auf Tickets und werden bei der Erstellung eines neuen Tickets erwähnt. Andere Rollen für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/ticket-system/ticket-topics). |
| Log-Kanal                                       | In diesen Kanal wird dein Support-Bot standardmäßig automatisch alle support-relevanten Nachrichten senden. Andere Log-Kanäle für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/ticket-system/ticket-topics).                             |
| Ticket-Nachricht                                | Diese Nachricht wird dein Bot standardmäßig senden, wenn ein Nutzer ein neues Ticket erstellt. Andere Nachrichten für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/ticket-system/ticket-topics).                                         |
| Insgesamt nur ein Ticket pro Nutzer erlauben    | Wenn aktiviert, kann ein Nutzer maximal ein Ticket gleichzeitig geöffnet haben. Andere Ticket-Limits für verschiedene Ticket-Themen kannst du auf der Seite [Ticket-Themen](https://scnx.app/glink?page=support-system/ticket-system/ticket-topics) in deinem Dashboard festlegen, mehr Infos dazu findest du [hier](/de/docs/support-bot/ticket-system/ticket-topics).                                                      |
| KI-Zusammenfassung von Ticket-Transkripten      | Wenn aktiviert, wird dein Bot nach Schließung des Tickets automatisch eine KI-generierte Zusammenfassung des Ticktes in den festgelegten Log-Kanal senden. Bitte beachte, dass hierfür das [KI-Guthaben](https://faq.scnx.app/ki-auf-scnx/) deines Servers genutzt und bestimmte Daten mit "modmail.net" (einem SCNX-Produkt) geteilt werden. Unsere Datenschutzerklärung findest du [hier](https://scootk.it/scnx-privacy). |
| Teammitgliedern erlauben, Tickets umzubenennen? | Wenn aktiviert, können Teammitglieder mit dem Befehl ``/ticket rename`` Tickets umbenennen. Beachte, dass nach manueller Bearbeitung der Bot den Namen des Tickets bei Verschiebung nicht mehr ändern wird ([falls aktiviert](/de/docs/support-bot/ticket-system/ticket-topics)).                                                                                                                                            |

## Ticketöffnungsnachricht {#ticket-open-message}

:::tip Was ist eine Ticketöffnungsnachricht?
Diese Nachricht wird in einen von dir festgelegten Kanal gesendet und erlaubt deinen Mitgliedern, entweder durch Knöpfe oder per Dropdown-Menü ein Ticket auf deinem Server zu erstellen.
Du kannst auch mehrere Nachrichten mit jeweils verschiedenen [Ticket-Themen](/de/docs/support-bot/ticket-system/ticket-topics) erstellen, um die Ticket-Erstellung auf mehrere Kanäle zu verteilen.
:::

Zum Erstellen einer neuen Ticketöffnungsnachricht, besuche den Abschnitt [Ticketöffnungsnachricht](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-opening-messages) in der Konfiguration und klicke auf den blauen Button "Ticket-Öffnungsnachricht hinzufügen". 

Sobald du ein Element hinzugefügt hast, stehen dir folgende Konfigurations-Felder zur Verfügung:

|                          Feld                          |                                                                                                        Beschreibung                                                                                                         |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kanal, in welchen die Nachricht verschickt werden soll | In diesen Kanal wird deine konfigurierte Nachricht gesendet.                                                                                                                                                                |
| Nachricht                                              | Hier kannst du den Inhalt deiner Nachricht anpassen, die dein Bot bei der Erstellung eines Tickets senden wird.                                                                                                             |
| Nur bestimmte Ticket-Themen anzeigen?                  | Wenn aktiviert, wird dein Bot nur bestimmte deiner konfigurierten [Ticket-Themen](/de/docs/support-bot/ticket-system/ticket-topics) verwenden. Falls du Knöpfe verwenden möchtest, darfst du hier maximal ein Thema wählen. |
| Knöpfe verwenden?                                      | Wenn aktiviert, wird der Bot Knöpfe anstatt des standardmäßigen Dropdown-Menüs verwenden.                                                                                                                                   |

## Ticketschließung {#ticket-closing}

Damit auch das Schließen von Tickets reibungslos funktioniert, besuche den Abschnitt [Ticketschließung](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-close) in der Konfiguration - folgende Einstellungen kannst du bei der Ticketschließung anpassen:

|                                    Feld                                     |                                                                                                          Beschreibung                                                                                                          |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ticketschließungsknopf in der Ticket-Nachricht anzeigen?                    | Wenn aktiviert, wird ein Knopf zur Ticket-Nachricht hinzugefügt, mit welchem Team-Mitglieder (oder Nutzer, falls aktiviert) das Ticket schließen können - anderenfalls müssen sie den Befehl ``/ticket close`` verwenden.      |
| Inhalt des Ticketschließungsknopfs                                          | *Nur verfügbar, wenn "Ticketschließungsknopf in der Ticket-Nachricht anzeigen?" aktiviert ist.*<br/>Hier kannst du den Text anpassen, welcher im Knopf angezeigt wird.                                                         |
| Erlauben, dass Nutzer ihre eigenen Tickets schließen?                       | Wenn aktiviert, können neben Team-Mitgliedern auch Nutzer ihre Tickets schließen.                                                                                                                                              |
| Bestätigung per Privatnachricht schicken, wenn ein Ticket geschlossen wird? | Wenn aktiviert, wird der Bot nach Schließen des Tickets eine Privatnachricht an den Nutzer senden.                                                                                                                             |
| Ticket-Schließungs-Bestätigung per Privatnachricht                          | *Nur verfügbar, wenn "Bestätigung per Privatnachricht schicken, wenn ein Ticket geschlossen wird?" aktiviert ist.*<br/>Hier kannst du die Nachricht anpassen, welcher der Bot nach Schließen des Tickets an den Nutzer sendet. |
| Transkript an die Ticket-Schließungs-Privatnachricht anhängen?              | *Nur verfügbar, wenn "Bestätigung per Privatnachricht schicken, wenn ein Ticket geschlossen wird?" aktiviert ist.*<br/>Wenn aktiviert, wird der Bot ein Transkript des Tickets an die Privatnachricht anhängen.                |

## Zusätzliche Ticketmitglieder {#additional-ticket-members}

:::tip Wozu benötigt man diese Funktion?
Mit zusätzlichen Ticketmitgliedern kannst du beispielsweise Tea-Mitglieder zu einem Ticket hinzufügen und entfernen oder weitere Mitglieder deiner Community zur Klärung eines Problems/Anfrage hinzuziehen.
:::

Um diese Funktion in deinem Ticket-System zu aktivieren, besuche den Abschnitt [Zusätzliche Ticketmitglieder](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=additional-users) in der Konfiguration und konfiguriere folgende Einstellungen:

|                                 Feld                                 |                                                                                    Beschreibung                                                                                    |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zusätzliche Ticketmitglieder erlauben?                               | Aktiviert oder deaktiviert die Funktion für dein Ticket-System.                                                                                                                    |
| Knopf zum Hinzufügen zusätzlicher Nutzer in Ticketnachricht anzeigen | Wenn aktiviert, wird ein Knopf zum Hinzufügen von Ticketmitgliedern zur Ticket-Nchricht hinzugefügt - anderenfalls müssen sie den Befehl ``/ticket users add`` verwenden.          |
| Inhalt des Nutzer-Hinzufügen Knopfs                                  | *Nur verfügbar, wenn "Knopf zum Hinzufügen zusätzlicher Nutzer in Ticketnachricht anzeigen" aktiviert ist.*<br/>Hier kannst du den Text anpassen, welcher im Knopf angezeigt wird. |
| Kann der Ticket-Besitzer weitere Nutzer hinzufügen?                  | Wenn aktiviert, können neben Team-Mitgliedern auch Nutzer weitere Mitglieder zu ihren Tickets hinzufügen.                                                                          |
| Nachricht zur Auswahl zusätzlicher Nutzer                            | Hier kannst du die Nachricht anpassen, welche dem Nutzer angezeigt wird, wenn er den Knopf geklickt oder den Befehl ausgeführt hat.                                                |
| Nachricht, wenn ein Nutzer entfernt wird                             | Hier kannst du die Nachricht anpassen, welche der Bot sendet, wenn ein Mitglied aus dem Ticket entfernt wird.                                                                      |
| Nachricht, wenn ein Nutzer hinzugefügt wird                          | Hier kannst du die Nachricht anpassen, welche der Bot sendet, wenn ein Mitglied zum Ticket hinzugefügt wird.                                                                       |

## Automatisches Ticket-Schließen {#auto-close-tickets}

Damit Tickets bei Inaktivität eines Nutzers (nach Warnung) automatisch geschlossen werden und keine ständige Nachfrage deines Teams erforderlich ist, besuche den Abschnitt [Automatisches Ticket-Schließen](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=auto-close) in der Konfiguration und stelle folgende Optionen ein:

|                               Feld                                |                                                                                                                                                                      Beschreibung                                                                                                                                                                      |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ticket automatisch schließen, wenn ein Nutzer den Server verlässt | Wenn aktiviert, wird dein Bot das Ticket automatisch schließen, falls der Nutzer deinen Server verlassen sollte.                                                                                                                                                                                                                                       |
| Inaktivitätsbenachrichtigung schicken?                            | Wenn aktiviert, wird dein Bot vor der automatischen Schließung des Tickets eine Warnung an den Nutzer senden, damit er die Möglichkeit hat, auf sein Ticket zu antworten.                                                                                                                                                                              |
| Benachrichtigungs-Nachricht                                       | *Nur verfügbar, wenn "Inaktivitätsbenachrichtigung senden?" aktiviert ist.*<br/>Hier kannst du die Nachricht anpassen, welche dein Bot als Warnung senden wird.                                                                                                                                                                                        |
| Benachrichtigungs-Zeitraum                                        | *Nur verfügbar, wenn "Inaktivitätsbenachrichtigung senden?" aktiviert ist.*<br/>Hier kannst du die Zeit anpassen, für welche der Nutzer inaktiv sein muss, um die Warnung zu senden. In welchem Format du Zeitangeben in SCNX einstellst, erfährst du [hier](https://docs.scnx.xyz/de/docs/custom-bot/additional-features/#durations).                 |
| Inaktive Tickets automatisch schließen                            | Wenn aktiviert, wird dein Bot das Ticket bei Inaktivität des Nutzers automatisch schließen.                                                                                                                                                                                                                                                            |
| Zeitfenster für das automatische Schließen von Tickets            | *Nur verfügbar, wenn "Inaktive Tickets automatisch schließen" aktiviert ist.*<br/>Hier kannst du die Zeit anpassen, für welche der Nutzer inaktiv sein muss, um das Ticket automatisch zu schließen. In welchem Format du Zeitangeben in SCNX einstellst, erfährst du [hier](https://docs.scnx.xyz/de/docs/custom-bot/additional-features/#durations). |

## Ticketerinnerungen {#ticket-reminders}

Falls ein Team-Mitglied in seinem Ticket inaktiv sein sollte, kannst du ihn mithilfe von Tickterinnerungen darauf aufmerksam machen - um diese Funktion für dein Ticket-System zu akivieren, besuche den Abschnitt [Ticketerinnerungen](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-reminders) in der Konfiguration und konfiguriere die folgenden Optionen:

|                                          Feld                                           |                                                                                                                                                                                                Beschreibung                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erinnerungskanal                                                                        | Hier kannst du den Kanal festlegen, in welchen dein Bot die Erinnerungen senden soll.                                                                                                                                                                                                                                                                                                                       |
| Letztes (oder zugewiesenes) Teammitglied erinnern?                                      | Wenn aktiviert, wird dein Bot eine Erinnerungsnachricht für das zuständige Teammitglied senden.                                                                                                                                                                                                                                                                                                             |
| Letztes Teammitglied Erinnerungszeitraum                                                | *Nur verfügbar, wenn "Letztes (oder zugewiesenes) Teammitglied erinnern?" aktiviert ist.*<br/>Hier kannst du die Zeit festlegen, in welcher das Teammitglied inaktiv sein muss, damit eine Erinnerung versendet wird. In welchem Format du Zeitangeben in SCNX einstellst, erfährst du [hier](https://docs.scnx.xyz/de/docs/custom-bot/additional-features/#durations).                                     |
| Erinnerungsnachricht für das letzte Teammitglied                                        | *Nur verfügbar, wenn "Letztes (oder zugewiesenes) Teammitglied erinnern?" aktiviert ist.*<br/>Hier kannst du die Nachricht anpassen, welche als Erinnerungsnachricht versendet wird.                                                                                                                                                                                                                        |
| Erneut erwähnen, wenn ein Ticket noch keine Antwort von einem Teammitglied erhalten hat | Wenn aktiviert, wird dein Bot eine Erinnerungsnachricht über noch nicht bearbeitete Tickets senden.                                                                                                                                                                                                                                                                                                         |
| Zeitraum vor Erinnerung aufgrund eines unausgewiesenen Tickets                          | *Nur verfügbar, wenn "Erneut erwähnen, wenn ein Ticket noch keine Antwort von einem Teammitglied erhalten hat" aktiviert ist.*<br/>Hier kannst du die Zeit einstellen, in welcher Tickets unbearbeitet sein müssen, bevor eine Erinnerung versendet wird. In welchem Format du Zeitangeben in SCNX einstellst, erfährst du [hier](https://docs.scnx.xyz/de/docs/custom-bot/additional-features/#durations). |
| Unzugewiesene Ticketerinnerungsnachricht                                                | *Nur verfügbar, wenn "Erneut erwähnen, wenn ein Ticket noch keine Antwort von einem Teammitglied erhalten hat" aktiviert ist.*<br/>Hier kannst du die Nachricht anpassen, welche als Erinnerung für noch nicht bearbeitete Tickets versendet werden soll.                                                                                                                                                   |

## Ticket-Pausierung {#ticket-hold}

### Funktionen {#ticket-hold-features}

* Setze ein Ticket in den Pausierungs-Modus, um es beispielsweise an andere Team-Mitglieder oder Gruppen weiterzuleiten.
* Informiere den Nutzer mit einer Nachricht über das Aktivieren/Deaktivieren der Pausierung in seinem Ticket.
* Sperre den Kanal, damit Mitglieder während der ausstehenden Zuweisung in einer Pausierung nicht in den Kanal schreiben können.
* Sobald ein Ticket pausiert ist, wird das [Automatische Ticket-Schließen](#auto-close-tickets) für dieses Ticket deaktiviert.

<h3>Bilder Coming soon ✨</h3>

### Einrichtung {#ticket-hold-setup}

* Besuche den Abschnitt [Ticket-Pausierung](https://scnx.app/glink?page=support-system/ticket-system/configuration?show=ticket-hold) in deinem Dashboard und [konfiguriere](#ticket-hold-configuration) verfügbare Optionen.

### Verwendung {#ticket-hold-usage}

* Um die Pausierung für ein Ticket zu aktivieren/deaktivieren, verwende den Befehl [``/ticket hold``](#ticket-hold-commands).

### Befehle {#ticket-hold-commands}

|      Befehl      |                                Beschreibung                                |
| ---------------- | -------------------------------------------------------------------------- |
| ``/ticket hold`` | Aktiviert oder deaktiviert den Pausierungs-Status für das aktuelle Ticket. |

### Konfiguration {#ticket-hold-configuration}

|                  Feld                  |                                         Beschreibung                                         |
| -------------------------------------- | -------------------------------------------------------------------------------------------- |
| Ticket-Pausierung Befehl aktivieren?   | Wenn aktiviert, ist die Ticket-Pausierung in deinem Ticket-System aktiv.                     |
| Ticket sperren, wenn es pausiert wird? | Wenn akiviert, wird der Ticket-Kanal automatisch gesperrt, sobald das Ticket pausiert wurde. |
| Pausierungsnachricht                   | Diese Nachricht wird beim Akivieren der Pausierung gesendet.                                 |
| Entpausierungsnachricht                | Diese Nachricht wird beim Deaktivieren der Pausierung gesendet.                              |

## Erweiterte Nachrichten-Konfiguration {#advanced-message-configuration}

## Statistik-Kanäle {#statistics-channels}