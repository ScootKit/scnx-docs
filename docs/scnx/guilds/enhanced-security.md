---
sidebar_position: 6
title: Enhanced Security
---

# Enhanced Security for Servers

Enhanced Security is an opt-in feature that adds an additional layer of protection to your SCNX server configuration. When enabled, all administrators are required to verify their identity through two-factor authentication before making any changes to your bot configuration, modmail settings, integrations, or other sensitive server settings.

## What Does Enhanced Security Protect Against?

### Compromised Trusted Admin Accounts

If a trusted admin's Discord account is compromised (e.g. through phishing, credential stuffing, or token theft), the attacker gains access to their SCNX session. Without Enhanced Security, they could immediately modify your bot configuration, change modmail settings, disable integrations, or cause other damage.

With Enhanced Security enabled, the attacker would additionally need access to the admin's 2FA method (authenticator app, hardware security key, or recovery codes) to make any configuration changes - even if they have a valid session.

### Unauthorized Changes by Shared Accounts

In some organizations, multiple people may have access to the same Discord account or share login credentials. Enhanced Security ensures that each configuration change requires explicit identity verification, creating accountability and preventing unauthorized modifications.

### Session Cookie Hijacking

**Important caveat:** Enhanced Security provides **partial but not complete** protection against session cookie hijacking (also known as session theft or cookie theft via malware/XSS).

Here's why:

**What it protects:**

- If an attacker steals a session cookie that does NOT have an active sudo mode session, they cannot make configuration changes. They would need the victim's 2FA device to activate sudo mode.
- Sudo mode expires after 40 minutes (TOTP) or 60 minutes (security keys), so even if an attacker steals a cookie during an active sudo session, the window of opportunity is limited.

**What it does NOT protect:**

- If the attacker steals the cookie while sudo mode is already active (within the 40/60 minute window), they can make changes until it expires.
- Session cookies themselves are not bound to the 2FA verification - they are standard HTTP session cookies.

**For maximum protection against session hijacking, we recommend:**

- Using hardware security keys (shorter active sessions are less risky, and the 60-minute window is still relatively short)
- Logging out of SCNX when not actively managing your server
- Keeping your browser and operating system up to date
- Not installing untrusted browser extensions
- [Disabling email self-recovery](/docs/scnx/account-and-billing/account-security#disable-email-recovery) (prevents email-based 2FA reset even if email is compromised)

:::tip
For the highest level of security, combine Enhanced Security with hardware security keys and [disabled email self-recovery](/docs/scnx/account-and-billing/account-security#disable-email-recovery). This ensures that even if both your Discord account and email are compromised, an attacker cannot reset your 2FA or make configuration changes without physical access to your security key.
:::

## How to Enable Enhanced Security

### Availability

Enhanced Security is available on **all paid plans** (Unlimited, Professional, and Enterprise) and is being rolled out gradually. If you don't see the option yet in your server settings, your server will get access soon.

:::info
Enhanced Security is rolling out in stages to all paid servers. If you'd like early access, [contact support](https://scnx.app/help).
:::

### Prerequisites

Before enabling Enhanced Security on your server, **all administrators** (owner + trusted admins) must:

1. **Set up two-factor authentication** - Visit [scnx.app/user/security](https://scnx.app/user/security) and configure at least one 2FA method (see [Account Security](/docs/scnx/account-and-billing/account-security/) for details):
   - **Authenticator app** (TOTP) - e.g. Authy, Google Authenticator
   - **Hardware security key** - e.g. YubiKey (recommended for highest security)
2. **Generate recovery codes** - On the security page, generate and securely store your 8 backup recovery codes

If a trusted admin has not set up 2FA, they will be prompted to do so before they can access any server configuration pages.

### Enabling the Feature

1. Navigate to your server's **Settings** page on SCNX
2. Find the **Enhanced Security** option
3. Toggle it on
4. Confirm the change

Once enabled, all configuration changes on your server will require an active sudo mode session.

### What Changes Require Sudo Mode?

When Enhanced Security is enabled, the following actions require identity verification:

- Editing bot configuration (commands, modules, settings)
- Changing modmail configuration
- Managing integrations
- Editing linked roles
- Changing server settings
- Managing trusted admins and permissions

The following actions do **not** require sudo mode (even with Enhanced Security):

- Viewing the dashboard and analytics
- Viewing bot logs

## For Trusted Admins

If you're a trusted admin on a server with Enhanced Security enabled:

1. You'll see a shield icon on the server sidebar indicating Enhanced Security is active
2. When you open the server on the SCNX dashboard, you'll immediately be prompted to verify your identity and enter sudo mode
3. Sudo mode lasts for **40 minutes** (authenticator app) or **60 minutes** (security key)
4. After expiration, you'll be prompted to re-verify before you can continue making changes

### If You Don't Have 2FA Set Up

You'll see a message asking you to set up two-factor authentication before you can access server configuration.

Visit [scnx.app/user/security](https://scnx.app/user/security) to set up your 2FA (see [Account Security](/docs/scnx/account-and-billing/account-security/) for a guide), then return to the server configuration.

## Disabling Enhanced Security

Only the server owner can disable Enhanced Security. Navigate to your server's Settings page and toggle the feature off.

:::warning
Disabling Enhanced Security removes the 2FA requirement for all configuration changes. All trusted admins will be able to make changes without identity verification.
:::

## Frequently Asked Questions

### Does Enhanced Security affect normal server usage?

No. Enhanced Security only affects configuration changes made through the SCNX dashboard. Your bots, modmail, integrations, and other features continue to operate normally.

### What happens if I lose access to my 2FA?

You can use your recovery codes to enter sudo mode. If you've also lost your recovery codes, you can initiate an email-based 2FA reset which has a 7-day waiting period for security. See [Account Security - Losing Access to Your 2FA](/docs/scnx/account-and-billing/account-security#losing-access) for details.

If you've disabled email self-recovery, you'll need to contact support for manual verification.

### Can I use Enhanced Security on a free plan?

Enhanced Security requires a paid plan (Unlimited or higher). It's not available on the free Starter plan. If you're on a paid plan but don't see the option yet, it's being rolled out gradually and your server will get access soon.

### Does the server owner also need 2FA?

Yes. When Enhanced Security is enabled, everyone - including the server owner - must verify their identity to make configuration changes.

---

_Enhanced Security is a feature of the SCNX platform by ScootKit. For questions or to request access, visit [scnx.app/help](https://scnx.app/help)._
