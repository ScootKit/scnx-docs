---
sidebar_position: 3
description: Follow this guide to claim a Linked Role that has been assigned to you.
---

# How to claim a Linked Role

Once you've been assigned a role, claiming it in Discord is easy! Follow this guide to claim your Linked Role.

:::success Share me!
You can share this guide with your members so they know how to get their roles!\
Here's the URL to share: [`https://scootk.it/claim-linked-roles`](https://scootk.it/claim-linked-roles).
:::

## Requirements {#requirements}

Before you can claim your Linked Role, an administrator needs to
have [created the Linked-Role on SCNX](./role-managment#create-linked-scnx-role), [configure it on Discord](./role-managment#linked-role-on-discord)
and then [assign the role](./user-managment#add-role) to you. If these steps aren't finished, you won't be able to claim
your role.

If you run into issues when following this guide, please contact your server administrator and link them to
our [troubleshooting page](./troubleshooting), where we go into detail on how to fix issues.

## Claim your role on Discord {#claim-role}

:::info This also works on your phone!
While this guide shows the steps on a desktop device, you can follow the same instructions on your phone to claim your
Linked Role.
:::

To get started, please click on the name of the server in Discord. There you'll be able to select the option "Linked
Roles". A modal showing all available roles will now appear. Select the role you want to claim. Next, you will be shown
the requirements you need to pass to claim the role. If you already pass the requirement, you can click on "Finish",
otherwise click on the requirement field to claim your role.

![How to open the Linked Role claim site on Discord](@site/docs/assets/linked-roles/claim/1.png)

Now, the [authorization page](./settings#authorization-page) of the server will open. There, click on "Authorize with
Discord". You will be redirected to Discord to authorize your account. Please make sure you are logging in with the
right account, then click on "Authorise" to finish the request. After that, you will be shown a success message
confirming that the roles have been applied successfully. You can close this window now.

![How to authorize your account](@site/docs/assets/linked-roles/claim/2.png)

Once done, go back to Discord. There, you will be prompted to confirm the connection by clicking on "Done". After that,
you can finally claim the Liked Role by clicking "Finish". Discord will grant you the Linked Role now, which will also
appear in your member profile.

![Final step to claim the role](@site/docs/assets/linked-roles/claim/3.png)

If you want to claim other roles as well, you can do so easily by going following the same instructions - but you won't
need to authenticate again, you can simply claim the role in Discord.

## Issues when claiming roles? {#issues}

If you are running into any issues when you are trying to claim a role, please check
our [troubleshooting guide](./troubleshooting), in particular, the following issues might occur:

* [Error message: "Invalid OAuth2 redirect_url"](./troubleshooting#oauth2-redirect-url).
* [Error message: "No roles were assigned to you"](./troubleshooting#roles-missing)
* [Error message: "Seems like the configuration by the server owner is wrong."](./troubleshooting#generic-api-error).

If you run into other issues or have questions, check or [troubleshooting guide](./troubleshooting) or contact us
on [scnx.app/help](https://scnx.app/help) - we're always happy to help!

## Remove a claimed role {#remove-claimed-role}

Annoyed by your Linked Role? You can either ask an administrator
to [remove the Linked Role](./user-managment#remove-role) or you can remove the role yourself.

To do so, open Discord and open your profile on your server. There, hover over the Linked Role you want to remove. You
will see an "X" on the left side. Click on it to remove your Linked Role. If you ever change your mind, you can
always [re-claim your Linked Role](#claim-role) unless an administrator removes it from you.

![How to remove a claimed role](@site/docs/assets/linked-roles/claim/remove-role.png)