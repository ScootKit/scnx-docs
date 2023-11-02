const fetch = require('node-fetch');
const {writeFileSync} = require('fs');

(async () => {
    console.log('Loading environment…');
    const environment = await (await fetch('https://scnx.app/api/environment')).json();
    console.log('Done, loading module data…');
    const scnxOrgAuthorData = {};
    let moduleData = await (await fetch('https://scnx.app/api/scn/modules')).json();
    console.log('Done, loading marketplace organizations…');
    for (const botModule of moduleData) {
        if (!botModule.author.scnxOrgID || scnxOrgAuthorData[botModule.author.scnxOrgID]) continue;
        const res = await fetch('https://scnx.app/api/marketplace/organizations/' + botModule.author.scnxOrgID);
        scnxOrgAuthorData[botModule.author.scnxOrgID] = {};
        const result = await res.json();
        for (const key in result) {
            if (!['slug', 'displayName', 'iconUrl'].includes(key)) continue;
            scnxOrgAuthorData[botModule.author.scnxOrgID][key] = result[key];
        }
    }
    console.log('Done, saving…');
    const moduleDataWithOrgs = [];
    for (const botModule of moduleData) {
        if (!botModule.author.scnxOrgID) continue;
        moduleDataWithOrgs.push({...botModule, orgData: scnxOrgAuthorData[botModule.author.scnxOrgID]});
    }
    writeFileSync('./../api-responses.json', JSON.stringify({environment, modules: moduleDataWithOrgs}));
    console.log('Done!');
})();