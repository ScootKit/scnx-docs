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
* ["This feature requires Early Access, which this server does not have anymore" when claiming Linked Roles](#early-access-required).

If your issue isn't listed here, [click here](#other).

## Issues during setup & configuration {#setup}

### Can't save Link requirement on Discord role {#link-requirement}

When [setting up a Linked Role on Discord](./role-managment#linked-role-on-discord), you might run into an "Invalid
role" error when adding the Link requirement to a Discord role.

**Solution**: You can't add Link requirements to roles that has members. Consider removing the role from all of your
members or create a new role.

## Issues when using Linked Roles {#usage}

### The role is not displayed in the chat {#display-missing}

When using Linked Roles, you might run into an issue where the role is not displayed next to the username in the chat.

**Solution**: To display the Linked Role next to the username, you'll need to create a permission overwrite with the
"View channel" permission for the Linked Role in every channel. You
can [learn more in our guide about this](./role-managment#display-in-chat).

### "Seems like the configuration by the server owner is wrong" when claiming Linked Roles {#generic-api-error}

If a step during setup has been missed or a wrong value has been entered, Linked Roles are unable to sync correctly.

**Solution**:

To fix this issue, you'll need to redo some steps of the [setup procedure](../linked-roles) which may take some time.
Follow these steps to fix this issue:

1. First, reset the Authentification details on
   your [Linked Roles configuration page](https://scnx.app/glink?page=linked-roles/configuration). To do this, click
   on "Reset authentification details" or follow [this guide](./settings#reset-auth-details).
2. Once done, your dashboard will prompt you to re-do all setup steps.
3. Please follow our [setup guide](./../linked-roles#step-2) starting at Step 2. Make sure to follow all instructions
   carefully, as any mistakes will result in this error re-appearing.
4. Once you've finished the setup, please retry [claiming the role](./claim-roles).

### "No roles were assigned to you" when claiming Linked Roles {#roles-missing}

By default, users need to be assigned roles manually in your dashboard. If no roles were assigned, this error will be
shown.

**Solution**: [Assign roles to the user in question](./user-managment#add-role) or make
the [role public](./role-managment#public-roles) so it can be claimed by everyone. If you believe that a role has been
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
5. Retry [claiming the role](./claim-roles).

![This screenshot shows where to paste the copied redirect URL](@site/docs/assets/linked-roles/setup/enter-redirect-url.webp)

### Users are not being given the Linked Role {#role-not-given}

When using Linked Roles, users won't receive the role automatically.

**Solution**: Users need to manually [claim the Linked Role](./claim-roles). You can send them a link to our guide:
[`https://scootk.it/claim-linked-roles`](https://scootk.it/claim-linked-roles).

### "The SCNX-Plan of this server expired" when claiming Linked Roles {#plan-expired}

To use Linked Roles, a plan that includes Linked Roles is required.

**Solution**: Upgrade your plan to a paid plan that includes Linked Roles. Learn more
about [plans and its features in our documentation](./../scnx/guilds/plans).

### "This feature requires Early Access, which this server does not have anymore" when claiming Linked Roles {#early-access-required}

To use Linked Roles, Early Access is required. Early Access helps us invest money &
time in developing new features and products. We plan to make this feature available to everyone with Unlimited /
Professional plan without memberships in late Q2 2025.

**Solution**: The server needs at least one owner or [trusted admin](./../scnx/guilds/trusted-admins) with Early Access.
Early access can be purchased with a [ScootKit Membership](https://membership.scootkit.com). You can also consider
waiting a few months for the feature to be made available for everyone.

## Other issues {#other}

Oh no, that's weird - we're always happy to assist you with your issue on our [Discord](https://scootk.it/dc-en) or
on [scnx.app/help](https://scnx.app/help).