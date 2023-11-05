# Eigenen Bot einrichten

Erstellt deinen ganz eigenen Discord-Bot auf SCNX. Die Einrichtung dauert nur wenige Minuten.

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: true, STARTER: true}} additionalDetails={{
STARTER: "24/7 gehosted, muss alle zwei Wochen durch das Anschauen von Werbung verlängert werden.",
ACTIVE_GUILD: "24/7 gehosted, solange dein Abonnement aktiv ist.",
PRO: "24/7 gehosted, solange dein Abonnement aktiv ist."}} />

## 0. Vorbereitungs-Checkliste 🛫 {#step-0}

Bevor du deinen Eigenen Bot auf SCNX erstellen kannst, stelle sicher, dass

* du [deinen Server zu SCNX hinzugefügt](./setup) hast.
* du der Besitzer des Servers bist, auf dem du diese Funktion aktivieren
  willst ([warum?](./scnx/guilds/trusted-admins#troubleshooting)) - wenn du nicht der Besitzer bist, bitte diesen, die
  Funktion für dich zu aktivieren und dich als [Trusted Admin](./scnx/guilds/trusted-admins) hinzuzufügen.
* du einige Minuten Zeit hast (nach unseren Schätzungen dauert die Einrichtung am Computer etwa zwei Minuten, am Handy könnte
  es etwas länger dauern), um dieser Anleitung zur folgen - stoppe nicht mittendrin; dein Fortschritt wird nicht gespeichert.

## 1. Erstelle deine Discord-Applikation & deinen -Bot 🤖 {#step-1}

:::caution
Verwende **keine** vorhandene Applikation. Du brauchst eine neue für deinen Eigenen Bot. SCNX unterstützt das gleichzeitige
Verwenden von Modmail, Eigener Bot und einem weiteren Drittanbieter-Bot (wie txadmin) mit demselben Token / Applikation nicht - bitte
erstelle eine neue für jeden Bot.
:::

Als erstes, besuche das [Discord-Developer-Portal](https://discord.com/developers/applications). Dort kannst du eine neue
Applikation erstellen, indem du auf den "New Application"-Button auf der oberen rechten Seite des Entwicklerportals klickst, wodurch sich ein Popup öffnet.
Gib den Namen der Applikation (kannst du später ändern), lies & stimme
den [Discord-Entwickler-Nutzungsbedingungen](https://discord.com/developers/docs/policies-and-agreements/terms-of-service)
und der [Discord-Entwickler-Vereinbarung](https://discord.com/developers/docs/policies-and-agreements/developer-policy) (diese
Bedingungen treffen auch auf deine Verwendung der Discord-API als Teil von SCNX zu) und erstelle deinen Bot durch Bestätigen mit "Create".

![](@site/docs/assets/setup/custom-bot-1.png)

Öffne als nächstes die "Bot"-Einstellungen in der Navigationsleiste am linken Bildschirmrand.
Dort kannst du den Avatar und den Benutzernamen anpassen - musst du aber nicht,
weil du das auch [direkt in SCNX tun kannst](./scnx/guilds/bots#change-profile).

Als nächstes musst du alle sogenannten "Intents" deines Bots aktivieren. Diese erlauben deinem Bot, auf bestimmte
Daten auf
deinem Server zuzugreifen. Dies ist für bestimmte Funktionen notwendig. Zusätzlich empfehlen wir das Deaktivieren der "Public Bot"-Einstellung,
da dein Eigener Bot nur auf deinem Server funktionieren wird. Stelle sicher, dass du nicht "Requires OAuth2 Code Grant"
aktivierst.

![](@site/docs/assets/setup/custom-bot-2.png)

Du bist im Discord-Developer-Dashboard fast fertig - der letzte Schritt ist, ein Token zu generieren und es zu kopieren. Scrolle
dazu nach oben und klicke auf "Reset token" (immer noch auf der Bot-Seite) und bestätige deine Anfrage im Popup. Möglicherweise wirst
du nach einem 2FA-Code für deinen Discord-Account gefragt.

Sobald du damit fertig bist, **kopiere den Token deines Bots**. Du brauchst diesen im nächsten Schritt.

![](@site/docs/assets/setup/custom-bot-3.png)

:::danger
Füge deinen Token **nur** im Dashboard ein. Sende **niemals** einen Token zu einem anderen Nutzer, Trusted Admins oder einem unserer
Teammitglieder. Geh mit Tokens wie mit einem Passwort um - Nutzer mit Zugriff auf deinen Token können deinen Bot verwenden, um
schädliche Aktionen auszuführen.
:::

## 2. Erstelle deinen Bot auf SCNX 🚀 {#step-2}

Öffne das [SCNX-Dashboard](https://scnx.app/de/user/guilds/) und wähle den Server aus, auf dem du den Bot erstellen willst.
Wähle dann "Discord-Bot" in der Sidebar aus.

![](@site/docs/assets/setup/custom-bot-4.png)

Hier findest du ein Video, was dir zeigt, wie du deinen Discord-Bot erstellst. Wenn du dieser Anleitung gefolgt bist kannst du
das Video sicher mit dem Button "Ich habe einen Bot erstellt" überspringen. Als nächstes wirst du nach deinem Token gefragt, den
du in [Schritt 1](#step-1) erhalten hast, anschließend klicke auf "Überprüfe meinen Token". SCNX prüft nun deinen Token. Sobald SCNX fertig ist,
lade bitte deinen Bot mit dem Button "Bot einladen" ein - wenn du diesen Schritt nicht durchgeführt hast, nicht
schlimm; du kannst den [Bot auch später einladen](./scnx/guilds/bots#invite-bot). Schließe den Tab noch nicht - du musst noch
auf "Bot erstellen" klicken, um den Prozess abzuschließen.

![](@site/docs/assets/setup/custom-bot-5.png)

Um deinen Bot einzuladen musst du nur auf den "Bot einladen"-Button drücken. Damit öffnet du Discord's OAuth2-Grant-Seite
(das ist, wie Nerds den Bereich unten nennen 🤓). SCNX hat bereits den Server für dich ausgewählt. Klick einfach auf "Weiter" und
"Authorisieren", um den Prozess abzuschließen. Wenn du willst kannst du die "Administrator"-Berechtigung entfernen, aber dadurch wird
es
schwieriger, den Bot ohne Probleme zu verwenden, weil SCNX aktuell noch nicht in der Lage ist (die Nerds arbeiten immer noch da dran 🤓), die
Berechtigungen einzelner Funktionen anzuzeigen und Fehler, die mit Berechtigungen zusammenhängen, richtig zu behandeln.

![](@site/docs/assets/setup/custom-bot-6.png)

Als letzten Schritt musst du bestätigen, dass du deinen Bot im SCNX-Dashboard erstellen willst - klicke dazu einfach auf
"Bot erstellen".

![](@site/docs/assets/setup/custom-bot-7.png)

:::tip Es läuft nicht alles wie geplant?
Wir haben einen [Leitfaden zur Fehlerbehebung für Eigene Bots](./custom-bot/troubleshooting) für dich. Wenn das nicht geholfen hat,
wir sind immer da, um zu helfen, besuche
einfach [scnx.app/de/help](https://scnx.app/de/help).
:::

## 3. Feiere deinen neuen Bot 🎉 {#done}

Wenn du alles richtig gemacht hast sollte dein Bot jetzt auf Discord online sein. Klopf dir selbst auf die Schulter. Du hast einen guten Job gemacht und
bist jetzt bereit, das Universum eines sehr konfigurierbaren Discord-Bots für deine Community zu bereisen - nicht nur irgendein Discord-Bot,
*dein* Discord-Bot[.](https://cdn.scderox.de/IUopj39jjiOPASDioh/7xpodw.jpg)

Hier sind einige Sachen, die du jetzt tun kannst:

* aktiviere einige der vielen Eigener-Bot-Module.
* nutze den Bot-Login, um Nachrichten mit Self-Roles und mehr zu erstellen.
* erstelle Custom-Commands, um lustige Dinge zu tun.
* verändere das Verhalten deines Bots.
* und vieles mehr, öffne die [Eigener-Bot-Dokumentation](./custom-bot/intro), um alle Möglichkeiten zu sehen.
