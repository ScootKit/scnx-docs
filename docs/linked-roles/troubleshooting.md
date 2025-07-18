---
description: Using Linked Roles can be complicated and it's easy to run into issues.
sidebar_position: 5
---

# Troubleshooting

Using Linked Roles can be complicated, and it's easy to run into issues. In this document, we'll look at common issues
and ways to fix these issues.

## Overview {#content}

Please select the issue you are running into.

Issues during setup:

* [I can't add the Link requirement to a Discord role](#link-requirement).

Issues when using Linked Roles:

* [The Linked Role is not displayed in the chat](#display-missing).
* [Users are not being given the Linked Role](#role-not-given).
* ["Invalid OAuth2 redirect_url" when claiming Linked Roles](#oauth2-redirect-url).
* ["No roles were assigned to you" when claiming Linked Roles](#roles-missing).
* ["Seems like the configuration by the server owner is wrong." when claiming Linked Roles](#generic-api-error).
* ["The SCNX-Plan of this server expired" when claiming Linked Roles](#plan-expired).

If your issue isn't listed here, [click here](#other).

## Issues during setup & configuration {#setup}

### Can't save Link requirement on Discord role {#link-requirement}

When [setting up a Linked Role on Discord](/docs/linked-roles/role-management#linked-role-on-discord), you might run into an "Invalid
role" error when adding the Link requirement to a Discord role.

**Solution**: You can't add Link requirements to roles that has members. Consider removing the role from all of your
members or create a new role.

## Issues when using Linked Roles {#usage}

### The role is not displayed in the chat {#display-missing}

When using Linked Roles, you might run into an issue where the role is not displayed next to the username in the chat.

**Solution**: To display the Linked Role next to the username, you'll need to create a permission overwrite with the
"View channel" permission for the Linked Role in every channel. You
can [learn more in our guide about this](/docs/linked-roles/role-management#display-in-chat).

### "Seems like the configuration by the server owner is wrong" when claiming Linked Roles {#generic-api-error}

If a step during setup has been missed or a wrong value has been entered, Linked Roles are unable to sync correctly.

**Solution**:

To fix this issue, you'll need to redo some steps of the [setup procedure](/docs/linked-roles) which may take some time.
Follow these steps to fix this issue:

1. First, reset the Authentification details on
   your [Linked Roles configuration page](https://scnx.app/glink?page=linked-roles/configuration). To do this, click
   on "Reset authentification details" or follow [this guide](/docs/linked-roles/settings#reset-auth-details).
2. Once done, your dashboard will prompt you to re-do all setup steps.
3. Please follow our [setup guide](/docs/linked-roles#step-2) starting at Step 2. Make sure to follow all instructions
   carefully, as any mistakes will result in this error re-appearing.
4. Once you've finished the setup, please retry [claiming the role](/docs/linked-roles/claim-roles).

### "No roles were assigned to you" when claiming Linked Roles {#roles-missing}

By default, users need to be assigned roles manually in your dashboard. If no roles were assigned, this error will be
shown.

**Solution**: [Assign roles to the user in question](/docs/linked-roles/user-management#add-role) or make
the [role public](/docs/linked-roles/role-management#public-roles) so it can be claimed by everyone. If you believe that a role has been
assigned, please make sure the user is logged in with the correct account when attempting to claim the role.

### "Invalid OAuth2 redirect_url" when claiming Linked Roles {#oauth2-redirect-url}

When setting up Linked-Roles, the redirect URL needs to be saved in the Discord Developer Portal; otherwise this error
will be shown.

**Solution**:

1. Open your [Linked Roles configuration page](https://scnx.app/glink?page=linked-roles/configuration) and copy the
   "Redirect URL" in the "Authorization details" card. It should look like this:
   `https://linked-roles.scnx.app/api/b4e5e89a-1c92-11f0-b688-03c2706e348f/callback` (the middle part might change based
   on
   your server).
2. Open the [Discord Developer Portal](https://discord.com/developers/applications) and select your bot.
3. Go to the "Oauth2" tab of your bot, and click on "Add another" in the "Redirects" section.
4. Paste the copied redirect URL and save the changes.
5. Retry [claiming the role](/docs/linked-roles/claim-roles).

![This screenshot shows where to paste the copied redirect URL](@site/docs/assets/linked-roles/setup/enter-redirect-url.webp)

### Users are not being given the Linked Role {#role-not-given}

When using Linked Roles, users won't receive the role automatically.

**Solution**: Users need to manually [claim the Linked Role](/docs/linked-roles/claim-roles). You can send them a link to our guide:
[`https://scootk.it/claim-linked-roles`](https://scootk.it/claim-linked-roles).

### "The SCNX-Plan of this server expired" when claiming Linked Roles {#plan-expired}

To use Linked Roles, a plan that includes Linked Roles is required.

**Solution**: Upgrade your plan to a paid plan that includes Linked Roles. Learn more
about [plans and its features in our documentation](/docs/scnx/guilds/plans).

## Other issues {#other}

Oh no, that's weird - we're always happy to assist you with your issue on our [Discord](https://scootk.it/dc-en) or
on [scnx.app/help](https://scnx.app/help).