---
sidebar_position: 7
title: Einstellungen, Statistiken & kleinere Funktionen
description: Die Einstellungen-Seite von SCNX Sites, die Website-Statistiken, die Ankündigungsleiste, Weiterleitungen und das kompakte Link-in-Bio-Layout.
---

# Einstellungen, Statistiken & kleinere Funktionen

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Diese Seite behandelt die Teile deiner Website, die keine Seiten oder Blöcke sind: die Seite **Einstellungen**, die **Statistiken** und ein paar kleinere Funktionen. **Einstellungen** und **Statistiken** findest du im Sites-Menü im Dashboard deines Servers, neben **Übersicht**, **Seiten**, **Editor**, **Navigation**, **Blog**, **Formulare** und **Domains**.

## Die Seite Einstellungen {#settings}

In den **Einstellungen** steckt alles zu deiner Website, was keine Seite und kein Design ist. Die Seite ist in Karten aufgeteilt, in dieser Reihenfolge: **Allgemein**, **Suche & Teilen**, **Rechtliche Angaben**, **Bot-Schutz**, **Wartungsmodus**, **Branding** und **Gefahrenzone**.

![Die Karte Allgemein auf der Seite Einstellungen](@site/docs/assets/sites/de/settings.png)

Jede Karte hat ihren eigenen **Speichern**-Button, es ändert sich also nichts, bis du die jeweilige Karte speicherst. Alle mit Zugriff auf die Website können diese Seite öffnen. Zum Ändern einer Karte brauchst du Bearbeitungszugriff, zum Löschen der Website Admin-Zugriff.

