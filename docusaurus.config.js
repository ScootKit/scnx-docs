// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'SCNX Documentation',
    favicon: 'img/favicon.ico',
    url: 'https://docs.scnx.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de']
    },
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
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
                        href: 'https://github.com/ScootKit/scnx-docs',
                        label: 'GitHub',
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
                                label: 'Open SCNX Dashboard?',
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
                copyright: `Copyright © ${new Date().getFullYear()} <a href="https://scootkit.net">ScootKit</a> - Built with Docusaurus 🦖<br/><div style="font-size: 14px; margin-top: 2px"><a href="https://scootkit.net/imprint">Impressum</a> &bullet; <a href="https://scootkit.net/privacy">Privacy Policy</a> &bullet; <a href="https://sc-net.work/scnx-tos">SCNX Terms of Service</a></div>`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        }),
    plugins: [
        '@cmfcmf/docusaurus-search-local',
        [
            'docusaurus-plugin-plausible',
            {
                domain: 'docs.scnx.xyz',
                customDomain: 'analytics.scootkit.net'
            }
        ],
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