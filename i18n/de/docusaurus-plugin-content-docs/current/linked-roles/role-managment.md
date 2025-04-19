---
sidebar_position: 2
description: Erfahre, wie du verknüpfte Rollen erstellen, löschen und konfigurieren kannst.
---

# Verknüpfte Rollen verwalten

Im Gegensatz zu traditionellen Rollen auf Discord erfordern verknüpfte Rollen mehr Schritte, um korrekt eingerichtet und konfiguriert zu werden.

## Verknüpfte Rolle auf SCNX erstellen {#create-linked-scnx-role}

:::info Discord-Limit
Discord erzwingt ein striktes Limit von fünf verknüpften Rollen pro Bot. Das bedeutet, dass du nicht mehr als fünf verknüpfte
Rollen auf SCNX haben kannst.
:::

Öffne die [Rollenseite deines Dashboards für verknüpfte Rollen](https://scnx.app/de/glink?page=linked-roles/roles) und klicke auf
„Neue verknüpfte Rolle hinzufügen“. Wenn dies deine erste verknüpfte Rolle ist, leitet dich die Seite automatisch zum
Erstellungsprozess weiter, ohne dass du etwas anklicken musst.

Gib dort einen Namen für deine Rolle ein und wähle eine Beschreibung. Klicke anschließend auf „Verknüpfte Rolle erstellen“. Nach dem Klick
fordert dich SCNX auf, die [neue verknüpfte Rolle auf Discord zu konfigurieren](#linked-role-on-discord).

![Dieser Screenshot zeigt das Modal zur Rollenerstellung](@site/docs/assets/linked-roles/role-managment/add-new-role.png)

## Verknüpfte Rolle auf Discord einrichten {#linked-role-on-discord}

Um eine verknüpfte Rolle auf Discord einzurichten, befolge bitte diese Schritte:

1. Erstelle eine neue Rolle auf deinem Discord-Server. Du kannst ihre Rolleneinstellungen, das Rollensymbol, die Berechtigungen und die Farbe konfigurieren. Weise diese Rolle keinem Benutzer zu.
2. Gehe in deinen Rolleneinstellungen zum Tab „Verknüpfungen“.
3. Klicke dort auf „Anforderung hinzufügen“.
4. Wähle deinen Bot im Abschnitt „Apps“ aus.
5. Wähle die gewünschte verknüpfte Rolle aus. Die Rolle, die du auswählst, muss
   [Benutzern auf SCNX zugewiesen werden](./user-managment#add-role), damit diese die neu erstellte Discord-Rolle beanspruchen können.

Sobald du diese Schritte abgeschlossen hast, können deine Mitglieder die Rolle [beanspruchen](./claim-roles.md), wenn sie
die [verknüpfte Rolle zugewiesen bekommen haben](./user-managment#add-role).
Um die Rolle tatsächlich neben dem Benutzernamen eines Benutzers anzuzeigen, musst du
die [Berechtigungen korrekt einrichten](#display-in-chat).

![Dieser Screenshot zeigt, wie die Rollenanforderung auf Discord hinzugefügt wird](@site/docs/assets/linked-roles/role-managment/role-discord-settings.png)

## Verknüpfte Rolle im Chat anzeigen {#display-in-chat}

Standardmäßig werden verknüpfte Rollen nicht neben Benutzernamen im Chat angezeigt. Um die verknüpfte Rolle anzuzeigen, musst du
eine Kanalüberschreibung auf **jedem Kanal** erstellen. Dies kannst du tun, indem du in die Kanaleinstellungen eines beliebigen Kanals gehst,
zu den Berechtigungen navigierst, deine verknüpfte Rolle auswählst (oder hinzufügst) und ihr die Berechtigung „Kanal anzeigen“ gibst. Diese Überschreibung
ist für jeden Kanal erforderlich, in dem die Rolle angezeigt werden soll.

![So richtest du Berechtigungen für eine verknüpfte Rolle ein](@site/docs/assets/linked-roles/role-managment/display-role-in-chat.png)

## Öffentliche Rollen {#public-roles}

:::info
Nachdem du eine Rolle öffentlich gemacht hast, kannst du diese Entscheidung nicht rückgängig machen. Wenn du eine öffentliche Rolle wieder privat machen möchtest, musst du
die [Rolle löschen](#delete-role).
:::

Standardmäßig müssen Rollen manuell [Mitgliedern zugewiesen werden](./user-managment). Das Aktivieren der Option „Öffentliche Rolle“ ermöglicht es
jedem Benutzer auf deinem Discord, die Rolle zu beanspruchen, und entfernt deine Möglichkeit, die Rolle manuell zuzuweisen oder zu entfernen. Dies
kann hilfreich sein, wenn du möchtest, dass eine „Mitglied“-Rolle neben Benutzern im Chat angezeigt wird.

Nachdem du eine Rolle erstellt hast, kannst du sie
in deinem [Dashboard für verknüpfte Rollen](https://scnx.app/glink?page=linked-roles/roles) verwalten, wo du die Option „Öffentliche Rolle“
für deine Rolle aktivieren kannst. Sobald du die Option „Öffentliche Rolle“ aktiviert hast, können alle Benutzer die Rolle 
auf deinem Discord ohne weitere Überprüfungen [beanspruchen](./claim-roles). Obwohl du Benutzer im Dashboard manuell [entfernen](./user-managment#delete-user) kannst,
werden sie die Rolle erneut beanspruchen können, da die Rolle öffentlich ist.

![Dieser Screenshot zeigt, wo die Option „Öffentliche Rolle“ zu finden ist](@site/docs/assets/linked-roles/role-managment/public-role.png)

## Verknüpfte Rollen löschen {#delete-role}

Das Löschen einer verknüpften Rolle entfernt die verknüpfte Rolle auch von allen Benutzern auf deinem Discord, löscht aber nicht die von dir erstellte Discord-Rolle. Diese Aktion kann nicht rückgängig gemacht werden.

Um eine Rolle zu löschen, öffne dein [Dashboard für verknüpfte Rollen](https://scnx.app/glink?page=linked-roles/roles), wähle deine Rolle aus
und klicke auf „Rolle löschen“. Die Rolle wird nun gelöscht.
