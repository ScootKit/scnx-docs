---
sidebar_position: 6
title: Events
description: Zeige deine kommenden geplanten Discord-Events auf deiner SCNX-Website mit dem Events-Block.
---

# Events

Der **Events**-Block zeigt die kommenden geplanten Discord-Events deiner Community auf deiner Website, sodass Besucher sehen, was ansteht, ohne erst Discord zu öffnen.

## So funktioniert es {#how-it-works}

Events werden direkt aus den **geplanten Discord-Events** deines Servers geladen. Du trägst sie nicht auf deiner Website ein. Du erstellst sie in Discord, und der Block zeigt die kommenden automatisch.

Füge den Block auf einer beliebigen Seite hinzu, und für jedes kommende Event zeigt er:

- den Namen des Events,
- die Startzeit im lokalen Format deiner Besucher,
- eine kurze Beschreibung,
- das Titelbild, falls das Event eines hat,
- einen **View on Discord**-Link, der das Event in Discord öffnet.

Du kannst festlegen, **wie viele Events** gezeigt werden, und einen **Countdown bis zum nächsten Event** einschalten.

## Events in Discord erstellen {#create-in-discord}

Events kommen aus Discord, also erstellst du sie dort:

1. Öffne in deinem Discord-Server das Servernamen-Menü und wähle **Events**, oder nutze den Events-Tab.
2. Klick auf **Event erstellen**.
3. Lege fest, wo es stattfindet (ein Sprachkanal, eine Bühne oder anderswo), gib ihm einen Namen, ein Datum und eine Uhrzeit und optional eine Beschreibung und ein Titelbild.
4. Speichere es.

Das Event gilt bis zu seiner Startzeit als "kommend" und erscheint im Events-Block. Ist es vorbei, verschwindet es von selbst.

## Leerer Zustand {#empty-state}

Gibt es keine kommenden Events, zeigt der Block eine freundliche "no upcoming events"-Meldung statt eines Fehlers. Dasselbe passiert, wenn wir deine Events aus irgendeinem Grund nicht lesen können (zum Beispiel wenn der Bot fehlt oder keinen Zugriff hat): der Block zeigt einfach den leeren Zustand und macht deine Seite nie kaputt.

Während du bearbeitest, zeigt der Block Beispiel-Events als Platzhalter, damit du siehst, wie er aussehen wird.

:::note Keine Anmeldungen auf der Website
Besucher treten Events bei und melden sich in Discord an, über den **View on Discord**-Link. Auf der Website selbst gibt es keine separate Anmeldung.
:::
