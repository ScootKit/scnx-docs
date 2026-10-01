---
sidebar_position: 4
title: Themen
description: Ordne die Tags deines Forums Themen in Forum-Support zu - gib jedem Tag eine eigene Willkommensnachricht und markiere ihn als Priority, damit dringende Threads vorgezogen werden.
---

# Forum-Themen

Mit Themen machst du aus den **Tags** deines Forum-Kanals intelligentes Verhalten. Ein einzelner Forum-Kanal kann dann verschiedene Arten von Anfragen passend behandeln - zum Beispiel ein Tag "Abrechnung", der eine eigene Willkommensnachricht erhält und vorgezogen wird, während ein Tag "Allgemein" sich normal verhält.

## Funktionen {#features}

- Gib jedem Forum-Tag eine eigene **Willkommensnachricht**.
- Markiere einen Tag als **Priority**, damit Threads mit diesem Tag zuerst bearbeitet werden.
- Leite mehrere Anfragetypen ohne zusätzlichen Aufwand durch einen Forum-Kanal.

## Einrichtung {#setup}

1. Füge die gewünschten **Tags** in Discord direkt am Forum-Kanal hinzu (**Kanal bearbeiten → Tags**).
2. Öffne die Seite [Themen](https://scnx.app/glink?page=support-system/forum-support/topics) in deinem Dashboard (du erreichst sie auch über jeden Kanal auf der Seite [Forum-Kanäle](https://scnx.app/glink?page=support-system/forum-support/channels)).
3. Ordne einen Tag einem Thema zu und [konfiguriere](#configuration) es.

## Konfiguration {#configuration}

Für jedes Thema kannst du Folgendes festlegen:

| Einstellung                 | Beschreibung                                                                                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Forum-Tag**               | Der Forum-Tag, für den dieses Thema gilt. Threads, die mit diesem Tag eröffnet werden, nutzen die Einstellungen des Themas.                                        |
| **Willkommensnachricht**    | Eine eigene Willkommensnachricht, die (angepinnt) gepostet wird, wenn ein Thread mit diesem Tag eröffnet wird, statt der Standard-Willkommensnachricht des Kanals. |
| **Als Priorität markieren** | Wenn aktiviert, werden Threads mit diesem Tag in der [Team-Warteschlange](/de/docs/support-bot/forum-support/claiming) vor allen anderen einsortiert.              |

:::tip Zwei Wege, Priority festzulegen
Ein Thema als Priority zu markieren ist der einfachste Weg, eine ganze Kategorie zu priorisieren. Wenn du Threads lieber danach priorisieren möchtest, **wer** sie eröffnet hat (zum Beispiel eine Rolle "Kunde"), nutze stattdessen die [Priority](/de/docs/support-bot/forum-support/configuration#priority)-Einstellungen pro Kanal - beide speisen dieselbe Warteschlange.
:::
