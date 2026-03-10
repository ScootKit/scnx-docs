---
sidebar_position: 5
title: Statistiken
description: Verfolge die Leistung deines Discord-Supports mit detaillierten Statistiken, Antwortzeiten und Team-Aktivitäten.
---

# Statistiken

## Funktionen {#features}

* Sieh dir die wichtigsten Kennzahlen deiner Support-Tickets auf einen Blick an — direkt in deinem SCNX-Dashboard.
* Verfolge die Anzahl offener Tickets, Gesamtanzahl der Tickets und durchschnittliche Nachrichten pro Ticket.
* Überwache die durchschnittliche Schließungszeit und die durchschnittliche erste Antwortzeit, um die Effizienz deines Teams zu messen.
* Sieh dir die am häufigsten verwendeten Schließgründe und Ticket-Themen in Kreisdiagrammen an.
* Zeige eine Grafik der täglich geöffneten Tickets der letzten 30 Tage an, um Trends zu erkennen.
* Identifiziere deine aktivsten Teammitglieder mit einem Leaderboard, das gesendete Nachrichten, durchschnittliche Antwortzeit und bearbeitete Tickets zeigt.
* Sieh dir die durchschnittliche Bewertung und die Gesamtzahl der Feedback-Einsendungen an.
* Filtere Statistiken nach System (Modmail, Ticket-System oder kombiniert) über Tabs.
* Nutze den `/analytics` Slash-Befehl, um serverweite oder persönliche Statistiken direkt in Discord anzuzeigen.

<h4>Bilder Coming Soon ✨</h4>

## Einrichtung {#setup}

* Besuche die Seite [Statistiken](https://scnx.app/glink?page=support-system/analytics) in deinem Dashboard.
* Nutze die Tabs oben, um zwischen kombinierten, Modmail- oder Ticket-System-Statistiken zu wechseln.

## Befehle {#commands}

<SlashCommandExplanation />

Die folgenden Befehle sind verfügbar, wenn sie in der [Team-Befehle Konfiguration](/de/docs/support-bot/general/bot-configuration#staff-commands) aktiviert sind:

| Befehl | Beschreibung |
| --- | --- |
| ``/analytics`` | Zeigt serverweite Statistiken für dein Support-System (offene Tickets, durchschnittliche Antwortzeit, durchschnittliche Schließungszeit, Bewertung und mehr). |
| ``/analytics staff:<Nutzer>`` | Zeigt Statistiken für ein bestimmtes Teammitglied (gesendete Nachrichten, durchschnittliche Antwortzeit, bearbeitete Tickets). |

## Verfügbare Kennzahlen {#available-metrics}

### Übersicht-Kennzahlen

| Kennzahl | Beschreibung |
| --- | --- |
| Offene Tickets | Die Anzahl der aktuell offenen Tickets in allen Systemen. |
| Tickets gesamt (30 Tage) | Die Gesamtanzahl der in den letzten 30 Tagen erstellten Tickets. |
| Durchschnittliche Nachrichten pro Ticket | Die durchschnittliche Anzahl der ausgetauschten Nachrichten pro Ticket vor dem Schließen. |
| Durchschnittliche Schließungszeit | Die durchschnittliche Zeit von der Ticket-Erstellung bis zum Schließen. Hilft dir zu verstehen, wie schnell Probleme gelöst werden. |
| Durchschnittliche erste Antwortzeit | Die durchschnittliche Zeit, bis ein Teammitglied zum ersten Mal auf ein neues Ticket antwortet. Eine wichtige Kennzahl für die Nutzerzufriedenheit. |
| Durchschnittliche Bewertung | Die durchschnittliche Sternebewertung aus Nutzer-Feedback-Einsendungen (wenn [Support-Feedback](/de/docs/support-bot/modmail/support-feedback) aktiviert ist). |
| Bewertungen gesamt | Die Gesamtanzahl der eingegangenen Feedback-Einsendungen. |

### Diagramme & Aufschlüsselungen

| Diagramm | Beschreibung |
| --- | --- |
| Meist verwendete Schließgründe | Ein Kreisdiagramm, das die Verteilung der Schließgründe über alle Tickets zeigt. Hilft dir zu verstehen, warum Tickets geschlossen werden. |
| Meist verwendete Ticket-Themen | Ein Kreisdiagramm, das die Verteilung der Ticket-Themen zeigt. Hilft dir zu erkennen, welche Themen die meiste Nachfrage erzeugen. |
| Tickets pro Tag | Ein Liniendiagramm, das zeigt, wie viele Tickets pro Tag in den letzten 30 Tagen geöffnet wurden. Nützlich, um Trends und Stoßzeiten zu erkennen. |

### Team-Leaderboard

| Kennzahl | Beschreibung |
| --- | --- |
| Gesendete Nachrichten | Die Gesamtanzahl der von jedem Teammitglied gesendeten Nachrichten über alle Tickets. |
| Durchschnittliche Antwortzeit | Die durchschnittliche Zeit, die jedes Teammitglied zum Antworten auf Tickets benötigt. |
| Beantwortete Tickets | Die Gesamtanzahl der einzelnen Tickets, an denen jedes Teammitglied teilgenommen hat. |
