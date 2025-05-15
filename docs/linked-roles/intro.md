---
sidebar_position: 1
description: Linked Roles allow you to easily display the role of a user next to their username in your chat.
---

# About Linked Roles

:::warning This feature is Early Access
Linked roles are Early Access. This means that in addition to a paid plan,
a [membership](https://membership.scootkit.com) with Early Access is also required. Early Access helps us invest money &
time in developing new features and products. We plan to make this feature available to everyone with Unlimited /
Professional plan without memberships in late Q2 2025.
:::

Linked Roles allow you to display the role of a user next to their name on your Discord server. To do this, the user
needs to authorize with your Discord Bot and claim their role manually. Displaying the role next to the username makes
your Discord appear professionally and increases the user experience on your Discord server; your users can see at a
glance that they are talking to a staff member, to a moderator or to an admin.

Here's how Linked-Roles could look on your server:

![SCNX Linked Roles usage shown on a Discord server, the position of the user is displayed next to their username](https://scnx.app/img/linked-roles-example.png)

## How it works {#how-it-works}

To use Linked Roles, you'll need to first [set up Linked Roles](/docs/linked-roles) on your server. Once done, you
can [create and configure Linked Roles](/docs/linked-roles/role-management) on SCNX and Discord which can
be [assigned to users](/docs/linked-roles/user-management). Once a linked role has been assigned to a user, the user
can [claim the role](/docs/linked-roles/claim-roles) on Discord.

In contrast to actual roles on Discord, Linked Roles can't be directly assigned to members, instead, members will need
to manually [claim roles on Discord](/docs/linked-roles/claim-roles). After a user has claimed a role, the
role [can only be removed via the SCNX Dashboard](/docs/linked-roles/user-management#remove-role).

Linked Roles can be displayed in the chat next to the username
by [configuring chat permissions](/docs/linked-roles/role-management#display-in-chat). While a user can have multiple Linked Roles, only
one can be displayed in a chat. Roles with a higher position on your Discord will be displayed with a higher priority.
Having a Linked Role does not remove the role icon of another role.

To [claim a Linked Role](/docs/linked-roles/claim-roles), users will need to authorize their account with your custom Discord application
using a
[customizable authorization page](/docs/linked-roles/settings#authorization-page). Once done, they'll be redirected back to Discord,
where they can claim their role. Once authorized, future role changes can be claimed without the need of an additional
authorization.

## Linked Roles at SCNX {#scnx}

SCNX makes it easy to set up and manage Linked Roles on your very own Discord - there's no coding required and setup can
be done in a few easy steps in our easy-to-use dashboard.

To use Linked Roles, you need to [add your server to SCNX](/docs/setup) and have a [paid plan](/docs/scnx/guilds/plans) that
includes access to this feature - you can also try a paid plan for free if you are eligible.

### Features of Linked Roles on SCNX {#scnx-features}

Linked Roles on SCNX makes using Linked Roles on your server easy. While [initial setup](/docs/linked-roles) takes a few
minutes, later management of [roles](/docs/linked-roles/role-management) and [member roles](/docs/linked-roles/user-management) is straightforward.
Additionally, SCNX
offers multiple features and customizability options.

The following features are available on SCNX:

* Easy management of [Linked Roles](/docs/linked-roles/role-management) in the SCNX Dashboard.
* [Assign and remove](/docs/linked-roles/user-management) roles from users.
* Multiple themes available for the [authorization page](/docs/linked-roles/settings#authorization-page).
* Off-Brand options available with the [Professional Plan](/docs/scnx/guilds/plans).
* Authorization with your custom Discord App.
* You can set up [public linked roles](/docs/linked-roles/role-management#public-roles) that can be claimed by any user.
* Excellent customer support on [our Discord](https://scootk.it/dc-en) in English and German.