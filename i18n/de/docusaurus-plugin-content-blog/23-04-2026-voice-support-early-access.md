---
slug: voice-support-early-access
title: "Voice Support, jetzt im Early Access"
description: "Der SCNX Support-Bot bekommt ein drittes System - eine Live-Voice-Warteschlange. Ab heute für Inhaber der ScootKit-Mitgliedschaft mit Early-Access-Perk; in ein paar Monaten kostenlos für alle auf SCNX."
date: 2026-04-23T10:00
authors:
  - scderox
tags:
  - Support Bot
  - Voice Support
  - Early Access
  - SCNX
image: ../../../blog/assets/23-04-2026-voice-support-early-access/de.jpg
---

Wir haben dem Support-Bot ein drittes System hinzugefügt: **Voice Support**, eine Live-Voice-Warteschlange. Nutzer
treten einem Sprachkanal bei, dein Team holt sie nacheinander in einen Support-Kanal, und der Bot erledigt dazwischen
die Warteschlange, Wartezeit-DMs, Notizen, Thread-Archivierung und Feedback.

![Symbolbild des Voice-Support-Dashboard-Embeds mit Warteschlange, aktiven Anrufen und der Positions-DM eines Nutzers](@site/blog/assets/23-04-2026-voice-support-early-access/de.jpg)

