---
sidebar_position: 4
description: Verknüpfte Rollen müssen deinen Nutzern manuell zugewiesen werden.
---

# Verknüpfte Rollen von Mitgliedern verwalten

Im Gegensatz zu nativen Rollen auf Discord müssen verknüpfte Rollen manuell über das SCNX-Dashboard zugewiesen werden.
Zusätzlich müssen Rollen von den [Nutzern beansprucht werden](./claim-roles), bevor die Rolle dem Nutzer gegeben wird.

:::success Gib deinen Admins Zugriff!
Deine Admins können auch die verknüpften Rollen von Nutzern verwalten! Füge sie als [Trusted Admins](./../scnx/guilds/trusted-admins) hinzu und
gib ihnen diese Anleitung, damit sie Nutzer bearbeiten können!
:::

## Verknüpfte Rolle hinzufügen {#add-role}

Bevor du einem Nutzer eine Rolle zuweist, stelle sicher, dass du die [verknüpfte Rolle erstellt hast](./role-management#create-linked-scnx-role).
Du benötigst außerdem die Nutzer-ID des Nutzers, den du hinzufügen möchtest. Um diese Nutzer-ID zu erhalten,
folge [dieser Anleitung von Discord](https://support.discord.com/hc/de/articles/206346498-Wo-kann-ich-meine-Benutzer-Server-Nachrichten-ID-finden).

Sobald du die Nutzer-ID kopiert hast, öffne die [Nutzerseite für verknüpfte Rollen](https://scnx.app/de/glink?page=linked-roles/users).
Klicke auf
„Nutzer hinzufügen“, um einen weiteren Nutzer hinzuzufügen.

Gib als Nächstes die zuvor kopierte Nutzer-ID ein, gib optional eine Tagline ein und wähle aus, welche Rollen der Nutzer erhalten soll.
Bitte beachte, dass [öffentliche Rollen](./role-management#public-roles) nicht zugewiesen oder entfernt werden können, da diese Rollen von
jedem Nutzer beansprucht werden können.

![Screenshot der Nutzeroberfläche für die Nutzerverwaltung](@site/docs/assets/linked-roles/add-role.png)

Sobald du die Änderungen gespeichert hast, kann der Nutzer die [Rolle beanspruchen](./claim-roles). Du kannst dem Nutzer einen Link
zu unserer Anleitung senden, damit er weiß, was zu tun ist:
[`https://scootk.it/claim-linked-roles`](https://scootk.it/claim-linked-roles).

## Nutzerrollen verwalten {#remove-role}

:::info Öffentliche Rollen können nicht entfernt werden
Alle [öffentlichen Rollen](./role-management#public-roles) können nicht von Nutzern entfernt werden, da sie von jedem Nutzer beansprucht werden können.
:::

Um die verknüpften Rollen eines Nutzers zu verwalten, öffne die [Nutzerseite für verknüpfte Rollen](https://scnx.app/de/glink?page=linked-roles/users)
deines Dashboards. Dort kannst du nach dem Nutzer suchen, den du bearbeiten möchtest, indem du seinen Nutzernamen oder seine ID eingibst. Alternativ kannst du
nach Rollen filtern, um den gewünschten Nutzer zu finden.

Sobald du den Nutzer gefunden hast, klicke auf seinen Dashboard-Eintrag, um die Nutzeroberfläche für die Nutzerverwaltung anzuzeigen. Dort kannst du
seine Rollen und seine Tagline bearbeiten.

Während entfernte Rollen innerhalb weniger Minuten vom Nutzer entfernt werden, müssen neue Rollen
[manuell beansprucht werden](./claim-roles). Du kannst dem Nutzer einen Link zu unserer Anleitung senden, damit er weiß, was zu tun ist:
[`https://scootk.it/claim-linked-roles`](https://scootk.it/claim-linked-roles).

## Nutzer verknüpfter Rollen entfernen {#delete-user}

Um einen Nutzer verknüpfter Rollen zu entfernen, öffne die [Nutzerseite für verknüpfte Rollen](https://scnx.app/de/glink?page=-roles/users)
deines Dashboards. Dort kannst du nach dem Nutzer suchen, den du entfernen möchtest, indem du seinen Nutzernamen oder seine ID eingibst. Alternativ kannst du
nach Rollen filtern, um den gewünschten Nutzer zu finden.

Sobald du den Nutzer gefunden hast, klicke auf seinen Dashboard-Eintrag, um die Nutzeroberfläche für die Nutzerverwaltung anzuzeigen. Dort kannst du
auf „Nutzer entfernen“ klicken, um die Nutzerdaten zu löschen. Das Entfernen des Nutzers führt dazu, dass alle seine Rollen entfernt werden und
er sich erneut autorisieren muss, wenn er plant, Rollen erneut zu beanspruchen. Bitte beachte, dass dies Nutzer nicht daran hindert,
[öffentliche Rollen](./role-management#public-roles) jederzeit erneut zu beanspruchen.