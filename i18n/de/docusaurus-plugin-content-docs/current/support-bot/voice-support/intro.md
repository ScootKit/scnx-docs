---
sidebar_position: 1
title: Sprachsupport
description: Biete Live-Sprachsupport auf Discord an - Nutzer reihen sich durch Beitreten eines Sprachkanals in die Warteschlange ein, das Team holt sie nacheinander in private Support-Kanäle.
---

# Sprachsupport

<EarlyAccessBanner
    feature="Sprachsupport"
    description="Sprachsupport ist eine Early-Access-Vorschau - verfügbar für Server, deren Besitzer das Early-Access-Perk der ScootKit Membership besitzt. Die Funktion wird anhand von Feedback weiterentwickelt, und die Membership schaltet sie frei. Dein SCNX-Tarif ist davon unabhängig und bleibt unverändert." />

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: false}} additionalDetails={{
UNLIMITED: "Erfordert während der Vorschau das Early-Access-Perk der ScootKit Membership.",
PROFESSIONAL: "Erfordert während der Vorschau das Early-Access-Perk der ScootKit Membership."}} />

## Was ist Sprachsupport? {#what-is-it}

Mit Sprachsupport können deine Nutzer per Sprache mit deinem Team sprechen - statt oder zusätzlich zu Text-Tickets. Nutzer betreten einen einzelnen **Warteschlangen-Sprachkanal**; das Team sitzt in eigenen **Support-Kanälen** und holt Nutzer nacheinander aus der Warteschlange. Der Bot verwaltet die Warteschlange, hält Nutzer per DM auf dem Laufenden, spielt Wartemusik ab und protokolliert optional jedes Gespräch mit Notizen, einem privaten Thread, einer Team-Nachbesprechung und Nutzer-Feedback.

Sprachsupport läuft als drittes System neben [Modmail](/de/docs/support-bot/modmail/intro) und dem [Ticket-System](/de/docs/support-bot/ticket-system/intro) - du kannst beliebige Kombinationen der drei aktivieren.

## So läuft es für Nutzer ab {#user-flow}

1. Ein Nutzer betritt den konfigurierten **Warteschlangen-Sprachkanal**.
2. Der Bot öffnet eine DM mit ihm und zeigt Position und geschätzte Wartezeit an. Die DM aktualisiert sich automatisch, wenn die Warteschlange vorrückt.
3. Wenn ein Teammitglied auf **Pull Next User** klickt (oder `/voice next` ausführt), verschiebt der Bot den Nutzer in den Support-Kanal des Teammitglieds und bearbeitet die DM zu „Connected".
4. Wenn das Gespräch endet - das Team klickt auf **End Call**, trennt die Verbindung oder der Nutzer verlässt den Kanal - trennt der Bot den Nutzer, archiviert einen eventuellen Thread und fragt optional nach Feedback.

