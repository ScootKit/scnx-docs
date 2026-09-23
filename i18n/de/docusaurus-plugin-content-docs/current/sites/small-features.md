---
sidebar_position: 7
title: Ankündigungsleiste, Weiterleitungen & Link-in-Bio
description: Kleinere SCNX-Sites-Funktionen - die Ankündigungsleiste, Weiterleitungen und das kompakte Link-in-Bio-Layout.
unlisted: true
---

# Ankündigungsleiste, Weiterleitungen & Link-in-Bio

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Ein paar kleinere Funktionen runden deine Website ab. Die ersten beiden findest du im Bereich **Site** des Editors, die Layout-Option auf jeder Seite.

## Ankündigungsleiste {#announcement-bar}

Die Ankündigungsleiste ist ein schmaler Streifen über deiner Navigation für eine kurze Nachricht, auf jeder Seite. Perfekt für ein zeitlich begrenztes Event, einen Hinweis oder einen Link zu etwas Neuem.

Öffne den Bereich **Site** und finde **Announcement bar**:

- Schalte **Show the announcement bar** ein.
- Schreib deine **Announcement** (reiner Text, bis zu 300 Zeichen, kein Markdown).
- Füge optional einen **Link** hinzu (eine vollständige `https://`-Adresse), damit die ganze Leiste anklickbar ist.
- Wähle einen **Style**: **Subtle** oder **Accent colour**.

Besucher können die Leiste wegklicken, und sie bleibt für sie weggeklickt, bis du den Text änderst, woraufhin die neue Ankündigung wieder erscheint.

:::tip Die Leiste ist live
Die Ankündigungsleiste geht von selbst live. Du musst deine Website **nicht** erneut veröffentlichen, um sie zu ändern oder zu entfernen. Den Text zu leeren entfernt die Leiste komplett. Beachte: solange der [Wartungsmodus](/docs/sites/publishing#maintenance) an ist, sehen Besucher nur deinen Wartungshinweis, die Leiste wird dort also nicht gezeigt.
:::

## Weiterleitungen {#redirects}

Weiterleitungen schicken eine alte Adresse auf deiner Website zu einer neuen. Praktisch, wenn du eine Seite umbenennst oder einen kurzen, einprägsamen Pfad wie `/discord` willst, der woanders hinspringt.

Öffne den Bereich **Site** und finde **Redirects**:

- Klick auf **Add redirect**.
- Setze **From** (ein Pfad auf deiner Website, zum Beispiel `/old-rules` oder `/discord`).
- Setze **To** (eine vollständige `https://`-Adresse oder ein anderer Pfad auf deiner Website wie `/rules`).
- Speichere es.

Eine Website kann bis zu 50 Weiterleitungen haben. Jede zählt die Besuche, die sie schickt, sodass du siehst, wie oft ein Kurzlink genutzt wird.

:::note "Dormant"-Weiterleitungen
Liegt schon eine deiner Seiten unter derselben Adresse wie eine Weiterleitung, gewinnt die Seite und die Weiterleitung wird als **Dormant** markiert: sie läuft nie. Benenne diese Seite um oder lösche sie, um die Weiterleitung zurückzuholen. Ein paar Adressen (`/blog`, `/sitemap.xml`, `/robots.txt` und deine Startseite) gehören zur Website selbst und können nicht weitergeleitet werden.
:::

Weiterleitungen wirken sofort. Du musst deine Website **nicht** erneut veröffentlichen, damit sie funktionieren.

## Link-in-Bio (kompaktes Layout) {#link-in-bio}

Für eine Creator-Seite im "Link in Bio"-Stil kann jede Seite auf ein **kompaktes** Layout umschalten: eine schmale, zentrierte Spalte mit engeren Abständen, die Art Seite, die man aus einer Social-Media-Bio verlinkt.

Öffne den Bereich **Pages**, wähle die Seite und öffne **Page layout**:

- Setze **Content width** auf **Compact** für die schmale zentrierte Spalte.
- Schalte optional **Hide navigation and footer** ein, um Menü, Fußbereich, Ankündigungsleiste und den "skip to content"-Link nur auf dieser Seite wegzulassen.

Die zwei Einstellungen sind unabhängig: eine kompakte Seite kann ihre Navigation behalten, und eine Standardseite kann sie weglassen. Die **Link in bio**-Vorlage nutzt dieses Layout von Haus aus, mit einer kurzen Vorstellung, deinen Links und einem Beitritts-Button.

Layout-Einstellungen gehören zur Seite, also erreichen sie Besucher - anders als die Ankündigungsleiste und Weiterleitungen - mit deiner nächsten [Veröffentlichung](/docs/sites/publishing).
