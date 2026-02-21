---
unlisted: true
---

# SCNX Integration

Use the SCNX Integration to allow the users of your bot to easily edit their configuration and customize their bot -
directly in the SCNX Dashboard, with just a few lines of code.

## Release

Once you have set an icon, description and endpoint, you can release your app. For testing apps, please select the
release type "private". Otherwise, please see the table below.

:::info
Changing release-type won't remove existing servers integrating your app.
:::

| Type            | Description                                                                                                                                       | Public visibility                                                                                                                         | Pricing                                 |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| Private         | Intended for private or testing apps. You (and only you) can add this app to any servers you own                                                  | Not visible to anyone                                                                                                                     | Free                                    |
| Custom-Solution | Intended for products developed for specific individuals. You can generate License-Keys with which users can add your integration to their server | Your app name, description and icon are featured on your organisation-site if you have enabled this feature in your organisation settings | Contact sales@scootkit.com for details. | 
| Public          | Intended for Public apps with static guild-specific configuration. SCNX Integration may be an additional way to set up the bot.                   | Anyone can add your app. Your app may be featured in the app list                                                                         | Free                                    | 

## Webhooks

We will `POST` to your webhook every time, we have a ressource-update or request information from you.

### Definition

#### Headers

| Header               | Description                                                                                                                                                                                        | Usage                                                                                                                                                                                         |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SCNX-Webhook-Signing | Signed value of the body (using a hash-based-authentification-code [HMAC](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code) with [SHA-2](https://en.wikipedia.org/wiki/SHA-2)) | Compute an HAMAC with the SHA256 hash function using your webhook secret as the key and the full text body as the message. Verify that the signature in this header matches the geranted one. |

#### Body

Format: `text/plain`. Consists of three components in a string:

1. The timestamp the response was generated
2. A "," character
3. The actual JSON-Body (see table below)
   | Key | Description |
   | ---- | --- |
   | event | Name of the event or request |
   | guildID? | ID of the associated guild |
   | body | Body of the request, depending on the event type |

### Installation Events

#### Server installed

Event name: `server-install`. Additional body: `serverID`.

#### Server removed

Event name: `server-removal`. Additional body:  `serverID`.

### Configuration-Events

#### Get Config-Files

Event-Name: `get-config-files`
Additional body: None
Return: Array of [Config-Files](#config-files).

#### Get Config-File

Event-Name: `get-config-file`
Additional body:

* `filename`: Name of the file requested

Return:

#### Put Config-File-Content

Event-Name: `put-config-file-content`

#### Reload Configuration

Event-Name: `reload-config`

### Process Management-Events

#### Get Status

Event-Name: `status`

#### Start Bot

Event-Name: `start`

#### Stop Bot

Event-Name: `stop`

## CustomBot API

Base URL: `https://scnx.app/api/marketplace-api/`.

To authorize your request, set the `Authorization <APIToken>`. Apps that are not released yet and do not have the
CustomBot-API enabled, won't be able to access the endpoint.

### Get current application

GET `https://scnx.app/api/marketplace-api/`.

Returns the current API body: 

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
```

### User Install URL

Share the following URL to install URL: `` 


## Types

### Config-Files

| Key         | Value                                                                | 
|-------------|----------------------------------------------------------------------|
| name        | [Localized](#localized-field) name displayed in the dashboard        |
| description | [Localized](#localized-field) description displayed in the dashboard |
| id          | Unique identifier of this config-file                                |

### Localized field

If the user uses another language, we will default to English.

| Key | Value                      |
|-----|----------------------------|
| de? | Localized value in German  |
| en  | Localized value in English |