Nutzer mit einer der konfigurierten [Prioritätsrollen](/de/docs/support-bot/voice-support/configuration#priority-roles) werden in der Warteschlange vor normalen Nutzern bedient.

## So läuft es für das Team ab {#staff-flow}

1. Ein Teammitglied betritt einen beliebigen Sprachkanal innerhalb der konfigurierten **Support-Kategorie** (außer dem Warteschlangen-Kanal selbst).
2. Der Bot erkennt es als verfügbar - im Status-Modus `staff-presence` öffnet dies außerdem Sprachsupport für Nutzer.
3. Wartet ein Nutzer, klickt das Teammitglied im [Dashboard](/de/docs/support-bot/voice-support/configuration#dashboard-channel) auf **Pull Next User** oder führt in seinem Support-Kanal `/voice next` aus. Der Nutzer wird verschoben.
4. Während des Gesprächs kann das Team Notizen hinzufügen, den bisherigen Sprachsupport-Verlauf des Nutzers einsehen oder das Gespräch beenden - alles über Knöpfe im Text-Chat des Sprachkanals.
5. Nach dem Gespräch füllt das Team optional ein [Nachbesprechungs-Formular](/de/docs/support-bot/voice-support/configuration#debrief) aus, und der Nutzer erhält optional eine [Feedback-Anfrage](/de/docs/support-bot/voice-support/configuration#user-feedback).

## Wann Sprachsupport „geöffnet" ist {#state-modes}

Sprachsupport kann zwei Zustände haben: **geöffnet** (Nutzer können sich einreihen) oder **offline** (Nutzer erreichen dein Team nicht). Zwei Status-Modi legen fest, welcher Zustand gilt:

| Modus            | Wann geöffnet ist                                                                                                                                                                                                                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `staff-presence` | Immer dann, wenn mindestens ein Teammitglied in einem Support-Kanal sitzt. Dies ist die Standardeinstellung - sobald alle Teammitglieder den Sprachkanal verlassen, schließt die Warteschlange automatisch.                                                                                                                                          |
| `opening-hours`  | Während der für deinen Bot konfigurierten [Öffnungszeiten](/de/docs/support-bot/general/opening-hours), unabhängig davon, ob Teammitglieder im Sprachkanal sind. Kombiniere dies mit [Team-Benachrichtigung](/de/docs/support-bot/voice-support/configuration#staff-summon), um dein Team zu pingen, wenn Nutzer warten, aber niemand verbunden ist. |

Solange Sprachsupport offline ist, kannst du den Kanal optional entsperrt lassen und [Musik für den geschlossenen Zustand](/de/docs/support-bot/voice-support/configuration#closed-music) abspielen, damit Nutzer im Kanal warten können, bis du wieder öffnest.

## Hauptkomponenten {#components}

| Komponente                | Zweck                                                                                                                                                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Warteschlangen-Kanal**  | Der Sprachkanal, den Nutzer betreten, um sich einzureihen. Kann innerhalb oder außerhalb der Support-Kategorie liegen.                                                                                                                         |
| **Support-Kategorie**     | Eine Discord-Kategorie, deren Sprachkanäle (außer dem Warteschlangen-Kanal) als Support-Kanäle für das Team behandelt werden. Nutzer werden in diese Kanäle geholt.                                                                            |
| **Dashboard-Kanal**       | Ein Textkanal, in dem der Bot ein Live-Status-Embed postet - geöffnet/offline, Anzahl Teammitglieder, aktuelle Warteschlange, aktive Gespräche und ein **Pull Next User**-Knopf.                                                               |
| **Thread-Modus**          | Optional: Wenn ein Teammitglied einen Nutzer holt, erstellt der Bot einen privaten Thread unter dem Dashboard-Kanal mit Gesprächsdaten, bisherigem Verlauf und Knöpfen. Notizen, Nachbesprechungen und Feedback werden in den Thread gepostet. |
| **Team-Benachrichtigung** | Optional: Der Bot postet einen Ping in einen konfigurierten Kanal, entweder wenn Nutzer warten, aber kein Teammitglied verbunden ist (nur im Modus „opening-hours"), oder bei jedem Eintritt in die Warteschlange.                             |

## Wichtige Funktionen {#features}

- **Prioritäts-Warteschlange** - stufe Nutzer mit Prioritätsrollen vor normalen Nutzern ein.
- **Blockierungsliste pro Nutzer** - `/voice blacklist add` sperrt einen Nutzer für die Warteschlange, optional mit Grund und Ablaufdatum.
- **Notizen** - das Team kann private Notizen zu jedem Gespräch schreiben; sie werden späteren Teammitgliedern angezeigt, die denselben Nutzer betreuen.
- **Gesprächsverlauf** - sieh dir jede bisherige Voice-Sitzung (abgeschlossen oder abgebrochen) eines Nutzers samt Notizen an.
- **Wartemusik** - spiele eine Liste von Audiotiteln in Schleife im Warteschlangen-Kanal ab, während Nutzer warten. Eine separate Titelliste für den geschlossenen Zustand spielt, wenn Sprachsupport offline ist.
- **KI-Audio-Generierung** - erzeuge Sprachansagen und Hintergrundmusik für deine Playlists direkt im Dashboard, abgerechnet in AI Coins. Siehe [KI-Audio-Generierung](/de/docs/support-bot/voice-support/ai-audio).
- **Warteschlangen-Kanal bei Zustandswechsel umbenennen** - benenne den Warteschlangen-Kanal optional je nach Zustand um (z.B. `voice-support` ↔ `voice-support-closed`).
- **Warteschlangen-Kanal sperren, wenn der Support geschlossen ist** - verweigere optional die Berechtigung `Connect` im Warteschlangen-Kanal, solange Sprachsupport offline ist.
- **Team-Debrief** - konfigurierbares Formular, das das Team am Ende eines Gesprächs ausfüllt; die Antworten werden im Thread und optional in einem Nachbesprechungs-Kanal protokolliert.
- **Nutzer-Feedback** - optionale Sterne-Bewertung per DM nach einem Gespräch, mit eigenen Nachfragen und einer Option für Anonymität.
- **Geschätzte Wartezeit** - adaptive Schätzung auf Basis eines gleitenden Fensters der letzten Gespräche (und im Modus `opening-hours` zusätzlich eines gleitenden Durchschnitts der „Zeit, bis Teammitglieder online sind").

## Erste Schritte {#getting-started}

1. Hole dir das **Early-Access**-Perk in der [ScootKit Membership](https://membership.scootkit.com) - es schaltet Sprachsupport (und zukünftige Vorschau-Funktionen) für jeden Server frei, den du verwaltest.
2. Öffne **Sprachsupport** in deinem [Support-Bot-Dashboard](https://scnx.app/glink?page=support-system/manage).
3. Folge der [Konfigurationsanleitung](/de/docs/support-bot/voice-support/configuration) - mindestens benötigst du einen Warteschlangen-Kanal, eine Support-Kategorie, einen Dashboard-Kanal und mindestens eine Team-Rolle.
4. Klicke auf **Sprachsupport aktivieren**.
5. Nutze die [`/voice`-Befehle](/de/docs/support-bot/voice-support/commands) in einem beliebigen Support-Kanal, um Gespräche zu verwalten.
