---
sidebar_position: 5
title: Blog & Ankündigungen
description: Schreibe Beiträge für deine SCNX-Website - Entwürfe, Planung, Titelbilder, die /blog-Seite, RSS, der Block Neueste Beiträge und Discord-Ankündigungen.
---

# Blog & Ankündigungen

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Gib deiner Community einen Ort, um deine Neuigkeiten zu lesen. Der Blog ist eine Sammlung von Beiträgen mit eigener Seite auf deiner Website, einem RSS-Feed, einem Block, den du auf jede Seite setzen kannst, und optionalen Ankündigungen auf deinem Discord-Server.

## Der Blog-Bereich {#blog-screen}

![Der Blog-Bereich mit einem Entwurf, einem geplanten und drei veröffentlichten Beiträgen](@site/docs/assets/sites/de/blog-list.png)

Öffne **Blog** im Sites-Menü deines Dashboards. Hier läuft alles rund um deinen Blog zusammen:

- **Deine Beiträge** - alle Beiträge, die neuesten zuerst. Jeder zeigt seinen Link (`/blog/<slug>`) und ein Abzeichen: **Entwurf**, **Geplant** (mit der Zeit, zu der er erscheint) oder **Live**. Live-Beiträge haben ein kleines Symbol, das den Beitrag auf deiner Website öffnet.
- **Neuer Beitrag** - beginnt einen neuen Beitrag.
- **Neue Beiträge auf Discord ankündigen** - siehe [Discord-Ankündigungen](#announcements).
- **Blog-Layout** - wie Beiträge auf deiner Blog-Seite angeordnet sind. Siehe [Layouts](#layouts).
- **Zusätze auf der Beitragsseite** - schalte die Lesezeit und die Links zum vorherigen/nächsten Beitrag an oder aus. Siehe [Die Beitragsseite](#post-page).

Klick auf einen Beitrag, um ihn im Beitragseditor zu öffnen.

## Einen Beitrag schreiben {#write}

![Der Beitragseditor mit Titel, Formatierungsleiste und Markdown-Text](@site/docs/assets/sites/de/post-editor.png)

Der Beitragseditor ist eine Schreibseite im Vollbild, ohne Ablenkung. Von oben nach unten:

1. **Titelbild** - optional. Wähl ein Bild aus der Bildbibliothek deines Servers. Du kannst es später ersetzen oder entfernen.
2. **Beitragstitel** - die Überschrift deines Beitrags.
3. **Die Formatierungsleiste** - **Fett**, **Kursiv**, **H2**, **H3**, **Link**, **Bild**, **Aufzählung**, **Nummerierte Liste** und **Zitat**. Jeder Knopf umschließt den markierten Text oder fügt die Formatierung an der Stelle deines Cursors ein. Die Leiste bleibt beim Scrollen oben am Bildschirm.
4. **Dein Text** - geschrieben in Markdown. Das Feld wächst beim Schreiben mit.

Tastenkürzel: **Strg+B** (fett), **Strg+I** (kursiv) und **Strg+K** (Link). Auf dem Mac nutzt du **Cmd** statt **Strg**.

Ein paar Dinge zum Text:

- **Bilder** kommen aus der Bildbibliothek deines Servers. Nutze den Knopf **Bild**, um eins auszuwählen. Bilder von anderen Websites werden aus dem Beitrag entfernt.
- **Links** müssen mit `https://`, `http://` oder `mailto:` beginnen. Auf deiner Website öffnen sie sich in einem neuen Tab.
- **Überschriften**: Dein Beitragstitel ist die Hauptüberschrift der Seite, deshalb erscheint eine `#`-Überschrift in deinem Text als Abschnittsüberschrift.
- Wird ein Beitrag sehr lang, erscheint unter dem Text ein Zähler. Er wird rot, sobald du über dem Limit bist.

### Gespeichert wird von selbst {#autosave}

Du musst nicht speichern. Der Editor speichert kurz nachdem du aufhörst zu tippen, und die obere Leiste zeigt dir, ob es geklappt hat:

| Obere Leiste zeigt                                  | Was das heißt                                                                                                        |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Speichert…** / **Gespeichert**                    | Deine Änderungen werden gerade gespeichert oder sind gespeichert.                                                    |
| **Titel hinzufügen zum Speichern**                  | Ein neuer Beitrag wird erst angelegt, wenn er einen Titel hat.                                                       |
| **Nicht gespeichert: markierte Felder korrigieren** | Etwas ist ungültig. Korrigiere das markierte Feld, dann wird wieder gespeichert.                                     |
| **Nicht gespeichert** mit **Erneut versuchen**      | Speichern hat nicht geklappt. Klick auf **Erneut versuchen**. Willst du die Seite verlassen, warnen wir dich vorher. |

Speichern bringt nie etwas auf deine Website. Das machen nur **Veröffentlichen** und **Aktualisieren**.

Beim Speichern prüfen wir Beiträge außerdem auf unsichere Inhalte. Wird etwas blockiert, siehst du eine Nachricht, was du ändern musst.

### Beitragseinstellungen {#post-settings}

Alles außer Titelbild, Titel und Text findest du unter **Beitragseinstellungen** in der oberen Leiste. Sie öffnen sich als Leiste auf der rechten Seite. Schließen kannst du sie mit **Esc** oder mit einem Klick daneben.

- **URL-Name** - die Webadresse deines Beitrags. Die volle Adresse steht darunter. Bei einem neuen Beitrag folgt sie dem Titel, bis du sie selbst änderst, und **Auf Titel zurücksetzen** baut sie wieder aus dem Titel. Sie nutzt Kleinbuchstaben, Zahlen und Bindestriche. Jeder Beitrag braucht seinen eigenen URL-Namen.
- **Auszug** - ein kurzer Anrisstext. Er erscheint unter dem Titel auf deiner Blog-Seite und im Block Neueste Beiträge, in deinem RSS-Feed und in Discord-Ankündigungen. Optional.
- **Tags** - kurze Schlagwörter, angezeigt am Beitrag, auf seiner Karte und in deinem RSS-Feed. Drück nach jedem Tag die **Eingabetaste**. Tags, die du schon bei anderen Beiträgen genutzt hast, werden beim Tippen vorgeschlagen.
- **Autor** - wird am Beitrag als Autorenzeile angezeigt. Das kann ein beliebiger Name sein, etwa "Das Mod-Team". Es muss kein Discord-Nutzer sein. Lass das Feld leer, wenn keine Autorenzeile erscheinen soll.
- **Suche & Teilen** - **Titel beim Teilen**, **Beschreibung beim Teilen** und **Bild beim Teilen** werden genutzt, wenn jemand den Beitrag teilt. Leer gelassen gelten stattdessen Beitragstitel, Auszug und Titelbild.
- **Beitrag löschen** - entfernt den Beitrag endgültig, nachdem du bestätigt hast.

### Vorschau {#preview}

Wechsle in der oberen Leiste von **Schreiben** zu **Vorschau**, um deinen Beitrag so zu sehen, wie er auf deiner Website aussehen wird, mit deinem Theme, Menü und Fußbereich. Die Vorschau zeigt genau das, was gerade im Editor steht, auch Änderungen, die noch gespeichert werden. Mit den Knöpfen für Desktop und Mobil prüfst du beide Größen.

In der Vorschau fehlen die Links zum vorherigen/nächsten Beitrag, und beim Datum steht, wann der Beitrag geplant ist oder dass er noch nicht veröffentlicht ist. Links in der Vorschau führen nirgendwohin. Wechselst du zurück zu **Schreiben**, bist du genau da, wo du aufgehört hast.

## Veröffentlichen und planen {#drafts}

Ein Beitrag ist in einem von drei Zuständen:

- **Entwurf** - nur für dich im Dashboard sichtbar.
- **Geplant** - geht zur gewählten Zeit von selbst online.
- **Veröffentlicht** - auf deinem Blog für alle lesbar.

Zum Veröffentlichen klickst du in der oberen Leiste auf **Veröffentlichen**. Es öffnet sich ein kleines Fenster:

- **Wann** - **Jetzt** oder **Planen für** ein Datum und eine Uhrzeit. Zeiten gelten in deiner eigenen Zeitzone, und wir zeigen dir, welche das ist.
- **In Discord ankündigen** - setz den Haken, um den Beitrag auf deinem Server anzukündigen. Die Option erscheint nur, wenn Ankündigungen eingerichtet sind, siehe [Discord-Ankündigungen](#announcements).
- Eine kurze Checkliste erinnert dich, wenn der Beitrag **Kein Titelbild** oder keinen Auszug hat. Sie hält dich nie vom Veröffentlichen ab.

Bestätige mit **Jetzt veröffentlichen** oder **Planen**. Ein geplanter Beitrag geht zur gewählten Zeit von selbst online. Du musst dafür nicht online sein.

Um die Zeit eines geplanten Beitrags zu ändern, klick in der oberen Leiste auf **Geplant**. Du kannst eine neue Zeit wählen oder ihn sofort veröffentlichen.

Das **⋯**-Menü neben dem Knopf hat den Rest:

- **Zurückziehen** - macht einen veröffentlichten oder geplanten Beitrag wieder zum Entwurf und nimmt ihn von deiner Website.
- **Änderungen verwerfen** - siehe unten.
- **Auf der Website öffnen** - öffnet den veröffentlichten Beitrag in einem neuen Tab.

### Einen veröffentlichten Beitrag bearbeiten {#editing-live}

Du kannst an einem Beitrag weiterarbeiten, nachdem er veröffentlicht ist. Deine Änderungen werden beim Tippen gespeichert, aber deine Besucher sehen weiter die veröffentlichte Fassung, bis du auf **Aktualisieren** klickst. Solange etwas wartet, zeigt die obere Leiste **Veröffentlicht · unveröffentlichte Änderungen**.

- **Aktualisieren** bringt deine Änderungen auf deine Website.
- **Änderungen verwerfen** im **⋯**-Menü wirft deine Änderungen weg und kehrt zur veröffentlichten Fassung zurück.
- **Zurückziehen** behält deine neuesten Änderungen, damit nichts verloren geht. Der Beitrag wird einfach wieder ein Entwurf.

Geplante Beiträge funktionieren genauso. Deine Änderungen warten, bis du auf **Aktualisieren** klickst, damit eine halbfertige Änderung nicht von selbst mit online geht, wenn die geplante Zeit kommt.

## Deine Blog-Seite {#blog-page}

Veröffentlichte Beiträge erscheinen unter **`/blog`** auf deiner Website, die neuesten zuerst. Bei vielen Beiträgen wird die Seite aufgeteilt, und Knöpfe führen zu neueren und älteren Beiträgen. Außerdem gibt es einen sichtbaren Link zu deinem [RSS-Feed](#rss).

Jeder Beitrag hat seine eigene Seite unter `/blog/<slug>`.

Der Blog nutzt das Theme, das Menü und den Fußbereich deiner Website, damit er sich wie der Rest deiner Website anfühlt. Um ihn aus deinem Menü zu verlinken, füge im Bereich Navigation den eingebauten Eintrag **Blog** hinzu. Deine Blog-Seite und jeder Beitrag stehen außerdem in der Sitemap deiner Website für Suchmaschinen.

### Layouts {#layouts}

Unter **Blog-Layout** im Blog-Bereich wählst du, wie Beiträge angeordnet werden. Klick danach auf **Speichern**.

| Layout            | So sieht es aus                                                                                              | Gut für                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| **Liste**         | Übersichtliche Zeilen mit dem Datum neben jedem Beitrag. Dein neuester Beitrag bekommt einen größeren Titel. | Die meisten Blogs, vor allem ohne Titelbilder |
| **Hervorgehoben** | Dein neuester Beitrag bekommt oben ein großes, gestaltetes Panel. Die übrigen stehen darunter.               | Blogs mit jeweils einer großen Geschichte     |
| **Raster**        | Ein Raster aus Karten mit Titelbildern. Beiträge ohne Titelbild bekommen eine schlichte Textkarte.           | Beiträge, die alle ein Titelbild haben        |

Das Layout ändert sich auf deiner Website sofort, ohne dass du deine Website neu veröffentlichen musst.

### Die Beitragsseite {#post-page}

Jede Beitragsseite beginnt mit einem Kopfbereich in den Farben deines Themes:

- ein Link zurück zu allen Beiträgen,
- Datum, Autor und Lesezeit,
- der Titel,
- die Tags.

Direkt nach dem Kopfbereich kommt das Titelbild, danach dein Text. Ganz unten führen Links zum vorherigen und nächsten Beitrag.

Unter **Zusätze auf der Beitragsseite** im Blog-Bereich kannst du **Geschätzte Lesezeit anzeigen** und **Links zum vorherigen/nächsten Beitrag anzeigen** ausschalten. Beides ist standardmäßig an, und Änderungen erscheinen auf deiner Website, sobald du auf **Speichern** klickst.

Teilt jemand einen Beitrag, nutzt die Link-Vorschau die Einstellungen unter **Suche & Teilen** des Beitrags, sonst seinen Titel, Auszug und sein Titelbild.

## RSS-Feed {#rss}

Dein Blog hat einen RSS-Feed unter **`/blog/rss.xml`**. Er listet deine neuesten Beiträge mit Titel, Auszug, Tags und einem Link zum ganzen Beitrag. Leser können ihn in einem RSS-Reader abonnieren, und du kannst ihn nutzen, um deine Beiträge in andere Tools einzuspeisen, die RSS lesen.

## Der Block Neueste Beiträge {#latest-posts}

Um deine neuesten Beiträge auch anderswo zu zeigen, zum Beispiel auf deiner Startseite, füge den Block **Neueste Beiträge** auf einer beliebigen Seite hinzu. Er zeigt Karten, die zu deinen neuesten Beiträgen führen. Wie viele Karten er zeigt, legst du in den Optionen des Blocks mit **Wie viele Beiträge** fest. Standardmäßig sind es 3. Im Editor zeigt er Beispielkarten. Auf deiner Website zeigt er immer deine aktuellen veröffentlichten Beiträge.

## Dein Blog im Editor {#editor-preview}

Du kannst dir deinen Blog auch im Website-Editor ansehen. Öffne oben im Editor die Seitenauswahl und wähl unter deinen Seiten **Blog**. Der Eintrag erscheint, sobald du einen veröffentlichten Beitrag hast oder dein Menü auf den Blog verlinkt.

Der Editor zeigt dann deine echte Blog-Seite mit deinem Design. Klick auf einen Beitrag, um ihn anzusehen, und blättere mit den Seitenknöpfen. Diese Ansicht ist nur zum Anschauen. Die Leiste links hat **Blog öffnen** und **Blog-Layout-Einstellungen**, die dich in den Blog-Bereich bringen. Die Bereiche **Design** und **Footer & Leiste** funktionieren weiter, so kannst du dein Theme anpassen, während du deinen Blog ansiehst.

## Discord-Ankündigungen {#announcements}

Dein Blog kann eine Nachricht in einem Discord-Kanal posten, sobald ein Beitrag online geht. Richte das unter **Neue Beiträge auf Discord ankündigen** im Blog-Bereich ein:

1. Öffne in Discord die Einstellungen des Kanals, in dem gepostet werden soll. Leg unter **Integrationen** einen Webhook an und kopier seine URL.
2. Füg sie in **Discord-Webhook-URL** ein.
3. Optional: Um eine Rolle zu pingen, trag ihre ID in **Rolle pingen (optional)** ein. Eine Rollen-ID kannst du kopieren, wenn der Entwicklermodus in Discord an ist.
4. Klick auf **Speichern**.
5. Klick auf **Test senden**, um zu prüfen, ob es klappt. Die Testnachricht pingt nie jemanden.

Um Ankündigungen abzuschalten, leere die Webhook-URL und speichere.

Die Ankündigung zeigt den Titel des Beitrags als Link, den Auszug, das Titelbild und den Namen deiner Website. Nur die gewählte Rolle kann gepingt werden. Nichts, was in einem Beitrag steht, kann jemanden pingen.

So verhalten sich Ankündigungen:

- **Jeder Beitrag wird genau einmal angekündigt.** Bearbeiten, Aktualisieren oder Zurückziehen und erneutes Veröffentlichen schickt ihn nicht noch einmal.
- **Geplante Beiträge** werden angekündigt, wenn sie online gehen, meist innerhalb einer Minute.
- **Du kannst sie auslassen.** Nimm beim Veröffentlichen den Haken bei **In Discord ankündigen** raus, dann wird dieser Beitrag nie angekündigt.
- **Deine bisherigen Beiträge werden nicht angekündigt.** Wenn du Ankündigungen einrichtest, landen deine älteren Beiträge nicht in Discord. Nur ein Beitrag, der etwa in der letzten Stunde online gegangen ist, kann noch angekündigt werden, sobald du den Webhook speicherst.
- **Deine Website muss live sein.** Solange deine Website nicht veröffentlicht ist oder im Wartungsmodus steckt, werden keine Ankündigungen verschickt.
- Ist Discord in dem Moment nicht erreichbar, fällt die Ankündigung aus und wird nicht wiederholt.

Sind Ankündigungen eingerichtet, zeigt das Veröffentlichen-Fenster **In Discord ankündigen**. Sind sie es nicht, steht dort ein Hinweis mit dem Link **Jetzt einrichten**. Wurde ein Beitrag schon angekündigt, siehst du dort das Datum der Ankündigung.

## Was sofort live ist und was du veröffentlichen musst {#live}

Beiträge warten nicht darauf, dass du deine ganze Website veröffentlichst. Wenn du einen Beitrag veröffentlichst oder aktualisierst, erscheint er sofort auf deinem Blog. Das gilt auch für das Blog-Layout, die Zusätze auf der Beitragsseite und den Block Neueste Beiträge, der immer deine aktuellen Beiträge zeigt.

Zwei Dinge solltest du wissen:

- Dein Blog ist nur sichtbar, solange deine Website selbst veröffentlicht ist und nicht im Wartungsmodus steckt.
- Theme, Menü und Fußbereich rund um deinen Blog kommen aus der zuletzt veröffentlichten Fassung deiner Website. Änderst du dein Design, veröffentliche deine Website, damit es auch auf dem Blog erscheint. Siehe [Veröffentlichen](/docs/sites/publishing).
