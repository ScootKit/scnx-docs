# Integrationen

Mit Integrationen können deine eigenen Commands und Abläufe mit anderen Diensten im Internet sprechen: eine API aufrufen, einen Webhook empfangen oder einen vorgefertigten Dienst wie Twitch oder GitHub nutzen.

## Überblick {#overview}

Integrationen bestehen aus vier Teilen:

- **HTTP-Request-Schritt** - ein Schritt im Ablauf, der eine Anfrage an eine externe URL sendet und die Antwort an den Ablauf zurückgibt.
- **Webhooks (Hooks)** - eine öffentliche URL, die deine Abläufe startet, wenn ein externer Dienst Daten dorthin sendet.
- **Verbindungen** - gespeicherte Zugangsdaten (API-Schlüssel, Tokens oder ein OAuth-Login), die SCNX deinen Anfragen hinzufügt, sodass das Geheimnis nie in deinem Ablauf auftaucht.
- **Vorgefertigte Dienste** - Sammlungen vorbereiteter Operationen für beliebte Dienste, damit du die Anfrage nicht selbst bauen musst. Siehe [Vorgefertigte Dienste](#ready-made-services).

## Ausgehende Anfragen {#outgoing-requests}

Für den HTTP-Request-Schritt gelten diese Grenzen:

| Grenze         | Wert                                                                             |
| -------------- | -------------------------------------------------------------------------------- |
| Protokoll      | nur `https`                                                                      |
| Ports          | 443 oder 1024 bis 65535                                                          |
| Timeout        | höchstens 20 Sekunden                                                            |
| Request-Body   | höchstens 1 MB                                                                   |
| Antwort-Body   | höchstens 1 MB; größere Antworten schlagen mit dem Fehler "Antwort zu groß" fehl |
| URL            | kein Benutzername und kein Passwort in der URL                                   |
| Erlaubte Hosts | hängt von deinem Plan ab, siehe [Erlaubte Dienste](#allowed-services)            |

Fehlgeschlagene Anfragen (Timeout, nicht erreichbarer Host, Antwort zu groß, Rate-Limit) kannst du im Ablauf abfangen und mit einer Ersatznachricht reagieren, statt den Ablauf zu beenden.

Pro Server gilt ein Fair-Use-Limit von 120 Anfragen pro Minute je Ziel-Host und 8 gleichzeitigen Anfragen.

## Webhooks {#webhooks}

Ein Webhook gibt dir eine URL, an die externe Dienste Daten senden können. Jede eingehende Anfrage startet die Abläufe, die du dem Hook zugewiesen hast.

Ein Hook arbeitet in einem von zwei Modi:

- **Fire-and-forget** - SCNX nimmt die Anfrage sofort an und führt deine Abläufe danach aus. Der Absender erhält schnell eine Bestätigung und wartet nicht auf deinen Ablauf.
- **Antworten** - der Absender wartet, während dein Ablauf läuft, und dein Ablauf bestimmt die Antwort. Der Ablauf hat 25 Sekunden Zeit zu antworten. Dauert es länger, erhält der Absender einen Timeout.

Eingehende Bodys dürfen bis zu 256 KB groß sein.

### Absender prüfen {#verification}

Nur Anfragen, die die gewählte Prüfung bestehen, starten deine Abläufe. Verfügbare Methoden:

- **Voreinstellungen** für **GitHub**, **Shopify**, **Stripe** und **top.gg**. Wähle die Voreinstellung und füge das Signatur-Geheimnis ein, das dir der Dienst anzeigt. SCNX prüft den Signatur-Header des Dienstes (bei Stripe und top.gg inklusive Zeitstempel).
- **HMAC-Signatur** mit frei wählbarem Header-Namen, Algorithmus (SHA-1, SHA-256 oder SHA-512) und Kodierung, für Dienste, die Anfragen anders signieren.
- **Geheimer Header** oder **Geheimnis in der URL** für Dienste, die nur ein festes Token senden.

Ein Hook mit Voreinstellung, der noch auf sein Geheimnis wartet, nimmt keine Anfragen an.

### Zustellung und Wiederholungen {#delivery}

- Fire-and-forget-Zustellungen werden bis zu **24 Stunden** in einer Warteschlange gehalten. Ist dein Bot offline oder vorübergehend ausgelastet, bleibt die Zustellung in der Warteschlange und wird später erneut versucht.
- Ist dein Bot ausgelastet, verschiebt SCNX die Zustellung und versucht es kurz darauf erneut. Hooks im Antwort-Modus können nicht warten, daher erhält der Absender die Antwort "busy" (HTTP 503) und kann selbst erneut senden.
- Stripe und top.gg wiederholen fehlgeschlagene Zustellungen selbst. Bei Stripe führt SCNX einen Ablauf pro Ereignis-ID 24 Stunden lang nur einmal aus und überspringt die Zustellung eines Ereignisses, das schon verarbeitet wurde. Eine identische Kopie einer schon verarbeiteten Anfrage wird innerhalb von 300 Sekunden nach ihrem Zeitstempel mit HTTP 409 beantwortet. Eine Kopie mit älterem Zeitstempel besteht die Signaturprüfung nicht und bekommt HTTP 401. Siehe [Mit Stripe verkaufen](/de/docs/custom-bot/ccv3/sell-with-stripe#repeated-events).
- Das Zustellungsprotokoll des Hooks zeigt das Ergebnis jeder Anfrage, zum Beispiel zugestellt, verschoben, wiederholt oder abgelehnt.

## Erlaubte Dienste {#allowed-services}

Welche Hosts der HTTP-Request-Schritt und Verbindungen aufrufen dürfen, hängt von deinem Plan ab:

- **Professional und höher** können jeden öffentlichen Host über `https` aufrufen.
- **Alle anderen Pläne** können die unten aufgeführten freigegebenen Dienste aufrufen. Eine Anfrage an einen anderen Host wird mit einem Fehler abgelehnt, der den Host nennt.

Ein `*.` am Anfang bedeutet eine beliebige Subdomain, zum Beispiel deckt `*.myshopify.com` auch `deinshop.myshopify.com` ab.

### Automatisierung {#allowed-automation}

| Host                                                                               | Dienst          |
| ---------------------------------------------------------------------------------- | --------------- |
| `hooks.zapier.com`                                                                 | Zapier          |
| `hook.eu1.make.com`, `hook.eu2.make.com`, `hook.us1.make.com`, `hook.us2.make.com` | Make (Webhooks) |
| `eu1.make.com`, `eu2.make.com`, `us1.make.com`, `us2.make.com`                     | Make (API)      |
| `*.m.pipedream.net`, `api.pipedream.com`                                           | Pipedream       |
| `*.app.n8n.cloud`                                                                  | n8n Cloud       |

### Gaming {#allowed-gaming}

| Host                                                                                                                                                                     | Dienst             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `apis.roblox.com`, `users.roblox.com`, `groups.roblox.com`, `games.roblox.com`, `thumbnails.roblox.com`, `friends.roblox.com`, `badges.roblox.com`, `economy.roblox.com` | Roblox             |
| `api.steampowered.com`, `store.steampowered.com`                                                                                                                         | Steam              |
| `api.mojang.com`, `sessionserver.mojang.com`                                                                                                                             | Minecraft (Mojang) |
| `api.hypixel.net`                                                                                                                                                        | Hypixel            |
| `api.modrinth.com`                                                                                                                                                       | Modrinth           |
| `api.papermc.io`                                                                                                                                                         | PaperMC            |
| `api.opendota.com`                                                                                                                                                       | OpenDota           |
| `api.fortnite-api.com`                                                                                                                                                   | Fortnite API       |
| `ddragon.leagueoflegends.com`                                                                                                                                            | League of Legends  |
| `www.speedrun.com`                                                                                                                                                       | speedrun.com       |
| `api.chess.com`, `lichess.org`                                                                                                                                           | Chess.com, Lichess |
| `api.scryfall.com`                                                                                                                                                       | Scryfall           |

### Communities und Creator {#allowed-creators}

| Host            | Dienst |
| --------------- | ------ |
| `api.twitch.tv` | Twitch |
| `top.gg`        | top.gg |

### Handel und Zahlungen {#allowed-commerce}

| Host                                   | Dienst          |
| -------------------------------------- | --------------- |
| `www.patreon.com`                      | Patreon         |
| `ko-fi.com`                            | Ko-fi           |
| `plugin.tebex.io`, `headless.tebex.io` | Tebex           |
| `api.stripe.com`                       | Stripe          |
| `*.myshopify.com`                      | Shopify         |
| `api.buymeacoffee.com`                 | Buy Me a Coffee |
| `api.gumroad.com`                      | Gumroad         |
| `api.lemonsqueezy.com`                 | Lemon Squeezy   |
| `api.paddle.com`                       | Paddle          |

### Produktivität {#allowed-productivity}

| Host                                          | Dienst        |
| --------------------------------------------- | ------------- |
| `api.github.com`, `raw.githubusercontent.com` | GitHub        |
| `api.notion.com`                              | Notion        |
| `api.airtable.com`                            | Airtable      |
| `sheets.googleapis.com`                       | Google Sheets |
| `api.trello.com`                              | Trello        |
| `api.todoist.com`                             | Todoist       |
| `api.linear.app`                              | Linear        |
| `api.clickup.com`                             | ClickUp       |
| `*.supabase.co`                               | Supabase      |

### Daten und Informationen {#allowed-data}

| Host                                                 | Dienst                     |
| ---------------------------------------------------- | -------------------------- |
| `api.coingecko.com`                                  | CoinGecko                  |
| `api.frankfurter.app`                                | Frankfurter (Wechselkurse) |
| `api.open-meteo.com`, `geocoding-api.open-meteo.com` | Open-Meteo                 |
| `api.openweathermap.org`                             | OpenWeather                |
| `wttr.in`                                            | wttr.in                    |
| `graphql.anilist.co`                                 | AniList                    |
| `api.jikan.moe`                                      | MyAnimeList (Jikan)        |
| `hacker-news.firebaseio.com`                         | Hacker News                |
| `api.nasa.gov`                                       | NASA                       |
| `api.spacexdata.com`                                 | SpaceX                     |
| `en.wikipedia.org`                                   | Wikipedia                  |
| `api.openalex.org`, `api.crossref.org`               | OpenAlex, Crossref         |
| `openlibrary.org`                                    | Open Library               |
| `api.dictionaryapi.dev`                              | Dictionary API             |
| `www.thecocktaildb.com`, `www.themealdb.com`         | TheCocktailDB, TheMealDB   |
| `pokeapi.co`                                         | PokeAPI                    |
| `www.omdbapi.com`, `api.tvmaze.com`                  | OMDb, TVmaze               |
| `itunes.apple.com`, `musicbrainz.org`                | iTunes, MusicBrainz        |
| `official-joke-api.appspot.com`, `api.quotable.io`   | Witze, Zitate              |
| `catfact.ninja`, `dog.ceo`                           | Katzenfakten, Hundebilder  |

Die Liste wächst mit der Zeit. Sie gilt für den HTTP-Request-Schritt und für Verbindungen gleichermaßen.

## Vorgefertigte Dienste {#ready-made-services}

Vorgefertigte Dienste sind vorbereitete Operationen, die im Ablauf-Editor neben dem HTTP-Request-Schritt erscheinen. Du wählst die Operation und füllst ihre Eingaben aus; SCNX baut die Anfrage, fügt deine Zugangsdaten hinzu und liefert das Ergebnis. Dienste mit "Kein Konto nötig" funktionieren ohne Schlüssel. Alle anderen brauchen eine Verbindung, die du einmal im Dashboard anlegst.

Dienste ohne Schlüssel werden von gemeinsamen SCNX-Adressen aus aufgerufen, daher gelten die Rate-Limits des Dienstes für alle Server zusammen. Antwortet ein Dienst mit einem Rate-Limit, schlägt der Schritt mit einem abfangbaren Fehler "Rate-Limit erreicht" fehl.

| Dienst                     | Was du tun kannst                                                                                                                                 | Zugangsdaten                                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Airtable                   | Zeilen aus deinen Bases lesen                                                                                                                     | Persönlicher Zugriffstoken mit Scope `data.records:read` von airtable.com/create/tokens                                                                                                 |
| CoinGecko                  | Coin-Preise, Coin-Details, Top-Coins                                                                                                              | Kostenloser Demo-API-Schlüssel aus dem CoinGecko Developer Dashboard (Pro-Schlüssel funktionieren nicht)                                                                                |
| GitHub                     | Repositories, Issues, Releases und Benutzer lesen; Issues eröffnen                                                                                | Fine-grained Personal Access Token aus den GitHub-Entwicklereinstellungen                                                                                                               |
| Hacker News                | Top- und neueste Stories, einzelne Stories oder Kommentare                                                                                        | Kein Konto nötig                                                                                                                                                                        |
| Hypixel                    | Spielerstatistiken und Online-Status                                                                                                              | API-Schlüssel von developer.hypixel.net (Entwicklungsschlüssel laufen nach wenigen Tagen ab)                                                                                            |
| MyAnimeList (Jikan)        | Anime und Manga suchen, Details, Top-Anime                                                                                                        | Kein Konto nötig                                                                                                                                                                        |
| Minecraft-Konten           | Benutzername zu UUID, Profil und Skin                                                                                                             | Kein Konto nötig                                                                                                                                                                        |
| Open-Meteo Wetter          | Orte finden, aktuelles Wetter, Tagesvorhersage                                                                                                    | Kein Konto nötig                                                                                                                                                                        |
| Roblox (öffentliche Daten) | Gruppen und Ränge eines Benutzers, Avatarbilder, Statistiken von Experiences                                                                      | Kein Konto nötig                                                                                                                                                                        |
| Roblox Open Cloud          | Benutzer, Gruppen mit Rollen und Mitgliedern, Experiences                                                                                         | Open-Cloud-API-Schlüssel von create.roblox.com; Accepted IP Addresses auf `0.0.0.0/0` setzen                                                                                            |
| Steam                      | Profile, was jemand spielt, besessene Spiele                                                                                                      | Web-API-Schlüssel von steamcommunity.com/dev/apikey                                                                                                                                     |
| Steam-Store                | Preis, Beschreibung und Veröffentlichungsdatum eines Spiels                                                                                       | Kein Konto nötig                                                                                                                                                                        |
| Stripe                     | Kunden, Zahlungen, Abbuchungen und Guthaben lesen; Checkout-Sitzungen, Zahlungslinks und Erstattungen erstellen und Abläufe bei Zahlungen starten | Eingeschränkter Schlüssel (`rk_...`) mit den nötigen Berechtigungen; nicht deinen geheimen Schlüssel verwenden. Siehe [Mit Stripe verkaufen](/de/docs/custom-bot/ccv3/sell-with-stripe) |
| Todoist                    | Aufgaben auflisten, hinzufügen und abschließen                                                                                                    | API-Token aus den Todoist-Einstellungen unter Integrationen, Entwickler                                                                                                                 |
| top.gg                     | Votes prüfen, Statistiken lesen, Abläufe bei neuen Votes starten                                                                                  | API-Token unter "Integrations & API" in deinem top.gg-Projekt (v1-API)                                                                                                                  |
| Twitch                     | Benutzer, Streams, Kanäle, Clips, Abonnentenzahl                                                                                                  | Beim Anlegen der Verbindung mit Twitch anmelden                                                                                                                                         |

## Neuen Dienst anfragen {#requesting-a-service}

Dein Dienst steht nicht in der Liste? Wende dich an den SCNX-Support und nenne den Namen des Dienstes und den API-Host, den du aufrufen möchtest. Professional-Pläne brauchen keine Freigabe, da sie jeden öffentlichen Host aufrufen können.
