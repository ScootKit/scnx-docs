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

The LoA system is meant for staff who want to go on a temporary leave, and be exempt from the expected staff duties.

**Reduced Activity (RA)**
The RA system can be enabled individually by enabling the 'Enable RA System' option.
After enabling that option, you will be able to select the RA role given upon the start of their RA, configure the maximum days they can request a RA for, and if a RA request requires approval or not.

Additionally, you can:
- Configure the status request channel where the requests for a status are sent (if approval is required)
- Choose if you want to log status changes (Going on or off LoA/RA, extensions or early ends and other administrative actions)
- Select the status log channel

The RA system is meant for staff who want to go on a temporary leave, but can still do some limited work. Meaning they can still do some staff duties, but are expected to do (way) less than normal.

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

Configure staff access levels and default log channels in the [general configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/configuration).

| Field               | Description                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------- |
| Staff Roles         | Role(s) that are granted permission to use basic staff utilities like managing their shifts, request a LoA/RA, receive reviews and more.                                                                                       |
| Supervisor Roles    | Role(s) authorized to review LoA/RA requests, manage staff profiles, issue infractions, promote staff members and more.                                                                                                           |
| Management Roles    | Administrators holding full unrestricted access over module profiles and data deletionoptions.|
| General Log Channel | The default logging channel for features that log events (such as status if enabled)        |

### Infractions Configuration {#configuration-infractions}

Configure infractions and suspensions in the [infractions configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/infractions).

| Field                           | Description                                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------------------- |
| Enable Infractions System       | Enables the infractions system with custom infraction types and more. **Note: Due to a feature being used to hide this feature's command if it's disabled, your bot may require a restart to show this feature's commands.**    |
| Infraction Types                | Custom infraction types with custom names.                                                   |
| Enable Suspensions System       | Toggles whether suspensions temporarily strip standard permissions from disciplined users. **Note: Due to a feature being used to hide this feature's command if it's disabled, your bot may require a restart to show this feature's commands.**                                                                                                            |
| Hierarchy Base Role             | Threshold baseline. When suspended, the bot strips all roles positioned at or above this.    |
| Suspended Role (Optional)       | An optional role to assign to a staff member when they are suspended.                        |
| Suspension Announcement Message | The custom message that's sent when a staff member is suspended.                             |
| Infraction Log Channel          | Targeted destination channel where public infraction announcements and suspension embeds post.|
| Infraction Announcement Message | The custom message that's sent when a staff member is infracted.                             |
| DM User on infraction?          | A toggle to choose if the infractions and suspensions are sent to the infracted user's DM's. |
| Infraction DM Message           | The custom message that's sent in the staff member's DM's when they are infracted.           |
| Suspension DM Message           | The custom message that's sent in the staff member's DM's when they are suspended.           |

### Promotions Configuration {#configuration-promotions}

Configure the promotions system in the [promotions configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/promotions).

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

Configure reviews settings in the [reviews configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/reviews).

| Field                        | Description                                                                             |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| Enable Reviews System        | Enables the reviews system, allowing users to review (staff) members. **Note: Due to a feature being used to hide this feature's command if it's disabled, your bot may require a restart to show this feature's commands.**  |
| Reviews Log Channel          | The channel where reviews are sent.                                                     |
| Allow Self-Rating?           | Toggles whether staff can rate themselves.                                              |
| Only let users review staff  | When enabled, users can only review staff members.                                      |
| Review Message               | The customizable (embed) message that gets sent to the review channel.                  |

### Shifts Configuration {#configuration-shifts}

Configure the shifts sytem for staff members, duty types, shift time leaderboards, shift time quota's for specific roles, and manage the shifts status logging in the [shifts configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/shifts).

| Field                          | Description                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| Enable Shifts                  | Toggles the shifts system for staff members, allowing them to go on-duty, on-break, or off-duty and more. **Note: Due to a feature being used to hide this feature's command if it's disabled, your bot may require a restart to show this feature's commands.**                                                                                                           |
| On-Duty Role                   | An optional role that is given to a staff member when going on-duty. This is removed when the staff member goes off-duty. This is handy to easily identify poeple who are on-duty without using any commands.                      |
| Duty Types                     | Custom categories of duty types to allow staff to select their appropriate purpose of duty.       |
| Minimum Shift Duration (minutes)| The minimum duration in minutes that staff have to be on-duty for it to count towards their total duty time.                                                                                                                           |
| Enable duty leaderboard        | Toggles the ability for staff to see a leaderboard of the people with the most duty time at the top.                                                                                                                                 |
| Leaderboard Timeframe          | Sets the timeframe of the total duty times shown in the leaderboard. Choose between weekly,  monthly and all-time.                                                                                                                |
| Enable Quota System            | Toggles the quota system, allowing you to configure duty times expected from members with a specific role.                                                                                                                       |
| Quota Timeframe                | Sets the timeframe that is counted towards the quota. Choose between Weekly or Monthly.           |
| Role Quotas                    | Assigns expected duty times per role. The user's quota will be their highest configured role.     |
| Log Shift Changes              | Toggles the detailed shift logs. These logs shift updates from an user, such as starting/ending their shift.                                                                                                                         |
| Channel for shift change logs  | The channel where shift change logs are sent. Leave empty to use the general log channel.         |

