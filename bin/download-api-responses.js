const {writeFileSync} = require('fs');
const {micromark} = require('micromark');

function renderChangelogMarkdown(data) {
    for (const item of (data.items || [])) {
        for (const moduleItem of (item.items || [])) {
            for (const change of (moduleItem.items || [])) {
                for (const lang of ['en', 'de', 'it', 'nl']) {
                    if (change[lang]) change[lang + 'Html'] = micromark(change[lang]);
                }
            }
        }
    }
    return data;
}

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
    console.log('Done, loading module changelogs…');
    const changelogs = {};
    for (const mod of moduleData) {
        try {
            const res = await fetch(`https://scnx.app/api/changelogs?type=CUSTOM_BOT&branch=beta&module=${encodeURIComponent(mod.name)}&take=5`);
            if (res.ok) {
                const data = await res.json();
                if (data && data.items && data.items.length > 0) changelogs[mod.name] = renderChangelogMarkdown(data);
            }
        } catch (e) { /* skip module */ }
    }
    console.log('Done, saving…');
    const moduleDataWithOrgs = [];
    for (const botModule of moduleData) {
        if (!botModule.author.scnxOrgID) continue;
        moduleDataWithOrgs.push({...botModule, orgData: scnxOrgAuthorData[botModule.author.scnxOrgID]});
    }
    writeFileSync('./../api-responses.json', JSON.stringify({environment, modules: moduleDataWithOrgs, changelogs}));
    console.log('Done!');
})();