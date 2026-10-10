---
sidebar_position: 7
title: Ankündigungsleiste, Weiterleitungen & Link-in-Bio
description: Die Ankündigungsleiste, Weiterleitungen und das kompakte Link-in-Bio-Layout in SCNX Sites.
---

# Ankündigungsleiste, Weiterleitungen & Link-in-Bio

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Diese Seite behandelt ein paar kleinere Funktionen deiner Website: die Ankündigungsleiste, Weiterleitungen und das kompakte Link-in-Bio-Layout. Die Seiten **Einstellungen** und **Statistiken** aus dem Sites-Menü haben hier eigene Seiten: [Einstellungen](/docs/sites/settings) und [Statistiken](/docs/sites/analytics).

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