:::note Manche Einstellungen brauchen eine Veröffentlichung
**Allgemein** und **Suche & Teilen** gehören zum Entwurf deiner Website. Nach dem Speichern erreichen deine Änderungen Besucher mit deiner nächsten [Veröffentlichung](/docs/sites/publishing#publish). Alles andere auf dieser Seite, auch der Schalter für das Vorschaubild, wirkt sofort nach dem Speichern. Die vollständige Liste findest du unter [Was eine Veröffentlichung braucht und was live ist](/docs/sites/publishing#snapshot).
:::

### Allgemein {#general}

- **Website-Name**: der Name deiner Website, angezeigt im Browser-Tab und in Link-Vorschauen.
- **Beschreibung**: eine kurze Zusammenfassung deiner Community, genutzt für Suchmaschinen und Link-Vorschauen.
- **Sprache**: die Sprache der vorgegebenen Texte deiner Website, etwa Buttons und Beschriftungen. Du kannst **English** oder **Deutsch** wählen. Deine eigenen Inhalte bleiben genau so, wie du sie geschrieben hast.
- **Favicon**: das kleine Symbol im Browser-Tab. Wähle ein Bild aus der Bildbibliothek deines Servers. Legst du keins fest, nutzt deine Website das Icon deines Discord-Servers.

### Suche & Teilen {#sharing}

Diese Karte legt fest, wie deine Website in Suchergebnissen aussieht und wenn jemand einen Link zu ihr teilt, zum Beispiel auf Discord oder Twitter/X.

- **Titel beim Teilen**: der Titel in Link-Vorschauen. Setzt du einen, gilt er für jede Seite. Lässt du ihn leer, nutzt jede Seite ihren eigenen Seitentitel. Blog-Beiträge nutzen immer ihren eigenen Titel.
- **Beschreibung beim Teilen**: der Text unter dem Titel. Lässt du sie leer, wird die **Beschreibung** deiner Website genutzt.
- **Bild beim Teilen**: das Vorschaubild. Wähle eins aus der Bildbibliothek deines Servers.

Unter diesen Feldern liegt ein Schalter für das **erzeugte Vorschaubild**. Ist er an und hast du kein **Bild beim Teilen** festgelegt, erstellen wir ein Vorschaubild für dich: eine breite Karte mit deinem Website-Namen, deiner Beschreibung und deinem Server-Icon, in den Farben und der Überschriften-Schrift deines Themes. Sie aktualisiert sich von selbst, wenn sich davon etwas ändert, du musst sie also nie neu erstellen.

Schaltest du ihn aus, zeigen geteilte Links dein **Bild beim Teilen**, falls du eins festgelegt hast, und sonst das Icon deines Servers. Dieser Schalter ist live und braucht keine Veröffentlichung.

### Rechtliche Angaben und Bot-Schutz {#legal}

Unter **Rechtliche Angaben** verlinkst du deine Datenschutzerklärung, dein Impressum und einen Kontakt für Datenfragen. Unter **Bot-Schutz** wählst du, wie die Spam-Prüfung deiner Formulare für Besucher aussieht. Beides ist vor allem wichtig, sobald deine Website ein Formular hat, deshalb erklären wir es auf der Seite [Formulare](/docs/sites/forms). Beides wirkt sofort.

### Wartungsmodus und Gefahrenzone {#maintenance-and-delete}

Der **Wartungsmodus** ersetzt deine ganze Website vorübergehend durch einen kurzen Hinweis. In der **Gefahrenzone** löschst du deine Website. Beides erklären wir unter [Veröffentlichen & Live gehen](/docs/sites/publishing).

### Branding {#branding}

Die Karte **Branding** zeigt dir, ob deine Website das kleine "Made with SCNX"-Badge anzeigt. Hier gibt es nichts einzustellen: Das richtet sich automatisch nach dem Tarif deines Servers. Unser Professional-Tarif blendet das Badge aus. Ein Tarifwechsel erreicht deine Website innerhalb weniger Minuten, ohne Veröffentlichung.

## Statistiken {#analytics}

Die **Statistiken** zeigen dir, wie viele Leute sich deine Website ansehen. Du öffnest sie über das Sites-Menü oder über den Link **Statistiken** in der Sites-Übersicht.

![Die Statistik-Seite mit Seitenaufrufen pro Tag, Top-Seiten, Verweisen und Ländern](@site/docs/assets/sites/de/analytics.png)

Wähle einen **Zeitraum** von 7, 30 oder 90 Tagen, und du siehst:

- **Seitenaufrufe gesamt** für diesen Zeitraum,
- ein Diagramm der **Seitenaufrufe pro Tag**,
- **Top-Seiten**: deine meistbesuchten Seiten, inklusive Blog und Blog-Beiträgen,
- **Top-Verweise**: die Websites, die Besucher zu dir geschickt haben, mit **Direkt / keine** für Aufrufe ohne Verweis,
- **Top-Länder**: woher deine Besucher kommen.

Das sind Seitenaufrufe, keine einzelnen Besucher. Gezählt wird nur deine veröffentlichte Website: Aufrufe deines Entwurfs im Editor oder über einen Vorschau-Link zählen nicht, und vor deiner ersten Veröffentlichung wird nichts gezählt.

Die Statistiken sind von Grund auf datenschutzfreundlich. Aufrufe werden auf unseren Servern als einfache Tagessummen gezählt. Wir setzen dafür keine Tracking-Cookies und speichern keine IP-Adressen von Besuchern. Die IP-Adresse wird nur kurz genutzt, um das Land zu ermitteln. Bei Verweisen behalten wir nur die Adresse der Website, nicht den vollständigen Link.

## Ankündigungsleiste {#announcement-bar}

Die Ankündigungsleiste ist ein schmaler Streifen über deiner Navigation für eine kurze Nachricht, auf jeder Seite. Perfekt für ein zeitlich begrenztes Event, einen Hinweis oder einen Link zu etwas Neuem.

Du bearbeitest sie im Editor. Öffne über die Symbolleiste links das Panel **Footer & Leiste** und klapp **Ankündigungsleiste** auf:

- Schalte **Ankündigungsleiste anzeigen** ein.
- Schreib deine **Ankündigung** (reiner Text, bis zu 300 Zeichen, kein Markdown). Ohne Text bleibt die Leiste versteckt.
- Trag optional unter **Link (optional)** eine vollständige `https://`-Adresse ein, damit die ganze Leiste anklickbar ist.
- Wähle einen **Stil**: **Dezent** oder **Akzentfarbe**.

Einen Speichern-Button gibt es nicht. Deine Änderungen speichern sich beim Tippen von selbst, und du siehst die Leiste sofort auf der Arbeitsfläche.

Besucher können die Leiste wegklicken, und sie bleibt für sie weggeklickt, bis du den Text änderst. Dann erscheint die neue Ankündigung wieder.

:::tip Die Leiste ist live
Die Ankündigungsleiste geht von selbst live. Du musst deine Website **nicht** erneut veröffentlichen, um sie zu ändern oder zu entfernen. Wenn du den Text löschst, verschwindet die Leiste komplett. Solange der [Wartungsmodus](/docs/sites/publishing#maintenance) aktiv ist, sehen Besucher nur deinen Wartungshinweis, die Leiste wird dort also nicht angezeigt. Auf Seiten, die Navigation und Footer ausblenden (siehe [Link-in-Bio](#link-in-bio)), erscheint sie ebenfalls nicht.
:::

## Weiterleitungen {#redirects}

Weiterleitungen schicken eine alte Adresse deiner Website auf eine neue. Sie sind praktisch, wenn du eine Seite ersetzt, oder wenn du einen kurzen, einprägsamen Pfad wie `/discord` möchtest, der woandershin springt.

Weiterleitungen findest du auf der Seite **Domains**, unter deinen Domains. Zum Verwalten brauchst du Bearbeitungszugriff.

- Klick auf **Weiterleitung hinzufügen**.
- Trag bei **Von (Pfad auf deiner Website)** etwas wie `/alte-regeln` oder `/discord` ein. Erlaubt sind Kleinbuchstaben, Zahlen, Bindestriche und Punkte.
- Trag bei **Nach** eine vollständige `https://`-Adresse ein oder einen anderen Pfad deiner Website wie `/regeln`.
- Klick auf **Erstellen**.

Du kannst eine Weiterleitung jederzeit bearbeiten oder löschen. Eine Website kann bis zu 50 Weiterleitungen haben. Jede zählt die Aufrufe, die sie weiterleitet, so siehst du, wie oft ein kurzer Link genutzt wird.

:::note "Inaktive" Weiterleitungen
Liegt eine deiner Seiten unter derselben Adresse wie eine Weiterleitung, gewinnt die Seite und die Weiterleitung wird als **Inaktiv** markiert: Sie läuft nie. Lösche diese Seite, damit die Weiterleitung wieder greift. Ein paar Adressen gehören zu deiner Website selbst und können nicht weitergeleitet werden: deine Startseite, `/blog` (und alles darunter), `/sitemap.xml` und `/robots.txt`.
:::

Weiterleitungen wirken sofort. Du musst deine Website dafür **nicht** neu veröffentlichen. Solange der [Wartungsmodus](/docs/sites/publishing#maintenance) aktiv ist, laufen sie nicht.

## Link-in-Bio (kompaktes Layout) {#link-in-bio}

Für eine "Link in Bio"-Seite im Creator-Stil kann jede Seite auf ein **kompaktes** Layout wechseln: eine schmale, zentrierte Spalte, so eine Seite, die du in einer Social-Media-Bio verlinken würdest.

Öffne **Seiten** im Sites-Menü, such die Seite und klick auf ihren Button **Seitenlayout** (das Regler-Symbol). Im Abschnitt **Layout**:

- Setz die **Inhaltsbreite** auf **Kompakt** für die schmale, zentrierte Spalte.
- Schalte optional **Navigation und Footer ausblenden** ein, um die Navigationsleiste, den Footer, die Ankündigungsleiste und den Link "Zum Inhalt springen" nur auf dieser Seite wegzulassen.

Beide Einstellungen sind unabhängig: Eine kompakte Seite kann ihre Navigation behalten, und eine Standardseite kann sie weglassen. Die Startvorlage **Link in Bio** nutzt dieses Layout direkt, mit einem kurzen Intro, deinen Links und dem, was du machst.

Layout-Einstellungen gehören zur Seite. Anders als die Ankündigungsleiste und Weiterleitungen erreichen sie Besucher also mit deiner nächsten [Veröffentlichung](/docs/sites/publishing).