### Status Configuration {#configuration-status}

Configure the Leave of Absence and Reduced Activity systems, allowing staff to be temporarily exempted from staff duties in the [status conifugration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/status).

| Field                        | Description                                                                                   |
| ---------------------------- | --------------------------------------------------------------------------------------------- |
| Enable Status System         | Toggles the status system, allowing you to toggle LoA and RA settings.                        |
| Enable LoA System            | Toggles whether staff can request Leave of Absences. **Note: Due to a feature being used to hide this feature's command if it's disabled, your bot may require a restart to show this feature's commands.**                     |
| LoA Role                     | Optional role assigned to staff members when they are on LoA. This is optional, but recommended to easily identify who is on LoA.                                                                                                 |
| Maximum LoA Duration (days)  | The limit in days of how long staff members can request an LoA. Their LoA is autoamtically denied and not requested when their LoA duration request exceeds that limit.                                                          |
| Require Approval for LoA?    | Toggles if LoA requests require an approval from supervisors to see if their LoA is a valid reason and duration.                                                                                                                  |
| Enable RA System             | Toggles whether staff can request Reduced Activities. **Note: Due to a feature being used to hide this feature's command if it's disabled, your bot may require a restart to show this feature's commands.**                     |
| RA Role                      | Optional role assigned to staff members when they are on RA. This is optional, but recommended to easily identify who is on RA.                                                                                                  |
| Maximum RA Duration (days)   | The limit in days of how long staff members can request an LoA. Their LoA is autoamtically denied and not requested when their LoA duration request exceeds that limit.                                                          |
| Require Approval for RA?     | Toggles if LoA requests require an approval from supervisors to see if their LoA is a valid reason and duration.                                                                                                                  |
| Status Request Channel       | The channel where status requests are sent for approval/denial.                               |
| Log status changes           | Toggles the status logging, which logs all changes in statuses from staff members. This sends embed logs about changes to a staff member's LoA/RA, such as starting it, ending it, the status being extended etc.                  |
| Status Change Log Channel    | The channel where status changes are logged. This can be empty to use the general log channel.                                                                                                                       |

### Profiles Configuration {#configuration-profiles}

Configure (staff) profiles with a custom profile embed and other settings in the [staff profile configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/profiles).

| Field                          | Description                                                                                   |
| ------------------------------ | --------------------------------------------------------------------------------------------- |
| Enable Staff Profiles          | Toggles the staff profile system, allowing staff members to set their custom nickname and introduction. **Note: Due to a feature being used to hide this feature's command if it's disabled, your bot may require a restart to show this feature's commands.**                                                                                                  |
| Only allow staff and higher to have their own customizable profile | Toggles that only staff members can edit their profile or not. If this is disabled, then all members can have their own profile with their own nickname and introduction.                       |
| Profile Moderation Permission  | Sets whether supervisors+ or management+ can wipe the profile of a different (staff) member.                                                                                                                          |
| Profile Embed                  | Customize the profile embed here. ⚠️ **Note: Although this feature works without an embed, an embed is still highly recommended for the best experience.**                                                                     |

### Activity Checks Configuration {#configuration-activity-checks}

Configue manual and auomated activity checks to check if staff are active in the [activity checks configuration](https://scnx.app/glink?page=bot/configuration?file=staff-management-system|configs/activity-checks).

| Field                        | Description                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------- |
| Enable Activity Checks       | Toggles the Activity Checks system, allowing you to check the activity of staff members, both manually as automatically.                                                                                                         |
| Roles to Check               | Roles that are expected to respond to the activity check. Leave empty to use the general staff roles.                                                                                                                             |
| Check Duration (Hours)       | The duration of the activity check. The minimum is 1hr and the maximum is 168hrs (1 week)         |
| Activity Check Embed         | The customizable activity check embed.                                                            |
| Ended Activity Check Embed   | The customizable activity check embed, which is edited from the activity check embed when the activity check has ended.                                                                                                          |
| Default Sending Channel      | The channel to send the acitvity checks in. This can be overriden in the command.                 |
| Exceptions rule              | The rule to select who are exempted from the activity checks. Choose between none, only LoA, only RA, LoA and RA or use a custom role.                                                                                               |
| Custom Exception Roles       | The role(s) that are exempted from activity checks when 'custom role(s)' was chosen above.        |
| Automated Checks             | Toggles the automated activity checks system.                                                     |
| Automated Check Interval     | Choose how often you want the activity check to be (Weekly, Biweekly, Monthly or a cronjob)       |
| Automated Check Cronjob      | Custom cronjob to set the frequency exactly how you want. *Note: Using a cronjob generator like https://crontab.guru/ is recommended, unless you know yourself how a cronjob pattern works.*                                       |
| Automated Check Week Day     | The day of the week to send the activity check.                                                   |
| Automated Check Month Week   | The week of the month to send the activity check when 'monthly' was chosen for the interval.      |
| Results Channel              | The channel where the activity check results are posted. The results include who reacted, who didn't, and who were exempted. Leave empty to use the general log channel.                                                         |
| Ping on Results              | Toggles whether a role is pinged with the results or not.                                         |
| Roles to Ping                | The custom role(s) to ping with the results.                                                      |

## Troubleshooting {#troubleshooting}

W.I.P

## Stored data {#data-usage}

W.I.P

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
