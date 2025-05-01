---
sidebar_position: 6
description: Entdecke Konfigurationsmöglichkeiten für deine Verknüpften Rollen, wie z.B. Designs für die Autorisierungsseite.
---

# Verknüpfte Rollen Konfiguration

Bei SCNX legen wir immer Wert darauf, so viele Konfigurationsmöglichkeiten wie möglich anzubieten. Natürlich kannst du die
[Autorisierungsseite](#autorisierungsseite) und andere Konfigurationen für Verknüpfte Rollen anpassen.

## Autorisierungsseite {#autorisierungsseite}

Die Autorisierungsseite ist die Seite, die Nutzer öffnen müssen, wenn sie [ihre Rolle beanspruchen](/docs/linked-roles/claim-roles), bevor sie
zu Discord weitergeleitet werden. Die Seite enthält eine kurze Erklärung, deinen Servernamen und dein Serverbild.

Du kannst die folgenden Attribute deiner Autorisierungsseite konfigurieren:

* Der angezeigte Servername und das Bild auf deiner Autorisierungsseite.
* Passe das Design deiner Autorisierungsseite an. Du kannst aus über 30 verschiedenen Designs für die Autorisierungsseite wählen - du kannst sie auf deiner
  [Konfigurationsseite für Verknüpfte Rollen](https://scnx.app/de/glink?page=linked-roles/configuration) in der Live-Vorschau auswählen und durchstöbern.
* Aktiviere oder deaktiviere eine kurze Werbung für SCNX auf deiner Autorisierungsseite. Wenn sie aktiviert ist, enthält die Seite eine
  kurze Nachricht über die Funktionen der SCNX-Plattform. Server mit
  einem [kostenpflichtigen Plan, der die Off-Brand-Funktionalität beinhaltet](/docs/scnx/guilds/plans),
  haben diese Funktion standardmäßig deaktiviert. Server ohne einen solchen Plan können die Nachricht nicht entfernen.

Um diese Felder anzupassen und eine Live-Vorschau der Designs und Änderungen zu sehen,
öffne [die Konfigurationsseite für Verknüpfte Rollen](https://scnx.app/de/glink?page=linked-roles/configuration) deines Dashboards und
passe die Felder dort an.

![Designs der Autorisierungsseite](@site/docs/assets/linked-roles/authentification-page.jpg)

## Anmeldedaten {#authentification-details}

Du kannst deine Anmeldedaten, die von deinen Verknüpften Rollen zur Kommunikation mit Discord verwendet werden, auf
deiner [Konfigurationsseite für Verknüpfte Rollen](https://scnx.app/de/glink?page=linked-roles/configuration) einsehen. Diese Werte sind hilfreich,
wenn du einen Schritt während der [Einrichtung](/docs/linked-roles) verpasst hast. Aus Sicherheitsgründen kannst du eingegebene Tokens oder Passwörter nicht sehen.

Du kannst die Details jederzeit [zurücksetzen](#reset-auth-details), wenn du deinen Token oder dein OAuth2-Secret ändern möchtest.

### Details zurücksetzen {#reset-auth-details}

Um die Anmeldedaten deiner Verknüpften Rollen zurückzusetzen, besuche
deine [Konfigurationsseite für Verknüpfte Rollen](https://scnx.app/de/glink?page=linked-roles/configuration). Klicke dort auf "Anmeldedaten zurücksetzen", um die Anmeldedaten zurückzusetzen. Das Zurücksetzen der Anmeldedaten löscht zwar nicht deine Verknüpften Rollen und Rollenzuweisungen, du musst die [Einrichtungsschritte](/docs/linked-roles) aber erneut durchführen. Wenn du nach dem Zurücksetzen einen anderen Bot verwendest, musst du den alten Bot von deinem Server entfernen und deine Mitglieder anweisen, [ihre Rollen erneut zu beanspruchen](/docs/linked-roles/claim-roles).

![Screenshot, der zeigt, wo sich die Schaltfläche "Anmeldedaten zurücksetzen" befindet](@site/docs/assets/linked-roles/reset.png)

### Verknüpfte Rollen deaktivieren {#disable-linked-roles}

:::warning Gefahr!
Dies kann nicht rückgängig gemacht werden.
:::

Unzufrieden mit Verknüpften Rollen? Du kannst sie jederzeit deaktivieren und alle zugehörigen Daten löschen.

Um alle Daten der Verknüpften Rollen zu löschen, öffne
die [Konfigurationsseite für Verknüpfte Rollen](https://scnx.app/de/glink?page=linked-roles/configuration) und klicke auf "Verknüpfte Rollen deaktivieren". Dadurch werden alle Daten von SCNX bezüglich deiner Verknüpften Rollen gelöscht. Beanspruchte Rollen von Discord werden möglicherweise nicht entfernt (da diese Daten nicht bei SCNX gespeichert werden), dies musst du manuell tun.
