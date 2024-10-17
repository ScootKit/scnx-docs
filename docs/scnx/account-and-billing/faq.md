---
sidebar_position: 5
---

# Frequently asked questions

Frequently asked questions about user-features & billing on SCNX.

## Billing related {#billing}

### What are SCNX Credits? {#scnx-credits}

SCNX Credits are a virtual currency on SCNX. You can purchase them in
your [payment page](https://scnx.app/user/payments) and can redeem them for AI Credits, User
Storage, [Server Upgrades](./../guilds/plans#upgrade) and other purchases on SCNX. You can not pay-out purchased SCNX
Credits.

### How do I manage my subscription? {#manage-subscription}

To manage your subscription, visit your [payment page](https://scnx.app/user/payments) on your dashboard. There, you'll
be able to review and cancel any running subscriptions.

If you subscribed on Discord, you'll need to manage your subscription in your Discord account settings. We can't help
with billing issues, if you subscribed on Discord.

### I am VAT exempt {#vat}

We are currently not participating in the VAT-Reverse-Charge-System, but do not need to charge VAT for anyone,
regardless of their VAT status.

### How do I set my billing address? {#billing-details}

To set your billing address, please visit the [payment page](https://scnx.app/user/payments) on your dashboard. There,
you'll find the invoice data section. You can enter your invoice details there. If you need an invoice re-generated,
please contact [our staff](https://scnx.app/help).
Please note: Depending on your entries, we might ask you to verify the details (as required by law in certain
scenarios). If we find that you have abuse this (e.g. entered invalid addresses), we may disable this feature for your
account (or take other actions, if necessary).

### Why can't I pay with SEPA Direct Debit? {#direct-debit}

Please read this [FAQ Article](https://faq.scnx.app/sepa-lastschrift/) to review information about SEPA Direct Debit
payments.

### How do I pay on SCNX with a standing bank order (/ reoccurring bank transfer)? {#reoccurring-transfer}

1. First, enable the subscription on SCNX. To do so, open
   the [pricing page](https://scnx.app/glink?page=pricing?showUpgradeModal=true) of your server and open the upgrade
   window. Next, select your payment interval and plan. When asked for a payment method, please select "Reoccurring
   Bank-Transfer". You'll be shown unique payment instructions and [a unique IBAN](#wire-transfer).
2. Next, set up the reoccurring wire transfer at your bank:
    * [Sparkasse](https://www.sparkasse.de/pk/ratgeber/finanzglossar/dauerauftrag.html)
    * [Deutsche Bank](https://www.deutsche-bank.de/pk/shared/trxm/help-de/konten/konten-dauerauftraege.html)
    * [Volksbanken / Raiffeisenbanken](https://www.vr.de/privatkunden/unsere-produkte/was-ist-ein-girokonto/online-banking/dauerauftrag-einrichten-oder-aendern.html)
    * [Commerzbank](https://service.commerzbank.de/wie-richte-ich-einen-dauerauftrag-ein)
    * [ING](https://www.ing.de/hilfe/banking/)
    * [Hypovereinsbank](https://www.hypovereinsbank.de/hvb/kontaktwege/dauerauftrag)
    * [BUNQ](https://together.bunq.com/d/84-schedule-a-payment)
    * [N26](https://support.n26.com/de-de/zahlungen-ueberweisungen-und-abhebungen/lastschriften-und-dauerauftrage/wie-erstelle-und-verwalte-ich-dauerauftrage)
    * [Revolut](https://help.revolut.com/de-LU/help/receiving-payments/sending-money-to-an-external-bank-account/how-to-schedule-recurring-payments/business/)
    * Your bank is not listed? Just google the name of your bank combined with "reoccurring wire transfer" (or "
      Dauerauftrag" in German) to find guides. If you are still having trouble, please reach out to your bank.
3. Make sure all details match the details shown in your dashboard and confirm your reoccurring wire transfer with your
   bank.
4. Enjoy your SCNX Subscription 🚀

### How does SCNX know that I wired a bill? {#wire-transfer}

When paying with wire transfer, you'll be assigned a custom IBAN on a virtual bank account. Every payment that arrives
at that account will be credited towards your bills - the transaction reference is not required (but recommended for
one-time purchases), as we can easily assign a payment to your account based on the IBAN the money was received on.

Wired to much money on accident? Don't worry: You money will be automatically used for future payments - if you do not
use it within 90 days, our payment provider will return the money back to the bank account that the transfer originated
from (if that's not possible, Stripe will reach out and ask for bank details). You can
also [reach out to our staff](https://scnx.app/help) to get the money back sooner (please note that this is only
possible when you have unreconciled bank transfer balance).

### My card was declined, but all my data is valid {#no-reason-decline}

Here are a few possible reasons why this is happening:

* Your card was issued in Russia / by a Russian bank
* Your card was issued in a nation affected by international sanctions / by a bank in such nation
* Your card has been involved in fraud previously
* The data your entered is invalid
* Our payment provider deemed your transaction as high-risk and has denied it
* Your card has been reported as stolen
* You card could not be verified using 3DS

Please [contact our staff](https://scnx.app/help) if you think none of these reasons apply.

## Other questions

### Required scopes for Discord {#discord-access}

To use SCNX, you'll need to authorize certain access to your Discord account. Our access is strictly limited, but we
understand that you might be worried about sharing personal data with a third party. Here's an explanation about why we
require which scope.

:::tip
We're registered in the European Union - we comply with laws like
the [General Data Processing Regulation](https://gdpr-info.eu/) (one of the most strict data protection laws). You can
always request deletion of stored data, and we respect your privacy because we believe privacy is a human right. You can
find our privacy policy [here](https://scootkit.net/privacy).
:::

| Scope                                    | Explanation                                                                                                                                                                          |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Access your username, avatar, and banner | We require this information to identify you and to run the dashboard - we'll (for example) show your profile-picture in the dashboard.                                               |                                                                                                                                                         |
| Access to E-Mail-Address                 | This is required to send you invoices & legal information (like policy changes). We are not a certain big bot with a blue profile picture and will never send you marketing E-Mails. |
| Know what servers you're in              | In the dashboard we display all servers you have access to. For this to work, we need to know what servers you are currently in.                                                     |