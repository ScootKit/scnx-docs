# Staff Management System

A powerful, highly customizable staff management system designed to track activity, moderate personell, and maintain detailed staff records seamlessly.

<ModuleOverview moduleName="staff-management-system" />

## Features {#features}

- **Infractions & Suspensions**: Issue warnings, strikes, demotions, terminations, mark staff as under investigation or issue custom infraction types. Suspensions temporarily remove the staff roles of a staff member for the specified duration in the command.
- **Promotions**: Promote staff members with optional automatic role assignment and customizable announcements for both in the channel and DM's (if enabled).
- **Staff Reviews**: Let users review staff members with a rating from 1 - 5 stars and their feedback with a customizable review message. You can also let members review other (normal) members and let staff review themselves.
- **Shift management**: Let staff members go on/off-duty and take breaks while tracking their shift time, which contributes to a customizable leaderboard (weekly/monthly). Admins can manage staff shifts by manually adding time, forcing members off duty, or voiding shifts entirely. Set custom shift types, establish quotas for specific roles, configure minimum shift durations, and log all shift changes.
- **Leave of Absence & Reduced Activity**: Staff can request a Leave of Absence (LOA) or Reduced Activity (RA) status with an approval workflow, optional role assignment, and configurable maximum durations. You can also optionally enable status logging which logs every status update for each staff member.
- **Staff Profiles**: Let staff members (or also normal members) have their own nickname and introduction in a customizable embed, which users can see via a command. Supervisors/Management can also reset a staff member's profile if needed.
- **Activity Checks**: Allow admins to host activity checks which staff members have to reach to with a custom duration. Exemptions can also be set together with automation settings to automatically host activity checks. Results for activity checks are logged with an optional role ping to choice which shows an overview of who reacted, who didn't react and who were exempt. 
- **Role-based access control** - Three access tiers: Staff Roles (basic commands), Supervisor Roles (management capabilities), and Management Roles (full access including data deletion).

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=staff-management-system) on your server.
2. Open the [General Configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cconfiguration) and set the **Staff Roles**, **Supervisor Roles**, and **Management Roles** to control who can access which features.
3. Select a channel for the **General Log Channel**, which is the default channel for logging events in this module.
4. Configure the individual feature settings as needed:
  - [Infractions](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cinfractions) - Infraction types, suspension settings, and DM notifications.
  - [Promotions](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cpromotions) - Promotion announcements and role assignment.
  - [Reviews](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Creviews) - Reviews system settings and message customization.
  - [Shifts](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cshifts) - Duty types, quotas, and leaderboard settings.
  - [Status](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cstatus) - LoA and reduced activity settings.
  - [Profiles](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cprofiles) - Staff profile customization and settings.
  - [Activity Checks](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cactivity-checks) - Activity checks settings.

## Usage {#usage}

### Infractions {#infractions}

[Supervisors](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cconfiguration) can issue infractions to staff members with the `\staff-management infraction issue` command. Infraction types can be configured in the [configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cinfractions), with the default infraction types being: 'Warning, Strike, Demotion, Termination and Under Investigation'.
Staff **cannot infract themselves**.
You can also:
- Void infractions for an user with the `/staff-management infraction void` command - this keeps the infraction in history, but the punishment is no longer "active". This can be done by either using the message link of the infraction, or the case ID. (Only supervisors+ can void infractions)
- View the infractions history of an user with the `/staff-management infraction history` command - this shows all previous infractions of an user.

Infractions (including suspensions) can optionally also be sent to the infracted staff member's DM's by enabling the 'DM User on infraction' option - these messages are also configurable.

### Promotions {#promotions}

[Supervisors](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cconfiguration) can promote staff members to a higher rank by using the `/staff-management promotion promote` command. Users can also view an user's promotion history with the `/staff-management promotion history` command - this shows the full history of promotions for that user.

The promotion message is customizable, and a message could be sent to the promotes user's DM's by enabling the 'DM Promoted User' option - that message is also customizable.

Optionally, the bot can also automatically add the new role upon promotion.
**⚠️ WARNING: This option is dangerous and could start server raids or make it worse during server raids to grant unauthorized users higher permission roles which grants dangerous permissions. The addition of roles cannot be reverted automatically - it is recommended to keep this setting disabled!**

### Staff Reviews {#reviews}

Enabling the [reviews system ](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Creviews) allows users to review (staff) members with a stars ⭐ rating system and feedback - all in a configurable message and channel.

