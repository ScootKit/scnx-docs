# Berechtigungen & Slash Befehle


Discord stellt ein zentrales System zur Verwaltung von Slash Befehlen bereit.
Dieses System ermöglicht Serveradministratoren eine detaillierte Steuerung von
Berechtigungen für Bots und deren Befehle.

Aufgrund der zugrunde liegenden Berechtigungslogik ist es erforderlich,
festzulegen, welche Aktionen Bots und Nutzer ausführen dürfen.
Diese Anleitung beschreibt die notwendigen Schritte zur Konfiguration.

## Eigene Bot-Rechte konfigurieren

### Befehl-Rechte-Menü öffnen

Um die Berechtigungen für Slash Befehle zu verwalten:

1. Öffne die **Servereinstellungen**
2. Navigiere zu **Integrationen → Bots & Apps**
3. Wähle den gewünschten Bot aus
4. Klicke auf **Verwalten** (Manage)

![Command-Rechte-Menü, auf wie man den Berechtigungsbereich erreicht](@site/docs/assets/custom-bot/slash-commands/de/integrations-1.png)

### Rechte verwalten

Nach dem Öffnen des Bot-Menüs wird eine Übersicht der verfügbaren
Slash Befehle angezeigt.

![Rechte-Übersicht, zeigt die Liste der Befehle und deren aktuelle Berechtigungen](@site/docs/assets/custom-bot/slash-commands/de/integrations.png)

### Einstellungen für einzelne Befehle

Wähle einen beliebigen Slash Befehl aus.
Es öffnet sich ein Menü zur Konfiguration der Berechtigungen.

![Command-Einstellungen, zeigt das Berechtigungskonfigurationsmenü zur Einstellung von Kanälen, Rollen und Benutzern](@site/docs/assets/custom-bot/slash-commands/de/ausführen.png)

Für jeden Command kann festgelegt werden:
* welche **Rollen** ihn ausführen dürfen
* welche **Benutzer** Zugriff haben
* in welchen **Kanälen** der Command ausgeführt werden darf

:::warning Wichtiger Hinweis  
Bei den meisten Befehlen überprüft der Bot die Berechtigungen nicht zusätzlich  
(abgesehen von einigen Ausnahmen, z.B. `/moderate`).  
Jeder Nutzer, der hier Ausführungsrechte erhält, kann **alle Unterbefehle**
dieses Befehls ohne weitere Einschränkungen ausführen.  
Die Vergabe von Rechten sollte daher sorgfältig erfolgen.
:::

### Standardberechtigungen von Befehlen

Einige Slash Befehle erfordern standardmäßig bestimmte Discord-Serverberechtigungen.

Wenn ein Command erforderliche Berechtigungen besitzt (z. B. **Mitglieder moderieren**),
können ihn zunächst nur Nutzer ausführen, die über diese Serverrechte verfügen.

Discord zeigt in diesem Fall einen Hinweis wie:
> „Mitglieder benötigen Serverberechtigungen, um diesen Command zu verwenden.“

Diese Standardberechtigungen gelten so lange, bis sie im Command-Berechtigungsmenü
explizit überschrieben werden, indem Rollen oder einzelne Nutzer hinzugefügt werden.

So stellt Discord sicher, dass sensible Befehle nur von autorisierten Mitgliedern
verwendet werden, sofern der Zugriff nicht bewusst erweitert wird.


## Synchronisation von Befehlen

Discord bietet die Möglichkeit, Berechtigungseinstellungen für mehrere
Befehle gemeinsam zu verwalten.

* Synchronisierte Befehle übernehmen identische Einstellungen
* Einzelne Befehle können manuell von der Synchronisation ausgeschlossen werden
* Nicht synchronisierbare Befehle können weiterhin individuell konfiguriert werden
## Änderungen für den Eigenen Bot

Bisher mussten bei jeder Rechte-Änderung im Dashboard alle Befehle neu zu Discord übertragen werden. Das fällt nun logischerweise weg. Gleichzeitig können wir allerdings auch nicht die Rechte für die Nutzung der Befehle selber einstellen, weswegen wir alle Optionen zur Einstellung von Rechten entfernen werden.

## Fragen oder Probleme?

Ihr könnt jederzeit über [Discord](https://scootk.it/dc-de) im #support Kanal ein Support-Ticket öffnen und um Hilfe bitten. Wir helfen gerne weiter.

Mehr Informationen von Discord: https://discord.com/blog/slash-commands-permissions-discord-apps-bots