---
sidebar_position: 5.5
title: "Shopify"
description: "Read and update the orders, products, customers and stock of your Shopify shop from your flows, with an app you create in the Shopify Dev Dashboard."
---

# Shopify

The Shopify ready-made service lets your flows read and update your Shopify shop: look up an order, change a product, adjust stock, ship an order. You connect it once with an app you create in the Shopify Dev Dashboard. SCNX takes care of the access token, and your flows never see the token or the secret.

This page covers the Shopify connection. For connections and ready-made services in general, see [Integrations](./integrations.md#ready-made-services).

## What you can do {#what-you-can-do}

- **Orders** - list orders, look up one order with its order lines, and change the note and the tags of an order.
- **Products and variants** - list products, look up one product with its variations, and change the title, the status and the tags of a product.
- **Customers** - list customers and look up one customer. Addresses are not read.
- **Inventory levels** - read the stock of an item or of a location, set it to a number, or add to it and take from it.
- **Locations** - list the locations of your shop. Street addresses are not read.
- **Fulfillments** - list the fulfillment orders of an order and ship one of them. Shipping a fulfillment order fulfils every open item of it. The customer only gets Shopify's shipping email if you set Notify customer to true.

Every operation is listed with its inputs and outputs in the [service actions reference](/docs/custom-commands/reference/actions/bot-integrations).

## Requirements {#requirements}

- A Shopify store.
- An app in the Shopify Dev Dashboard that belongs to the same Shopify organization as the store. If the app and the store belong to different organizations, Shopify answers `shop_not_permitted` and SCNX cannot connect. An app you create yourself for your own store satisfies this.

Since 2026, Shopify no longer allows creating new custom apps in the store admin with a permanent token. That is why the Shopify service uses an app from the Dev Dashboard. If you already have an older custom app with a permanent token, see [Legacy apps with a token](#legacy-token).

## Create the app {#create-app}

1. In the Dev Dashboard of the Shopify organization that owns your store, click **Create app**.
2. Choose **Start from Dev Dashboard**.
3. Create a version of the app and give it these access scopes: `read_orders`, `write_orders`, `read_products`, `write_products`, `read_customers`, `read_inventory`, `write_inventory`, `read_locations`, `read_merchant_managed_fulfillment_orders` and `write_merchant_managed_fulfillment_orders`.
4. **Release** the version.
5. Click **Install app** and install it on your store.
6. Open the **Settings** of the app and copy the **Client ID** and the **Client secret**.

Two things need more than these scopes:

- Orders older than 60 days also need the `read_all_orders` scope, which Shopify has to approve for the app. Without it, those orders read as not found.
- To read customer data and the email and name fields of orders, the app also needs protected customer data access. Request it for the app in the Dev Dashboard.

Every operation names the scope it needs in its description.

## Connect in SCNX {#connect}

1. Open **Integrations** in the dashboard of your bot and choose **Shopify**.
2. Click **Connect**.
3. Fill in the fields:
   - **Shop name** - only the part of your shop's admin address before `.myshopify.com`. For `acme.myshopify.com` enter `acme`. A custom domain does not work.
   - **Client ID** - from the app's Settings.
   - **Client secret** - from the app's Settings.

To change the secret later, use **Change key**. It always asks for both values again, because SCNX never shows saved secrets.

## How the token works {#token}

Shopify issues an access token that is valid for 24 hours. SCNX requests it from your Client ID and Client secret and renews it automatically. Flows never see the token or the secret, and neither appears in logs.

## Customer data {#customer-data}

:::warning

Orders and customers contain personal data of your shop's customers, such as names and email addresses. Only send this data where you intend to and where you are allowed to. As the shop owner, your own privacy obligations apply to everything a flow does with it.

:::

## Legacy apps with a token {#legacy-token}

If an older custom app of your store already has a permanent Admin API access token, you can use it without the ready-made service. Create a custom connection of the type **API key in a header** with the header name `X-Shopify-Access-Token` and the base address `https://<shop>.myshopify.com`, where `<shop>` is your shop name. Then use the HTTP request step with that connection.

The ready-made Shopify operations need the connection with Client ID and Client secret. They do not work with a permanent token.

## API version {#api-version}

The service uses the Shopify Admin REST API in version `2026-04`. SCNX moves to a newer version roughly every quarter.

Shopify limits how fast a shop can be called and answers `429` when you are over the limit. A step can fail with a catchable "rate limited" error, so add a fallback to flows that call Shopify often.

## Troubleshooting {#troubleshooting}

- **A step fails with "This connection must be reconnected on the Integrations page before it can be used again."** Shopify refused the credentials with `shop_not_permitted`, `invalid_client` or `app_not_installed`. Common causes: the app and the store are in different Shopify organizations, the Client secret is wrong or was rotated, the app was uninstalled from the store, or the shop name is wrong. Fix the app, the secret or the shop name, then use **Change key** and enter both values again.
- **SCNX cannot reach the shop.** The shop name is wrong. Enter only the part before `.myshopify.com`, without `https://` and without a custom domain.
