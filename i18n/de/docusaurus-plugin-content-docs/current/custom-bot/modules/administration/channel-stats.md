# Kanal-Statistiken

Erstelle Kanäle mit Statistiken über deinen Server - automatisch aktualisiert.

<ModuleOverview moduleName="channel-stats" />

## Funktionen {#features}

Erstelle Sprachkanäle auf deinem Server, welche automatisch aktuelle Statistiken anzeigen, wie z.B. die Anzahl der Mitglieder 
auf deinem Server, die eine bestimmte Rolle haben.

Hier ist ein Beispiel von drei Sprachkanälen, die einige Statistiken über einen Server zeigen:

![](@site/docs/assets/custom-bot/modules/channel-stats/example.png)

## Einrichtung {#setup}

1. Erstelle einen Kanal, den du für die Statistiken verwendet willst (wir empfehlen das Benutzen einer Kategorie oder eines Sprachkanals).
2. Stelle sicher, dass dein Bot die Berechtigungen "Kanal sehen" und "Kanal verwalten" auf den Kanal hat.
3. Öffne die [Kanal-Statistiken-Konfiguration](https://scnx.app/de/glink?page=bot/configuration?file=channel-stats%7Cchannels).
4. Klicke auf "Statistik-Kanal hinzufügen" und konfiguriere den Kanal wie [hier](#configuration) beschrieben.
5. Lade die Konfiguration deines Bots neu, um die Änderungen zu übernehmen.
6. Der Kanal wird automatisch zu den konfigurierten Werte bearbeitet.

## Nutzung {#usage}

Nach dem [einrichten](#setup) und [konfigurieren](#configuration) des Moduls sind keine weiteren Aktionen nötig - die
konfigurierten Kanäle werden automatisch in dem angegebenem Intervall aktualisiert.

## Konfiguration {#configuration}

Mit dieser Konfigurationsdatei kannst du festlegen, welche Kanäle Statistik-Kanäle seien sollen und die angezeigten Werte einstellen. Öffne sie in 
deinem [Dashboard](https://scnx.app/de/glink?page=bot/configuration?file=channel-stats%7Cchannels).

| Feld                     | Beschreibung                                                                                                                                                            |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Kanal                     | Das ist der Kanal, welcher als Statistik-Kanal genutzt wird. Sein Name wird automatisch zum Wert von "Kanalname" aktualisiert.                                         |
| Kanalname                 | Das ist der Name, zu dem der Kanal automatisch aktualisiert wird. <br/><i>Bitte überprüfe verfügbare Parameter in deinem Dashboard.</i>                                | 
| Aktualisierungsintervall  | Das ist das Intervall in Minuten, in welchem dein Bot den Name des Kanals aktualisiert. Aufgrund technischen Limititationen Discords muss dies höher als sieben sein.  |

## Fehlerbehebung {#troubleshooting}

<details>
<summary>Ich versuche den Namen des Kanals zu ändern, doch der Bot ändert ihn zurück</summary>
    Wenn du den Namen des Kanals verändern willst, musst du das Feld "Kanalname" in der <a href="https://scnx.app/de/glink?page=bot/configuration?file=channel-stats%7Cchannel">Modul-Konfiguration</a> des Kanals aktualisieren.
</details>

<details>
    <summary>Mein Kanal wird nicht aktualisiert</summary>
    <ul>
        <li>Stelle sicher, dass du das festgelegte Aktualisierungs-Intervall abgewartet hast, da der Kanalname nur aktualisiert wird, wenn das Intervall abgelaufen ist.</li>
        <li>Es dauert eventuell länger als das für diesen Kanal festgelegte Aktualisierungs-Intervall aufgrund Limitierungen von Discord. Bitte warte bis zu drei Stunden.</li>
        <li>Stelle sicher, dass du den korrekten Parameter Wort für Wort (Groß- und Kleinschreibung beachten!) eingegeben hast. Ungültige Parameter werden nicht ersetzt.</li>
        <li>Stelle sicher, dass dein Bot die Berechtigungen "Kanal sehen" und "Kanal verwalten" auf den festgelegten Kanal hat.</li>
        <li>Aktualisiere deinen Discord-Client, wenn eine Änderung nicht sichtbar ist.</li>
    </ul>
    Der Name des Channels wird nicht aktualisiert, wenn der neue dem Altem gleicht.
</details>
