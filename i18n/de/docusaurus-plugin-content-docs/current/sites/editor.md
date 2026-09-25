---
sidebar_position: 2
title: Der Editor-Arbeitsbereich
description: Eine Tour durch den SCNX-Sites-Editor - Seiten, Blöcke, Inline-Textbearbeitung, Themes, Autosave, Rückgängig/Wiederholen, Vorschau und Veröffentlichen.
unlisted: true
---

# Der Editor-Arbeitsbereich

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Der Editor ist ein bildschirmfüllender Arbeitsbereich, in dem du deine ganze Website baust. Öffne ihn über die Sites-Übersichtskarte in deinem Dashboard mit **Open editor**.

## Der Aufbau {#layout}

Der Arbeitsbereich hat mehrere Bereiche:

- **Obere Leiste** - der **Back to the dashboard**-Button, dein Website-Name, der **Seitenwechsler** (mit **New page**), die **Ansichts**-Umschaltung, das **Autosave**-Statusabzeichen, ein **Preview**-Button und der **Publish**-Button.
- **Linke Leiste** - die **Structure**-Liste der Blöcke auf der aktuellen Seite sowie ein Wechsler für die **Website-Bereiche**: Pages, Design, Site, Domains, Forms und Posts.
- **Mittlere Leinwand** - eine Live-Vorschau deiner Seite, gezeigt mit deiner echten Navigationsleiste und deinem Fußbereich. Klick im Menü der Vorschau auf einen Link, um zwischen Seiten zu wechseln, genau wie eine Besucherin es tun würde.
- **Rechtes Panel** - die Optionen des gerade ausgewählten Blocks. Text wird nicht hier bearbeitet (siehe [Inline-Bearbeitung](#inline-editing) unten); dieses Panel enthält die übrigen Einstellungen wie Bilder, Schalter, Layout und Hintergründe.

## Seiten {#pages}

Öffne den Bereich **Pages**, um Seiten hinzuzufügen, umzubenennen, neu anzuordnen und zu löschen. Zieh Seiten in eine andere Reihenfolge: die Reihenfolge bestimmt dein Navigationsmenü. Deine erste Seite ist deine **Home**-Seite.

Um eine Seite hinzuzufügen, klick auf **Add page**, gib ihr einen Titel und eine Adresse (dieselbe Regel mit 3 bis 63 Zeichen wie bei deiner Website-Adresse) und klick auf **Create page**. Jede Seite hat außerdem eine **Page layout**-Option für ihre Inhaltsbreite und dafür, ob Navigation und Fußbereich angezeigt werden - so baust du eine [Link-in-Bio-Seite](/docs/sites/small-features#link-in-bio).

## Blöcke {#blocks}

Seiten werden aus **Blöcken** gebaut. Öffne die **Blocks**-Palette, um einen hinzuzufügen. Die Palette hat zwei Tabs:

- **Blocks** - einzelne Blöcke, gruppiert in **Layout**, **Content** und **Discord**.
- **Sections** - fertige Kombinationen aus mehreren Blöcken auf einmal (ein Hero mit Highlights und einem Call to Action, ein FAQ mit Kontakt-Hinweis und so weiter). Jede Zeile, die ein Abschnitt hinzufügt, ist Platzhaltertext, also klick sie auf der Seite an, um sie neu zu schreiben.

Zieh einen Block auf die Seite oder nutze die **+**-Einfügeleiste, die zwischen Blöcken erscheint. Wähle einen Block, um seine Optionen zu bearbeiten, zieh ihn zum Umsortieren und nutze bei Bedarf **Duplicate** oder **Delete block**.

### Der Block-Katalog {#block-catalog}

**Layout**

| Block          | Was er tut                                                                               |
| -------------- | ---------------------------------------------------------------------------------------- |
| Hero           | Großes Banner mit Titel und Untertitel oben auf einer Seite.                             |
| Section header | Eine Überschrift, um einen neuen Abschnitt einzuleiten.                                  |
| Columns        | Blöcke nebeneinander in mehreren Spalten. Spalten stapeln sich auf kleinen Bildschirmen. |
| Spacer         | Fügt vertikalen Leerraum zwischen Blöcken ein.                                           |
| Divider        | Eine waagerechte Linie zum Trennen von Inhalten.                                         |
| Card grid      | Ein Raster aus Karten mit Bildern, Titeln und Links.                                     |
| Tabs           | Inhalte in umschaltbare Tabs gruppieren.                                                 |
| Accordion      | Ausklappbare Abschnitte, die einzeln öffnen.                                             |

**Content**

| Block          | Was er tut                                                   |
| -------------- | ------------------------------------------------------------ |
| Text           | Ein Rich-Text-Block, geschrieben in Markdown.                |
| Image          | Ein einzelnes Bild mit optionaler Bildunterschrift und Link. |
| Image gallery  | Mehrere Bilder in einem Raster zeigen.                       |
| Video          | Ein YouTube- oder Twitch-Video einbetten.                    |
| Quote          | Ein Zitat mit optionalem Autor hervorheben.                  |
| Call to action | Ein Hinweis mit Buttons, der zu einer Aktion antreibt.       |
| Icon grid      | Ein Raster aus Icons mit kurzen Beschriftungen.              |
| Countdown      | Ein Live-Countdown bis zu einem Datum und einer Uhrzeit.     |

**Discord**

| Block                            | Was er tut                                               |
| -------------------------------- | -------------------------------------------------------- |
| Join button                      | Ein Button, der Besucher zu deinem Discord einlädt.      |
| Links                            | Eine Liste oder ein Raster aus Links, im Linktree-Stil.  |
| About                            | Ein Rich-Text-Block über deine Community.                |
| Staff team                       | Stelle deine Teammitglieder vor.                         |
| Rules                            | Eine nummerierte oder einfache Liste von Regeln.         |
| FAQ                              | Häufige Fragen und Antworten.                            |
| [Form](/docs/sites/forms)        | Ein Bewerbungs- oder Kontaktformular zum Ausfüllen.      |
| [Latest posts](/docs/sites/blog) | Karten, die zu deinen neuesten Blog-Beiträgen verlinken. |
| [Events](/docs/sites/events)     | Kommende Discord-Events von deinem Server.               |

:::note Bilder kommen aus der Bildbibliothek deines Servers
Bildfelder (Banner, Titelbilder, Galeriebilder) nutzen die bestehende Bildbibliothek deines Servers, dieselbe, die auch dein Bot verwendet. Fügst du einen externen Bildlink ein, wird er beim Speichern abgelehnt. Wähle stattdessen ein Bild aus der Bibliothek.
:::

## Inline-Textbearbeitung {#inline-editing}

Text bearbeitest du direkt auf der Seite, nicht in einem Seitenpanel. Klick in der Vorschau auf einen Titel, eine Beschriftung oder einen Absatz und tippe los. Drücke **Enter** zum Übernehmen, **Esc** zum Abbrechen oder klick daneben, um zu speichern.

Textblöcke, die Markdown nutzen (der Text-Block, About, FAQ-Antworten, Tab- und Accordion-Inhalte), zeigen beim Bearbeiten eine kleine schwebende Leiste für Fett, Kursiv, Links und Überschriften.

Manche Blöcke weisen darauf hin: "This block's text is edited directly on the page. Click it in the preview." Das ist der Inline-Editor, der dir sagt, wo du klicken sollst.

## Design und Theme {#design}

Öffne den Bereich **Design**, um das Aussehen deiner ganzen Website zu ändern. Wähle eines der voreingestellten **Themes** als Startpunkt und öffne dann **Customize this theme**, um fein einzustellen:

- **Colors** - Seitenhintergrund, Flächen, Text, Primär-, Sekundär- und Akzentfarbe, Rahmen und Trenner.
- **Typography** - Schriften für Überschriften, Fließtext und Monospace.
- **Shape & feel** - Eckenrundung, Abstandsdichte und Schattenstil.

Jede Änderung skinnt die Live-Leinwand sofort neu, sodass du das Ergebnis direkt siehst. Nutze **Reset to theme default** bei jedem Wert, um deine Anpassung zu verwerfen.

Themes sind in Dark, Light, Gaming, Creative und Premium gruppiert. Hintergründe pro Block (Vollfarbe, Verlauf, Bild, Muster oder animiert) stellst du am einzelnen Block im rechten Panel ein.

## Ansichts-Vorschau {#viewport}

Nutze die Ansichts-Umschaltung in der oberen Leiste, um deine Seite in den Breiten **Desktop**, **Tablet** und **Mobile** vorzuschauen. Alle Blöcke sind mobile-first gebaut, und Spalten werden auf kleinen Bildschirmen zu einer einzelnen Spalte.

:::note Wenn die visuelle Vorschau nicht laden kann
Ist die Live-Vorschau nicht verfügbar, wechselt der Editor in einen Ersatzmodus. Du wählst einen Block aus der Liste und bearbeitest alles, auch seinen Text, im Einstellungspanel. Speichern und Veröffentlichen funktionieren die ganze Zeit weiter.
:::

## Autosave {#autosave}

Es gibt keinen Speichern-Button. Der Editor speichert die aktuelle Seite von selbst, ein paar Sekunden nachdem du aufhörst zu tippen. Das Abzeichen in der oberen Leiste zeigt dir den Stand:

- **Saved** - alles ist gespeichert.
- **Saving...** - es wird gerade gespeichert.
- **Needs attention** - ein Speichern ist nicht durchgegangen. Klick das Abzeichen an, um zu sehen, warum.

"Needs attention" passiert, wenn einem Block Pflichtangaben fehlen, wenn dein Text unsere automatische Inhaltsprüfung nicht bestanden hat oder wenn wir den Server nicht erreichen konnten. Autosave für diese Seite pausiert dann, bis es geklärt ist, aber deine Änderungen bleiben sicher im Editor. Ergänze das Fehlende oder korrigiere den markierten Text, und das Speichern läuft von selbst weiter.

## Rückgängig und Wiederholen {#undo-redo}

Nutze die Buttons zum Rückgängigmachen und Wiederholen in der oberen Leiste oder drücke **Strg+Z** zum Rückgängigmachen und **Strg+Umschalt+Z** (oder **Strg+Y**) zum Wiederholen. Der Verlauf umfasst deine Änderungen an der aktuellen Seite und wird beim Seitenwechsel geleert. Er betrifft immer nur deinen Entwurf, nie deine Live-Website.

## Vorschau {#preview}

Klick auf **Preview**, um deinen aktuellen Entwurf über einen privaten Vorschaulink in einem neuen Tab zu öffnen. So kannst du eine Seite prüfen oder den Entwurf mit einem Teammitglied teilen, bevor irgendetwas veröffentlicht ist. Du kannst den Vorschaulink jederzeit in den Website-Einstellungen zurücksetzen, wodurch alle zuvor geteilten Links nicht mehr funktionieren.

## Veröffentlichen und Versionsverlauf {#publish}

Wenn dein Entwurf fertig ist, klick auf **Publish**. Das Publish-Popover zeigt genau, was live geht: eine Liste der Seiten, die sich seit deiner letzten Veröffentlichung geändert haben (markiert als **New**, **Changed** oder **Removed**), und ob sich deine Website-Einstellungen geändert haben. Hat sich nichts geändert, steht auf dem Button "Published" und es gibt nichts zu tun.

Dasselbe Popover enthält deinen **Versionsverlauf**. Jede Veröffentlichung wird als Version aufbewahrt (die letzten zehn), und du kannst zu einer früheren **zurückrollen (Roll back)**, um deine Live-Website damit zu ersetzen. In [Veröffentlichen & Live gehen](/docs/sites/publishing) findest du das ganze Bild aus Entwürfen, Snapshots und dem, was live gegen snapshottet ist.

## View-only-Modus {#view-only}

Hast du nur Ansichtszugriff auf die Website, öffnet sich der Editor im **View only**-Modus. Du kannst jede Seite durchsehen und jeden Bereich öffnen, aber die Bearbeitung ist ausgeschaltet. Um Änderungen zu machen, brauchst du Bearbeitungszugriff auf die Website. Siehe [Berechtigungsstufen](/docs/sites/intro#permissions) dazu, wer was darf.
