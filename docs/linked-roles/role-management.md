---
sidebar_position: 2
description: Learn how to create, delete and configure Linked Roles.
---

# Manage Linked Roles

In contrast to traditional roles on Discord, Linked Roles require more steps to be correctly set up and configured.

## Create Linked Role on SCNX {#create-linked-scnx-role}

:::info Discord Limit
Discord enforces a strict limit of five Linked Roles for each bot. This means that you can't have more than five Linked
Roles on SCNX.
:::

Open your the [roles page of your Linked roles dashboard](https://scnx.app/glink?page=linked-roles/roles) and click on
"Add new Linked Role". If this is your first Linked Role, the site will automatically take you to the role creation
flow, no need to click anything.

There, enter a name for your role and choose a description. Once done, click on "Create Linked Role". After clicking,
SCNX will prompt you to [configure the new linked role on Discord](#linked-role-on-discord).

![This screenshot shows the role creation modal](@site/docs/assets/linked-roles/role-managment/add-new-role.png)

## Set up Linked Role on Discord {#linked-role-on-discord}

To set up a Linked Role on Discord, please follow these steps:

1. Create a new role on your Discord server. You can configure its role, role icon, permissions, and color. Do not
   assign this role to any user.
2. In your role settings, go to the "Links" tab.
3. There, click on "Add requirement".
4. Select your bot in the "Apps" section.
5. Select the desired Linked Role. The role you select needs to
   be [assigned to users on SCNX](/docs/linked-roles/user-management#add-role) to claim the newly created Discord role.

Once you've finished these steps your members can [can claim the role](/docs/linked-roles/claim-roles.md), if they have
been [assigned the Linked Role](/docs/linked-roles/user-management#add-role).
To actually display the role next to the username of a user, you'll need
to [setup permissions correctly](#display-in-chat).

![This screenshots shows how to add the role requirement on Discord](@site/docs/assets/linked-roles/role-managment/role-discord-settings.png)

## Display Linked Role in chat {#display-in-chat}

By default, Linked Roles won't show up next to usernames in the chat. To display the Linked Role, you'll need to create
a channel overwrite on **every channel**. This can be done by going into the channel settings of any channel, going to
permissions, selecting (or adding) your Linked Role and giving it the "View Channel" permission. This overwrite is
required for every channel you want the role to be displayed in.

![This how to set up permissions for a Linked Role](@site/docs/assets/linked-roles/role-managment/display-role-in-chat.png)

## Public roles {#public-roles}

:::info
After making a role public, you can't undo this decision. If you want to make a public role private again, you'll need
to [delete the role](#delete-role).
:::

By default, rules need to manually be [assigned to members](/docs/linked-roles/user-management). Enabling the "Public role" option, allows
roles to be claimed by any user on your Discord and removes your ability to manually assign or remove the role. This
might be helpful if you want a "Member"-role to be displayed next to users in chat.

After creating a role, you can manage it
in your [Linked Roles dashboard](https://scnx.app/glink?page=linked-roles/roles), where you can enable the "Public role"
option for your role. Once you've enabled the "Public role" option, all users can [claim the role](/docs/linked-roles/claim-roles) on
your Discord without any
additional checks. While you can manually [remove users](/docs/linked-roles/user-management#delete-user) in the dashboard, they will be
able to re-claim the role again since the role is public.

![This screenshot shows where the \"Public role\" role can be found](@site/docs/assets/linked-roles/role-managment/public-role.png)

## Delete Linked Roles {#delete-role}

Deleting a Linked Role will also remove the Linked Role from all users on your Discord, but won't delete the Discord
role you've created. This action can't be undone.

To delete a role, open your [Linked Roles dashboard](https://scnx.app/glink?page=linked-roles/roles), select your role
and click on "Delete role". The role will now be deleted.