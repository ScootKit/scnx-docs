# V2 Message Schema Reference

:::danger Outdated Schema
**Schema v2 is deprecated.** When you open a v2 message in the dashboard message editor, it will be **automatically converted to Schema v3**. For creating new or editing existing messages, use [Schema v3](/docs/scnx-api/reference/message-schema-v3/) or [Schema v4](/docs/scnx-api/reference/message-schema-v4/) instead.
:::

:::info Module Developers may still use this version
**Schema V2 may still be used by module developers** for new modules or default values due to it's simplicity compared to later EmbedType schemas.
:::

This document describes the legacy v2 message format. Schema v2 is the default when no `_schema` key is present in the message object.


## Schema Detection

V2 messages are identified by the **absence** of a `_schema` field. If `_schema` is missing, the message is treated as v2.

A v2 message can be either a **plain string** or a **JSON object**:

```json
"Hello, welcome to the server!"
```

```json
{ "title": "Hello!", "description": "Welcome to the server." }
```

When the value is a plain string, it is sent as a text-only message with no embed.

If `_schema` is `"v3"` or `"v4"`, a different parser is used. See [V3](/docs/scnx-api/reference/message-schema-v3/) and [V4](/docs/scnx-api/reference/message-schema-v4/).


## Top-Level Fields

A v2 message is a flat JSON object. It can produce a text message, a single embed, or both.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `message` | `string` | Conditional | Plain text sent as the message content (above the embed). Required if no embed properties are set. |
| `title` | `string` | No | Embed title. Max 256 characters. |
| `description` | `string` | No | Embed body text. Max 4096 characters. Supports markdown. |
| `color` | `string` | No | Hex color code (e.g. `"#ed4245"`). |
| `url` | `string` | No | URL that the embed title links to. |
| `image` | `string` | No | Full-width image URL displayed at the bottom of the embed. |
| `thumbnail` | `string` | No | Small image URL displayed in the top-right corner of the embed. |
| `author` | `EmbedAuthor` | No | Author block shown above the title. |
| `fields` | `EmbedField[]` | No | Fields displayed below the description. |
| `footer` | `string` | No | Footer text. Falls back to the bot's configured footer if unset. |
| `footerImgUrl` | `string` | No | Footer icon URL. Falls back to the bot's configured footer icon if unset. |
| `embedTimestamp` | `string` | No | ISO 8601 timestamp. If omitted, the current time is used automatically. |

An embed is only created if at least one of `title`, `description`, `author.name`, or `image` is present. If none are set, only `message` is sent as plain text.


## Embed Author

```json
{
  "name": "Author Name",
  "img": "https://example.com/avatar.png"
}
```

| Field | Type | Constraints |
|-------|------|-------------|
| `name` | `string` | Max 256 characters. Required for author to display. |
| `img` | `string` | Author icon URL. Optional. |


## Embed Fields

```json
{
  "name": "Field Title",
  "value": "Field content",
  "inline": true
}
```

| Field | Type | Constraints |
|-------|------|-------------|
| `name` | `string` | Max 256 characters. Required. |
| `value` | `string` | Max 1024 characters. Required. |
| `inline` | `boolean` | If `true`, displayed side-by-side with adjacent inline fields. Default: `false`. |


## Placeholder Variables

V2 messages support `%placeholder%` template variables that are substituted at runtime. The available placeholders depend on the context where the message is used.

Placeholders work in **all string properties** — `message`, `title`, `description`, `author.name`, field names, field values, footer, image URLs, etc.

Some placeholders are marked as image-compatible and are intended for use in image-accepting properties (`image`, `thumbnail`, `author.img`, `footerImgUrl`).


## Automatic Behavior

The following behavior is applied automatically and **cannot be configured** within the v2 message object:

- **Footer fallback**: If `footer` is not set, the bot's globally configured footer is used.
- **Timestamp**: A timestamp is added to the embed unless the bot has timestamps globally disabled or `embedTimestamp` is explicitly set.
- **Single embed**: V2 only supports one embed per message.
- **Allowed mentions**: `@user` and `@role` mentions are parsed. `@everyone`/`@here` are suppressed unless the bot has everyone-mention protection disabled.


## Limitations Compared to v3/v4

| Feature | v2 | v3 | v4 |
|---------|----|----|-----|
| Multiple embeds | No | Yes | Yes |
| Per-embed footer config | No | Yes | Yes |
| Hide timestamp | No | Yes | Yes |
| Attachment URLs | No | Yes | Yes |
| Author URL | No | Yes | Yes |
| Buttons & dropdowns | No | Partial | Yes |
| Media galleries | No | No | Yes |
| Sections & containers | No | No | Yes |


## V2 to V3 Key Mapping

When a v2 message is auto-converted to v3, the property names change. V2 uses a flat object for a single embed, while v3 wraps embeds in an `embeds` array and renames several keys.

| V2 Key | V3 Equivalent | Notes |
|--------|---------------|-------|
| `message` | `content` | |
| `title` | `embeds[].title` | Moved into embed object |
| `description` | `embeds[].description` | Moved into embed object |
| `color` | `embeds[].color` | Moved into embed object |
| `url` | _(removed)_ | Not supported in v3 embeds |
| `image` | `embeds[].imageURL` | Renamed |
| `thumbnail` | `embeds[].thumbnailURL` | Renamed |
| `author.name` | `embeds[].author.name` | |
| `author.img` | `embeds[].author.imageURL` | Renamed |
| _(no equivalent)_ | `embeds[].author.url` | New in v3 |
| `fields` | `embeds[].fields` | Same structure |
| `footer` | `embeds[].footer.text` | Was a string, now an object |
| `footerImgUrl` | `embeds[].footer.iconURL` | Renamed, moved into footer object |
| `embedTimestamp` | `embeds[].footer.hideTime` | V3 uses a boolean toggle instead of a custom timestamp |
| _(no equivalent)_ | `embeds[].footer.disabled` | New in v3 — hides the entire footer |
| _(no equivalent)_ | `attachmentURLs` | New in v3 |
| _(no equivalent)_ | `linkButtons` | New in v3 |


## Examples

### Text-Only Message

```json
{
  "message": "Hello, %user%! Welcome to the server."
}
```

### Simple Embed

```json
{
  "title": "Welcome!",
  "description": "Hello %user%, enjoy your stay.",
  "color": "#57F287"
}
```

### Full Embed with Text

```json
{
  "message": "%user%",
  "title": "Staff Infraction",
  "description": "**Member:** %user%\n**Reason:** %reason%",
  "color": "#ed4245",
  "thumbnail": "%userPfp%",
  "author": {
    "name": "Issued by %issuerName%",
    "img": "%issuerPfp%"
  },
  "fields": [
    {
      "name": "Type",
      "value": "%type%",
      "inline": true
    },
    {
      "name": "Expires",
      "value": "%endDate%",
      "inline": true
    }
  ]
}
```

### Embed with Custom Footer

```json
{
  "title": "Giveaway Ended",
  "description": "Congratulations %winner%! You won **%prize%**!",
  "color": "#5865F2",
  "image": "%prizeImage%",
  "footer": "Hosted by %hostName%",
  "footerImgUrl": "%hostPfp%",
  "embedTimestamp": "2024-06-15T18:00:00.000Z"
}
```

