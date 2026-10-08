---
sidebar_position: 3
title: Eigene Domains
description: Verbinde deine eigene Domain mit deiner SCNX-Website - die zwei nötigen DNS-Einträge, wie du sie bei deinem Anbieter anlegst und wie die Prüfung abläuft.
unlisted: true
---

# Eigene Domains

:::caution Diese Dokumentation ändert sich während der Beta
SCNX Sites befindet sich in der aktiven Beta-Phase, und wir ändern dabei laufend eine Menge. Sobald der aktuelle Beta-Zyklus abgeschlossen ist, überarbeiten wir diese Dokumentation - bis dahin können einzelne Details auf dieser Seite veraltet sein.
:::

Jede SCNX-Website hat eine kostenlose Adresse, die auf `scnx.site` endet, etwa `my-community.scnx.site`. Wenn du eine eigene Domain besitzt, kannst du sie verbinden, sodass deine Website auch unter deiner eigenen Adresse erreichbar ist, zum Beispiel `www.example.com`.

Diese Seite führt durch die ganze Einrichtung. Es ist der kniffligste Teil von Sites, also geh Schritt für Schritt vor, dann klappt es.

## Die Seite Domains {#domains-page}

![Die Seite Domains mit einer eigenen Domain, die auf ihre CNAME- und TXT-Einträge wartet](@site/docs/assets/sites/de/domains.png)

Öffne **Domains** im Sites-Menü im Dashboard deines Servers. Die Seite hat drei Teile:

