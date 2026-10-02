---
sidebar_position: 2
title: Konfiguration
description: Konfiguriere die Discord-Sprachsupport-Funktion - Status-Modus, Warteschlangen- und Support-Kanäle, Wartemusik, Prioritätsrollen, Thread-Modus, Nachbesprechung, Feedback und anpassbare Nachrichten.
---

# Sprachsupport-Konfiguration

Diese Seite behandelt jede Option der [Sprachsupport](/de/docs/support-bot/voice-support/intro)-Funktion. Alle Einstellungen findest du unter **Sprachsupport** in deinem [Support-Bot-Dashboard](https://scnx.app/glink?page=support-system/manage).

## Hauptkonfiguration {#main-configuration}

### Funktionen {#main-configuration-features}

- Aktiviere Sprachsupport für deinen Server.
- Wähle den [Status-Modus](/de/docs/support-bot/voice-support/intro#state-modes), der zu deinem Team passt (Team-Anwesenheit oder Öffnungszeiten).
- Lege den Warteschlangen-Kanal, die Support-Kategorie und den Dashboard-Kanal fest.
- Konfiguriere, welche Rollen als Team gelten und welche Nutzer Priorität erhalten.

### Einrichtung {#main-configuration-setup}

Bevor du Sprachsupport konfigurierst, benötigst du:

- Einen **Sprachkanal**, der als Warteschlange dient. Nutzer verbinden sich hier, um sich einzureihen.
- Eine **Discord-Kategorie** mit einem oder mehreren Sprachkanälen für dein Team. Jeder Sprachkanal in dieser Kategorie (außer dem Warteschlangen-Kanal) wird als Support-Kanal für das Team behandelt.
- Einen **Textkanal** für das [Dashboard](#dashboard-channel)-Embed.
- Eine oder mehrere **Rollen**, die dein Sprachsupport-Team kennzeichnen.

Besuche anschließend die Seite [Sprachsupport](https://scnx.app/glink?page=support-system/voice-support) in deinem Dashboard und [konfiguriere](#main-configuration-configuration) die folgenden Optionen.

### Konfiguration {#main-configuration-configuration}

| Feld                                                   | Beschreibung                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sprachsupport aktivieren                               | Aktiviert oder deaktiviert die Sprachsupport-Funktion für deinen Server. Solange sie deaktiviert ist, sind die `/voice`-Befehle ausgeblendet, es werden keine DMs gesendet und das Dashboard-Embed wird nicht aktualisiert.                                                                                         |
| Öffnungszeiten statt Mitarbeiter-Anwesenheit verwenden | Legt fest, wann Sprachsupport geöffnet ist. `staff-presence` (Standard): geöffnet, sobald mindestens ein Teammitglied in einem Support-Kanal ist. `opening-hours`: geöffnet während der [Öffnungszeiten](/de/docs/support-bot/general/opening-hours) deines Bots, unabhängig von der Anwesenheit des Teams.         |
| Warteschlangen-Kanal                                   | Der Sprachkanal, den Nutzer betreten, um sich einzureihen. Er kann innerhalb oder außerhalb der Support-Kategorie liegen. Nutzer in diesem Kanal erhalten eine DM mit ihrer Position und der geschätzten Wartezeit.                                                                                                 |
| Support-Kategorie                                      | Die Discord-Kategorie, die die Support-Sprachkanäle deines Teams enthält. Jeder Sprachkanal in dieser Kategorie (außer dem Warteschlangen-Kanal) wird als Support-Kanal behandelt - ein Teammitglied in einem solchen Kanal gilt als verfügbar, und aus der Warteschlange geholte Nutzer werden dorthin verschoben. |
| Dashboard-Kanal                                        | Der Textkanal, in dem das Live-Status-Embed gepostet wird. Siehe [Dashboard-Kanal](#dashboard-channel).                                                                                                                                                                                                             |
| Team-Rollen                                            | Mitglieder mit einer dieser Rollen gelten als Sprachsupport-Team. Nur das Team kann Nutzer holen, Notizen hinzufügen, den Verlauf einsehen und die anderen `/voice`-Befehle nutzen.                                                                                                                                 |
| Prioritätsrollen                                       | Siehe [Prioritätsrollen](#priority-roles).                                                                                                                                                                                                                                                                          |

## Dashboard-Kanal {#dashboard-channel}

Das Dashboard ist eine einzelne Nachricht, die der Bot in einem Textkanal deiner Wahl pflegt. Es zeigt:

- Ob Sprachsupport aktuell geöffnet oder offline ist
- Die Anzahl der Teammitglieder, die mit Support-Kanälen verbunden sind
- Die aktuelle Warteschlange (Prioritätsnutzer mit einem Tag markiert) mit der Wartedauer jedes Nutzers
- Alle aktiven Gespräche (Paare aus Teammitglied und Nutzer)
- Einen **Pull Next User**-Knopf (deaktiviert, wenn offline oder die Warteschlange leer ist)
- Einen **View Queue Details**-Knopf

Titel und Farbe des Dashboard-Embeds werden über die Vorlagen [Dashboard-Titel (Offen)](#customizable-messages) und [Dashboard-Titel (Geschlossen)](#customizable-messages) angepasst.

## Prioritätsrollen {#priority-roles}

Nutzer mit einer der konfigurierten Prioritätsrollen werden in eine Prioritätsstufe eingeordnet. Prioritätsnutzer werden immer vor Nutzern ohne Priorität geholt, jeweils in der Reihenfolge ihres Beitritts. Prioritätsnutzer durchlaufen denselben DM-Ablauf wie normale Nutzer; ihr Prioritätsstatus wird im Dashboard (mit `[priority]` markiert) und im [Gesprächsverlauf](/de/docs/support-bot/voice-support/commands) des Nutzers angezeigt.

Prioritätsrollen beeinflussen ausschließlich die Position in der Warteschlange - Prioritätsnutzer können weiterhin auf die [Blockierungsliste](/de/docs/support-bot/voice-support/commands#blocklist) gesetzt werden und unterliegen denselben Status-Modus-Regeln wie alle anderen.

## Berechnung der Wartezeit {#wait-time}

Die in den DMs der Nutzer angezeigte geschätzte Wartezeit basiert auf aktuellen Gesprächsdaten:

| Feld                                    | Beschreibung                                                                                                                                                                                                                                                                        |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rollierendes Fenster (Anrufe)           | Anzahl der letzten Gespräche, die zur Berechnung der durchschnittlichen Gesprächsdauer und (im Modus „opening-hours") der durchschnittlichen Team-Benachrichtigungszeit verwendet werden. Kleinere Werte reagieren schneller auf Änderungen; größere sind stabiler. Standard: `20`. |
| Puffer (Sekunden)                       | Feste Anzahl an Sekunden, die jeder Schätzung hinzugefügt wird, um nicht zu knapp zu versprechen. Standard: `30`.                                                                                                                                                                   |
| Initiale Wartezeit-Schätzung (Sekunden) | Anfängliche Schätzung der „Zeit, bis Teammitglieder online sind" im Modus `opening-hours`, bevor genug echte Daten gesammelt wurden. Standard: `300` (5 Minuten).                                                                                                                   |
| DM-Update-Intervall (Sekunden)          | Wie oft der Bot die Positions-DM jedes wartenden Nutzers bearbeitet. Standard: `60`. Niedrigere Werte zeigen aktuellere Infos, bearbeiten Nachrichten aber häufiger; der Bot überspringt Bearbeitungen bereits, wenn sich nichts Sichtbares geändert hat.                           |

## Verhalten des Warteschlangen-Kanals {#queue-channel-behaviour}

Diese Optionen steuern, was mit dem Warteschlangen-Sprachkanal selbst passiert, wenn Sprachsupport öffnet und schließt:

| Feld                                                           | Beschreibung                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Warteschlangen-Kanal sperren, wenn der Support geschlossen ist | Wenn aktiviert, verweigert der Bot `Connect` für `@everyone` im Warteschlangen-Kanal, solange Sprachsupport offline ist, sodass Nutzer außerhalb der Öffnungszeiten nicht beitreten können. Wird automatisch deaktiviert, wenn [Musik für den geschlossenen Zustand](#closed-music) aktiv ist (Nutzer müssen sich zum Zuhören verbinden können). Standard: `true`. |
| Warteschlangen-Kanal bei Zustandswechsel umbenennen            | Wenn aktiviert, benennt der Bot den Warteschlangen-Kanal automatisch je nach Zustand (geöffnet/geschlossen) um.                                                                                                                                                                                                                                                    |
| Kanalname, wenn der Support offen ist                          | Name, der verwendet wird, wenn Sprachsupport geöffnet ist (z.B. `voice-support`).<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Warteschlangen-Kanal bei Zustandswechsel umbenennen" aktiviert ist._</blockquote></details></small>                                                                                   |
| Kanalname, wenn der Support geschlossen ist                    | Name, der verwendet wird, wenn Sprachsupport offline ist (z.B. `voice-support-closed`).<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Warteschlangen-Kanal bei Zustandswechsel umbenennen" aktiviert ist._</blockquote></details></small>                                                                             |

:::info Discord-Ratenlimits
Discord begrenzt Kanal-Umbenennungen auf 2 pro 10 Minuten. Der Bot erzwingt eine Abklingzeit von 4 Minuten zwischen Umbenennungen und reiht schnell aufeinanderfolgende Umbenennungen ein, sodass am Ende der letzte Zustand gilt.
:::

## Wartemusik {#waiting-music}

Optionale Wartemusik, die in Schleife im Warteschlangen-Kanal läuft, solange Sprachsupport geöffnet ist. Der Bot betritt den Warteschlangen-Kanal (sofort beim Öffnen oder bei Bedarf, wenn sich der erste Nutzer verbindet - siehe [Bei Bedarf beitreten](#join-on-demand)) und streamt einen zufälligen Titel. Sind keine Nutzer (außer Bots) verbunden, wird die Wiedergabe automatisch pausiert.

:::tip Titel im Dashboard erzeugen
Du musst keine eigenen Dateien hosten - das Dashboard kann [Musik und Text-to-Speech-Ansagen mit KI erzeugen](/de/docs/support-bot/voice-support/ai-audio) und mit einem Klick dieser Playlist hinzufügen. Erzeugte Clips werden in AI Coins abgerechnet.
:::

| Feld                                                           | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wartemusik aktivieren                                          | Wenn aktiviert, spielt der Bot Wartemusik im Warteschlangen-Kanal, solange Sprachsupport geöffnet ist.                                                                                                                                                                                                                                                                                                                                                                 |
| Wiedergabeliste                                                | Die Liste der Audio-URLs, die der Bot durchläuft. Jeder Eintrag hat einen optionalen Anzeigenamen.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Wartemusik aktivieren" aktiviert ist. Mindestens ein Titel muss konfiguriert sein; andernfalls deaktiviert der Bot die Wiedergabe und postet einen Hinweis im Dashboard-Kanal._</blockquote></details></small>                                                           |
| Lautstärke                                                     | Wiedergabelautstärke (`0.0` – `1.0`). Standard: `0.67`.                                                                                                                                                                                                                                                                                                                                                                                                                |
| Bot nur beitreten lassen, wenn jemand in der Warteschlange ist | Wenn aktiviert, betritt der Bot den Warteschlangen-Kanal erst, wenn sich der erste Nutzer verbindet, und verlässt ihn, sobald der Kanal leer ist. Wenn deaktiviert, bleibt der Bot während der gesamten Öffnungszeit im Warteschlangen-Kanal.<br/><small><details><summary>Hinweis</summary><blockquote>_Die Aktivierung verzögert die ersten Sekunden der Musik leicht, vermeidet aber einen dauerhaft anwesenden Bot im Sprachkanal._</blockquote></details></small> |

:::caution Fehlerhafte Titel
Schlägt das Streamen eines Titels dreimal in Folge fehl, deaktiviert der Bot die Musikwiedergabe automatisch und postet einen Hinweis im [Dashboard-Kanal](#dashboard-channel). Korrigiere die fehlerhaften Titel-URLs im Dashboard und aktiviere die Musik erneut, um fortzufahren.
:::

### Bei Bedarf beitreten {#join-on-demand}

Mit aktiviertem **Bot nur beitreten lassen, wenn jemand in der Warteschlange ist** verbindet sich der Bot erst mit dem Warteschlangen-Kanal, wenn der erste Nutzer beitritt, und trennt sich, wenn der letzte Nutzer geht. Das vermeidet einen dauerhaft anwesenden Bot im Sprachkanal und reduziert die ausgehende Bandbreite. Lass die Option aus, wenn der Bot während der Öffnungszeiten dauerhaft verbunden bleiben soll.

### Musik für den geschlossenen Zustand {#closed-music}

Eine optionale zweite Playlist, die der Bot abspielt, solange Sprachsupport **offline** ist. Wenn aktiviert, können Nutzer den Warteschlangen-Kanal auch außerhalb der Öffnungszeiten betreten, um zuzuhören; sobald Sprachsupport wieder öffnet, werden alle noch im Kanal befindlichen Nutzer automatisch eingereiht.

Die gleichen [KI-Audio-Werkzeuge](/de/docs/support-bot/voice-support/ai-audio) stehen beim Bearbeiten dieser Playlist zur Verfügung - ideal für eine Ansage außerhalb der Öffnungszeiten, gefolgt von ruhiger Hintergrundmusik.

| Feld                                                 | Beschreibung                                                                                                                                                                                                                                                            |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Musik abspielen, während der Support geschlossen ist | Wenn aktiviert, spielt der Bot eine andere Playlist, solange Sprachsupport offline ist. **Erzwingt, dass der Warteschlangen-Kanal entsperrt bleibt**, unabhängig von der Einstellung [Beim Schließen sperren](#queue-channel-behaviour).                                |
| Wiedergabeliste für den geschlossenen Zustand        | Die Liste der Audio-URLs, die im geschlossenen Zustand gespielt werden.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Musik abspielen, während der Support geschlossen ist" aktiviert ist._</blockquote></details></small> |

## Team-Benachrichtigung {#staff-summon}

Eine Nachricht in einem konfigurierten Kanal, wenn Nutzer in der Warteschlange warten, damit dein Team weiß, dass es online kommen sollte. Mit **Wann benachrichtigt wird** legst du fest, wann sie gesendet wird:

- **Nur wenn niemand aus deinem Team da ist (benötigt Öffnungszeiten)**: Benachrichtigt einmalig, sobald mindestens ein Nutzer wartet und kein Teammitglied in einem Support-Sprachkanal ist. Das funktioniert nur im Status-Modus **opening-hours** (im Modus staff-presence bedeutet „kein Teammitglied verbunden", dass Sprachsupport geschlossen ist, sodass sich die Warteschlange gar nicht füllen kann). Der Bot löst den Ping einmal pro Episode „Warteschlange nicht leer, aber kein Team anwesend" aus - kein Spam, wenn das Team kurz die Verbindung trennt. Er wird erneut aktiviert, wenn das Team wieder beitritt oder die Warteschlange sich leert.
- **Bei jedem Eintritt in die Warteschlange**: Sendet eine Ankündigung, sobald jemand die Warteschlange betritt - begrenzt durch die Abklingzeit. Funktioniert sowohl mit Öffnungszeiten als auch mit Team-Anwesenheit.

| Feld                                           | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Team benachrichtigen, wenn Nutzer warten       | Wenn aktiviert, sendet der Bot eine Nachricht in den Benachrichtigungs-Kanal, während Nutzer in der Warteschlange sitzen (siehe **Wann benachrichtigt wird**).                                                                                                                                                                                                                                                                                               |
| Wann benachrichtigt wird                       | `Nur wenn niemand aus deinem Team da ist (benötigt Öffnungszeiten)` oder `Bei jedem Eintritt in die Warteschlange`, wie oben beschrieben.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Die Option „Nur wenn niemand aus deinem Team da ist" wird im Status-Modus „staff-presence" nie ausgelöst. Wechsle zu „Bei jedem Eintritt in die Warteschlange" oder aktiviere die Öffnungszeiten._</blockquote></details></small>                 |
| Benachrichtigungs-Kanal                        | Der Textkanal, in dem die Nachricht gepostet wird. Rollen kannst du direkt im Nachrichtentext erwähnen (z.B. `<@&ROLE_ID>`), um sie zu pingen.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Team benachrichtigen, wenn Nutzer warten" aktiviert ist._</blockquote></details></small>                                                                                                                           |
| Abklingzeit zwischen Ankündigungen (Sekunden)  | Kürzester Abstand zwischen zwei Ankündigungen. Eintritte während der Abklingzeit werden übersprungen. Setze den Wert auf `0`, um die Abklingzeit zu deaktivieren und jeden einzelnen Eintritt anzukündigen.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Wann benachrichtigt wird" auf „Bei jedem Eintritt in die Warteschlange" steht._</blockquote></details></small>                                        |
| Team-Benachrichtigungsnachricht                | Die Embed-Vorlage, die im Modus „Nur wenn niemand aus deinem Team da ist" gepostet wird. Rollen-Erwähnungen werden automatisch vor dem Nachrichteninhalt hinzugefügt. Unterstützt die Platzhalter `%queueSize%`, `%priorityQueueSize%`, `%normalQueueSize%`, `%firstWaiterMention%`, `%firstWaiterTag%` sowie alle [globalen Platzhalter](/de/docs/support-bot/general/global-placeholders).                                                                 |
| Ankündigung beim Eintritt in die Warteschlange | Die Embed-Vorlage, die im Modus „Bei jedem Eintritt in die Warteschlange" gepostet wird. Rollen kannst du direkt im Nachrichtentext erwähnen, um sie zu pingen. Unterstützt die Platzhalter `%userMention%`, `%userTag%`, `%userID%`, `%queuePosition%`, `%queueSize%`, `%priorityQueueSize%`, `%normalQueueSize%` sowie alle [globale Platzhalter](/de/docs/support-bot/general/global-placeholders). Solange die Nachricht leer ist, wird nichts gepostet. |

## Thread-Modus {#thread-mode}

Wenn aktiviert, erhält jedes Gespräch einen **privaten Thread** unter dem [Dashboard-Kanal](#dashboard-channel). Nur das Teammitglied, das den Nutzer geholt hat, wird hinzugefügt; weitere Personen kann es über die Discord-Oberfläche einladen.

Jeder Thread beginnt mit einem Info-Embed, das zeigt:

- Den beteiligten Nutzer und das beteiligte Teammitglied
- Startzeit des Gesprächs und die Wartezeit
- Prioritätsstatus und Thema (falls vorhanden)
- Den bisherigen Verlauf des Nutzers (Anzahl der Sitzungen, Gesamtzahl der Notizen, Anzahl abgeschlossener/abgebrochener Gespräche)
- Eine Zusammenfassung der 3 neuesten früheren Notizen

Alle [Notizen](/de/docs/support-bot/voice-support/commands), [Nachbesprechungen](#debrief) und [Feedback-Einsendungen](#user-feedback) werden ebenfalls in den Thread gepostet. Wenn das Gespräch endet, wird der Thread archiviert.

| Feld         | Beschreibung                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------- |
| Thread-Modus | Wenn aktiviert, wird für jedes Gespräch ein privater Thread unter dem Dashboard-Kanal erstellt. |

## Wartende Nutzer zu einem Anruf hinzufügen {#add-users-to-call}

Erlaubt dem Team, einen Nutzer aus der Warteschlange in den laufenden Anruf zu holen - praktisch, wenn mehrere Nutzer dasselbe Problem haben oder wenn Freunde gemeinsam angestanden sind und zusammen betreut werden möchten. Wenn deaktiviert, wird jeder Anrufer einzeln betreut.

| Feld                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wartende Nutzer zu einem Anruf hinzufügen | Wenn aktiviert, erhalten die Anruf-Steuerelemente einen Button **Nutzer zum Anruf hinzufügen** und das Team kann [`/voice add`](/de/docs/support-bot/voice-support/commands) nutzen. Es können nur Nutzer hinzugefügt werden, die gerade in der Warteschlange warten. Der hinzugefügte Nutzer erhält die Nachricht [Zum Anruf hinzugefügt](#customizable-messages) in seiner Warteschlangen-DM. Standard: deaktiviert. |

## Nachbesprechung {#debrief}

Ein Formular, das das Team nach dem Beenden eines Gesprächs ausfüllen kann. Nutze es, um zu dokumentieren, was besprochen wurde, ob eine Nachverfolgung nötig ist usw. Die Antworten können optional in einen Log-Kanal gespiegelt werden.

| Feld                               | Beschreibung                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Team-Debrief aktivieren            | Wenn aktiviert, wird das Team nach jedem Gespräch aufgefordert, ein Nachbesprechungs-Formular auszufüllen.                                                                                                                                                                                                                             |
| Debriefe an einen Log-Kanal senden | Wenn aktiviert, werden eingereichte Nachbesprechungen zusätzlich zum Thread (falls der [Thread-Modus](#thread-mode) aktiv ist) in einen eigenen Log-Kanal gepostet.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Team-Debrief aktivieren" aktiviert ist._</blockquote></details></small> |
| Log-Kanal                          | Der Textkanal, in den Nachbesprechungen protokolliert werden.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Debriefe an einen Log-Kanal senden" aktiviert ist._</blockquote></details></small>                                                                                            |
| Einführungsnachricht               | Das Embed, das am Anfang des Nachbesprechungs-Formulars angezeigt wird.                                                                                                                                                                                                                                                                |
| Bestätigungsnachricht              | Das Embed, das angezeigt wird, nachdem das Team die Nachbesprechung eingereicht hat.                                                                                                                                                                                                                                                   |
| Debrief-Fragen                     | Die Liste der Formularfelder (kurze oder lange Eingabe). Jede Frage hat eine Beschriftung, einen Stil, eine Pflichtfeld-Option, minimale/maximale Länge und einen Platzhaltertext - siehe die [Formular-Konfiguration](/de/docs/support-bot/general/forms#manage-forms-questions) für die Bedeutung der Felder.                        |

## Nutzer-Feedback {#user-feedback}

Eine optionale Sterne-Bewertung per DM, die Nutzern nach dem Ende eines Gesprächs gesendet wird. Verwendet dasselbe [Feedback-System](/de/docs/support-bot/modmail/support-feedback) wie das Feedback in Modmail und im Ticket-System, aber mit einer eigenen Konfiguration pro Gespräch.

| Feld                                  | Beschreibung                                                                                                                                                                                                                                                                                                            |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nutzer-Feedback aktivieren            | Wenn aktiviert, erhalten Nutzer nach dem Ende eines Gesprächs eine DM mit einer Sterne-Bewertung.                                                                                                                                                                                                                       |
| Minimale Anrufdauer (Sekunden)        | Kürzere Gespräche lösen keine Feedback-DM aus, sodass versehentliche 10-Sekunden-Gespräche keine Bewertungsanfrage erzeugen. Standard: `30`.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Nutzer-Feedback aktivieren" aktiviert ist._</blockquote></details></small>      |
| Anonymes Feedback                     | Wenn aktiviert, werden eingereichte Bewertungen ohne die Identität des Nutzers in den Log-Kanal gepostet.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Nutzer-Feedback aktivieren" aktiviert ist._</blockquote></details></small>                                         |
| Feedback in einen Kanal senden        | Wenn aktiviert, werden Feedback-Einsendungen in einen eigenen Log-Kanal gepostet.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Nutzer-Feedback aktivieren" aktiviert ist._</blockquote></details></small>                                                                 |
| Feedback-Kanal                        | Der Textkanal, in den Feedback protokolliert wird.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Feedback in einen Kanal senden" aktiviert ist._</blockquote></details></small>                                                                                            |
| Benutzerdefinierte Feedback-Nachricht | Wenn aktiviert, wird ein anpassbares Embed als Feedback-Aufforderung verwendet. Wenn deaktiviert, wird die systemweite Standardvorlage verwendet.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Wird nur verwendet, wenn „Nutzer-Feedback aktivieren" aktiviert ist._</blockquote></details></small> |
| Feedbackfragen                        | Eigene Nachfragen, die nach der Sterne-Bewertung angezeigt werden (z.B. „Was hätte besser laufen können?"). Gleiche Formularfeld-Semantik wie bei den [Fragen der Nachbesprechung](#debrief).                                                                                                                           |

## Anpassbare Nachrichten {#customizable-messages}

Jedes nutzerseitige Embed, das Sprachsupport sendet, ist anpassbar. Bearbeite sie im Dashboard unter **Sprachsupport → Nachrichten**.

| Nachricht                                      | Wann sie verwendet wird                                                                                                                                | Platzhalter                                                                |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Warteschlange beigetreten                      | DM, die einem Nutzer sofort nach dem Betreten des Warteschlangen-Kanals gesendet wird.                                                                 | `%position%`, `%waitMinutes%` sowie Standard-Nutzer-Platzhalter            |
| Warteschlangenpositions-Update                 | Wird alle paar Sekunden in dieselbe DM bearbeitet, wenn die Warteschlange vorrückt.                                                                    | `%position%`, `%waitMinutes%`                                              |
| Anruf gestartet                                | Wird in die DM des Nutzers bearbeitet, wenn ein Teammitglied ihn holt.                                                                                 | `%staffMention%`, `%staffTag%`                                             |
| Zum Anruf hinzugefügt                          | Wird in die Warteschlangen-DM eines wartenden Nutzers bearbeitet, wenn das Team ihn [zu einem laufenden Anruf hinzufügt](#add-users-to-call).          | `%staffMention%`, `%staffTag%` sowie Standard-Nutzer-Platzhalter           |
| Ankündigung beim Eintritt in die Warteschlange | Wird im Benachrichtigungs-Kanal gepostet, wenn jemand die Warteschlange betritt, siehe [Team-Benachrichtigung](#staff-summon).                         | `%userMention%`, `%userTag%`, `%userID%`, `%queuePosition%`, `%queueSize%` |
| Team-Benachrichtigungsnachricht                | Wird im Benachrichtigungs-Kanal gepostet, wenn Nutzer warten und niemand aus dem Team da ist, siehe [Team-Benachrichtigung](#staff-summon).            | `%queueSize%`, `%firstWaiterMention%`, `%firstWaiterTag%`                  |
| Anruf beendet                                  | Wird in die DM des Nutzers bearbeitet, wenn das Gespräch endet (vom Team beendet oder Zeitüberschreitung).                                             | `%staffTag%`                                                               |
| Nutzer getrennt                                | Alternative Abschlussnachricht, wenn der Nutzer selbst die Verbindung getrennt hat.                                                                    | `%staffTag%`                                                               |
| Warteschlange geschlossen                      | DM, die gesendet wird, wenn Sprachsupport offline geht, während der Nutzer noch in der Warteschlange ist.                                              | `%guildName%`                                                              |
| Bei Offline-Status gekickt                     | DM, die gesendet wird, wenn der Nutzer getrennt wird, weil Sprachsupport offline gegangen ist (Musik für geschlossenen Zustand deaktiviert).           | `%guildName%`, `%userMention%`, `%userTag%`                                |
| Begrüßung im geschlossenen Zustand             | DM, die gesendet wird, wenn Sprachsupport offline geht, der Nutzer aber für die [Musik für den geschlossenen Zustand](#closed-music) verbunden bleibt. | `%guildName%`, `%userMention%`, `%userTag%`, `%openingHours%`              |
| Feedback-Anfrage                               | DM, die am Ende des Gesprächs gesendet wird, wenn [Nutzer-Feedback](#user-feedback) aktiviert ist.                                                     | `%staffTag%`                                                               |
| Verlaufsüberschrift                            | Embed-Kopfzeile, die angezeigt wird, wenn das Team `/voice history` ausführt.                                                                          | `%userTag%`, `%noteCount%`, `%callCount%`                                  |
| Warteschlangen-Kanal-Embed                     | Die Nachricht, die im Warteschlangen-Kanal selbst gepostet/aktualisiert wird und die aktuelle Aufstellung zeigt.                                       | `%queueBody%`                                                              |
| Dashboard-Titel (Offen)                        | Titel-Embed oben im [Dashboard](#dashboard-channel), wenn Sprachsupport geöffnet ist.                                                                  | `%staffCount%`                                                             |
| Dashboard-Titel (Geschlossen)                  | Titel-Embed, wenn Sprachsupport offline ist.                                                                                                           | (keine)                                                                    |

Alle Vorlagen akzeptieren außerdem die [globalen Platzhalter](/de/docs/support-bot/general/global-placeholders) (`%guildName%`, `%botName%`, Discord-Zeitstempel, `%openingHours%` usw.).
