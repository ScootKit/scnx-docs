---
sidebar_position: 1
title: Support-Bot
description: Der fortschrittlichste Discord-Support-Bot mit Modmail, Ticket-System, Statistiken, KI-Zusammenfassungen und mehr  - powered by SCNX.
---

# Der fortschrittlichste Discord-Support-Bot der Welt

Baue eine erstklassige Support-Erfahrung für deine Discord-Community auf. Der SCNX Support-Bot vereint ein leistungsstarkes **Modmail-System**, ein flexibles **Ticket-System** und eine Live-**Voice-Support-Warteschlange** in einem Bot - damit hast du alles, was du brauchst, um Anfragen zu verwalten, Feedback zu sammeln und deinen Support-Workflow zu optimieren.

Egal ob du eine kleine Community oder einen großen Server mit tausenden Mitgliedern betreibst - der SCNX Support-Bot wächst mit dir. Konfiguriere Öffnungszeiten, richte automatisches Ticket-Schließen ein, aktiviere KI-gestützte Ticket-Zusammenfassungen und verfolge die Leistung deines Teams - alles über ein intuitives Dashboard.

## Drei Systeme, ein Bot {#two-systems}

|                           | [Modmail](/de/docs/support-bot/modmail/intro)                                                                                                                | [Ticket-System](/de/docs/support-bot/ticket-system/intro)                                                                               | [Voice Support](/de/docs/support-bot/voice-support/intro)                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **So funktioniert's**     | Nutzer erstellen Tickets, indem sie deinem Bot eine DM senden. Nachrichten werden zwischen den DMs des Nutzers und einem privaten Team-Kanal weitergeleitet. | Nutzer erstellen Tickets über Knöpfe, Dropdown-Menüs oder Befehle auf deinem Server. Für jedes Ticket wird ein privater Kanal erstellt. | Nutzer treten einem Sprachkanal bei, um sich in die Warteschlange zu stellen. Teammitglieder holen sie nacheinander in ihre eigenen Support-Sprachkanäle. |
| **Ideal für**             | Server, die eine private, DM-basierte Support-Erfahrung wollen. Nutzer müssen nicht in einem öffentlichen Kanal interagieren.                                | Server, die einen kanalbasierten Support-Ablauf wollen, bei dem alles direkt auf dem Server passiert.                                   | Server, die mit Nutzern per Voice sprechen möchten - Onboarding-Gespräche, 1:1-Coaching, Live-Fehlersuche.                                                |
| **Einzigartige Features** | Anonyme Nachrichten, Snippets (Schnellantworten), Tipp-Weiterleitung, Bearbeiten/Löschen von Nachrichten                                                     | Ticket-Limits pro Thema, benötigte Rollen pro Thema, Knopffarben pro Thema                                                              | Priority-Warteschlange, Wartemusik, Closed-State-Musik, Notizen & Verlauf pro Anruf, Debrief-Formular, Anruf-Thread im Dashboard-Kanal                    |

Alle drei Systeme teilen sich [allgemeine Funktionen](/de/docs/support-bot/general/bot-configuration) wie Öffnungszeiten, Formulare, Statistiken, Ticketauslastung, geschätzte Wartezeiten und mehr. Nicht sicher, welches System das richtige ist? Schau dir den [Feature-Vergleich](/de/docs/support-bot/feature-comparison) an.

:::info Voice Support ist Early Access
Voice Support ist eine Early-Access-Preview, die durch den Early-Access-Perk der [ScootKit-Mitgliedschaft](https://membership.scootkit.com) freigeschaltet wird - ein eigenes Abonnement, unabhängig von deinem SCNX-Plan. Details findest du in der [Voice-Support-Einführung](/de/docs/support-bot/voice-support/intro).
:::

## Funktionen auf einen Blick {#key-features}

- **Ticket-Themen** - Kategorisiere Tickets und leite sie automatisch an das richtige Team weiter. Jedes Thema kann eigene Kategorien, Rollen, Nachrichten und sogar eigene Formulare haben.
- **Ticket-Claiming** - Weise Tickets bestimmten Teammitgliedern zu, um doppelte Arbeit zu vermeiden. Automatische Zuweisung bei erster Antwort, Kanal sperren vor dem Claiming und mehr.
- **Formulare** - Sammle strukturierte Informationen von Nutzern mit eigenen Formularen und Modal-Dialogen - vor oder während eines Tickets.
- **Automatisches Schließen & Erinnerungen** - Schließe inaktive Tickets automatisch, sende Inaktivitäts-Warnungen und erinnere Teammitglieder an unbeantwortete Tickets.
- **Öffnungszeiten & Feiertage** - Lege tägliche Öffnungszeiten fest, erkenne Feiertage automatisch und informiere Nutzer über längere Wartezeiten.
- **Support-Feedback** - Sammle Sternebewertungen und eigene Feedback-Fragen von Nutzern nach dem Schließen ihres Tickets.
- **Statistik-Dashboard** - Verfolge offene Tickets, durchschnittliche Antwortzeit, Schließungszeit, aktivste Teammitglieder, meist verwendete Themen und mehr.
- **Geschätzte Wartezeit** - Berechne und zeige geschätzte Wartezeiten automatisch basierend auf historischen Ticket-Daten an.
- **Ticketauslastung** - Überwache die Ticket-Kapazität mit einem zweistufigen Warnsystem und informiere Nutzer bei hoher Auslastung.
- **KI-Ticket-Zusammenfassungen** - Erhalte eine KI-generierte Zusammenfassung für jedes geschlossene Ticket, direkt in deinem Log-Kanal.
- **modmail.net Integration** - Betrachte Ticket-Transkripte in einer modernen Web-Oberfläche statt als Textdateien.
- **Blockierungsliste** - Sperre Nutzer, die gegen Regeln verstoßen, mit optionaler Dauer und Begründung.
- **Wartungsmodus** - Deaktiviere die Ticket-Erstellung vorübergehend, wenn dein Team nicht verfügbar ist.
- **Eigenes Branding** - Lege deine eigene Embed-Fußzeile und ein eigenes Bild fest, passend zur Identität deines Servers.
- **Voice Support** (Early Access) - Biete Live-Voice-Support an. Nutzer treten einem Sprachkanal bei, um in die Warteschlange zu kommen; Teammitglieder holen sie einzeln in ihre eigenen Sprachkanäle - mit optionaler Wartemusik, Notizen pro Anruf, Anruf-Threads, Debrief-Formularen und Nutzer-Feedback.

## Erste Schritte {#getting-started}

1. Richte deinen Support-Bot im [SCNX-Dashboard](https://scnx.app/glink?page=support-system/manage) ein.
2. Konfiguriere allgemeine Einstellungen in der [Bot-Konfiguration](/de/docs/support-bot/general/bot-configuration).
3. Aktiviere [Modmail](/de/docs/support-bot/modmail/configuration) und/oder das [Ticket-System](/de/docs/support-bot/ticket-system/configuration).
4. Richte [Ticket-Themen](/de/docs/support-bot/modmail/ticket-topics), [Formulare](/de/docs/support-bot/general/forms) und [Öffnungszeiten](/de/docs/support-bot/general/opening-hours) ein.
5. Teile den [Modmail Starter-Guide](/de/docs/support-bot/modmail/basics) oder das [Ticket-System 101](/de/docs/support-bot/ticket-system/basics) mit deinem Team.

## Brauchst du Hilfe? {#need-help}

Wenn du auf Probleme stößt, schau dir unsere [Fehlerbehebung](/de/docs/support-bot/troubleshooting) an oder erstelle ein Ticket auf unserem [Discord-Server](https://scootk.it/dc-de).
