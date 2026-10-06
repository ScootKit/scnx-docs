const path = require('path');

// The import that pulls the whole Ask AI panel (about 1.3 MB with its dependencies) into main.js
const STATIC_IMPORT = "import { SidepanelButton } from '@docsearch/react/sidepanel';";
const REPLACEMENT_FILE = path.resolve(__dirname, '../../src/docsearch/SidepanelButton.js');

module.exports = function replaceSidepanelImport(source) {
    if (!source.includes(STATIC_IMPORT)) {
        this.emitWarning(new Error(
            'lightDocsearchSidepanel: the SidepanelButton import was not found in the DocSearch SearchBar, so the Ask AI panel ' +
            'is bundled into main.js again. Update plugins/lightDocsearchSidepanel/loader.js for the new DocSearch version.'
        ));
        return source;
    }
    return source.replace(STATIC_IMPORT, `import { SidepanelButton } from ${JSON.stringify(REPLACEMENT_FILE)};`);
};
