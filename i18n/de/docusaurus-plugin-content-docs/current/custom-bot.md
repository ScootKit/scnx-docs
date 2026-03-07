# Eigenen Bot einrichten

Erstellt deinen ganz eigenen Discord-Bot auf SCNX. Die Einrichtung dauert nur wenige Minuten.

<IncludedInPlan data={{PROFESSIONAL: true, UNLIMITED: true, STARTER: true}} additionalDetails={{
STARTER: "24/7 gehosted, muss jede Woche durch das Anschauen von Werbung verlängert werden.",
UNLIMITED: "24/7 gehosted, solange dein Abonnement aktiv ist.",
PROFESSIONAL: "24/7 gehosted, solange dein Abonnement aktiv ist."}} />

## 0. Vorbereitungs-Checkliste 🛫 {#step-0}

Bevor du deinen Eigenen Bot auf SCNX erstellen kannst, stelle sicher, dass

* du [deinen Server zu SCNX hinzugefügt](/docs/setup) hast.
* du der Besitzer des Servers, ein [Trusted-Admin mit der Mitbesitzer-Berechtigung](/docs/scnx/guilds/trusted-admins)
  oder ein Administrator bist, auf dem du diese Funktion aktivieren möchtest.
* du einige Minuten Zeit hast (nach unseren Schätzungen dauert die Einrichtung am Computer etwa zwei Minuten, am Handy
  könnte
  es etwas länger dauern), um dieser Anleitung zur folgen - stoppe nicht mittendrin; dein Fortschritt wird nicht
  gespeichert.

## 1. Erstelle deine Discord-Applikation & deinen -Bot 🤖 {#step-1}

:::caution
Verwende **keine** vorhandene Applikation. Du brauchst eine neue für deinen Eigenen Bot. SCNX unterstützt das
gleichzeitige
Verwenden von Modmail, Eigener Bot und einem weiteren Drittanbieter-Bot (wie txadmin) mit demselben Token / Applikation
nicht - bitte
erstelle eine neue für jeden Bot.
:::

