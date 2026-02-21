# Shared Marketplace Content API

Create, manage, and share message templates and configuration presets with other SCNX users through your marketplace organization.

:::info Important Information
Your use of this API is subject to the following additional legal documents: 
[SCNX Shared Marketplace Content - Terms of Service](https://scootk.it/scnx-shared-marketplace-tos).

API requests might fail without prior agreement. Ensure your use of this API is compliant with these terms at all times.
:::

---

## Getting Started

Before you can use the Shared Content API, you need to complete a few setup steps in the SCNX dashboard.

### Step 1: Create an Application

1. Open your organization's page on the SCNX dashboard
2. Navigate to **Integrations** in the sidebar
3. Click **Create Application** and give it a name (e.g., "My Content Bot")
4. Your application starts in `UNRELEASED` status — you'll need to publish it before the API token works

### Step 2: Enable the Shared Content Feature

1. Open your newly created application
2. In the **Features** section, enable the **Shared Content** (`SHARED_CONTENT`) feature flag
3. Save your changes

### Step 3: Agree to the Shared Content Terms of Service

1. Navigate to the **Shared Content** page in your organization's sidebar
2. You'll be prompted to agree to the Shared Marketplace Content Terms of Service
3. Accept the terms — this is a one-time action and applies to the whole organization

### Step 4: Publish your Application

1. Go back to your application in **Integrations**
2. Enable **Sudo Mode** (required for sensitive operations)
3. Change the application visibility from `UNRELEASED` to `PRIVATE` (or `PUBLIC` if you want it listed)
4. Copy your **API Token** from the application's token section — this is your authentication credential

You're now ready to use the API.

---

## Authentication

Include your application's API token in the `Authorization` header of every request:

```
Authorization: <your-api-token>
```

### Requirements

- Application visibility must be `PRIVATE`, `PUBLIC`, or `CUSTOM_SOLUTION` (not `UNRELEASED`)
- Application must have the `SHARED_CONTENT` feature flag enabled
- Organization must have agreed to the Shared Marketplace Content ToS

### Scoping

All endpoints are strictly scoped to your organization. Your API token can only access, modify, and delete shared content that belongs to your organization — never content from other organizations.

---

## Message Data Format

The `data` field in all endpoints accepts SCNX message JSON in either v3 or v4 schema format. Every message object must include a `_schema` field indicating the version.

- [v3 Message Schema Reference](/docs/scnx-api/reference/message-schema-v3/)
- [v4 Message Schema Reference](/docs/scnx-api/reference/message-schema-v4/)

---

## Endpoints

**Base URL:** `https://scnx.app/api/marketplace-api/shared-content`

### Create Shared Content

```
POST /marketplace-api/shared-content
```

Rate limit: 20 requests per 10 minutes.

#### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `displayName` | `string` | Yes | Display name shown to users when importing |
| `description` | `string` | No | Short description of the content |
| `type` | `string` | Yes | `"MESSAGE"` or `"CONFIGURATION_TEMPLATE"` |
| `visibility` | `string` | No | `"PUBLIC"` (visible on your org page) or `"PRIVATE"` (only accessible via direct link). Defaults to `"PRIVATE"`. |
| `data` | `object` | Yes | Message JSON in [v3](/docs/scnx-api/reference/message-schema-v3) or [v4](/docs/scnx-api/reference/message-schema-v4) format |
| `moduleName` | `string` | Template only | Target module name (e.g., `"welcome"`) |
| `configFile` | `string` | Template only | Target config file (e.g., `"config"`) |
| `fieldName` | `string` | Template only | Target message field in the config |

#### Example: Create a Shared Message

```bash
curl -X POST https://scnx.app/api/marketplace-api/shared-content \
  -H "Authorization: your-api-token" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "Welcome Message",
    "description": "A clean welcome embed for new members",
    "type": "MESSAGE",
    "visibility": "PUBLIC",
    "data": {
      "_schema": "v3",
      "content": "Welcome to the server, {user}!",
      "embeds": [
        {
          "title": "Welcome!",
          "description": "Check out the rules in #rules and grab your roles in #roles.",
          "color": "#5865F2"
        }
      ]
    }
  }'
```

**Response:** `200 OK`

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "privateKey": "clx1abc2def3ghi",
  "type": "MESSAGE",
  "visibility": "PUBLIC",
  "displayName": "Welcome Message",
  "description": "A clean welcome embed for new members",
  "data": {
    "_schema": "v3",
    "content": "Welcome to the server, {user}!",
    "embeds": [
      {
        "title": "Welcome!",
        "description": "Check out the rules in #rules and grab your roles in #roles.",
        "color": "#5865F2"
      }
    ]
  },
  "organizationID": 123,
  "usageCount": 0,
  "createdAt": "2026-02-21T12:00:00.000Z",
  "updatedAt": "2026-02-21T12:00:00.000Z",
  "shareURL": "https://scnx.app/import/message?key=clx1abc2def3ghi&source=marketplace"
}
```

The `shareURL` is a ready-to-share link. Anyone with an SCNX account can open it to preview and import the message.

#### Example: Create a Configuration Template

Configuration templates let users apply a pre-made message directly into a specific module's config on their server.

```bash
curl -X POST https://scnx.app/api/marketplace-api/shared-content \
  -H "Authorization: your-api-token" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "Welcome Module Setup",
    "description": "A ready-to-use welcome message for the welcome module",
    "type": "CONFIGURATION_TEMPLATE",
    "visibility": "PUBLIC",
    "data": {
      "_schema": "v3",
      "content": "Hey {user}, welcome to **{server}**!",
      "embeds": [
        {
          "title": "Welcome to {server}",
          "description": "You are member #{membercount}. Have fun!",
          "color": "#57F287",
          "thumbnail": "{useravatar}"
        }
      ]
    },
    "moduleName": "welcome",
    "configFile": "config",
    "fieldName": "welcomeMessage"
  }'
