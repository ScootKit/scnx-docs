---
sidebar_position: 5.5
title: "Shopify"
description: "Lies und aktualisiere Bestellungen, Produkte, Kunden und Bestände deines Shopify-Shops aus deinen Flows, mit einer App aus dem Shopify Dev Dashboard."
---

# Shopify

Mit dem vorgefertigten Dienst Shopify können deine Flows deinen Shopify-Shop lesen und aktualisieren: eine Bestellung nachschlagen, ein Produkt ändern, einen Bestand anpassen, eine Bestellung versenden. Du verbindest ihn einmal mit einer App, die du im Shopify Dev Dashboard erstellst. SCNX kümmert sich um das Zugriffstoken, und deine Flows sehen weder das Token noch das Secret.

Diese Seite behandelt die Shopify-Verbindung. Zu Verbindungen und vorgefertigten Diensten allgemein siehe [Integrationen](./integrations.md#ready-made-services).

## Was du tun kannst {#what-you-can-do}

- **Bestellungen** - Bestellungen auflisten, eine Bestellung mit ihren Positionen nachschlagen sowie Notiz und Tags einer Bestellung ändern.
- **Produkte und Varianten** - Produkte auflisten, ein Produkt mit seinen Varianten nachschlagen sowie Titel, Status und Tags eines Produkts ändern.
- **Kunden** - Kunden auflisten und einen Kunden nachschlagen. Adressen werden nicht gelesen.
- **Lagerbestände** - den Bestand eines Artikels oder eines Standorts lesen, auf eine Zahl setzen oder erhöhen und verringern.
- **Standorte** - die Standorte deines Shops auflisten. Adressen werden nicht gelesen.
- **Versand** - die Versandaufträge einer Bestellung auflisten und einen davon versenden. Beim Versenden eines Versandauftrags werden alle offenen Artikel darin ausgeliefert. Der Kunde bekommt die Versandmail von Shopify nur, wenn du "Kunden benachrichtigen" auf wahr setzt.

Jede Operation steht mit ihren Eingaben und Ausgaben in der [Referenz der Dienst-Aktionen](/docs/custom-commands/reference/actions/bot-integrations).

## Voraussetzungen {#requirements}

- Ein Shopify-Shop.
- Eine App im Shopify Dev Dashboard, die zur selben Shopify-Organisation gehört wie der Shop. Gehören App und Shop zu verschiedenen Organisationen, antwortet Shopify mit `shop_not_permitted`, und SCNX kann sich nicht verbinden. Eine App, die du selbst für deinen eigenen Shop erstellst, erfüllt das.

Seit 2026 erlaubt Shopify nicht mehr, im Shop-Admin neue eigene Apps mit einem dauerhaften Token zu erstellen. Deshalb nutzt der Shopify-Dienst eine App aus dem Dev Dashboard. Hast du bereits eine ältere eigene App mit dauerhaftem Token, siehe [Ältere Apps mit Token](#legacy-token).

## App erstellen {#create-app}

1. Klicke im Dev Dashboard der Shopify-Organisation, der dein Shop gehört, auf **Create app**.
2. Wähle **Start from Dev Dashboard**.
3. Erstelle eine Version der App und gib ihr diese Zugriffsbereiche (Scopes): `read_orders`, `write_orders`, `read_products`, `write_products`, `read_customers`, `read_inventory`, `write_inventory`, `read_locations`, `read_merchant_managed_fulfillment_orders` und `write_merchant_managed_fulfillment_orders`.
4. Veröffentliche die Version mit **Release**.
5. Klicke auf **Install app** und installiere die App in deinem Shop.
6. Öffne die **Settings** der App und kopiere die **Client ID** und das **Client secret**.

Zwei Dinge brauchen mehr als diese Scopes:

- Bestellungen, die älter als 60 Tage sind, brauchen zusätzlich den Scope `read_all_orders`, den Shopify für die App freigeben muss. Ohne ihn werden diese Bestellungen als nicht gefunden gelesen.
- Um Kundendaten sowie E-Mail und Namen in Bestellungen zu lesen, braucht die App außerdem Zugriff auf geschützte Kundendaten. Beantrage ihn für die App im Dev Dashboard.

Jede Operation nennt in ihrer Beschreibung den Scope, den sie braucht.

## In SCNX verbinden {#connect}

1. Öffne **Integrationen** im Dashboard deines Bots und wähle **Shopify**.
2. Klicke auf **Verbinden**.
3. Fülle die Felder aus:
   - **Shop-Name** - nur der Teil der Admin-Adresse deines Shops vor `.myshopify.com`. Für `acme.myshopify.com` gib `acme` ein. Eine eigene Domain funktioniert nicht.
   - **Client-ID** - aus den Settings der App.
   - **Client-Secret** - aus den Settings der App.

Um das Secret später zu ändern, nutze **Schlüssel ändern**. Dabei werden immer beide Werte erneut abgefragt, weil SCNX gespeicherte Geheimnisse nie anzeigt.

## So funktioniert das Token {#token}

Shopify stellt ein Zugriffstoken aus, das 24 Stunden gültig ist. SCNX fordert es mit deiner Client-ID und deinem Client-Secret an und erneuert es automatisch. Flows sehen weder das Token noch das Secret, und keines von beiden taucht in Logs auf.

## Kundendaten {#customer-data}

:::warning

Bestellungen und Kunden enthalten personenbezogene Daten der Kunden deines Shops, etwa Namen und E-Mail-Adressen. Gib diese Daten nur dort weiter, wo du es beabsichtigst und wo es erlaubt ist. Als Shop-Betreiber gelten deine eigenen Datenschutzpflichten für alles, was ein Flow damit macht.

:::

## Ältere Apps mit Token {#legacy-token}

Hat eine ältere eigene App deines Shops bereits ein dauerhaftes Admin-API-Zugriffstoken, kannst du es ohne den vorgefertigten Dienst nutzen. Erstelle eine eigene Verbindung vom Typ **API-Schlüssel im Header** mit dem Header-Namen `X-Shopify-Access-Token` und der Basisadresse `https://<shop>.myshopify.com`, wobei `<shop>` dein Shop-Name ist. Nutze dann den HTTP-Request-Schritt mit dieser Verbindung.

Die vorgefertigten Shopify-Operationen brauchen die Verbindung mit Client-ID und Client-Secret. Mit einem dauerhaften Token funktionieren sie nicht.

## API-Version {#api-version}

Der Dienst nutzt die Shopify Admin REST API in der Version `2026-04`. SCNX wechselt ungefähr jedes Quartal auf eine neuere Version.

Shopify begrenzt, wie schnell ein Shop aufgerufen werden darf, und antwortet mit `429`, wenn du über dem Limit bist. SCNX beachtet die `Retry-After`-Zeit, die Shopify sendet. Ein Schritt kann trotzdem mit einem abfangbaren Fehler "Rate-Limit erreicht" fehlschlagen. Baue deshalb in Flows, die Shopify oft aufrufen, eine Ersatznachricht ein.

## Fehlerbehebung {#troubleshooting}

- **Die Verbindung zeigt "Neu verbinden nötig".** Shopify hat die Zugangsdaten mit `shop_not_permitted`, `invalid_client` oder `app_not_installed` abgelehnt. Häufige Ursachen: App und Shop liegen in verschiedenen Shopify-Organisationen, das Client-Secret ist falsch oder wurde erneuert, oder die App wurde aus dem Shop deinstalliert. Prüfe die App im Dev Dashboard, nutze dann **Schlüssel ändern** und gib beide Werte erneut ein.
- **SCNX erreicht den Shop nicht.** Der Shop-Name ist falsch. Gib nur den Teil vor `.myshopify.com` ein, ohne `https://` und ohne eigene Domain.
