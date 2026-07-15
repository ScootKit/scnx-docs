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
| `/duty active`                                     | View who are currently on duty or on break per shift type.|
| `/duty manage [type:<Text>]`                       | Responds with a duty management panel allowing staff to clock on-duty, off-duty, or go on break.|
| `/duty time [type:<Text>]`                         | View your own or another user's cumulative duty time statistics and previous shifts history.|
| `/duty leaderboard [type:<Text>]`                  | View the server leaderboard showing staff with the most tracked duty time sorted by shift type.|
| `/duty admin user:<User>`                          | Allows supervisors and management to adjust a staff member's shift logs, manually add time, force them off duty, or process forced duty time removals via a custom time duration string.|
| `/staff-status loa request duration:<Text> reason:<Text>` | Submit a formal request for a Leave of Absence with a specified duration and reasoning.|
| `/staff-status loa view [user:<User>]`             | Check your own or another targeted staff member's active Leave of Absence duration and details.|
| `/staff-status loa list filter:<Text>`             | List filtered LoA tracking status records based on your choice (`Active`, `Expired`, or `All`).|
| `/staff-status loa admin user:<User>`              | Administrative command to extend or manually end a staff member's active LoA, or view their complete history.|
| `/staff-status ra request duration:<Text> reason:<Text>` | Submit a request for a period of Reduced Activity with a specified duration and reasoning.|
| `/staff-status ra view [user:<User>]`              | Check your own or another target staff member's active Reduced Activity details.|
| `/staff-status ra list filter:<Text>`              | List filtered Reduced Activity status records based on your choice (`Active`, `Expired`, or `All`).|
| `/staff-status ra admin user:<User>`               | Administrative command to extend or manually end a staff member's active RA period, or view their complete history.|
| `/staff-management panel user:<User>`              | Opens an interactive dashboard overview of a staff member with details per feature and data deletion options. Supervisors+ only.|
| `/staff-management infraction issue user:<User> type:<Text> reason:<Text> [expiry:<Text>]`| Issue an infraction type to a staff member.|
| `/staff-management infraction suspend user:<User> duration:<Text> reason:<Text>` | Temporarily suspend a staff member, stripping their staff roles automatically for a custom duration.|
| `/staff-management infraction history user:<User>` | View the infractions history of an user.|
| `/staff-management infraction void reference:<Text>`| Voids an infraction via its case ID or message link while keeping the history.|
| `/staff-management promotion promote user:<User> rank:<Role> reason:<Text> [channel:<Channel>]`| Promotes a staff member. Optionally in a different channel than the default with the 'channel' option.|
| `/staff-management promotion history user:<User>`  | View the promotions history of an user.|
| `/staff-management activity-check start [channel:<Channel>]`| Manually starts an activity check for the staff members.|
| `/staff-management activity-check view`            | Check the current status of the current active activity check.|
| `/staff-management activity-check end`             | Manually ends an activity check.|
| `/staff-management profile view [user:<User>]`     | View the profile of a (staff) member.|
| `/staff-management profile edit`                   | Allows (staff) members to edit their profile.|
| `/staff-management profile wipe user:<User>`       | Allows supervisors+ or management+ to reset the profile of a (staff) member.|
| `/staff-management review submit user:<User> stars:<Integer> comment:<Text>`| Submit a review to a (staff) member with a rating (1 - 5 stars) and feedback.|
| `/staff-management review history [user:<User>]`   | View the review history of an user.|

## Configuration {#configuration}

