---
sidebar_position: 8
title: Befehle & Knöpfe
description: So arbeitet dein Team die Forum-Support-Warteschlange ab - die /forum-Slash-Befehle und die Knöpfe im Warteschlangen-Panel und in jedem Thread.
---

# Forum-Support Befehle & Knöpfe

Dein Team arbeitet die Warteschlange auf zwei Arten ab: mit den **Knöpfen**, die der Bot postet (im Warteschlangen-Panel und in jedem Thread), und mit den **`/forum`-Slash-Befehlen**. Alles erfüllt denselben Zweck - nutze, was gerade praktischer ist.

Befehle und Team-Knöpfe funktionieren nur für Mitglieder mit einer deiner konfigurierten [Team-Rollen](/de/docs/support-bot/forum-support/configuration#main). Die `/forum`-Befehle sind nur sichtbar, solange Forum-Support [aktiviert](/de/docs/support-bot/forum-support/configuration#main) ist.

<SlashCommandExplanation />

## Slash-Befehle {#commands}

| Befehl                  | Beschreibung                                                                                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/forum next`           | Beansprucht den nächsten verfügbaren Thread in der Warteschlange und weist ihn dir zu - der schnellste Weg, Arbeit zu übernehmen.                                            |
| `/forum step-away`      | Gibt den Thread, in dem du dich gerade befindest, zurück in die Warteschlange, damit ein anderes Teammitglied übernehmen kann. Nutze ihn, wenn du nicht weitermachen kannst. |
| `/forum my-assignments` | Listet die Threads auf, die dir aktuell zugewiesen sind, damit du den Überblick behältst.                                                                                    |
| `/forum close`          | Schließt den aktuellen Thread (markiert ihn als gelöst, setzt den Gelöst-Tag, falls konfiguriert, und führt die Schließ-Schritte aus).                                       |

## Knöpfe {#buttons}

### Im Team-Warteschlangen-Panel {#panel-buttons}

Das Warteschlangen-Panel befindet sich in deinem [Team-Panel-Kanal](/de/docs/support-bot/forum-support/configuration#main) und aktualisiert sich selbst, wenn sich die Warteschlange ändert. Es gruppiert Threads in **Unbeansprucht**, **In Bearbeitung** und **Zurückgegeben**.

| Knopf                 | Beschreibung                                                          |
| --------------------- | --------------------------------------------------------------------- |
| **Mir zuweisen**      | Beansprucht den nächsten unbeanspruchten Thread und weist ihn dir zu. |
| **Claim**             | Beansprucht einen bestimmten Thread.                                  |
| **Meine Zuweisungen** | Zeigt die Threads an, die dir aktuell zugewiesen sind.                |
| **Abgeben**           | Gibt deinen aktuellen Thread zurück in die Warteschlange.             |

### In einem Thread {#thread-buttons}

| Knopf                                | Wer sieht ihn     | Beschreibung                                                                                                                                                         |
| ------------------------------------ | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Als gelöst markieren**             | Autor & Team      | Schließt den Thread als gelöst. Die Person, die den Thread eröffnet hat, kann ihn selbst lösen, sobald sie zufrieden ist, und das Team kann ihn jederzeit schließen. |
| **Ja, gelöst**                       | Autor (KI-Ablauf) | Wird nach einer KI-Antwort angezeigt - bestätigt, dass sie geholfen hat, und schließt den Thread. Nur die Person, die den Thread eröffnet hat, kann ihn nutzen.      |
| **Nein, ich brauche einen Menschen** | Autor (KI-Ablauf) | Wird nach einer KI-Antwort angezeigt - übergibt den Thread an dein Team. Nur die Person, die den Thread eröffnet hat, kann ihn nutzen.                               |

## Ein typischer Ablauf {#workflow}

1. Ein neuer Thread erscheint im **Warteschlangen-Panel** (und benachrichtigt optional dein Team).
2. Ein Teammitglied klickt auf **Mir zuweisen** oder führt `/forum next` aus, um ihn zu übernehmen.
3. Es hilft dem Mitglied im Thread. Kommt etwas dazwischen, gibt **Abgeben** / `/forum step-away` ihn zurück in die Warteschlange.
4. Sobald er gelöst ist, klickt jemand auf **Als gelöst markieren** oder ein Teammitglied führt `/forum close` aus.
5. Der Thread wird als gelöst getaggt und geschlossen, das Mitglied kann nach [Feedback](/de/docs/support-bot/forum-support/support-feedback) gefragt werden und eine Zusammenfassung + Transkript kann in deinen [Log-Kanal](/de/docs/support-bot/forum-support/configuration#log-channel) gepostet werden.

:::tip
Du möchtest deine eigene Auslastung im Blick behalten? `/forum my-assignments` (oder der Knopf **Meine Zuweisungen**) zeigt dir immer genau, was dir zugewiesen ist.
:::
