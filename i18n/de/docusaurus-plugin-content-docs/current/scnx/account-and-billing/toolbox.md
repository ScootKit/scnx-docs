---
sidebar_position: 1
---

# Werkzeuge

Die SCNX Werkzeuge sind eine Ansammlung von hilfreichen Werkzeugen, um dein Leben als professioneller Discord-Nutzer
einfacher zu machen.

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: true, STARTER: true}} />

## Discord-Nutzer-Nachschlagen {#user-lookup}

Schlage jeden Discord-Nutzer oder -Bot nur mit ihrer Discord-ID nach! Füge die ID einfach oben ein, um das Banner, das
Profilbild, die Abzeichen und mehr des Nutzers zu sehen. Um eine Nutzer-ID zu kopieren, aktiviere zunächst
den [Discord-Entwicklermodus](https://faq.scnx.app/discord-entwicklermodus-aktivieren/), rechtsklicke auf den Nutzer
und klicke auf "Nutzer-ID kopieren".

Füge als Nächstes diese ID in das [Nutzer-Nachschlagen-Werkzeug](https://scnx.app/de/user/tools?page=user-lookup) ein.
Klicke dann auf "Nutzer nachschlagen", um deine Anfrage durchzuführen. Du kannst danach die Daten des Nutzers sehen und (falls
vorhanden) das Banner- oder Profilbild des Nutzers herunterladen. Hier ist ein Beispiel, wie das aussehen wird:

![](@site/docs/assets/scnx/user/toolbox/result.png)

## Zeitstempel-Ersteller {#timestamp-generator}

Nutze den Zeitstempel-Generator, um Daten und Zeitpunkte in Nachrichten auf Discord einzufügen. Der Zeitpunkt wird immer
in der Zeitzone des Endnutzers angezeigt - keine Verwirrung mit den ganzen Zeitzonen mehr. Wähle einfach einen Zeitpunkt
oben, wähle das passende Format, kopiere das Ergebnis und füge es in
das [Zeitstempel-Generator-Werkzeug](https://scnx.app/de/user/tools?page=timestamp-generator) ein. Die Zeit wird dann
angezeigt, sobald die Nachricht abgesendet wurde.

Hier sind alle verfügbaren Formate:

| Format                       | Beispiel                        |
|------------------------------|---------------------------------|
| Kurze Zeit                   | 09:52                           |
| Lange Zeit                   | 09:52:29                        |
| Kurzes Datum                 | 30.08.2023                      |
| Langes Datum                 | 30. August 2023                 |
| Kurzes Datum/Zeit (Standard) | 30. August 2023 09:52           |
| Langes Datum/Zeit            | Mittwoch, 30. August 2023 09:52 |
| Relative Zeit                | vor 3 Minuten                   |

## SCNX Level-XP-Rechner {#level-generator}

Verwende den Level-XP-Rechner, um zu berechnen, wie viel XP ein Nutzer braucht, um ein bestimmtes Level beim eigenen Bot im Levelsystem
von SCNX zu erreichen.
Gib dafür einfach das gewünschte Level in das [Level-XP-Rechner-Werkzeug](https://scnx.app/de/user/tools?page=level-calculator) ein,
um zu sehen, wie viel XP für das Level notwendig sind.

### Hilfreiche Tipps & Tricks für dein Level-System

* Jeder Nutzer startet bei Level 1.
* Zwar kannst du nicht das XP anpassen, was man für ein bestimmtes Level benötigt, aber du kannst anpassen, wie viel XP
  Nutzer pro Nachricht verdienen - das erlaubt es dir effektiv auch, Level-Ups zu kontrollieren.
* Diese Berechnung gibt dir keine Infos darüber, wie viele Nachrichten man braucht, um ein bestimmtes Level zu
  erreichen.
* Mit folgender Formel kannst du das notwendige XP
  berechnen: `XPNeededToLevelUp = (LevelToCalculate - 1) * 750 + ((LevelToCalculate - 1) * 500) [XP]`.
* Wir empfehlen dir, das XP deines Servers regelmäßig zurückzusetzen, damit auch neue Mitglieder hohe Platzierungen
  erreichen können - gib aber älteren, aktiveren Nutzern etwas Kleines im Gegenzug :heart:

## SCNX GLink-Ersteller {#glink-generator}

So genannte "GLink"s werden oft verwendet, um Nutzer auf SCNX zu einer bestimmten Ressource im Dashboard zu leiten.
Um einen GLink zu erstellen, öffne zunächst eine Seite auf scnx.app mit deinem Server. Kopiere dann die
vollständige URL der Seite und füge sie in
das [GLink-Ersteller-Werkzeug](https://scnx.app/de/user/tools?page=glink-generator) ein. Das Ergebnis kannst du dann mit
jedem teilen - sie können dann dieselbe Seite, die du mit deinem Server offen hattest, mit ihrem Server öffnen.
