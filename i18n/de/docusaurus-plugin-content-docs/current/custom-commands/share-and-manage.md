---
sidebar_position: 1
title: "Teilen & verwalten"
description: "Wie das Installieren und Teilen von Modulen funktioniert, wie du Apps aktuell hältst, wer in deinem Team was darf und wie du innerhalb deines Tarifs bleibst."
---

# Teilen & verwalten

Mit Custom Commands V3 teilst du ganze Features, nicht einzelne Befehle. Du teilst ein **Modul**: Seine Flows, Einstellungen und Speicherfelder wandern gemeinsam, sodass jeder, der es installiert, etwas bekommt, das funktioniert. Ein Modul, das aus dem Marktplatz installiert wurde, heißt **App**.

Dieser Abschnitt behandelt die Arbeit mit dem, was andere gebaut haben, das Teilen deiner eigenen Module, den Umstieg von V2 und die Limits, innerhalb derer dein Server läuft.

- [Teilen & der Marktplatz](/de/docs/custom-commands/sharing) behandelt das Installieren von Apps, Updates, Teilen-Links und das Veröffentlichen.
- [Umstieg von V2](/de/docs/custom-commands/migrating-from-v2) behandelt das Einschalten von V3 und den Betrieb neben deinen V2-Befehlen.
- [Tarife, Limits & Sicherheit](/de/docs/custom-commands/limits-and-safety) behandelt Aktivitätsbudgets, Schutzmaßnahmen und Berechtigungen.

Module, die andere veröffentlicht haben, findest du beim Stöbern im [Marktplatz](https://scnx.app/marketplace).

## Installieren und Teilen in der Praxis {#in-practice}

- **Eine App installieren** dauert eine Minute: Öffne sie, klicke auf **Zum Server hinzufügen**, wähle deinen Server, lies, was die App braucht, und bestätige. Auf deinem Server muss vorher V3 eingeschaltet sein.
- **Dein eigenes Modul teilen** heißt, es zu veröffentlichen. Nach einer automatischen Prüfung ist es **Nicht gelistet**: Nur Leute mit deinem Teilen-Link können es installieren. Damit es beim Stöbern im Marktplatz auftaucht, bewirbst du dich für **Gelistet**, und unser Team prüft es.
- **Einzelne Schritte verschieben** zwischen deinen eigenen Flows funktioniert im Editor mit Kopieren und Einfügen. Für einen einzelnen Flow gibt es keinen Teilen-Link.

## Updates im Blick behalten {#updates}

Wenn eine App, die du installiert hast, eine neue Version bekommt, zeigt die Übersicht an, wie viele Apps ein Update haben. **App-Updates** unter **Daten & Verlauf** listet sie mit ihren Changelogs auf. Updates werden nie automatisch für dich installiert. Deine Einstellungen und gespeicherten Daten bleiben erhalten. Wenn du die Flows einer App bearbeitet hast, überschreibt ein Update diese Änderungen, deshalb wirst du vorher gefragt.

## Wer was darf {#who}

| Aufgabe                                                            | Wer                                                                                              |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| V3 einschalten oder zurück zu V2 wechseln                          | Server-Owner und Co-Owner                                                                        |
| Flows bauen, Module und Apps bearbeiten, Daten und Ausführungen ansehen | Owner, Co-Owner und Trusted Admins mit Zugriff auf eigene Befehle                           |
| Notaus                                                             | Owner, Co-Owner und Trusted Admins, die den Bot verwalten dürfen                                 |
| Ein Modul veröffentlichen                                          | Mitglieder der veröffentlichenden Organisation mit der Berechtigung "Inhalte verwalten"             |

Jeder, der Flows bearbeiten darf, kann deinen Bot alles tun lassen, was seine Discord-Berechtigungen erlauben. Gib diesen Zugriff deshalb nur Leuten, denen du auch den Bot selbst anvertrauen würdest.

## Innerhalb deines Tarifs bleiben {#plan}

Dein Server hat ein Aktivitätsbudget dafür, wie viel seine Flows tun können. Die meisten Server erreichen es nie. Wenn deiner es doch erreicht, pausieren die betroffenen Aktionen und laufen von selbst weiter, sobald sich das Budget erholt. Höhere Tarife enthalten mehr Aktivität und mehr Speicherplatz.

## Tipps {#tips}

- **Schalte das Original aus, bevor du eine Kopie einschaltest.** Ein dupliziertes Modul startet deaktiviert. Wenn beide Kopien laufen, reagieren sie auf dieselben Befehle und Ereignisse.
- **Sieh dir Bevor du diese App hinzufügst an.** Dort stehen die Berechtigungen, Intents, Befehle und externen Anfragen einer App. Eine App, die externe Dienste kontaktiert, nennt sie dort.
- **Lass Apps unverändert, wenn du einfache Updates willst.** Bearbeitete Apps werden von **Alle aktualisieren** übersprungen, und ein Update überschreibt deine Änderungen.
- **Überprüfe deine Trusted Admins, bevor du V3 einschaltest.** Flows können Dinge tun, die ein Trusted Admin von Hand nicht tun könnte.
- **Denk an den Notaus.** Er hält jeden Flow auf einen Schlag an, ohne etwas zu löschen, und du kannst alles mit einem Klick wieder einschalten.