```

**Response:** Same structure as above, with `shareURL` pointing to `/import/config-template?key=...&source=marketplace`.

---

### List Shared Content

```
GET /marketplace-api/shared-content
```

Returns all shared content belonging to your organization.

#### Example

```bash
curl https://scnx.app/api/marketplace-api/shared-content \
  -H "Authorization: your-api-token"
```

**Response:** `200 OK` — Array of content items, each including a `shareURL`.

```json
[
  {
    "id": "a1b2c3d4-...",
    "privateKey": "clx1abc2def3ghi",
    "type": "MESSAGE",
    "visibility": "PUBLIC",
    "displayName": "Welcome Message",
    "description": "A clean welcome embed for new members",
    "data": { ... },
    "organizationID": 123,
    "usageCount": 14,
    "createdAt": "2026-02-21T12:00:00.000Z",
    "updatedAt": "2026-02-21T12:00:00.000Z",
    "shareURL": "https://scnx.app/import/message?key=clx1abc2def3ghi&source=marketplace"
  }
]
```

---

### Update Shared Content

```
PATCH /marketplace-api/shared-content/:itemID
```

Update any combination of fields on an existing content item. Only include the fields you want to change.

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | `string` | New display name |
| `description` | `string` | New description (set to `null` to clear) |
| `data` | `object` | New message data in [v3](/docs/scnx-api/reference/message-schema-v3) or [v4](/docs/scnx-api/reference/message-schema-v4) format |
| `visibility` | `string` | `"PUBLIC"` or `"PRIVATE"` |

#### Example

```bash
curl -X PATCH https://scnx.app/api/marketplace-api/shared-content/a1b2c3d4-e5f6-7890-abcd-ef1234567890 \
  -H "Authorization: your-api-token" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "Updated Welcome Message",
    "data": {
      "_schema": "v3",
      "content": "Welcome aboard, {user}!",
      "embeds": [
        {
          "title": "Welcome!",
          "description": "Glad to have you here.",
          "color": "#ED4245"
        }
      ]
    }
  }'
```

**Response:** `200 OK` — The full updated item with `shareURL`.

---

### Delete Shared Content

```
DELETE /marketplace-api/shared-content/:itemID
```

Permanently deletes a content item. Existing share links will stop working.

#### Example

```bash
curl -X DELETE https://scnx.app/api/marketplace-api/shared-content/a1b2c3d4-e5f6-7890-abcd-ef1234567890 \
  -H "Authorization: your-api-token"
```

**Response:** `200 OK`

```json
{ "ok": true }
```

---

## Error Responses

| Status | Code | Description |
|--------|------|-------------|
| `400` | Bad Request | Missing required fields, invalid `type` value, or application is still `UNRELEASED` |
| `401` | Unauthorized | No token provided, or token is invalid |
| `403` | Forbidden | `SHARED_CONTENT` feature not enabled on the application, or organization has not agreed to the Shared Content ToS |
| `404` | Not Found | Content item does not exist or does not belong to your organization |
| `429` | Too Many Requests | Rate limit exceeded — wait before retrying |

### Common Issues

**"Release app to use endpoint."** — Your application is still in `UNRELEASED` status. Change the visibility to `PRIVATE` or `PUBLIC` in the Integrations panel (requires Sudo Mode).

**"Shared Content feature not enabled."** — Open your application in the Integrations panel, enable the `SHARED_CONTENT` feature, and save.

**"Organization has not agreed to Shared Marketplace Content ToS."** — Navigate to the Shared Content page in your organization's sidebar and accept the Terms of Service.