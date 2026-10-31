# Sell with Stripe

Sell things on your Discord server with Stripe Checkout: a member picks a product, pays on Stripe's own page, and your flow delivers the order when Stripe confirms the payment. Payments happen on Stripe's page, so nothing in SCNX ever sees card data.

This guide uses the [Stripe ready-made service](/docs/custom-bot/ccv3/integrations#ready-made-services) and a Stripe webhook. The example module **Stripe Shop** contains a complete working shop you can install and adapt.

## Before you start {#before-you-start}

- You need a Stripe account. Stripe has a test mode with fake cards and fake money: build and test everything in test mode first, with a test-mode key, and switch to a live key only when the whole shop works.
- You need the [Integrations](/docs/custom-bot/ccv3/integrations) basics: connections store your key, hooks receive Stripe's events.

## Create a restricted key {#restricted-key}

In the Stripe Dashboard, open **Developers**, then **API keys**, and create a restricted key (`rk_...`). Grant only the permissions your flows use:

| Action                  | Stripe permission | Level |
| ----------------------- | ----------------- | ----- |
| Get customer            | Customers         | Read  |
| Get charges             | Charges           | Read  |
| Get payments            | PaymentIntents    | Read  |
| Get balance             | Balance           | Read  |
| Create Checkout session | Checkout Sessions | Write |
| Get Checkout session    | Checkout Sessions | Write |
| Expire Checkout session | Checkout Sessions | Write |
| Create payment link     | Payment Links     | Write |
| Create refund           | Refunds           | Write |

:::warning
Never use your secret key (`sk_...`). A key with write permissions can create payments and refunds on your Stripe account, so keep it to what the shop needs. Keep the shop key apart from any read-only key: create a second Stripe connection for the shop and give it a name that says so, for example "Stripe shop (write)". Your read-only flows then keep using the read key.
:::

## Connect Stripe {#connect}

1. On the Integrations page, create a connection for the **Stripe** service and paste the restricted key.
2. In the trigger of a flow (for example **Checkout completed**), create a Stripe webhook right there. SCNX shows you its URL. The hook does not accept any request until you paste the signing secret (`whsec_...`) that Stripe shows for the endpoint.
3. In the Stripe Dashboard, open **Developers**, then **Webhooks**, and add an endpoint with that URL. Create it on the current API version: webhook payloads use the API version of the endpoint, not the version SCNX uses for its own requests to Stripe.
4. Select exactly these event types:
   - `checkout.session.completed`
   - `checkout.session.async_payment_succeeded`
   - `checkout.session.async_payment_failed`
   - `checkout.session.expired`
   - `charge.refunded`
   - `charge.dispute.created`

## The shop flow {#shop-flow}

The **Stripe Shop** example module has six flows. This is the path of one order:

1. `open-shop` is a slash command that posts a dropdown of products.
2. `buy` runs when a member picks a product. It stores the order under a generated order number, runs **Create Checkout session** with the order number as its **Reference**, stores the session ID with the order and sends the payment link to the buyer privately.
3. The buyer pays on Stripe's page.
4. `order-paid` starts on the **Checkout completed** trigger. It continues only when **Payment status** is `paid` and calls the shared `fulfil-order` flow.
5. `order-paid-later` starts on the **Delayed payment succeeded** trigger and calls `fulfil-order` as well. This covers payment methods that confirm later.
6. `fulfil-order` looks the order up by its order number, stops when it was already fulfilled, stores the payment ID (`pi_...`), opens a private ticket thread for the buyer and your team role and notifies the team.
7. `mark-delivered` is a button in that thread. It marks the order completed and asks the buyer for a review.

Things to know when you build your own:

- A session and a payment link have one line item. Send a cart as one total with a descriptive name, for example "3 items: Sticker pack, T-shirt".
- **Expires at** is optional. If you set it, it must be 30 minutes to 24 hours ahead. Compute it once in the flow and store it with the order.
- If creating the ticket fails after the order was marked paid, for example because the bot lacks the permission to create threads, the example does not retry it. The order stays paid. Check the permissions of your bot, then deliver that order by hand.

## Fulfil only on the webhook {#fulfil-on-webhook}

Never deliver an order because the buyer reached your success link. Anyone can open that link. Deliver only when Stripe's webhook tells you the payment went through.

- **Checkout completed** also arrives for payments that are not paid yet. Check **Payment status**: it is `paid` for cards and `unpaid` for delayed methods such as bank transfers.
- A delayed payment that succeeds later arrives with **Delayed payment succeeded** (Stripe event type `checkout.session.async_payment_succeeded`). Fulfil there. **Delayed payment failed** arrives when it does not work out.
- Check the stored order state, not the status of the session: stop when your order record says it was already fulfilled.

## Repeated events {#repeated-events}

SCNX runs a flow once per Stripe event ID for 24 hours, for every Stripe webhook. Stripe retries a failed delivery with a fresh signature, and SCNX still recognizes the event ID. A "Resend" from the Stripe Dashboard within 24 hours is treated as a duplicate and ignored.

Still store the **Event ID** with the order and check the stored order state, so a repeated event never fulfils an order twice.

## Retries and double clicks {#idempotency}

Send the same inputs to **Create Checkout session** or **Create refund** again within 24 hours and you get the same result: the same Checkout session, the same refund. A double click does not create two sessions or two refunds.

- For a new Checkout session, use a new order number.
- To refund the same amount twice on purpose, change one input, for example the **Reason** or a metadata value.

## Refunds and disputes {#refunds-disputes}

Metadata and the client reference ID of a Checkout session do not reach the charge. When a refund or a dispute arrives, you cannot find the order by its order number. So:

1. When the payment completes, store the payment ID (`pi_...`, from **Payment ID**) on the order. The example does this in `fulfil-order`.
2. Refund with **Create refund** and that payment ID.
3. On **Charge refunded** and **Dispute opened**, look the order up by **Payment ID**.

**Charge refunded** carries the amount, the refunded amount and whether it was refunded fully, but no refund reason. Only **Dispute opened** has a **Reason**.

## Testing {#testing}

- In the flow editor's test runs, the Stripe write actions are not sent to Stripe. They return sample values, so you can test the rest of the flow. To test the real thing, use a test-mode key and run the command for real.
- With the [Stripe CLI](https://docs.stripe.com/stripe-cli) you can send test events to your endpoint, for example `stripe trigger checkout.session.completed`.
- Create the webhook endpoint on the current API version, because webhook payloads follow the endpoint's version, not the one SCNX pins for its requests.
- Pay with Stripe's test cards. Use a delayed method to test the **Delayed payment succeeded** path.

## Troubleshooting {#troubleshooting}

- **The error code `MISSING_PERMISSIONS`**: the key can read but not write. The error names the missing permission. Edit the restricted key in the Stripe Dashboard and grant it, see [Create a restricted key](#restricted-key).
- **The webhook refuses every event**: the hook still waits for its signing secret. Paste the `whsec_...` secret of the endpoint into the hook.
- **Events do not start flows**: check that the event type is selected on the endpoint and that the flow is active.
- **The bot was offline**: Stripe retries, and SCNX keeps events for up to 24 hours. The flows run when the bot is back.
