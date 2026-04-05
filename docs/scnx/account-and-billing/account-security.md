---
sidebar_position: 3
title: Account Security
---

# Account Security

Protect your SCNX account with two-factor authentication (2FA). When 2FA is enabled, you'll need to verify your identity using an authenticator app, hardware security key, or recovery code before making sensitive changes.

Manage all security settings at [scnx.app/user/security](https://scnx.app/user/security).

## Setting Up Two-Factor Authentication

You can set up one or both of the following 2FA methods on your account:

### Authenticator App (TOTP)

Use an authenticator app to generate time-based one-time codes. Popular options include:
- [Ente Auth](https://ente.io/auth/) (open-source, cross-platform, with encrypted cloud backup)
- [Authy](https://authy.com/) (cross-platform with cloud sync)
- [Google Authenticator](https://support.google.com/accounts/answer/1066447)
- [Bitwarden](https://bitwarden.com/) (open-source password manager with built-in TOTP)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)

1. Go to [scnx.app/user/security](https://scnx.app/user/security)
2. In the **Authenticator App** section, follow the setup instructions
3. Scan the QR code with your authenticator app
4. Enter the code shown in your app to confirm setup

:::info
If you already have a security key set up, you can remove the authenticator app method. However, you must always have at least one 2FA method active.
:::

### Hardware Security Keys

Use a physical security key like a **YubiKey** or any FIDO2/WebAuthn compatible device. Security keys provide the strongest protection because they cannot be phished.

1. Go to [scnx.app/user/security](https://scnx.app/user/security)
2. In the **Security Keys** section, click **Add Security Key**
3. Enter a name for your key (e.g. "YubiKey Blue")
4. Follow your browser's prompt to register the key (you may need to touch or tap the key)

You can register up to **5 security keys** on your account.

:::tip
We recommend registering at least two security keys if possible - a primary key and a backup stored in a safe location.
:::

## Recovery Codes

Recovery codes are one-time-use backup codes that let you access your account if you lose your 2FA device. Each code can only be used once.

### Generating Recovery Codes

1. Go to [scnx.app/user/security](https://scnx.app/user/security)
2. In the **Recovery Codes** section, click **Generate Recovery Codes** (or **Regenerate** if you already have codes)
3. You'll receive **8 recovery codes**
4. **Save them securely** - copy them to a password manager or print them and store in a safe place

:::warning
When you regenerate recovery codes, all previous codes are invalidated. Make sure to save the new codes immediately.
:::

:::caution
Recovery codes are your last resort for account access. If you lose both your 2FA device and your recovery codes, you'll need to go through the email-based reset process (7-day waiting period) or contact support.
:::

## Losing Access to Your 2FA {#losing-access}

If you lose access to your authenticator app or security key, you have the following options:

### Option 1: Use a Recovery Code

If you saved your recovery codes, use one to verify your identity. Each code works once.

### Option 2: Email-Based 2FA Reset

If you've lost both your 2FA device and recovery codes, you can reset your 2FA via email:

1. On the security page, initiate a 2FA reset by entering your account's email address
2. You'll receive a confirmation email - click the link to confirm the reset
3. A **7-day waiting period** begins after confirmation
4. After 7 days, your 2FA methods will be automatically removed, and you can set up new ones

The 7-day waiting period is a security measure - it gives you time to cancel the reset if someone else initiated it without your knowledge. You'll receive an email with a cancellation link when the reset is confirmed.

:::info
You can cancel a pending 2FA reset at any time before it executes from the [security page](https://scnx.app/user/security).
:::

### Option 3: Contact Support

If email-based recovery isn't available (e.g. you've disabled it - see below), [contact the SCNX support team](https://scnx.app/help) for manual identity verification.

## Disabling Email Self-Recovery {#disable-email-recovery}

For maximum security, you can disable the email-based 2FA reset on your account. This prevents anyone - including someone who has access to your email - from resetting your 2FA through the self-service process.

### Why Disable It?

If an attacker compromises both your Discord account and your email address, they could initiate a 2FA reset and wait 7 days to gain full access to your account. Disabling email self-recovery eliminates this attack vector entirely.

### How to Disable

1. Go to [scnx.app/user/security](https://scnx.app/user/security)
2. In the **Advanced Security** section, click **Disable Email Recovery**
3. Confirm in the dialog

:::warning
Before disabling email recovery, make sure you have your recovery codes saved securely. You **must** have generated recovery codes before this option becomes available - this prevents you from accidentally locking yourself out.
:::

### What Happens When Email Recovery Is Disabled

- You **cannot** use the email-based 2FA reset process
- If you lose your 2FA device, your only options are recovery codes or contacting support
- Any pending 2FA resets will be automatically cancelled

### Re-Enabling Email Recovery

If you change your mind, you can re-enable email recovery at any time:

1. Go to [scnx.app/user/security](https://scnx.app/user/security)
2. Click **Re-enable Email Recovery**
3. Confirm in the dialog

## Sudo Mode

Some actions on SCNX require you to verify your identity even during an active session. This is called **sudo mode** - a short-lived elevated session similar to entering your password on macOS or Linux before making system changes.

When you perform a sensitive action (like modifying security settings, or accessing a server with [Enhanced Security](/docs/scnx/guilds/enhanced-security/) enabled), you'll be prompted to verify with your 2FA method.

- **Authenticator app:** Sudo mode lasts **40 minutes**
- **Security key:** Sudo mode lasts **60 minutes**
- **Recovery code:** Sudo mode lasts **10 minutes**

After it expires, you'll be prompted to verify again for the next sensitive action.

## Recommendations

For the best account security:

- **Enable at least one 2FA method** - an authenticator app or security key
- **Generate and securely store recovery codes** - in a password manager or printed in a safe
- **Use hardware security keys** for the strongest protection (phishing-resistant)
- **Disable email self-recovery** if you want maximum protection and trust yourself to keep your recovery codes safe
- **Enable [Enhanced Security](/docs/scnx/guilds/enhanced-security/)** on your servers to require 2FA verification for all configuration changes