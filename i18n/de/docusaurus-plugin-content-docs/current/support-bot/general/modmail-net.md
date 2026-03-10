---
sidebar_position: 3
title: modmail.net Funktionen
description: Betrachte Discord-Support-Ticket-Transkripte in einer modernen Web-Oberfläche mit modmail.net-Integration.
---

# modmail.net Funktionen

[modmail.net](https://modmail.net) ist eine Web-Plattform, die von ScootKit (dem Team hinter SCNX) entwickelt wurde und eine übersichtliche, formatierte Oberfläche zum Betrachten von Ticket-Transkripten bietet. Anstatt reine Textdateien herunterzuladen, können dein Team und deine Nutzer Ticket-Logs in einem modernen Web-Layout ansehen — mit Nachrichtenformatierung, Zeitstempeln und Nutzer-Avataren.

## Funktionen {#features}

* Betrachte Ticket-Transkripte in einer formatierten Web-Oberfläche mit korrekter Nachrichtenformatierung, Zeitstempeln und Avataren.
* Teile Ticket-Transkripte über einen einfachen Link — kein Datei-Download nötig.
* Lade Ticket-Logs nach dem Schließen eines Tickets automatisch auf modmail.net hoch.
* Lade optional Nachrichten-Anhänge (Bilder, Dateien) auf modmail.net für langfristige Speicherung hoch.
* Greife auf Transkripte von sowohl Modmail als auch dem Ticket-System zu.

<h4>Bilder Coming Soon ✨</h4>

## Einrichtung {#setup}

* Besuche den Abschnitt [modmail.net Funktionen](https://scnx.app/glink?page=support-system/bot-configuration?show=modmail-net) in deinem Dashboard.
* [Konfiguriere](#configuration) die verfügbaren Optionen.

## Konfiguration {#configuration}

| Feld | Beschreibung |
| --- | --- |
| modmail.net Funktionen aktivieren | Aktiviert oder deaktiviert die modmail.net-Integration für deinen Support-Bot. Wenn aktiviert, werden zusätzliche Funktionen wie das Hochladen von Logs und Anhängen verfügbar. |
| Ticket-Logs auf modmail.net hochladen | Wenn aktiviert, werden Ticket-Transkripte nach dem Schließen eines Tickets automatisch auf modmail.net hochgeladen. Nutzer und Teammitglieder können die Logs dann in einem formatierten Web-Layout ansehen, indem sie auf den Knopf in der Log-Kanal-Nachricht klicken, anstatt eine Textdatei herunterzuladen.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn „modmail.net Funktionen aktivieren" aktiviert ist.*</blockquote></details></small> |
| Anhänge auf modmail.net hochladen | Wenn aktiviert, werden Nachrichten-Anhänge (Bilder, Dateien usw.), die in Tickets gesendet werden, auf modmail.net für dauerhafte Speicherung hochgeladen. Ohne diese Option können Anhänge nicht mehr verfügbar sein, nachdem die CDN-Links von Discord ablaufen.<br/><small><details><summary>Voraussetzung</summary><blockquote>*Nur verfügbar, wenn „modmail.net Funktionen aktivieren" aktiviert ist.*</blockquote></details></small> |
