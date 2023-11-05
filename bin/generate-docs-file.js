const fs = require('fs');

const moduleName = process.argv[2];

if (!moduleName) throw new Error('Module name missing');

const data = JSON.parse(fs.readFileSync('./../api-responses.json').toString());
const moduleData = data.modules.find(m => m.name === moduleName);
if (!moduleData) throw new Error('Module not found');

let content = `# ${moduleData.humanReadableName.en}

${moduleData.description.en}

<ModuleOverview moduleName="${moduleName}" />

## Features {#features}
*Explain all the great features of ${moduleName} here*

## Setup {#setup}
*Explain how to set up ${moduleName} - make sure to mention all the steps needed*

## Usage {#usage}
*Explain how admins and users can use ${moduleName}*
${moduleData.commandsCount ? `
## Commands {#commands}

<SlashCommandExplanation />

| Command                  | Description                |                                                                                                                                                               |
|--------------------------|----------------------------|
| *Command-Name here**      | *Command description here* |
` : ''}
${moduleData.configFileCount ? `
## Configuration {#configuration}
${moduleData.configFileCount === 1 ? `
Explain what users can configure and include a [GLink](https://scnx.app/user/tools?page=glink-generator) to the SCNX Dashboard to open this file.

| Field        | Description                                                                                                                                                                                                 | 
|--------------|------------------------------------------------------------|
| *Field-Name* | Describe what this field does - be as detailed as possible. |
` : [...Array(moduleData.configFileCount)].map((_, k) => {
    return `
### Configuration file ${k + 1} {#configuration-technicalConfigName}
Explain what users can configure in this file and include a [GLink](https://scnx.app/user/tools?page=glink-generator) to the SCNX Dashboard to open this file.
Please make sure that you replace the heading id with the correct file-name.

| Field        | Description                                                                                                                                                                                                 | 
|--------------|------------------------------------------------------------|
| *Field-Name* | Describe what this field does - be as detailed as possible. |`;
}).join('\n')}
` : ''}

## Troubleshooting {#throubleshooting}
Think of possible issues users might run into (or search our public support channel for inspiration) and explain how to avoid / fix them. 
You can layout this section as you want - feel free to "peak" in other documentation files for inspiration.
${moduleData.hasDB ? `
## Stored data {#data-usage}
As part of our transparency commitment, please explain what data is stored, when it is stored and how users can delete it. Need inspiration? 
Look at other docs-files.
` : ''}
`;

const fileContent = fs.existsSync(`./../docs/custom-bot/modules/${moduleData.tags[0]}/${moduleData.name}.md`) ? fs.readFileSync(`./../docs/custom-bot/modules/${moduleData.tags[0]}/${moduleData.name}.md`).toString() : 'Coming soon';
if (!fileContent.includes('Coming soon')) throw new Error('File already exists');
fs.writeFileSync(`./../docs/custom-bot/modules/${moduleData.tags[0]}/${moduleData.name}.md`, content);