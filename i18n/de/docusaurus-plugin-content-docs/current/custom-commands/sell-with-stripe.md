---
sidebar_position: 6
title: "Mit Stripe verkaufen"
description: "Verkaufe auf deinem Discord-Server mit Stripe Checkout: Ein Mitglied bezahlt bei Stripe, und dein Flow liefert die Bestellung aus."
---

# Mit Stripe verkaufen

Verkaufe Dinge auf deinem Discord-Server mit Stripe Checkout: Ein Mitglied wählt ein Produkt, bezahlt auf der Seite von Stripe, und dein Ablauf liefert die Bestellung, sobald Stripe die Zahlung bestätigt. Bezahlt wird auf der Seite von Stripe, deshalb sieht SCNX nie Kartendaten.

Diese Anleitung nutzt den [fertigen Stripe-Dienst](/de/docs/custom-commands/integrations#ready-made-services) und einen Stripe-Webhook. Das Beispielmodul **Stripe Shop** enthält einen vollständigen, funktionierenden Shop, den du installieren und anpassen kannst.

## Bevor du startest {#before-you-start}

- Du brauchst ein Stripe-Konto. Stripe hat einen Testmodus mit Testkarten und Spielgeld: Baue und teste zuerst alles im Testmodus mit einem Testmodus-Schlüssel und wechsle erst zu einem Live-Schlüssel, wenn der ganze Shop funktioniert.
- Du solltest die Grundlagen der [Integrationen](/de/docs/custom-commands/integrations) kennen: Verbindungen speichern deinen Schlüssel, Hooks empfangen die Ereignisse von Stripe.

## Eingeschränkten Schlüssel erstellen {#restricted-key}

Öffne im Stripe-Dashboard **Entwickler**, dann **API-Schlüssel**, und erstelle einen eingeschränkten Schlüssel (`rk_...`). Vergib nur die Berechtigungen, die deine Abläufe nutzen:

| Aktion                     | Stripe-Berechtigung | Stufe     |
| -------------------------- | ------------------- | --------- |
| Kunden abrufen             | Customers           | Lesen     |
| Zahlungen abrufen          | Charges             | Lesen     |
| Zahlungsvorgänge abrufen   | PaymentIntents      | Lesen     |
| Guthaben abrufen           | Balance             | Lesen     |
| Checkout-Sitzung erstellen | Checkout Sessions   | Schreiben |
| Checkout-Sitzung abrufen   | Checkout Sessions   | Lesen     |
| Checkout-Sitzung beenden   | Checkout Sessions   | Schreiben |
| Zahlungslink erstellen     | Payment Links       | Schreiben |
| Erstattung erstellen       | Refunds             | Schreiben |

Checkout-Sitzung abrufen liest nur, dafür reicht Lesen bei Checkout Sessions. Erstellen und Beenden brauchen Schreiben.

:::warning
Nutze nie deinen geheimen Schlüssel (`sk_...`). Ein Schlüssel mit Schreibrechten kann Zahlungen und Erstattungen in deinem Stripe-Konto erstellen, vergib also nur, was der Shop braucht. Halte den Shop-Schlüssel getrennt von einem reinen Lese-Schlüssel: Erstelle eine zweite Stripe-Verbindung für den Shop und gib ihr einen Namen, der das sagt, zum Beispiel "Stripe Shop (Schreiben)". Deine reinen Lese-Abläufe nutzen dann weiter den Lese-Schlüssel.
:::

## Stripe verbinden {#connect}

1. Erstelle auf der Seite Integrationen eine Verbindung für den Dienst **Stripe** und füge den eingeschränkten Schlüssel ein.
2. Lege im Auslöser eines Ablaufs (zum Beispiel **Checkout abgeschlossen**) direkt dort einen Stripe-Webhook an. SCNX zeigt dir seine URL. Der Hook nimmt keine Anfrage an, bis du das Signatur-Geheimnis (`whsec_...`) einfügst, das Stripe für den Endpunkt anzeigt.
3. Öffne im Stripe-Dashboard **Entwickler**, dann **Webhooks**, und füge einen Endpunkt mit dieser URL hinzu. Erstelle ihn mit der aktuellen API-Version: Webhook-Daten nutzen die API-Version des Endpunkts, nicht die Version, die SCNX für seine eigenen Anfragen an Stripe verwendet.
4. Wähle genau diese Ereignistypen aus:
   - `checkout.session.completed`
   - `checkout.session.async_payment_succeeded`
   - `checkout.session.async_payment_failed`
   - `checkout.session.expired`
   - `charge.refunded`
   - `charge.dispute.created`

## Der Shop-Ablauf {#shop-flow}

Das Beispielmodul **Stripe Shop** hat sechs Abläufe. So läuft eine Bestellung:

1. `open-shop` ist ein Slash-Befehl, der ein Dropdown mit Produkten postet.
2. `buy` läuft, wenn ein Mitglied ein Produkt wählt. Er speichert die Bestellung unter einer erzeugten Bestellnummer, führt **Checkout-Sitzung erstellen** mit der Bestellnummer als **Referenz** aus, speichert die Sitzungs-ID bei der Bestellung und schickt den Zahlungslink privat an den Käufer.
3. Der Käufer bezahlt auf der Seite von Stripe.
4. `order-paid` startet mit dem Auslöser **Checkout abgeschlossen**. Er macht nur weiter, wenn der **Zahlungsstatus** `paid` ist, und ruft den gemeinsamen Ablauf `fulfil-order` auf.
5. `order-paid-later` startet mit dem Auslöser **Verzögerte Zahlung erfolgreich** und ruft ebenfalls `fulfil-order` auf. Das deckt Zahlungsarten ab, die erst später bestätigt werden.
6. `fulfil-order` sucht die Bestellung über ihre Bestellnummer, stoppt, wenn die Sitzung, der Betrag oder die Währung des Ereignisses nicht zur Bestellung passen oder sie schon erfüllt wurde, speichert die Zahlungsvorgang-ID (`pi_...`), öffnet einen privaten Ticket-Thread für den Käufer und deine Team-Rolle und benachrichtigt das Team.
7. `mark-delivered` ist ein Button in diesem Thread. Er markiert die Bestellung als abgeschlossen und bittet den Käufer um eine Bewertung.

Das solltest du beim Bauen eigener Abläufe wissen:

- Eine Sitzung und ein Zahlungslink haben eine Position. Sende einen Warenkorb als eine Summe mit einem beschreibenden Namen, zum Beispiel "3 Artikel: Sticker-Paket, T-Shirt".
- **Läuft ab am** ist optional. Wenn du es setzt, muss es zwischen 30 Minuten und 24 Stunden in der Zukunft liegen. Berechne es einmal im Ablauf und speichere es bei der Bestellung.
- Wenn das Ticket nicht erstellt werden kann, nachdem die Bestellung als bezahlt markiert wurde, zum Beispiel weil dem Bot die Berechtigung zum Erstellen von Threads fehlt, versucht das Beispiel es nicht erneut. Die Bestellung bleibt bezahlt. Prüfe die Berechtigungen deines Bots und liefere diese Bestellung dann von Hand.

## Nur über den Webhook liefern {#fulfil-on-webhook}

Liefere eine Bestellung nie, nur weil der Käufer deinen Erfolgslink erreicht hat. Jeder kann diesen Link öffnen. Liefere nur, wenn der Webhook von Stripe dir sagt, dass die Zahlung durchgegangen ist.

- **Checkout abgeschlossen** kommt auch für Zahlungen, die noch nicht bezahlt sind. Prüfe den **Zahlungsstatus**: Er ist `paid` bei Karten und `unpaid` bei verzögerten Zahlungsarten wie Überweisungen.
- Eine verzögerte Zahlung, die später erfolgreich ist, kommt mit **Verzögerte Zahlung erfolgreich** (Stripe-Ereignistyp `checkout.session.async_payment_succeeded`). Liefere dort. **Verzögerte Zahlung fehlgeschlagen** kommt, wenn sie nicht klappt.
- Prüfe den gespeicherten Bestellstatus, nicht den Status der Sitzung: Stoppe, wenn dein Bestelldatensatz sagt, dass die Bestellung schon erfüllt wurde.
- Prüfe immer, dass die **Sitzungs-ID** des Ereignisses der Sitzung entspricht, die bei deiner Bestellung gespeichert ist, und dass **Gesamtbetrag** und **Währung** zur Bestellung passen. Die Bestellnummer (die Client-Referenz) kann ein Käufer selbst setzen: Jeder kann sie als URL-Parameter an einen beliebigen Zahlungslink deines Stripe-Kontos hängen, einen günstigen Preis zahlen und eine teure Bestellung nennen. Der Ablauf `fulfil-order` im Beispiel macht diese Prüfungen.
- Zahlungen über einen Zahlungslink, der mit der Aktion **Zahlungslink erstellen** angelegt wurde, lösen ebenfalls **Checkout abgeschlossen** aus. Zu so einer Zahlung ist bei keiner Bestellung eine Sitzung gespeichert, die Prüfungen oben stoppen sie also.

## Wiederholte Ereignisse {#repeated-events}

SCNX führt einen Ablauf pro Stripe-Ereignis-ID 24 Stunden lang nur einmal aus, für jeden Stripe-Webhook. Stripe wiederholt eine fehlgeschlagene Zustellung mit einer neuen Signatur, und SCNX erkennt die Ereignis-ID trotzdem. Ein erneutes Senden ("Resend") aus dem Stripe-Dashboard innerhalb von 24 Stunden gilt als Duplikat und wird ignoriert, sobald ein Ablauf das Ereignis verarbeitet hat. Ein Ereignis, das ankam, während kein Ablauf zuhörte, zählt nicht, du kannst es also erneut senden, sobald der Ablauf aktiv ist.

Speichere trotzdem die **Ereignis-ID** bei der Bestellung und prüfe den gespeicherten Bestellstatus, damit ein wiederholtes Ereignis nie eine Bestellung doppelt erfüllt.

## Wiederholungen und Doppelklicks {#idempotency}

Wenn du innerhalb von 24 Stunden dieselben Eingaben noch einmal an **Checkout-Sitzung erstellen** oder **Erstattung erstellen** sendest (bei einer Checkout-Sitzung gehört dieselbe Bestellnummer dazu), bekommst du dasselbe Ergebnis: dieselbe Checkout-Sitzung, dieselbe Erstattung.

- Für eine neue Checkout-Sitzung nutze eine neue Bestellnummer. Der Ablauf `buy` im Beispiel erzeugt bei jeder Auswahl eine neue Bestellnummer, zwei Auswahlen ergeben also zwei Bestellungen und zwei bezahlbare Sitzungen.
- Um denselben Betrag absichtlich zweimal zu erstatten, ändere eine Eingabe, zum Beispiel den **Grund** oder einen Metadaten-Wert.

## Erstattungen und Streitfälle {#refunds-disputes}

Metadaten und die Client-Referenz-ID einer Checkout-Sitzung erreichen die Zahlung (Charge) nicht. Wenn eine Erstattung oder ein Streitfall ankommt, findest du die Bestellung nicht über ihre Bestellnummer. Deshalb:

1. Speichere beim Abschluss der Zahlung die Zahlungsvorgang-ID (`pi_...`, aus **Zahlungsvorgang-ID**) bei der Bestellung. Das Beispiel macht das in `fulfil-order`.
2. Erstatte mit **Erstattung erstellen** und dieser Zahlungsvorgang-ID.
3. Suche die Bestellung bei **Zahlung erstattet** und **Streitfall eröffnet** über die **Zahlungsvorgang-ID**.

**Zahlung erstattet** liefert den Betrag, den erstatteten Betrag und ob vollständig erstattet wurde, aber keinen Erstattungsgrund. Nur **Streitfall eröffnet** hat einen **Grund**.

## Testen {#testing}

- In den Testläufen des Ablauf-Editors werden die Stripe-Schreibaktionen nicht an Stripe gesendet. Sie liefern Beispielwerte, damit du den Rest des Ablaufs testen kannst. Um das echte Verhalten zu testen, nutze einen Testmodus-Schlüssel und führe den Befehl wirklich aus.
- Mit der [Stripe CLI](https://docs.stripe.com/stripe-cli) kannst du Testereignisse an deinen Endpunkt senden, zum Beispiel `stripe trigger checkout.session.completed`.
- Erstelle den Webhook-Endpunkt mit der aktuellen API-Version, denn Webhook-Daten folgen der Version des Endpunkts, nicht der, die SCNX für seine Anfragen festlegt.
- Bezahle mit den Testkarten von Stripe. Nutze eine verzögerte Zahlungsart, um den Weg **Verzögerte Zahlung erfolgreich** zu testen.

## Fehlerbehebung {#troubleshooting}

- **Der Fehlercode `MISSING_PERMISSIONS`**: Der Schlüssel kann lesen, aber nicht schreiben. Der Fehler nennt die fehlende Berechtigung. Bearbeite den eingeschränkten Schlüssel im Stripe-Dashboard und vergib sie, siehe [Eingeschränkten Schlüssel erstellen](#restricted-key).
- **Der Webhook lehnt jedes Ereignis ab**: Der Hook wartet noch auf sein Signatur-Geheimnis. Füge das `whsec_...`-Geheimnis des Endpunkts in den Hook ein.
- **Ereignisse starten keine Abläufe**: Prüfe, ob der Ereignistyp am Endpunkt ausgewählt ist und der Ablauf aktiv ist.
- **Ein Ereignis kam an, während kein Ablauf zuhörte**: Sende es aus dem Stripe-Dashboard erneut, sobald der Ablauf aktiv ist. SCNX zählt so ein Ereignis nicht als verarbeitet. Ereignisse, die älter sind als Stripes Wiederholungszeitraum, wurden nicht mehr wiederholt, sende auch diese erneut.
- **Der Bot war offline**: Stripe wiederholt, und SCNX hält Ereignisse bis zu 24 Stunden vor. Die Abläufe laufen, sobald der Bot wieder da ist.
