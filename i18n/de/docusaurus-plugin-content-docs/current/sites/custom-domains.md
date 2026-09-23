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

Jede SCNX-Website hat eine kostenlose Adresse, die auf `scnx.site` endet, etwa `my-community.scnx.site`. Wenn du eine eigene Domain besitzt, kannst du sie verbinden, sodass deine Website unter deiner eigenen Adresse erreichbar ist, zum Beispiel `www.example.com`.

Diese Seite führt durch die ganze Einrichtung. Es ist der kniffligste Teil von Sites, also geh Schritt für Schritt vor, dann klappt es.

## Deine kostenlose Adresse vs. eine eigene Domain {#free-vs-custom}

- **Deine scnx.site-Adresse** funktioniert, sobald du deine Website erstellst. Nichts einzurichten. Du kannst die Endung (zum Beispiel zu `scnx.page` oder `scnx.website`) auch im Bereich **Domains** ändern, und die Änderung wirkt sofort.
- **Eine eigene Domain** ist eine Domain, die dir schon gehört, gekauft bei einem Anbieter wie Cloudflare, Namecheap, GoDaddy, IONOS und so weiter. Um sie zu nutzen, legst du zwei DNS-Einträge bei diesem Anbieter an, damit deine Domain auf unsere Server zeigt.

Du kannst bis zu drei eigene Domains mit einer Website verbinden.

## Die zwei Einträge, die du brauchst {#the-two-records}

Um eine Domain zu verbinden, brauchst du **beide** DNS-Einträge. Einer allein reicht nicht.

| Eintrag | Zweck |
| --- | --- |
| **CNAME** (Routing) | Zeigt deine Domain auf unsere Server, damit wir deine Website ausliefern und ein HTTPS-Zertifikat dafür holen können. Das Ziel ist `sites.scnx.app`. |
| **TXT** (Eigentum) | Belegt, dass die Domain wirklich dir gehört. Er enthält einen einzigartigen Code, der an deine Domain gebunden ist. |

Der Editor zeigt dir für beide Einträge den genauen **Type**, **Name** und das **Target**, jeweils mit einem Kopier-Button. Kopiere die Werte immer aus deinem eigenen Dashboard: der TXT-Eigentumscode ist einzigartig für deine Domain.

:::warning Beide Einträge sind erforderlich
Eine Domain wird erst aktiv, wenn **beide** Einträge, CNAME und TXT, vorhanden sind und sich über DNS verteilt haben. Legst du nur einen an, schlägt die Prüfung weiter fehl und sagt dir, welcher Eintrag noch fehlt.
:::

## Schritt für Schritt {#steps}

1. Öffne im Editor den Bereich **Domains** (dafür brauchst du Website-Admin-Zugriff).
2. Gib unter **Custom domains** deine Domain ein (zum Beispiel `www.example.com`) und klick auf **Add**. Sie erscheint mit einem **Pending DNS**-Abzeichen und zeigt die zwei anzulegenden Einträge.
3. Lass diese Seite offen und melde dich in einem zweiten Tab bei deinem **Domain-Anbieter** an (dort, wo du die Domain gekauft hast oder wo dein DNS verwaltet wird).
4. Lege den **CNAME**-Eintrag und den **TXT**-Eintrag mit den Werten aus deinem Dashboard an. Siehe die Anbieter-Beispiele unten.
5. Gib DNS etwas Zeit zum Aktualisieren, komm dann zurück ins Dashboard und klick auf **Verify**.
6. Werden beide Einträge gefunden, wechselt die Domain auf **Active** und deine Website wird darüber ausgeliefert. HTTPS wird automatisch eingerichtet. Du musst kein Zertifikat kaufen oder installieren.

### Die Einträge bei deinem Anbieter anlegen {#provider-examples}

Die Idee ist überall gleich: lege einen CNAME-Eintrag und einen TXT-Eintrag mit dem Name und dem Target aus deinem Dashboard an. Nur die Beschriftung der Felder ist anders. Hier sind drei gängige Anbieter als Beispiel.

:::tip Root-Domain vs. Subdomain
CNAME-Einträge lassen sich normalerweise nur auf einer Subdomain wie `www.example.com` nutzen, nicht auf der nackten Root `example.com`. `www.example.com` (oder eine andere Subdomain wie `join.example.com`) zu verbinden ist der einfachste Weg. Manche Anbieter, etwa Cloudflare, können einen CNAME auf der Root abflachen; wenn deiner das nicht kann, nutze eine Subdomain.
:::

**Cloudflare**

1. Wähle deine Domain und öffne **DNS → Records**.
2. **Add record → CNAME.** Setze **Name** auf den Namen aus deinem Dashboard (für `www.example.com` ist das `www`) und **Target** auf `sites.scnx.app`.
3. Setze den **Proxy status** auf **DNS only** (graue Wolke, nicht die orange). Das ist wichtig: der orange Proxy würde unsere HTTPS-Einrichtung stören.
4. **Add record → TXT.** Setze **Name** und **Content** auf den TXT-Namen und -Wert aus deinem Dashboard.
5. Speichere beide, geh zurück zu SCNX und klick auf **Verify**.

