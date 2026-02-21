# V4 Message Schema Reference {#v4-message-schema-reference}

The V4 message schema uses Discord's Components V2 system to build rich, structured messages with text, images, buttons, dropdowns, and visual containers. This is the newer and more flexible alternative to the [V3 schema](/docs/scnx-api/reference/message-schema-v3/).

---

## Quick Start {#quick-start}

A V4 message is a JSON object with two fields: `_schema` (always `"v4"`) and `components` (an array of components that make up the message).

```json
{
  "_schema": "v4",
  "components": [
    { "type": 10, "content": "Hello **world**!" }
  ]
}
```

That's a complete V4 message — a single line of text with bold formatting. Everything you build is composed from the component types listed below.

---

## Components Overview {#components-overview}

| Type | Name | What it does |
|------|------|--------------|
| 10 | [Text Display](#text-display) | A block of formatted text |
| 14 | [Separator](#separator) | Spacing or a divider line between components |
| 12 | [Media Gallery](#media-gallery) | A grid of 1–10 images |
| 13 | [File](#file) | A single image or file |
| 9 | [Section](#section) | Text with a thumbnail or button beside it |
| 17 | [Container](#container) | A colored card that groups other components |
| 1 | [Action Row](#action-row) | A row of buttons or a dropdown menu |
| 2 | [Button](#button) | A clickable button (link, role toggle, command trigger) |
| 3 | [String Select](#string-select) | A dropdown menu with selectable options |
| 11 | [Thumbnail](#thumbnail) | A small image used as an accessory inside a Section |

---

## Where Components Can Be Placed {#component-placement}

Not every component can go everywhere. This tree shows what can be placed where:

```
Message (top level)
├── Text Display
├── Separator
├── Media Gallery
├── File
├── Action Row
│   ├── up to 5 Buttons  — OR —
│   └── exactly 1 String Select
├── Section
│   ├── 1–3 Text Displays
│   └── 1 accessory: Button or Thumbnail
└── Container
    ├── Text Display
    ├── Separator
    ├── Media Gallery
    ├── File
    ├── Action Row
    └── Section
```

Containers **cannot** be nested inside other containers.

The total component count across the entire message (including all children, accessories, and gallery items) must not exceed **40**.

---

## Component Reference {#component-reference}

### Text Display {#text-display}

A block of text. Supports full Discord markdown: bold, italic, headings, links, lists, code blocks, and more.

```json
{ "type": 10, "content": "## Welcome!\nWe're glad to have you here." }
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | Yes | The text to display. Max 4000 characters. |

---

### Separator {#separator}

Adds vertical spacing between components, optionally with a visible divider line.

```json
{ "type": 14, "divider": true, "spacing": 2 }
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `divider` | boolean | No | `true` shows a visible line, `false` adds spacing only. Default: `true`. |
| `spacing` | integer | No | `1` = small spacing, `2` = large spacing. Default: `1`. |

---

### Media Gallery {#media-gallery}

Displays 1–10 images in a responsive grid layout.

```json
{
  "type": 12,
  "items": [
    {
      "media": { "url": "https://example.com/banner.png" },
      "description": "Server banner image"
    },
    {
      "media": { "url": "https://example.com/photo.png" }
    }
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `items` | array | Yes | 1–10 gallery items. |
| `items[].media.url` | string | Yes | Image URL. |
| `items[].description` | string | No | Alt text. Max 1024 characters. |
| `items[].spoiler` | boolean | No | Hide behind a spoiler. Default: `false`. |

---

### File {#file}

Displays a single image or file attachment.

```json
{
  "type": 13,
  "file": { "url": "https://example.com/photo.png" }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file.url` | string | Yes | File or image URL. |
| `spoiler` | boolean | No | Hide behind a spoiler. Default: `false`. |

---

### Section {#section}

Places text alongside a small accessory (a thumbnail image or a button) on the right side. Great for profile-style layouts or call-to-action blocks.

```json
{
  "type": 9,
  "components": [
    { "type": 10, "content": "**ScootKit**" },
    { "type": 10, "content": "Building tools for Discord communities." }
  ],
  "accessory": {
    "type": 11,
    "media": { "url": "https://example.com/logo.png" },
    "description": "ScootKit logo"
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `components` | array | Yes | 1–3 Text Display components. |
| `accessory` | object | Yes | A single [Thumbnail](#thumbnail) or [Button](#button). |

---

### Thumbnail {#thumbnail}

A small image that can only be used as an accessory inside a [Section](#section).

```json
{
  "type": 11,
  "media": { "url": "https://example.com/icon.png" },
  "description": "Icon"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `media.url` | string | Yes | Image URL. |
| `description` | string | No | Alt text. Max 1024 characters. |
| `spoiler` | boolean | No | Hide behind a spoiler. Default: `false`. |

---

### Container {#container}

A card with a colored left border that visually groups components together — similar to an embed in the V3 schema. Use containers to create distinct visual sections in your message.

```json
{
  "type": 17,
  "accent_color": 5763719,
  "components": [
    { "type": 10, "content": "## Server Rules" },
    { "type": 14, "divider": true },
    { "type": 10, "content": "1. Be respectful\n2. No spam\n3. Have fun" },
    { "type": 10, "content": "-# Last updated Feb 2026" }
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `components` | array | Yes | Child components (Text Display, Separator, Media Gallery, File, Action Row, Section). |
| `accent_color` | integer | No | Left border color as an RGB integer (`0` to `16777215`). |
| `spoiler` | boolean | No | Collapse content behind a spoiler. Default: `false`. |

**Tip**: To convert a hex color to the integer value, use `parseInt("5865F2", 16)` which gives `5793266`. Some common colors: blurple = `5793266`, green = `5763719`, red = `15548997`, yellow = `16705372`.

---

### Action Row {#action-row}

A horizontal row that holds interactive elements. An action row contains **either** up to 5 buttons **or** exactly 1 string select — never both.

```json
{
  "type": 1,
  "components": [
    { "type": 2, "style": 5, "label": "Website", "url": "https://example.com", "scnx_action": { "type": "linkButton" } },
    { "type": 2, "style": 5, "label": "Support", "url": "https://example.com/support", "scnx_action": { "type": "linkButton" } }
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `components` | array | Yes | Up to 5 [Buttons](#button), or exactly 1 [String Select](#string-select). |

---

### Button {#button}

A clickable button. The button's behavior is defined by the `scnx_action` field — this tells SCNX what should happen when someone clicks it.

#### Link Button {#link-button}

Opens a URL in the user's browser. Always uses style `5` (grey with an external link icon).

```json
{
  "type": 2,
  "style": 5,
  "label": "Visit our website",
  "emoji": "🔗",
  "url": "https://example.com",
  "scnx_action": { "type": "linkButton" }
}
```

#### Disabled Button {#disabled-button}

A non-interactive button that appears greyed out. Useful for labels or placeholders.

```json
{
  "type": 2,
  "style": 2,
  "label": "Coming Soon",
  "disabled": true,
  "scnx_action": { "type": "disabledButton" }
}
```

#### Self-Role Button {#self-role-button}

Assigns, removes, or toggles a Discord role when clicked. **Guild-specific** — not recommended for shared content (see [Shared Content Notes](#shared-content-notes)).

```json
{
  "type": 2,
  "style": 3,
  "label": "Get Notifications",
  "emoji": "🔔",
  "scnx_action": {
    "type": "roleButton",
    "id": "123456789012345678",
    "action": "toggle"
  }
}
```

| `scnx_action` field | Type | Description |
|----------------------|------|-------------|
| `type` | string | `"roleButton"` |
| `id` | string | Discord role ID. |
| `action` | string | `"add"`, `"remove"`, or `"toggle"`. Default: `"toggle"`. |

#### Custom Command Button {#custom-command-button}

Triggers a custom command when clicked. **Guild-specific** — not recommended for shared content.

```json
{
  "type": 2,
  "style": 1,
  "label": "Run Command",
  "scnx_action": {
    "type": "customCommandButton",
    "id": "my-button-click-id"
  }
}
```

| `scnx_action` field | Type | Description |
|----------------------|------|-------------|
| `type` | string | `"customCommandButton"` |
| `id` | string | The custom command's button click ID. |

#### Button Fields {#button-fields}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `style` | integer | Yes | `1` = Primary (blurple), `2` = Secondary (grey), `3` = Success (green), `4` = Danger (red), `5` = Link (grey). |
| `label` | string | One of label/emoji | Button text. Max 80 characters. |
| `emoji` | string | One of label/emoji | Unicode emoji or custom emoji (`<:name:id>`). |
| `url` | string | Link buttons only | Target URL. Max 512 characters. |
| `disabled` | boolean | No | Grey out the button. Default: `false`. |
| `scnx_action` | object | Yes | Defines the button behavior (see action types above). |

---

### String Select {#string-select}

A dropdown menu. Like buttons, behavior is controlled by `scnx_action`.

#### Self-Role Dropdown {#self-role-dropdown}

Each option assigns a Discord role. **Guild-specific** — not recommended for shared content.

```json
{
  "type": 3,
  "placeholder": "Pick your roles",
  "min_values": 0,
  "max_values": 3,
  "scnx_action": { "type": "roleElement" },
  "options": [
    { "label": "Announcements", "value": "111111111111111111", "emoji": "📢" },
    { "label": "Events", "value": "222222222222222222", "emoji": "🎉" },
    { "label": "Gaming", "value": "333333333333333333", "emoji": "🎮" }
  ]
}
```

#### Custom Command Dropdown {#custom-command-dropdown}

Each option triggers a custom command. **Guild-specific** — not recommended for shared content.

```json
{
  "type": 3,
  "placeholder": "Choose an action",
  "scnx_action": { "type": "customCommandElement" },
  "options": [
    { "label": "Show Stats", "value": "stats-btn-id", "description": "View your server stats", "emoji": "📊" },
    { "label": "Daily Reward", "value": "daily-btn-id", "emoji": "🎁" }
  ]
}
```

#### String Select Fields {#string-select-fields}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `placeholder` | string | No | Text shown when nothing is selected. Max 150 characters. |
| `min_values` | integer | No | Minimum selections required. Default: `1`. |
| `max_values` | integer | No | Maximum selections allowed. Default: `1`, max: `25`. |
| `scnx_action` | object | Yes | `"roleElement"` or `"customCommandElement"`. |
| `options` | array | Yes | 1–25 options. |

#### Option Fields {#option-fields}

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | Yes | Display text. Max 100 characters. |
| `value` | string | Yes | Role ID or command button click ID (depending on action type). Max 100 characters. Must be unique. |
| `description` | string | No | Shown below the label. Max 100 characters. |
| `emoji` | string | No | Unicode emoji or custom emoji. |

---

## Shared Content Notes {#shared-content-notes}

When creating shared content through the [Shared Marketplace Content API](/docs/scnx-api/marketplace/shared-content/), keep in mind that your message will be imported by users on **different servers**. Components that reference guild-specific IDs will not work:

| Component | Works in shared content? |
|-----------|--------------------------|
| Text Display, Separator, Media Gallery, File, Section, Container | Yes |
| Link Button | Yes |
| Disabled Button | Yes |
| Self-Role Button | No — role IDs are server-specific |
| Custom Command Button | No — command IDs are server-specific |
| Self-Role Dropdown | No — role IDs are server-specific |
| Custom Command Dropdown | No — command IDs are server-specific |

Stick to **text, images, containers, and link buttons** for content you plan to share.

---

## Examples {#examples}

### Announcement Card {#example-announcement}

A simple announcement with a colored container, heading, and a link button.

```json
{
  "_schema": "v4",
  "components": [
    {
      "type": 17,
      "accent_color": 5793266,
      "components": [
        { "type": 10, "content": "## 📢 Server Update v2.5" },
        { "type": 10, "content": "We've added new channels, updated the rules, and launched a giveaway! Check it out below." },
        { "type": 14, "divider": true, "spacing": 1 },
        { "type": 10, "content": "-# Posted by the admin team • February 2026" }
      ]
    },
    {
      "type": 1,
      "components": [
        { "type": 2, "style": 5, "label": "Read the full changelog", "url": "https://example.com/changelog", "scnx_action": { "type": "linkButton" } }
      ]
    }
  ]
}
```

### Welcome Message with Image {#example-welcome}

A welcome message using a section with a thumbnail and a media gallery.

```json
{
  "_schema": "v4",
  "components": [
    {
      "type": 17,
      "accent_color": 5763719,
      "components": [
        {
          "type": 9,
          "components": [
            { "type": 10, "content": "## Welcome to Our Community!" },
            { "type": 10, "content": "We're glad you're here. Take a look around, introduce yourself, and have fun." }
          ],
          "accessory": {
            "type": 11,
            "media": { "url": "https://example.com/server-icon.png" },
            "description": "Server icon"
          }
        },
        { "type": 14, "divider": true },
        {
          "type": 12,
          "items": [
            { "media": { "url": "https://example.com/welcome-banner.png" }, "description": "Welcome banner" }
          ]
        }
      ]
    },
    {
      "type": 1,
      "components": [
        { "type": 2, "style": 5, "label": "Rules", "emoji": "📜", "url": "https://example.com/rules", "scnx_action": { "type": "linkButton" } },
        { "type": 2, "style": 5, "label": "FAQ", "emoji": "❓", "url": "https://example.com/faq", "scnx_action": { "type": "linkButton" } }
      ]
    }
  ]
}
```

### Multi-Container Layout {#example-multi-container}

Multiple containers to create visually distinct sections.

```json
{
  "_schema": "v4",
  "components": [
    {
      "type": 17,
      "accent_color": 15548997,
      "components": [
        { "type": 10, "content": "## 🔴 Important Notice" },
        { "type": 10, "content": "The server will be under maintenance on **March 1st** from 2:00 to 4:00 PM UTC." }
      ]
    },
    {
      "type": 17,
      "accent_color": 5763719,
      "components": [
        { "type": 10, "content": "## ✅ What's New" },
        { "type": 10, "content": "- New #art-showcase channel\n- Updated self-role menu\n- Bot commands revamp" }
      ]
    },
    {
      "type": 10,
      "content": "-# Questions? Open a ticket in #support."
    }
  ]
}
```

---

## Limits Reference {#limits}

| Constraint | Limit |
|------------|-------|
| Total components per message | 40 (counted recursively) |
| Text Display content | 4000 characters |
| Button label | 80 characters |
| Button URL | 512 characters |
| Select placeholder | 150 characters |
| Select options | 25 |
| Select option label | 100 characters |
| Select option description | 100 characters |
| Select option value | 100 characters |
| Text Displays per Section | 1–3 |
| Media Gallery items | 1–10 |
| Gallery item description | 1024 characters |
| Thumbnail description | 1024 characters |
| Buttons per Action Row | 5 |
| Selects per Action Row | 1 |
| Container `accent_color` range | `0` – `16777215` |