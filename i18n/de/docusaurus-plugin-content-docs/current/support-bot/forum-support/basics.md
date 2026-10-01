---
sidebar_position: 2
title: Starter-Guide
description: Richte Forum-Support von Grund auf ein - erstelle einen Forum-Kanal, füge ihn dem Bot hinzu, lege deine Team-Warteschlange fest und lerne, wie Mitglieder und Team den Alltag damit bestreiten.
---

# Starter-Guide (Forum-Support 101)

Dieser Guide bringt dich in wenigen Minuten von null zu einem funktionierenden öffentlichen Support-Forum. Alles erledigst du mit Schaltern und Dropdown-Menüs im Dashboard - ohne Code.

<EarlyAccessBanner
    feature="Forum-Support"
    description="Forum-Support ist eine Early-Access-Vorschau, die schrittweise ausgerollt wird. Dein SCNX-Plan ist davon unabhängig und bleibt unberührt." />

## 1. Forum-Kanal erstellen {#create-channel}

Erstelle in Discord einen **Forum**-Kanal (**Kanal erstellen → Forum**), in dem Mitglieder ihre Fragen posten. Das ist ein ganz normales öffentliches Discord-Forum - alle können die Threads lesen, und genau das ist der Sinn: Antworten bleiben sichtbar und wiederverwendbar.

:::tip
Füge deinem Forum-Kanal in Discord ein paar **Tags** hinzu (z. B. "Frage", "Bug", "Abrechnung"). Diese kannst du später in [Themen](/de/docs/support-bot/forum-support/topics) für Weiterleitung und Priority umwandeln.
:::

## 2. Kanal zu Forum-Support hinzufügen {#add-channel}

Öffne **Forum-Support** in deinem [Support-Bot-Dashboard](https://scnx.app/glink?page=support-system/manage) und gehe zur Seite [Forum-Kanäle](https://scnx.app/glink?page=support-system/forum-support/channels). Klicke auf **Forum-Kanal hinzufügen** und wähle den soeben erstellten Forum-Kanal aus. Du kannst mehrere Kanäle hinzufügen und jeden separat konfigurieren.

## 3. Team-Warteschlange einrichten {#set-up-queue}

Lege auf der Seite [Konfiguration](/de/docs/support-bot/forum-support/configuration) Folgendes fest:

- Einen **Team-Panel-Kanal** - ein Textkanal, in dem dein Team Threads übernimmt.
- Eine oder mehrere **Team-Rollen** - wer Threads beanspruchen und beantworten darf.

Das ist das Minimum. Alles andere (KI-Antworten, Auto-Close, Wartezeit-Schätzungen, Feedback, Log-Kanal, Schließ-DM) ist optional und in der [Konfigurationsanleitung](/de/docs/support-bot/forum-support/configuration) beschrieben.

## 4. Einschalten {#enable}

Aktiviere **Forum-Support aktivieren**. Ab jetzt wird jeder neue Thread in deinem Forum-Kanal zu einem Support-Ticket.

## 5. Was Mitglieder sehen {#member-experience}

Wenn ein Mitglied einen Thread postet:

1. Der Bot begrüßt es mit einer angepinnten Willkommensnachricht.
2. Wenn du [KI-Antworten](/de/docs/support-bot/forum-support/ai-deflection) aktiviert hast, versucht zuerst die KI zu helfen - das Mitglied kann auf **Ja, gelöst** oder **Nein, ich brauche einen Menschen** tippen.
3. Andernfalls wartet der Thread in deiner [Team-Warteschlange](/de/docs/support-bot/forum-support/claiming) auf dein Team.
4. Das Mitglied kann weiter im Thread antworten und sieht zwischendurch Updates (zum Beispiel eine geschätzte Wartezeit).

## 6. So arbeitet dein Team die Warteschlange ab {#staff-workflow}

Dein Team übernimmt und löst Threads über das [Team-Warteschlangen-Panel](/de/docs/support-bot/forum-support/claiming) oder mit den [`/forum`-Befehlen](/de/docs/support-bot/forum-support/commands):

1. Einen Thread **claimen** (oder **Mir zuweisen** / `/forum next`, um den nächsten zu übernehmen).
2. Dem Mitglied im offenen Thread helfen.
3. Du kannst nicht weitermachen? **Abgeben** / `/forum step-away` gibt ihn zurück in die Warteschlange.
4. Fertig? **Als gelöst markieren** oder `/forum close`.

## 7. Nach dem Schließen eines Threads {#after-close}

Je nach Einstellungen kann der Bot:

- das Mitglied nach [Feedback](/de/docs/support-bot/forum-support/support-feedback) fragen,
- dem Mitglied eine [Schließ-Nachricht](/de/docs/support-bot/forum-support/configuration#close-dm) mit Link und Transkript per DM senden und
- eine Zusammenfassung + Transkript in deinen [Log-Kanal](/de/docs/support-bot/forum-support/configuration#log-channel) posten.

Das war's - du betreibst jetzt öffentlichen Support. Als Nächstes lohnt sich ein Blick auf [Themen](/de/docs/support-bot/forum-support/topics), [Claiming](/de/docs/support-bot/forum-support/claiming) und die vollständige [Konfiguration](/de/docs/support-bot/forum-support/configuration).