- **Deine scnx.site-Adresse** ganz oben, mit Buttons zum Kopieren und Öffnen.
- **Eigene Domains**, wo du deine eigenen Domains verbindest.
- **Weiterleitungen** ganz unten. Siehe [Weiterleitungen](/docs/sites/small-features#redirects).

Alle mit Zugriff auf die Website können diese Seite sehen. Zum Hinzufügen, Prüfen und Entfernen eigener Domains brauchst du Admin-Zugriff. Mit Bearbeitungszugriff siehst du deine Domains und ihre DNS-Einträge trotzdem.

## Deine kostenlose Adresse vs. eine eigene Domain {#free-vs-custom}

- **Deine scnx.site-Adresse** funktioniert, sobald du deine Website veröffentlichst. Es gibt nichts einzurichten. Bieten wir mehr als eine Endung an, kannst du deine unter **Adress-Endung** wählen. Die Änderung wirkt sofort, ohne Veröffentlichung, und Links mit einer anderen unserer Endungen leiten Besucher auf die gewählte weiter.
- **Eine eigene Domain** ist eine Domain, die dir schon gehört, gekauft bei einem Anbieter wie Cloudflare, Namecheap, GoDaddy, IONOS und so weiter. Um sie zu nutzen, legst du zwei DNS-Einträge bei diesem Anbieter an, damit deine Domain auf unsere Server zeigt.

Du kannst bis zu drei eigene Domains mit einer Website verbinden. Deine kostenlose Adresse funktioniert daneben weiter.

## Die zwei Einträge, die du brauchst {#the-two-records}

Um eine Domain zu verbinden, brauchst du **beide** DNS-Einträge. Einer allein reicht nicht.

| Eintrag             | Zweck                                                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CNAME** (Routing) | Zeigt deine Domain auf unsere Server, damit wir deine Website ausliefern und ein HTTPS-Zertifikat dafür holen können. Sein Wert ist immer `sites.scnx.app`. |
| **TXT** (Eigentum)  | Belegt, dass die Domain wirklich dir gehört. Sein Name beginnt mit `_scnx-verify.` und sein Wert enthält einen Code, der nur für deine Domain gilt.         |

Für `www.example.com` sehen die zwei Einträge so aus:

| Typ   | Name                           | Wert                                  |
| ----- | ------------------------------ | ------------------------------------- |
| CNAME | `www.example.com`              | `sites.scnx.app`                      |
| TXT   | `_scnx-verify.www.example.com` | `scnx-site-verification=` + dein Code |

Das Dashboard zeigt dir für beide Einträge den genauen **Name** und **Wert**, jeweils mit einem Kopier-Button. Kopiere sie immer aus deinem eigenen Dashboard: Der TXT-Code gilt nur für deine Domain.

:::warning Beide Einträge sind erforderlich
Eine Domain wird erst aktiv, wenn **beide** Einträge, CNAME und TXT, vorhanden sind und sich über DNS verteilt haben. Legst du nur einen an, schlägt die Prüfung weiter fehl und sagt dir, welcher Eintrag noch fehlt.
:::

:::tip Nutze eine Subdomain wie www
Verbinde eine Subdomain wie `www.example.com` oder `join.example.com`. Eine nackte Root-Domain wie `example.com` lässt sich nicht verbinden: Unsere Prüfung sucht nach einem echten CNAME-Eintrag, und eine Root-Domain kann normalerweise keinen haben. Auch Anbieter, die ein "CNAME-Flattening" auf der Root anbieten, verstecken den CNAME vor unserer Prüfung, sie würde also nie bestehen.
:::

## Schritt für Schritt {#steps}

1. Öffne **Domains** im Sites-Menü.
2. Gib unter **Eigene Domains** deine Domain ein (zum Beispiel `www.example.com`) und klick auf **Hinzufügen**. Sie erscheint mit dem Abzeichen **DNS ausstehend** und zeigt die zwei anzulegenden Einträge.
3. Lass diese Seite offen und melde dich in einem zweiten Tab bei deinem **Domain-Anbieter** an (dort, wo du die Domain gekauft hast oder wo dein DNS verwaltet wird).
4. Lege den **CNAME**-Eintrag und den **TXT**-Eintrag mit den Werten aus deinem Dashboard an. Siehe die Anbieter-Beispiele unten.
5. Gib DNS etwas Zeit zum Aktualisieren, komm dann zurück ins Dashboard und klick auf **Prüfen**.
6. Werden beide Einträge gefunden, wechselt die Domain auf **Aktiv** und deine Website wird darüber ausgeliefert. HTTPS wird automatisch eingerichtet. Du musst kein Zertifikat kaufen oder installieren.

Deine Website muss veröffentlicht sein, damit eine eigene Domain sie zeigt. Hast du noch nicht veröffentlicht, kannst du die Domain trotzdem schon hinzufügen und prüfen. Besucher sehen deine Website dort, sobald du [veröffentlichst](/docs/sites/publishing).

### Die Einträge bei deinem Anbieter anlegen {#provider-examples}

Die Idee ist überall gleich: Lege einen CNAME-Eintrag und einen TXT-Eintrag mit dem Namen und dem Wert aus deinem Dashboard an. Nur die Beschriftung der Felder ist anders.

:::note Voller oder kurzer Name?
Dein Dashboard zeigt die **vollen** Eintragsnamen, etwa `www.example.com` und `_scnx-verify.www.example.com`. Die meisten Anbieter wollen nur den Teil vor deiner Domain und ergänzen den Rest selbst: `www` für den CNAME und `_scnx-verify.www` für den TXT-Eintrag. Tippst du in so ein Feld den vollen Namen, entsteht `www.example.com.example.com`, und die Prüfung schlägt fehl. Im Zweifel nimm den kurzen Namen.
:::

Hier sind drei gängige Anbieter als Beispiel, für die Domain `www.example.com`.

**Cloudflare**

1. Wähle deine Domain und öffne **DNS → Records**.
2. **Add record → CNAME.** Setze **Name** auf `www` und **Target** auf `sites.scnx.app`.
3. Setze den **Proxy status** auf **DNS only** (graue Wolke, nicht die orange). Das ist wichtig: Mit dem orangen Proxy kann unsere Prüfung deinen CNAME-Eintrag nicht sehen und schlägt fehl.
4. **Add record → TXT.** Setze **Name** auf `_scnx-verify.www` und **Content** auf den TXT-Wert aus deinem Dashboard.
5. Speichere beide, geh zurück zu SCNX und klick auf **Prüfen**.

**Namecheap**

1. Öffne **Domain List → Manage → Advanced DNS**.
2. **Add New Record → CNAME Record.** Trag `www` in **Host** und `sites.scnx.app` in **Value** ein.
3. **Add New Record → TXT Record.** Trag `_scnx-verify.www` in **Host** und den TXT-Wert in **Value** ein.
4. Lass TTL auf **Automatic**, speichere beide und klick in SCNX auf **Prüfen**.

**GoDaddy**

1. Öffne **My Products → Domain → DNS / Manage DNS**.
2. **Add → CNAME.** Trag `www` in **Name** und `sites.scnx.app` in **Value** ein.
3. **Add → TXT.** Trag `_scnx-verify.www` in **Name** und den TXT-Wert in **Value** ein.
4. Speichere beide und klick in SCNX auf **Prüfen**.

Jeder andere Anbieter (IONOS, Squarespace, OVH, Porkbun und so weiter) funktioniert genauso: Finde, wo du DNS-Einträge verwaltest, und lege einen CNAME und einen TXT mit den Werten aus deinem Dashboard an.

## Prüfen {#verify}

Nachdem du beide Einträge angelegt hast, klick neben deiner Domain auf **Prüfen**.

- Werden beide Einträge gefunden, siehst du **Deine Domain ist verifiziert und aktiv!** und das Abzeichen wechselt auf **Aktiv**.
- Fehlt ein Eintrag, sagt dir die Prüfung, welcher, und jeder Eintrag in der Liste ist als **Gefunden** oder **Nicht gefunden** markiert. CNAME und TXT haben unterschiedliche Lösungen, prüf also den genannten Eintrag und versuch es erneut.

DNS-Änderungen sind nicht sofort da. Meist wirken sie innerhalb weniger Minuten, können aber je nach Anbieter und TTL des Eintrags länger dauern, im langsamsten Fall etwa einen Tag. Geht ein erstes **Prüfen** nicht durch, warte kurz und versuch es erneut, statt die Einträge zu ändern. Solange die Werte mit dem übereinstimmen, was dein Dashboard zeigt, werden sie gefunden, sobald DNS aufgeholt hat.

## Status einer Domain {#status}

Jede Domain zeigt eines von drei Abzeichen:

| Abzeichen                   | Was es bedeutet                                                                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DNS ausstehend**          | Die Domain ist hinzugefügt, aber noch nicht verifiziert. Deine Website wird darüber nicht ausgeliefert. Darunter stehen die zwei anzulegenden Einträge. |
| **Aktiv**                   | Beide Einträge wurden gefunden. Deine Website ist über diese Domain live, und das Dashboard zeigt, seit wann.                                           |
| **Prüfungen schlagen fehl** | Die Domain ist aktiv, aber unsere letzte regelmäßige Prüfung konnte ihre Einträge nicht bestätigen. Vorerst liefert sie deine Website weiter aus.       |

Bei einer aktiven Domain klickst du auf **DNS-Einträge anzeigen**, um die zwei Einträge wieder zu sehen.

## Wenn sie aktiv ist {#after}

Sobald eine Domain aktiv ist, prüfen wir ihre Einträge alle paar Stunden erneut.

- **Lass beide Einträge stehen.** Wird der CNAME- oder TXT-Eintrag später bei deinem Anbieter entfernt oder geändert, zeigt die Domain **Prüfungen schlagen fehl**. Eine fehlgeschlagene Prüfung kann ein kurzes Problem sein. Schlagen zwei Prüfungen hintereinander fehl, liefert die Domain deine Website nicht mehr aus und steht wieder auf **DNS ausstehend**. Deine Website ist weiterhin unter ihrer `scnx.site`-Adresse erreichbar, und die Domain wird von selbst wieder aktiv, sobald die Einträge zurück sind, bei der nächsten Prüfung oder wenn du auf **Prüfen** klickst. Das schützt deine Domain davor, von jemand anderem übernommen zu werden, falls sie einmal nicht mehr auf uns zeigt.
- **Eine nicht verifizierte Domain wird nach 14 Tagen freigegeben.** Fügst du eine Domain hinzu, schließt aber die DNS-Einrichtung nie ab, entfernen wir sie nach zwei Wochen, damit sie nicht halb verbunden herumliegt. Das Dashboard zählt die verbleibenden Tage herunter. Du kannst sie jederzeit wieder hinzufügen.

## Eine Domain entfernen {#remove}

Um eine Domain zu trennen, klick neben ihr auf das Papierkorb-Symbol (**Domain entfernen**) und bestätige. Besucher erreichen deine Website dann nicht mehr über diese Adresse. Die DNS-Einträge bei deinem Anbieter kannst du danach löschen.

## Fehlerbehebung {#troubleshooting}

- **Prüfen schlägt immer wieder fehl.** Prüf, dass beide Einträge existieren und ihre Werte genau mit deinem Dashboard übereinstimmen. Achte darauf, dass du nicht den vollen Namen in ein Feld getippt hast, das deine Domain selbst ergänzt. Bei Cloudflare achte darauf, dass der CNAME auf **DNS only** steht (graue Wolke). Warte dann ein paar Minuten und versuch es erneut.
- **Nur der CNAME oder nur der TXT wird gefunden.** Leg den fehlenden an. Beide sind erforderlich.
- **Ich möchte meine Root-Domain nutzen.** Root-Domains wie `example.com` lassen sich nicht verbinden. Nutze stattdessen `www.example.com`. Viele Anbieter haben eine Weiterleitungsoption, die `example.com` auf `www.example.com` schickt.
- **Die Domain ist aktiv, aber die Website erscheint nicht.** Stell sicher, dass deine Website veröffentlicht ist.
- **Es hat funktioniert, dann war die Website über die eigene Domain offline.** Wahrscheinlich wurde ein Eintrag bei deinem Anbieter entfernt oder geändert. Leg beide Einträge wieder an, dann wird die Domain von selbst wieder aktiv. Deine `scnx.site`-Adresse funktioniert die ganze Zeit weiter.
- **"Diese Domain wird bereits verwendet."** Die Domain ist schon mit einer Website verbunden. Jede Domain kann immer nur mit einer Website verbunden sein.
- **Die Buttons fehlen bei mir.** Eigene Domains hinzuzufügen, zu prüfen und zu entfernen braucht Admin-Zugriff. Frag jemanden in deinem Team, der ihn hat.
