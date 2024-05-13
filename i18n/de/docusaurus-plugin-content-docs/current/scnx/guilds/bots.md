---
sidebar_position: 1
---

# Bots von SCNX

Diese Dokumente beinhaltet anwendbare Hilfen für den [Custom Bot](../../custom-bot/intro) und den
 [Modmail Bot](../../modmail/intro) - wenn du diese Bots einstellen willst, befolge bitte den
 [mit dem eigenen  Bot loslegen](../../custom-bot) oder den [mit dem Modmail-Bot loslegen](../../modmail) Artikel.

## Fehlerbehebung {#troubleshooting}

Die Schritte, um Fehler zu beheben, sind bei den beiden Bots unterschiedlich. Bitte schaue dir den passenden Abschnitt an:

* [Eigener Bot](./../../custom-bot/troubleshooting)
* Modmail-Bot

## Die Grundlagen {#basics}

Jeder Bot auf SCNX ist ein eigener Prozess, der auf einem echten Server ausgeführt wird. Du kannst den Status im 
Bot-Status-Panel von deinem [Modmail-](https://scnx.app/glink?page=modmail/manage)
oder [Eigenen-Bot-](https://scnx.app/glink?page=bot/manage) Dashboard einsehen.

Hier ist ein Beispiel von einem eigenen Bot-Status-Panel:

![](@site/docs/assets/scnx/guilds/bots/bot-status-example.png)

Wie du sehen kannst, gibt es hier bereits einige Möglichkeiten. Hier sind die wichtigsten Informationen, die du darüber wissen musst:

* Der Tag und das Profilbild deines Bots (nur sichbar wenn dein Bot online ist). Um das Profil deines Bots zu wechseln,
 klicke auf dieses oder befolge [diesem Artikel](#change-profile).
* "Konfiguration neu laden": Wenn du deine Konfiguration neu lädst, wird dein Bot alle Änderungen übernommen (auch Modul-Änderungen)
  ohne dass der Bot offline geht. Generell solltest du lieber die Konfiguration neuladen, als den Bot neuzustarten.
* "Bot neustarten": Dies wird den Prozess deines Bots neustarten. Dies wird eventuell einige Minuten in Anspruch nehmen,
  zusätzlich wird der Bot für eine kurze Zeit offline sein, in welcher der Bot nicht erreichbar sein wird.
 Du solltest deinen Bot nur neustarten, wenn du dazu aufgefordert wirst, seltsame Fehler auftreten oder du ein [Update machen willst](#bot-updates).
* "Bot anhalten": Dies wird den Prozess deines Bots beenden. Es wird nicht auf Discord erreichbar sein. Es kann bis zu 5 Minuten dauern, bis der Bot in Discord als offline angezeigt wird.
* "Log" / "Fehler-Log": In diesen Log-Datein wird dein Bot dokumentieren, was er macht und wird die Gründe von Fehlern und Problemen aufschreiben. Unser Team (und technische Experten) benötigen diese Logs, um eventuelle Probleme zu analysieren und dir eine Lösung vorzuschlagen - oder, falls es Fehler im Bot selbst sind, diese zu reparieren. Eventuell wirst du gefragt, die [Logs zu teilen](#sharing-logs).
* Sprache: Das ist die (menschliche) Sprache die dein Bot für alle Standardkonfigurationswerte und Nachrichten, die nicht konfiguriert werden können, nutzt. Der Modmail kann in manchen Fällen die Sprache des ausführenden Nutzer benutzen, statt der hier eingestellten Sprache. Du kannst jederzeit [die Sprache deines Bots ändern](#bot-language).
* Server: Dies ist der physische Server - auch Bot-Host genannt - auf dem dein Bot betrieben wird. Du kannst den [Bot-Host wechseln](#bot-host) wenn du möchtest.
* Branch (Nur bei Custom-Bots verfügbar): Der aktuelle Zweig (englisch "branch") ist eine Version deines eigenen Bots auf einer anderen Programmier-Basis. Du solltest es diesen bei "v3" (Stabie Version) belassen, aber wenn du willst, kannst du auch zu dem "Beta"-Branch wechseln (das ist die Öffentliche Beta; kann aber instabil sein).
* Version (Nur bei eigenen Bots sichtbar): Dies ist die aktuelle Version des Codes deines Bots. Abhängig von deiner Version wird dein Bot eventuell neuen Funktionen nicht nutzen können. Wenn deine Version nicht aktuell ist, wird eine Warnung angezeigt. Dein Modmail Bot wird immer automatisch auf dem neusten Stand aktualisiert. Erfahre mehr über [Updates & Versionen](#bot-updates).
* RAM / CPU: Dies wird direkt unter dem "Online"-Status angezeigt. Du kannst sie ohne Sorgen ignorieren, sie zeigen nur die RAM / CPU Nutzung deines Bots an. Diese sind irrelevant, da SCNX automatisch deinen Bot optimiert, falls dein Bot zu viel RAM friss[t](https://www.linuxatemyram.com/) als er tun sollte.

### Bot-Updates {#bot-updates}

<Tabs groupId="scnx-bot-type-k">
    <TabItem value="customBot" label="Custom Bot">
        <ul>
            <li>Wir veröffentlichen regelmäßig Updates für Discord-Bots - wir stellen meist mehrere Funktionen in ein Update für die öffentliche Version. Für die <a href="#beta">Öffentliche Beta</a> gibt es viele Veröffentlichungen, manchmal mehrere an einem Tag.</li>
            <li>Dein Bot wird eine Nachricht in deinen Bot-Log-Channel (falls eingestellt) senden, wenn ein neues Update verfügbar ist.</li>
            <li>Wir kündingen jedes Update auf unserem <a href="https://scootk.it/dc">Discord-Server</a> an und senden einen Link zu einem Änderungsbericht.</li>
            <li>Du findest alle Änderungsberichte in deinem <a href="https://scnx.app/glink?page=bot/manage">Bot-Dashboard</a> und auf unserer <a href="https://scnx.app/changelogs?branch=v3&type=CUSTOM_BOT">Änderungsberichte-Seite</a>.</li>
            <li>Um die neuste Version des Bots zu nutzen, starte den Bot ganz einfach in deinem <a href="https://scnx.app/de/glink?page=bot/manage">Bot-Dashboard</a> neu. Updates Updates sind immer kostenlos.</li>
            <li>Du wirst keine neuen Funktionen nutzen können, wenn dein Bot nicht auf der aktuellsten Version ist, bis du deinen Bot auf die neuste Version bringst.</li>
        </ul>
    </TabItem>
    <TabItem value="modmailBot" label="Modmail-Bot">
        <ul>
          <li>Wir veröffentlichen regelmäßig Updates für den Modmail Bot, manchmal mehrere an einem Tag. Alle Updates sind kostenlos.</li>
          <li>Dein Modmail Bot wird sich immer auf der neusten ihm verfügbaren Version befinden.</li>
          <li>Wenn ein neues Update für deinen Modmail Bot verfügbar ist, wird dein Bot das Update automatisch installieren.</li>
          <li>Wir kündigen größere Updates auf unserem <a href="https://scootk.it/dc">Discord-Server</a> an und posten einen Link zu dem Änderungsbericht.</li>
          <li>Manche Updates oder Fehler-behebungen werden nicht angekündigt - dein Modmail Bot wird sie einfach istallieren.</li>
          <li>Du findest alle Änderungsberichte in deinem <a href="https://scnx.app/de/glink?page=modmail/manage">Bot-Dashboard</a> und auf unserer <a href="https://scnx.app/de/changelogs?type=MODMAIL">Änderungsberichte Seite</a>.</li>
          <li>Wenn dein Bot ein Update durchführt, wird er für eine kurze Zeit offline sein, während dein Bot einige Datenbanken-Änderungen durchführt. Dies wird normalerweise unter einer Minute dauern und dein Bot arbeitet danach wieder wie davor. </li>
        </ul>
    </TabItem>
</Tabs>

### Teilnahme an der öffentlichen Beta {#beta}

<Tabs groupId="scnx-bot-type-k">
    <TabItem value="customBot" label="Eigener Bot">
        Bevor du die öffentliche Beta verwendest, beachte bitte:
        <ul>
          <li>Die öffentliche Beta kann instabil sein. Das bedeutet, dass es passieren kann, dass dein Bot crashed oder neue Funktionen nicht korrekt funktionieren.</li>
          <li>Manche neue Funktionen in der Beta sind noch nicht übersetzt. Das bedeutet, dass dein Bot eventuell Englisch spricht, anstatt deine voreingestellte Sprache.</li>
          <li>Da du die öffentliche Beta jederzeit verlassen kannst, kann es sein, dass dein Bot kaputt geht wenn die Beta-Version eine höhere Veröffentlichungsnummer als die ältere Version hat. Darüber hinaus könnten Konfigurationsdateien nach dem Zurückschalten beschädigt sein und müssen zurückgesetzt werden, was zu Datenverlust führt.</li>
        </ul>
        So kannst du die eigene Bot Beta verwenden:
        <ol>
          <li>Öffne das <a href="https://scnx.app/de/glink?page=bot/manage">Bot-Dashboard</a>.</li>
          <li>In dem Status-Panel, klicke auf "Wechseln" dann auf "Branch"-Einstellungen.</li>
          <li>Wähle "Öffentliche Beta (kann instabil sein)" aus.</li>
          <li>Bestätige die Änderung, indem du auf "Speichern" klickst.</li>
          <li>Um Benachrichtigungen über die Veröffentlichung von neuen Beta-Version auf unserem <a href="https://scootk.it/dc">Discord</a> zu erhalten, aktiviere die Beta-Kanäle in #beta.</li>
        </ol>
        So kannst du die Beta Version deaktivieren:
        <ol>
          <li>Öffne das <a href="https://scnx.app/de/glink?page=bot/manage">Bot-Dashboard</a>.</li>
          <li>In dem Status-Panel, klicke auf "Ändern" dann auf "Branch"-Einstellung.</li>
          <li>Wähle "Stabile Version (empfohlen)" aus.</li>
          <li>Bestätige die Änderung, indem du auf "Speichern" klickst.</li>
        </ol>
    </TabItem>
    <TabItem value="modmailBot" label="Modmail-Bot">Momentan gibt es keine öffentliche Beta Version für unseren Modmail Bot. Ausgewählte Nutzer erhalten Zugriff auf die private Beta, aber sonst werden alle neuen Funktionen für alle Nutzer sofort verfügbar. Im Gegensatz zu unserem eigenen Bot testen wir die Modmail Funktionen ausführlich und stellen sicher, dass jede neue Version vollkommend sicher und stabil ist. </TabItem>
</Tabs>

### Den Bot-Host wechseln {#bot-host}

Der Bot-Host ist der physische Server, auf dem dein Bot läuft. Wir bieten viele rund um die Welt verteilte Bot-Hosts an. So kannst du den Bot-Host wechseln:
1. Öffne das [Modmail-](https://scnx.app/de/glink?page=modmail/manage)
   oder das [eigene Bot-](https://scnx.app/glink?page=bot/manage) Dashboard.
2. Klicke als Nächstes auf "Wechseln" in dem "Status" Bereich.
3. Wähle den Bot-Host aus, auf den du Wechseln willst.
4. Klicke auf "Bestätigen".

<details>
  <summary>Was ist der Unterschied zwischen dem "Premium" und den anderen Bot-Hosts?</summary>
  <ul>
    <li>Die meisten premium Bot-Hosts liegen in Nord Amerika und haben eine schnellere Verbindung zu der Infrastruktur von Discord.</li>
    <li>Die Infrastruktur von Premium-Hosts haben höhere Zuverlässigkeit, höhere Bandbreite und mehr.</li>
    <li>Jedem Bot auf Premium Bot-Hosts werden mehr Ressourcen zugewiesen.</li>
    <li>Premium Bot-Hosts können doppelt so viele Backups speichern und lagern sie wo anders als die anderen Bot-Hosts.</li>
  </ul>
</details>

<details>
  <summary>Welcher Bot-Host ist der beste? / Welchen Bot-Host sollte ich nehmen?</summary>

Letzten Endes ist es egal (bis auf die Premium-Server). Jeder Bot-Host ist dafür da, Bots wie deinen, zu hosten.
Wir haben hohe Standards bei den Bot-Hosts und können versichern, dass alle das gleiche Erlebnis geben. Eventuell werden wir deinen Bot zwischen den Bot-Hosts verschieben, wenn du keinen bezahlten Plan hast, um Ressourcen zu sparen.
</details>

<details>
    <summary>Ich wurde gebeten, bestimmte europäische Datenschutzrechte aufzugeben, wenn ich meinen Bot außerhalb der EU verlagere</summary>

    Wenn du die Daten deines Bots außerhalb der Europäischen Union verschiebst, gilt die Datenschutz-Grundverordnung nicht mehr für deine Daten. Dies betrifft nur die Daten deines Bots, wie Leveling-Stats, Konfiguration und das eigentliche Hosting deines Bots. Bitte bedenke auch, dass Discord selbst
     die meisten deiner Daten auch außerhalb der EU speichert und wir nur mit vertrauenswürdigen Hosting-Anbietern mit hohen Sicherheits- und Datenschutzstandards zusammenarbeiten; Es gelten die Datenschutzgesetze des jeweiligen Landes. Dies bedeutet manchmal, dass wir deine Daten nicht vor der Nutzung und/oder Einsichtnahme durch staatliche Stellen schützen können.
    Da es gesetzlich vorgeschrieben ist (zumindest für unsere EU-Kunden ♥), musst du einer solchen Datenübermittlung zustimmen. Du kannst den Hosting-Standort deines Bots jederzeit wieder auf Bot-Host innerhalb der EU umstellen.

</details>

### Die Bot-Sprache ändern {#bot-language}

Die (menschliche) Sprache wird für alle Standardtkonfigurationwerte und Nachrichten, die nicht eingestellt werden können, verwendet. Es kann vorkommen, dass der Modmail Bot nicht diese, sondern die Sprache des ausführenden Nutzers verwendet.
:::info
Beachte bitte, dass du beim Wechseln der Bot-Sprache nicht bereits erstellte Datein neu generierst - du müsstest die Datei zurücksetzen oder es selbst übersetzen.
:::

Um die Sprache deines Bots zu ändern,

1. Öffne das [Modmail-](https://scnx.app/glink?page=modmail/manage)
   oder das [eigene Bot-](https://scnx.app/glink?page=bot/manage) Dashboard.
2. Klicke als Nächtes auf "Wechseln", dann auf "Server" in der "Status"-Abteilung.
3. Wähle die Sprache aus, zu welcher du wechseln möchtest.
4. Speichere die Änderungen. Dein Bot wird automatisch neustarten um die Änderungen anzunehmen.

![](@site/docs/assets/scnx/guilds/bots/change-language.png)

<details>
    <summary>Die Sprache von meinem Server wird nicht unterstützt</summary>

    Wir entschuldigen uns, dass deine Serversprache nicht auf SCNX verfügbar ist, aber das Scootkit Team ist sehr klein und wir haben aktuell <i>wirklich</i> begrenzte Resourcen und können nicht aktuell keine Unterstützung für andere Sprachen außer Englisch und Deutsch anbieten.
    Du kannst gerne <a href="https://scnx.app/help">unser Team fragen</a>, ob du beim Überstetzen mithelfen kannst, aber verstehe bitte, dass wir nicht jede Anfrage annehmen können. Wir würden gerne jede Sprache dieser Welt unterstützen, aber aktuell müssen wir uns auf unsere momentane Zielgruppen fokusieren.

</details>

## Erwähnung von SCNX entfernen {#offbrand}

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: false, STARTER: false}} />

Du kannst die Fußzeile jeder Nachricht, die du auf SCNX bearbeiten kannst, anpassen. Um nicht immer manuell die Fußzeile zu ändern oder die Fußzeile von voreingestellte Nachricht, die du nicht Bearbeiten kannst, anzupassen, kannst du einen globalen Standard-Fußzeilenwert setzen.

Um das "Powered by scnx.xyz ⚡" von *jedem* Embed von deinem Bot zu entfernen, folge bitte diesen Schritten:

<Tabs groupId="scnx-bot-type-k">
    <TabItem value="customBot" label="Eigener Bot">
        <ol>
            <li>Öffne die <a href="https://scnx.app/de/glink?page=bot/configuration?file=bot%7Cstrings">Nachrichten & Aussehen</a> Konfigurationsdatei von der Eingebauten-Konfiguration deines Bots.</li>
            <li>Verändere den Wert des Felder "Embed-Footer" und "Embed-Footer-Image-URL" nach deinen Wünschen.</li>
            <li>Speichere die Änderungen & starte deinen Bot neu um die Änderungen anzunehmen.</li>
        </ol>
    </TabItem>
     <TabItem value="modmailBot" label="Modmail-Bot">
        <ol>
            <li>Öffne die <a href="https://scnx.app/de/glink?page=modmail/configuration?show=branding">Bot Branding</a> Kategorie deiner Modmail Konfiguration.</li>
            <li>Ändere den "Standard-Embed-Fußzeile" und das "Standard-Fußzeilen-Bild" nach deinen Wünschen. Du kannst ganz einfach ein Bild hinzufügen oder entfernen, falls du kein Bild angezeigt haben möchtes.</li>
            <li>Sichere die Änderungen & lade die Konfiguration neu um die Änderungen zu übernehmen. </li>
        </ol>
    </TabItem>
</Tabs>

## Namen, das Über mich oder Profilbild meines Bot ändern {#change-profile}

:::info Bevor du weiterliest:

* damit dies funktioniert muss dein Bot auf SCNX online sein. Wenn dein Bot nicht auf SCNX online sein sollte, schaue bitte in die [Anleitung zur Fehlerbehebung](#troubleshooting).
* Wenn du nicht der Inhaber von dem Server bist, musst du die [Trusted-Admin Berechtigung](./trusted-admins#permissions) "Bot verwalten" auf dem Produkt haben, dessen Einstellungen du ändern möchtest.
:::

So kannst du das Profil-Bild und den Nutzernamen deines Bots ändern, ohne SCNX zu verlassen:

1. Öffne das [Modmail-](https://scnx.app/de/glink?page=modmail/manage?showEditProfile=true)
   oder [Eigener Bot-](https://scnx.app/de/glink?page=bot/manage?showEditProfile=true) Dashboard.
2. Als Nächstes klicke auf den Namen des Bots in deinem Bot-Status-Panel (wenn du einen der Links oben nutzt, kannst du diesen Schritte überspringen, das Pop-Out wird sich automatisch öffnen).
3. Nun kannst du an dem Bot ändern, was du möchtest. Du wirst eine Vorschau des Profils sehen.
4. Speichere die Änderungen.
5. Es kann ein paar Minuten dauern, bis deine Änderungen auch auf Discord angezeigt werden, also gedulde dich bitte.

![](@site/docs/assets/scnx/guilds/bots/edit-profile.png)

<details>
    <summary>Ein Fehler erscheint, wenn ich versuche, das Profil meines Bots zu ändern</summary>
    <ul>
        <li>Bitte stelle sicher, dass dein Bot online ist und ohne Fehler läuft. Wenn dies nicht der Fall sein sollte, schaue dir bitte unsere <a href="#troubleshooting">Anleitung zur Fehlerbehebung</a> an.</li>
        <li>Manche Namen sind reserviert oder wurden bereits zu oft genutzt und können nicht für deinen Bot verwendet werden. Versuche es bitte mit einem anderen, weniger beliebten, Namen erneut.</li>
        <li>Wenn du ein Profilbild für deinen Bot hochlädst, verbraucht dies deinen Nutzerspeicher. Bitte öffne das <a href="https://scnx.app/user/files">Datein-Dashboard</a> und schaue nach ob genug Platz für dein neues Profil-Bild vorhanden ist.</li>
        <li>Du (oder dein Bot) könnten rate-limitiert sein. Bitte versuche es in 1-4 Stunden erneut.</li>
        <li>Du wirst den genauen Grund in dem Log deines Bots finden. Bitte <a href="#sharing-logs">teile deine Logs</a> und versuche den Fehler darin zu finden. Wenn du ihn nicht findest, <a href="https://scnx.app/help">kontaktiere bitte unser Team</a>.</li>
    </ul>
</details>

## Meinen Bot einladen {#invite-bot}

:::info Bevor du weiterliest

* Dafür muss dein Bot online sein. Wenn dein Bot nicht auf SCNX online ist, öffne bitte den Abschnitt „Der Bot ist nicht auf meinem Server“ im unserem [Leitfaden zur Fehlerbehebung](#troubleshooting).

:::

:::caution
Dein Bot **wird nicht auf anderen Servern funktionieren**, als auf dem Server, für den der Bot erstellt wurde. Wenn du deinen Server wechseln willst, befolge bitte die Anleitung zum [Übertragen von SCNX-Daten](./faq#transfer) in unserem FAQ. Wenn du einen seperaten Bot für einen anderen Server erstellen möchtest,  [füge deinen Server zu  SCNX hinzu](./../../setup) und [erstelle dann einen eigenen Bot](./../../custom-bot).
:::

1. Öffne das [Modmail-](https://scnx.app/glink?page=modmail/manage)
   oder das [eigene Bot-](https://scnx.app/glink?page=bot/manage) Dashboard.
2. Klicke anschließend in der Bot-Statuskarte auf „Erweiterte Optionen“.
3. Klicke auf "Invite-URL anzeigen" und klicke dann auf "Invite-URL kopieren".
4. Klicke auf "Abbrechen".

## Logs teilen {#sharing-logs}

Bevor wir loslegen, eine kurze Erklärung darüber, was Logs überhaupt sind und warum du sie teilen solltest. Jeder Bot hat seinen eigenen Prozess auf SCNX, der auf einem echten, physischen Server verwaltet wird. Während dein Bot läuft, produziert dieser Prozess solche Log-Datein. In diesen Datein dokumentiert dein Bot, alles, was was er macht und schreibt den Grund für Fehlern auf. Unser Team benötigt diese Logs. um eventuelle Probleme zu diagnostizieren und dir eine Lösung anzubieten - oder um, wenn es Fehler direkt am Bot, ist - diese zu beheben.

:::info
Bot Logs zu Teilen, ist eine „Einmalige Erfassung“ davon - geteilte Logs werden nicht aktualisiert, wenn dein Bot etwas Neues dokumentiert. Die geteilten Logs werden nach 7 Tagen,  nachdem du sie geteilt hast, gelöscht. Logs beinhalten meinst keine privaten Informationen, aber bitte schaue trotzdem darüber, bevor du sie veröffentlichst.
:::

:::caution
Bitte verschwende nicht die Zeit unseres Teams, falls du einen Fehler in den Logs findest. Es ist normal, dass dein Bot manchmal Fehler dokumentiert. Wir erhalten diese automatisch, und werden diese beheben. Teile Logs bitte nur, wenn du wirklich Probleme am Bot feststellst.
:::

So kannst du die Bot Logs teilen:

1. Öffne das [Modmail-](https://scnx.app/de/glink?page=modmail/manage)
   oder das [eigene Bot-](https://scnx.app/de/glink?page=bot/manage) Dashboard.
2. Als Nächstes klicke auf "mehr Optionen" in deinem Bot-Status-Panel.
3. Klicke auf "Teile deine Bot-Logs" und danach auf "Logs teilen". Dein Bot-Host wird nun die Logs auf [paste.scootkit.net](https://paste.scootkit.net) hochladen, dies kann ein paar Sekunden dauern.
4. Kopiere **beide** Log-URLs (Log und Fehler-Log) und sende **beide** an unser Team. Wenn du technische Erfahrung hast, kannst eventuell Fehler durch die Logs selbst beheben.

![](@site/docs/assets/scnx/guilds/bots/share-logs.png)

## Den Bot-Token ändern {#change-token}

:::danger
Du kannst deinen Bot Token **nur** in deinem Bot Dashboard ändern. Sende **niemals** deinen Token an einem anderen Nutzer, Trusted-Admin oder einen unserer Teammitglieder. Behandele deinen Token wie ein Passwort - Nutzer mit dem Zugriff auf deinen Token können Änderungen an deinem Bot und Server vornehmen.
:::

:::caution

* Du musst der Besitzer des Servers sein, um den Bot-Token zu ändern.
* Das Ändern deines Bot Tokens wird **keine Probleme lösen**. Bitte nutze die [Anleitung zur Fehlerbehebung](#troubleshooting), um Fehler zu erkennen und zu beheben.
* Wenn du den Namen oder das Profilbild deines Bots ändern willst, folge [dieser Anleitung](#change-profile).
* Das Wechseln des Bot-Tokens kann neue Fehler produzieren. Vermeide deswegen bitte das Wechseln des Tokens.

:::

Du kannst den Bot Token ändern, ohne deinen Bot von SCNX löschen zu müssen. Befolge dazu bitte folgende Schritte:

1. Öffne das [Discord Developer Panel](https://discord.com/developers/applications) und erhalte einen neuen Token: Als Erstes wählst du die "Application" aus, dann gehst du auf die "Bot"-Seite und klickst auf "Generate new token", und kopierst ihn.
2. Öffne das [Modmail-](https://scnx.app/de/glink?page=modmail/manage)
   oder das [eigene Bot-](https://scnx.app/de/glink?page=bot/manage) Dashboard.
3. Klicke auf "Mehr Optionen" in dem "Status"-Panel von deinem Bot.
4. Klicke auf "Bot-Token ändern".
5. Füge deinen neuen Bot-Token ein und bestätige die Änderung, indem du auf "Token ändern" klickst.
6. Dein Bot Token wird gespeichert und dein Bot wird neu gestartet, um die Änderungen zu speichern.

![](@site/docs/assets/scnx/guilds/bots/change-token.png)

Falls dein Bot danach nicht mehr Funktionieren sollte, befolge bitte die [Anleitung zur Fehlerbehebung](#troubleshooting).

## Bot Löschen {#delete-bot}

:::danger

Wenn du deinen Bot löschst, wird dies nicht nur für immer die Bot Konfiguration löschen, sondern wird auch alle Daten löschen (wie Level von Nutzern oder Ticket-Daten).

:::

:::caution

* Du musst der Inhaber des Servers sein, um den Bot zu löschen.
* Löschen des Bots wird höchstwahrscheinlich **keine Probleme lösen**. Bitte nutze die [Anleitung zur Fehlerbehebung](#troubleshooting), um Fehler zu diagnostizieren und zu beheben.
* Wenn du den Nutzernamen oder das Profilbild deines Bots ändern willst, folge [dieser Anleitung](#change-profile).

:::

Es tut uns leid, dass du SCNX verlassen willst - wenn du Probleme mit SCNX hast, [helfen wir dir gerne](https://scnx.app/de/help) auf unserem [Discord](https://sc-net.work/dc).

Um deinen Bot  (für immer) zu löschen, folge dieser Anleitung:

1. Öffne das [Modmail-](https://scnx.app/de/glink?page=modmail/manage)
   oder das [eigene Bot-](https://scnx.app/de/glink?page=bot/manage) Dashboard.
2. Als Nächstes, klicke auf "mehr Optionen" in dem Bot-Status-Panel.
3. Wähle "Bot löschen" aus.
4. Du wirst aufgefordert, einen Grund für die Löschung anzugeben (du musst ihn nicht näher erläutern). Als Nächstes starte deine Anfrage mit dem „Bot-Löschanfrage initiieren“-Knopf.
5. Du wirst eine PN erhalten, um deine Löschanfrage zu bestätigen. Nutze den Knopf unterhalb der Nachricht, um die Datenlöschung durchzuführen.
6. Nach der Bestätigung löscht unser System deinen Bot von SCNX. Dies kann 1–5 Minuten dauern.
7. Du wirst eine Bestätigung erhalten, sobald wir deinen Bot aus SCNX gelöscht haben.