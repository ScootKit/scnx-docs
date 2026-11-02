---
sidebar_position: 5
title: "Integrations"
description: "Let your flows talk to other services - HTTP requests, webhooks, stored connections and ready-made services such as Twitch or GitHub."
---

# Integrations

Integrations let your custom commands and flows talk to other services on the internet: call an API, receive a webhook, or use a ready-made service such as Twitch or GitHub.

## Overview {#overview}

Integrations consist of four parts:

- **HTTP request step** - a flow step that sends a request to an external URL and gives the response back to the flow.
- **Webhooks (hooks)** - a public URL that starts your flows when an external service sends data to it.
- **Connections** - stored credentials (API keys, tokens or an OAuth login) that SCNX adds to your requests, so the secret never appears in your flow.
- **Ready-made services** - collections of prepared operations for popular services, so you do not have to build the request yourself. See [Ready-made services](#ready-made-services).

## Outgoing requests {#outgoing-requests}

The HTTP request step is subject to these limits:

| Limit         | Value                                                                 |
| ------------- | --------------------------------------------------------------------- |
| Protocol      | `https` only                                                          |
| Ports         | 443 or 1024 to 65535                                                  |
| Timeout       | 20 seconds at most                                                    |
| Request body  | 1 MB at most                                                          |
| Response body | 1 MB at most; larger responses fail with a "response too large" error |
| URL           | No username or password in the URL                                    |
| Which hosts   | Depends on your plan, see [Allowed services](#allowed-services)       |

Requests that fail (timeout, unreachable host, response too large, rate limit) can be caught in the flow, so you can react with a fallback message instead of letting the flow stop.

Each server has a fair-use limit of 120 requests per minute per target host and 8 requests at the same time.

## Webhooks {#webhooks}

A webhook gives you a URL that external services can send data to. Every incoming request starts the flows you attached to the hook.

A hook works in one of two modes:

- **Fire-and-forget** - SCNX accepts the request right away and runs your flows afterwards. The sender gets a quick confirmation and does not wait for your flow.
- **Respond** - the sender waits while your flow runs, and your flow decides what the answer is. The flow has 25 seconds to answer. If it takes longer, the sender receives a timeout.

Incoming bodies can be up to 256 KB.

### Verifying senders {#verification}

Only requests that pass the check you chose start your flows. Available methods:

- **Presets** for **GitHub**, **Shopify**, **Stripe** and **top.gg**. Pick the preset and paste the signing secret the service shows you. SCNX checks the signature header the service sends (for Stripe and top.gg including the timestamp).
- **HMAC signature** with a header name, algorithm (SHA-1, SHA-256 or SHA-512) and encoding of your choice, for services that sign requests in another way.
- **Secret header** or **secret in the URL** for services that only send a fixed token.

A hook with a preset that still waits for its secret does not accept any request.

### Delivery and retries {#delivery}

- Fire-and-forget deliveries are queued for up to **24 hours**. If your bot is offline or temporarily busy, the delivery stays in the queue and is tried again later.
- If your bot is busy, SCNX defers the delivery and tries again shortly. Respond hooks cannot wait, so the sender receives a "busy" answer (HTTP 503) and can retry on its own.
- Stripe and top.gg retry failed deliveries themselves. For Stripe, SCNX runs a flow once per event ID for 24 hours and skips a delivery of an event that was already handled. An identical copy of a request that was already handled, within 300 seconds of its timestamp, is answered with HTTP 409. A copy with an older timestamp fails the signature check and gets HTTP 401. See [Sell with Stripe](/docs/custom-commands/sell-with-stripe#repeated-events).
- The delivery log of the hook shows the outcome of every request, for example delivered, deferred, replayed or refused.

## Allowed services {#allowed-services}

Which hosts the HTTP request step and connections may call depends on your plan:

- **Professional and above** can call any public host over `https`.
- **All other plans** can call the approved services listed below. A request to any other host is refused with an error that names the host.

A `*.` at the start of a name means any subdomain, for example `*.myshopify.com` covers `yourshop.myshopify.com`.

### Automation {#allowed-automation}

| Host                                                                               | Service         |
| ---------------------------------------------------------------------------------- | --------------- |
| `hooks.zapier.com`                                                                 | Zapier          |
| `hook.eu1.make.com`, `hook.eu2.make.com`, `hook.us1.make.com`, `hook.us2.make.com` | Make (webhooks) |
| `eu1.make.com`, `eu2.make.com`, `us1.make.com`, `us2.make.com`                     | Make (API)      |
| `*.m.pipedream.net`, `api.pipedream.com`                                           | Pipedream       |
| `*.app.n8n.cloud`                                                                  | n8n Cloud       |

### Gaming {#allowed-gaming}

| Host                                                                                                                                                                     | Service            |
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

### Communities and creators {#allowed-creators}

| Host            | Service |
| --------------- | ------- |
| `api.twitch.tv` | Twitch  |
| `top.gg`        | top.gg  |

### Commerce and payments {#allowed-commerce}

| Host                                   | Service         |
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

### Productivity {#allowed-productivity}

| Host                                          | Service       |
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

### Data and information {#allowed-data}

| Host                                                 | Service                      |
| ---------------------------------------------------- | ---------------------------- |
| `api.coingecko.com`                                  | CoinGecko                    |
| `api.frankfurter.app`                                | Frankfurter (exchange rates) |
| `api.open-meteo.com`, `geocoding-api.open-meteo.com` | Open-Meteo                   |
| `api.openweathermap.org`                             | OpenWeather                  |
| `wttr.in`                                            | wttr.in                      |
| `graphql.anilist.co`                                 | AniList                      |
| `api.jikan.moe`                                      | MyAnimeList (Jikan)          |
| `hacker-news.firebaseio.com`                         | Hacker News                  |
| `api.nasa.gov`                                       | NASA                         |
| `api.spacexdata.com`                                 | SpaceX                       |
| `en.wikipedia.org`                                   | Wikipedia                    |
| `api.openalex.org`, `api.crossref.org`               | OpenAlex, Crossref           |
| `openlibrary.org`                                    | Open Library                 |
| `api.dictionaryapi.dev`                              | Dictionary API               |
| `www.thecocktaildb.com`, `www.themealdb.com`         | TheCocktailDB, TheMealDB     |
| `pokeapi.co`                                         | PokeAPI                      |
| `www.omdbapi.com`, `api.tvmaze.com`                  | OMDb, TVmaze                 |
| `itunes.apple.com`, `musicbrainz.org`                | iTunes, MusicBrainz          |
| `official-joke-api.appspot.com`, `api.quotable.io`   | Jokes, quotes                |
| `catfact.ninja`, `dog.ceo`                           | Cat facts, dog pictures      |

The list grows over time. It applies to the HTTP request step and to connections alike.

## Ready-made services {#ready-made-services}

Ready-made services are prepared operations that appear in the flow editor next to the HTTP request step. You pick the operation and fill in its inputs; SCNX builds the request, adds your credentials and returns the result. Services marked "No account needed" work without any key. All others need a connection, which you create once in the dashboard.

Every ready-made service has its own reference page with all of its actions and triggers: see [service actions](/docs/custom-commands/reference/actions/bot-integrations) and [service triggers](/docs/custom-commands/reference/triggers/bot-integrations).

Keyless services are called from SCNX's shared addresses, so the rate limits of the service apply to all servers together. If a service answers with a rate limit, the step fails with a catchable "rate limited" error.

| Service              | What you can do                                                                                                                 | Credentials                                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Airtable             | Read rows from your bases                                                                                                       | Personal access token with scope `data.records:read`, from airtable.com/create/tokens                                                               |
| CoinGecko            | Coin prices, coin details, top coins                                                                                            | Free Demo API key from the CoinGecko Developer Dashboard (Pro keys do not work)                                                                     |
| GitHub               | Read repositories, issues, releases and users; open issues                                                                      | Fine-grained personal access token from your GitHub developer settings                                                                              |
| Hacker News          | Top and newest stories, single stories or comments                                                                              | No account needed                                                                                                                                   |
| Hypixel              | Player stats and online status                                                                                                  | API key from developer.hypixel.net (development keys expire after a few days)                                                                       |
| MyAnimeList (Jikan)  | Search anime and manga, details, top anime                                                                                      | No account needed                                                                                                                                   |
| Minecraft accounts   | Username to UUID, profile and skin                                                                                              | No account needed                                                                                                                                   |
| Open-Meteo weather   | Find places, current weather, daily forecast                                                                                    | No account needed                                                                                                                                   |
| Roblox (public data) | Groups and ranks of a user, avatar pictures, experience stats                                                                   | No account needed                                                                                                                                   |
| Roblox Open Cloud    | Users, groups with roles and members, experiences                                                                               | Open Cloud API key from create.roblox.com; set Accepted IP Addresses to `0.0.0.0/0`                                                                 |
| Steam                | Profiles, what someone plays, owned games                                                                                       | Web API key from steamcommunity.com/dev/apikey                                                                                                      |
| Steam store          | Price, description and release date of a game                                                                                   | No account needed                                                                                                                                   |
| Stripe               | Read customers, charges, payments and balance; create Checkout sessions, payment links and refunds, and start flows on payments | Restricted key (`rk_...`) with the permissions you need; do not use your secret key. See [Sell with Stripe](/docs/custom-commands/sell-with-stripe) |
| Todoist              | List, add and complete tasks                                                                                                    | API token from Todoist settings under Integrations, Developer                                                                                       |
| top.gg               | Check votes, read stats, run flows when someone votes                                                                           | API token from "Integrations & API" in your top.gg project (v1 API)                                                                                 |
| Twitch               | Users, streams, channels, clips, subscriber count                                                                               | Log in with Twitch when creating the connection                                                                                                     |

## Requesting a new service {#requesting-a-service}

Your service is not on the list? Contact SCNX support and include the service name and the API host you want to call. Professional plans do not need an approval, since they can call any public host.
