---
sidebar_position: 9
title: Statistiken
description: Seitenaufrufe, Traffic-Quellen, UTM-Kampagnen, Top-Seiten, Blog-Aufrufe, Formular-Conversion und CSV-Export für deine SCNX-Website, ohne Cookies gezählt.
---

# Statistiken {#analytics}

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Die **Statistiken** zeigen dir, wie viele Leute sich deine Website ansehen. Du öffnest sie über das Sites-Menü oder über den Link **Statistiken** in der Sites-Übersicht.

![Die Statistik-Seite mit Seitenaufrufen pro Tag, Top-Seiten, Verweisen und Ländern](@site/docs/assets/sites/de/analytics.png)

Wähle einen **Zeitraum** von 7, 30 oder 90 Tagen. Die Zahlen decken die letzten Tage ab, den heutigen eingeschlossen. **Seitenaufrufe gesamt** und die anderen Summen werden mit dem **vorherigen Zeitraum** gleicher Länge verglichen, zum Beispiel den 30 Tagen vor den aktuellen 30. Der Vergleich nutzt nur volle Tage, weil der heutige Tag noch läuft und ein halber Tag deine Website sonst schlechter aussehen ließe. Im Diagramm **Seitenaufrufe pro Tag** wird der **Vorherige Zeitraum** hinter dem aktuellen eingezeichnet.

Du siehst:

- **Seitenaufrufe gesamt** für diesen Zeitraum, dazu **Blog-Aufrufe** und **Formular-Einsendungen**, jeweils mit der Veränderung gegenüber dem vorherigen Zeitraum,
- ein Diagramm der **Seitenaufrufe pro Tag**,
- **Top-Seiten**: deine meistbesuchten Seiten, inklusive Blog und Blog-Beiträgen,
- **Top-Blogbeiträge**: deine meistgelesenen Beiträge, mit Titel angezeigt,
- **Traffic-Quellen**: woher Besucher kamen, gruppiert in **Direkt / keine**, **Suchmaschinen**, **Soziale Medien** und **Andere Websites**. Direkte Aufrufe umfassen Leute, die deine Adresse eingetippt oder ein Lesezeichen genutzt haben, oder aus einer App kamen, die uns nicht sagt, woher sie kommen,
- **Top-Verweise**: die Websites, die Besucher zu dir geschickt haben, mit **Direkt / keine** für Aufrufe ohne Verweis,
- **Top-Länder**: woher deine Besucher kommen,
- **UTM-Quellen**, **UTM-Medien** und **UTM-Kampagnen**, siehe [unten](#utm),
- **Formular-Conversion**, siehe [unten](#forms).

Das sind Seitenaufrufe, keine einzelnen Besucher. Gezählt wird nur deine veröffentlichte Website: Aufrufe deines Entwurfs im Editor oder über einen Vorschau-Link zählen nicht, und vor deiner ersten Veröffentlichung wird nichts gezählt.

## Kampagnen mit UTM-Tags verfolgen {#utm}

Füge den Links, die du teilst, UTM-Tags hinzu, dann siehst du, welcher Beitrag, welcher Newsletter oder welche Anzeige Besucher gebracht hat. Zum Beispiel:

`https://deine-website.example/regeln?utm_source=newsletter&utm_medium=email&utm_campaign=fruehlings-event`

SCNX liest drei Tags: `utm_source`, `utm_medium` und `utm_campaign`. Damit keine personenbezogenen Daten in deine Statistiken gelangen, werden Werte vor dem Zählen geprüft:

- Akzeptiert werden nur **Kleinbuchstaben, Zahlen, `_` und `-`** (a-z, 0-9, `_`, `-`). Großbuchstaben werden in Kleinbuchstaben umgewandelt. Werte mit Punkten, Leerzeichen, `@` oder Links werden ignoriert.
- Ein Wert darf höchstens **32 Zeichen** lang sein.
- Lange Zahlenfolgen (etwa Telefonnummern oder IDs) und zufällig aussehende Codes werden ignoriert.

Nutze kurze, lesbare Namen wie `newsletter` oder `fruehlings-event`. Ein Wert, der die Prüfung nicht besteht, wird einfach nicht gezählt.

### Limits und die Zeile "Sonstige" {#caps}

Damit deine Statistiken nicht mit Unsinn überflutet werden, gibt es pro Tag ein Limit, wie viele verschiedene Einträge erfasst werden: **200 Seiten**, **100 verweisende Websites** und **50 Werte pro UTM-Art**. Danach werden weitere neue Einträge unter **Sonstige (Limit erreicht)** zusammengezählt, statt eine eigene Zeile zu bekommen. Normale Websites kommen nie in die Nähe dieser Limits.

## Formular-Conversion {#forms}

Die Tabelle **Formular-Conversion** zeigt für jedes Formular die **Einsendungen** im Zeitraum, die **Seitenaufrufe** der Seite oder Seiten, auf denen das Formular platziert ist, und die **Conversion**: Einsendungen geteilt durch Seitenaufrufe.

Dazu solltest du wissen:

- Es zählt nur Einsendungen, die noch innerhalb der [Aufbewahrungsdauer](/docs/sites/forms#retention) des jeweiligen Formulars liegen (standardmäßig 90 Tage). Bei langen Zeiträumen siehst du deshalb möglicherweise weniger Einsendungen, als du tatsächlich bekommen hast, was die Conversion senkt.
- Ein Formular, das auf keiner Seite platziert ist, hat keine Seitenaufrufe, daher wird keine Conversion angezeigt.
- Mussten in diesem Zeitraum einige Seitenaufrufe unter **Sonstige (Limit erreicht)** gezählt werden, wird keine Conversion angezeigt, weil die Seite des Formulars möglicherweise zu niedrig gezählt wurde.
- Dieselbe Person kann eine Seite mehrfach aufrufen, sieh den Prozentwert also als Richtwert, nicht als exakte Zahl.

## Als CSV exportieren {#export}

Klick auf **CSV exportieren**, um alles auf der Seite für den gewählten Zeitraum als Tabellendatei herunterzuladen. Sie enthält nur die zusammengefassten Zahlen, die du auch auf dem Bildschirm siehst.

## Datenschutz und Aufbewahrung {#retention}

Die Statistiken sind von Grund auf datenschutzfreundlich. Aufrufe werden auf unseren Servern als einfache Tagessummen gezählt. Wir setzen dafür keine Tracking-Cookies, speichern keine IP-Adressen von Besuchern und führen keine Datensätze oder Profile einzelner Besucher. Die IP-Adresse wird nur kurz genutzt, um das Land zu ermitteln. Bei Verweisen behalten wir nur die Adresse der Website, nicht den vollständigen Link.

Die Tagessummen werden **730 Tage** lang aufbewahrt. Ältere Daten werden automatisch gelöscht. Das Dashboard zeigt höchstens 90 Tage, dazu die 90 davor zum Vergleich. Löschst du deine Website, werden auch ihre Statistiken entfernt.

IP address data powered by [IPLocate.io](https://www.iplocate.io).
