---
sidebar_position: 6
description: Explore configuration options for your Linked Roles like authorization page themes.
---

# Linked Roles Configuration

At SCNX, we're always about offering as many configuration options as possible. Naturally, you can adjust the
[authorization page](#authorization-page) and other Linked Roles configuration.

## Authorization page {#authorization-page}

The authorization page is the page that users need to open when [claiming their role](/docs/linked-roles/claim-roles) before being
redirected to Discord. The page features a short explainer, your server name and image.

You can configure the following attributes of your authorization page:

* The displayed server name and image on your authorization page.
* Adjust the theme of your authorization page. You can choose one of over 30 different themes for the authorization
  page - you can pick and browse using the live preview feature on
  your [Linked Roles configuration page](https://scnx.app/glink?page=linked-roles/configuration).
* Disable or enable a short advertisement for SCNX on your authorization page. When enabled, the page will include a
  short message about the features of the SCNX platform. Servers with
  a [paid plan that has the off-brand functionality](/docs/scnx/guilds/plans)
  will have this feature disabled by default. Servers without such a plan won't be able to remove the message.

To adjust these fields and see a live preview of themes and changes,
open [the Linked Roles configuration page](https://scnx.app/glink?page=linked-roles/configuration) of your dashboard and
adjust the fields there.

![Authorization page themes](@site/docs/assets/linked-roles/authentification-page.jpg)

## Authentification details {#authentification-details}

You can review your authentification details used by your Linked Roles to communicate with Discord on
your [Linked Roles configuration page](https://scnx.app/glink?page=linked-roles/configuration). These values are helpful
if you missed a step during [setup](/docs/linked-roles). You won't be able to see entered tokens or secrets for security
reasons.

You can always [reset the details](#reset-auth-details) if you want to change your token or OAuth2 secret.

### Reset details {#reset-auth-details}

To reset the authentication details of your Linked Roles, visit
your [Linked Roles configuration page](https://scnx.app/glink?page=linked-roles/configuration). There, click on "Reset
authentification details" to reset the authentification details. While resetting authentification details does not
delete your Linked Roles and role assignments, you'll need to redo the [setup steps](/docs/linked-roles). If you use a
different bot after resetting, you'll need to remove the old bot from your server and instruct your members
to [claim their roles](/docs/linked-roles/claim-roles) again.

![Screenshot where the \"Reset authentification details\" is located](@site/docs/assets/linked-roles/reset.png)

### Disable Linked Roles {#disable-linked-roles}

:::warning Danger!
This cannot be undone.
:::

Unhappy with Linked Roles? You can always choose to disable them and delete all associated data.

To delete all Linked Role data, open
the [Linked Roles configuration page](https://scnx.app/glink?page=linked-roles/configuration) and click on "Disable
Linked Roles". This will delete all data from SCNX regarding your Linked Roles. Claimed roles from Discord might not be
removed (as that data isn't stored at SCNX), you'll need to do this manually.