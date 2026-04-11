---
description: Das Einrichten von Verknüpften Rollen kann ein paar Minuten dauern, aber mit dieser Anleitung kannst du ganz einfach loslegen.
---

# Verknüpfte Rollen auf deinem Discord einrichten

Starte mit Verknüpften Rollen auf deinem Discord, um das Benutzererlebnis zu verbessern, indem wichtige Rollen von Benutzern
neben ihren Namen angezeigt werden.

:::success Was ist das?
Unsicher, was Verknüpfte Rollen sind? Verknüpfte Rollen ermöglichen es dir, die Rolle eines Benutzers neben seinem Benutzernamen anzuzeigen, so wie hier:

![SCNX Linked Roles Nutzung auf einem Discord-Server gezeigt, die Position des Benutzers wird neben seinem Benutzernamen angezeigt](https://scnx.app/img/linked-roles-example.png)

Wenn du mehr über Verknüpfte Rollen erfahren möchtest, kannst du dies in unserem Abschnitt [Über Verknüpfte Rollen](/docs/linked-roles/intro) tun.

:::

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: false}} />

## Video (Deutsch) {#video}

Unser Entwickler Simon führt dich gerne durch diesen Einrichtungsprozess in
unserem [Tutorial-Video auf YouTube](https://www.youtube.com/watch?v=HR3yvTVpkOI).

<Video url="https://www.youtube.com/watch?v=HR3yvTVpkOI" />

## 0. Pre-Flight-Checkliste 🛫 {#step-0}

Bevor du Verknüpfte Rollen auf deinem Server aktivieren kannst, stelle bitte sicher, dass

- du [deinen Server zu SCNX hinzugefügt](/docs/setup) hast.
- dein Server den bezahlten [Unlimited](/docs/scnx/guilds/plans) (<PlanPrice plan="UNLIMITED" type="MONTHLY"/>)
  oder [Professional](/docs/scnx/guilds/plans) (<PlanPrice plan="PROFESSIONAL" type="MONTHLY"/>) Plan hat, oder erwäge die Nutzung einer
  kostenlosen Testversion, falls
  für dich verfügbar.
- du der Besitzer des Servers, ein [Trusted-Admin mit der Mitbesitzer-Berechtigung](/docs/scnx/guilds/trusted-admins) oder ein Administrator bist, auf dem du diese Funktion aktivieren möchtest.
  ([warum?](/docs/scnx/guilds/trusted-admins#troubleshooting)) - wenn du nicht der Besitzer bist, bitte ihn, diese Funktion für dich zu aktivieren und dir Zugriff als [Trusted Admin](/docs/scnx/guilds/trusted-admins) zu geben.
- du 5-10 Minuten Zeit hast (unsere Schätzung ist, dass dies etwa sechs Minuten am Computer dauert, auf dem Handy
  kann es
  etwas länger dauern), um diese Anleitung abzuschließen - höre nicht mittendrin auf; dein Fortschritt wird nicht gespeichert.

## 1. Zeit loszulegen {#step-1}

Um mit der Einrichtung zu beginnen, öffne bitte die [Verknüpfte Rollen-Seite](https://scnx.app/de/glink?page=linked-roles/enable)
deines Servers im SCNX Dashboard. Klicke dort auf "Einrichtung starten", um loszulegen. Dir wird möglicherweise ein Video oder ein Link zu
dieser Anleitung angezeigt, aber du kannst dort auch auf "Weiter" klicken, da du ja schon hier bist :wink:

## 2. Anmeldedaten eingeben {#step-2}

Du musst eine neue App in deinem Discord Developer
Dashboard erstellen.

Besuche dazu das [Discord Developer Portal](https://discord.com/developers/applications). Erstelle dort eine neue
App, indem du oben rechts in deinem Developer Portal auf "New Application" klickst. Ein Formular öffnet sich. Gib
den Namen der Anwendung ein (du kannst diesen später ändern), lies und akzeptiere
die [Discord Developer Terms of Service](https://discord.com/developers/docs/policies-and-agreements/terms-of-service)
und die [Discord Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy) (diese
Richtlinien gelten auch für deine Nutzung der Discord-API als Teil von SCNX) und erstelle deinen Bot, indem du mit "Create" bestätigst.

![Dieser Screenshot zeigt, wie man eine neue Anwendung im Discord Developer Portal erstellt](@site/docs/assets/setup/custom-bot-1.png)

Öffne als Nächstes die "Bot"-Einstellungen in der Navigationsleiste auf der linken Seite.
Dort kannst du den Avatar und den Benutzernamen konfigurieren.

Der letzte Schritt im Developer Dashboard besteht darin, einen Token zu generieren und zu kopieren. Öffne dazu die "Bot"-Seite deiner
App
und klicke auf "Reset token" (immer noch auf der Bot-Seite) und bestätige deine Anfrage im Formular. Du wirst möglicherweise
aufgefordert, einen 2FA-Code für dein Discord-Konto einzugeben.

Sobald das erledigt ist, **kopiere bitte den Token deines Bots und gib ihn bei SCNX ein**.

![Dieser Screenshot zeigt, wie man das Bot Secret generiert und kopiert](@site/docs/assets/setup/custom-bot-3.png)

Sobald das erledigt ist, überprüft SCNX deinen Token und synchronisiert Daten mit Discord. Danach kannst du
mit [dem nächsten Schritt](#step-3) fortfahren.

## 3. Redirect-URL speichern {#step-3}

Sobald deine Anmeldedaten überprüft wurden und SCNX einige Daten für Verknüpfte Rollen mit Discord synchronisiert hat, musst du die
Oauth2-Seite deines Discord Developer Portals öffnen. Der einfachste Weg dorthin ist, auf den Link zu klicken, der auf SCNX sichtbar ist.
Alternativ kannst du im Entwickler-Dashboard auf den Tab "Oauth2" klicken.

![Dieser Screenshot zeigt, wie der Benutzer auf "Open Oauth2 panel" klicken sollte](@site/docs/assets/linked-roles/setup/click-on-oauth2-page.png)

Sobald du die Oauth2-Seite geöffnet hast, musst du die Redirect-URL aus deinem SCNX Dashboard kopieren und einfügen. Das ist
einfach: Klicke einfach auf die in SCNX angezeigte URL (dadurch wird die URL in deine Zwischenablage kopiert). Falls du dich wunderst, die
Redirect-URL sollte etwa so aussehen:
`https://linked-roles.scnx.app/api/b4e5e89a-1c92-11f0-b688-03c2706e348f/callback` (der mittlere Teil kann je nach
deinem Server variieren).

![Dieser Screenshot zeigt, welchen Wert der Benutzer aus dem Dashboard kopieren soll](@site/docs/assets/linked-roles/setup/copy-redirect-url.png)

Gehe zurück zur "Oauth2"-Seite
in deinem Discord Developer Portal. Scrolle dort zu "Redirects", klicke auf "Add Redirect" und füge die gerade kopierte URL
in das Textfeld ein. Denke daran, deine Änderungen zu speichern!

![Dieser Screenshot zeigt, wo die kopierte Redirect-URL eingefügt werden soll](@site/docs/assets/linked-roles/setup/enter-redirect-url.webp)

## 4. Client Secret eingeben {#step-4}

:::warning Warnung zur Vermeidung von Verwechslungen
Es gibt einen großen Unterschied zwischen deinem **Bot-Token** und dem **Client Secret**. Bitte überprüfe genau, welchen Wert du
eingibst, um spätere Probleme zu vermeiden. Für diesen Schritt benötigst du das **Client Secret**, nicht den Bot Token.
:::

Nachdem du die Redirect-URL eingegeben und gespeichert hast, bleibe bitte auf der "Oauth2"-Seite. Generiere unter "Client Information"
das Client Secret, indem du unter dem Feld "Client Secret" auf "Reset Secret" klickst. Discord bittet dich möglicherweise, dein
Konto durch Eingabe eines 2FA-Codes zu verifizieren. Sobald dies erledigt ist, kannst du das Client Secret kopieren. Gib den kopierten Wert in dein
SCNX Dashboard ein und klicke auf "Verknüpfte Rollen erstellen", um die Einrichtung abzuschließen.

![Dieser Screenshot zeigt, wie man das Client Secret kopiert](@site/docs/assets/linked-roles/setup/copy-client-secret.png)

## 5. Zeit zum Feiern 🎉 {#step-5}

:::info Keine Sorge
Dein neuer Verknüpfte Rollen Bot bleibt nicht online, es sei denn, du verwendest ein anderes SCNX-Produkt mit denselben Anmeldedaten.
:::

Schließe die Einrichtung ab, indem du den Verknüpfte Rollen Bot auf deinen Server einlädst. Klicke dazu im Dashboard auf "Verknüpfte-Rollen-Bot einladen".
Sobald dies erledigt ist, kannst du mit der Erstellung deiner ersten Verknüpften Rolle fortfahren. Um mehr darüber zu erfahren, fahre in
unserer [Dokumentation zur Rollenverwaltung](/docs/linked-roles/role-management#create-linked-scnx-role) fort, wo wir erklären, wie du
deine Verknüpften Rollen auf SCNX und auf Discord erstellst. Du kannst auch
zur [Übersichtsseite der Verknüpften Rollen](/docs/linked-roles/overview) springen, wenn du nach etwas anderem suchst, um fortzufahren.

![Dieser Screenshot zeigt die Erfolgsmeldung nach der Einrichtung](@site/docs/assets/linked-roles/setup/success-party-time.png)
