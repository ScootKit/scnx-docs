---
slug: halloween-event
title: "Ein Halloween-Event für deinen Discord-Server"
description:
  "Das neue Halloween-Event-Modul veranstaltet im Oktober eine Süßigkeitenjagd auf deinem Server: täglich Süßes oder
  Saures, Kürbisse, Streiche und ein Shop mit deinen eigenen Belohnungen. Kostenlos und jedes Jahr wieder."
date: 2026-10-05T10:00
authors:
  - scderox
tags:
  - Custom Bot
  - Modules
  - Events
image: ../../../blog/assets/05-10-2026-halloween-event/de.jpeg
---

Wir haben ein Halloween-Modul gebaut. Es heißt **[Halloween-Event](/docs/custom-bot/modules/fun/halloween)**, ist mit
Custom Bot v3.25.1 erschienen und in jedem Plan kostenlos. Deine Mitglieder sammeln den ganzen Oktober über Süßigkeiten
und geben sie in einem Shop aus, den du selbst bestückst.

Du richtest es einmal ein. Danach startet es jedes Jahr am 1. Oktober und räumt im November hinter sich auf.

![Discord Halloween: Süßes oder Saures und Shop, automatisch im Bot](@site/blog/assets/05-10-2026-halloween-event/de.jpeg)

<!-- truncate -->

Wer lieber zuschaut statt liest, hier ist das Video:

<Video url="https://www.youtube.com/watch?v=poAbWOk-hqI" />

## Was deine Mitglieder machen

Einmal am Tag können Mitglieder `/trickortreat` nutzen. Meistens gibt es ein paar Süßigkeiten, ab und zu einen Jackpot.
Hin und wieder gibt es aber Saures: Sie verlieren ein paar Süßigkeiten, bekommen für eine Weile eine "Haunted"-Rolle,
oder der Bot erschreckt sie einfach.

In Kanälen, die du auswählst, tauchen Kürbisse auf. Manche, wenn gerade geschrieben wird, manche zu zufälligen Zeiten.
Wer zuerst auf den Button klickt, bekommt die Süßigkeiten.

Dazu kommt `/spook`. Damit können Mitglieder einmal am Tag versuchen, sich gegenseitig Süßigkeiten zu klauen. Geht der
Streich nach hinten los, bekommt die andere Person die Süßigkeiten, das hält die Spannung hoch. Wenn du auf deinem
Server keine Streiche möchtest, kannst du `/spook` abschalten.

Am 31. Oktober gibt es für Süßes oder Saures und für Kürbisse doppelt so viel.

## Der Shop

Was `/candyshop` verkauft, entscheidest du. Ist ein Artikel eine Rolle, vergibt der Bot sie sofort. Alles andere (ein
Shout-out, ein eigenes Emoji, was dir eben einfällt) landet in einem Kanal deiner Wahl, damit sich jemand aus deinem Team
darum kümmert. Du kannst festlegen, wie viele es von einem Artikel gibt und wie oft eine Person ihn kaufen darf.

Die Bestenliste zählt alle Süßigkeiten, die jemand verdient hat, nicht die, die noch übrig sind. So können Mitglieder
im Shop einkaufen, so viel sie wollen, ohne ihren Platz zu verlieren. Nach dem Event postet der Bot den Endstand
und lässt den Shop noch eine Woche offen. Am 8. November wird alles fürs nächste Jahr zurückgesetzt.

## Erst mal testen

Mit dem Testmodus kannst du alles ausprobieren, bevor deine Mitglieder es sehen. Schalte ihn ein, wähle einen Kanal,
und dort läuft das Event zu jeder Jahreszeit. Der erste Kürbis kommt sofort.

Alles, was im Testkanal passiert, ist vom echten Event getrennt. Schaltest du den Testmodus wieder aus, entfernt der Bot
das alles wieder, auch Rollen, die er während des Tests vergeben hat.

## Einrichten

Aktiviere das Modul in deiner [Modulliste](https://scnx.app/de/glink?page=bot/modules?query=halloween), wähle Kanäle für
Kürbisse und die Bestenliste und lege ein paar Artikel im Shop an. Für den Rest gibt es Standardwerte, die gut
funktionieren. Es ist schon Oktober, das Event startet also, sobald das Modul an ist. In der
[Dokumentation](/docs/custom-bot/modules/fun/halloween) findest du jede Einstellung und die Berechtigungen, die der Bot
braucht.

## Was sonst in v3.25.1 steckt

Die andere große Änderung in diesem Release betrifft [Backups](/docs/scnx/guilds/backups). Die erstellt jetzt dein
eigener Bot, nicht mehr der SCNX-Bot. Dafür muss dein Bot auf einem unserer Next-Gen-Hosts laufen. Backups, die der
SCNX-Bot vorher gemacht hat, sind weiterhin da. Außerdem warnt dich der Bot jetzt, wenn etwas in deiner Konfiguration
nicht funktionieren kann, zum Beispiel eine Rolle, die er nicht vergeben darf. Dazu kommen viele kleinere Fehlerbehebungen,
alle im [Changelog](https://changelog.click/v3.25.1).

Starte deinen Bot einmal neu, um das Update zu bekommen.

Wenn etwas nicht funktioniert, öffne ein Ticket unter [scnx.app/help](https://scnx.app/help). Viel Spaß damit.

Viele Grüße aus München,\
\- Simon
