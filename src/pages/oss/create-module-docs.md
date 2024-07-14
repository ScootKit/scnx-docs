---
unlisted: true
---

# How to create a documentation page for your module

Welcome! On this site, we'll lay out some guidelines and information for Open-Source-Developers
on [ScootKit/CustomDCBot](https://github.com/ScootKit/CustomDCBot).

Goal of this guide is to give you information on how to write great (end user) documentation for your modules.
Please follow it closely, as end-user documentation will be required for every module starting Q2 2024.

## End-User documentation requirements {#requirements}

End-User Documentation allows your users to get familiar with your module, diagnose issues and use it to the full
potential. Additionally, the documentation will be used by our Helpers to assist your users when setting up your module.

:::info
Requirements for End-User documentation are not enforced and have been removed to avoid confusion.
:::

Contributions (including creating module documentation) to
the [ScootKit/scnx-docs](https://github.com/ScootKit/scnx-docs) are eligible for bounties as part of
our Open-Source-Developer Program.

## Format of End-User-Documentation {#format}

Each module page (these can be found [here](/docs/custom-bot/modules), sorted by the first tag of modules) will consist
of the following parts:

* Features (`#features`): This is the place to sell your module! Include as many features and details as possible.
* Setup (`#setup`): Explain how users can get started with your module. Include mentions of required configuration,
  slash commands permissions.
* Usage (`#usage`): Once users have set up the module, explain how they should use the module. If applicable, split
  usage between usage for users and admins.
* Slash-Commands (`#commands`, only if your module has one or more slash-commands): Add every command your module
  offers (tread subcommands as their own) to a table and explain everything users need to know about them. Include the
  format explanation.
* Configuration (`#configuration`, only if your module has one or more configuration file):
    * If you only have one configuration file: Explain what users can configure, add every field in a table and include
      a [GLink](https://scnx.app/user/tools?page=glink-generator) to the file in the SCNX Dashboard.
    * If you have multiple configuration files: Add each of them with their own subheading (
      ID: `#configuration-TechnicalFileName`, please replace `TechnicalFileName` with the full name of the file from
      your module.json). Below each heading, explain what users can configure in this file, add every field in a table
      and include
      a [GLink](https://scnx.app/user/tools?page=glink-generator) to the file in the SCNX Dashboard.
* Troubleshooting (`#troubleshooting`): Think of issues your users might encounter and explain ways to troubleshoot /
  solve them. We suggest creating something similar to an FAQ, but other formats are also possible.
* Stored data (`#data-usage`, only if your module has one or more database models): As part of our transparency
  commitment, please explain what data is stored, when it is stored and how users can delete it.

All of these parts are required. Optionally, you can add additional parts, such as:

* Definition of module-specific terms (`#module-terms`): Explain terms that you are going to use in your documentation
  file. Link users to this section when using this part.

:::info Unsure how to write your docs?
Take a look at already existing documentation to get some inspiration :sparkles:

Some features documentation
include: [Welcome & Boosts](/docs/custom-bot/modules/administration/welcomer), [Staff Goals](/docs/custom-bot/modules/administration/team-goals),  [Suggestions](/docs/custom-bot/modules/administration/suggestions)
and [Giveaways](/docs/custom-bot/modules/community/giveaways).
:::

SCNX will automatically link users to certain parts of your documentation. Because of this, we'll need unique heading
IDs (these are the parts in the brackets). Please review [the technical formatting section](#tech-format) for details.

## Set up the repository {#setup}

Our docs live in the [ScootKit/scnx-docs](https://github.com/ScootKit/scnx-docs) repository, where we accept
contributions from anyone.

To get started:

1. [Fork the repository](https://github.com/ScootKit/scnx-docs/fork).
2. Clone the forked repository: `git clone https://github.com/yourusername/scnx-docs`
3. Install dependencies: `yarn` / `npm i`
4. Run `cd bin/ && node download-api-responses.js` to download SCN API data. Leave the directory with `cd ..`.
5. Start the docosaurus local environment: `yarn start` / `npm start`
6. Your browser will open automatically. Changes will automatically refresh in docosaurus.

## Create your documentation file {#docs}

Run `node generate-docs-file.js <ModuleName>` (inside the `bin` folder) to generate the template for your module.

Your module file will be created in the `docs/modules/{tag}/{modulename}.md`. Open this file and proceed to write your
documentation using the [format guidelines](#format) and [technical guidelines](#tech-format).

## Make sure your documentation file meets our guidelines {#tech-format}

To ensure that SCNX can properly guide your users to the correct sections, make sure that

* your documentation includes every applicable [section](#format) - SCNX will link to these section, so make sure you
  didn't miss anything.
* make sure you added Heading-IDs to every header you used - you can find the correct headers in
  the [format section](#format). Include them as `{#heading-id}` behind your heading. This is case-sensitive, so make
  sure you copied them correctly.
* your markdown / MDX content is correct (you can skip this if you use a local docosaurus server to test).
* you use relativ paths to other documentation files from your file (this makes translating your file easier).
* if want to use assets: Use the `assets` directory and save your asset in a new directory with the same path and name
  as your file.
* make sure you use the `![](@site/docs/assets/path/to/your/asset)` format to reference files in the `docs/assets`
  folder.
* you have included documentation about every part of your module.

## Publish your documentation {#publish}

1. [Commit](https://git-scm.com/docs/git-commit) your changes.
2. [Push](https://git-scm.com/docs/git-push) your changes to your cloned repository on GitHub.
3. [Create a Pull Request](https://github.com/ScootKit/scnx-docs/compare) with your changes - include details about your
   changes.
4. Await formal approval from ScootKit Staff and fix raised issues.
5. Your changes will be available on [docs.scnx.xyz](https://docs.scnx.xyz) once the PR has been merged.