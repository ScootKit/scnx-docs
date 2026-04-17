# Hunt the code

Hide codes and let your users collect them.

<ModuleOverview moduleName="hunt-the-code" />

## Features {#features}

- Create hidden codes with custom display names that users can find and redeem.
- Users can view their profile with all found codes and their progress.
- A leaderboard shows the top code hunters.
- Generate reports with detailed statistics about users and codes.
- End the current code hunt session, which generates a final report and clears all data.
- Codes can be auto-generated or manually specified.

## Setup {#setup}

1. Set up [slash command permissions](/docs/custom-bot/slash-commands) for `/hunt-the-code-admin` to restrict administrative commands to moderators.
2. Create codes using `/hunt-the-code-admin create-code` and hide them around your server, website, or other locations.
3. Share the code strings with your community through creative hiding spots (e.g., in channel descriptions, images, or external pages).

## Usage {#usage}

Administrators manage the code hunt:

- Use `/hunt-the-code-admin create-code` to create new codes. Each code has a display name and a code string (auto-generated if not specified).
- Use `/hunt-the-code-admin report` to generate a detailed report with user rankings and code statistics.
- Use `/hunt-the-code-admin end` to end the current hunt session -- this generates a final report and deletes all codes and user progress.

Users participate in the code hunt:

- Use `/hunt-the-code redeem` to enter a code they have found.
- Use `/hunt-the-code profile` to view their found codes and overall progress.
- Use `/hunt-the-code leaderboard` to see the top 20 code hunters.

## Commands {#commands}

<SlashCommandExplanation />

| Command                                                              | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/hunt-the-code redeem code:<Text>`                                  | Redeem a code you have found. The code is case-insensitive.                                                                                                                                        |
| `/hunt-the-code profile`                                             | View your profile showing all found codes and your progress towards finding all available codes.                                                                                                   |
| `/hunt-the-code leaderboard`                                         | View the top 20 users who have found the most codes.                                                                                                                                               |
| `/hunt-the-code-admin create-code display-name:<Text> [code:<Text>]` | Create a new code with a display name. If no code string is specified, one will be auto-generated. Requires the Manage Messages permission.                                                        |
| `/hunt-the-code-admin report`                                        | Generate a detailed report of the current code hunt session, including user rankings and code statistics. The report is uploaded as a temporary document. Requires the Manage Messages permission. |
| `/hunt-the-code-admin end`                                           | End the current code hunt session. Generates a final report, then deletes all codes and user progress. Requires the Manage Messages permission.                                                    |

## Configuration {#configuration}

In this configuration file, you can customize the messages used by this module. Open it in your [dashboard](https://scnx.app/glink?page=bot/configuration?file=hunt-the-code%7Cstrings).

| Field                         | Description                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| Code-not-found Message        | Message shown when a user tries to redeem an invalid code.                            |
| Code-already-Redeemed Message | Message shown when a user tries to redeem a code they have already found.             |
| Code-Redeemed Message         | Message shown when a user successfully redeems a code.                                |
| Profile-Message               | The embed shown when a user views their profile, displaying found codes and progress. |
| Leaderboard-Message           | Customize the appearance of the leaderboard embed (title, color, thumbnail, image).   |

## Troubleshooting {#troubleshooting}

<details>
  <summary>Users cannot redeem codes</summary>
  <ul>
    <li>Make sure the code was created successfully using <code>/hunt-the-code-admin create-code</code>.</li>
    <li>Codes are case-insensitive, so capitalization does not matter.</li>
    <li>Check if the user has already redeemed the code by having them check their profile.</li>
  </ul>
</details>

## Stored data {#data-usage}

The following data is being stored:

For every code:

- The code string (primary key)
- The display name of the code
- The number of times the code has been redeemed
- Metadata about the entry (date when created and last updated)

For every user:

- The Discord User ID
- The total number of codes found
- A list of all redeemed code strings
- Metadata about the entry (date when created and last updated)

To remove all data stored by this module, [purge the module database](/docs/custom-bot/additional-features#reset-module-database).
