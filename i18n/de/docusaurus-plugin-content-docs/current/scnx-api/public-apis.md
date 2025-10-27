---
unlisted: false
---

# SCNX Öffentliche APIs

## Serverstatus-Vorfälle

* Endpoint: GET `https://scnx.app/api/incidents`
* Ruft die aktuellen Serverstatus-Vorfälle von Instatus ab, gibt jedoch zusätzliche Details zurück (wie z. B. detaillierte Updates und Lokalisierungen).
* Für einfachere Daten kannst du die [Instatus API](https://status.scootkit.com/public-api) verwenden.
* Keine Autorisierung erforderlich, aber unterstützt den Header `Authorization: SCNX-Application`. Ohne Autorisierung gelten höhere Ratelimits.

## Benutzerdefinierte Bot-Module

* Endpoint: GET `https://scnx.app/api/scn/modules`
* Gibt Umgebungsdaten der SCNX Dashboard-Umgebung für den Standardbranch (in der Regel der aktuelle stabile Branch) zurück, einschließlich `approximateEnableBotCount`, basierend auf den neuesten Statistikaufrufen.
* Du darfst die Werte des Schlüssels `approximateEnableBotCount` nicht speichern, um historische Diagramme zu erstellen, Nutzungsmuster zu analysieren oder ähnliche Zwecke zu verfolgen, die über die reine Anzeige dieser Informationen für Endbenutzer hinausgehen.
* Der Schlüssel `author` darf nicht verwendet werden, um Eigentumsrechte oder Urheberrechtsinformationen eines Moduls zu bestimmen. Wenn im `author`-Objekt ein Schlüssel `scnxOrgID` vorhanden ist, verwende den Aufruf [Marketplace-Organisation abrufen](#marketplace-org).
* Keine Autorisierung erforderlich, aber unterstützt den Header `Authorization: SCNX-Application`. Ohne Autorisierung gelten höhere Ratelimits.

## Marketplace-Organisation abrufen {#marketplace-org}

* Endpoint: GET `https://scnx.app/api/marketplace/organizations/:id`
* Gibt Daten einer SCNX Marketplace-Organisation zurück.  
  Um Assets abzurufen, verwende:
  * `https://scnx.app/api/marketplace/organizations/:id/dynamic-images`
  * `https://scnx.app/api/marketplace/organizations/:id/modules`
* Keine Autorisierung erforderlich, aber unterstützt den Header `Authorization: SCNX-Application`.
