// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const fetch = require('node-fetch');
const fs = require('fs');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'SCNX Documentation',
    favicon: 'img/favicon.ico',
    url: 'https://docs.scnx.xyz',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de']
    },
    scripts: [{
        src: 'https://analytics.scootkit.net/js/script.js',
        defer: true,
        'data-domain': 'docs.scnx.xyz'
    }],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                sitemap: {
                    changefreq: 'daily' // Change back to weekly once initial docs phase is over
                },
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    editLocalizedFiles: true,
                    editUrl:
                        'https://github.com/ScootKit/scnx-docs/tree/main/'
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
            typesense: {
                typesenseCollectionName: 'scnx-docs',

                typesenseServerConfig: {
                    nodes: [
                        {
                            host: 'search.scootkit.net',
                            port: 443,
                            protocol: 'https'
                        }
                    ],
                    apiKey: 'E4IKHSM7gzZw50lbIzbpuSKhbUN5o7uq'
                },

                // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
                typesenseSearchParameters: {},

                // Optional
                contextualSearch: true
            },
            announcementBar: {
                id: 'wip',
                content:
                    'This documentation is currently work in progress, and it does not yet meet our high quality expectations - we\'ll fix that in the followings weeks and add localization. For now, please use resources on <a href="https://faq.scnx.app">faq.scnx.app</a> or on our <a href="https://scootk.it">Discord</a>. Thank you for your understanding.',
                backgroundColor: '#B45309',
                textColor: '#fff',
                isCloseable: false
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
                        sidebarId: 'modmailSidebar',
                        position: 'left',
                        label: 'Modmail'
                    },
                    {
                        href: 'https://scnx.app',
                        label: 'SCNX Dashboard',
                        position: 'right'
                    },
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
                        title: 'Docs',
                        items: [
                            {
                                label: 'Get started 🚀',
                                to: '/docs/intro'
                            },
                            {
                                label: 'SCNX',
                                to: '/docs/scnx/intro'
                            },
                            {
                                label: 'Custom Bot',
                                to: '/docs/custom-bot/intro'
                            },
                            {
                                label: 'Modmail',
                                to: '/docs/modmail/intro'
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
                                label: 'Twitter',
                                href: 'https://sc-net.work/twitter'
                            },
                            {
                                label: 'Instagram',
                                href: 'https://sc-net.work/insta'
                            },
                            {
                                label: 'GitHub',
                                href: 'https://sc-net.work/gh'
                            },
                            {
                                label: 'Facebook',
                                href: 'https://sc-net.work/facebook'
                            },
                            {
                                label: 'YouTube',
                                href: 'https://sc-net.work/yt'
                            }
                        ]
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Need help with SCNX?',
                                href: 'https://scnx.app/help'
                            },
                            {
                                label: 'Open SCNX Dashboard',
                                href: 'https://scnx.app/'
                            },
                            {
                                label: 'View SCNX Product Page',
                                href: 'https://scnx.xyz'
                            },
                            {
                                label: 'Help us improve these docs',
                                href: 'https://github.com/ScootKit/scnx-docs'
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} <a href="https://scootkit.net">ScootKit</a> - Built with Docusaurus 🦖<br/><div style="font-size: 14px; margin-top: 7px"><a href="https://scootkit.net/imprint">Impressum</a> &bullet; <a href="https://scootkit.net/privacy">Privacy Policy</a> &bullet; <a href="https://sc-net.work/scnx-tos">SCNX Terms of Service</a><br/>"ScootKit" is a trademark, registered in Germany. Not affiliated with Discord Inc.</div>`
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
                    let moduleData = await (await fetch('https://scnx.app/api/scn/modules')).json();
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
                    actions.setGlobalData(content);
                }
            };
        },
        'docusaurus-theme-search-typesense',
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