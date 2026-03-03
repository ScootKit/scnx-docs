---
sidebar_position: 2
---

# Accessing User Shared Content via Marketplace APIs



:::info Important Information
Your use of this API is subject to the following additional legal documents:
[SCNX Shared Marketplace Content - Terms of Service](https://scootk.it/scnx-shared-marketplace-tos).

API requests might fail without prior agreement. Ensure your use of this API is compliant with these terms at all times.
:::


## Overview

SCNX users can create **shared items** — exportable messages and custom commands they share via share links. When a user opts in to **"Allow my shared content to be used by Marketplace Products"**, your Marketplace application can retrieve the raw content data of their shared items through the public API.

This enables use cases such as importing a user's custom command into your bot, reading a shared message template, or analyzing user-submitted configurations.

---

## Prerequisites

Before your application can receive the `data` field from a user's shared item, three conditions must all be met:

| Condition                                                                                                                        | Where to configure                           |
|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| Your application has the `SHARED_CONTENT` feature enabled                                                                        | Application settings in the Developer Portal |
| Your Marketplace organization has agreed to the [Shared Content Terms of Service](https://scootk.it/scnx-shared-marketplace-tos) | Organization settings — owner only           |
| The shared item's owner has opted in to allow marketplace access                                                                 | User's profile settings — their choice       |

Your application will still receive metadata for any shared item regardless of opt-in status. The `data` field containing raw content is only included when all three conditions above are satisfied.

---

## Authentication

All requests to the public API must include your application's API token in the `Authorization` header:

```
Authorization: <your-api-token>
```

API tokens are available in the Developer Portal under your application's settings. Keep your token secret — it identifies your application and must not be exposed in client-side code.

---

## Retrieving a Shared Item

```
GET /public-api/shared-item/:id
```

Retrieves a shared item by its ID. The `:id` is the item's **UUID** (its primary database identifier), which is distinct from the `privateKey` that appears in SCNX share link URLs (e.g. the `key=...` query parameter). Your application must obtain the UUID directly — for example, from the user providing it — rather than parsing it from a share link.

**Rate limit:** 30 requests per 5 minutes.

### Response Fields

| Field | Type | Description |
|---|---|---|
| `userID` | string | ID of the user who created the shared item |
| `type` | string | Content type: `MESSAGE` or `CUSTOM_COMMAND` |
| `visibility` | string | Visibility of the item: `PUBLIC`, `PRIVATE`, or `DELETED` |
| `createdAt` | string | ISO 8601 timestamp of when the item was created |
| `importURL` | string | URL that imports this item into SCNX |
| `data` | object | Raw content — **only included when the owner has opted in** (see below) |

### Example Response (owner has opted in)

```json
{
  "userID": "123456789012345678",
  "type": "CUSTOM_COMMAND",
  "visibility": "PUBLIC",
  "createdAt": "2025-11-14T10:32:00.000Z",
  "importURL": "https://scnx.app/import/custom-command?key=abc123&source=marketplace",
  "data": {
    "trigger": "hello",
    "response": "Hello, {user}!"
  }
}
```

### Example Response (owner has not opted in)

```json
{
  "userID": "123456789012345678",
  "type": "CUSTOM_COMMAND",
  "visibility": "PUBLIC",
  "createdAt": "2025-11-14T10:32:00.000Z",
  "importURL": "https://scnx.app/import/custom-command?key=abc123&source=marketplace"
}
```

---

## When `data` Is Included

The `data` field is present in the response only when **all** of the following are true:

1. The `Authorization` header contains a valid API token for a released (non-`UNRELEASED`) application.
2. The application has the `SHARED_CONTENT` feature flag enabled.
3. The application's organization has agreed to the `AGREED_SHARED_CONTENT_TOS`.
4. The shared item's owner has the `ALLOW_MARKETPLACE_SHARED_CONTENT` flag set on their account (i.e. they have opted in).

If any condition is not satisfied, `data` is omitted. All other fields are always returned for publicly visible items.

---

## Shared Item Types

The `type` field indicates the kind of content in `data`:

| Type | Description |
|---|---|
| `MESSAGE` | A Discord message, including embeds and components |
| `CUSTOM_COMMAND` | A custom bot command with trigger, actions, and settings |

Your application should check `type` before parsing `data`, as the shape of the data object differs per type.

---

## User Opt-In

You cannot force or request that a user opts in — it is their choice. Users enable opt-in from their SCNX profile under **Advanced settings → "Allow my shared content to be used by Marketplace Products"**.

The opt-in is permanent and applies to all their shared content, both existing and future. When checking if a user has opted in, simply attempt to retrieve their shared item — if `data` is absent and your application is fully configured, the user has not opted in.

---

## Error Handling

| Scenario                                           | `data` field | Notes |
|----------------------------------------------------|---|---|
| Valid app token, user opted in                     | Included | Full content returned |
| Valid app token, user not opted in                 | Omitted | Metadata only |
| No or invalid `Authorization` header               | Omitted | Metadata only; application not identified |
| App not released or lacks `SHARED_CONTENT` feature | Omitted | Configure in Developer Portal |
| Organization has not agreed to ToS                 | Omitted | Owner must agree once |
| Item visibility has been deleted                   | — | Item not returned |
