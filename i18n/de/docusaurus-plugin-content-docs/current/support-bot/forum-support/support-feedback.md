---
sidebar_position: 7
title: Support-Bewertungen
description: Bitte Mitglieder nach dem Schließen eines Threads, ihre Forum-Support-Erfahrung zu bewerten - mit eigenen Fragen, optionaler Anonymität und Ergebnissen in deinen Statistiken.
---

# Support-Bewertungen

Sammle nach dem Schließen eines Threads eine schnelle Sternebewertung von Mitgliedern, um zu messen, wie sich dein Team schlägt. Dabei kommt dasselbe **Dialog + Sternebewertung**-System wie bei Modmail und dem Ticket-System zum Einsatz (keine Reaktionen), und die Ergebnisse erscheinen direkt in deinem Dashboard. Bewertungen fließen auch in deine [Statistiken](/de/docs/support-bot/general/analytics) ein, einschließlich Durchschnittswerten pro Teammitglied.

## Funktionen {#features}

- Eine **Sternebewertungs**-Anfrage (ein Dialog mit einem ⭐-Bewertungsmenü), die an das Mitglied gesendet wird, wenn sein Thread geschlossen wird.
- Optionale **eigene Folgefragen** im selben Dialog.
- Optionales **anonymes** Feedback (die Identität des Mitglieds wird nicht gespeichert).
- Optional **Feedback in einen Kanal senden**, damit dein Team sie sehen kann.
- **Bewertungen im Dashboard** - sieh dir aktuelle Bewertungen und den Durchschnitt direkt auf dieser Seite an.
- Frage nur nach Threads, die eine **Mindestdauer** hatten, damit kurze oder versehentliche Threads keine Anfrage auslösen.

## Einrichtung {#setup}

1. Öffne die Seite [Support-Bewertungen](https://scnx.app/glink?page=support-system/forum-support/support-feedback) in deinem Dashboard.
2. Aktiviere Feedback und [konfiguriere](#configuration) die folgenden Optionen.

## Konfiguration {#configuration}

| Einstellung                         | Beschreibung                                                                                                          |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Feedback aktivieren**             | Bittet Mitglieder, ihre Erfahrung nach dem Schließen eines Threads zu bewerten.                                       |
| **Anonymes Feedback**               | Wenn aktiviert, wird die Identität des Mitglieds nicht mit seiner Bewertung gespeichert.                              |
| **Feedback in einen Kanal senden**  | Postet abgegebenes Feedback in einen Kanal deiner Wahl.                                                               |
| **Feedback-Kanal**                  | Der Kanal, der die Ergebnisse erhält (wenn die obige Option aktiviert ist).                                           |
| **Mindest-Thread-Dauer (Sekunden)** | Frage nur nach Feedback für Threads, die mindestens so lange offen waren, damit triviale Threads übersprungen werden. |
| **Eigene Fragen**                   | Füge dem Bewertungs-Dialog eigene Folgefragen hinzu (kurze oder lange Antworten, optional/erforderlich).              |

Die Nachrichten für die Bewertungsanfrage und nach dem Absenden kannst du direkt auf dieser Seite anpassen.

## Bewertungen ansehen {#reviews}

Diese Seite zeigt auch deine **aktuellen Bewertungen**: den Durchschnitt und eine Liste der neuesten Einsendungen (mit allen Antworten) der letzten 30 Tage - dieselbe Bewertungsansicht wie bei Modmail und dem Ticket-System.