This module features multiple independent configuration files allowing you to tweak tracking logic. Open and manage them directly on your [dashboard](https://scnx.app/glink?page=bot/configuration?open-module=staff-management-system).

### General Configuration {#configuration-configuration}

Configure staff access levels and default log channels in the [general configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/configuration) file.

| Field               | Description                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------- |
| Staff Roles         | Role(s) that are granted permission to use basic staff utilities like managing their shifts, request a LoA/RA, receive reviews and more.                                                                                       |
| Supervisor Roles    | Role(s) authorized to review LoA/RA requests, manage staff profiles, issue infractions, promote staff members and more.                                                                                                           |
| Management Roles    | Administrators holding full unrestricted access over module profiles and data deletionoptions.|
| General Log Channel | The default logging channel for features that log events (such as status if enabled)        |

### Infractions Configuration {#configuration-infractions}

Configure infractions and suspensions in the [infractions configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/infractions) file.

| Field                           | Description                                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------------------- |
| Enable Infractions System       | Enables the infractions system with custom infraction types and more. **Note: Due to a feature being used to hide this feature's command if it's disabled, your bot may require a restart to show this feature's commands.**    |
| Infraction Types                | Custom infraction types with custom names.                                                   |
| Enable Suspensions System       | Toggles whether suspensions temporarily strip standard permissions from disciplined users.   |
| Hierarchy Base Role             | Threshold baseline. When suspended, the bot strips all roles positioned at or above this.    |
| Suspended Role (Optional)       | An optional role to assign to a staff member when they are suspended.                        |
| Suspension Announcement Message | The custom message that's sent when a staff member is suspended.                             |
| Infraction Log Channel          | Targeted destination channel where public infraction announcements and suspension embeds post.|
| Infraction Announcement Message | The custom message that's sent when a staff member is infracted.                             |
| DM User on infraction?          | A toggle to choose if the infractions and suspensions are sent to the infracted user's DM's. |
| Infraction DM Message           | The custom message that's sent in the staff member's DM's when they are infracted.           |
| Suspension DM Message           | The custom message that's sent in the staff member's DM's when they are suspended.           |

### Promotions Configuration {#configuration-promotions}

Configure the promotions system in the [promotions configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/promotions) file.

| Field                        | Description                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------- |
| Enable Promotions System     | Enables the promotions system to promote staff members. **Note: Due to a feature being used to hide this feature's command if it's disabled, your bot may require a restart to show this feature's commands.**                         |
| Auto-Add New Role?           | Automatically adds the role the user is being promoted to. **Warning: it's recommended to KEEP THIS SETTING OFF to prevent unauthorised server raids with granting dangerous roles to users. View the note below this table for a more detailed explanation.**                                                                                                            |
| Promotions Channel           | The channel where the promotions are sent. Can be overridden manually via the command.            |
| Promotion Announcement Embed | The custom message that's sent when a staff member is promoted.                                   |
| DM Promoted User?            | Toggles whether the bot sends a promotion message to the member's DM's as well.                   |
| Promotion DM Embed           | The custom message sent to the user's DM's when they are promoted.                                |

**⚠️ Warnings: Keeping the 'Auto-Add new role' setting OFF is RECOMMENDED. This is to avoid raids by letting malicious users grant dangerous roles with dangerous permissions to users, which helps them raid the server. The bot CANNOT PROTECT ITSELF against malicious actions, and we cannot guarantee a no-raid usage with this setting enabled. Please enable backups when having this setting enabled!**

### Reviews Configuration {#configuration-reviews}

Configure reviews settings in the [reviews configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/reviews) file.

| Field                        | Description                                                                             |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| Enable Reviews System        | Enables the reviews system, allowing users to review (staff) members.                   |
| Reviews Log Channel          | The channel where reviews are sent.                                                     |
| Allow Self-Rating?           | Toggles whether staff can rate themselves.                                              |
| Only let users review staff  | When enabled, users can only review staff members.                                      |
| Review Message               | The customizable (embed) message that gets sent to the review channel.                  |

### Shifts Configuration {#configuration-shifts}

**IGNORE EVERYTHING FROM HERE ON. MADE WITH AI, OBVIOUSLY NOT AS GOOD BUT I AM TOO LAZY TO MAKE THE TABELS ETC** *W.I.P*
Configure active shift tracking rules, quotas, and leaderboards in the [shifts configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/shifts) file.

| Field                          | Description                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| Enable Shifts                  | Toggles whether staff members can manage on-duty/off-duty statuses and log session times.          |
| On-Duty Role                   | An optional role dynamically assigned to staff members while they remain actively on duty.        |
| Duty Types                     | Custom tracking sub-categories staff can select when initiating a session (e.g., Support, Patrol). |
| Minimum Shift Duration         | Absolute minimum duration in minutes a session must last to be saved to historical database logs. |
| Enable duty leaderboard        | Activates visibility for public server leaderboard commands tracking performance metrics.         |
| Leaderboard Timeframe          | Sets the tracking timeframe window calculated for the duty leaderboard (Weekly, Monthly, All-time).|
| Enable Quota System            | Activates structured hour compliance goals staff are evaluated against per loop.                  |
| Quota Timeframe                | Specifies the cyclical evaluation recurrence frequency window for quotas (Weekly or Monthly).     |
| Role Quotas                    | Assigns required duty hours per role. An individual's highest matching role tracks as their goal. |
| Log Shift Changes              | Toggles detailed status auditing embeds whenever personnel adjust their shift state.             |
| Channel for shift change logs  | Dedicated target channel for auditing shift updates. Reverts to general logs if left blank.       |

### Status Configuration {#configuration-status}

Configure availability workflows and leaf tracking metrics in the [status configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cstatus) file.

| Field                        | Description                                                                                   |
| ---------------------------- | --------------------------------------------------------------------------------------------- |
| Enable Status System         | Master switch that unlocks the Leave of Absence and Reduced Activity status proposal engines. |
| Enable LoA System            | Toggles whether staff can request full Leaves of Absence to excuse their duties completely.   |
| LoA Role                     | Optional tracking role assigned to staff while on approved Leave of Absence.                  |
| Maximum LoA Duration (days)  | Hard upper constraint setting the maximum allowed length in days a staff member can request.  |
| Require Approval for LoA?    | If checked, requests enter a pending queue demanding manual supervisor authorization.        |
| Enable RA System             | Toggles whether staff can submit proposals for a Reduced Activity status window.              |
| RA Role                      | Optional tracking role assigned to staff during approved Reduced Activity status windows.     |
| Maximum RA Duration (days)   | Hard upper constraint setting the maximum allowed length in days a staff member can request.  |
| Require Approval for RA?     | If checked, Reduced Activity entries demand supervisor confirmation before taking effect.      |
| Status Request Channel       | Targeted room where pending status proposals are dispatched to supervisors for action.        |
| Log status changes           | Toggles historical logging updates covering status transitions, early closures, or updates.   |
| Status Change Log Channel    | Dedicated target log channel for status history. Reverts to general logs if empty.            |

### Profiles Configuration {#configuration-profiles}

Configure custom fields and visualization layouts in the [profiles configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cprofiles) file.

| Field                          | Description                                                                                   |
| ------------------------------ | --------------------------------------------------------------------------------------------- |
| Enable Staff Profiles          | Unlocks profile cards tracking operational statistics, bios, and ratings.                     |
| Only allow staff and higher... | Limits custom profile editing to staff roles. If disabled, all server members can edit bios. |
| Profile Moderation Permission  | Sets the lowest access tier authorized to forcibly wipe another member's bio.                |
| Profile Embed                  | The layout configuration defining field displays when rendering staff profiles via command.   |

### Activity Checks Configuration {#configuration-activity-checks}

Configure manual and automated verification sequences in the [activity checks configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system%7Cactivity-checks) file.

| Field                        | Description                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------- |
| Enable Activity Checks       | Unlocks manual and automated activity verification checking tools for admins.                     |
| Roles to Check               | Roles expected to verify active status. Leaves blank to evaluate default general staff roles.     |
| Check Duration (Hours)       | Length of the validation window in hours before a verification block expires (Max: 168).          |
| Activity Check Embed         | Message layout dispatched into targeted text rooms when starting an active verification check.    |
| Ended Activity Check Embed   | Layout replacing the initial button message block once the tracking expiration concludes.        |
| Default Sending Channel      | Fallback target room for verification deployments if no command channel option is supplied.       |
| Automated Checks             | Toggles whether background scheduler routines systematically dispatch automated verification runs. |
| Automated Check Interval     | Selects automated scheduler frequency values (Weekly, Biweekly, Monthly, or custom Cronjob).      |
| Automated Check Cronjob      | Custom cron pattern rules evaluation string. Evaluates only if interval is set to Cronjob.        |
| Automated Check Week Day     | Day of the week specified to deploy automated verification checks (e.g., Monday).                 |
| Automated Check Month Week   | Week index of the month targeted for automated deployments when interval targets Monthly.         |
| Results Channel              | Target destination where activity compliance overviews post. Reverts to general logs if blank.    |
| Ping on Results              | Toggles whether the system alerts roles with a ping mention when check result overviews post.    |
| Roles to Ping                | Roles mentioned with pings when check summary result sheets post.                                 |

## Troubleshooting {#troubleshooting}

W.I.P

## Stored data {#data-usage}

W.I.P

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
