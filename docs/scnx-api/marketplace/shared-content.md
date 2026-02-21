# Shared Marketplace Content API {#shared-marketplace-content-api}

Create, manage, and share message templates and configuration presets with other SCNX users through your marketplace organization.

:::info Important Information
Your use of this API is subject to the following additional legal documents: 
[SCNX Shared Marketplace Content - Terms of Service](https://scootk.it/scnx-shared-marketplace-tos).

API requests might fail without prior agreement. Ensure your use of this API is compliant with these terms at all times.
:::

---

## Getting Started {#getting-started}

Before you can use the Shared Content API, you need to complete a few setup steps in the SCNX dashboard.

### Step 1: Create an Application {#step-1-create-an-application}

1. Open your organization's page on the SCNX dashboard
2. Navigate to **Integrations** in the sidebar
3. Click **Create Application** and give it a name (e.g., "My Content Bot")
4. Your application starts in `UNRELEASED` status — you'll need to publish it before the API token works

### Step 2: Enable the Shared Content Feature {#step-2-enable-the-shared-content-feature}

1. Open your newly created application
2. In the **Features** section, enable the **Shared Content** (`SHARED_CONTENT`) feature flag
3. Save your changes

### Step 3: Agree to the Shared Content Terms of Service {#step-3-agree-to-the-shared-content-tos}

1. Navigate to the **Shared Content** page in your organization's sidebar
2. You'll be prompted to agree to the Shared Marketplace Content Terms of Service
3. Accept the terms — this is a one-time action and applies to the whole organization

### Step 4: Publish your Application {#step-4-publish-your-application}

1. Go back to your application in **Integrations**
2. Enable **Sudo Mode** (required for sensitive operations)
3. Change the application visibility from `UNRELEASED` to `PRIVATE` (or `PUBLIC` if you want it listed)
4. Copy your **API Token** from the application's token section — this is your authentication credential

You're now ready to use the API.

---

## Authentication {#authentication}

Include your application's API token in the `Authorization` header of every request:

```
Authorization: <your-api-token>
```

### Requirements {#requirements}

- Application visibility must be `PRIVATE`, `PUBLIC`, or `CUSTOM_SOLUTION` (not `UNRELEASED`)
- Application must have the `SHARED_CONTENT` feature flag enabled
- Organization must have agreed to the Shared Marketplace Content ToS

### Rate Limiting {#rate-limiting}

- **Authentication**: 2 failed attempts per 15 hours. Successful requests do not count toward this limit.
- **Creating content**: 20 requests per 10 minutes.
- All other endpoints have no additional rate limits beyond authentication.

When rate-limited, the API returns `429 Too Many Requests`. Standard `RateLimit-*` and `Retry-After` headers are included in responses.

### Scoping {#scoping}

All endpoints are strictly scoped to your organization. Your API token can only access, modify, and delete shared content that belongs to your organization — never content from other organizations.

---

## Message Data Format {#message-data-format}

The `data` field in content creation and update endpoints accepts SCNX message JSON. Every message object must include a `_schema` field indicating the schema version:

- `"v3"` — [v3 Message Schema Reference](/docs/scnx-api/reference/message-schema-v3)
- `"v4"` — [v4 Message Schema Reference](/docs/scnx-api/reference/message-schema-v4)

### Example: v3 message {#example-v3-message}

```json
{
  "_schema": "v3",
  "content": "Hello, world!",
  "embeds": [
    {
      "title": "My Embed",
      "description": "Some description text.",
      "color": "#5865F2"
    }
  ]
}
```

### Example: v4 message {#example-v4-message}

```json
{
  "_schema": "v4",
  "components": [
    {
      "type": 17,
      "accent_color": 5793266,
      "components": [
        {
          "type": 10,
          "content": "Welcome to the server!"
        }
      ]
    }
  ]
}
```

---

## Content Types {#content-types}

The API supports two content types:

### Messages {#messages}

A standalone message template that users can import and use anywhere SCNX supports messages. The `data` field contains a single message object with `_schema`.

### Configuration Templates {#configuration-templates}

A pre-configured message (or set of messages) that users can apply directly into a specific module's configuration on their server. When a user imports a configuration template, SCNX writes the message data into the specified module and config file, overwriting only the targeted fields.

Configuration templates support two modes:

#### Single-field template {#single-field-template}

Targets one message field in a module config. Provide `fieldName` and a single message object (with `_schema`) as `data`.

```json
{
  "type": "CONFIGURATION_TEMPLATE",
  "moduleName": "welcome",
  "configFile": "config",
  "fieldName": "welcomeMessage",
  "data": {
    "_schema": "v3",
    "content": "Welcome, {user}!"
  }
}
```

#### Multi-field template {#multi-field-template}

Targets multiple message fields at once. Omit `fieldName` and pass `data` as an object where each key is a field name and each value is a message object with `_schema`.

```json
{
  "type": "CONFIGURATION_TEMPLATE",
  "moduleName": "welcome",
  "configFile": "config",
  "data": {
    "welcomeMessage": {
      "_schema": "v3",
      "content": "Welcome, {user}!"
    },
    "goodbyeMessage": {
      "_schema": "v3",
      "content": "Goodbye, {user}. We'll miss you!"
    }
  }
}
```

The import page will display each field as a separate message preview and apply all of them at once when the user imports the template.

:::note
The `data` format determines which mode is used: if `data` contains a `_schema` field at the top level, it's a single-field template. If `data` is an object without `_schema`, it's a multi-field template where each key maps to a message field.
:::

---

## Endpoints {#endpoints}

**Base URL:** `https://scnx.app/api/marketplace-api/shared-content`

### Create Shared Content {#create-shared-content}

```
POST /marketplace-api/shared-content
```

Creates a new shared content item in your organization. Returns the created item including a ready-to-share `shareURL`.

Rate limit: 20 requests per 10 minutes.

#### Request Body {#create-request-body}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `displayName` | `string` | Yes | Display name shown to users when previewing and importing the content |
| `description` | `string` | No | Short description of the content. Set to `null` or omit to leave empty. |
| `type` | `string` | Yes | `"MESSAGE"` or `"CONFIGURATION_TEMPLATE"` |
| `visibility` | `string` | No | `"PUBLIC"` or `"PRIVATE"`. Public content is visible on your organization's page. Private content is only accessible via its direct share link. Defaults to `"PRIVATE"`. |
| `data` | `object` | Yes | The message data. See [Message Data Format](#message-data-format) and [Content Types](#content-types) for the expected structure. |
| `moduleName` | `string` | Template only | Target module name (e.g., `"welcome"`). Required for `CONFIGURATION_TEMPLATE`. |
| `configFile` | `string` | Template only | Target config file (e.g., `"config"`). Required for `CONFIGURATION_TEMPLATE`. |
| `fieldName` | `string` | Template only | Target message field in the config. Required for single-field templates. Omit for [multi-field templates](#multi-field-template). |

#### Response Fields {#create-response-fields}

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique content ID (UUID). Use this for update and delete operations. |
| `privateKey` | `string` | Unique key used in share URLs |
| `type` | `string` | `"MESSAGE"` or `"CONFIGURATION_TEMPLATE"` |
| `visibility` | `string` | `"PUBLIC"` or `"PRIVATE"` |
| `displayName` | `string` | Display name |
| `description` | `string \| null` | Description, or `null` if not set |
| `data` | `object` | The message data as submitted |
| `moduleName` | `string \| null` | Module name (templates only) |
| `configFile` | `string \| null` | Config file (templates only) |
| `fieldName` | `string \| null` | Field name (single-field templates only) |
| `organizationID` | `number` | Your organization's ID |
| `usageCount` | `number` | Number of times this content has been imported. Starts at `0`. |
| `createdAt` | `string` | ISO 8601 timestamp |
| `updatedAt` | `string` | ISO 8601 timestamp |
| `shareURL` | `string` | Ready-to-share import link |

#### Example: Create a Shared Message {#example-create-message}

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
  "moduleName": null,
  "configFile": null,
  "fieldName": null,
  "organizationID": 123,
  "usageCount": 0,
  "createdAt": "2026-02-21T12:00:00.000Z",
  "updatedAt": "2026-02-21T12:00:00.000Z",
  "shareURL": "https://scnx.app/import/message?key=clx1abc2def3ghi&source=marketplace"
}
```

The `shareURL` is a ready-to-share link. Anyone with an SCNX account can open it to preview and import the message.

#### Example: Create a Single-Field Configuration Template {#example-create-single-field-template}

Targets one specific message field in a module config.

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

**Response:** `200 OK` — Same structure as above, with template fields populated and `shareURL` pointing to `/import/config-template?key=...&source=marketplace`.

#### Example: Create a Multi-Field Configuration Template {#example-create-multi-field-template}

Sets multiple message fields in the same module config at once.

```bash
curl -X POST https://scnx.app/api/marketplace-api/shared-content \
  -H "Authorization: your-api-token" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "Complete Welcome Setup",
    "description": "Welcome and goodbye messages for the welcome module",
    "type": "CONFIGURATION_TEMPLATE",
    "visibility": "PUBLIC",
    "data": {
      "welcomeMessage": {
        "_schema": "v3",
        "content": "Hey {user}, welcome to **{server}**!",
        "embeds": [
          {
            "title": "Welcome!",
            "description": "You are member #{membercount}.",
            "color": "#57F287"
          }
        ]
      },
      "goodbyeMessage": {
        "_schema": "v3",
        "content": "**{usertag}** just left the server.",
        "embeds": [
          {
            "title": "Goodbye!",
            "description": "We now have {membercount} members.",
            "color": "#ED4245"
          }
        ]
      }
    },
    "moduleName": "welcome",
    "configFile": "config"
  }'
```

**Response:** `200 OK` — The `fieldName` will be `null` since this is a multi-field template. The import page will display each message field separately.

---

### List Shared Content {#list-shared-content}

```
GET /marketplace-api/shared-content
```

Returns all shared content belonging to your organization, regardless of visibility. This includes `MESSAGE` and `CONFIGURATION_TEMPLATE` items, as well as any `CUSTOM_COMMAND` items that were created via the SCNX dashboard.

#### Example {#list-example}

```bash
curl https://scnx.app/api/marketplace-api/shared-content \
  -H "Authorization: your-api-token"
```

**Response:** `200 OK` — Array of content items. Each item has the same fields as the [create response](#create-response-fields).

```json
[
  {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "privateKey": "clx1abc2def3ghi",
    "type": "MESSAGE",
    "visibility": "PUBLIC",
    "displayName": "Welcome Message",
    "description": "A clean welcome embed for new members",
    "data": { "..." : "..." },
    "moduleName": null,
    "configFile": null,
    "fieldName": null,
    "organizationID": 123,
    "usageCount": 14,
    "createdAt": "2026-02-21T12:00:00.000Z",
    "updatedAt": "2026-02-21T14:30:00.000Z",
    "shareURL": "https://scnx.app/import/message?key=clx1abc2def3ghi&source=marketplace"
  },
  {
    "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "privateKey": "clx2xyz9abc8def",
    "type": "CONFIGURATION_TEMPLATE",
    "visibility": "PRIVATE",
    "displayName": "Complete Welcome Setup",
    "description": "Welcome and goodbye messages",
    "data": {
      "welcomeMessage": { "_schema": "v3", "content": "..." },
      "goodbyeMessage": { "_schema": "v3", "content": "..." }
    },
    "moduleName": "welcome",
    "configFile": "config",
    "fieldName": null,
    "organizationID": 123,
    "usageCount": 3,
    "createdAt": "2026-02-21T13:00:00.000Z",
    "updatedAt": "2026-02-21T13:00:00.000Z",
    "shareURL": "https://scnx.app/import/config-template?key=clx2xyz9abc8def&source=marketplace"
  }
]
```

---

### Update Shared Content {#update-shared-content}

```
PATCH /marketplace-api/shared-content/:itemID
```

Update any combination of fields on an existing content item. Only include the fields you want to change — omitted fields remain unchanged.

#### Request Body {#update-request-body}

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | `string` | New display name |
| `description` | `string \| null` | New description — set to `null` to clear |
| `data` | `object` | New message data in [v3](/docs/scnx-api/reference/message-schema-v3) or [v4](/docs/scnx-api/reference/message-schema-v4) format |
| `visibility` | `string` | `"PUBLIC"` or `"PRIVATE"` |

:::note
You cannot change the `type`, `moduleName`, `configFile`, or `fieldName` of an existing item. If you need to change these, delete the item and create a new one.
:::

#### Example {#update-example}

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

**Response:** `200 OK` — The full updated item with all fields, including the updated `updatedAt` timestamp.

---

### Delete Shared Content {#delete-shared-content}

```
DELETE /marketplace-api/shared-content/:itemID
```

Marks a content item as deleted. The item will no longer appear in [list](#list-shared-content) results, and you will not be able to [update](#update-shared-content) it. Existing share links will show a "not found" error to users who try to open them.

The item is not permanently removed from the database. As outlined in the [Shared Marketplace Content Terms of Service](https://scootk.it/scnx-shared-marketplace-tos), SCNX retains deleted shared content data for compliance and moderation purposes.

#### Example {#delete-example}

```bash
curl -X DELETE https://scnx.app/api/marketplace-api/shared-content/a1b2c3d4-e5f6-7890-abcd-ef1234567890 \
  -H "Authorization: your-api-token"
```

**Response:** `200 OK`

```json
{ "ok": true }
```

---

## Error Responses {#error-responses}

| Status | Description |
|--------|-------------|
| `400` | Missing or invalid fields in the request body. Also returned when the application is still in `UNRELEASED` status or the `SHARED_CONTENT` feature is not enabled. |
| `401` | No `Authorization` header provided, or the token does not match any application. |
| `403` | Organization has not agreed to the Shared Marketplace Content Terms of Service. |
| `404` | Content item does not exist or does not belong to your organization. |
| `429` | Rate limit exceeded. Check the `Retry-After` header for when you can retry. |

### Common Issues {#common-issues}

**`"Release app to use endpoint."`** — Your application is still in `UNRELEASED` status. Change the visibility to `PRIVATE` or `PUBLIC` in the Integrations panel (requires Sudo Mode).

**`"Shared Content feature not enabled."`** — Open your application in the Integrations panel, enable the `SHARED_CONTENT` feature, and save.

**`"Organization has not agreed to Shared Marketplace Content ToS."`** — Navigate to the Shared Content page in your organization's sidebar and accept the Terms of Service.

**`"Missing required fields"`** — The `displayName`, `data`, and `type` fields are required for creating content.

**`"Missing template fields: moduleName and configFile are required"`** — When creating a `CONFIGURATION_TEMPLATE`, you must provide `moduleName` and `configFile`.

**`"Missing template fields: fieldName is required for single-field templates"`** — Your `data` object contains a `_schema` field, meaning it's a single message. Provide `fieldName` to specify which config field this message targets — or restructure `data` as a [multi-field template](#multi-field-template).

**`"Invalid type"`** — The `type` field must be exactly `"MESSAGE"` or `"CONFIGURATION_TEMPLATE"`.