**Namecheap**

1. Öffne **Domain List → Manage → Advanced DNS**.
2. **Add New Record → CNAME Record.** Trag den Eintragsnamen in **Host** ein (`www`, oder `@` nur, wenn du die Root verbindest und Namecheap das erlaubt) und `sites.scnx.app` in **Value**.
3. **Add New Record → TXT Record.** Trag den TXT-Namen in **Host** und den Code in **Value** ein.
4. Lass TTL auf **Automatic**, speichere beide und klick in SCNX auf **Verify**.

**GoDaddy**

1. Öffne **My Products → Domain → DNS / Manage DNS**.
2. **Add → CNAME.** Trag den Eintragsnamen in **Name** und `sites.scnx.app` in **Value** ein.
3. **Add → TXT.** Trag den TXT-Namen in **Name** und den Code in **Value** ein.
4. Speichere beide und klick in SCNX auf **Verify**.

Jeder andere Anbieter (IONOS, Google Domains, Squarespace, OVH, Porkbun und so weiter) funktioniert genauso: finde, wo du DNS-Einträge verwaltest, und lege einen CNAME und einen TXT mit den Werten aus deinem Dashboard an.

## Prüfen {#verify}

Nachdem du beide Einträge angelegt hast, klick im Bereich Domains auf **Verify**.

- Werden beide Einträge gefunden, siehst du **Your domain is verified and active** und das Abzeichen wechselt auf **Active**.
- Fehlt ein Eintrag, sagt dir die Prüfung, welcher: prüf noch mal den **CNAME**, den **TXT** oder beide und versuch es erneut. Die zwei Einträge haben unterschiedliche Lösungen, es lohnt sich also, zu lesen, welcher genannt wird.

DNS-Änderungen sind nicht sofort da. Meist wirken sie innerhalb weniger Minuten, können aber je nach Anbieter und TTL des Eintrags länger dauern, im langsamsten Fall etwa einen Tag. Geht ein erstes **Verify** nicht durch, warte kurz und versuch es erneut, statt die Einträge zu ändern. Solange die Werte mit dem übereinstimmen, was dein Dashboard zeigt, werden sie gefunden, sobald DNS aufgeholt hat.

## Wenn sie aktiv ist {#after}

Sobald eine Domain aktiv ist, prüfen wir ab und zu weiter, ob sie noch auf uns zeigt.

- **Eine ungeprüfte Domain wird nach 14 Tagen freigegeben.** Fügst du eine Domain hinzu, schließt aber die DNS-Einrichtung nie ab, entfernen wir sie nach zwei Wochen, damit sie nicht halb verbunden herumliegt. Du kannst sie jederzeit wieder hinzufügen.
- **Eine geprüfte Domain, die nicht mehr auf uns zeigt, hört auf auszuliefern.** Wird der CNAME- oder TXT-Eintrag später bei deinem Anbieter entfernt oder geändert, besteht die Domain ihre erneute Prüfung nicht und deine Website wird darüber nicht mehr ausgeliefert. Deine Website ist weiterhin unter ihrer `scnx.site`-Adresse erreichbar, und die eigene Domain funktioniert wieder, sobald die Einträge zurück sind. Das schützt deine Domain davor, von jemand anderem übernommen zu werden, falls sie einmal nicht mehr auf uns zeigt.

## Eine Domain entfernen {#remove}

Um eine Domain zu trennen, öffne den Bereich **Domains**, such die Domain und wähle **Remove domain**. Besucher erreichen deine Website dann nicht mehr über diese Adresse. Die DNS-Einträge bei deinem Anbieter kannst du danach löschen.

## Fehlerbehebung {#troubleshooting}

- **Verify schlägt immer wieder fehl.** Prüf, dass beide Einträge existieren und ihre Werte genau mit deinem Dashboard übereinstimmen. Bei Cloudflare achte darauf, dass der CNAME auf **DNS only** steht (graue Wolke). Warte dann ein paar Minuten und versuch es erneut.
- **Nur der CNAME oder nur der TXT wird gefunden.** Leg den fehlenden an. Beide sind erforderlich.
- **Es hat funktioniert, dann war die Website über die eigene Domain offline.** Wahrscheinlich wurde ein Eintrag bei deinem Anbieter entfernt oder geändert. Leg beide Einträge wieder an, dann prüft sich die Domain von selbst neu. Deine `scnx.site`-Adresse funktioniert die ganze Zeit weiter.
- **Der Bereich Domains ist für mich schreibgeschützt.** Eigene Domains hinzuzufügen, zu prüfen und zu entfernen braucht die Website-Admin-Berechtigung. Frag jemanden in deinem Team, der sie hat.
