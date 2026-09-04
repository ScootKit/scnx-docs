---
sidebar_position: 8
title: MCP Connector
description: Connect Claude or ChatGPT to SCNX to author, validate, simulate and debug Custom Commands v3 flows for your Discord server.
---

# MCP Connector

SCNX runs a remote [MCP](https://modelcontextprotocol.io) server at `https://mcp.scnx.app`. It lets an AI assistant
such as Claude or ChatGPT read your server's setup and help you build, test and debug **Custom Commands v3 (CCV3)**
flows - the visual flow-based commands described in the [Custom Commands documentation](/docs/custom-bot/custom-commands).

This is for you if you already build custom commands on SCNX and want an assistant that can look up the exact
actions and triggers available on your bot, write flows for you, check them for errors, run them safely, and help
you figure out why one failed - without you copy-pasting JSON back and forth.

## Requirements before it will work {#requirements}

:::info Read this first
The connector will connect and authorize even if these aren't met, but every tool that touches a specific server
will refuse to do anything until they are.
:::

- You must **own the Discord server**, or be a **trusted admin** with permissions that clear the same bar the
  dashboard uses for bot configuration (Bot-Administrator, Co-Owner, or the "Change and Reload Configuration /
  Custom Command" permission - see [Trusted Admins](/docs/scnx/guilds/trusted-admins#permissions)). SCNX rechecks
  this on every single tool call, so losing access mid-session drops the server from the connection immediately.
- The server needs the **Custom-Bot enabled** (see [Set up your Custom-Bot](/docs/custom-bot)), with its **bot
  online and running**. Guild-scoped tools reach your server through your bot's own host process - if it's offline,
  those calls fail.
- You need a **logged-in SCNX account** (the same one used for [scnx.app](https://scnx.app)) to complete the
  authorization step below.

If a tool call targets a server you don't have access to, or one where the bot isn't reachable, it returns a clear
refusal instead of guessing or falling back to something else.

## Connecting {#connecting}

The connector is an OAuth 2.1 server, so connecting always goes through your browser - no API key to copy. The flow
is the same shape in both Claude and ChatGPT:

1. Add a custom connector and paste the server URL: **`https://mcp.scnx.app/mcp`**.
2. Your client opens a browser tab and sends you to log in to SCNX (if you aren't already).
3. You land on the SCNX consent screen. There you choose:
   - **Which servers** to grant access to, picked individually from the servers you're eligible on.
   - **Read only** or **Read and make changes** - read-only lets the assistant look at everything but never
     create, edit, delete, activate or write anything; read-write additionally allows the write and storage-write
     tools described below.
   - **How long the grant lasts** - after 30 days, after 90 days, after 1 year, or never (until you revoke it).
4. Approve. Your client receives its tokens and the connector shows as connected.

You can change your mind at any time: reconnect to re-authorize with different servers, access level or expiry, or
revoke the grant from your SCNX account to cut it off immediately.

### In Claude

Open **Settings → Connectors**, add a custom connector, and paste `https://mcp.scnx.app/mcp` as the server URL.
Claude performs discovery and registration automatically, then opens the browser consent flow above.

### In ChatGPT

Open **Settings → Connectors**, add a custom connector (this may require enabling developer/advanced mode for
custom connectors first), and paste `https://mcp.scnx.app/mcp` as the server URL. ChatGPT performs the same
discovery and consent flow.

## What it can do {#capabilities}

Every tool is always visible to the assistant; write and storage-write tools simply refuse at call time on a
read-only connection.

### Read your setup

Look up your server's channels and roles, the bot's actual Discord permissions, and its remaining Custom Commands
budget and deploy/activation quota - useful pre-flight checks before authoring anything.

### Learn the format and browse the catalog

List and describe every action, trigger and parameter type available on your server's exact bot branch, search the
catalog by keyword, and read the built-in authoring guide and a gallery of real, validated example flows and
modules.

### Author and validate flows

Read your existing modules, flows and their configuration values, then validate a flow or module document and get
back structured errors and warnings - not a guess, not a silent pass.

### Simulate safely

Run a flow as a **forced dry run**: the assistant sees a structural, step-by-step trace of what would happen, but
the bot never actually sends, edits or deletes anything on Discord.

### Deploy (read-write only)

Create, update and delete modules and flows, set a module's configuration values, and reload the bot when needed.
Every write is snapshotted first and can be undone with a restore.

### Debug past runs

List recent executions and pull up one in detail to see its structural trace and error code, to work out why a
command failed in production.

### Inspect and change module storage (read-write for values and writes)

Check what's stored in a module's storage fields - structurally by default (field, size, how many records), with
raw values available only on request. Proposed storage changes are shown as a value-free diff before you commit
them.

### Read documentation and the marketplace

Search SCNX's documentation and fetch a page as markdown, and browse or install marketplace modules (an installed
module always arrives switched off, so it never activates automatically).

### Check whether you can publish

See which marketplace publisher organizations your account could publish under, whether each one has accepted the
marketplace terms, and whether it has a support link set - the publishing-readiness check the assistant runs before
it helps you put a module on the marketplace. This is the one thing the connector reads that belongs to your SCNX
account rather than to a server you selected.

## What it deliberately cannot do {#out-of-scope}

The connector is scoped to Custom Commands v3 - the flows and modules you build yourself with `create-module` and
`save-flow`. It is **not** a general SCNX control surface. It cannot:

- Configure any of the bot's **built-in modules** (levels, welcome, moderation, tickets, and the rest) - those are
  configured in the SCNX Dashboard, not through this connector.
- Manage **bot settings**, or start/stop a bot.
- Change a **bot token**.
- Touch **modmail**, **backups**, **analytics** or **billing**.

If you ask it to do any of these, it should tell you plainly that it doesn't support that yet and point you to the
[SCNX Dashboard](https://scnx.app) instead of attempting a workaround with the flow tools.

## Safety model {#safety}

- **Read-only vs read-write is enforced per connection.** A read-only grant cannot call any write or
  storage-write tool - each one refuses before it makes a network call.
- **Every write is snapshotted first**, so it's reversible. Deleting or overwriting a module or flow can be undone
  by restoring the snapshot returned with that write.
- **Activation is opt-in and can be refused.** Saving or activating a flow is only a request. A flow with
  validation errors, a bright-line abuse signal, or any destructive-tier action (banning a member, deleting a
  channel, kicking, pruning, and similar) is saved as an **inactive draft** instead of going live, for a human to
  arm from the dashboard.
- **Test runs are always simulations.** `run-test` is a forced dry run - it never sends, edits, or deletes
  anything on Discord, regardless of read-only or read-write access.
- **Almost everything is scoped to the servers you picked.** The one exception is the publishing-readiness check,
  which is account-scoped: it lists the marketplace publisher organizations you could publish under, plus their
  terms and support-link status. It reads nothing else about your account.
- **No Discord message or member content is ever returned.** Execution traces and storage inspection are
  structural by default. The only way to see a raw stored value is `inspect-storage` with `includeValues: true`,
  which needs a read-write grant and is logged every time it's used.

## Privacy and support {#privacy-and-support}

Read the [ScootKit Privacy Policy](https://corp.scootkit.com/docs/legal/privacy/) to see how your data is handled.

Something not working as documented here? Visit [scnx.app/help](https://scnx.app/help) - when reporting an issue,
include the server ID, the flow ID, and the execution number and error code if the problem involves a failed run.
