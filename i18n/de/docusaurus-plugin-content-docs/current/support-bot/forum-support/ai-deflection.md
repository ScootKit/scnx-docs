---
sidebar_position: 6
title: KI-Autoantwort
description: Lass die KI häufige Forum-Support-Fragen beantworten, bevor ein Mensch eingreift - mit "Hat das geholfen?"-Knöpfen, die gelöste Threads schließen und alle anderen an dein Team eskalieren.
---

# KI-Autoantwort

Forum-Support kann bei jedem neuen Thread zuerst eine KI antworten lassen und so häufige, wiederkehrende Fragen sofort beantworten. Anschließend teilt das Mitglied dem Bot mit, ob es geholfen hat - gelöste Threads schließen sich selbst, und alles, was die KI nicht lösen konnte, wird direkt an dein Team übergeben. Das ist einer der größten Zeitsparer in einem öffentlichen Forum, in dem immer wieder dieselben Fragen auftauchen.

## Funktionen {#features}

- Eine automatisch gepostete **KI-Erstantwort** auf neue Threads.
- **"Hat das geholfen?"**-Knöpfe - das Mitglied bestätigt oder eskaliert.
- Optionale **KI-Zusammenfassung beim Claimen** - eine Zusammenfassung per DM an das Team, wenn es einen Thread übernimmt (siehe [Claiming](/de/docs/support-bot/forum-support/claiming#claim)).

## So funktioniert es {#how-it-works}

1. Ein Mitglied eröffnet einen Thread.
2. Die KI postet eine Antwort, gefolgt von zwei Knöpfen.
3. Das Mitglied tippt auf einen davon:
   - **Ja, gelöst** - der Thread wird als gelöst markiert und geschlossen.
   - **Nein, ich brauche einen Menschen** - der Thread wird an deine [Team-Warteschlange](/de/docs/support-bot/forum-support/claiming) übergeben.
4. Nur die Person, die den Thread eröffnet hat, kann diese Knöpfe nutzen.

## Aktivieren {#setup}

Die KI-Autoantwort findest du im Bereich **KI** der Seite [Konfiguration](/de/docs/support-bot/forum-support/configuration#ai). Der Bereich erscheint nur, wenn KI für deinen Server verfügbar ist.

| Einstellung                         | Beschreibung                                                                                           |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **KI-Auto-Antworten aktivieren**    | Postet in neuen Threads eine KI-Erstantwort mit den Ja/Nein-Knöpfen.                                   |
| **KI-Zusammenfassung beim Claimen** | Sendet dem beanspruchenden Teammitglied per DM eine kurze Zusammenfassung der bisherigen Unterhaltung. |

Die Bestätigungsnachrichten für die Knöpfe **Ja** und **Nein** kannst du im Bereich [Nachrichten](/de/docs/support-bot/forum-support/configuration#messages) anpassen.

:::info KI-Nutzung
KI-Antworten und -Zusammenfassungen nutzen das [KI-Guthaben](https://faq.scnx.app/ki-auf-scnx/) deines Servers, genau wie andere SCNX-KI-Funktionen.
:::
