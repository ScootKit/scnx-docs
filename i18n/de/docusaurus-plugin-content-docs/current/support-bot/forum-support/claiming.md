---
sidebar_position: 5
title: Team-Warteschlange & Claiming
description: So übernimmt dein Team Forum-Support-Threads - das Live-Warteschlangen-Panel, Claimen, Mir zuweisen und Abgeben, Sperren bis zum Claimen und KI-Zusammenfassungen beim Claimen.
---

# Team-Warteschlange & Claiming

Forum-Support gibt deinem gesamten Team eine gemeinsame Warteschlange. Threads werden von genau einem Teammitglied beansprucht, sodass nie zwei Personen am selben Thread arbeiten, und jeder kann einen Thread zurückgeben, wenn er nicht weiterkommt.

## Funktionen {#features}

- Ein **Warteschlangen-Panel** in Echtzeit, das alle offenen Threads nach Status gruppiert anzeigt.
- **Claimen** und **Mir zuweisen** (nächsten Thread automatisch übernehmen) mit einem Klick.
- **Abgeben**, um einen Thread für jemand anderen zurück in die Warteschlange zu legen.
- Optional **Sperren bis geclaimt**, damit ein Thread ruhig wartet, bis ihn ein Mensch übernimmt.
- Optional **KI-Zusammenfassung beim Claimen** - der Bot sendet dem beanspruchenden Teammitglied per DM eine Zusammenfassung, damit es sofort auf dem Laufenden ist.

## Das Warteschlangen-Panel {#panel}

Das Panel ist eine Live-Nachricht, die der Bot in deinem [Kanal für das Team-Warteschlangen-Panel](/de/docs/support-bot/forum-support/configuration#main) aktuell hält. Es gruppiert Threads in:

| Gruppe             | Bedeutung                                                                   |
| ------------------ | --------------------------------------------------------------------------- |
| **Unbeansprucht**  | Warten darauf, dass sie jemand übernimmt.                                   |
| **In Bearbeitung** | Aktuell beansprucht und in Bearbeitung.                                     |
| **Zurückgegeben**  | Wurden beansprucht, dann zurückgegeben und brauchen einen neuen Bearbeiter. |

Priority-Threads (siehe [Themen](/de/docs/support-bot/forum-support/topics) und die [Priority](/de/docs/support-bot/forum-support/configuration#priority)-Einstellungen pro Kanal) erscheinen innerhalb jeder Gruppe zuerst.

## Einen Thread übernehmen {#claim}

Es gibt drei gleichwertige Wege zum Claimen - nutze, was gerade am praktischsten ist:

- Der **Claim**-Knopf eines bestimmten Threads im Panel.
- Der Knopf **Mir zuweisen** (oder [`/forum next`](/de/docs/support-bot/forum-support/commands)) - übernimmt automatisch den nächsten unbeanspruchten Thread.
- Beim Claimen wird der Thread **entsperrt**, falls er [bis zum Claimen gesperrt](#lock-until-claimed) war, sodass das Mitglied wieder antworten kann, und eine "Beansprucht"-Nachricht wird gepostet.

Wenn du **KI-Zusammenfassung beim Claimen** aktiviert hast, sendet dir der Bot im Moment des Claimens eine kurze Zusammenfassung der bisherigen Unterhaltung per DM - praktisch bei langen Threads.

Mit [`/forum my-assignments`](/de/docs/support-bot/forum-support/commands) (oder dem Knopf **Meine Zuweisungen**) siehst du, was aktuell bei dir liegt.

## Einen Thread zurückgeben {#step-away}

Du kannst einen Thread nicht abschließen? Klicke auf **Abgeben** (oder führe [`/forum step-away`](/de/docs/support-bot/forum-support/commands) aus). Die Zuweisung wird aufgehoben, der Thread landet unter **Zurückgegeben** wieder in der Warteschlange und wird erneut gesperrt, falls du Sperren bis zum Claimen nutzt - so kann das nächste verfügbare Teammitglied sauber übernehmen.

## Sperren bis zum Claimen {#lock-until-claimed}

Aktiviere **Sperren bis geclaimt** für einen [Forum-Kanal](/de/docs/support-bot/forum-support/configuration#forum-channels), um neue Threads zu sperren, bis ein Teammitglied sie übernimmt. Das Mitglied kann die Willkommensnachricht (und eine mögliche KI-Antwort) weiterhin lesen, aber keine weiteren Nachrichten schreiben, bevor jemand zugewiesen ist. Beim Claimen wird der Thread automatisch entsperrt.

## Befehle {#commands}

Alle oben genannten Knöpfe haben Slash-Befehl-Entsprechungen - siehe die vollständige Referenz [Befehle & Knöpfe](/de/docs/support-bot/forum-support/commands).
