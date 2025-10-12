// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const fs = require('fs');
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

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
        locales: ['en', 'de', 'it']
    },
    trailingSlash: true,
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
                    changefreq: 'daily' // Change back to weekly once initial docs phase is over
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
                            },
                            {
                                label: 'Linked Roles',
                                to: '/docs/linked-roles/intro'
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
                                label: 'Twitter / X',
                                href: 'https://scootk.it/twitter'
                            },
                            {
                                label: 'Instagram',
                                href: 'https://scootk.it/insta'
                            },
                            {
                                label: 'GitHub',
                                href: 'https://scootk.it/gh'
                            },
                            {
                                label: 'Facebook',
                                href: 'https://sccootk.it/facebook'
                            },
                            {
                                label: 'YouTube',
                                href: 'https://scootk.it/yt'
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