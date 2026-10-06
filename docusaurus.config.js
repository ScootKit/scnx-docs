// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const fs = require('fs');
const remarkMathModule = require('remark-math');
const rehypeKatexModule = require('rehype-katex');
const remarkMath = remarkMathModule.default || remarkMathModule;
const rehypeKatex = rehypeKatexModule.default || rehypeKatexModule;

// Whatever a plugin passes to setGlobalData is written into main.js, which every page has to download and
// run before it becomes interactive. Each locale is built separately and the components only read the current
// locale with English as the fallback, so translated fields are cut down to those two.
function keepLocales(texts, locale) {
    if (!texts || typeof texts !== 'object' || Array.isArray(texts)) return texts;
    const picked = {};
    for (const key of ['en', locale]) if (texts[key] !== undefined) picked[key] = texts[key];
    return picked;
}

// enableWarning and legalDisclaimer are not shown in the docs, and one module's enableWarning alone is over 200 KB
function slimModule(botModule, locale) {
    const {enableWarning, legalDisclaimer, ...rest} = botModule;
    return {
        ...rest,
        humanReadableName: keepLocales(botModule.humanReadableName, locale),
        description: keepLocales(botModule.description, locale)
    };
}

// A changelog version lists the changes of every module in that release, and the API also sends the full release
// text and all translations. ModuleOverview only shows the changes of its own module, as <locale>Html with enHtml
// as the fallback, so only that is kept. Without this the data was over 2 MB.
function slimChangelogs(changelogs, locale) {
    const slim = {};
    for (const [moduleName, data] of Object.entries(changelogs || {})) {
        const items = [];
        for (const version of (data.items || [])) {
            const moduleItems = (version.items || [])
                .filter((moduleItem) => moduleItem.moduleName === moduleName)
                .map((moduleItem) => ({
                    moduleName: moduleItem.moduleName,
                    items: (moduleItem.items || []).map((change) => {
                        const kept = {id: change.id, relevance: change.relevance, enHtml: change.enHtml};
                        if (change[locale + 'Html'] !== undefined) kept[locale + 'Html'] = change[locale + 'Html'];
                        return kept;
                    })
                }))
                .filter((moduleItem) => moduleItem.items.length > 0);
            if (moduleItems.length === 0) continue;
            items.push({versionName: version.versionName, createdAt: version.createdAt, slug: version.slug, items: moduleItems});
        }
        if (items.length > 0) slim[moduleName] = {items};
    }
    return slim;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'SCNX Documentation',
    favicon: 'img/favicon.ico',
    url: 'https://docs.scnx.xyz',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onDuplicateRoutes: 'throw',
    onBrokenAnchors: 'throw',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de', 'it']
    },
    trailingSlash: true,
    clientModules: [require.resolve('./src/fontawesome.js')],
    scripts: [],
    stylesheets: [
            {
            href: '/katex/katex.min.css',
            type: 'text/css'
        }
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                sitemap: {
                    changefreq: 'weekly'
                },
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    editLocalizedFiles: true,
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                    editUrl:
                        'https://github.com/ScootKit/scnx-docs/tree/main/'
                },
                blog: {
                    feedOptions: {
                        type: 'all',
                        title: 'SCNX News',
                        description: 'Receive semi-regular news about SCNX',
                        copyright: `Copyright © ${new Date().getFullYear()} ScootKit UG (haftungsbeschränkt)`,
                        createFeedItems: async (params) => {
                            const {blogPosts, defaultCreateFeedItems, ...rest} = params;
                            return defaultCreateFeedItems({
                                // keep only the 10 most recent blog posts in the feed
                                blogPosts: blogPosts.filter((item, index) => index < 10),
                                ...rest,
                            });
                        },
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            })
        ]
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            zoom: {
                selector: '.testa  img',
                background: {
                    dark: 'var(--ifm-navbar-background-color)'
                },
                config: {
                    // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                }
            },
            docsearch: {
                appId: '4YHHYAEEVJ',
                apiKey: 'e03c1e3fae42df88d77ae9c335b2adfe',
                indexName: 'SCNX Docs',
                askAi: {
                    assistantId: 'qyJzt6nnQOL9',
                    indexName: 'markdownt',
                    sidePanel: true,
                },
                contextualSearch: true,
            },
            navbar: {
                title: 'Docs',
                logo: {
                    alt: 'SCNX Logo',
                    src: 'img/favicon.png'
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'startSidebar',
                        position: 'left',
                        label: 'Getting started'
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'scnxSidebar',
                        position: 'left',
                        label: 'SCNX'
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'customBotSidebar',
                        position: 'left',
                        label: 'CustomBot'
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'supportBotSidebar',
                        position: 'left',
                        label: 'Support Bot'
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'linkedRolesSidebar',
                        position: 'left',
                        label: 'Linked Roles'
                    },
                    {to: 'blog', label: 'News', position: 'right'},
                    {
                        type: 'localeDropdown',
                        position: 'right'
                    }
                ]
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true,
                respectPrefersColorScheme: false
            },
            footer: {
                style: 'dark',
                logo: {
                    src: '/img/scootkit-logo.png',
                    width: 100,
                    alt: 'ScootKit Logo',
                    href: 'https://scootkit.net'
                },
                links: [
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Getting Started',
                                to: '/docs/setup'
                            },
                            {
                                label: 'SCNX Platform',
                                to: '/docs/scnx/intro'
                            },
                            {
                                label: 'Custom Bot',
                                to: '/docs/custom-bot/intro'
                            },
                            {
                                label: 'Support Bot',
                                to: '/docs/support-bot/intro'
                            },
                            {
                                label: 'Linked Roles',
                                to: '/docs/linked-roles/intro'
                            }
                        ]
                    },
                    {
                        title: 'SCNX',
                        items: [
                            {
                                label: 'Open Dashboard',
                                href: 'https://scnx.app/'
                            },
                            {
                                label: 'Plans & Pricing',
                                href: 'https://scnx.xyz/plans'
                            },
                            {
                                label: 'Changelogs',
                                href: 'https://scnx.app/changelogs'
                            },
                            {
                                label: 'Get Help',
                                href: 'https://scnx.app/help'
                            }
                        ]
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://scootk.it/dc'
                            },
                            {
                                label: 'X / Twitter',
                                href: 'https://scootk.it/twitter'
                            },
                            {
                                label: 'Instagram',
                                href: 'https://scootk.it/insta'
                            },
                            {
                                label: 'YouTube',
                                href: 'https://scootk.it/yt'
                            },
                            {
                                label: 'GitHub',
                                href: 'https://scootk.it/gh'
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} <a href="https://scootkit.net">ScootKit</a> - Built with Docusaurus 🦖<br/><div style="font-size: 14px; margin-top: 7px"><a href="https://scootkit.net/imprint">Impressum</a> &bullet; <a href="https://scootkit.net/privacy">Privacy Policy</a> &bullet; <a href="https://scootk.it/scnx-tos">SCNX Terms of Service</a> &bullet; <a href="https://scootk.it/scnx-spa">Bot Hosting Service Provider Agreement</a><br/>"ScootKit" is a trademark, registered in Germany. Not affiliated with Discord Inc.</div>`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        }),
    plugins: [
        function () {
            return {
                name: 'scnx-environment',
                async loadContent() {
                    if (fs.existsSync('./api-responses.json')) return require('./api-responses.json').environment;
                    return await (await fetch('https://scnx.app/api/environment')).json();
                },
                async contentLoaded({content, actions}) {
                    actions.setGlobalData(content);
                }
            };
        },
        function (context, options) {
            return {
                name: 'scnx-custom-bot-modules',
                async loadContent() {
                    if (fs.existsSync('./api-responses.json')) return require('./api-responses.json').modules;
                    const scnxOrgAuthorData = {};
                    let moduleData = await (await fetch('https://scnx.app/api/scn/beta-modules')).json();
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
                    const moduleDataWithOrgs = [];
                    for (const botModule of moduleData) {
                        if (!botModule.author.scnxOrgID) continue;
                        moduleDataWithOrgs.push({...botModule, orgData: scnxOrgAuthorData[botModule.author.scnxOrgID]});
                    }
                    return moduleDataWithOrgs;
                },
                async contentLoaded({content, actions}) {
                    actions.setGlobalData(content.map((botModule) => slimModule(botModule, context.i18n.currentLocale)));
                }
            };
        },
        function (context) {
            function renderChangelogMarkdown(data, micromark) {
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
            return {
                name: 'scnx-module-changelogs',
                async loadContent() {
                    if (fs.existsSync('./api-responses.json') && require('./api-responses.json').changelogs) return require('./api-responses.json').changelogs;
                    const {micromark} = await import('micromark');
                    const modules = await (await fetch('https://scnx.app/api/scn/beta-modules')).json();
                    const changelogs = {};
                    for (const mod of modules) {
                        try {
                            const res = await fetch(`https://scnx.app/api/changelogs?type=CUSTOM_BOT&branch=beta&module=${encodeURIComponent(mod.name)}&take=5`);
                            if (res.ok) {
                                const data = await res.json();
                                if (data && data.items && data.items.length > 0) changelogs[mod.name] = renderChangelogMarkdown(data, micromark);
                            }
                        } catch (e) { /* skip module */ }
                    }
                    return changelogs;
                },
                async contentLoaded({content, actions}) {
                    actions.setGlobalData(slimChangelogs(content, context.i18n.currentLocale));
                }
            };
        },
        '@docsearch/docusaurus-adapter',
        require.resolve('./plugins/lightDocsearchSidepanel'),
        'docusaurus-plugin-image-zoom',
        [
            '@docusaurus/plugin-pwa',
            {
                debug: true,
                offlineModeActivationStrategies: [
                    'appInstalled',
                    'standalone',
                    'queryString'
                ],
                pwaHead: [
                    {
                        tagName: 'link',
                        rel: 'icon',
                        href: '/img/favicon.png'
                    },
                    {
                        tagName: 'link',
                        rel: 'manifest',
                        href: '/manifest.json' // your PWA manifest
                    },
                    {
                        tagName: 'meta',
                        name: 'theme-color',
                        content: '#22C55E'
                    }
                ]
            }
        ]
    ]
};

module.exports = config;