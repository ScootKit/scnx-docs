---
sidebar_position: 5
title: Ticket-Claiming
description: Weise Modmail-Tickets Teammitgliedern zu, automatische Zuweisung bei erster Antwort und Sichtbarkeit von beanspruchten Tickets steuern.
---

# Ticket-Claiming

## Funktionen {#features}

* Aktiviere das Claimen von Tickets, um zu verhindern, dass Tickets doppelt bearbeitet werden.
* Weise dem ersten Teammitglied, das antwortet, automatisch das Ticket zu.
* Verstecke Tickets, die keinem Teammitglied zugewiesen sind.
* Sperre den Kanal bevor ein Ticket geclaimed wurde, sodass nur das zugewiesene Teammitglied antworten kann.
* Konfiguriere, ob nicht zugewiesene Teammitglieder geclaimte Tickets einsehen oder darin schreiben können.



## Einrichtung {#setup}

* Besuche die Seite [Ticket-Claiming](https://scnx.app/glink?page=support-system/modmail/claiming) in deinem Dashboard.
* [Konfiguriere](#configuration) verfügbare Optionen.

## Befehle {#commands}

<SlashCommandExplanation />

| Befehl | Beschreibung |
| --- | --- |
| ``/modmail claim`` | Claimt das aktuelle Ticket und weist es dir zu. |
| ``/modmail remove-claim`` | Entfernt deine Zuweisung vom aktuellen Ticket. |
| ``/modmail assign user:<User>`` | Weist einem bestimmten Teammitglied das aktuelle Ticket zu. |

## Konfiguration {#configuration}

### Hauptkonfiguration {#main-configuration}

| Feld | Beschreibung |
| --- | --- |
| Ticket-Claiming aktivieren? | Aktiviert oder deaktiviert die Claiming-Funktion für dein Modmail-System. |
| Ticket-Claiming erforderlich? | Wenn aktiviert, müssen Teammitglieder ein Ticket claimen, bevor sie darauf antworten können.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Ticket-Claiming aktivieren?" aktiviert ist.*</blockquote></details></small> |
| Geclaimte Tickets für alle Teammitglieder sichtbar? | Wenn aktiviert, können alle Teammitglieder geclaimte Ticket-Kanäle sehen. Wenn deaktiviert, kann nur das zugewiesene Teammitglied sie sehen.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Ticket-Claiming aktivieren?" aktiviert ist.*</blockquote></details></small> |
| Nicht-zugewiesene Teammitglieder können schreiben? | Wenn aktiviert, können nicht-zugewiesene Teammitglieder in geclaimten Ticket-Kanälen schreiben (Nachrichten werden nicht an den Nutzer übertragen).<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Ticket-Claiming aktivieren?" aktiviert ist.*</blockquote></details></small> |
| Zugewiesenes Teammitglied bei Verschiebung entfernen? | Wenn aktiviert, wird das zugewiesene Teammitglied entfernt, wenn das Ticket in ein anderes Thema verschoben wird.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Ticket-Claiming aktivieren?" aktiviert ist.*</blockquote></details></small> |
| Ersten Antworter automatisch zuweisen? | Wenn aktiviert, wird das erste Teammitglied, das im Ticket-Kanal antwortet, automatisch als verantwortliches Teammitglied zugewiesen.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Ticket-Claiming aktivieren?" aktiviert ist.*</blockquote></details></small> |

### Erweiterte Nachrichten-Konfiguration {#advanced-message-configuration}

| Feld | Beschreibung |
| --- | --- |
| Zuweisungsnachricht senden? | Wenn aktiviert, wird dem Nutzer eine Nachricht gesendet, wenn ein Teammitglied zugewiesen wird.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Ticket-Claiming aktivieren?" aktiviert ist.*</blockquote></details></small> |
| Zuweisungsnachricht | Diese Nachricht wird dem Nutzer gesendet, wenn ein Teammitglied seinem Ticket zugewiesen wird.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Zuweisungsnachricht senden?" aktiviert ist.*</blockquote></details></small> |
| Nachricht bei Entfernung der Zuweisung senden? | Wenn aktiviert, wird dem Nutzer eine Nachricht gesendet, wenn ein Teammitglied vom Ticket entfernt wird.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Ticket-Claiming aktivieren?" aktiviert ist.*</blockquote></details></small> |
| Nachricht bei Entfernung der Zuweisung | Diese Nachricht wird dem Nutzer gesendet, wenn die Zuweisung entfernt wird.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Nachricht bei Entfernung der Zuweisung senden?" aktiviert ist.*</blockquote></details></small> |
| Nachricht bei ausstehender Zuweisung senden? | Wenn aktiviert, wird dem Nutzer eine Nachricht gesendet, während noch kein Teammitglied zugewiesen wurde.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Ticket-Claiming erforderlich?" aktiviert ist.*</blockquote></details></small> |
| Nachricht bei ausstehender Zuweisung | Diese Nachricht wird gesendet, während das Ticket darauf wartet, von einem Teammitglied geclaimed zu werden.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn "Nachricht bei ausstehender Zuweisung senden?" aktiviert ist.*</blockquote></details></small> |