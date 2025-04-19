---
sidebar_position: 4
description: Linked Roles need to be assigned manually to your users.
---

# Manage member's Linked Roles

In contrast to native roles on Discord, Linked Roles need to be assigned manually using the SCNX Dashboard.
Additionally, roles need to be [claimed by the users](./claim-roles) before the role is given to the user.

:::success Give your admins access!
Your admins can also manage Linked Roles of users! Add them as a [Trusted Admin](./../scnx/guilds/trusted-admins) and
share this guide with them to allow them to edit users!
:::

## Add Linked Role {#add-role}

Before assigning a role to a user, make sure you've [created the Linked Role](./role-managment#create-linked-scnx-role).
You'll also need the User-ID of the user you want to add. To get this user ID,
follow [this guide from Discord](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID).

Once you have copied the User-ID, open the [Linked Roles user page](https://scnx.app/glink?page=linked-roles/users).
Click on
"Add user" to add another user.

Next, enter the User-ID you previously copied, enter an optional tagline and select which roles the user should receive.
Please note that [public roles](./role-managment#public-roles) can't be assigned or removed, as these roles can be
claimed by any user.

![Screenshot showing the user management interface](@site/docs/assets/linked-roles/add-role.png)

Once you have saved the changes, the user will be able to [claim the role](./claim-roles). You can send the user a link
to our guide, so they know what to do:
[`https://scootk.it/claim-linked-roles`](https://scootk.it/claim-linked-roles).

## Manage user roles {#remove-role}

:::info Public roles can't be removed
Any [public roles](./role-managment#public-roles) can't be removed from users, as they can be claimed by any user.
:::

To manage the Linked Roles of a user, open the [Linked Roles user page](https://scnx.app/glink?page=linked-roles/users)
of your dashboard. There, you can search for the user you want to edit by their username or ID. Alternatively, you can
filter by roles to find the desired user.

Once you have located the user, click on their dashboard entry to view the user management interface. There, you can
edit their roles and tagline.

While removed roles will be removed from the user within a few minutes, new roles need to
be [claimed manually](./claim-roles). You can send the user a link to our guide, so they know what to do:
[`https://scootk.it/claim-linked-roles`](https://scootk.it/claim-linked-roles).

## Remove Linked Role user {#delete-user}

To remove Linked Role user, open the [Linked Roles user page](https://scnx.app/glink?page=-roles/users)
of your dashboard. There, you can search for the user you want to delete by their username or ID. Alternatively, you can
filter by roles to find the desired user.

Once you have located the user, click on their dashboard entry to view the user management interface. There, you can
click on "Delete user" to delete the user data. Deleting the user will result in all of their roles being removed and
them needing to re-authorize if they plan to claim roles again. Please note that this won't prevent users from
re-claiming [public roles](./role-managment#public-roles) at any time.