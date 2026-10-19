---
sidebar_position: 12
title: Websuche
description: Lass Besucher deine SCNX-Website durchsuchen - das Suchfeld in Navigation und Blog, die Seite /search und was durchsucht wird.
---

# Websuche {#search}

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Mit der Websuche finden Besucher Inhalte auf deiner Website, ohne sich durchs Menü zu klicken. Sie fügt deiner Navigationsleiste und deinem Blog ein Suchfeld hinzu, dazu eine Ergebnisseite unter **`/search`**.

## Suche ein- oder ausschalten {#enable}

Die Suche ist standardmäßig **an**. So änderst du das:

1. Öffne **Einstellungen** im Sites-Menü.
2. Nutze in der Karte **Suche & Teilen** den Schalter **Websuche aktivieren**.

Websites, die die Adresse `/search` schon für eine Seite oder Weiterleitung nutzten, wurden auf **aus** gelassen, weil die Suche diesen Inhalt verdecken würde. Der Schalter wirkt sofort. Du musst deine Website **nicht** erneut veröffentlichen.

:::note `/search` muss frei sein
Die Websuche belegt die Adresse `/search`. Nutzt bereits eine deiner Seiten oder Weiterleitungen `/search`, lässt sich die Suche nicht aktivieren, bis du sie löschst oder umbenennst. Du siehst dann eine entsprechende Meldung. Aus demselben Grund kannst du bei aktiver Suche keine Seite und keine Weiterleitung unter `/search` anlegen.
:::

## Was Besucher sehen {#visitors}

- Ein **Suchfeld** in deiner Navigationsleiste und auf deiner Blog-Seite.
- Eine **`/search`**-Seite mit Suchfeld und Ergebnissen, zehn pro Seite. Jedes Ergebnis zeigt einen Titel, einen kurzen Ausschnitt mit hervorgehobenen Treffern und ob es eine **Seite** oder ein **Blogbeitrag** ist.
- Eine freundliche Meldung, wenn nichts passt. Wer in kurzer Zeit zu oft sucht, wird gebeten, einen Moment zu warten.

Die `/search`-Seite selbst wird von Suchmaschinen ferngehalten.

## Was durchsucht wird {#scope}

- Deine **veröffentlichten Seiten**, und zwar die aktuell live geschaltete Version. Entwürfe und unveröffentlichte Änderungen sind nie durchsuchbar.
- Deine **veröffentlichten Blogbeiträge**. Beiträge, die noch Entwürfe sind, werden nicht durchsucht.

Eine neue oder geänderte Seite ist nach dem [Veröffentlichen deiner Website](/docs/sites/publishing) durchsuchbar. Blogbeiträge sind sofort nach dem Veröffentlichen durchsuchbar. Solange deine Website nicht veröffentlicht ist oder im [Wartungsmodus](/docs/sites/publishing#maintenance) steht, funktioniert die Suche nicht.

Ergebnisse müssen alle gesuchten Wörter enthalten. Titel zählen stärker als Überschriften, Überschriften stärker als Fließtext. Eine Suche darf bis zu 100 Zeichen und bis zu 6 Wörter enthalten, längere Eingaben werden gekürzt.
