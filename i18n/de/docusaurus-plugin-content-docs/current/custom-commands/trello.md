---
sidebar_position: 5.6
title: "Trello"
description: "Lies Boards, Listen und Karten deines Trello-Kontos und erstelle, ändere und verschiebe Karten aus deinen Flows, mit deinem eigenen Trello-API-Schlüssel und Token."
---

# Trello

Mit dem vorgefertigten Dienst Trello können deine Flows mit deinen Trello-Boards arbeiten: eine Karte nachschlagen, eine Karte erstellen, sie in eine andere Liste verschieben, einen Kommentar hinzufügen. Du verbindest ihn einmal mit einem API-Schlüssel und einem Token, die du selbst in deinem eigenen Trello-Konto erstellst. SCNX hat keine eigene Trello-App, und deine Flows sehen weder den Schlüssel noch das Token.

Diese Seite behandelt die Trello-Verbindung. Zu Verbindungen und vorgefertigten Diensten allgemein siehe [Integrationen](./integrations.md#ready-made-services).

## Was du tun kannst {#what-you-can-do}

- **Boards** - die Boards auflisten, die du öffnen kannst, und ein Board nachschlagen.
- **Listen** - die Listen eines Boards auflisten.
- **Karten** - die Karten eines Boards oder einer Liste auflisten, eine Karte nachschlagen, eine Karte erstellen, eine Karte ändern, eine Karte in eine andere Liste verschieben und eine Karte archivieren.
- **Labels** - die Labels eines Boards auflisten.
- **Board-Mitglieder** - die Mitglieder eines Boards auflisten.
- **Kommentare** - die Kommentare einer Karte auflisten und einen Kommentar hinzufügen.

Jede Operation steht mit ihren Eingaben und Ausgaben in der [Referenz der Dienst-Aktionen](/docs/custom-commands/reference/actions/bot-integrations).

Nicht enthalten: Webhook-Auslöser (ein Flow kann nicht starten, wenn sich eine Karte ändert), Power-Up-Funktionen, Board-Import und Enterprise-Endpunkte.

## Voraussetzungen {#requirements}

- Ein Trello-Konto, das die Boards öffnen kann, die du nutzen möchtest.
- Dein eigener API-Schlüssel und dein eigenes Token.

SCNX hat keine eigene Trello-App. Schlüssel und Token gehören dir, deshalb gelten die Trello-Limits nur für dich und nicht für andere SCNX-Nutzer.

## App und API-Schlüssel erstellen {#create-app}

1. Öffne `https://trello.com/apps/admin` und erstelle ein neues Power-Up oder eine neue Integration.
2. Wähle **My app doesn't use Power-Up capabilities**.
3. Öffne den Tab **API key** und kopiere den **API-Schlüssel**.

Das API-Secret brauchst du nicht.

## Token erstellen {#create-token}

1. Öffne diese Adresse in deinem Browser und ersetze `YOUR_API_KEY` durch deinen API-Schlüssel:

   ```
   https://trello.com/1/authorize?expiration=never&scope=read,write&response_type=token&name=SCNX&key=YOUR_API_KEY
   ```

2. Klicke auf **Allow** (Zulassen) und kopiere das Token, das Trello anzeigt.

Warum diese Werte:

- `scope=read,write` erlaubt Flows, deine Boards zu lesen und zu ändern. Der Bereich `account` wird nicht angefordert.
- `expiration=never` hält das Token gültig, bis du es entfernst. Eine kürzere Laufzeit würde dazu führen, dass die Verbindung nicht mehr funktioniert, sobald das Token abläuft.

Das Token kann jedes Board lesen und ändern, das dein Trello-Konto öffnen kann. Behandle es so vertraulich wie ein Passwort.

## In SCNX verbinden {#connect}

1. Öffne **Integrationen** im Dashboard deines Bots und wähle **Trello**.
2. Klicke auf **Verbinden**.
3. Fülle die Felder aus:
   - **API-Schlüssel** - der Schlüssel aus dem Tab API key.
   - **Token** - das Token, das du nach dem Klick auf Allow kopiert hast.

Füge nur die Werte ein, keine Adresse und nicht `key=` oder `token=`.

Um einen Wert später zu ändern, nutze **Schlüssel ändern**. Es fragt immer wieder nach beiden Werten, weil SCNX gespeicherte Geheimnisse nie anzeigt.

## Limits {#limits}

Trello erlaubt 300 Anfragen pro 10 Sekunden je API-Schlüssel und 100 Anfragen pro 10 Sekunden je Token. Ein Schritt, der das Limit überschreitet, schlägt mit einem abfangbaren Fehler "rate limited" fehl.

Muss Trello in einem Zeitfenster zu viele Anfragen ablehnen (mehr als 200), sperrt es den Schlüssel, bis das Zeitfenster endet. Halte Schleifen kurz und baue zwischen den Anfragen einen Warteschritt ein.

## Bedingungen {#terms}

:::warning

Schlüssel und Token gehören zu deiner eigenen Vereinbarung mit Atlassian, dem Unternehmen hinter Trello. SCNX verkauft oder teilt keinen Trello-Zugriff. Nutze nur Boards und Daten, die du automatisieren darfst.

:::

## Zugriff widerrufen {#revoke}

Um den Zugriff zu beenden, entferne das Token unter den autorisierten Apps in den Einstellungen deines Trello-Kontos und lösche anschließend die Verbindung in SCNX. Beim Löschen der Verbindung in SCNX werden der gespeicherte Schlüssel und das Token entfernt.

## Fehlerbehebung {#troubleshooting}

- **Ein Schritt schlägt fehl und Trello hat die Verbindung abgelehnt (Status 401).** Trello hat Schlüssel und Token nicht akzeptiert. Häufige Ursachen: Schlüssel und Token wurden vertauscht oder einer von beiden ist falsch, statt des Tokens wurde das API-Secret eingefügt, das Token wurde ohne den Bereich `write` erstellt und ein Schritt will schreiben, oder das Trello-Konto des Tokens kann das Board nicht öffnen.
- **Ein Schritt schlägt weiter fehl, obwohl du das Problem in Trello behoben hast.** Ein falscher Wert markiert die Verbindung nicht automatisch als "Neu verbinden nötig". Öffne die Verbindung, klicke auf **Schlüssel ändern** und gib sowohl den API-Schlüssel als auch das Token erneut ein. SCNX zeigt gespeicherte Geheimnisse nie an, deshalb werden immer beide Werte abgefragt.
- **Ein Schritt schlägt mit "rate limited" fehl.** Siehe [Limits](#limits).
