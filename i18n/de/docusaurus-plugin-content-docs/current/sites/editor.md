---
sidebar_position: 2
title: Der Editor-Arbeitsbereich
description: Eine Tour durch den SCNX-Sites-Editor - Seiten, Navigation, Blöcke, Inline-Textbearbeitung, Designs, Autosave, Rückgängig/Wiederherstellen, Vorschau und Veröffentlichen.
---

# Der Editor-Arbeitsbereich

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Der Editor ist ein bildschirmfüllender Arbeitsbereich, in dem du die Inhalte deiner Seiten baust, deine Website gestaltest und sie veröffentlichst. Öffne ihn mit **Editor öffnen** in der Sites-Übersicht oder über **Editor** im Sites-Bereich der Seitenleiste deines Servers.

Ein paar Dinge liegen neben dem Editor, als eigene Einträge in der Seitenleiste: **Seiten** zum Verwalten deiner Seiten, **Navigation** für dein Menü, dazu Blog, Formulare, Domains, Einstellungen und Statistiken. Diese Seite beschreibt den Editor, den Bildschirm [Seiten](#pages) und den Bildschirm [Navigation](#navigation). Die komplette Liste findest du unter [Dein Sites-Bereich](/docs/sites/intro#workspace).

## Der Aufbau {#layout}

![Der Editor mit Strukturliste, Vorschau und den Optionen des ausgewählten Blocks](@site/docs/assets/sites/de/editor-workspace.png)

Der Arbeitsbereich hat mehrere Bereiche:

- **Obere Leiste** - der Button **Zurück zum Dashboard**, dein Website-Name, Abkürzungen zu **Seiten**, **Navigation** und **Einstellungen**, der [Seitenwechsler](#page-switcher), die Buttons für Rückgängig und Wiederherstellen, die **Ansichts**-Umschaltung, das **Autosave**-Statusabzeichen, ein **Vorschau**-Button und der **Veröffentlichen**-Button.
- **Linke Leiste** - wechselt zwischen der **Struktur**-Liste der Blöcke auf der aktuellen Seite und zwei websiteweiten Panels: **Design** und **Footer & Leiste**. Die Panels schieben sich über die Strukturliste und verdecken nie die Seite, sodass du jede Änderung siehst, während du sie machst.
- **Mittlere Leinwand** - eine Live-Vorschau deiner Seite, gezeigt mit deiner echten Navigationsleiste und deinem Fußbereich. Klick im Menü oder Fußbereich der Vorschau auf einen Link, um zu dieser Seite zu wechseln, genau wie ein Besucher es tun würde.
- **Rechtes Panel** - die Optionen des gerade ausgewählten Blocks. Die meisten Texte bearbeitest du nicht hier (siehe [Inline-Bearbeitung](#inline-editing) unten). Dieses Panel enthält die übrigen Einstellungen wie Bilder, Links, Schalter, Layout und Hintergründe.

Auf kleineren Bildschirmen öffnen sich die Strukturliste und die Block-Optionen als Schubladen, damit die Leinwand den meisten Platz behält.

## Der Seitenwechsler {#page-switcher}

Der Seitenwechsler in der oberen Leiste zeigt die Adresse deiner Website und die Seite, die du gerade bearbeitest. Klick darauf, um alle Seiten mit ihren Adressen zu sehen und zu einer anderen zu springen.

Um hier eine Seite hinzuzufügen, klick unten in der Liste auf **Neue Seite**, gib einen Titel und eine Adresse ein und klick auf **Seite erstellen**. Für die Adresse gilt dieselbe Regel wie für deine Website-Adresse: 3 bis 63 Buchstaben, Zahlen und Bindestriche, mit einem Buchstaben oder einer Zahl am Anfang und Ende. Wähle sie mit Bedacht, denn die Adresse einer Seite lässt sich später nicht mehr ändern. `blog` ist für deinen Blog reserviert, keine Seite kann diese Adresse nutzen.

Sobald du einen veröffentlichten Blog-Beitrag hast oder dein Menü auf deinen Blog verlinkt, zeigt der Wechsler auch **Blog**. Dort siehst du, wie dein Blog mit deinem aktuellen Design aussieht. Bearbeiten kannst du dort nichts, Beiträge schreibst du auf dem Blog-Bildschirm. Siehe [Blog & Ankündigungen](/docs/sites/blog).

## Seiten {#pages}

Öffne **Seiten** in der Seitenleiste (oder über die obere Leiste des Editors), um alle Seiten deiner Website zu sehen. Jede Zeile zeigt den Seitentitel und die Adresse, das Layout und Abzeichen wie **Start** für deine Startseite und **Ohne Navigation** für eine Seite ohne Navigation und Fußbereich.

![Die Seite Seiten mit allen Seiten, ihren Adressen und Layouts](@site/docs/assets/sites/de/pages-list.png)

Hier kannst du:

- **Seite hinzufügen** - dasselbe Formular mit Titel und Adresse wie im Editor.
- **Im Editor öffnen** - direkt im Editor auf dieser Seite landen.
- **Umbenennen** - den Seitentitel ändern. Die Adresse bleibt gleich.
- **Seitenlayout** - die **Inhaltsbreite** auf **Standard** oder **Kompakt** (eine schmale, zentrierte Spalte) stellen und **Navigation und Footer ausblenden** einschalten, um Navigationsleiste, Fußbereich und Ankündigungsleiste nur auf dieser Seite zu entfernen. Beide Einstellungen sind unabhängig voneinander. So baust du eine [Link-in-Bio-Seite](/docs/sites/small-features#link-in-bio).
- **Seite löschen** - eine Seite samt Inhalt entfernen. Deine Startseite kann nicht gelöscht werden.

Zieh eine Seite oder nutze die Pfeile, um die Reihenfolge zu ändern. Die Reihenfolge auf diesem Bildschirm ist die Reihenfolge deiner Seiten in der Sitemap. Dein Menü ändert sie nicht: das baust du auf dem Bildschirm [Navigation](#navigation).

Die Adresse einer Seite wird beim Erstellen festgelegt und kann danach nicht mehr geändert werden. Wenn du eine andere Adresse willst, erstell eine neue Seite und lösche die alte.

Änderungen an Seiten, auch die Layout-Einstellungen, kommen mit deiner nächsten Veröffentlichung bei den Besuchern an.

### Seiten, die in deinem Menü fehlen {#orphan-pages}

Eine Seite, auf die kein Menüpunkt verweist, geht leicht verloren, weil Besucher sich nicht zu ihr durchklicken können. Der Bildschirm Seiten markiert solche Seiten mit einem kleinen Symbol für einen unterbrochenen Link ("Kein Navigationseintrag verweist auf diese Seite."). Wenn es welche gibt, zählt ein Hinweis über der Liste sie, mit einem Link **Zum Menü hinzufügen** zum Bildschirm Navigation.

Das ist nur ein Hinweis, nie ein Fehler. Er prüft nur dein Menü. Eine Seite, auf die du irgendwo anders über einen Button verlinkst, bekommt das Symbol trotzdem, und das ist in Ordnung, wenn es so gewollt ist.

## Navigation {#navigation}

Öffne **Navigation** in der Seitenleiste (oder über die obere Leiste des Editors), um das Menü oben auf deiner Website zu bauen. Für diesen Bildschirm brauchst du Bearbeitungsrechte.

![Der Navigations-Editor mit einer Gruppe Community, die drei Seiten enthält](@site/docs/assets/sites/de/navigation.png)

### Logo {#navigation-logo}

Unter **Logo** legst du fest, was links in deiner Navigationsleiste steht: **Logo-Text**, ein **Logo-Bild** aus der Bildbibliothek deines Servers oder beides.

### Menüpunkte {#navigation-items}

Unter **Menüpunkte** fügst du drei Arten von Einträgen hinzu:

- **Seiten-Link hinzufügen** - verlinkt auf eine deiner Seiten. Wähle die Seite aus der Liste. Unter **Eingebaute Seiten** findest du außerdem **Blog**, das auf deinen Blog verlinkt.
- **Externen Link hinzufügen** - verlinkt auf eine beliebige andere Website. Gib eine vollständige Webadresse wie `https://example.com` ein. Links mit `mailto:` und `tel:` funktionieren auch. Externe Links öffnen sich in einem neuen Tab.
- **Gruppe hinzufügen** - ein Container, der ein paar Seiten-Links oder externe Links zusammenfasst. Am Computer erscheint eine Gruppe als Dropdown-Menü, im Handy-Menü klappt sie an Ort und Stelle auf. Eine Gruppe verlinkt selbst nirgendwohin.

Jeder Menüpunkt braucht einen Menütext. Die Reihenfolge auf diesem Bildschirm ist die Reihenfolge, die Besucher sehen. Mit den Pfeilen verschiebst du einen Eintrag nach oben oder unten, mit den Einrück-Buttons verschiebst du ihn in die Gruppe darüber oder wieder heraus. Gruppen können keine anderen Gruppen enthalten, und es gibt eine Grenze, wie viele Einträge auf die oberste Ebene und in jede Gruppe passen. Der Bildschirm sagt dir, wenn du sie erreichst.

Wenn du eine Gruppe entfernst, entfernst du auch die Einträge darin. Deine Seiten werden nicht gelöscht, nur die Menüeinträge.

### Call-to-Action-Button {#navigation-cta}

**Call-to-Action** fügt am Ende deiner Navigation einen optionalen Button hinzu, zum Beispiel "Tritt unserem Discord bei". Er braucht sowohl einen **Schaltflächentext** als auch einen **Schaltflächen-Link**. Fehlt eins davon, wird er nicht gespeichert.

### Speichern und live gehen {#navigation-save}

Klick auf **Navigation speichern**, um dein Menü zu speichern. Wenn vorher etwas behoben werden muss, sagt dir die Liste **Behebe das vor dem Speichern**, was es ist, zum Beispiel ein Eintrag ohne Menütext oder eine Gruppe über der Grenze. Die Liste **Ein Blick lohnt sich** zeigt Dinge, die das Speichern nicht verhindern, aber wahrscheinlich Fehler sind:

- eine Gruppe ohne Inhalt (sie erscheint nicht auf deiner Website),
- ein Eintrag, der auf eine Seite zeigt, die es nicht mehr gibt,
- ein externer Link, der mit einem Schrägstrich beginnt. Der zeigt auf deine eigene Website, nimm also lieber einen Seiten-Link,
- eine Link-Art, die deine Website nicht öffnen kann. Solche Einträge werden aus deinem Menü weggelassen.

Speichern aktualisiert deinen Entwurf. Besucher sehen das neue Menü nach deiner nächsten Veröffentlichung.

## Blöcke {#blocks}

Seiten werden aus **Blöcken** gebaut. Um einen hinzuzufügen, klick auf ein **+** in der Strukturliste (oder auf **Block hinzufügen** auf einer leeren Seite), oder fahr auf der Leinwand zwischen zwei Blöcke und klick auf die Leiste **Block einfügen**, die dort erscheint. Beides öffnet die Blockauswahl an dieser Stelle.

![Die Blockauswahl mit Suche, Kategorien und Blockvorschauen](@site/docs/assets/sites/de/block-picker.png)

Die Auswahl hat zwei Tabs:

- **Blöcke** - einzelne Blöcke, gruppiert in **Layout**, **Inhalt** und **Discord**. Blöcke, die du kürzlich genutzt hast, stehen unter **Zuletzt verwendet**. Das Suchfeld ist bereit, sobald die Auswahl aufgeht: tipp einen Teil eines Namens, blättere mit den Pfeiltasten und drück **Enter** zum Einfügen. **Esc** schließt die Auswahl.
- **Abschnitte** - fertige Kombinationen aus mehreren Blöcken, die in einem Rutsch eingefügt werden. Siehe [Abschnitte](#sections) unten.

Wähle einen Block auf der Leinwand oder in der Strukturliste aus, um seine Optionen im rechten Panel zu sehen. **Duplizieren** legt direkt darunter eine Kopie an, und **Block löschen** entfernt ihn, nachdem du es bestätigt hast.

Ein Block, dem Pflichtangaben fehlen, wird mit **Angaben fehlen** markiert, und ein Block, der leer ist und auf deiner Website nichts zeigen würde, wird in der Strukturliste gekennzeichnet.

### Abschnitte {#sections}

Abschnitte geben dir einen ganzen Teil einer Seite auf einmal. Jede Zeile, die ein Abschnitt einfügt, ist Platzhaltertext, also klick sie auf der Seite an, um sie neu zu schreiben. Abschnitte lassen sich nur auf der obersten Ebene einer Seite einfügen, nicht in Spalten.

| Abschnitt          | Was er einfügt                                                        |
| ------------------ | --------------------------------------------------------------------- |
| Willkommen         | Eine Hero-Begrüßung und drei Gründe zu bleiben.                       |
| Über uns & Team    | Deine Geschichte und die Menschen hinter dem Server.                  |
| FAQ & Kontakt      | Die häufigsten Fragen und ein Weg für alle anderen.                   |
| Regeln & Beitritt  | Nummerierte Regeln mit dem Beitreten-Button darunter.                 |
| Highlights         | Vier kurze Kacheln für das, was dein Server bietet.                   |
| Geschichte & Zitat | Zwei Spalten: deine Geschichte neben der Stimme eines Mitglieds.      |
| Erste Schritte     | Onboarding in drei Tabs statt in einer Textwand.                      |
| Abschluss-Aufruf   | So endet eine Seite: Trennlinie, eine klare Aufforderung, ein Button. |

### Der Block-Katalog {#block-catalog}

**Layout**

| Block                 | Was er macht                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| Hero                  | Großes Banner mit Titel und Untertitel oben auf einer Seite.                                                |
| Abschnittsüberschrift | Eine Überschrift, um einen neuen Abschnitt einzuleiten.                                                     |
| Spalten               | Platziere Blöcke nebeneinander in mehreren Spalten. Auf kleinen Bildschirmen stapeln sich die Spalten.      |
| Abstand               | Füge vertikalen Leerraum zwischen Blöcken ein.                                                              |
| Trennlinie            | Eine horizontale Linie, um Inhalte zu trennen.                                                              |
| Kartenraster          | Ein Raster aus Karten mit Bildern, Titeln und Links.                                                        |
| Tabs                  | Fasse Inhalte in umschaltbaren Tabs zusammen.                                                               |
| Akkordeon             | Aufklappbare Abschnitte. Schalte **Mehrere gleichzeitig öffnen** ein, damit mehr als einer offen sein kann. |

**Inhalt**

| Block                                | Was er macht                                                 |
| ------------------------------------ | ------------------------------------------------------------ |
| Text                                 | Ein formatierter Textblock in Markdown.                      |
| Bild                                 | Ein einzelnes Bild mit optionaler Bildunterschrift und Link. |
| Bildergalerie                        | Zeige mehrere Bilder in einem Raster.                        |
| Video                                | Bette ein YouTube- oder Twitch-Video ein.                    |
| Zitat                                | Hebe ein Zitat mit optionalem Autor hervor.                  |
| Handlungsaufruf                      | Ein Aufruf mit Buttons, der zum Handeln anregt.              |
| Icon-Raster                          | Ein Raster aus Icons mit kurzen Beschriftungen.              |
| Countdown                            | Ein Live-Countdown bis zu einem Datum und einer Uhrzeit.     |
| [Formular](/docs/sites/forms)        | Ein Bewerbungs- oder Kontaktformular zum Ausfüllen.          |
| [Neueste Beiträge](/docs/sites/blog) | Karten, die zu deinen neuesten Blog-Beiträgen führen.        |
| [Events](/docs/sites/events)         | Kommende Discord-Events von deinem Server.                   |

**Discord**

| Block            | Was er macht                                         |
| ---------------- | ---------------------------------------------------- |
| Beitreten-Button | Ein Button, der Besucher auf deinen Discord einlädt. |
| Links            | Eine Liste oder ein Raster aus Links.                |
| Über uns         | Ein formatierter Textblock über deine Community.     |
| Team             | Stelle deine Teammitglieder vor.                     |
| Regeln           | Eine nummerierte oder einfache Liste von Regeln.     |
| FAQ              | Häufige Fragen und Antworten.                        |

**Spalten** enthält andere Blöcke. Mit **Spalte hinzufügen** und dem Entfernen-Button änderst du die Anzahl der Spalten, mit **Block hinzufügen** in einer Spalte füllst du sie. Wenn du eine Spalte entfernst, in der noch Blöcke sind, wandern diese Blöcke in die Nachbarspalte, statt gelöscht zu werden. Ein Spalten-Block kann nicht in einem anderen Spalten-Block stecken.

:::note Bilder kommen aus der Bildbibliothek deines Servers
Bildfelder (Banner, Titelbilder, Galeriebilder, Avatare) nutzen die bestehende Bildbibliothek deines Servers, dieselbe, die auch dein Bot verwendet. Ein Bildlink von irgendwo anders wird beim Speichern abgelehnt, und der Editor warnt dich vorher. Wähle stattdessen ein Bild aus der Bibliothek.
:::

### Icon-Auswahl {#icon-picker}

Jeder Eintrag in einem **Icon-Raster** kann ein Icon zeigen. Klick auf das Feld **Icon**, um die Auswahl zu öffnen, such ein Icon über seinen Namen und klick es an. **Keins** entfernt das Icon wieder. Wenn du beim selben Eintrag zusätzlich ein Bild setzt, wird statt des Icons das Bild angezeigt.

## Blöcke verschieben {#moving-blocks}

Es gibt mehrere Wege, die Reihenfolge deiner Blöcke zu ändern:

- Zieh einen Block in der **Struktur**-Liste.
- Fahr auf der Leinwand über einen Block und zieh ihn an seinem Griff, oder nutze seine Buttons **Block nach oben verschieben** und **Block nach unten verschieben**.
- Wähle einen Block aus und drück **Alt+Pfeil hoch** oder **Alt+Pfeil runter**.

Jede Verschiebung ist ein Schritt, den du [rückgängig machen](#undo-redo) kannst.

## Inline-Textbearbeitung {#inline-editing}

Du bearbeitest Text direkt auf der Seite, nicht in einem Seitenpanel. Klick in der Vorschau auf einen Titel, eine Beschriftung oder einen Absatz und tipp los. Drück **Enter** zum Übernehmen, **Esc** zum Abbrechen, oder klick daneben, um zu speichern.

Text mit Markdown (der Text-Block, Über uns, FAQ-Antworten, Tab- und Akkordeon-Inhalte) funktioniert beim Bearbeiten etwas anders: **Enter** beginnt eine neue Zeile, und eine kleine schwebende Werkzeugleiste bietet **Fett**, **Kursiv**, **Link**, **Überschrift 2** und **Überschrift 3**. Klick auf **Fertig** oder daneben, um zu speichern.

Manche Blöcke zeigen den Hinweis "Den Text dieses Blocks bearbeitest du direkt auf der Seite. Klick ihn in der Vorschau an." So sagt dir der Editor, wo du klicken musst. Ein paar Texte erscheinen nur in einem Zustand, den die Vorschau nie zeigt, etwa die Nachricht nach Ablauf eines Countdowns oder eine Bildunterschrift, bevor das Bild gesetzt ist. Die bleiben im rechten Panel.

## Design {#design}

![Das Design-Panel mit den Theme-Vorlagen neben der Vorschau](@site/docs/assets/sites/de/design-panel.png)

Öffne **Design** in der linken Leiste, um das Aussehen deiner ganzen Website zu ändern. Wähle unter **Design** eines der fertigen Designs als Ausgangspunkt. Die Designs sind in Dunkel, Hell, Gaming, Kreativ und Premium gruppiert. Öffne dann **Dieses Design anpassen** für den Feinschliff:

- **Farben** - Seitenhintergrund, Flächen, Text, Primär-, Sekundär- und Akzentfarbe, Rahmen und Trennlinien.
- **Typografie** - Schriften für Überschriften, Fließtext und Monospace.
- **Form & Wirkung** - Eckenradius, Abstandsdichte und Schattenstil.

Jede Änderung färbt die Live-Leinwand sofort um, sodass du das Ergebnis direkt siehst. Mit **Auf Design-Standard zurücksetzen** verwirfst du deine Änderung an einem Wert. Das Panel speichert von selbst, und dein Design geht mit deiner nächsten Veröffentlichung live.

### Hintergründe {#backgrounds}

Die Blöcke Hero, Text und Handlungsaufruf haben im rechten Panel eine Option **Hintergrund**. Du kannst wählen:

- **Kein** - der Block nutzt dein Design.
- **Einfarbig** - eine Farbe.
- **Verlauf** - zwei oder mehr Farben, linear oder radial, in der Richtung, die du wählst.
- **Bild** - ein Bild aus deiner Bibliothek, mit einer Anpassung (ausfüllen, einpassen oder kacheln), optionalem Parallax-Scrollen, einer Overlay-Farbe und Unschärfe.
- **Muster** - Punkte, Raster, Wellen oder Diagonalen in einer Farbe deiner Wahl.
- **Animiert** - ein sich langsam bewegender Verlauf aus den Farben, die du wählst.

## Footer & Leiste {#footer-and-bar}

Öffne **Footer & Leiste** in der linken Leiste für die Teile, die alle Seiten gemeinsam haben:

- **Fußzeile** - **Social-Links** (Plattform wählen und Adresse einfügen) und zusätzliche **Fußzeilen-Links**, unten auf jeder Seite. Änderungen an der Fußzeile gehen mit deiner nächsten Veröffentlichung live.
- **Ankündigungsleiste** - ein Streifen über deiner Navigation für eine kurze Nachricht. Anders als fast alles andere geht sie von selbst live, ohne dass du deine Website neu veröffentlichst. Siehe [Ankündigungsleiste](/docs/sites/small-features#announcement-bar).

Der Website-Name, Suche & Teilen, die rechtlichen Angaben und die übrigen Website-Einstellungen findest du auf dem Bildschirm **Einstellungen**.

## Ansichtsvorschau {#viewport}

Mit der Ansichts-Umschaltung in der oberen Leiste siehst du deine Seite in den Breiten **Desktop**, **Tablet** und **Handy**. Alle Blöcke sind Mobile-First gebaut, und Spalten werden auf kleinen Bildschirmen zu einer einzigen Spalte.

:::note Wenn die visuelle Vorschau nicht lädt
Wenn die Live-Vorschau nicht verfügbar ist, wechselt der Editor in einen Ersatzmodus. Du wählst einen Block aus der Liste und bearbeitest alles, auch seinen Text, im Einstellungspanel. Speichern und Veröffentlichen funktionieren die ganze Zeit weiter.
:::

## Autosave {#autosave}

Es gibt keinen Speichern-Button. Der Editor speichert die aktuelle Seite von selbst, ein paar Sekunden nachdem du aufgehört hast zu tippen. Das Abzeichen in der oberen Leiste zeigt dir den Stand:

- **Gespeichert** - alles ist gespeichert.
- **Speichert…** - gerade wird gespeichert.
- **Bitte prüfen** - ein Speichervorgang hat nicht geklappt. Klick auf das Abzeichen, um zu sehen, warum.

"Bitte prüfen" erscheint, wenn einem Block Pflichtangaben fehlen, wenn dein Text unsere automatische Inhaltsprüfung nicht bestanden hat oder wenn wir den Server nicht erreichen konnten. Autosave pausiert für diese Seite, bis das geklärt ist, aber deine Änderungen bleiben in der Zwischenzeit sicher im Editor. Ergänze, was fehlt, oder korrigiere den markierten Text, dann geht das Speichern von selbst weiter. Wenn der Server nicht erreichbar war, versucht es der Editor von selbst erneut, oder du klickst auf **Jetzt noch einmal versuchen**.

Wenn du die Seite wechselst oder den Editor verlässt, während eine Seite nicht gespeichert werden konnte, fragt dich der Editor, bevor er diese Änderungen verwirft.

## Rückgängig und Wiederherstellen {#undo-redo}

Nutze die Buttons für Rückgängig und Wiederherstellen in der oberen Leiste, oder drück **Strg+Z** zum Rückgängigmachen und **Strg+Umschalt+Z** (oder **Strg+Y**) zum Wiederherstellen. Der Verlauf umfasst die Blöcke und Texte der aktuellen Seite und wird geleert, wenn du die Seite wechselst. Änderungen an Design und Fußzeile gehören nicht dazu. Er betrifft immer nur deinen Entwurf, nie deine Live-Website.

## Vorschau {#preview}

Klick auf **Vorschau**, um deinen aktuellen Entwurf in einem neuen Tab zu öffnen. Alles, was noch nicht gespeichert ist, wird vorher gespeichert, sodass die Vorschau genau das zeigt, was auf deinem Bildschirm ist. So kannst du eine Seite prüfen, bevor irgendetwas veröffentlicht wird.

Um den Entwurf mit jemandem aus deinem Team zu teilen, nutze **Vorschau-Link kopieren** im [Veröffentlichen-Popover](#publish). Jeder mit diesem Link kann deinen Entwurf sehen. **Link zurücksetzen** erstellt einen neuen Link und macht alle Links ungültig, die du vorher geteilt hast. Zum Zurücksetzen brauchst du Admin-Rechte.

## Veröffentlichen und Versionsverlauf {#publish}

Wenn dein Entwurf fertig ist, klick auf **Veröffentlichen**. Beim Öffnen wird zuerst alles gespeichert, was noch aussteht. Dann siehst du genau, was live geht: eine Liste der Seiten, die sich seit deiner letzten Veröffentlichung geändert haben (markiert als **Neu**, **Geändert** oder **Entfernt**), und ob sich deine Website-Einstellungen geändert haben. Eine Seite kann auch nach einem Design- oder Plattform-Update oder nach dem Umsortieren von Seiten als geändert erscheinen, eine lange Liste ist also normal. Klick im Popover auf **Veröffentlichen**, um live zu gehen.

![Das Veröffentlichen-Popover mit den geänderten Seiten und Einstellungen](@site/docs/assets/sites/de/publish-popover.png)

Ein paar Dinge, die du wissen solltest:

- Wenn Blöcken noch Angaben fehlen, sagt dir das Popover Bescheid, und das Veröffentlichen wartet, bis du sie ergänzt hast.
- Wenn deine Website über ein Formular Daten sammelt, aber keine Datenschutzerklärung verlinkt ist, weist dich das Popover darauf hin. Es hält dich nicht vom Veröffentlichen ab.
- Wenn sich nichts geändert hat, steht auf dem Button **Veröffentlicht**, und es gibt nichts zu tun. Sobald deine Website live ist, bringt dich **Live-Website öffnen** im Popover dorthin.

Im selben Popover findest du deinen **Versionsverlauf**. Jede Veröffentlichung wird als Version aufbewahrt (die letzten zehn), und die Version, die Besucher sehen, ist mit **Live** markiert. Mit Admin-Rechten kannst du mit **Zurücksetzen** zu einer früheren Version zurückkehren und deine Live-Website damit ersetzen. Unter [Veröffentlichen & Live gehen](/docs/sites/publishing) findest du das ganze Bild zu Entwürfen und dazu, was wann live geht.

## Nur-Ansehen-Modus {#view-only}

Wenn du für die Website nur Leserechte hast, öffnet sich der Editor im Modus **Nur ansehen**. Du kannst dir jede Seite ansehen und jedes Panel öffnen, aber Bearbeiten ist abgeschaltet, und statt des Veröffentlichen-Buttons gibt es **Versionsverlauf**, damit du trotzdem siehst, was wann veröffentlicht wurde. Um etwas zu ändern, brauchst du Bearbeitungsrechte für die Website. Siehe [Wer eine Website bearbeiten kann](/docs/sites/intro#permissions).

Der Editor ist außerdem für alle schreibgeschützt, solange SCNX eine Website vom Netz genommen hat. Ein Hinweis oben erklärt, was passiert ist.