Als erstes, besuche das [Discord-Developer-Portal](https://discord.com/developers/applications). Dort kannst du eine
neue
Applikation erstellen, indem du auf den "New Application"-Button auf der oberen rechten Seite des Entwicklerportals
klickst, wodurch sich ein Popup öffnet.
Gib den Namen der Applikation (kannst du später ändern), lies & stimme
den [Discord-Entwickler-Nutzungsbedingungen](https://discord.com/developers/docs/policies-and-agreements/terms-of-service)
und
der [Discord-Entwickler-Vereinbarung](https://discord.com/developers/docs/policies-and-agreements/developer-policy) (
diese
Bedingungen treffen auch auf deine Verwendung der Discord-API als Teil von SCNX zu) und erstelle deinen Bot durch
Bestätigen mit "Create".

![](@site/docs/assets/setup/custom-bot-1.png)

Öffne als Nächstes die "Bot"-Einstellungen in der Navigationsleiste am linken Bildschirmrand.
Dort kannst du den Avatar und den Benutzernamen anpassen - musst du aber nicht,
weil du das auch [direkt in SCNX tun kannst](/docs/scnx/guilds/bots#change-profile) und SCNX dich dazu direkt nach
Erstellung deines Bots auffordert.

Als letzten Schnitt im Developer Dashboard musst du ein Token generieren und diesen kopieren.
Öffne dazu die "Bot"-Seite deiner Anwendung und klicke auf "Reset token" (immer noch auf der Bot-Seite) und bestätige
deine Anfrage im Popup.
Möglicherweise wirst
du nach einem 2FA-Code für deinen Discord-Account gefragt.

Sobald du damit fertig bist, **kopiere den Token deines Bots**. Du brauchst diesen im nächsten Schritt.

![](@site/docs/assets/setup/custom-bot-3.png)

:::danger
Füge deinen Token **nur** im Dashboard ein. Sende **niemals** einen Token zu einem anderen Nutzer, Trusted Admins oder
einem unserer
Teammitglieder. Geh mit Tokens wie mit einem Passwort um - Nutzer mit Zugriff auf deinen Token können deinen Bot
verwenden, um
schädliche Aktionen auszuführen.
:::

## 2. Erstelle deinen Bot auf SCNX 🚀 {#step-2}

Öffne das [SCNX-Dashboard](https://scnx.app/de/user/guilds/) und wähle den Server aus, auf dem du den Bot erstellen
willst.
Wähle dann "Discord-Bot" in der Sidebar aus.

![](@site/docs/assets/setup/custom-bot-4.png)

Hier findest du ein Video, was dir zeigt, wie du deinen Discord-Bot erstellst. Wenn du dieser Anleitung gefolgt bist
kannst du
das Video sicher mit dem Button "Ich habe einen Bot erstellt" überspringen. Als Nächstes wirst du nach deinem Token
gefragt, den
du in [Schritt 1](#step-1) erhalten hast, anschließend klicke auf "Token überprüfen & Bot erstellen".
SCNX prüft nun deinen Token und richtet dann Hosting für deinen Discord-Bot ein - das kann einige Sekunden dauern.

![](@site/docs/assets/setup/custom-bot-5.png)

Sobald SCNX deinen Bot erstellt hat, musst du nur noch auf den "Bot einladen"-Button drücken. Damit öffnest du Discord's
OAuth2-Grant-Seite
(das ist, wie Nerds den Bereich unten nennen 🤓). SCNX hat bereits den Server für dich ausgewählt. Klick einfach auf "
Weiter" und
"Authorisieren", um den Prozess abzuschließen. Wenn du willst, kannst du die "Administrator"-Berechtigung entfernen,
aber
dadurch wird
es
schwieriger, den Bot ohne Probleme zu verwenden, weil SCNX aktuell noch nicht in der Lage ist (die Nerds arbeiten immer
noch da dran 🤓), die
Berechtigungen einzelner Funktionen anzuzeigen und Fehler, die mit Berechtigungen zusammenhängen, richtig zu behandeln.

![](@site/docs/assets/setup/custom-bot-6.png)

Sobald du deinen Bot zu deinem Server hinzugefügt hast, ist dein Bot bereit, SCNX zu verwenden. Kehre zu der Einrichtung
zurück und editierte das Profil
deines Bots mit dem "Bot-Profil bearbeiten"
Knopf ([das kannst du auch später machen](/docs/scnx/guilds/bots#change-profile)), Module aktivieren oder alle
Funktionen
deines Bots entdecken.

![](@site/docs/assets/setup/custom-bot-7.png)

:::tip Es läuft nicht alles wie geplant?
Wir haben einen [Leitfaden zur Fehlerbehebung für Eigene Bots](/docs/custom-bot/troubleshooting) für dich. Wenn das
nicht
geholfen hat,
wir sind immer da, um zu helfen, besuche
einfach [scnx.app/de/help](https://scnx.app/de/help).
:::

## 3. Feiere deinen neuen Bot 🎉 {#done}

Wenn du alles richtig gemacht hast sollte dein Bot jetzt auf Discord online sein. Klopf dir selbst auf die Schulter. Du
hast einen guten Job gemacht und
bist jetzt bereit, das Universum eines sehr konfigurierbaren Discord-Bots für deine Community zu bereisen - nicht nur
irgendein Discord-Bot,
*dein* Discord-Bot[.](https://cdn.scderox.de/IUopj39jjiOPASDioh/7xpodw.jpg)

Hier sind einige Sachen, die du jetzt tun kannst:

* aktiviere einige der vielen Eigener-Bot-Module.
* nutze den Bot-Login, um Nachrichten mit Self-Roles und mehr zu erstellen.
* erstelle Custom-Commands, um lustige Dinge zu tun.
* verändere das Verhalten deines Bots.
* und vieles mehr, öffne die [Eigener-Bot-Dokumentation](/docs/custom-bot/intro), um alle Möglichkeiten zu sehen.