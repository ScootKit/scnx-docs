---
sidebar_position: 6
title: Events
description: Zeige deine kommenden geplanten Discord-Events auf deiner SCNX-Website mit dem Events-Block.
unlisted: true
---

# Events

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Der **Events**-Block zeigt die kommenden geplanten Discord-Events deiner Community auf deiner Website, sodass Besucher sehen, was ansteht, ohne erst Discord zu öffnen.

## So funktioniert es {#how-it-works}

Events werden direkt aus den **geplanten Discord-Events** deines Servers geladen. Du trägst sie nicht auf deiner Website ein. Du erstellst sie in Discord, und der Block zeigt die kommenden automatisch. Der SCNX-Bot deines Servers liest die Events für dich aus, der Bot muss also auf deinem Server sein.

Füge den Block auf einer beliebigen Seite hinzu. Du findest ihn in der Blockauswahl unter **Inhalt**. Für jedes kommende Event zeigt er:

- den Namen des Events,
- wann es beginnt (und endet, wenn das Event eine Endzeit hat), in der Zeitzone deiner Besucher,
- eine kurze Beschreibung (lange Beschreibungen werden gekürzt, der volle Text bleibt auf Discord),
- das Titelbild, falls das Event eins hat,
- einen Link **Auf Discord ansehen**, der das Event in Discord öffnet.

Events sind immer live. Sie gehören nicht zu einer Veröffentlichung, ein neues Event erscheint also auf deiner Website, ohne dass du neu veröffentlichst. Es kann ein paar Minuten dauern, bis es auftaucht.

## Block-Optionen {#options}

Wähle den Block aus, um seine Optionen im rechten Panel zu sehen:

- **Wie viele Events** - wie viele Event-Karten angezeigt werden, die nächsten zuerst.
- **Countdown bis zum nächsten Event** - fügt über den Karten einen Live-Countdown hinzu, mit dem Namen des nächsten Events, das noch nicht begonnen hat.

Das Panel zeigt dir außerdem, wie viele kommende Events dein Server gerade hat. So weißt du schon vor dem Veröffentlichen, ob der Block etwas anzeigen wird.

Der Block hat keinen eigenen Text zum Bearbeiten. Während du bearbeitest, zeigt die Leinwand zwei Beispiel-Events, damit du siehst, wie das Layout aussieht. Die echten Events erscheinen nur auf deiner Live-Website und in der Vorschau.

## Events in Discord erstellen {#create-in-discord}

Events kommen aus Discord, also erstellst du sie dort:

1. Öffne in deinem Discord-Server das Menü am Servernamen und wähle **Events**, oder nutze den Events-Tab.
2. Klick auf **Event erstellen**.
3. Leg fest, wo es stattfindet (ein Sprachkanal, eine Stage oder ein anderer Ort), und gib ihm einen Namen, ein Datum und eine Uhrzeit sowie optional eine Beschreibung und ein Titelbild.
4. Speichere es.

Das Event erscheint jetzt im Events-Block. Es bleibt dort, solange es läuft, und verschwindet von selbst, sobald es vorbei ist. Abgesagte Events verschwinden ebenfalls.

## Leerer Zustand {#empty-state}

Wenn es keine kommenden Events gibt, zeigt der Block statt eines Fehlers einen freundlichen Hinweis, dass gerade keine Events anstehen und Besucher bald wieder vorbeischauen sollen. Wenn deine Fußzeile einen Discord-Social-Link hat, bietet der Hinweis außerdem einen Link **Tritt unserem Discord-Server bei** an. Denselben Hinweis bekommst du, wenn wir deine Events nicht auslesen können, zum Beispiel weil der Bot nicht auf deinem Server ist oder keinen Zugriff hat. Der Block macht deine Seite nie kaputt.

Wenn der Browser eines Besuchers die Events gar nicht laden kann, sagt der Block das in einem kurzen, neutralen Satz, statt zu behaupten, es gäbe keine Events.

:::note Keine Anmeldungen auf der Website
Besucher treten Events in Discord bei und sagen dort zu, über den Link **Auf Discord ansehen**. Eine eigene Anmeldung auf der Website gibt es nicht.
:::