Startet heute im Early Access für Inhaber des Early-Access-Perks
der [ScootKit-Mitgliedschaft](https://membership.scootkit.com). Wie alles, was wir auf diesem Weg veröffentlichen, wird
es in etwa 3 bis 4 Monaten für jeden SCNX-Server kostenlos verfügbar sein.

<!-- truncate -->

## Der Entwicklungsweg, auf Video

Ich habe während der Entwicklung zwei Updates auf YouTube gepostet - eher „hier ist, woran ich arbeite" als polierte
Produktdemos. Die Videos sind roher als das, was heute im Dashboard landet (Benennungen, UI und einige Abläufe haben
sich seitdem geändert), aber wer sehen möchte, wie Voice Support tatsächlich entstanden ist, bekommt hier die ehrliche
Version.

Members haben diese Videos schon gesehen, als sie hochgeladen wurden. Jetzt sind sie für alle da.

<Video url="https://youtu.be/tUVS5tE5mOg" />

<Video url="https://youtu.be/2PUBNawPE0k" />

## Was es macht

Aus Nutzer-Sicht:

1. Tritt dem konfigurierten Warteschlangen-Sprachkanal bei.
2. Der Bot schickt dir eine DM mit deiner Position und einer geschätzten Wartezeit. Die DM aktualisiert sich
   automatisch, während die Warteschlange sich bewegt.
3. Sobald dich ein Teammitglied holt, wirst du in dessen Support-Kanal verschoben.
4. Das Gespräch läuft. Am Ende kannst du es optional bewerten.

Aus Team-Sicht:

1. Sitze in einem beliebigen Sprachkanal innerhalb der konfigurierten Support-Kategorie.
2. Klicke **Nächsten Nutzer holen** im Dashboard oder nutze `/voice next`.
3. Der Nutzer landet in deinem Kanal. Knöpfe im Voice-Chat erlauben dir, Notizen hinzuzufügen, die bisherigen Sessions
   des Nutzers nachzuschlagen oder den Anruf zu beenden.
4. Wenn Debriefs aktiv sind, öffnet sich nach dem Gespräch ein Formular. Wenn Feedback aktiv ist, erhält der Nutzer eine
   Bewertungs-DM.

Zwei Status-Modi decken die häufigsten Fälle ab:

- **Staff Presence** - offen, sobald mindestens ein Teammitglied im Voice ist.
- **Opening Hours** - offen während der konfigurierten Geschäftszeiten, unabhängig davon, wer online ist. Kombinierbar
  mit einem Staff-Summon-Ping, der ausgelöst wird, wenn Nutzer ankommen, aber kein Team verbunden ist.

## Der Rest der Funktionsliste

- **Priority-Warteschlange** über konfigurierbare Rollen.
- **Wartemusik** (Playlist pro Kanal, plus separate Closed-State-Playlist für Zuhörer außerhalb der Öffnungszeiten).
- **KI-generiertes Audio** - ein **Generate (AI)**-Tab im Audio-Picker produziert TTS-Clips und Hintergrundmusik,
  bezahlt in KI-Coins. [Details hier](/de/docs/support-bot/voice-support/ai-audio).
- **Notizen pro Anruf** und **Anrufhistorie** (10 vorherige Sessions pro Nutzer, jeweils mit Dauer, zugewiesenem Team
  und aktuellen Notizen inline).
- **Anruf-Threads** unter deinem Dashboard-Kanal, vorausgefüllt mit dem bisherigen Kontext des Nutzers.
- **Debrief-Formular** für Teammitglieder, **Feedback-DM** für Nutzer, beide optional und mit Logging.
- **Nutzer-Blocklist** mit optionalem Grund und Ablaufdatum.
- **Adaptive Wartezeitschätzung** basierend auf einem rollierenden Fenster aktueller Anrufe.

Vollständige Referenz: [Voice-Support-Dokumentation](/de/docs/support-bot/voice-support/intro).

## Zugang bekommen

Voice Support braucht zwei Dinge:

1. Einen aktiven SCNX **Unlimited**- oder **Professional**-Plan (wie der gesamte Support-Bot - auf dem kostenlosen Starter-Plan nicht verfügbar).
2. Den Early-Access-Perk der [ScootKit-Mitgliedschaft](https://membership.scootkit.com) (die Mitgliedschaft ist ein eigenes Abonnement, unabhängig von deinem SCNX-Plan).

Wenn beides da ist, ist der Voice-Support-Bereich jetzt in deinem [Support-Bot-Dashboard](https://scnx.app/de/glink?page=support-system/manage) verfügbar. Aktiviere den Schalter, wähle einen Warteschlangen-Kanal, eine Support-Kategorie und einen Dashboard-Kanal.

Wenn du das Perk nicht hast, gibt's zwei Optionen: jetzt holen und Voice Support heute nutzen, oder 3 - 4 Monate auf die
allgemeine Veröffentlichung warten und es ohne Abonnement bekommen.

### Zur Mitgliedschaft

Ehrliche Antwort zuerst: Die ScootKit-Mitgliedschaft existiert, weil diese Art von Entwicklung echtes Geld kostet. Monate an Arbeit, Infrastruktur, laufendes Tuning - das muss irgendwer bezahlen, und die Mitgliedschaft ist unser Weg dafür. Das ist der erste Grund für das Abo, und wir sagen das lieber direkt, als es zu verpacken.

Was ebenfalls stimmt, und nicht als Deckmantel für die Finanzierung gedacht ist: Die Art, wie wir Early Access fahren, gibt uns ein echtes Testfenster. Voice Support zuerst ein paar Dutzend Mitgliedern zu geben bedeutet, dass wir Edge Cases erwischen, die unsere eigenen Testserver nicht treffen, UX-Kanten, die wir im Test nicht gemerkt haben, und Abläufe, die unser Team nicht fährt. Bis Voice Support bei jedem SCNX-Server landet, ist es eine bessere Funktion, weil diese Mitglieder vorher daran gerüttelt haben. Das ist ein echter zweitrangiger Effekt, den wir nicht aktiv so designt haben, aus dem wir aber real profitieren.

Mitglieder bekommen außerdem die Sachen, die nebenbei entstehen: Entwicklungs-Vlogs, Sneak Peeks, gelegentliche Deep Dives in das, was wir als Nächstes bauen. Die beiden Videos oben waren ursprünglich Mitglieder-Content. Davon kommt regelmäßig mehr.

Nichts hinter dem Perk ist dauerhaft exklusiv. Alles, was wir im Early Access ausliefern, wird auf der 3- bis 4-Monats-Uhr für jeden SCNX-Server freigeschaltet. Wenn das Modell für dich passt: willkommen an Bord. Wenn nicht: bis zur allgemeinen Verfügbarkeit - mit einem besseren Produkt, als es ohne die Leute gewesen wäre, die vorher eingestiegen sind.

## Feedback

Voice Support ist nicht ohne Grund im Early Access. Edge Cases, die wir noch nicht getroffen haben, Abläufe, die sich
auf größeren Servern als unserem seltsam anfühlen, Features, die wir rausgeschnitten haben und wahrscheinlich nicht
hätten sollen - das ist das Zeitfenster, uns das zu sagen. Schreibt in den [SCNX Discord](https://scootk.it/dc-de) oder
auf [Featureboard](https://featureboard.net).

Grüße aus München,\
\- Simon
