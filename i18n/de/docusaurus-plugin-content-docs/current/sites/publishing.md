---
sidebar_position: 8
title: Veröffentlichen & Live gehen
description: Wie das Veröffentlichen bei SCNX Sites funktioniert - Entwürfe, das Snapshot-Modell, Versionsverlauf und Rollback sowie der Wartungsmodus.
unlisted: true
---

# Veröffentlichen & Live gehen

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Deine Website hat zwei Zustände: den **Entwurf**, den du bearbeitest, und die **Live**-Version, die Besucher sehen. Diese Seite erklärt, wie aus dem einen das andere wird und welche Teile deiner Website sich sofort ändern, wenn du sie anpasst.

## Entwurf vs. veröffentlicht {#draft-vs-published}

Alles, was du im Editor tust, ändert deinen **Entwurf**. Der Entwurf ist privat: nur Leute mit Zugriff auf die Website sehen ihn. Besucher sehen weiter die zuletzt veröffentlichte Version.

Wenn du mit deinem Entwurf zufrieden bist, klick auf **Publish**. Das Publish-Popover zeigt, was live geht:

- eine Liste der Seiten, die sich seit deiner letzten Veröffentlichung geändert haben, markiert als **New**, **Changed** oder **Removed**,
- ob sich deine **Website-Einstellungen** geändert haben.

Hat sich nichts geändert, steht auf dem Button "Published" und es gibt nichts zu tun. Seiten können auch nach einer Design-Änderung oder einem Plattform-Update in dieser Liste auftauchen, oder wenn du sie umsortierst, nicht nur wenn du ihren Text bearbeitest.

Bis du je veröffentlicht hast, ist deine Website ein Entwurf und gar nicht öffentlich.

## Das Snapshot-Modell {#snapshot}

Wenn du veröffentlichst, wird dein Seitenlayout **snapshottet**: die genauen Seiten, Blöcke, Texte und das Design in diesem Moment werden eingefroren und als deine Live-Website ausgeliefert. Den Entwurf danach zu bearbeiten berührt den Live-Snapshot nicht, bis du erneut veröffentlichst. So bleibt deine Live-Website stabil, während du an der nächsten Version arbeitest.

Manche Dinge sind aber bewusst **live** und aktualisieren sich sofort, ohne Veröffentlichung:

| Snapshottet (braucht eine Veröffentlichung)      | Live (aktualisiert sofort)                                            |
| ------------------------------------------------ | --------------------------------------------------------------------- |
| Seiten, Blöcke und ihr Text                      | [Blog-Beiträge](/docs/sites/blog)                                     |
| Design, Theme und Seitenlayout                   | [Formulare](/docs/sites/forms) und ihre Antworten                     |
| Website-Einstellungen, Navigation und Fußbereich | [Events](/docs/sites/events)                                          |
|                                                  | [Weiterleitungen](/docs/sites/small-features#redirects)               |
|                                                  | [Die Ankündigungsleiste](/docs/sites/small-features#announcement-bar) |

Die Idee ist einfach: dein Seitenlayout bleibt unter deiner Kontrolle und ändert sich nur, wenn du veröffentlichst, während Neuigkeiten, Formulare, Events und kurze Hinweise Dinge sind, die du sofort erwartest.

## Vorschau vor dem Veröffentlichen {#preview}

Nutze den **Preview**-Button, um deinen aktuellen Entwurf über einen privaten Link in einem neuen Tab zu öffnen, bevor er öffentlich ist. Diesen Link kannst du für eine zweite Meinung mit einem Teammitglied teilen. Du kannst den Vorschaulink in den Website-Einstellungen zurücksetzen, wodurch alle zuvor geteilten Links nicht mehr funktionieren.

## Versionsverlauf und Rollback {#versions}

Jedes Mal, wenn du veröffentlichst, wird diese Version aufbewahrt. Öffne das Publish-Popover, um deinen **Versionsverlauf** zu sehen. Die aktuelle Live-Version ist als **Live** markiert.

Hat eine Veröffentlichung ein Problem gebracht, wähle **Roll back** bei einer früheren Version, um sie wieder live zu schalten. Die neuesten Versionen werden aufbewahrt (die letzten zehn), sodass du immer einen Weg zurück zu einem funktionierenden Stand hast.

## Wartungsmodus {#maintenance}

Der Wartungsmodus ersetzt deine ganze Website vorübergehend durch einen kurzen Hinweis, ohne etwas zu depublizieren. Nutze ihn, während du größere Änderungen machst.

Öffne den Bereich **Site** und finde **Maintenance mode**:

- Schalte **Enable maintenance mode** ein.
- Schreib die **Maintenance message**, die Besucher sehen sollen.

Solange der Wartungsmodus an ist, sehen Besucher nur deinen Wartungshinweis. Die [Ankündigungsleiste](/docs/sites/small-features#announcement-bar) wird dort nicht gezeigt. Schalte ihn wieder aus, um deine Website genau so zurückzubringen, wie sie war.

## Eine Website löschen {#delete}

Eine Website zu löschen ist endgültig und braucht die Website-Admin-Berechtigung. Es entfernt alles: jede Seite, deine eigenen Domains, deine veröffentlichten Versionen, deine Weiterleitungen, deine Blog-Beiträge, deine Besuchsstatistiken und jedes Formular samt aller Antworten, die man dir geschickt hat. Nichts davon lässt sich zurückholen, deshalb wirst du gebeten, zur Bestätigung die Adresse deiner Website einzutippen.
