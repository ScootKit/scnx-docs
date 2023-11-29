# Automatisches Thread-Erstellen

Lasse automatisch Threads unter jeder Nachricht erstellen, die in einen ausgewählten Kanal gesendet wurde
<ModuleOverview moduleName="auto-thread" />

## Funktionen {#features}

* Erstelle automatisch einen Thread unter Nachrichten, die in einen konfigurierten Kanal gesendet wurden.
* Personalisiere den Namen des Threads und die Standardarchivierungsdauer.

## Einrichtung {#setup}

1. Stelle sicher, dass dein Bot auf dem Kanal, für den du diese Funktion verwenden willst, über die Berechtigungen "Öffentliche Threads erstellen" ("Create public thread") und "Nachrichten senden" ("Send messages") verfügt.
2. [Konfiguriere](#configuration), in welchen Kanälen Threads automatisch erstellt werden sollen.
3. Lade deine Konfiguration neu, um die Änderungen zu übernehmen.

## Nutzung {#usage}

Nach dem [Einrichten](#setup) des Moduls wird der Bot automatisch unter jeder Nachricht, welche in einen konfigurierten Kanal gesendet wurde, 
einen Thread erstellen - keine weiteren Aktionen erforderlich.

## Konfiguration {#configuration}

In dieser Konfigurationsdatei kannst du konfigurieren, in welchen Kanälen der Bot automatisch Threads erstellen soll. 
Öffne [diese Datei in deinem Dashboard](https://scnx.app/glink?page=bot/configuration?file=auto-thread|config).

| Feld               | Beschreibung                                                                                                                                                                                                           |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Kanäle             | Wenn eine Nachricht in einen hier konfigurierten Kanal gesendet wird, erstellt der Bot unter der Nachricht automatisch einen Thread.                                                                                   |
| Threadname         | Das ist der Name des erstellten Threads.                                                                                                                                                                               |
| Archivierungsdauer | Neue Threads bekommen diese Archivierungsdauer. Der Wert ist in Minuten und du kannst eine der verfügbaren Optionen auswählen. Die MAX-Option wird dies automatisch zum für deinen Server höchstmöglichen Wert setzen. |

## Fehlerbehebung {#troubleshooting}

Wenn der Bot nicht automatisch Threads erstellt, stelle bitte sicher dass

* der Kanal, in den du schreibst, zur [Konfiguration](#configuration) hinzugefügt ist.
* der [konfigurierte](#configuration) Thread-Name weniger als 100 Zeichen lang ist.
* der Bot die Berechtigungen "Öffentliche Threads erstellen" ("Create public thread") und "Nachrichten senden" ("Send messages") hat.
* bisher kein Thread unter der Nachricht erstellt wurde.
