---
sidebar_position: 3
---

# Trusted Admins

Owners can give their admins access to certain resources on SCNX easily using the Trusted Admins feature on SCNX.

<IncludedInPlan data={{STARTER: true, PROFESSIONAL: true, UNLIMITED: true}} />

## Setup {#setup}

:::caution
Only grant Trusted-Admin-Permissions to users you fully trust - they will be able to interact with SCNX in your name.
Please review the [section about this feature](https://faq.scnx.app/scnx-nutzungsbedingungen/#trusted-admins) in
our [Terms of Service](https://sccootk.it/scnx-tos).
:::
:::info
To add a new user as a Trusted-Admin, please make sure they have logged in into SCNX at least once - you can send them
this link to log-in: [https://scnx.app/auth/login](https://scnx.app/auth/login). Once they have confirmed that they have
logged into SCNX, you can continue with this guide.
:::

To add a new Trusted-Admin, visit your [server settings page](https://scnx.app/glink?page=settings) in your SCNX
Dashboard and scroll to the "Trusted-Admins" section. Next, click on "Add Trusted-Admin" to show the
Trusted-Admin-Modal. Here you can enter the Discord-ID of the Trusted-Admin you want to add and
configure [their permissions](#permissions) (please review the [permissions](#permissions) section first!). Once done,
save the changes to grant access.

![](@site/docs/assets/scnx/guilds/trusted-admins/add.png)

## Manage {#manage}

To change the permissions of a Trusted-Admin, simply open
the [server settings page](https://scnx.app/glink?page=settings) in your SCNX
Dashboard and scroll to the "Trusted-Admins" section and click on your Trusted-Admin. The Trusted-Admin-Modal will show
up - here you can change [their permissions](#permissions). To save changes, please click on "Save changes". To remove
the access of a Trusted-Admin, click on "Remove Access" in the Trusted-Admin-Modal.

## Permissions {#permissions}

The following permissions can be given via Trusted-Admin-Permissions:

| Permission                                                                            | Explanation                                                                                                                                                                      |
|---------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Administrator                                                                         | This user can do most actions on your guild, expect things that are limited to the server-owner.                                                                                 |
| Co-Owner (**dangerous!**, only available if Administrator permission is also granted) | This user can do every actions on your guild, including creating, deleting bots and removing the server from SCNX.                                                               |
| **Custom-Bot**: Bot-Administrator                                                     | This user has every available permission on the CustomBot.                                                                                                                       |
| **Custom-Bot**: Can use Bot-Login                                                     | This user can send, edit and delete messages and certain integrated modules in the webpanel Login-As-A-Bot-features.                                                             |
| **Custom-Bot**: Toggle Bot-Modules                                                    | This user can enable and disable modules of the CustomBot.                                                                                                                       |
| **Custom-Bot**: Change and Reload Configuration / Custom Command                      | This user can see, edit and reload the configuration, issues and Custom-Commands of your bot. This includes the possibility to reset configuration-files to their default value. |
| **Custom-Bot**: Manage Bot                                                            | This user can change the profile, restart, stop and edit settings of the bot.                                                                                                    |
| **Modmail-Bot**: Modmail Administrator                                                | This user has every available permission on your Modmail-Bot.                                                                                                                    |
| **Modmail-Bot**: Manage Modmail                                                       | This user can change the profile, restart, stop and edit settings of the Modmail-bot                                                                                             |
| **Modmail-Bot**: Change & Reload configuration                                        | This user can view, edit and reload the configuration and issues of your Modmail-Bot.                                                                                            |
| **Modmail-Bot**: View Modmail-Reviews                                                 | This user can view modmail support-reviews and view resulting reports.                                                                                                           |
| **Modmail-Bot**: View Modmail-Analytics                                               | This user can view modmail analytics.                                                                                                                                            |
| **Linked Roles**: Linked Roles administrator                                          | This user has every available permission on Linked Roles.                                                                                                                        |
| **Linked Roles**: Manage Linked Roles Users                                           | This user can change the Linked Roles of any user on your server.                                                                                                                |
| **Linked Roles** Manage Linked Roles Configuration & Roles                            | This user can change the configuration of Linked Roles and can mange Linked Roles.                                                                                               |
| **Backups**: Manage Backups                                                           | This user can create, export & delete backups and change the settings of them.                                                                                                   |
| **Analytics**: View & use analytics                                                   | This user can view and use your server's analytics.                                                                                                                              |
| **Integrations**: View & edit integrations                                            | This user can view and edit any features of any integration. They can not add new integrations.                                                                                  |

Additionally, every Trusted-Admin has a **baseline of permissions**:

* View every setting (and change some) in the [server settings](https://scnx.app/glink?page=settings) tab
* View Metadata about your server (like name, icon, owner, …)
* View purchase data about your server (this includes transaction history, but never personal data of subscriptions)
* Upgrade or set-up subscriptions for your server
* Top-Up AI-Credits on your server

Trusted Admins (without the Co-Owner permission) **never can**:

* enable new products (like Custom-Bot, Modmail-Bot, Analytics, …) on your server
* change the token of any bot created on SCNX
* add, change permissions or remove Trusted-Admins from your server - only the server owner and co-owners can do that
* delete products from your server or remove the server from SCNX
* purchase products in your name or with your payment methods
* consent to our staff to run potentially destructive actions

**Co-Owners can**:

* enable new products (like Custom-Bot, Modmail-Bot, Analytics, …) on your server
* change the token of any bot created on SCNX
* add, change permissions or remove Trusted-Admins from your server
* delete products from your server or remove the server from SCNX
* consent to our staff to run potentially destructive actions

Co-Owners can never purchase products in your name or with your payment methods

Trusted-Admins can no longer access your server when they leave it (or get removed).

## Administrator managed servers on SCNX {#administrator}

![Screenshot of the permission type option in the dashboard](@site/docs/assets/scnx/guilds/trusted-admins/permission-type-en.png)

By default, when an owner adds a server on SCNX, only the server owner can access the SCNX dashboard. However, when a
server has been added to SCNX by an administrator, the server will be managed by Administrators on that server.

When a server is managed by Administrators, all members of your server who have the Administrator permission on Discord
will be treated as Co-Owners,
meaning that they will be able to set up SCNX products, but also can remove the server from SCNX. Learn more in
our [permissions section](#permissions).

If you are the server owner, you can change this setting at any time in
your [server settings](https://scnx.app/glink?page=settings). When changing to "All administrators", all
members on your server with the Administrator permission will receive the [Co-Owner permission](#permissions) on your
server. If changing to "Owner only", all members who have received access due to their Administrator permission will
immediately lose access to the dashboard. Any Trusted Admins configured by the Administrators or by you will still be
able to access your server.

While we try to synchronize changes on your server immediately, it might take a while for permissions changes to be
reflected on your server.

## Troubleshooting {#troubleshooting}

<details>
<summary>When entering my User-ID, SCNX shows me a "Could not fetch user error"</summary>

The Discord-ID of the user you are trying to add is invalid. User-IDs consist of only numbers and are not the same as
tags, discriminators, or usernames. To obtain a Discord-ID, follow this
<a href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-">Discord Guide</a>.
</details>

<details>
<summary>When I try to add a Trusted-Admin, SCNX shows me a "This user never logged into SCNX…" error </summary>

This means that this user never logged in into SCNX before.
<ul>
    <li>Send them
this link to log-in: <a href="https://scnx.app/auth/login">https://scnx.app/auth/login</a>. Once they have confirmed that they have
logged into SCNX, please try again.</li>
<li>Let them verify that they are logged in into the correct account and let them log-out and try again.</li>
</ul>
Ultimately, you can not force another use to log into SCNX. There is no way to add a user to SCNX without their prior login.
</details>

<details>
<summary>My Trusted Admin is shown a "No permissions on this server" error in the dashboard</summary>

Please make sure you have assigned the right <a href="#permissions">permissions</a> to your Trusted-Admin. You can
easily edit the permissions of the Trusted-Admin by following this <a href="#manage">section about managing
Trusted-Admins</a>.
</details>

<details>
<summary>My Trusted-Admin can not set up a Custom-Bot, Modmail-Bot, …</summary>

Trusted Admins can not run sensitive actions like enabling or deleting products, unless you grant them the
"Co-Owner" [permission](#permissions). To do so, give them the "Administrator" permission. Once done, you will be able
to grant the "Co-Owner" permission.
</details>


<details>
<summary>My Trusted-Admin can not find my server in their server list</summary>
<ul>
    <li>Please make sure the user is signed in with the same account you have granted access to</li>
   <li>Ask them to refresh the Server-List using the "Refresh data"-Button on the bottom of the page</li>
    <li>Make sure the Trusted-Admin is a member of your server - only server members can be Trusted-Admins.</li>
    </ul>
</details>