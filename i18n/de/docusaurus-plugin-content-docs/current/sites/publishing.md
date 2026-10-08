---
sidebar_position: 8
title: Veröffentlichen & Live gehen
description: Wie das Veröffentlichen bei SCNX Sites funktioniert - Entwürfe, das Veröffentlichen-Popover, was eine Veröffentlichung braucht und was live ist, Vorschau, Versionsverlauf und Zurücksetzen, Wartungsmodus und das Löschen einer Website.
---

# Veröffentlichen & Live gehen

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Deine Website hat zwei Zustände: den **Entwurf**, den du bearbeitest, und die **Live**-Version, die Besucher sehen. Diese Seite erklärt, wie aus dem einen das andere wird und welche Teile deiner Website sich sofort ändern, wenn du sie anpasst.

## Entwurf vs. veröffentlicht {#draft-vs-published}

Alles, was du im Editor, auf den Seiten **Seiten** und **Navigation** und in einigen Karten der **Einstellungen** änderst, landet in deinem **Entwurf**. Der Entwurf ist privat: Nur Leute mit Zugriff auf die Website sehen ihn. Besucher sehen weiter die zuletzt veröffentlichte Version.

Bis du zum ersten Mal veröffentlichst, ist deine Website ein Entwurf und gar nicht öffentlich. Unter ihrer Adresse ist noch nichts zu sehen, und die [Statistiken](/docs/sites/small-features#analytics) zählen noch keine Aufrufe.

## Veröffentlichen {#publish}

![Das Veröffentlichen-Popover mit den geänderten Seiten und Einstellungen](@site/docs/assets/sites/de/publish-popover.png)

Du veröffentlichst im Editor. Klick oben in der Leiste auf **Veröffentlichen**, um das Veröffentlichen-Popover zu öffnen. Dafür brauchst du Bearbeitungszugriff auf die Website. Beim Öffnen speichert das Popover zuerst alles, was noch offen ist, und zeigt dir dann, was live geht:

- eine Liste der Seiten, die sich seit deiner letzten Veröffentlichung geändert haben, markiert als **Neu**, **Geändert** oder **Entfernt**,
- eine Zeile **Website-Einstellungen**, wenn sich deine websiteweiten Einstellungen geändert haben (zum Beispiel Design, Menü, Footer, Website-Name oder Bild beim Teilen).

Prüf die Liste und klick dann unten im Popover auf **Veröffentlichen**. Eine zweite "Bist du sicher?"-Abfrage gibt es nicht: Das Popover ist die Bestätigung.

Ein paar weitere Dinge, die du im Popover sehen kannst:

- **Zuletzt veröffentlicht am** mit dem Datum, und einen Link **Live-Website öffnen**, sobald deine Website live ist.
- Hat sich nichts geändert, steht auf dem Button in der Leiste **Veröffentlicht**, das Popover sagt **Alles ist veröffentlicht.** und es gibt nichts zu tun.
- Seiten können als **Geändert** auftauchen, ohne dass du ihren Text bearbeitet hast, zum Beispiel nach einem Design- oder Plattform-Update oder wenn du Seiten umsortierst. Das ist normal.
- Brauchen manche Blöcke noch Angaben, sagt dir das Popover, wie viele. Füll sie zuerst aus. Die betroffenen Blöcke sind im Editor markiert.
- Konnten deine letzten Änderungen nicht alle gespeichert werden, warnt dich das Popover: Dann geht dein zuletzt gespeicherter Entwurf live, und die offenen Änderungen bleiben im Editor.
- Hat deine Website ein Formular, aber keine verlinkte Datenschutzerklärung, bekommst du einen Hinweis mit einem Link, um das zu beheben. Er hält dich nicht vom Veröffentlichen ab. Mehr dazu unter [Formulare](/docs/sites/forms).

## Was eine Veröffentlichung braucht und was live ist {#snapshot}

Wenn du veröffentlichst, wird ein **Snapshot** deiner Website erstellt: Die genauen Seiten, Blöcke, Texte, das Design und die websiteweiten Einstellungen in diesem Moment werden eingefroren und als deine Live-Website ausgeliefert. Den Entwurf danach zu bearbeiten berührt die Live-Version nicht, bis du erneut veröffentlichst. So bleibt deine Live-Website stabil, während du an der nächsten Version arbeitest.

Manche Dinge sind aber bewusst **live**. Sie erreichen Besucher, sobald du sie speicherst, ohne Veröffentlichung:

| Braucht eine Veröffentlichung                                            | Live (aktualisiert sofort)                                                                                                                 |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Seiten, Blöcke und ihr Text                                              | [Blog-Beiträge](/docs/sites/blog) (jeder Beitrag geht live, wenn du den Beitrag selbst veröffentlichst oder zu seinem geplanten Zeitpunkt) |
| Der **Formular**-Block auf einer Seite, inklusive Button- und Danke-Text | Die Anzeige-Einstellungen deines Blogs auf der Seite **Blog**                                                                              |
| Design und Theme                                                         | [Formulare](/docs/sites/forms) und ihre Antworten, **Bot-Schutz** und **Rechtliche Angaben**                                               |
| Das Navigationsmenü und der Footer                                       | [Events](/docs/sites/events)                                                                                                               |
| [Seitenlayout](/docs/sites/small-features#link-in-bio)-Einstellungen     | [Weiterleitungen](/docs/sites/small-features#redirects)                                                                                    |
| Website-Name, Beschreibung, Sprache und Favicon                          | [Die Ankündigungsleiste](/docs/sites/small-features#announcement-bar)                                                                      |
| Titel, Beschreibung und Bild beim Teilen                                 | [Wartungsmodus](#maintenance)                                                                                                              |
|                                                                          | Der Schalter für das [erzeugte Vorschaubild](/docs/sites/small-features#sharing)                                                           |
|                                                                          | Deine [Adress-Endung und eigenen Domains](/docs/sites/custom-domains)                                                                      |
|                                                                          | Das "Made with SCNX"-[Badge](/docs/sites/small-features#branding), das sich nach dem Tarif deines Servers richtet                          |

Die Idee ist einfach: Wie deine Seiten aussehen, bleibt unter deiner Kontrolle und ändert sich nur, wenn du veröffentlichst. Neuigkeiten, Formulare, Events, kurze Hinweise und deine Adressen sind Dinge, die du sofort erwartest.

:::tip Einstellungen und der Veröffentlichen-Button
Die Karten **Allgemein** und **Suche & Teilen** auf der Seite **Einstellungen** haben ihren eigenen **Speichern**-Button, aber das Speichern dort aktualisiert nur deinen Entwurf. Dein neuer Website-Name, deine Beschreibung, Sprache, dein Favicon oder deine Texte beim Teilen erreichen Besucher mit deiner nächsten Veröffentlichung, und das Veröffentlichen-Popover listet sie als **Website-Einstellungen**. Der Schalter für das Vorschaubild in derselben Karte ist die Ausnahme: Er ist live.
:::

## Vorschau vor dem Veröffentlichen {#preview}

Klick oben in der Leiste des Editors auf **Vorschau**, um deinen aktuellen Entwurf in einem neuen Tab zu öffnen, genau so, wie Besucher ihn nach dem Veröffentlichen sehen. Die Vorschau läuft über einen privaten Vorschau-Link. Sie funktioniert also, bevor deine Website öffentlich ist, und auch, während der [Wartungsmodus](#maintenance) aktiv ist.

Um den Entwurf mit einem Teammitglied zu teilen, öffne das Veröffentlichen-Popover und klick auf **Vorschau-Link kopieren**. Jeder mit diesem Link kann deinen Entwurf sehen, teil ihn also nur mit Leuten, denen du vertraust.

Ist ein Vorschau-Link irgendwo gelandet, wo er nicht hingehört, klick im Veröffentlichen-Popover auf **Link zurücksetzen**. Damit entsteht ein neuer Vorschau-Link, und alle vorher geteilten Links funktionieren nicht mehr. Zum Zurücksetzen brauchst du Admin-Zugriff.

## Versionsverlauf und Zurücksetzen {#versions}

Jedes Mal, wenn du veröffentlichst, wird diese Version aufbewahrt. Öffne das Veröffentlichen-Popover und klapp **Versionsverlauf** auf, um deine veröffentlichten Versionen nach Datum zu sehen. Die aktuelle Live-Version ist als **Live** markiert. Wer nur ansehen darf, sieht statt **Veröffentlichen** einen Button **Versionsverlauf** und kann sich den Verlauf so ebenfalls ansehen.

Hat eine Veröffentlichung ein Problem gebracht, klick bei einer früheren Version auf **Zurücksetzen** und bestätige. Diese Version ist dann sofort wieder deine Live-Website. Zum Zurücksetzen brauchst du Admin-Zugriff.

Das Zurücksetzen ändert nur, was Besucher sehen. Dein Entwurf bleibt, wie er ist, deine nächste Veröffentlichung macht also wieder den Entwurf live. Deine letzten zehn Versionen werden aufbewahrt, sodass du immer einen Weg zurück zu einem funktionierenden Stand hast.

## Wartungsmodus {#maintenance}

Der Wartungsmodus ersetzt deine ganze Website vorübergehend durch einen kurzen Hinweis, ohne etwas zurückzuziehen. Nutze ihn, während du größere Änderungen machst.

Öffne **Einstellungen** im Sites-Menü und finde die Karte **Wartungsmodus**:

- Schalte **Wartungsmodus aktivieren** ein.
- Schreib die **Wartungsnachricht**, die Besucher sehen sollen.
- Klick auf **Speichern**.

Der Wartungsmodus ist live: Er wirkt, sobald du speicherst, ohne Veröffentlichung. Solange er aktiv ist:

- sehen Besucher auf jeder Seite nur deinen Wartungshinweis,
- wird die [Ankündigungsleiste](/docs/sites/small-features#announcement-bar) nicht angezeigt,
- sind dein Blog, deine Events und deine Weiterleitungen nicht erreichbar, und Formulare nehmen keine Antworten an,
- zeigt deine [Vorschau](#preview) weiter die ganze Website, sodass du deine Arbeit prüfen kannst.

Schalte ihn aus und speichere erneut, um deine Website genau so zurückzubringen, wie sie war. Deine Nachricht bleibt für das nächste Mal erhalten.

## Eine Website löschen {#delete}

Das findest du ganz unten auf der Seite **Einstellungen**, in der Karte **Gefahrenzone**. Zum Löschen einer Website brauchst du Admin-Zugriff.

Klick auf **Website löschen** und gib zur Bestätigung die Adresse deiner Website ein. Das Löschen ist endgültig und entfernt alles: alle deine Seiten, eigenen Domains und veröffentlichten Versionen, deine Weiterleitungen, deine Blog-Beiträge, deine Besuchsstatistik und jedes Formular samt aller Antworten, die man dir geschickt hat. Nichts davon lässt sich wiederherstellen.
