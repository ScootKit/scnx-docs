# Staff Management System

A powerful, highly customizable staff management system to track activity, moderate personnel, and maintain detailed staff records.

<ModuleOverview moduleName="staff-management-system" />

## Features {#features}

* **Shift management**  - On-duty/off-duty tracking with clock-in/clock-out, break management, configurable duty types, duty time leaderboard, and shift quotas.
* **Leave of Absence & Reduced Activity**  - Staff can request LoA or reduced activity status with an approval workflow, optional role assignment, and configurable maximum durations.
* **Infractions & Suspensions**  - Issue warnings, strikes, demotions, terminations, or mark staff as under investigation. Temporary suspensions automatically remove staff roles and assign a suspension role.
* **Promotions**  - Promote staff members with optional automatic role assignment and customizable announcements.
* **Staff Profiles & Reviews**  - Individual staff profiles with a 1-5 star rating system, review history, and reputation tracking.
* **Activity Checks**  - Periodic staff activity verification with response tracking and configurable check windows.
* **Role-based access control**  - Three access tiers: Staff Roles (basic commands), Supervisor Roles (management capabilities), and Management Roles (full access including data deletion).

## Setup {#setup}

1. [Enable the module](https://scnx.app/glink?page=bot/modules?query=staff-management-system) on your server.
2. Open the [General Configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cconfiguration) and set the **Staff Roles**, **Supervisor Roles**, and **Management Roles** to control who can access which features.
3. Set up a **Log Channel** where staff management events will be logged.
4. Configure the individual feature settings as needed:
   * [Shifts](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cshifts)  - Duty types, quotas, and leaderboard settings.
   * [Status](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cstatus)  - LoA and reduced activity settings.
   * [Infractions](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cinfractions)  - Infraction types, suspension settings, and DM notifications.
   * [Promotions](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cpromotions)  - Promotion announcements and role assignment.
   * [Reviews](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Creviews)  - Rating system settings.
   * [Profiles](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cprofiles)  - Staff profile customization.
   * [Activity Checks](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cactivity-checks)  - Activity verification settings.

## Usage {#usage}

### Shifts {#shifts}

Staff members can clock in and out of shifts using the `/duty manage` command. While on duty, they can take breaks. Supervisors can view who is currently on duty with `/duty active` and see duty time statistics with `/duty leaderboard` and `/duty time`.

### Leave of Absence & Reduced Activity {#status}

Staff members can request a Leave of Absence or Reduced Activity status using `/loa request` or `/reduced-activity request`. Supervisors can approve or deny requests. Active statuses can be viewed with the `list` subcommand.

### Infractions {#infractions}

Supervisors can issue infractions to staff members using `/staff-management infraction issue`. Available infraction types include warnings, strikes, demotions, terminations, and under investigation. Staff can also be suspended with `/staff-management infraction suspend`, which temporarily removes their staff roles.

### Promotions {#promotions}

Supervisors can promote staff members using `/staff-management promotion promote`. Promotions can optionally assign a new role automatically and send an announcement to a configured channel.

### Staff Profiles & Reviews {#profiles}

Each staff member has a profile that can be viewed with `/staff-management profile view`. Users can submit reviews and ratings for staff members. Profiles track average ratings and review history.

### Activity Checks {#activity-checks}

Management can start periodic activity checks targeting specific roles with `/staff-management activity-check start`. Staff members must respond within the configured time window. Results can be viewed and managed by supervisors.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                                          | Description                                                 |
|------------------------------------------------------------------|-------------------------------------------------------------|
| `/duty manage`                                                   | Clock in/out of a shift or take a break.                    |
| `/duty active`                                                   | View currently on-duty staff members.                       |
| `/duty leaderboard`                                              | View the duty time leaderboard.                             |
| `/duty time`                                                     | View your own duty time statistics.                         |
| `/duty admin`                                                    | Administrative duty management (supervisor+).               |
| `/loa request`                                                   | Request a Leave of Absence.                                 |
| `/loa view`                                                      | View your current LoA status.                               |
| `/loa list`                                                      | List all active LoA requests.                               |
| `/loa admin`                                                     | Approve, deny, or manage LoA requests (supervisor+).        |
| `/reduced-activity request`                                      | Request Reduced Activity status.                            |
| `/reduced-activity view`                                         | View your current Reduced Activity status.                  |
| `/reduced-activity list`                                         | List all active Reduced Activity statuses.                  |
| `/reduced-activity admin`                                        | Manage Reduced Activity requests (supervisor+).             |
| `/staff-management panel`                                        | Open the staff management panel.                            |
| `/staff-management infraction issue user:<User>`                 | Issue an infraction to a staff member.                      |
| `/staff-management infraction suspend user:<User>`               | Suspend a staff member.                                     |
| `/staff-management infraction history user:<User>`               | View a staff member's infraction history.                   |
| `/staff-management infraction void`                              | Void an existing infraction.                                |
| `/staff-management promotion promote user:<User>`                | Promote a staff member.                                     |
| `/staff-management promotion history user:<User>`                | View a staff member's promotion history.                    |
| `/staff-management activity-check start`                         | Start a new activity check.                                 |
| `/staff-management activity-check view`                          | View an active or past activity check.                      |
| `/staff-management activity-check end`                           | End an active activity check.                               |
| `/staff-management profile view user:<User>`                     | View a staff member's profile.                              |
| `/staff-management profile edit`                                 | Edit your own staff profile.                                |
| `/staff-management profile wipe user:<User>`                     | Wipe a staff member's profile data (management only).       |
| `/staff-management review submit user:<User>`                    | Submit a review for a staff member.                         |
| `/staff-management review history user:<User>`                   | View a staff member's review history.                       |

## Configuration {#configuration}

This module has 8 configuration files. Open them in your [dashboard](https://scnx.app/glink?page=bot/configuration?query=staff-management-system).

| Configuration File  | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| General             | Staff/supervisor/management roles, log channel, and general settings.       |
| Shifts              | Duty types, shift quotas, leaderboard settings, and break configuration.    |
| Status              | LoA and reduced activity settings, approval workflow, and role assignments.  |
| Infractions         | Infraction types, suspension settings, DM notifications, and expiration.    |
| Promotions          | Promotion announcements, role assignment, and notification settings.        |
| Reviews             | Rating system settings, self-rating prevention, and access restrictions.    |
| Profiles            | Staff profile fields and customization options.                             |
| Activity Checks     | Check windows, target roles, and response tracking settings.               |

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
  <summary>LoA requests are not being processed</summary>
  <ul>
    <li>LoA requests need to be approved by a user with a <strong>Supervisor Role</strong> or higher.</li>
    <li>Check the Status configuration for maximum duration limits  - requests exceeding the limit may be automatically rejected.</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is stored by this module:

* **Staff profiles**: User ID, suspension status, and profile data for each tracked staff member.
* **Shifts**: Clock-in/out timestamps, break records, and duty type for each shift.
* **Infractions**: Infraction type, issuer, target, reason, and expiration date.
* **Promotions**: Promotion records including old/new role, issuer, and timestamp.
* **Reviews**: Reviewer ID, target ID, rating, and review text.
* **LoA requests**: Requester, reason, duration, approval status, and approver.
* **Activity checks**: Check records, target roles, and individual response tracking.

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
