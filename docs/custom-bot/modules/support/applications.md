# Applications

Let users apply for staff position / partner / and more how you want - customizable questions and deny / approval

<ModuleOverview moduleName="applications" />

## Features {#features}

* Allow users to apply as your staff member, partner or anything else using a simple application flow directly on Discord via DMs.


## Setup {#setup}

*Explain how to set up applications - make sure to mention all the steps needed*

## Usage {#usage}

* Users can start the application process using [`/apply`](#commands) or by clicking a button below [a customizable message](#application-message)

### Application message {#application-message}


## Commands {#commands}

<SlashCommandExplanation />

| Command                  | Description                |                                                                                                                                                               
|--------------------------|----------------------------|
| *Command-Name here*      | *Command description here* |
` : ''}

## Configuration {#configuration}

### Configuration file 1 {#configuration-technicalConfigName}

Explain what users can configure in this file and include a [GLink](https://scnx.app/user/tools?page=glink-generator) to
the SCNX Dashboard to open this file.
Please make sure that you replace the heading id with the correct file-name.

| Field        | Description                                                 |                                                                                                                                                 
|--------------|-------------------------------------------------------------|
| *Field-Name* | Describe what this field does - be as detailed as possible. |

### Configuration file 2 {#configuration-technicalConfigName}

Explain what users can configure in this file and include a [GLink](https://scnx.app/user/tools?page=glink-generator) to
the SCNX Dashboard to open this file.
Please make sure that you replace the heading id with the correct file-name.

| Field        | Description                                                 |                                                                                                                                                 
|--------------|-------------------------------------------------------------|
| *Field-Name* | Describe what this field does - be as detailed as possible. |

## Troubleshooting {#troubleshooting}

Think of possible issues users might run into (or search our public support channel for inspiration) and explain how to
avoid / fix them.
You can lay out this section as you want - feel free to "peak" in other documentation files for inspiration.

## Stored data {#data-usage}

The following data will be stored about every submitted application:

* An unique integer identifying the database entry.
* The ID of the user who submitted applications.
* The state of the application (e.g. "Approved" / "Denied" / "Pending review").
* The name of the category the application was submitted into.
* The ID of the team member who processed the application, if applicable.
* The ID of the message that was sent into the staff channel.
* The answers that the user has submitted as part of their application.
* Metadata about the entry (date when created and last updated).

Data about the entry, including answers submitted by the user, might be stored in an encrypted manner
on [paste.scootkit.com](https://paste.scootkit.com), where staff members can access it. Without the full URL no one, not
even ScootKit, can decry the stored data from there.

Data in this module won't be deleted when processing an application or deleting the associated application. To delete
all applications from the
database, [purge the module database](/docs/custom-bot/additional-features#reset-module-database) - this won't remove application files from paste.scootkit.com.