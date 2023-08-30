---
sidebar_position: 1
---

# Werkzeuge

Die SCNX Werkzeuge sind eine Ansammlung von hilfreichen Werkzeugen, um dein Leben als professioneller Discord-Nutzer
einfacher zu machen.

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: true, STARTER: true}} />

## Discord-Nutzer-Nachschlagen {#user-lookup}

Schlage jeden Discord-Nutzer oder Bot nur mit ihrer Discord-ID nach! Füge die ID einfach oben ein, um das Banner, das
Profilbild, die Abzeichen und mehr des Nutzers zu sehen. Um eine Nutzer-ID zu kopieren, aktiviere zunächst
den  [discord developer mode](https://faq.scnx.app/discord-entwicklermodus-aktivieren/), , rechts-klicke auf den Nutzer
und klicke auf "Nutzer ID kopieren".

Füge als Nächstes diese ID in das [Nutzer-Nachschlagen Werkzeug](https://scnx.app/user/tools?page=user-lookup). Klicke
dann auf "Nutzer nachschlagen", um deine Anfrage durchzuführen.Du kannst danach die Daten des Nutzers sehen und (falls
vorhanden) das Banner- oder Profilbild des Nutzers herunterladen. Hier ist ein Beispiel, wie das aussehen wird:

![](@site/docs/assets/scnx/user/toolbox/result.png)

## Timestamp-Generator {#timestamp-generator}

Use the Timestamp-Generator to insert and times in messages on Discord. The time will be displayed in the local timezone
of the user - no more confusion with all these timezones. Simply select a time & date in
the [Timestamp-Generator tool](https://scnx.app/user/tools?page=timestamp-generator), select a format, copy the
result and paste in discord. Your time will be displayed in Discord once you send your message.

Here are all availible formats:

| Format                    | Example                             |
|---------------------------|-------------------------------------|
| Short time                | 09:52 PM                            |
| Long time                 | 9:52:29 PM                          |
| Short date                | 8/30/2023                           |
| Long date                 | August 30, 2023                     |
| Short Date/Time (default) | August 30, 2023 09:52 PM            |
| Long Date/Time            | Wednesday, August 30, 2023 09:52 PM |
| Relative time             | 3 minutes ago                       |

## SCNX Level-XP-Calculator {#level-generator}

Use the Level-XP-Calculator to calculate how much XP a user needs to reach this level in the Leveling-System of the SCNX
CustomBot. Just enter the level in
the [Level-XP-Calculator tool](https://scnx.app/user/tools?page=level-calculator), to see how much XP is required for
users to reach that level.

### Helpful tips & tricks for your Level-System

* Every user starts at Level 1.
* While you can not adjust the XP needed to get to a new level, you can change how much XP users are going to earn per
  messages, giving you essentially the power to control Level-Ups as well.
* This calculation does not give you any information about how many messages it takes to get to this level.
* The formular to calculate the required XP is the
  following: `XPNeededToLevelUp = (LevelToCalculate - 1) * 750 + ((LevelToCalculate - 1) * 500) [XP]`
* We suggest resetting XP of your server periodically, so new members can easier archive high rankings - give older,
  active members some sort of compensation in return :heart:

## SCNX GLink-Generator {#glink-generator}

So-called "GLink"s URLs are often used when referring users of SCNX to specific resources in the dashboard of their
server. To create a GLink, first visit any site of your server on scnx.app. Next, copy the full URL and
paste [GLink-Generator tool](https://scnx.app/user/tools?page=glink-generator). Copy the result and share it with
anyone - they will be able to open the same page you accessed on
their server.