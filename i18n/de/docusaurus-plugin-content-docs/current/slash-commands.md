---
title: Berechtigungen & Slash Commands
description: Anleitung zur Konfiguration von Berechtigungen für Slash Commands deines eigenen Bots.
---

# Berechtigungen & Slash Commands


Discord stellt ein zentrales System zur Verwaltung von Slash Commands bereit.
Dieses System ermöglicht Serveradministratoren eine detaillierte Steuerung von
Berechtigungen für Bots und deren Befehle.

Aufgrund der zugrunde liegenden Berechtigungslogik ist es erforderlich,
festzulegen, welche Aktionen Bots und Nutzer ausführen dürfen.
Diese Anleitung beschreibt die notwendigen Schritte zur Konfiguration.

## Eigene Bot-Rechte konfigurieren

## Command-Rechte-Menü öffnen

Um die Berechtigungen für Slash Commands zu verwalten:

1. Öffne die **Servereinstellungen**
2. Navigiere zu **Integrationen → Bots & Apps**
3. Wähle den gewünschten Bot aus
4. Klicke auf **Verwalten** (Manage)

![Command-Rechte-Menü](@site/docs/assets/custom-bot/slash-commands/de/integrations-1.png)

## Rechte verwalten

Nach dem Öffnen des Bot-Menüs wird eine Übersicht der verfügbaren
Slash Commands angezeigt.

![Rechte-Übersicht](@site/docs/assets/custom-bot/slash-commands/de/integrations.png)

## Einstellungen für einzelne Befehle

Wähle einen beliebigen Slash Command aus.
Es öffnet sich ein Menü zur Konfiguration der Berechtigungen.

![Command-Einstellungen](@site/docs/assets/custom-bot/slash-commands/de/ausführen.png)

Für jeden Command kann festgelegt werden:
* welche **Rollen** ihn ausführen dürfen
* welche **Benutzer** Zugriff haben
* in welchen **Kanälen** der Command ausgeführt werden darf

:::warning Wichtiger Hinweis  
Bei den meisten Befehlen überprüft der Bot die Berechtigungen nicht zusätzlich  
(Ausnahme: `/moderate`).  
Jeder Nutzer, der hier Ausführungsrechte erhält, kann **alle Unterbefehle**
dieses Commands ohne weitere Einschränkungen ausführen.  
Die Vergabe von Rechten sollte daher sorgfältig erfolgen.
:::

## Synchronisation von Befehlen

Discord bietet die Möglichkeit, Berechtigungseinstellungen für mehrere
Commands gemeinsam zu verwalten.

* Synchronisierte Commands übernehmen identische Einstellungen
* Einzelne Commands können manuell von der Synchronisation ausgeschlossen werden
* Nicht synchronisierbare Commands können weiterhin individuell konfiguriert werden

## Änderungen für den Eigenen Bot

Bisher mussten bei jeder Rechte-Änderung im Dashboard alle Commands neu zu Discord übertragen werden. Das fällt nun logischerweise weg. Gleichzeitig können wir allerdings auch nicht die Rechte für die Nutzung der Befehle selber einstellen, weswegen wir alle Optionen zur Einstellung von Rechten entfernen werden.

## Fragen oder Probleme?

Ihr könnt jederzeit über [Discord](https://scootk.it/dc-de) im #support Kanal ein Support-Ticket öffnen und um Hilfe bitten. Wir helfen gerne weiter.

Mehr Informationen von Discord: https://discord.com/blog/slash-commands-permissions-discord-apps-bots