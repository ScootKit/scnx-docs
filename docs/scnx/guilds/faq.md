---
sidebar_position: 6
---

# Frequently asked questions

Frequently asked questions about how servers work on SCNX.

## Why do I need to be the owner to add a server to SCNX? {#owner}

Only the owner can sign up a new Discord-Server to SCNX. The reason for this is legal and based on
our [Terms of Service](https://sc-net.work/scnx-tos) - we might change this in the future. For now, you can simply ask
the owner to [set up SCNX](./../../setup) on their server and ask them to give
you [trusted admin permissions](./trusted-admins).

---

## Can I create multiple Discord-Bots for a server? {#multiple-bots}

Sort of - you can create one [Custom Bot](../../custom-bot/intro) and one [Modmail Bot](../../modmail/intro) per
server. But you can not split features of the Custom-Bot into multiple bots (for example one bot for just
Temp-Channels). While you can add your bot to other servers, they won't work on them.
The reason for it is that hosting more bots would be very expensive for us, but the even bigger reason is the very
design of SCNX:
We designed our system to replace often multiple generic bots on a server by one, custom bot.

---

## Can I remove the SCNX Management Bot? {#scnx-manager-bot}

:::info
Do not simply kick the SCNX Management Bot, this will cause your server to be disabled on SCNX. Follow this guide to remove the SCNX Management Bot from your server.
:::

<IncludedInPlan data={{PRO: true, ACTIVE_GUILD: false, STARTER: false}} />

Servers with a [PRO Plan](./plans) can remove the SCNX Management Bot from their server.

### Requirements to remove the SCNX Bot {#scnx-manager-bot-requirements}

* The server needs to be on the [PRO Plan](./plans).
* The server needs to have no previous strikes against our [Terms of Service](https://scootk.it/scnx-tos).
* The server needs to have a [Custom Bot](./../../custom-bot/intro) created on SCNX.
* The server does not have a special billing agreement with ScootKit that might restrict this feature availability.

### Important information about this feature {#scnx-manager-bot-warning}

SCNX was designed with the SCNX Bot invited on servers. Due to this, certain functionality can't be used without the
SCNX Bot invited. You can find which features are affected below. Additionally, please keep the following information in
mind when using SCNX without the management bot:

* Certain features won't be available without the SCNX Bot invited, please review them carefully (see below).
* If your server gets downgraded (= loses its PRO-Plan), your bots on SCNX will stop until you re-invite the SCNX Bot to
  your server. No data will be lost, but your bots won't be available. Consider a [subscription](./plans#upgrade) or
  a [lifetime plan](./plans#lifetime) to avoid complications.
* The SCNX bot won't be able to message you via DMs if you do not share any server with the bot. This is important for
  invoice delivery or account information. You'll still receive these legally required notices via E-Mail, but consider
  joining our [Discord](https://scootk.it/dc) if you want to receive them on Discord as well.
* If the owner of the server changes, they will need to invite the SCNX Bot again due to legal reasons, but will be able
  to follow the [removal steps](#scnx-manager-bot-features-setup) again after agreeing to our Terms of Service.

### Features still supported without the SCNX Bot {#scnx-manager-bot-features-available}

The following features will still be available even if you have removed the SCNX Bot:

* [Custom Bot](./../../custom-bot/intro): You can still fully manage your existing custom bot on SCNX, but can't view
  chat history in [Login as Bot](./../../custom-bot/login-as-bot). You can still send messages or edit previously sent
  messages by ID.
* [Modmail Bot](./../../modmail/intro): You can still create and manage your SCNX Modmail Bot.
* SCNX Integrations: You can still add, manage and configure integrations normally.
* The SCNX Dashboard will work as normal, but will load slower compared to having the SCNX Management Bot invited.

### Features NOT supported without the SCNX Bot {#scnx-manager-bot-features-disabled}

* [SCNX Backups](./backups): The server can't use SCNX Backups without the SCNX Bot invited.
* [SCNX Analytics](./analytics): The server can't use SCNX Analytics without the SCNX Bot invited.
* [dcserver.link](./dcserver-link): The server's dcserver.link can't be used without the SCNX Bot invited.
* The SCNX Dashboard won't be always up-to-date with the server's current state (e.g. channel or role updates might be
  delayed).

### How to remove the SCNX Management Bot {#scnx-manager-bot-features-setup}

1. Click [here](https://scnx.app/glink?page=manager-bot) or visit
   the [settings page](https://scnx.app/glink?page=settings) of your server and click on "Learn how to remove teh SCNX
   Manager Bot".
2. Read the displayed information about feature availability without the SCNX Management Bot and click on "Continue".
3. Review your server's eligibility and click on "Continue" to continue.
4. Review final information and warnings about this feature and click on "Remove SCNX Management Bot and switch to
   reduced
   dashboard".
5. The SCNX bot will now leave your server, and SCNX will switch your server to the reduced dashboard mode.

### How to re-invite the SCNX Management Bot {#scnx-manager-bot-features-reinvite}

You'll find personalized invite links in the dashboard if your server is in reduced dashboard mode and try to access
disabled features (like Backups). Otherwise, you can always invite the SCNX Bot
with [this link](https://scootk.it/invite-scnx). Once invited, your SCNX Dashboard will automatically switch back to
normal mode, meaning that restricted features can be used again.

---

## What counts as commercial usage? {#commercial-usage}

To use SCNX in any commercial manner or situation, you'll need to purchase the [SCNX PRO Plan](https://scnx.xyz/plans).
Please read this [FAQ-Article](https://faq.scnx.app/commercial-usage-of-scnx/) to learn more about, appeal or report
commercial usage on SCNX.

---

## My server got banned / deactivated / flagged on SCNX - what can I do now? {#banned}

Oh no - please follow the instructions on your dashboard. If you need help,
please [reach out to our staff](https://scnx.app/help).

---

## Can I transfer all my SCNX Data from one server to another? {#transfer}

You can request a "complete data transfer" if both of your servers are currently active on SCNX
(please add the new server before creating a request), and you are the owner of both servers.

As this process involves manual labor from our site, the following policies apply:

* Your (your user-account's) first complete data transfer is free, if at least one of your servers has an active, paid
  plan.
* If you have already requested a complete data transfer for this or any other server, you will be
  charged [one SCNX Credit](./../account-and-billing/faq#scnx-credits), please make sure you have at least one credit
  left on your balance.
* If none of your servers have an active paid plan, you will be
  charged [one SCNX Credit](./../account-and-billing/faq#scnx-credits), please make sure you have at least one credit
  left on your balance.

:::danger
ALL data will be completely transferred to your new server. This will overwrite existing settings for your new server.
:::

To request a complete data transfer, please [contact our team](https://scnx.app/help).

---

## How can I remove my server from SCNX? {#deletion}

We're sorry that you want to leave SCNX - if you are only experiencing an issue with SCNX, we
are [happy to help](https://scnx.app/help) on our [Discord](https://sc-net.work/dc).

:::danger
Deleting a server on SCNX is irreversible. You need to be the owner to delete a server from SCNX. If you have an active
plan, subscription or purchase for the server you delete, this will be lost.
:::
If you want to delete your server permanently from SCNX, visit
the [server settings](https://scnx.app/glink?page=settings). Scroll down to the "Legal" section and click on "Delete
guild from SCNX". You'll be asked to select a reason (you won't need to elaborate) for deletion. Next, you'll receive a
DM to confirm your deletion request. Click the button below the DM to confirm your request, and your server will be
removed from SCNX - you'll receive confirmation once that's done via DMs - that usually takes about 1-5 minutes.