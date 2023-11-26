const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./../api-responses.json').toString());
const onlyID = process.argv[2];

let countData = {done: 0, missing: 0, weightedDone: 0, weightedMissing: 0};
const modules = data.modules.filter(m => !onlyID || m.author.scnxOrgID === onlyID);

console.log(modules.sort((a, b) => b.approximateEnableBotCount - a.approximateEnableBotCount).map((m) => {
    if (m.tags[0] === 'ai') return `✓ ${m.name}: ${m.approximateEnableBotCount}`;
    const file = fs.readFileSync(`./../docs/custom-bot/modules/${m.tags[0]}/${m.name}.md`).toString();
    const isMissing = file.includes('Coming soon');
    countData[isMissing ? 'missing' : 'done']++;
    countData[isMissing ? 'weightedMissing' : 'weightedDone'] = countData[isMissing ? 'weightedMissing' : 'weightedDone'] + m.approximateEnableBotCount;
    return `${isMissing ? '' : '✓ '}${m.name}: ${new Intl.NumberFormat('en').format(m.approximateEnableBotCount)}`;
}).join('\n'));

if (onlyID) console.log(`\n${data.modules.filter(m => m.author.scnxOrgID !== onlyID).length} items from other developers hidden.`);
console.log(`= From ${modules.length} modules, documentation is done for ${countData.done} modules and ${countData.missing} are missing (${(countData.done / modules.length * 100).toFixed(2)}% done).`);
console.log(`  Considering module usage, this means that around ${(countData.weightedDone / (countData.weightedMissing + countData.weightedMissing) * 100).toFixed(2)}% of module usage cases are covered.`);