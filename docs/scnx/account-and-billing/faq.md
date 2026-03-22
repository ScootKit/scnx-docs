---
sidebar_position: 5
toc_max_heading_level: 3
---

# Frequently asked questions

Frequently asked questions about user features & billing on SCNX.

**Quick navigation:**
- **Payment Methods:** [Accepted methods](#accepted-payments) | [Google Pay / Apple Pay](#google-apple-pay) | [SEPA Direct Debit](#direct-debit) | [Standing bank order](#reoccurring-transfer) | [Wire transfer](#wire-transfer) | [Paysafecard](#paysafecard)
- **Billing:** [Manage subscription](#manage-subscription) | [Billing address](#billing-details) | [VAT exempt](#vat) | [Refunds](#refund) | [Card declined](#no-reason-decline)
- **Account:** [Set up 2FA](#2fa) | [Lost 2FA access](#lost-2fa) | [Delete account](#account-deletion)
- **Email:** [What email is used](#email) | [Change email](#change-email) | [Not receiving emails](#no-emails)
- **Other:** [Discord scopes](#discord-access) | [Get help](#help)

## Payment Methods

### What payment methods are accepted? {#accepted-payments}

SCNX accepts a wide range of payment methods via Stripe, Paddle, and other providers. Availability depends on your region and the type of purchase:

**Cards & Wallets:**

| Method | Availability |
|--------|-------------|
| Credit / Debit Card (Visa, Mastercard, Amex) | Worldwide |
| Google Pay | Via "Card" option (see [below](#google-apple-pay)) |
| Apple Pay | Via "Card" option (see [below](#google-apple-pay)) |
| PayPal | Worldwide |
| Amazon Pay | Selected regions |
| Klarna | Selected EU countries |
| Revolut Pay | Selected regions |

**Bank-based methods:**

| Method | Availability |
|--------|-------------|
| SEPA Bank Transfer (wire) | EU |
| SEPA Direct Debit | EU ([by request](#direct-debit)) |
| Standing Bank Order (reoccurring transfer) | EU ([setup guide](#reoccurring-transfer)) |
| Sofort | Germany, Austria, Belgium, Netherlands |
| iDEAL | Netherlands |
| Bancontact | Belgium |
| EPS | Austria |
| Giropay | Germany |
| Przelewy24 | Poland |
| Online Banking (Trustly) | Selected EU countries |
| Multibanco | Portugal |

**Regional & other methods:**

| Method | Availability |
|--------|-------------|
| Paysafecard | Selected regions ([see below](#paysafecard)) |
| Twint | Switzerland |
| MobilePay | Denmark, Finland |
| Satispay | Italy |
| BANCOMAT Pay | Italy |
| WeChat Pay | China |
| Alipay | China |

:::info
The exact methods available to you will be shown during checkout. Some methods are only available for one-time purchases, not subscriptions.
:::

### How do I use Google Pay or Apple Pay? {#google-apple-pay}

Google Pay and Apple Pay are available when selecting **Card** as the payment method during checkout. Make sure that:
- Third-party cookies are allowed in your browser
- Your wallet (Google Pay / Apple Pay) is configured correctly

If your wallet is set up correctly, the option will appear automatically in the card payment form. Even if you use PayPal through Google Pay, select "Card" as the payment method.

### Can I pay with Paysafecard? {#paysafecard}

Yes! Paysafecard is available for one-time purchases. Select "Paysafecard" during checkout and you'll be redirected to complete the payment.

### Request access to SEPA Direct Debit {#direct-debit}

SEPA Direct Debit isn't available by default due to the high-risk nature of the payment method.

You can request access if you meet the following requirements:

* Positive payment history with your first payment going back at least two months
* At least 20,00 EUR spent in total at SCNX
* Only payments made directly to the ScootKit UG (haftungsbeschraenkt) are eligible

Check your [payment history](https://scnx.app/user/payments) and contact [billing@scootkit.com](mailto:billing@scootkit.com) to request access.

### How do I pay with a standing bank order? {#reoccurring-transfer}

1. Open the [pricing page](https://scnx.app/glink?page=pricing?showUpgradeModal=true) of your server, select your plan and payment interval, and choose "Reoccurring Bank-Transfer". You'll be shown payment instructions with [a unique IBAN](#wire-transfer).
2. Set up the reoccurring wire transfer at your bank:
    * [Sparkasse](https://www.sparkasse.de/pk/ratgeber/finanzglossar/dauerauftrag.html)
    * [Deutsche Bank](https://www.deutsche-bank.de/pk/shared/trxm/help-de/konten/konten-dauerauftraege.html)
    * [Volksbanken / Raiffeisenbanken](https://www.vr.de/privatkunden/unsere-produkte/was-ist-ein-girokonto/online-banking/dauerauftrag-einrichten-oder-aendern.html)
    * [Commerzbank](https://service.commerzbank.de/wie-richte-ich-einen-dauerauftrag-ein)
    * [ING](https://www.ing.de/hilfe/banking/)
    * [N26](https://support.n26.com/de-de/zahlungen-ueberweisungen-und-abhebungen/lastschriften-und-dauerauftrage/wie-erstelle-und-verwalte-ich-dauerauftrage)
    * [Revolut](https://help.revolut.com/de-LU/help/receiving-payments/sending-money-to-an-external-bank-account/how-to-schedule-recurring-payments/business/)
    * Your bank not listed? Google your bank's name combined with "Dauerauftrag" (or "standing order" in English).
3. Make sure all details match your dashboard and confirm.

### How does SCNX know that I paid via wire transfer? {#wire-transfer}

You'll be assigned a custom IBAN on a virtual bank account. Every payment arriving at that account is credited towards your bills - the transaction reference is not required (but recommended for one-time purchases), as we identify payments by the receiving IBAN.

Wired too much money? Don't worry - your balance will be automatically used for future payments.

## Billing & Invoices

:::warning
These answers apply to customers inside the European Union. Outside the EU, we partner with other companies who will be the Merchant of Record. Please [contact them](https://corp.scootkit.com/docs/scnx/policies/authorized-resellers/) if you have questions.
:::

### How do I manage my subscription? {#manage-subscription}

Visit your [payment page](https://scnx.app/user/payments) to review and cancel running subscriptions.

If you subscribed on Discord, manage your subscription in your Discord account settings.

### How do I set my billing address? {#billing-details}

Visit the [payment page](https://scnx.app/user/payments) and find the invoice data section. Your details will only be used for new invoices. We may ask you to verify details as required by law.

### I am VAT exempt {#vat}

Contact [billing@scootkit.com](mailto:billing@scootkit.com) to verify your account.

### How do I get a refund? {#refund}

[Contact our team](https://scnx.app/help) to request a refund. Refunds are handled on a case-by-case basis per our [Terms of Service](https://scootk.it/scnx-tos).

### My card was declined {#no-reason-decline}

Possible reasons:

* Your card was issued in a sanctioned nation
* Your card has been involved in fraud previously
* The data you entered is invalid
* Our payment provider deemed your transaction as high-risk
* Your card has been reported as stolen
* Your card could not be verified using 3DS

[Contact our staff](https://scnx.app/help) if you think none of these apply.

## Account & Security

### How do I set up two-factor authentication (2FA)? {#2fa}

Visit [scnx.app/user/security](https://scnx.app/user/security) to set up an authenticator app or hardware security key. We recommend also generating recovery codes as a backup.

See the [Account Security documentation](/docs/scnx/account-and-billing/account-security) for a step-by-step guide.

### I lost access to my 2FA device {#lost-2fa}

You have three recovery options:
1. **Recovery codes** - use one of your 8 backup codes
2. **Email-based reset** - initiate a reset from the security page (7-day waiting period)
3. **Contact support** - [reach out to the SCNX team](https://scnx.app/help)

See [Account Security - Losing Access](/docs/scnx/account-and-billing/account-security#losing-access) for details.

### How do I delete my SCNX account? {#account-deletion}

[Contact our team](https://scnx.app/help) to request deletion of your SCNX account and all associated data. As we are based in the European Union, we comply with the [GDPR](https://gdpr-info.eu/) and will process your request promptly.

## Privacy & Discord Access

### Required scopes for Discord {#discord-access}

To use SCNX, you'll need to authorize certain access to your Discord account. Our access is strictly limited.

:::tip
We're registered in the European Union and comply with the [GDPR](https://gdpr-info.eu/). You can always request deletion of stored data. Find our privacy policy [here](https://scootkit.net/privacy).
:::

| Scope                                    | Explanation                                                                                                |
|------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Access your username, avatar, and banner | Required to identify you and run the dashboard (e.g. show your profile picture).                           |
| Access to E-Mail-Address                 | Required to send invoices & legal information (like policy changes). We will never send marketing emails.   |
| Know what servers you're in              | Required to display all servers you have access to in the dashboard.                                        |

## Email & Notifications

### What email does SCNX use to contact me? {#email}

SCNX uses the **email address from your Discord account** to send you important communications, including:

- **Invoices and payment confirmations**
- **Server deactivation notices**
- **2FA reset confirmations**
- **SCNX Cares accommodation vouchers**
- **Deletion confirmations**
- **Legal notices** (Terms of Service changes, policy updates)

We will never send marketing emails.

### How do I change my email on SCNX? {#change-email}

Since SCNX uses your Discord email, you need to change it in Discord first, then log back into SCNX:

1. Open your **Discord account settings** and [update your email address](https://support.discord.com/hc/en-us/articles/4423385681175-How-to-Change-your-Discord-Account-s-Email)
2. **Log out of SCNX** at [scnx.app](https://scnx.app)
3. **Log back in** - SCNX will automatically pick up your new Discord email

:::warning
Make sure you always have access to the email linked to your Discord account. This email is used for invoices, security notifications, and account recovery.
:::

### I'm not receiving emails from SCNX {#no-emails}

Check the following:
- Look in your **spam/junk folder** for emails from `@scnx.xyz` and `@scootkit.com`
- Make sure your Discord email is correct and accessible
- Add the following addresses to your contacts or safe senders list: `care@scnx.xyz`, `noreply@scnx.xyz`, `no-reply@scnx.xyz`, `billing@scootkit.com`, `legal@scootkit.com`, `compliance@scnx.xyz`

If you're still not receiving emails, [contact our support team](https://scnx.app/help).

## Getting Help

### Where can I get help? {#help}

* Visit our [help center](https://scnx.app/help) to contact the support team
* Join our [Discord server](https://scootk.it/dc) for community support
* Browse this [documentation](/) for guides and tutorials
