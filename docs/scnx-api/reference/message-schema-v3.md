# V3 Message Schema Reference

This document describes the JSON data format used by the SCNX Message Editor V3. This is the primary message format used across SCNX for bot messages, shared content, and configuration templates.

---

## Schema Detection

V3 messages are identified by the `_schema` field:

```json
{ "_schema": "v3", "content": "Hello!", "embeds": [...] }
```

If `_schema` is missing or set to `"v2"`, the message uses a legacy format that is auto-converted to V3 on edit.

---

## Top-Level Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_schema` | `string` | Yes | Always `"v3"` |
| `content` | `string` | Conditional | Main message text. Max 2000 characters. Required if no embeds or attachments. |
| `embeds` | `Embed[]` | Conditional | Array of embed objects. Max 10 embeds. |
| `attachmentURLs` | `string[]` | No | File attachment URLs. Max 5 items. |
| `linkButtons` | `LinkButton[]` | No | External link buttons. Max 5 buttons. |
| `roleButtons` | `RoleButton[]` | No | Role assignment buttons. Max 5 buttons. Guild-specific. |
| `customCommandButtons` | `CustomCommandButton[]` | No | Custom command trigger buttons. Max 5 buttons. Guild-specific. |
| `customCommandElements` | `SelectOption[]` | No | Custom command select menu options. Max 25 options. Guild-specific. |
| `roleElement` | `RoleElement` | No | Role selection dropdown menu. Guild-specific. |
| `dynamicImage` | `DynamicImage` | No | Dynamic image generation configuration. |

At least one of `content`, `embeds`, or `attachmentURLs` must be non-empty.

---

## Embed Structure

Each embed in the `embeds` array:

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `title` | `string` | No | Max 256 characters |
| `description` | `string` | No | Max 4096 characters |
| `color` | `string` | No | Hex color code (e.g., `"#99AAB5"`). Defaults to `#99AAB5`. |
| `imageURL` | `string` | No | URL or parameter placeholder (e.g., `{parameter}`) |
| `thumbnailURL` | `string` | No | URL or parameter placeholder |
| `fields` | `EmbedField[]` | No | Array of field objects |
| `author` | `EmbedAuthor` | No | Author metadata |
| `footer` | `EmbedFooter` | No | Footer metadata |

Total character count across all fields in all embeds must not exceed 6000.

### EmbedField

```json
{
  "name": "Field Name",
  "value": "Field value text",
  "inline": false
}
```

| Field | Type | Constraints |
|-------|------|-------------|
| `name` | `string` | Max 256 characters. Required. |
| `value` | `string` | Max 4096 characters. Required. |
| `inline` | `boolean` | Default `false`. |

### EmbedAuthor

```json
{
  "name": "Author Name",
  "url": "https://example.com",
  "imageURL": "https://example.com/avatar.png"
}
```

| Field | Type | Constraints |
|-------|------|-------------|
| `name` | `string` | Max 256 characters |
| `url` | `string` | Must be a valid URL if provided |
| `imageURL` | `string` | URL or parameter placeholder |

### EmbedFooter

```json
{
  "text": "Footer text",
  "iconURL": "https://example.com/icon.png",
  "hideTime": false,
  "disabled": false
}
```

| Field | Type | Constraints |
|-------|------|-------------|
| `text` | `string` | Max 2048 characters |
| `iconURL` | `string` | URL |
| `hideTime` | `boolean` | Controls timestamp visibility |
| `disabled` | `boolean` | Hides entire footer |

---

## Button Structures

### LinkButton

External URL buttons. Requires `allowLinkButtons` context.

```json
{
  "label": "Visit Website",
  "url": "https://example.com",
  "emoji": "🔗"
}
```

| Field | Type | Constraints |
|-------|------|-------------|
| `label` | `string` | Max 80 characters. Required. |
| `url` | `string` | Valid HTTPS URL or parameter. Required. |
| `emoji` | `string` | Single emoji. Optional. |

### RoleButton

Role assignment buttons. Requires `allowSelfRoles` context and guild role data.

```json
{
  "id": "123456789",
  "label": "Get Role",
  "type": "t",
  "style": "PRIMARY",
  "emoji": "✅"
}
```

| Field | Type | Constraints |
|-------|------|-------------|
| `id` | `string` | Discord role ID. Required. |
| `label` | `string` | Max 80 characters. Required. |
| `type` | `string` | `"a"` (add), `"r"` (remove), or `"t"` (toggle). Required. |
| `style` | `string` | `"PRIMARY"`, `"SECONDARY"`, `"SUCCESS"`, or `"DANGER"`. Required. |
| `emoji` | `string` | Single emoji. Optional. |

### CustomCommandButton

```json
{
  "id": "command-button-id",
  "label": "Run Command",
  "style": "PRIMARY",
  "emoji": "⚡"
}
```

| Field | Type | Constraints |
|-------|------|-------------|
| `id` | `string` | Command button click ID. Required. Must be an enabled BUTTON-type custom command. |
| `label` | `string` | Max 80 characters. Required. |
| `style` | `string` | `"PRIMARY"`, `"SECONDARY"`, `"SUCCESS"`, or `"DANGER"`. Required. |
| `emoji` | `string` | Single emoji. Optional. |

---

## Select Element Structures

### RoleElement

A dropdown menu for role selection.

```json
{
  "roles": [
    { "id": "123456789", "label": "Cool Role", "description": "A cool role", "emoji": "⭐" }
  ],
  "placeholder": "Select a role...",
  "minValue": 1,
  "maxValue": 1
}
```

| Field | Type | Constraints                                               |
|-------|------|-----------------------------------------------------------|
| `roles` | `RoleOption[]` | Max 25 items. Each must have `id` and `label`.            |
| `placeholder` | `string` | Max 150 characters. Optional.                             |
| `minValue` | `number` | Minimum roles to select. Must be $<=$ `maxValue`.         |
| `maxValue` | `number` | Maximum roles to select. Must be $<=$ roles array length. |

### SelectOption (Custom Command Elements)

```json
{
  "id": "command-button-id",
  "label": "Option Name",
  "description": "What this option does",
  "emoji": "🎮"
}
```

| Field | Type | Constraints |
|-------|------|-------------|
| `id` | `string` | Command button click ID. Required. |
| `label` | `string` | Max 80 characters. Required. |
| `description` | `string` | Max 80 characters. Optional. |
| `emoji` | `string` | Single emoji. Optional. |

---

## Validation Summary

- At least one of `content`, `embeds`, or `attachmentURLs` must be non-empty
- Max 10 embeds per message
- Total embed character count $<=$ 6000
- Max 5 link buttons, 5 role buttons, 5 custom command buttons
- Max 25 select menu options (role element and custom command elements)
- All URLs must be valid HTTPS URLs or parameter placeholders

---

## Shared Marketplace Content

When V3 messages are used in shared marketplace content:
- `roleButtons`, `roleElement`, `customCommandButtons`, and `customCommandElements` should not be used (they reference guild-specific IDs)
- `linkButtons` are supported
- `attachmentURLs` are supported
- `dynamicImage` is not supported in shared content