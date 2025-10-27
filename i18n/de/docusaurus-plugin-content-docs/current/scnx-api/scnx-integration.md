---
unlisted: false
---

# SCNX Integration

Verwende die SCNX-Integration, um den Nutzern deines Bots zu ermöglichen, ihre Konfiguration einfach zu bearbeiten und ihren Bot anzupassen – direkt im SCNX Dashboard, mit nur wenigen Zeilen Code.

## Veröffentlichung

Sobald du ein Icon, eine Beschreibung und einen Endpoint festgelegt hast, kannst du deine App veröffentlichen.  
Für Test-Apps wähle bitte den Veröffentlichungstyp „privat“. Andernfalls siehe die Tabelle unten.

:::info
Das Ändern des Veröffentlichungstyps entfernt keine bestehenden Server, die deine App bereits integriert haben.
:::

| Typ             | Beschreibung                                                                                                                                         | Öffentliche Sichtbarkeit                                                                                                                   | Preisgestaltung                          |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| Private         | Gedacht für private oder Test-Apps. Nur du kannst diese App zu Servern hinzufügen, die dir gehören.                                                  | Für niemanden sichtbar                                                                                                                     | Kostenlos                                |
| Custom-Solution | Gedacht für Produkte, die für bestimmte Personen entwickelt wurden. Du kannst Lizenzschlüssel generieren, mit denen Nutzer deine Integration hinzufügen können. | Dein App-Name, deine Beschreibung und dein Icon werden auf deiner Organisationsseite angezeigt, falls du diese Funktion in den Einstellungen aktiviert hast. | Kontaktiere sales@scootkit.com für Details. |
| Public          | Gedacht für öffentliche Apps mit statischer, server-spezifischer Konfiguration. Die SCNX-Integration kann eine zusätzliche Möglichkeit zur Einrichtung des Bots bieten. | Jeder kann deine App hinzufügen. Deine App kann in der App-Liste hervorgehoben werden.                                                    | Kostenlos                                |

## Webhooks

Wir senden (`POST`) an deinen Webhook jedes Mal, wenn eine Ressource aktualisiert wird oder Informationen von dir angefordert werden.

### Definition

#### Header

| Header               | Beschreibung                                                                                                                                                                                       | Verwendung                                                                                                                                                                                       |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SCNX-Webhook-Signing | Signierter Wert des Bodys (mithilfe einer Hash-basierten Authentifizierung [HMAC](https://de.wikipedia.org/wiki/Hash-based_message_authentication_code) mit [SHA-2](https://de.wikipedia.org/wiki/SHA-2)) | Berechne ein HMAC mit der SHA256-Hashfunktion, verwende dabei dein Webhook-Secret als Schlüssel und den gesamten Text-Body als Nachricht. Überprüfe, ob die Signatur in diesem Header übereinstimmt. |

#### Body

Format: `text/plain`. Besteht aus drei Komponenten in einer Zeichenkette:

1. Der Zeitstempel, zu dem die Antwort generiert wurde  
2. Ein „,“ Zeichen  
3. Der eigentliche JSON-Body (siehe Tabelle unten)

| Schlüssel | Beschreibung |
|-----------|---------------|
| event | Name des Events oder der Anfrage |
| guildID? | ID der zugehörigen Guild |
| body | Inhalt der Anfrage, abhängig vom Event-Typ |

### Installations-Events

#### Server installiert

Event-Name: `server-install`  
Zusätzlicher Body: `serverID`

#### Server entfernt

Event-Name: `server-removal`  
Zusätzlicher Body: `serverID`

### Konfigurations-Events

#### Konfigurationsdateien abrufen

Event-Name: `get-config-files`  
Zusätzlicher Body: keiner  
Rückgabe: Array von [Konfigurationsdateien](#config-files)

#### Konfigurationsdatei abrufen

Event-Name: `get-config-file`  
Zusätzlicher Body:  
* `filename`: Name der angeforderten Datei

Rückgabe:  

#### Konfigurationsdatei-Inhalt speichern

Event-Name: `put-config-file-content`

#### Konfiguration neu laden

Event-Name: `reload-config`

### Prozessverwaltungs-Events

#### Status abrufen

Event-Name: `status`

#### Bot starten

Event-Name: `start`

#### Bot stoppen

Event-Name: `stop`

## CustomBot API

Basis-URL: `https://scnx.app/api/marketplace-api/`

Um deine Anfrage zu autorisieren, setze den Header `Authorization <APIToken>`.  
Apps, die noch nicht veröffentlicht sind oder die CustomBot-API nicht aktiviert haben, können auf diesen Endpoint nicht zugreifen.

### Aktuelle Anwendung abrufen

GET `https://scnx.app/api/marketplace-api/`

Gibt den aktuellen API-Body zurück: 

```json
{
  "id": "52012f95-5e99-4728-b52f-ab8b69bbeabe",
  "name": "test2",
  "visibility": "PUBLIC",
  "iconURL": "https://scnx-cdn.scootkit.net/1748542003240-QSVoqzp5mInUg6t4xgzFYzTKPSO5pdW7CGGCahEsbYTxIrcX.jpeg",
  "description": "test",
  "features": [
    "CUSTOM_BOT_API"
  ],
  "organizationID": 1
}