Additionally there are 2 options to refine the reviews experience to your needs:
- Allow Self-Rating: This option allows staff to review themselves. (This is not recommended for a fair and honest reviews system - it's useful to test reviews on yourself though)
- Only let users review staff: This option only allows members to review [staff members](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cconfiguration).

### Shifts {#shifts}

Staff members can go on- or off-duty and take a break with the `/duty manage` command, where a panel shows up with some information about their shift time, and 3 buttons to manage their duty. The embed title also changes dynamically depending on their duty status. Staff can take multiple breaks per shift, and those break times are not included in the total duty time - the staff member also receives an end-of-shift (EOS) report in their DM's after they end their shift.

Shift types are fully custom, meaning you can have multiple different shift types with a custom name. You can also set a minimum shift time duration, which requires staff members to have a minimum of x minutes of shift time or the time they went on duty doesn't count towards their total duty time and quota (if enabled) - default is 0, meaning all shift time counts.

A duty leaderboard can also be enabled, letting staff members check the top people who have the most shift time, going from most to least. The leaderboard timeframe is also customizable, from weekly, monthly and all-time.

A quota system can also be enabled, requiring staff to meet the specific amount of hours of duty time each week/month to meet your quota. These can be different per role, and their highest role that's listed there, counts as their quota. The quota can also be 0 hours, meaning that specific role has no quota.
The quota status shows on their `/duty time` command.

If 'Log Shift Changes' is enabled in the Shifts configuration, then the bot will send an embed with information each time a staff member changes their shift, with actions such as: Going on-duty, taking a break, going off duty and admin actions - these changes can be logged in a custom channel, if that's not set, then it will use the default log channel.

Staff members can view who is currently on duty with `/duty active`, see the duty time leaderboard with `/duty leaderboard` and see their (or someone else's) total duty time with `/duty time`.

### Leave of Absence & Reduced Activity status {#status}

You can configure if staff members can [request a Leave of Absence (LoA) and/or a Reduced Activity (RA)](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cstatus). LoA's are for staff members who want to go away and have little to no responsibilities to being staff, while a RA is for staff members who still want to actively work as staff, but do less copared to normal staff.

**Leave of Absence (LoA)**
The LoA system can be enabled individually by enabling the 'Enable LoA System` option.
After enabling that option, you will be able to select the LoA role given upon the start of their LoA, configure the maximum days they can request a LoA for, and if a LoA request requires approval or not.

**Reduced Activity (RA)**
The RA system can be enabled individually by enabling the 'Enable RA System' option.
After enabling that option, you will be able to select the RA role given upon the start of their RA, configure the maximum days they can request a RA for, and if a RA request requires approval or not.

Additionally, you can:
- Configure the status request channel where the requests for a status are sent (if approval is required)
- Choose if you want to log status changes (Going on or off LoA/RA, extensions or early ends and other administrative actions)
- Select the status log channel

### Staff Profiles {#profiles}

[Staff profiles](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/profiles) allow (staff) members to have their own profile with their own nickname and introduction.

You can also configure if you only want staff members and above to have a custom staff profile, or also allow all normal members to have a custom profile, and who can manually reset a (staff) member's profile (supervisor+ or management only).

The profile embed is also customizable - edit it to your wishes!

### Activity Checks {#activity-checks}

[Activity checks](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cactivity-checks) can be enabled, which allows supervisors+ to start periodic activity checks that sends a customizable message into the configured channel, which allows staff members to click on a button to confirm that they are active and have seen the message.

Settings to configure the system to your needs:
- Roles to Check: Select the role(s) you want the bot to check that respond to the button - leave this empty to use the standard staff role from the [general configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cconfiguration).
- Check Duration: The duration of activity checks in *hours*. The maximum value is 168 hours (1 week) and the minimum is 1 hour.
- Activity Check Embed & Ended Activity Check Embed: Configure the activity check messages to your wishes! The ended message is the message that replaces the original message when it has ended. (⚠️ Warning: If your original activity check message is components V2, then the ended message also needs to be components V2, otherwise it won't be edited - this is due to Discord limitations)
- Default Sending Channel: The channel to send the activity checks in - this can be overridden when using the `/staff-management activity-check start` command.

Additionally, you can **automate** the activity checks. You can set an interval (weekly, biweekly, monthly or use a cronjob) to select how often it should send the activity check, set the cronjob if you selected 'Cronjob', select the weekday that the activity check should happen, and the week of the month if you selected 'Monthly' in the interval.

Results are sent into the configured results channel (leave empty to use the default log channel), with an option to ping a custom role when the results are posted.


## Commands {#commands}

<SlashCommandExplanation />

| Command                                            | Description                                           |
| -------------------------------------------------- | ----------------------------------------------------- |
| `/duty active`                                     | View who are currently on duty per shift type.        |
| `/duty manage [type:<Text>]`                       | Replies with a duty management panel to go on-/off-duty or on break.                                               |
| `/duty time [type:<Text>]`                         | View your total duty time and previous shifts.        |
| `/duty leaderboard [type:<Text>]`                  | View the leaderboard with the people with the most duty time per shift type (or all shift types)                      |
| `/duty admin user:<User>`                          | Manage the duty and shift time of an user (supervisor+)|
| `/staff-status loa request duration:<Text> reason:<Text>`| Request a Leave of Absence with the duration and reason to request.                      |
| `/staff-status loa view [user:<User>]`             | View your or someone else's current LoA status.       |
| `/staff-status loa list filter:<Text>`             | List the LoA requests based on which filter you chose (Active/Expired/All)                                         |
| `/staff-status loa admin user:<User>`              | Extend or manually end the LoA of an user or view the LoA history (supervisor+)                                        |
| `/staff-status ra request duration:<Text> reason:<Text>`| Request a Reduced Activity with the duration and reason to request.                      |
| `/staff-status ra view [user:<User>]`              | View your or someone else's current RA status.        |
| `/staff-status ra list filter:<Text>`              | List the RA requests based on which filter you chose (Active/Expired/All)                                         |
| `/staff-status ra admin user:<User>`               | Extend or manually end the RA of an user or view the RA history (supervisor+)                                        |
| `/staff-management panel user:<User>`              | Opens the staff management panel about an user, with all information about them per feature, which also includes data deletion options. (supervisor+)                 |
| `/staff-management infraction issue user:<User>`   | Issue an infraction to a staff member.                |
| `/staff-management infraction suspend user:<User>` | Suspend a staff member.                               |
| `/staff-management infraction history user:<User>` | View a staff member's infraction history.             |
| `/staff-management infraction void`                | Void an existing infraction.                          |
| `/staff-management promotion promote user:<User>`  | Promote a staff member.                               |
| `/staff-management promotion history user:<User>`  | View a staff member's promotion history.              |
| `/staff-management activity-check start`           | Start a new activity check.                           |
| `/staff-management activity-check view`            | View an active or past activity check.                |
| `/staff-management activity-check end`             | End an active activity check.                         |
| `/staff-management profile view user:<User>`       | View a staff member's profile.                        |
| `/staff-management profile edit`                   | Edit your own staff profile.                          |
| `/staff-management profile wipe user:<User>`       | Wipe a staff member's profile data (management only). |
| `/staff-management review submit user:<User>`      | Submit a review for a staff member.                   |
| `/staff-management review history user:<User>`     | View a staff member's review history.                 |

## Configuration {#configuration}

This module has 8 configuration files. Open them in your [dashboard](https://scnx.app/glink?page=bot/configuration?query=staff-management-system).

| Configuration File | Description                                                                            |
| ------------------ | -------------------------------------------------------------------------------------- |
| General            | Staff/supervisor/management roles, log channel, and general settings.                  |
| Shifts             | Duty types, shift quotas, leaderboard settings, and break configuration.               |
| Status             | LoA and reduced activity settings, approval workflow, and role assignments.            |
| Infractions        | Infraction types, suspension settings, DM notifications, and expiration.               |
| Promotions         | Promotion announcements, role assignment, and notification settings.                   |
| Reviews            | Rating system settings, self-rating prevention, and access restrictions.               |
| Profiles           | Staff profile fields and customization options.                                        |
| Activity Checks    | Check windows, target roles, response tracking, and the customizable start/end embeds. |

### Notable fields {#configuration-fields}

| File            | Field                      | Description                                                                                                                                                                                                                       |
| --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity Checks | Activity Check Embed       | The message sent when an activity check starts. Supports placeholders `%end-time%`, `%duration%`, `%staff-mention%`, `%supervisor-mention%`, `%management-mention%`, and `%initiator%` (renders "system" for automated checks).   |
| Activity Checks | Ended Activity Check Embed | The message that replaces the start embed when the check ends. Supports the same placeholders as the start embed plus `%responded-count%`.                                                                                        |
| Promotions      | Auto-Add New Role?         | If enabled, the bot automatically gives the promoted user the new rank role. Defaults to **disabled** for new servers - automatic role assignment can expose a server to abuse if a promoter has access to high-permission roles. |

## Troubleshooting {#troubleshooting}

<details>
  <summary>Staff members cannot use commands</summary>
  <ul>
    <li>Make sure their role is listed in the <strong>Staff Roles</strong> in the <a href="#configuration">General Configuration</a>.</li>
    <li>Some commands require <strong>Supervisor Roles</strong> or <strong>Management Roles</strong>  - check the command descriptions above.</li>
  </ul>
</details>

<details>
  <summary>Suspension is not removing roles</summary>
  <ul>
    <li>Ensure the bot's role is positioned above the staff member's roles in the role hierarchy.</li>
    <li>Check that a <strong>Suspension Role</strong> is configured in the Infractions configuration.</li>
  </ul>
</details>

<details>
  <summary>Activity check messages still look active after the check ended</summary>
  <ul>
    <li>Older messages that pre-date the close-on-end fix may still show the original embed. New checks ended after the update will be properly replaced with the configured <strong>Ended Activity Check Embed</strong>, including for Components V2 templates.</li>
  </ul>
</details>

<details>
  <summary>LoA requests are not being processed</summary>
  <ul>
    <li>LoA requests need to be approved by a user with a <strong>Supervisor Role</strong> or higher.</li>
    <li>Check the Status configuration for maximum duration limits  - requests exceeding the limit may be automatically rejected.</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is stored by this module:

- **Staff profiles**: User ID, suspension status, and profile data for each tracked staff member.
- **Shifts**: Clock-in/out timestamps, break records, and duty type for each shift.
- **Infractions**: Infraction type, issuer, target, reason, and expiration date.
- **Promotions**: Promotion records including old/new role, issuer, and timestamp.
- **Reviews**: Reviewer ID, target ID, rating, and review text.
- **LoA requests**: Requester, reason, duration, approval status, and approver.
- **Activity checks**: Check records, target roles, and individual response tracking.

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
