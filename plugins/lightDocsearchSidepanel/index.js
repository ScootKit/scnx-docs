// The DocSearch search bar imports its "Ask AI" button from the module that also contains the whole Ask AI
// panel, so every page downloads and runs about 1.3 MB of code before it can respond to input. This swaps just
// that import for a local copy of the button (src/docsearch/SidepanelButton.js). The panel is still loaded when
// someone opens it, because the search bar imports it dynamically.
module.exports = function lightDocsearchSidepanel() {
    return {
        name: 'light-docsearch-sidepanel',
        configureWebpack() {
            return {
                module: {
                    rules: [
                        {
                            test: /@docsearch[\\/]docusaurus-adapter[\\/]lib[\\/]theme[\\/]SearchBar[\\/]index\.js$/,
                            enforce: 'pre',
                            loader: require.resolve('./loader.js')
                        }
                    ]
                }
            };
        }
    };
};
