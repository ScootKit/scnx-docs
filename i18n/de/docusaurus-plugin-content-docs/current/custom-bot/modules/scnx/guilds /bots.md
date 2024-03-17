---
sidebar_position: 1
---

# Bots von SCNX

Diese Dokumente beinhaltet anwendbare Hilfen für den [Custom Bot](../../custom-bot/intro) und den
 [Modmail Bot](../../modmail/intro) - wenn du diese Bots einstellen willst, befolge bitte den
 [mit Custom Bot starten](../../custom-bot)oder den [mit Modmail-Bot starten](../../modmail) Artikel.

## Fehlerbehebung {#troubleshooting}

Die Schritte um Fehler zu beheben sind bei den beiden Bots unterschiedlich. Bitte schaue dir den passenden Abschnitt an:

* [Custom Bot](./../../custom-bot/troubleshooting)
* Modmail-Bot

## Die Basics {#basics}

Jeder Bot auf SCNX ist ein eigener Prozess, der auf einem echten Server ausgeführt wird. Du kannst den Status im 
Bot-Status-Panelvon deinem [Modmail-](https://scnx.app/glink?page=modmail/manage)
oder [CustomBot-](https://scnx.app/glink?page=bot/manage) Dashboard einsehen.

Hier ist ein Beispiel von einem Custom-Bot-Status-Panel:

![](@site/docs/assets/scnx/guilds/bots/bot-status-example.png)

Wie du sehen kannst, gibt es ein paar sachen dort, die du machen kannst. Hier sind die Haupt-sachen, die du darüber wissen musst:

* Der Tag und das Profilbild deines Bots (nur sichbar wenn dein bot online ist). Um das Profilbild deines Bots zu wechseln,
 klicke auf es oder folge [diesem Artikel](#change-profile).
* "Konfiguration neu laden":Wenn du deine Konfiguration neu lädst, wird dein Bot alle Änderungen übenehmen (auch Modul-Änderungen)
  ohne dass der Bot offline geht. Generell solltest du lieber die Konfiguration neu laden als den Bot neuzustarten.
* "Bot neustarten": Dies wird den Prozess deines Bots neustarten. Dies wird eventuell einige Minuten in Anspruch nehmen,
* zusätzlich wird der Bot für eine kurze Zeit offline sein, in dieser Zeit wird der Bot nicht erreichbar sein.
 Du solltest deinen Bot nur neustarten, wenn du dazu aufgefordert wirst, komische Fehler auftreten oder du ein [Update machen willst](#bot-updates).
* "Bot anhalten": Dies wird den Prozess deines Bots beenden. Es wird nicht auf Discord erreichbar sein. Es kann bis zu 5 Minuten dauern, bis der Bot in Discord als offline angezeigt wird.
* "Log" / "Fehler-Log": In diesen Log-Datein wird dein Bot dokumentieren, was er macht und wird die Gründe von Fehlern und Problemen aufschreiben. Unser Team (und Technische Eyperten) benötigen die Probleme um diese zu analysieren und dir eine Lösung vorschlagen - oder falls es Fehler im Bot selbst sind - diese zu reparieren. Eventuell wirst du gefragt, die [Logs zu teilen](#sharing-logs).
* Sprache: Das ist die (Menschliche) Sprache die dein Bot für alle Standart-onfiguration-Werte und Nachrichten, die nicht konfiguriert werden können. Der Modmail könnte in manchen Fällen die Sprache des ausführenden Nutzer benutzen, statt der eingestellten Sprache. Du kannst jederzeit [die Sprache des Bots ändern](#bot-language).
* Server: Dies ist der physische Server - auch Bot-Host genannt - auf dem dein Bot betrieben wird. Du kannst den [Bot-Host wechseln](#bot-host) wenn du möchtest.
* Branch (Nur bei Custom-Bots verfügbar): Diese Branch ist eine komplett andere Programmier-Basis für deinen Bot. Du solltest es bei "v3" (Stabie Version) belassen, du kannst es aber auch zu der "Beta"-Branch wechseln (Öffentliche Beta; kann aber instabil sein).
* Version (Nur bei Custom-Bots sichtbar): Dies ist die ANzahl an veröffentlichen code-versionen. Abhängig von deiner Version wird dein Bot eventuell keine neuen Funktionen nutzen können. Wenn deine Version nicht aktuell ist wird es eine Warnung geben, die dies zeigt. Dein Modmail Bot wird immer auf dem neusten Stand sein. Erfahre mehr über [Updates & Versionen](#bot-updates).
* RAM / CPU: Dies wird direkt unter dem "Online"-Status angezeigt. Du kannst sie ohne Sorgen übersehen, sie zeigen nur die RAM / CPU Nutzung deines Bots anzeigt. Diese sind irrelevant, da SCNX automatisch deinen Bot optimiert falls dein Bot zu viel RAM friss[t](https://www.linuxatemyram.com/) als er soll.

### Bot-Updates {#bot-updates}

<Tabs groupId="scnx-bot-type-k">
    <TabItem value="customBot" label="Custom Bot">
        <ul>
            <li>Wir veröffentlichen regelmäßig Updates für Discord-Bots - wir stellen meist mehrere Funktionen in ein Update für die öffentliche Version. Für die <a href="#beta">Öffentliche Beta</a> gibt es viele Veröffentlichungen, manchmal mehrere an einem Tag.</li>
            <li>Dein Bot wird eine Nachricht in deinen Bot-Log-Channel (falls eingestellt) senden, wenn ein neues Update verfügbar ist.</li>
            <li>Wir kündingen jedes Update auf unserem <a href="https://scootk.it/dc">Discord-Server</a> an und senden einen Link zu dem Changelog.</li>
            <li>YDu findest alle Changelogs in deinem <a href="https://scnx.app/glink?page=bot/manage">Bot-Dashboard</a> und in unsrer <a href="https://scnx.app/changelogs?branch=v3&type=CUSTOM_BOT">Changelog-seite</a>.</li>
            <li>Um die neuste Version des Bots zu nutzen, starte den Bot ganz einfach in deinem <a href="https://scnx.app/glink?page=bot/manage">Bot-Dashboard</a> neu. Updates Updates sind immer kostenlos.</li>
            <li>Du wirst keine neuen Funktionen nutzen können bis dein Bot auf die neuste Version gebracht wurde, falls dein Bot nicht auf der neusten Version ist.</li>
        </ul>
    </TabItem>
    <TabItem value="modmailBot" label="Modmail-Bot">
        <ul>
          <li>Wir veröffentlichen regelmäßig Updates für den Modmail Bot, manchmal mehrere an einem Tag. Alle Updates sind kostenlos.</li>
          <li>Dein Modmail Bot wird sich immer auf der neusten ihm verfügbaren Version befinden.</li>
          <li>Wenn ein neues Update für deinen Modmail Bot verfügbar ist, wird dein Bot das Update automatisch installieren.</li>
          <li>Wir kündigen größere Updates auf unserem <a href="https://scootk.it/dc">Discord-Server</a> an und posten einen Link zu dem changelog.</li>
          <li>Manche Updates oder Fehler-behebungen werden nicht angekündigt - dein Modmail Bot wird sie einfach istallieren.</li>
          <li>Du findest alle Changelogs in deinem <a href="https://scnx.app/glink?page=modmail/manage">Bot-Dashboard</a> und auf unserer <a href="https://scnx.app/changelogs?type=MODMAIL">Changelog Seite</a>.</li>
          <li>Wenn dein Bot ein Update ein Update macht, wird er für eine kurze Zeit offline sein während er die Datenbanken-änderungen macht. Dies wird normalerweise unter einer Minute dauern und dein Bot wird wieder arbeiten wie davor. </li>
        </ul>
    </TabItem>
</Tabs>

### Participate in Public Beta {#beta}

<Tabs groupId="scnx-bot-type-k">
    <TabItem value="customBot" label="Custom Bot">
        Bevor du die öffentliche Beta verwendest, bitte beachte:
        <ul>
          <li>Die öffentliche Beta kann instabil sein. Das bedeutet, dass es passieren kann, dass dein Bot crashed oder neue Funktionen nicht mehr gehen.</li>
          <li>Manche neue Funktionen in der Beta sind noch nicht übersetzt. Das bedeutet, dass dein Bot eventuell Englisch spricht, anstatt deine voreingestellte Sprache.</li>
          <li>Da du die öffentliche Beta jederzeit verlassen kannst, kann es sein, dass dein Bot kaputt geht wenn die Beta-Version eine höhere Veröffentlichungsnummer als die ältere Version hat. Darüber hinaus könnten Konfigurationsdateien nach dem Zurückschalten beschädigt sein und müssen zurückgesetzt werden, was zu Datenverlust führt.</li>
        </ul>
        So kannst du die Custom-Bot Beta verwenden:
        <ol>
          <li>öffne das <a href="https://scnx.app/glink?page=bot/manage">Bot-Dashboard</a>.</li>
          <li>In dem Status-Panel, klicke auf "Wechseln" dann auf "Branch"-Einstellungen.</li>
          <li>Wähle "Öffentliche Beta (kann instabil sein)"aus.</li>
          <li>Bestätige die Änderung, indem du auf "Speichern" klickst.</li>
          <li>Um Update Benachrichtigungen über Beta Veröffentlichungen auf unserem <a href="https://scootk.it/dc">Discord</a> zu erhalten, aktiviere die Beat Kanäle in #beta.</li>
        </ol>
        So kannst du die Beta Version deaktivieren:
        <ol>
          <li>Öffne das <a href="https://scnx.app/glink?page=bot/manage">Bot-Dashboard</a>.</li>
          <li>In dem Status-Panel, klicke auf "Change" dann auf "Branch"-Einstellung.</li>
          <li>Wähle "Stabile Version (empfohlen)" aus.</li>
          <li>Bestätige die Änderung, indem du auf "Speichern" klickst.</li>
        </ol>
    </TabItem>
    <TabItem value="modmailBot" label="Modmail-Bot">Momentan gibt es keine öffentliche Beta Version für unseren Modmail Bot. Ausgewählte Nutzer erhalten Zugriff auf die Private Beta, aber sonst werden alle neuen Funktionen für alle Nutzer verfügbar sein. Im Gegensatz zu unserem Custom-Bot testen wir die Modmail Funktionen ausführlichund stellen sicher, dass jede neue Version komplett sicher ist. </TabItem>
</Tabs>

### Den Bot-Host wechseln {#bot-host}

Der Bot-Host ist der physikale Server auf dem dein Bot läuft.Wir bieten viele Bot Hosts an, die rund um die Welt verteilt sind. So kannst du den Bot-Host wechseln:
1. Öffne das [Modmail-](https://scnx.app/glink?page=modmail/manage)
   oder das [CustomBot-](https://scnx.app/glink?page=bot/manage) Dashboard.
2. Als nächstes klicke auf "wechseln" in dem "Status" Bereich.
3. Wähle den Bot-Host aus, auf den  du welchseln willst.
4. Klicke auf "Bestätigen".

<details>
  <summary>Was ist der Unterschied zwischen dem "Premium"  und den anderen Bot-Hosts?</summary>
  <ul>
    <li>Die meisten Bot-Hosts liegen in Nord Amerika und ahben eine schellere Verbindung zu der Infrastruktur von Discord.</li>
    <li> Die Infrastruktur von Premium Host höhere Zuverlässigkeit, höhere Bandbreite und mehr.</li>
    <li>Jedem Bot werden mehr Ressourcen zugewiesen.</li>
    <li>Premium Bot-Hosts können doppelt so viele Backups speichern undlagern sie woanders als die anderen Bot-Hosts.</li>
  </ul>
</details>

<details>
  <summary>Welcher Bot-Host ist der beste? / Welchen Bot-Host sollte ich nehmen?</summary>

Letzten Endes ist es egal (bis auf die Premium-Server). Jeder Bot-Host ist dafür da, Bots zu hosten, genau wie deiner.
Wir haben hohe Standarts bei den Bot-Hosts und können versichern, dass alle das gleiche Erlebniss geben. Eventuell werden wir deinen Bot zwischen den Bot-Hosts verschieben, wenn du keinen bezahlten Plan hast, um Ressourcen zu sparen.
</details>

<details>
    <summary>Ich wurde gebeten, bestimmte europäische Datenschutzrechte aufzugeben, wenn ich meinen Bot außerhalb der EU verlagere</summary>

    Wenn du die Daten deines Bots außerhalb der Europäischen Union verschiebst, gilt die Datenschutz-Grundverordnung nicht mehr für deine Daten. Dies betrifft nur die Daten deines Bots, wie Leveling-Stats, Konfiguration und das eigentliche Hosting deines Bots. Bitte bedenke auch, dass Discord selbst
     die meisten ihrer Daten auch außerhalb der EU speichert und nur mit vertrauenswürdigen Hosting-Anbietern mit hohen Sicherheits- und Datenschutzstandards zusammen arbeitet; Es gelten die Datenschutzgesetze des jeweiligen Landes. Dies bedeutet manchmal, dass wir deine Daten nicht vor der Nutzung/Einsichtnahme durch staatliche Stellen schützen können.
    Da es gesetzlich vorgeschrieben ist (zumindest für unsere EU-Kunden ♥), müssen Sie einer solchen Datenübermittlung zustimmen. Sie können den Hosting-Standort Ihres Bots jederzeit wieder auf Bot-Host innerhalb der EU umstellen.

</details>

### Die Bot-Sprache ändern {#bot-language}

Die (Menschliche) Sprache wird für alle standart-konfiguration-eingaben und Nachrichten die nicht eingestellt werden können. Es kann vorkommen, dass der Modmail Bot nicht diese, sondern die Sprache, die der ausführende Nutzer eingestellt hat nutzt.
:::info
Wenn du die Bot Sprache wechselst, bitte beachte dass du nicht die eingestellten Datein neu generierst - du müsstest die Datei zurücksetzen oder es selbst übersetzen.
:::

Um die Sprache deines Bots zu ändern,

1. Öffne das [Modmail-](https://scnx.app/glink?page=modmail/manage)
   oder das [CustomBot-](https://scnx.app/glink?page=bot/manage) Dashboard.
2. Als nächtes klicke auf "Wechseln", dann auf "Server" in der "Status"-Abteilung.
3. Wähle die Sprache aus, in die du wechseln möchtest.
4. Sichere die Änderungen. Dein Bot wird automatisch neustarten um die Änderungen anzunehmen.

![](@site/docs/assets/scnx/guilds/bots/change-language.png)

<details>
    <summary>Die Sprache von meinem Server wird nicht unterstützt</summary>

    Wir entschuldigen uns dafür dass deine Serversprache nicht auf SCNX verfügbar ist, aber wir, dass Scootkit Team sind sehr klein und wir sind <i>wirklich</i> begrenzt an Resourcen und können nicht Support für andere Sprachen außer Englisch und Deutsch anbieten.
    Du kannst gerne <a href="https://scnx.app/help">unser Team fragen</a> ob du mithelfen kannst zu übersetzen, aber bitte verstehe dass wir nicht jede Anfrage annehmen können. Wir würden gerne jede Sprache der Welt unterstützen, aber zuerst müssen wir uns momentan auf unsere Ziel-Gruppen fokusieren.

</details>

## Erwähnung von SCNX entfernen {#offbrand}

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: false, STARTER: false}} />

Du kannst immer den Footer von allen Nachrichten ändern von allen Nachrichten die du auf SCNX bearbeiten kannst, aber du kannst auch die voreingestellte Nachricht ändern wo du den Footer nicht manuell ändern kannst oder es dafür kein vorgesehenes Feld gibt. 

Um das "Powered by scnx.xyz ⚡" von *jedem* Embed von deinem Bot zu entfernen, folge bitte diesen Schritten:

<Tabs groupId="scnx-bot-type-k">
    <TabItem value="customBot" label="Custom Bot">
        <ol>
            <li>Öffne die <a href="https://scnx.app/glink?page=bot/configuration?file=bot%7Cstrings">Nachrichten & Aussehen</a> Einstellung von der Eingebauten-konfiguration deines Bots.</li>
            <li>Verändere den "Embed-Footer" und die "Embed-Footer-Image-URL" wie du möchtest. Du kannst eine Bild-URL in deinem<a href="https://scnx.app/user/files">Datein Speicher</a> hochladen - lade einfach ein Bild dort hoch und klicke auf "Öffentliche URL kopieren".</li>
            <li>Speichere die Änderungen & starte den Bot neu um die Änderungen anzunehmen.</li>
        </ol>
    </TabItem>
     <TabItem value="modmailBot" label="Modmail-Bot">
        <ol>
            <li>Öffne die <a href="https://scnx.app/glink?page=modmail/configuration?show=branding">Bot Branding</a> Abteilung von deiner Modmail Konfiguration.</li>
            <li>Ändere den "Standart-Embed-Fußzeile" und das "Standart-Fußzeilen-Bild" wie du möchtest. Du kannst ganz einfach ein Bild hinzufügen oder entfernen, falls du es nicht mehr brauchst.</li>
            <li>Sichere die Änderungen & lade die Konfiguration neu um die Änderungen abzunehmen. </li>
        </ol>
    </TabItem>
</Tabs>

##  Namen, Über mich oder Prodil-bild bei meinem Bot ändern {#change-profile}

:::info Bevor du weiterliest:

* damit dies funktioniert muss dein Bot auf SCNX online sein. Wenn dein Bot nicht auf SCNX online sein sollte, schaue bitte in den [Fehlerbehebungs Abschnitt](#troubleshooting).
* Wenn du nicht der Inhaber von dem Server bist, musst du die [Trusted-Admin Berechtigung](./trusted-admins#permissions) "Bot verwalten" auf dem Produkt dass du ändern möchtest, haben.
:::

So kannst du das Profil-Bild und den Nutzernamen deines Bots ändern ohne SCNX zu verlassen:

1.Öffne das [Modmail-](https://scnx.app/glink?page=modmail/manage?showEditProfile=true)
   oder [CustomBot-](https://scnx.app/glink?page=bot/manage?showEditProfile=true) Dashboard.
2. Als nächstes klicke auf den Bot Namen in deinem Bot-Status-Panel (wenn du einen der Links oben nutzt kannst du diese Schritte überspringen, das Modal wird sich automatisch öffnen).
3. Nun kannst du an dem Bot ändern was du möchtest. Wenn du das Profilbild gewechselt hast, wirst du eine Vorschau des Profil Bildes sehen.
4. Sichere die Änderungen
5. Es kann ein paar Minuten dauern bis es auf Discord angezeigt wird also bitte gedulde dich.

![](@site/docs/assets/scnx/guilds/bots/edit-profile.png)

<details>
    <summary>Ein Fehler erscheint wenn ich versuche, das Profil meines Bots zu ändern</summary>
    <ul>
        <li>Bitte stelle sicher, dass dein Bot online ist und keine Fehler hat. Wenn dies nicht der Fall ist, schaue dir bitte unsere <a href="#troubleshooting">Anleitung zur Fehlerbehebung</a> an.</li>
        <li>Manche Namen sind reserviert oder wurden bereits zu oft genutzt und können nicht für deinen Bot verwendet werden. Versuche es bitte ernueut mit einem anderen, weniger beliebten Namen.</li>
        <li>Wenn du ein Prodil Bild für deinen Bot hochlädst verbraucht dies Acoount Speicher. Bitte öffne das <a href="https://scnx.app/user/files">Datein-Dashboard</a> und schaue nach ob genug Platz für dein neues Prodil-Bild ist.</li>
        <li>Du (oder dein Bot) könnten rate-limitiert sein. Bitte versuche es in 1-4 Stunden erneut.</li>
        <li>Du wirst den genauen Grund in dem Log deines Bots finden. Bitte <a href="#sharing-logs">teile deine Logs</a> und versuche den Fehler darin zu finden Wenn du ihn nicht findest, bitte <a href="https://scnx.app/help">kontaktiere unser Team</a>.</li>
    </ul>
</details>

## Meinen Bot einladen {#invite-bot}

:::info Bevor du weiterliest

* Dafür muss dein Bot online sein. Wenn dein Bot nicht online in SCNX ist, öffne bitte den Abschnitt „Der Bot ist nicht auf meinem Server“ im rechten [Leitfaden zur Fehlerbehebung](#troubleshooting).

:::

:::caution
Dein Bot **wird nicht auf anderen Servern funkrionieren** als für den Server, für den es erstellt wurde. Wenn du den Server wechseln willst, folge bitte dem [SCNX Data übertragen](./faq#transfer)-Leitfaden in unserem FAQ. Wenn du einen Bot für einen anderen Server haben möchtest,  [füge bitte deinen Server zu  SCNX hinzu](./../../setup) und [stelle dann deinen Custom-Bot ein](./../../custom-bot).
:::

1. Open the [Modmail-](https://scnx.app/glink?page=modmail/manage)
   or [CustomBot-](https://scnx.app/glink?page=bot/manage) Dashboard.
2. Next, click on "Advanced options" in the bot status card.
3. Click on "View Invite-URL" and click on "Copy Invite-URL to clipboard".
4. Click on "Cancel".

## Sharing Logs {#sharing-logs}

Before we start, a quick explanation about Logs and why you might get asked to share them. Each bot is its own process
on SCNX, hosted on a real, physical server. As such process, it generates log files. In these logs files your bot
documents what it's doing and writes down the reason for failures or issues. Our staff needs these logs to diagnose
problems and offer your solutions - or if they are bugs in the bot themselves - to fix them.

:::info
Sharing your logs is a "one-time-capture" of them - they won't get updated as your bot writes new lines. Shared logs
expire 7 days after sharing. Logs don't usually contain any sensitive information, but please check them before
publishing logs publicly.
:::

:::caution
Please don't waste the time of our staff if you find something in your log. It's normal that your bot sometimes logs
issue, and we get these reported automatically. Only share them if you are experiencing an actual issue using your bot.
:::

Here's how you can share the logs of your bot:

1. Open the [Modmail-](https://scnx.app/glink?page=modmail/manage)
   or [CustomBot-](https://scnx.app/glink?page=bot/manage) Dashboard.
2. Next, click on "More options" in the Bot-Status-Panel.
3. Click on "Share your bot's logs" and then press the button "Share logs". Your Bot-Host will now upload the logs of
   your bot to [paste.scootkit.net](https://paste.scootkit.net). This might take a few seconds.
4. Copy **both** the log URL and error log and send them **both** to our staff to investigate. If you have technical
   experience, you might also be able to use the logs to diagnose the issue yourself.

![](@site/docs/assets/scnx/guilds/bots/share-logs.png)

## Change Bot-Token {#change-token}

:::danger
You can **only** change your token in the Dashboard. **Never** send a token to another user, trusted-admins or a member
of our staff. Treat tokens like a password - users with access to your token are able to use your bot to perform
harmful actions.
:::

:::caution

* You need to be the owner of the server to change the Bot-Token.
* Changing your bot's token will **not solve any issues** you are experiencing. Please use
  the [troubleshooting guide](#troubleshooting) to diagnose and fix them like the Pro you are :wink:
* If you want to change the username or profile picture of your bot, follow [this guide](#change-profile).
* Changing your Bot's token might create new issues or complications. Please avoid changing your token if possible.

:::

You can change the token of your Bot easily without needing to delete your Bot from SCNX. Please follow these steps:

1. Open the [Discord Developer Panel](https://discord.com/developers/applications) and obtain a new token: First select
   your application, go to
   the "Bot"-Site and then click on "Regenerate token", and copy the result.
2. Open the [Modmail-](https://scnx.app/glink?page=modmail/manage)
   or [CustomBot-](https://scnx.app/glink?page=bot/manage) Dashboard.
3. Click on "More options" in the "Status"-Panel of your bot.
4. Click on "Change Bot-Token".
5. Enter your new Bot-Token and confirm it by pressing "Change token".
6. Your token will be saved and your bot will restart to apply the changes.

![](@site/docs/assets/scnx/guilds/bots/change-token.png)

If your bot is not working afterward, please follow the [troubleshooting guide](#troubleshooting).

## Delete Bot {#delete-bot}

:::danger

Deleting your Bot is irreversible and does not only delete your configuration, it also removes data (like
Leveling-Stats, or Ticket-Data).

:::

:::caution

* You need to be the owner of the server to delete a bot.
* Deleting your bot will, most likely, **not solve any issues** you are experiencing. Please use
  the [troubleshooting guide](#troubleshooting) to diagnose and fix them like the Pro you are :wink:
* If you want to change the username or profile picture of your bot, follow [this guide](#change-profile).

:::

We're sorry that you want to leave SCNX - if you are only experiencing an issue with SCNX, we
are [happy to help](https://scnx.app/help) on our [Discord](https://sc-net.work/dc).

To permanently delete your bot, please follow these instructions:

1. Open the [Modmail-](https://scnx.app/glink?page=modmail/manage)
   or [CustomBot-](https://scnx.app/glink?page=bot/manage) Dashboard.
2. Next, click on "More options" in the Bot-Status-Panel.
3. Select "Delete a bot".
4. You'll be asked to select a reason (you won't need to elaborate) for deletion. Next, start your request using the "
   Initiate Bot-Deletion request"-Button.
5. You'll receive a DM to confirm your deletion request. Use the button below the message to execute the data deletion.
6. After confirming, our system will delete your bot from SCNX. This might take 1-5 minutes.
7. You'll receive confirmation once we've deleted your bot from SCNX.
