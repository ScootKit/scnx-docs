---
sidebar_position: 3
description: Folge dieser Anleitung, um eine verknüpfte Rolle zu beanspruchen, die dir zugewiesen wurde.
---

# So beanspruchst du eine verknüpfte Rolle

Sobald dir eine Rolle zugewiesen wurde, ist das Beanspruchen in Discord einfach! Folge dieser Anleitung, um deine verknüpfte Rolle zu beanspruchen.

:::success Teile mich!
Du kannst diese Anleitung mit deinen Mitgliedern teilen, damit sie wissen, wie sie ihre Rollen erhalten!\
Hier ist die URL zum Teilen: [`https://scootk.it/claim-linked-roles`](https://scootk.it/claim-linked-roles).
:::

## Voraussetzungen {#requirements}

Bevor du deine verknüpfte Rolle beanspruchen kannst, muss ein Administrator die
[verknüpfte Rolle auf SCNX erstellt](/docs/linked-roles/role-management#create-linked-scnx-role), [sie auf Discord konfiguriert](/docs/linked-roles/role-management#linked-role-on-discord)
und dir dann die [Rolle zugewiesen](/docs/linked-roles/user-management#add-role) haben. Wenn diese Schritte nicht abgeschlossen sind, kannst du deine Rolle nicht beanspruchen.

Wenn du beim Befolgen dieser Anleitung auf Probleme stößt, wende dich bitte an deinen Serveradministrator und verlinke ihn mit
unserer [Seite zur Fehlerbehebung](/docs/linked-roles/troubleshooting), wo wir detailliert auf die Behebung von Problemen eingehen.

## Beanspruche deine Rolle auf Discord {#claim-role}

:::info Das funktioniert auch auf deinem Handy!
Obwohl diese Anleitung die Schritte auf einem Desktop-Gerät zeigt, kannst du die gleichen Anweisungen auf deinem Handy befolgen, um deine
verknüpfte Rolle zu beanspruchen.
:::

Klicke zunächst auf den Namen des Servers in Discord. Dort kannst du die Option „Verknüpfte Rollen“ auswählen. Ein Fenster mit allen verfügbaren Rollen wird nun angezeigt. Wähle die Rolle aus, die du beanspruchen möchtest. Als Nächstes werden dir die Voraussetzungen angezeigt, die du erfüllen musst, um die Rolle zu beanspruchen. Wenn du die Voraussetzung bereits erfüllst, kannst du auf „Abschließen“ klicken, andernfalls klicke auf das Anforderungsfeld, um deine Rolle zu beanspruchen.

![So öffnest du die Seite zum Beanspruchen verknüpfter Rollen auf Discord](@site/docs/assets/linked-roles/claim/1.png)

Nun öffnet sich die [Autorisierungsseite](/docs/linked-roles/settings#authorization-page) des Servers. Klicke dort auf „Mit Discord anmelden“. Du wirst zu Discord weitergeleitet, um dein Konto zu autorisieren. Stelle sicher, dass du dich mit dem richtigen Konto angemeldet bist, und klicke dann auf „Autorisieren“, um die Anfrage abzuschließen. Danach wird dir eine Erfolgsmeldung angezeigt, die bestätigt, dass die Rollen erfolgreich angewendet wurden. Du kannst dieses Fenster nun schließen.

![So autorisierst du dein Konto](@site/docs/assets/linked-roles/claim/2.png)

Sobald dies erledigt ist, gehe zurück zu Discord. Dort wirst du aufgefordert, die Verbindung zu bestätigen, indem du auf „Fertig“ klickst. Danach kannst du die verknüpfte Rolle endgültig beanspruchen, indem du auf „Abschließen“ klickst. Discord wird dir nun die verknüpfte Rolle zuweisen, die auch in deinem Mitgliederprofil angezeigt wird.

![Letzter Schritt, um die Rolle zu beanspruchen](@site/docs/assets/linked-roles/claim/3.png)

Wenn du auch andere Rollen beanspruchen möchtest, kannst du dies einfach tun, indem du die gleichen Anweisungen befolgst – du musst dich jedoch nicht erneut authentifizieren, sondern kannst die Rolle einfach in Discord beanspruchen.

## Probleme beim Beanspruchen von Rollen? {#issues}

Wenn du Probleme beim Beanspruchen einer Rolle hast, überprüfe bitte
unsere [Anleitung zur Fehlerbehebung](/docs/linked-roles/troubleshooting). Insbesondere die folgenden Probleme könnten auftreten:

* [Fehlermeldung: „Ungültige OAuth2 redirect_url“](/docs/linked-roles/troubleshooting#oauth2-redirect-url).
* [Fehlermeldung: „Dir wurden keine Rollen zugewiesen“](/docs/linked-roles/troubleshooting#roles-missing)
* [Fehlermeldung: „Sieht so aus, als wäre die Konfiguration durch den Serverbesitzer falsch.“](/docs/linked-roles/troubleshooting#generic-api-error).

Wenn du auf andere Probleme stößt oder Fragen hast, lies unsere [Anleitung zur Fehlerbehebung](/docs/linked-roles/troubleshooting) oder kontaktiere uns
unter [scnx.app/help](https://scnx.app/help) – wir helfen dir gerne weiter!

## Eine beanspruchte Rolle entfernen {#remove-claimed-role}

Genervt von deiner verknüpften Rolle? Du kannst entweder einen Administrator bitten, die
[verknüpfte Rolle zu entfernen](/docs/linked-roles/user-management#remove-role) oder du kannst die Rolle selbst entfernen.

Öffne dazu Discord und öffne dein Profil auf deinem Server. Bewege dort den Mauszeiger über die verknüpfte Rolle, die du entfernen möchtest. Du
siehst ein „X“ auf der linken Seite. Klicke darauf, um deine verknüpfte Rolle zu entfernen. Wenn du es dir jemals anders überlegst, kannst du
deine [verknüpfte Rolle jederzeit erneut beanspruchen](#claim-role), es sei denn, ein Administrator entfernt sie von dir.

![So entfernst du eine beanspruchte Rolle](@site/docs/assets/linked-roles/claim/remove-role.png)