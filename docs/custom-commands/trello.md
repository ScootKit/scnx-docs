---
sidebar_position: 5.6
title: "Trello"
description: "Read boards, lists and cards of your Trello account and create, update and move cards from your flows, with your own Trello API key and token."
---

# Trello

The Trello ready-made service lets your flows work with your Trello boards: look up a card, create a card, move it to another list, add a comment. You connect it once with an API key and a token that you create yourself in your own Trello account. SCNX has no Trello app of its own, and your flows never see the key or the token.

This page covers the Trello connection. For connections and ready-made services in general, see [Integrations](./integrations.md#ready-made-services).

## What you can do {#what-you-can-do}

- **Boards** - list the boards you can open and look up one board.
- **Lists** - list the lists of a board.
- **Cards** - list the cards of a board or of a list, look up one card, create a card, change a card, move a card to another list and archive a card.
- **Labels** - list the labels of a board.
- **Board members** - list the members of a board.
- **Comments** - list the comments of a card and add a comment.

You find every operation under Trello in the action picker of the flow editor, with its inputs and outputs. Other ready-made services are listed in the [service actions reference](/docs/custom-commands/reference/actions/bot-integrations).

Not included: webhook triggers (a flow cannot start when a card changes), Power-Up features, board import and enterprise endpoints.

## Requirements {#requirements}

- A Trello account that can open the boards you want to use.
- Your own API key and token.

SCNX has no Trello app of its own. The key and the token are yours, so Trello's limits apply to you alone and not to other SCNX users.

## Create the app and the API key {#create-app}

1. Open `https://trello.com/apps/admin` and create a new Power-Up or integration.
2. Choose **My app doesn't use Power-Up capabilities**.
3. Open the **API key** tab and copy the **API key**.

The API secret is not needed.

## Create the token {#create-token}

1. Open this address in your browser and replace `YOUR_API_KEY` with your API key:

   ```
   https://trello.com/1/authorize?expiration=never&scope=read,write&response_type=token&name=SCNX&key=YOUR_API_KEY
   ```

2. Click **Allow** and copy the token Trello shows.

Why these values:

- `scope=read,write` lets flows read and change your boards. The `account` scope is not requested.
- `expiration=never` keeps the token valid until you remove it. A shorter expiration would make the connection stop working when the token runs out.

The token can read and change every board that your Trello account can open. Keep it as private as a password.

## Connect in SCNX {#connect}

1. Open **Integrations** in the dashboard of your bot and choose **Trello**.
2. Click **Connect**.
3. Fill in the fields:
   - **API key** - the key from the API key tab.
   - **Token** - the token you copied after clicking Allow.

Paste only the values, not an address and not `key=` or `token=`.

To change a value later, use **Change key**. It always asks for both values again, because SCNX never shows saved secrets.

## Limits {#limits}

Trello allows 300 requests per 10 seconds for each API key and 100 requests per 10 seconds for each token. A step that goes over the limit fails with a catchable "rate limited" error.

If Trello has to reject too many requests in a window (more than 200), it blocks the key until the window ends. Keep loops short and add a wait step between requests.

## Terms {#terms}

:::warning

The key and the token belong to your own agreement with Atlassian, the company behind Trello. SCNX does not resell or share Trello access. Only use boards and data that you are allowed to automate.

:::

## Revoke access {#revoke}

To cut access, remove the token under the authorized apps in your Trello account settings, then delete the connection in SCNX. Deleting the connection in SCNX removes the stored key and token.

## Troubleshooting {#troubleshooting}

- **A step fails with "Trello refused the connection (status 401)".** Trello did not accept the key and token. Common causes: the key and the token were swapped or one of them is wrong, the API secret was pasted instead of the token, the token was created without the `write` scope and a step tries to write, or the token's Trello account cannot open the board.
- **A step keeps failing after you fixed the problem in Trello.** A wrong value does not mark the connection as "Needs reconnect" automatically. Open the connection, click **Change key** and enter both the API key and the token again. SCNX never shows saved secrets, so both values are always asked for.
- **A step fails with "rate limited".** See [Limits](#limits).
