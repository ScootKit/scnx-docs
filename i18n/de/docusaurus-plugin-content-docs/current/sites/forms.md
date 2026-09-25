---
sidebar_position: 4
title: Formulare
description: Baue Formulare auf deiner SCNX-Website - Feldtypen, Öffnen und Schließen, der Antworten-Eingang, Aufbewahrung, CSV-Export und Discord-Benachrichtigungen.
unlisted: true
---

# Formulare

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Formulare lassen Besucher dir strukturierte Informationen senden: Team-Bewerbungen, Event-Anmeldungen, Kontaktanfragen, Feedback und mehr. Die Antworten werden privat in deinem Dashboard gesammelt, nicht öffentlich auf deiner Website gezeigt.

Ein Formular hat zwei Teile: das Formular selbst (seine Fragen und Einstellungen), das du im Bereich **Forms** baust, und einen **Form-Block**, den du auf eine Seite setzt, damit man es tatsächlich ausfüllen kann.

## Ein Formular bauen {#build}

1. Öffne im Editor den Bereich **Forms**.
2. Klick auf **New form**, gib ihm einen Namen (zum Beispiel "Application form") und klick auf **Create form**.
3. Klick unter **Questions** für jede Sache, die du fragen willst, auf **Add question**.
4. Setze das Formular auf eine Seite: öffne die Seite, füge einen **Form-Block** hinzu und wähle dort dein Formular aus.

Ein Formular erscheint erst auf deiner Website, wenn du einen Form-Block auf eine Seite setzt und es dort auswählst.

### Fragetypen {#field-types}

Jede Frage hat einen Typ:

| Typ              | Was die Besucherin sieht                                                |
| ---------------- | ----------------------------------------------------------------------- |
| **Short answer** | Ein einzeiliges Textfeld.                                               |
| **Long answer**  | Ein mehrzeiliges Textfeld für längere Antworten.                        |
| **Pick one**     | Eine einzelne Option aus einer von dir festgelegten Liste wählen.       |
| **Pick several** | Beliebig viele Optionen aus einer von dir festgelegten Liste ankreuzen. |
| **Yes / No**     | Eine einfache Ja-oder-Nein-Wahl.                                        |

Für jede Frage kannst du festlegen, ob sie **ausgefüllt werden muss**, und eine **maximale Zeichenzahl** für Textantworten. **Pick one**- und **Pick several**-Fragen brauchen mindestens eine Auswahl, und jede Auswahl muss verschieden sein.

:::note Ein Budget für den Antwortplatz
Der Builder zeigt, wie viel Antwortplatz deine Fragen belegen. Wird die Summe zu hoch, kürze das Limit einer Frage oder nimm eine heraus. Das Limit wird in Bytes gemessen, wenn jemand das Formular tatsächlich absendet, und Zeichen wie kyrillische, japanische oder Emoji kosten mehr als ein Byte, lass also etwas Luft, falls dein Publikum darin schreibt.
:::

## Ein Formular öffnen und schließen {#open-close}

Jedes Formular hat in seinen **Settings** einen Schalter **Accept answers**:

- **On** - das Formular nimmt Einsendungen an ("Open").
- **Off** - Besucher sehen das Formular weiterhin, können es aber nicht absenden ("Closed"). Sie bekommen stattdessen eine freundliche Meldung.

Du kannst außerdem ein **Antwortlimit** setzen. Hat das Formular so viele Antworten gesammelt, nimmt es von selbst keine neuen mehr an. Lass es leer für kein Limit.

## Der Antworten-Eingang {#inbox}

Jede Antwort landet im **Answers**-Eingang des Formulars, die neueste zuerst. Das Formular in der Liste zeigt eine Ungelesen-Zahl, damit du neue Antworten auf einen Blick siehst.

- Öffne eine Antwort, um sie ganz zu lesen.
- Lösche eine einzelne Antwort oder alle Antworten eines Formulars auf einmal.
- Wechsle mit **Newer** und **Older** zwischen den Antwortseiten.

:::note Löschen braucht Admin-Zugriff
Antworten zu löschen und ein ganzes Formular zu löschen braucht die Website-Admin-Berechtigung. Frag jemanden in deinem Team, der sie hat, wenn die Löschen-Buttons ausgegraut sind.
:::

## Wie lange Antworten aufbewahrt werden {#retention}

Antworten werden nicht ewig aufbewahrt. Jedes Formular hat eine Einstellung **Keep answers for (days)**, die standardmäßig auf **90 Tage** steht. Antworten, die älter sind, werden jeden Tag automatisch gelöscht, sodass sich nichts endlos ansammelt. Du kannst das im erlaubten Bereich hoch- oder heruntersetzen.

Das ganze Formular zu löschen löscht jede Antwort mit, die es gesammelt hat.

## Als CSV exportieren {#csv}

Öffne den **Answers**-Eingang eines Formulars und klick auf **Download as CSV**, um jede Antwort als Tabellendatei zu bekommen. Das ist praktisch, um Bewerbungen zu sortieren oder sie außerhalb von SCNX mit deinem Team zu teilen.

## Discord-Benachrichtigungen {#webhook}

Du kannst jedes Mal eine Nachricht in Discord bekommen, wenn jemand ein Formular absendet. Füge in den **Settings** des Formulars einen **Discord notification**-Webhook-Link in das Feld ein. Er sieht aus wie `https://discord.com/api/webhooks/123.../abc...`, und wir posten jede neue Antwort in diesen Kanal.

So bekommst du einen Webhook-Link: öffne in Discord die Einstellungen deines Kanals, geh zu **Integrationen → Webhooks**, erstelle einen Webhook und kopiere seine URL. Es werden nur echte Discord-Webhook-Links akzeptiert. Lass das Feld leer für keine Benachrichtigung.

## Ein Hinweis zur Privatsphäre der Besucher {#privacy}

Formulare sind so gebaut, dass sie so wenig wie möglich sammeln. Wir speichern die Antworten, die man tippt, und sonst nichts: **keine IP-Adresse, keine Geräteinformationen und keine Besucher-Kennungen** werden mit einer Einsendung gespeichert.

Die Antworten gehören dir, dem Betreiber der Website, nicht SCNX. Deshalb sagt der Fuß des Formulars den Besuchern, wohin ihre Antworten gehen: "Responses go to the operators of \<site name\>." Sammelst du personenbezogene Daten, sorge dafür, dass deine eigene Datenschutzerklärung das abdeckt. Die Aufbewahrungseinstellung sowie die Export- und Löschwerkzeuge helfen dir, deinen Pflichten nachzukommen.

## Formulare sind live {#live}

Formulare, ihre Fragen und ihre Einstellungen wirken sofort. Du musst deine Website **nicht** erneut veröffentlichen, nachdem du ein Formular geändert, geöffnet oder geschlossen oder seine Fragen bearbeitet hast. (Die Fragen zu ändern ändert nicht die Antworten, die du schon gesammelt hast.)
