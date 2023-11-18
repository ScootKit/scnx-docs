const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./../api-responses.json').toString());

let countData = {newGenerated: 0, alreadyExists: 0};

for (const m of data.modules) {
    if (m.tags[0] === 'ai') continue;
    if (fs.existsSync(`./../docs/custom-bot/modules/${m.tags[0]}/${m.name}.md`)) {
        countData.alreadyExists++;
        continue;
    }
    fs.writeFileSync(`./../docs/custom-bot/modules/${m.tags[0]}/${m.name}.md`, `# ${m.humanReadableName.en}

${m.description.en}

<ModuleOverview moduleName="${m.name}" />

---
<center><h1>Coming soon</h1></center>
<center>We're still working on adding this documentation file - please check back later or raise a PR.</center>`);
    countData.newGenerated++;
}

console.log(`Done! ${countData.newGenerated} files newly generated, ${countData.alreadyExists} files already exist. Don't forget to commit them!`);