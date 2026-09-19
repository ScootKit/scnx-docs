---
sidebar_position: 5
title: Blog & Ankündigungen
description: Schreibe Beiträge und Ankündigungen für deine SCNX-Website - Entwürfe, Titelbilder, die /blog-Seite, RSS und der Latest-posts-Block.
unlisted: true
---

# Blog & Ankündigungen

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Gib deiner Community einen Ort, um deine Neuigkeiten zu lesen. Der Blog ist eine Sammlung von Beiträgen mit eigener Übersichtsseite, einem RSS-Feed und einem Block, den du auf jede Seite setzen kannst, um deine neuesten Beiträge zu zeigen.

## Einen Beitrag schreiben {#write}

1. Öffne im Editor den Bereich **Posts**.
2. Klick auf **New post**.
3. Fülle den Beitrag aus:
   - **Title** - die Überschrift des Beitrags.
   - **Link** - die Webadresse des Beitrags. Lass sie leer, und wir bauen eine aus dem Titel. Sie nutzt Kleinbuchstaben, Zahlen und Bindestriche.
   - **Teaser** - die kurze Zeile, die in der Blog-Übersicht gezeigt wird. Optional.
   - **Cover image** - ein optionales Bild, gewählt aus der Bildbibliothek deines Servers.
   - **Text** - der Inhalt deines Beitrags, geschrieben in Markdown.
4. Klick auf **Save**.

## Entwurf vs. veröffentlicht {#drafts}

Ein Beitrag ist entweder ein **Draft** oder **Live**:

- Ein **Draft** ist nur für dich im Dashboard sichtbar. Er ist nicht auf deiner Website.
- Klick auf **Publish**, um einen Beitrag **Live** zu schalten. Er erscheint dann auf deiner `/blog`-Seite und im Feed.
- Nutze **Move to drafts**, um einen Beitrag zurückzuziehen und wieder zu verstecken.

## Deine Blog-Seite {#blog-page}

Veröffentlichte Beiträge erscheinen automatisch unter **`/blog`** auf deiner Website, als Liste von Karten mit Titel, Teaser, Titelbild und Datum jedes Beitrags. Jeder Beitrag hat seine eigene Seite unter `/blog/<link>` mit Titelbild, Titel, Datum und vollem Text.

Der Blog ist mit dem Theme deiner Website gestaltet und zeigt deine normale Navigation und deinen Fußbereich, damit er sich wie der Rest deiner Website anfühlt. Er ist außerdem in der Sitemap deiner Website für Suchmaschinen enthalten.

## RSS-Feed {#rss}

Dein Blog hat einen RSS-Feed unter **`/blog/rss.xml`**. Leser können ihn in einem RSS-Reader abonnieren, und du kannst ihn nutzen, um deine Beiträge in andere Tools einzuspeisen, die RSS lesen.

## Der Latest-posts-Block {#latest-posts}

Um deine neuesten Beiträge auch anderswo als auf der `/blog`-Seite zu zeigen (zum Beispiel auf deiner Startseite), füge den **Latest posts**-Block auf einer beliebigen Seite hinzu. Er zeigt Karten, die zu deinen neuesten Beiträgen verlinken, und du kannst festlegen, wie viele gezeigt werden. Er spiegelt immer deine Live-Beiträge.

## Beiträge sind live {#live}

Beiträge gehen von selbst live. Wenn du einen Beitrag veröffentlichst, erscheint er sofort auf deinem Blog. Du musst deine ganze Website **nicht** erneut veröffentlichen, damit ein neuer Beitrag auftaucht.

:::note Was hier noch nicht dabei ist
Beiträge aus einem Discord-Ankündigungskanal zu übernehmen ist noch nicht Teil von Sites. Vorerst werden Beiträge im Posts-Bereich geschrieben.
:::
