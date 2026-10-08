---
sidebar_position: 8
title: Einstellungen
description: Die Seite Einstellungen von SCNX Sites mit allgemeinen Angaben, Suche & Teilen, rechtliche Angaben, Bot-Schutz, Wartungsmodus, Branding und das Löschen deiner Website.
---

# Einstellungen {#settings}

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

**Einstellungen** findest du im Sites-Menü im Dashboard deines Servers, neben **Übersicht**, **Seiten**, **Editor**, **Navigation**, **Blog**, **Formulare** und **Domains**.

In den **Einstellungen** steckt alles zu deiner Website, was keine Seite und kein Design ist. Die Seite ist in Karten aufgeteilt, in dieser Reihenfolge: **Allgemein**, **Suche & Teilen**, **Rechtliche Angaben**, **Bot-Schutz**, **Wartungsmodus**, **Branding** und **Gefahrenzone**.

![Die Karte Allgemein auf der Seite Einstellungen](@site/docs/assets/sites/de/settings.png)

Jede Karte hat ihren eigenen **Speichern**-Button, es ändert sich also nichts, bis du die jeweilige Karte speicherst. Alle mit Zugriff auf die Website können diese Seite öffnen. Zum Ändern einer Karte brauchst du Bearbeitungszugriff, zum Löschen der Website Admin-Zugriff.

:::note Manche Einstellungen brauchen eine Veröffentlichung
**Allgemein** und **Suche & Teilen** gehören zum Entwurf deiner Website. Nach dem Speichern erreichen deine Änderungen Besucher mit deiner nächsten [Veröffentlichung](/docs/sites/publishing#publish). Alles andere auf dieser Seite, auch der Schalter für das Vorschaubild, wirkt sofort nach dem Speichern. Die vollständige Liste findest du unter [Was eine Veröffentlichung braucht und was live ist](/docs/sites/publishing#snapshot).
:::

## Allgemein {#general}

- **Website-Name**: der Name deiner Website, angezeigt im Browser-Tab und in Link-Vorschauen.
- **Beschreibung**: eine kurze Zusammenfassung deiner Community, genutzt für Suchmaschinen und Link-Vorschauen.
- **Sprache**: die Sprache der vorgegebenen Texte deiner Website, etwa Buttons und Beschriftungen. Du kannst **English** oder **Deutsch** wählen. Deine eigenen Inhalte bleiben genau so, wie du sie geschrieben hast.
- **Favicon**: das kleine Symbol im Browser-Tab. Wähle ein Bild aus der Bildbibliothek deines Servers. Legst du keins fest, nutzt deine Website das Icon deines Discord-Servers.

## Suche & Teilen {#sharing}

Diese Karte legt fest, wie deine Website in Suchergebnissen aussieht und wenn jemand einen Link zu ihr teilt, zum Beispiel auf Discord oder Twitter/X.

- **Titel beim Teilen**: der Titel in Link-Vorschauen. Setzt du einen, gilt er für jede Seite. Lässt du ihn leer, nutzt jede Seite ihren eigenen Seitentitel. Blog-Beiträge nutzen immer ihren eigenen Titel.
- **Beschreibung beim Teilen**: der Text unter dem Titel. Lässt du sie leer, wird die **Beschreibung** deiner Website genutzt.
- **Bild beim Teilen**: das Vorschaubild. Wähle eins aus der Bildbibliothek deines Servers.

Unter diesen Feldern liegt ein Schalter für das **erzeugte Vorschaubild**. Ist er an und hast du kein **Bild beim Teilen** festgelegt, erstellen wir ein Vorschaubild für dich: eine breite Karte mit deinem Website-Namen, deiner Beschreibung und deinem Server-Icon, in den Farben und der Überschriften-Schrift deines Themes. Sie aktualisiert sich von selbst, wenn sich davon etwas ändert, du musst sie also nie neu erstellen.

Schaltest du ihn aus, zeigen geteilte Links dein **Bild beim Teilen**, falls du eins festgelegt hast, und sonst das Icon deines Servers. Dieser Schalter ist live und braucht keine Veröffentlichung.

### Von Suchmaschinen gefunden werden {#search-engines}

Für Suchmaschinen wie Google musst du nichts einrichten. Sobald deine Website veröffentlicht ist, hat sie automatisch:

- eine **Sitemap** unter `/sitemap.xml`: eine Liste all deiner Seiten und veröffentlichten Blog-Beiträge, die Suchmaschinen lesen, um sie zu finden. Deine Seiten stehen darin in der Reihenfolge, die du auf dem Bildschirm [Seiten](/docs/sites/editor#pages) festlegst.
- eine **robots.txt** unter `/robots.txt`: eine kurze Datei, die Suchmaschinen sagt, was sie sich ansehen dürfen. Sie erlaubt deine ganze veröffentlichte Website.

Deine Entwürfe bleiben aus den Suchergebnissen draußen. [Vorschau-Links](/docs/sites/publishing#preview) sind so markiert, dass Suchmaschinen sie nicht aufnehmen, und eine Website, die noch nicht veröffentlicht ist oder im Wartungsmodus läuft, bittet Suchmaschinen, fernzubleiben.

## Rechtliche Angaben und Bot-Schutz {#legal}

Unter **Rechtliche Angaben** verlinkst du deine Datenschutzerklärung, dein Impressum und einen Kontakt für Datenfragen. Unter **Bot-Schutz** wählst du, wie die Spam-Prüfung deiner Formulare für Besucher aussieht. Beides ist vor allem wichtig, sobald deine Website ein Formular hat, deshalb erklären wir es auf der Seite [Formulare](/docs/sites/forms). Beides wirkt sofort.

Das Feld **Impressum** ist für einen Link zu deinem Impressum: eine Seite, auf der steht, wer die Website betreibt und wie man ihn erreicht. In manchen Ländern, zum Beispiel in Deutschland, brauchen viele Websites eins. Wir schreiben es nicht für dich, also verlinke eine Seite, die du schon hast. Es muss ein vollständiger Link sein, der mit `https://` beginnt. Dein Impressum erscheint als Link im Footer deiner Website, neben deiner Datenschutzerklärung. Ob deine Website ein Impressum braucht, erklären wir unter [Inhaltsregeln & Rechtliches](/docs/sites/content-and-legal).

## Wartungsmodus und Gefahrenzone {#maintenance-and-delete}

Der **Wartungsmodus** ersetzt deine ganze Website vorübergehend durch einen kurzen Hinweis. In der **Gefahrenzone** löschst du deine Website. Beides erklären wir unter [Veröffentlichen & Live gehen](/docs/sites/publishing).

## Branding {#branding}

Die Karte **Branding** zeigt dir, ob dein Footer das kleine SCNX-Badge zeigt, also das SCNX-Logo mit den Worten "Diese Website läuft auf SCNX". Dort steht **SCNX-Badge sichtbar** oder **SCNX-Badge ausgeblendet**. Hier gibt es nichts einzustellen: Das richtet sich automatisch nach dem Tarif deines Servers. Unser Professional-Tarif und unser Enterprise-Tarif blenden das Badge aus. Ein Tarifwechsel erreicht deine Website innerhalb weniger Minuten, ohne Veröffentlichung.

Die Links **Plattform-Impressum**, **Plattform-Datenschutz** und **Diese Seite melden** bleiben in jedem Tarif in deinem Footer. Siehe [Branding](/docs/sites/intro#branding).
