---
sidebar_position: 3
title: modmail.net Funktionen
description: Betrachte Discord-Support-Ticket-Transkripte in einer modernen Web-Oberfläche mit modmail.net-Integration.
---

# modmail.net Funktionen

[modmail.net](https://modmail.net) ist eine Web-Plattform, die von ScootKit (dem Team hinter SCNX) entwickelt wurde und eine übersichtliche, formatierte Oberfläche zum Betrachten von Ticket-Transkripten bietet. Anstatt reine Textdateien herunterzuladen, können dein Team und deine Nutzer Ticket-Logs in einem modernen Web-Layout ansehen - mit Nachrichtenformatierung, Zeitstempeln und Nutzer-Avataren.

## Funktionen {#features}

- Betrachte Ticket-Transkripte in einer formatierten Web-Oberfläche mit korrekter Nachrichtenformatierung, Zeitstempeln und Avataren.
- Teile Ticket-Transkripte über einen einfachen Link - kein Datei-Download nötig.
- Lade Ticket-Logs nach dem Schließen eines Tickets automatisch auf modmail.net hoch.
- Archiviere Nachrichten-Anhänge in deiner SCNX-Dateibibliothek, damit sie weiterhin funktionieren, nachdem die kurzlebigen Anhangs-Links von Discord abgelaufen sind - und damit modmail.net sie direkt im Transkript anzeigen kann.
- Greife auf Transkripte von sowohl Modmail als auch dem Ticket-System zu.

## Einrichtung {#setup}

- Besuche den Abschnitt [modmail.net Funktionen](https://scnx.app/glink?page=support-system/bot-configuration?show=modmail-net) in deinem Dashboard.
- [Konfiguriere](#configuration) die verfügbaren Optionen.

## Konfiguration {#configuration}

| Feld                               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modmail.net Funktionen aktivieren  | Aktiviert oder deaktiviert die modmail.net-Integration für deinen Support-Bot. Wenn aktiviert, werden zusätzliche Funktionen wie das Hochladen von Logs verfügbar.                                                                                                                                                                                                                                                                                                                       |
| modmail.net Logs verwenden         | Wenn aktiviert, werden Ticket-Transkripte nach dem Schließen eines Tickets automatisch auf modmail.net hochgeladen. Nutzer und Teammitglieder können die Logs dann in einem formatierten Web-Layout ansehen, indem sie auf den Knopf in der Log-Kanal-Nachricht klicken, anstatt eine Textdatei herunterzuladen.<br/><small><details><summary>Voraussetzung</summary><blockquote>_Nur verfügbar, wenn „modmail.net Funktionen aktivieren" aktiviert ist._</blockquote></details></small> |
| Ticket-Anhänge in SCNX archivieren | Wenn aktiviert, werden Anhänge aus Tickets in die SCNX-Dateibibliothek deines Servers hochgeladen, damit ihre URLs weiterhin funktionieren, nachdem die kurzlebigen Discord-Links abgelaufen sind. Siehe [Anhangsarchivierung](#attachment-archival) für Details. Gilt für Modmail und das Ticket-System. Standardmäßig aktiviert.                                                                                                                                                       |

## Anhangsarchivierung {#attachment-archival}

Die Anhangs-Links von Discord sind nur für eine kurze Zeit gültig. Ohne Archivierung wird jedes Bild oder jede Datei, die ein Nutzer oder ein Teammitglied an ein Ticket anhängt, bald zu einem toten Link - ein echtes Problem für [modmail.net-Transkripte](#configuration), die Tage später angesehen werden, und für alle, die alte Tickets durchgehen möchten.

Mit aktivierter Option **Ticket-Anhänge in SCNX archivieren** kopiert dein Bot jeden Anhang in die SCNX-Dateibibliothek deines Servers, sobald die Nachricht verarbeitet wird. Von da an wird die dauerhafte Kopie verwendet - so rendert modmail.net den Anhang direkt im Transkript und Links in älteren Nachrichten funktionieren dauerhaft.

### Du behältst die Kontrolle {#you-stay-in-control}

Archivierte Anhänge sind **die Dateien deines Servers** - sie liegen in derselben [Dateibibliothek](/docs/scnx/guilds/files), die du bereits für hochgeladene und KI-generierte Inhalte nutzt. Nichts ist versteckt:

- **Volle Transparenz.** Jeder archivierte Anhang wird auf der Dateibibliotheks-Seite mit Vorschau, Dateiname, Größe und Discord-ID des Hochladenden angezeigt. Du kannst nach Tags filtern, nach Dateinamen suchen und genau sehen, was dein Bot gespeichert hat.
- **Jederzeit löschbar.** Klicke auf den Löschen-Knopf an einer Datei, um sie sofort zu entfernen. Massenlöschung und Filtern-und-Löschen funktionieren ebenfalls. Gelöschte Dateien geben den Speicherplatz sofort frei.
- **Eine Kopie pro Datei, pro Server.** Wenn derselbe Anhang in mehreren Tickets gepostet wird - ein Logo, das derselbe Nutzer immer wieder sendet, oder ein Screenshot, den ein Teammitglied mehrfach anhängt - wird er von deinem Server nur einmal gespeichert. Das hält deine Quote effizient, bedeutet aber auch, dass **das Löschen dieser Datei sie aus jedem Ticket-Transkript entfernt, in dem sie referenziert wurde**, nicht nur aus einem. Ältere Transkripte, die auf die Datei verlinkt haben, zeigen dann einen Platzhalter „Datei nicht mehr verfügbar" an. Die Transkripte selbst laden weiterhin einwandfrei - nur der fehlende Anhang wird ausgeblendet.
- **Archivierung jederzeit deaktivierbar.** Der Schalter **Ticket-Anhänge in SCNX archivieren** ist jederzeit verfügbar. Schalte ihn aus und es werden keine neuen Anhänge mehr gespeichert. Bereits archivierte Dateien bleiben, bis du sie selbst löschst.

:::info Zur Löschzeit
Das Löschen einer Datei auf SCNX entfernt sie sofort aus deiner Bibliothek und der Zugriff wird unmittelbar entzogen. Einige CDN- und Browser-Caches können jedoch eine zuvor geladene Kopie bis zu einigen Tagen weiter ausliefern, bevor sie vollständig aufholen - das ist normales Web-Verhalten, nicht einzigartig für SCNX, und unser Support-Team kann es nicht erzwingen. Damit eine Datei von allen Caches im Internet vollständig verschwindet, musst du sie löschen und anschließend die Cache-Zeit abwarten.

Bitte bedenke außerdem, dass Uploads zu SCNX - einschließlich Anhängen, die über die Ticket-Archivierung in deiner Dateibibliothek landen - unseren [Nutzungsbedingungen](https://scootk.it/scnx-tos) unterliegen. Inhalte, die gegen die Bedingungen verstoßen (illegales Material, private Daten anderer Nutzer, Malware usw.), sind auf SCNX nicht erlaubt, und Konten oder Server, die solche Inhalte speichern, können gesperrt werden. Wenn du befürchtest, dass ein unsicherer Anhang in einem Ticket gelandet ist, lösche ihn sofort aus der Dateibibliothek.
:::

### Speicher und Quote {#storage-and-quota}

- Archivierte Dateien **zählen zur [Dateispeicher-Quote](/docs/scnx/guilds/files) deines Servers** wie jede andere hochgeladene Datei. [KI-generiertes Audio](/docs/support-bot/voice-support/ai-audio) zählt nicht dazu.
- Wenn die Quote erschöpft ist, wird die Archivierung für neue Anhänge stillschweigend übersprungen - Tickets funktionieren weiterhin mit den ursprünglichen (bald ablaufenden) Discord-Links. Gib Speicherplatz in der Dateibibliothek frei oder rüste deinen Plan auf, um die Archivierung fortzusetzen.

### Archivierung deaktivieren {#disabling-archival}

Schalte die Option **Ticket-Anhänge in SCNX archivieren** im [modmail.net-Abschnitt](https://scnx.app/glink?page=support-system/bot-configuration?show=modmail-net) deiner Support-Bot-Konfiguration aus. Neue Anhänge werden ab diesem Zeitpunkt nicht mehr in deine Dateibibliothek kopiert; bereits archivierte Dateien bleiben dort, bis du sie auf der [Dateibibliothek](/docs/scnx/guilds/files)-Seite löschst.

:::caution modmail.net-Transkripte ohne Archivierung
modmail.net kann Transkripte auch bei deaktivierter Archivierung weiterhin rendern, aber jegliche eingebetteten Anhänge brechen, sobald der ursprüngliche Discord-Link abläuft. Für langfristig lesbare Transkripte solltest du die Archivierung aktiviert lassen.
:::
