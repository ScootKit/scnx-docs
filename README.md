# SCNX Documentation

The official documentation for [SCNX](https://scnx.xyz) — view it live at [docs.scnx.xyz](https://docs.scnx.xyz).

> **This project is not open source.** The source code is shared publicly to allow community contributions (typo fixes, translation improvements, new documentation pages), but all rights are reserved by ScootKit. You may not copy, redistribute, or use this code to build or host your own version of the documentation. Due to proprietary dependencies (FontAwesome Pro, internal API integrations), the project cannot be built on external machines without a license.

## Structure

```
docs/                    # Documentation content (English)
  scnx/                  # SCNX platform docs (servers, billing, security)
  custom-bot/            # Custom Bot docs (modules, commands, troubleshooting)
  support-bot/           # Support Bot docs (modmail, tickets)
  linked-roles/          # Linked Roles docs
i18n/                    # Translations
  de/                    # German
  it/                    # Italian
src/
  pages/                 # Custom pages (landing page)
  theme/                 # Theme overrides (footer, doc footer, blog list)
  components/            # Reusable components (PlanPrice, ModuleOverview, etc.)
  css/                   # Global styles
static/                  # Static assets (images, icons)
blog/                    # News & blog posts
```

## Tech Stack

- [Docusaurus 3](https://docusaurus.io/) (React-based static site generator)
- [Algolia DocSearch](https://docsearch.algolia.com/) with AI assistant
- [FontAwesome Pro](https://fontawesome.com/) for icons
- i18n support for English, German, and Italian

## Development

### Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

Starts a local dev server with hot reload. For German locale:

```bash
yarn start --locale de
```

### Build

```bash
yarn build
```

### Fix Markdown Tables

```bash
yarn fix-tables
```

## Scripts

Execute scripts from the `bin/` directory:

- `node download-api-responses.js` — Cache SCNX API data to `api-responses.json` (required for other scripts and offline builds)
- `node generate-progress.js [orgID]` — View module translation progress (optionally filter by org)
- `node generate-docs-file.js <moduleName>` — Generate a docs template for a Custom Bot module
- `node generate-missing-files.js` — Generate placeholder files for undocumented modules

## Contributing

Contributions are welcome! Please:

1. [Create an issue](https://github.com/ScootKit/scnx-docs/issues) or [discussion](https://github.com/ScootKit/scnx-docs/discussions) first to coordinate
2. [Open a PR](https://github.com/ScootKit/scnx-docs/pulls) with your changes
3. Run `yarn fix-tables` before committing to fix markdown table formatting

### Adding Translations

- English docs live in `docs/`
- German translations go in `i18n/de/docusaurus-plugin-content-docs/current/`
- UI string translations go in `i18n/de/code.json`
- English is the fallback for any missing translations

### Documentation Style

- Use `:::info`, `:::warning`, `:::danger`, `:::tip` for callouts
- Reference images with `@site/docs/assets/...`
- Use `<Translate>` components in React code for i18n
- Use `<IncludedInPlan>` component to show plan availability
- Use `<PlanPrice>` component for dynamic pricing display

---

&copy; ScootKit, 2025 — All rights reserved. This project is proprietary software. See above for contribution guidelines.