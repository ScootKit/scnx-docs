const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./../api-responses.json').toString());
const onlyID = process.argv[2];

let countData = {done: 0, missing: 0};
const modules = data.modules.filter(m => !onlyID || m.author.scnxOrgID === onlyID);

console.log(modules.sort((a, b) => b.approximateEnableBotCount - a.approximateEnableBotCount).map((m) => {
    if (m.tags[0] === 'ai') return `✓ ${m.name}: ${m.approximateEnableBotCount}`;
    const file = fs.readFileSync(`./../docs/custom-bot/modules/${m.tags[0]}/${m.name}.md`).toString();
    const isMissing = file.includes('Coming soon');
    countData[isMissing ? 'missing' : 'done']++;
    return `${isMissing ? '' : '✓ '}${m.name}: ${m.approximateEnableBotCount}`;
}).join('\n'));

if (onlyID) console.log(`\n${data.modules.filter(m => m.author.scnxOrgID !== onlyID).length}  items from other developers hidden.`);
console.log(`= From ${modules.length} modules, documenation is done for ${countData.done} and ${countData.missing} (${(countData.done / modules.length * 100).toFixed(2)}% done).`);