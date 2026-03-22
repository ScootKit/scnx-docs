---
sidebar_position: 7
toc_max_heading_level: 3
---

# Frequently asked questions

Frequently asked questions about how servers work on SCNX.

**Quick navigation:**
- **Setup:** [Owner requirement](#owner) | [Administrator access](#administrator) | [Server settings](#settings) | [Remove SCNX Bot](#scnx-manager-bot)
- **Bots:** [Multiple bots](#multiple-bots) | [Bot not working](#bot-issues) | [Custom Bot vs Support Bot](#bot-comparison)
- **Features:** [Enhanced Security](#enhanced-security) | [Trusted Admins](#trusted-admins) | [Backups](#backups) | [dcserver.link](#dcserver-link) | [Image Storage](#images) | [Analytics](#analytics)
- **Plans:** [Available plans](#plans) | [Commercial usage](#commercial-usage) | [Free plan limits](#starter-limits)
- **Management:** [Transfer data](#transfer) | [Delete server](#deletion) | [Banned/deactivated](#banned)

## Server Setup & Access

### Why do I need to be the owner to add a server to SCNX? {#owner}

You don't need to be the owner anymore! Anyone with Administrator permissions on a server can set up SCNX. Server owners still can claim servers and remove access from Administrators. Read more about [servers managed by Administrators](/docs/scnx/guilds/trusted-admins/#administrator).

### Can an administrator set up SCNX for a server? {#administrator}

Yes! Any Discord user with the **Administrator** permission can add a server to SCNX. The server owner can always reclaim exclusive control and remove administrator access. See the [Trusted Admins documentation](/docs/scnx/guilds/trusted-admins/#administrator).

### Where can I find my server settings? {#settings}

Open your server on the SCNX dashboard and click **Settings** in the sidebar. From there, you can manage permissions, Trusted Admins, Enhanced Security, dcserver.link, and more.

### Can I remove the SCNX Management Bot? {#scnx-manager-bot}

Yes. Simply kick the bot from your server. Servers without the SCNX Bot can't use SCNX Bot features like [backups](/docs/scnx/guilds/backups) or [analytics](/docs/scnx/guilds/analytics). All hosting features, including all features of your bots, are unaffected.

## Bots

### Can I create multiple Discord Bots for a server? {#multiple-bots}

Sort of - you can create one [Custom Bot](/docs/custom-bot/intro) and one [Support Bot](/docs/support-bot/intro) per server. You cannot split features of the Custom Bot into multiple bots (for example one bot for just Temp-Channels).

SCNX is designed to replace multiple generic bots on a server with one fully customizable bot.

### My bot is not working / offline {#bot-issues}

If your bot is offline or not responding, check the troubleshooting guide for your bot type:
- [Custom Bot Troubleshooting](/docs/custom-bot/troubleshooting)
- [Support Bot Troubleshooting](/docs/support-bot/troubleshooting)

You can also check the bot status panel on your dashboard to see if your bot is running, and restart it if needed. See [Bots on SCNX](/docs/scnx/guilds/bots) for details.

### What is the difference between Custom Bot and Support Bot? {#bot-comparison}

- **[Custom Bot](/docs/custom-bot/intro):** A general-purpose Discord bot with moderation, community, fun, and utility features. Available on all plans (free tier requires weekly extension).
- **[Support Bot](/docs/support-bot/intro):** A dedicated support system with modmail and ticket features, built for professional ticket handling. Requires a paid plan (Unlimited or higher).

Both bots are fully hosted on SCNX and can be customized through the dashboard.

## Features

### What is Enhanced Security? {#enhanced-security}

Enhanced Security requires all administrators to verify their identity via two-factor authentication before making any configuration changes. It's available on all paid plans and is being rolled out gradually. See the [Enhanced Security documentation](/docs/scnx/guilds/enhanced-security).

### What are Trusted Admins? {#trusted-admins}

Trusted Admins let server owners grant other users access to their server's SCNX dashboard with customizable permissions. You can control exactly which features each admin can use. See the [Trusted Admins documentation](/docs/scnx/guilds/trusted-admins).

### How do backups work? {#backups}

SCNX can back up your server's messages, channels, roles, and more. Backups are managed through the SCNX Management Bot and can be restored at any time. See the [Backups documentation](/docs/scnx/guilds/backups).

### What is dcserver.link? {#dcserver-link}

dcserver.link lets you create a custom vanity URL for your Discord server (e.g. `https://dcserver.link/yourserver`). See the [dcserver.link documentation](/docs/scnx/guilds/dcserver-link).

### What is Guild Image Storage? {#images}

Guild Image Storage lets you upload, organize, and reuse images across all your bot configurations. No more uploading files to your personal space and sharing links manually. See the [Guild Image Storage documentation](/docs/scnx/guilds/files).

### How do server analytics work? {#analytics}

SCNX provides analytics about your server's activity, including member statistics and more. Analytics require the SCNX Management Bot to be on your server. See the [Analytics documentation](/docs/scnx/guilds/analytics).

## Plans & Commercial Usage

### What plans are available? {#plans}

SCNX offers four plans:

| Plan | Price | Key Features |
|------|-------|-------------|
| **Starter** | Free | Custom Bot (weekly extension required), dashboard, dcserver.link |
| **Unlimited** | Starting at <PlanPrice plan="UNLIMITED" type="MONTHLY" /> | Custom Bot + Support Bot, no weekly extensions, Linked Roles |
| **Professional** | Starting at <PlanPrice plan="PROFESSIONAL" type="MONTHLY" /> | Everything in Unlimited + commercial usage, branding removal, premium hosting |
| **Enterprise** | Custom pricing | Everything in Professional + dedicated support, custom configuration |

See the [Plans & Subscriptions documentation](/docs/scnx/guilds/plans) for a full comparison.

### What are the limits of the free Starter plan? {#starter-limits}

On the Starter plan:
- Your Custom Bot needs to be extended **every 7 days** by watching a short ad
- No Support Bot access
- No Linked Roles
- Limited Custom Commands (10)
- Limited AI Credits (20/month)
- No commercial usage allowed

Upgrade to Unlimited or higher to remove these limitations.

### What counts as commercial usage? {#commercial-usage}

To use SCNX in any commercial manner or situation, you'll need to purchase the [Professional Plan](https://scnx.xyz/plans). Please read this [FAQ-Article](https://faq.scnx.app/commercial-usage-of-scnx/) to learn more about, appeal or report commercial usage on SCNX.

## Server Management

### Can I transfer all my SCNX data from one server to another? {#transfer}

You can request a "complete data transfer" if both of your servers are currently active on SCNX (please add the new server before creating a request), and you are the owner of both servers.

As this process involves manual labor from our side, you will be charged 4,99 EUR (including VAT) for a transfer.

:::danger
ALL data will be completely transferred to your new server. This will overwrite existing settings for your new server.
:::

To request a complete data transfer, please [contact our team](https://scnx.app/help).

### How can I remove my server from SCNX? {#deletion}

We're sorry that you want to leave SCNX - if you are only experiencing an issue with SCNX, we are [happy to help](https://scnx.app/help) on our [Discord](https://scootk.it/dc).

:::danger
Deleting a server on SCNX is irreversible. You need to be the owner to delete a server from SCNX. If you have an active plan, subscription or purchase for the server you delete, this will be lost.
:::

To delete your server:

1. Open your [server settings](https://scnx.app/glink?page=settings)
2. Scroll down to the **Legal** section
3. Click **Delete guild from SCNX**
4. Select a reason for deletion
5. Optionally add a comment
6. Type your server name exactly as it appears to confirm
7. Click confirm

You'll receive a confirmation email once the deletion is complete.

:::warning Before deleting
- **Paid plans are not refunded.** If you want a refund, request it per our [refund policy](https://scootk.it/scnx-refund-policy) *before* deleting.
- **Server-specific purchases** (like marketplace modules) will be lost permanently. Transfer them to another server first if needed.
- You can only delete a server **once every 48 hours** to prevent abuse.
:::

**If deletion fails**, you'll receive an error email. This can happen if:
- An internal error occurred during the cleanup process (bot removal, data deletion)
- The server was in an unexpected state (e.g. active subscription couldn't be canceled)

If deletion fails, you can try again later or contact [legal@scootkit.com](mailto:legal@scootkit.com) to have it deleted manually.

### My server got banned / deactivated / flagged on SCNX {#banned}

Oh no - please follow the instructions on your dashboard. If you need help, please [reach out to our staff](https://scnx.app/help).
