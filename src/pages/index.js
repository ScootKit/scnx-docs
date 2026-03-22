import React, {useState, useMemo} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRobot, faHeadset, faLink, faRocket, faArrowRight, faGear, faUserShield, faShieldCheck, faChartLine, faBoxArchive, faKey, faTicket, faNewspaper, faComments, faUsers, faWandMagicSparkles, faBolt} from '@fortawesome/pro-solid-svg-icons';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import {usePluginData} from '@docusaurus/useGlobalData';
import ModuleIcon from '@site/src/components/ModuleIcon';
import styles from './index.module.css';

const products = [
    {
        title: 'SCNX Platform',
        description: <Translate id="home.product.scnx">Server management, plans, backups, analytics, and account settings.</Translate>,
        link: '/docs/scnx/intro',
        icon: '/img/favicon.png',
        links: [
            {label: <Translate id="home.p.scnx.plans">Plans</Translate>, href: '/docs/scnx/guilds/plans'},
            {label: <Translate id="home.p.scnx.security">Security</Translate>, href: '/docs/scnx/guilds/enhanced-security'},
            {label: <Translate id="home.p.scnx.backups">Backups</Translate>, href: '/docs/scnx/guilds/backups'},
            {label: <Translate id="home.p.scnx.faq">FAQ</Translate>, href: '/docs/scnx/guilds/faq'},
        ],
    },
    {
        title: 'Custom Bot',
        description: <Translate id="home.product.cb">Build your own Discord bot with moderation, fun, community, and utility modules.</Translate>,
        link: '/docs/custom-bot/intro',
        faIcon: faRobot,
        links: [
            {label: <Translate id="home.p.cb.modules">Modules</Translate>, href: '/docs/custom-bot/intro'},
            {label: <Translate id="home.p.cb.commands">Custom Commands</Translate>, href: '/docs/custom-bot/custom-commands'},
            {label: <Translate id="home.p.cb.slash">Slash Commands</Translate>, href: '/docs/custom-bot/slash-commands'},
            {label: <Translate id="home.p.cb.troubleshoot">Troubleshooting</Translate>, href: '/docs/custom-bot/troubleshooting'},
        ],
    },
    {
        title: 'Support Bot',
        description: <Translate id="home.product.sb">Professional ticket handling with modmail and ticket system features.</Translate>,
        link: '/docs/support-bot/intro',
        faIcon: faHeadset,
        links: [
            {label: <Translate id="home.p.sb.modmail">Modmail</Translate>, href: '/docs/support-bot/modmail'},
            {label: <Translate id="home.p.sb.tickets">Ticket System</Translate>, href: '/docs/support-bot/ticket-system'},
            {label: <Translate id="home.p.sb.setup">Setup Guide</Translate>, href: '/docs/support-bot'},
            {label: <Translate id="home.p.sb.troubleshoot">Troubleshooting</Translate>, href: '/docs/support-bot/troubleshooting'},
        ],
    },
    {
        title: 'Linked Roles',
        description: <Translate id="home.product.lr">Connect external services to Discord roles for verification and access control.</Translate>,
        link: '/docs/linked-roles/intro',
        faIcon: faLink,
        links: [
            {label: <Translate id="home.p.lr.setup">Setup Guide</Translate>, href: '/docs/linked-roles'},
            {label: <Translate id="home.p.lr.docs">Documentation</Translate>, href: '/docs/linked-roles/intro'},
        ],
    },
];

const articleCategories = [
    {
        id: 'getting-started',
        label: <Translate id="home.cat.start">Getting Started</Translate>,
        articles: [
            {title: <Translate id="home.a.setup">Set up SCNX for your server</Translate>, link: '/docs/setup', desc: <Translate id="home.a.setup.d">Add your server and create your first bot in minutes.</Translate>},
            {title: <Translate id="home.a.cbsetup">Create your Custom Bot</Translate>, link: '/docs/custom-bot', desc: <Translate id="home.a.cbsetup.d">Step-by-step guide to setting up your own Discord bot.</Translate>},
            {title: <Translate id="home.a.sbsetup">Set up Support Bot</Translate>, link: '/docs/support-bot', desc: <Translate id="home.a.sbsetup.d">Build a professional support system with tickets and modmail.</Translate>},
            {title: <Translate id="home.a.plans">Choose the right plan</Translate>, link: '/docs/scnx/guilds/plans', desc: <Translate id="home.a.plans.d">Compare Starter, Unlimited, Professional, and Enterprise plans.</Translate>},
            {title: <Translate id="home.a.linkedroles">Set up Linked Roles</Translate>, link: '/docs/linked-roles', desc: <Translate id="home.a.linkedroles.d">Connect external services to Discord roles.</Translate>},
        ],
    },
    {
        id: 'configure',
        label: <Translate id="home.cat.configure">Configure Your Bot</Translate>,
        articles: [
            {title: <Translate id="home.a.modules">Explore Bot Modules</Translate>, link: '/docs/custom-bot/intro', desc: <Translate id="home.a.modules.d">Browse 50+ modules for moderation, fun, community, and more.</Translate>},
            {title: <Translate id="home.a.customcmds">Build Custom Commands</Translate>, link: '/docs/custom-bot/custom-commands', desc: <Translate id="home.a.customcmds.d">Create powerful slash commands with a visual editor.</Translate>},
            {title: <Translate id="home.a.slashcmds">Slash Commands Overview</Translate>, link: '/docs/custom-bot/slash-commands', desc: <Translate id="home.a.slashcmds.d">Understand how slash commands work on SCNX.</Translate>},
            {title: <Translate id="home.a.botmanage">Bot Status & Management</Translate>, link: '/docs/scnx/guilds/bots', desc: <Translate id="home.a.botmanage.d">Start, stop, restart your bot and understand the status panel.</Translate>},
            {title: <Translate id="home.a.images">Guild Image Storage</Translate>, link: '/docs/scnx/guilds/files', desc: <Translate id="home.a.images.d">Upload and manage images for your bot configurations.</Translate>},
        ],
    },
    {
        id: 'manage',
        label: <Translate id="home.cat.manage">Server Management</Translate>,
        articles: [
            {title: <Translate id="home.a.admins">Trusted Admins & Permissions</Translate>, link: '/docs/scnx/guilds/trusted-admins', desc: <Translate id="home.a.admins.d">Grant dashboard access to your team with granular permissions.</Translate>},
            {title: <Translate id="home.a.enhanced">Enhanced Security</Translate>, link: '/docs/scnx/guilds/enhanced-security', desc: <Translate id="home.a.enhanced.d">Require 2FA for all configuration changes on your server.</Translate>},
            {title: <Translate id="home.a.backups">Server Backups</Translate>, link: '/docs/scnx/guilds/backups', desc: <Translate id="home.a.backups.d">Back up messages, channels, roles and more with the SCNX Bot.</Translate>},
            {title: <Translate id="home.a.analytics">Server Analytics</Translate>, link: '/docs/scnx/guilds/analytics', desc: <Translate id="home.a.analytics.d">Track server activity and engagement metrics.</Translate>},
            {title: <Translate id="home.a.dcserver">dcserver.link</Translate>, link: '/docs/scnx/guilds/dcserver-link', desc: <Translate id="home.a.dcserver.d">Create a vanity URL for your Discord server.</Translate>},
        ],
    },
    {
        id: 'account',
        label: <Translate id="home.cat.account">Account & Billing</Translate>,
        articles: [
            {title: <Translate id="home.a.security">Account Security & 2FA</Translate>, link: '/docs/scnx/account-and-billing/account-security', desc: <Translate id="home.a.security.d">Set up two-factor authentication and recovery codes.</Translate>},
            {title: <Translate id="home.a.billing">Billing FAQ</Translate>, link: '/docs/scnx/account-and-billing/faq', desc: <Translate id="home.a.billing.d">Payment methods, subscriptions, invoices, and refunds.</Translate>},
            {title: <Translate id="home.a.ads">Ads on SCNX</Translate>, link: '/docs/scnx/account-and-billing/ads', desc: <Translate id="home.a.ads.d">Advertise your server or product to Discord power users.</Translate>},
            {title: <Translate id="home.a.toolbox">SCNX Toolbox</Translate>, link: '/docs/scnx/account-and-billing/toolbox', desc: <Translate id="home.a.toolbox.d">Tools for professional Discord users.</Translate>},
        ],
    },
    {
        id: 'troubleshoot',
        label: <Translate id="home.cat.troubleshoot">Troubleshooting</Translate>,
        articles: [
            {title: <Translate id="home.a.botissues">Bot not working?</Translate>, link: '/docs/scnx/guilds/bots', desc: <Translate id="home.a.botissues.d">Common bot issues and how to fix them.</Translate>},
            {title: <Translate id="home.a.cbtrouble">Custom Bot Troubleshooting</Translate>, link: '/docs/custom-bot/troubleshooting', desc: <Translate id="home.a.cbtrouble.d">Diagnose and fix Custom Bot problems.</Translate>},
            {title: <Translate id="home.a.sbtrouble">Support Bot Troubleshooting</Translate>, link: '/docs/support-bot/troubleshooting', desc: <Translate id="home.a.sbtrouble.d">Diagnose and fix Support Bot problems.</Translate>},
            {title: <Translate id="home.a.serverfaq">Server FAQ</Translate>, link: '/docs/scnx/guilds/faq', desc: <Translate id="home.a.serverfaq.d">Common questions about servers, bots, and features.</Translate>},
            {title: <Translate id="home.a.billingfaq">Billing FAQ</Translate>, link: '/docs/scnx/account-and-billing/faq', desc: <Translate id="home.a.billingfaq.d">Payment issues, subscriptions, and account questions.</Translate>},
        ],
    },
];

const quickLinks = [
    {label: <Translate id="home.quick.faqGuild">Server FAQ</Translate>, link: '/docs/scnx/guilds/faq'},
    {label: <Translate id="home.quick.faqBilling">Billing FAQ</Translate>, link: '/docs/scnx/account-and-billing/faq'},
    {label: <Translate id="home.quick.enhanced">Enhanced Security</Translate>, link: '/docs/scnx/guilds/enhanced-security'},
    {label: <Translate id="home.quick.trustedAdmins">Trusted Admins</Translate>, link: '/docs/scnx/guilds/trusted-admins'},
    {label: <Translate id="home.quick.modules">Bot Modules</Translate>, link: '/docs/custom-bot/intro'},
    {label: <Translate id="home.quick.commands">Custom Commands</Translate>, link: '/docs/custom-bot/custom-commands'},
    {label: <Translate id="home.quick.dcserver">dcserver.link</Translate>, link: '/docs/scnx/guilds/dcserver-link'},
    {label: <Translate id="home.quick.backups">Backups</Translate>, link: '/docs/scnx/guilds/backups'},
    {label: <Translate id="home.quick.plans">Plans & Pricing</Translate>, link: '/docs/scnx/guilds/plans'},
    {label: <Translate id="home.quick.security">Account Security</Translate>, link: '/docs/scnx/account-and-billing/account-security'},
    {label: <Translate id="home.quick.news">News & Updates</Translate>, link: '/blog'},
];

function SearchHero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroOrbs}><div className={styles.orb1}/><div className={styles.orb2}/><div className={styles.orb3}/></div>
            <div className={styles.heroInner}>
                <h1 className={styles.heroTitle}>
                    <Translate id="home.hero.title">SCNX Documentation</Translate>
                </h1>
                <p className={styles.heroSubtitle}>
                    <Translate id="home.hero.subtitle">Everything you need to build, configure, and manage your Discord bots and servers.</Translate>
                </p>
                <div className={styles.heroActions}>
                    <button
                        className={styles.searchButton}
                        onClick={() => document.querySelector('.DocSearch-Button')?.click()}
                        type="button"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span><Translate id="home.hero.search">Search documentation...</Translate></span>
                        <kbd>Ctrl+K</kbd>
                    </button>
                </div>
                <div className={styles.heroAiHint}>
                    <span className={styles.aiSparkle}>&#x2728;</span>
                    <Translate id="home.hero.ai">Powered by AI — ask any question about SCNX in the search bar</Translate>
                </div>
            </div>
        </div>
    );
}

function ProductCard({title, description, link, icon, faIcon, links}) {
    return (
        <div className={styles.productCard}>
            <Link to={link} className={styles.productCardMain}>
                <div className={styles.productIcon}>
                    {icon ? <img src={icon} alt="" width="28" height="28"/> : <FontAwesomeIcon icon={faIcon} className={styles.productFaIcon}/>}
                </div>
                <div className={styles.productText}>
                    <h3 className={styles.productTitle}>{title}</h3>
                    <p className={styles.productDescription}>{description}</p>
                </div>
                <svg className={styles.productArrow} width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
            {links && links.length > 0 && (
                <div className={styles.productSubLinks}>
                    {links.map((l, i) => (
                        <Link key={i} to={l.href} className={styles.productPill}>{l.label}</Link>
                    ))}
                </div>
            )}
        </div>
    );
}

function WhySCNX() {
    const features = [
        {icon: faRocket, title: <Translate id="home.why.hosting">Free 24/7 Bot Hosting</Translate>, desc: <Translate id="home.why.hosting.d">Host your fully custom Discord bot for free — no server or VPS needed.</Translate>},
        {icon: faWandMagicSparkles, title: <Translate id="home.why.nocode">No Coding Required</Translate>, desc: <Translate id="home.why.nocode.d">Configure everything through a visual dashboard. Build powerful bots without writing a single line of code.</Translate>},
        {icon: faUsers, title: <Translate id="home.why.team">Team Collaboration</Translate>, desc: <Translate id="home.why.team.d">Give your admins granular access to the dashboard with Trusted Admins and role-based permissions.</Translate>},
        {icon: faBolt, title: <Translate id="home.why.modules">50+ Ready-Made Modules</Translate>, desc: <Translate id="home.why.modules.d">Moderation, tickets, auto-roles, welcome messages, leveling, and much more — all configurable.</Translate>},
        {icon: faShieldCheck, title: <Translate id="home.why.security">Enterprise-Grade Security</Translate>, desc: <Translate id="home.why.security.d">Protect your server config with 2FA, sudo mode, and Enhanced Security for your whole team.</Translate>},
        {icon: faHeadset, title: <Translate id="home.why.support">Professional Support System</Translate>, desc: <Translate id="home.why.support.d">Built-in modmail and ticket system with forms, topics, and analytics for your community.</Translate>},
    ];
    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}><Translate id="home.why.title">Why SCNX?</Translate></h2>
            <div className={styles.featuresGrid}>
                {features.map((f, i) => (
                    <div key={i} className={styles.featureCard}>
                        <FontAwesomeIcon icon={f.icon} className={styles.featureIcon}/>
                        <h3 className={styles.featureTitle}>{f.title}</h3>
                        <p className={styles.featureDesc}>{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function getModuleDocPath(mod) {
    return mod.tags && mod.tags[0] ? mod.tags[0] : null;
}

function getModuleUrl(mod) {
    const category = getModuleDocPath(mod);
    if (!category) return null;
    const slug = category === mod.name ? category : `${category}/${mod.name}`;
    return `/docs/custom-bot/modules/${slug}`;
}

function PopularModules() {
    const modules = usePluginData('scnx-custom-bot-modules');
    const {i18n} = useDocusaurusContext();

    const topModules = useMemo(() => {
        if (!modules || !Array.isArray(modules)) return [];
        return [...modules]
            .filter(m => m.approximateEnableBotCount && getModuleUrl(m))
            .sort((a, b) => b.approximateEnableBotCount - a.approximateEnableBotCount)
            .slice(0, 8);
    }, [modules]);

    if (topModules.length === 0) return null;

    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}><Translate id="home.modules.title">Most Popular Bot Modules</Translate></h2>
            <div className={styles.modulesGrid}>
                {topModules.map((m, i) => (
                    <Link to={getModuleUrl(m)} key={i} className={styles.moduleCard}>
                        <div className={styles.moduleIconWrap}>
                            <ModuleIcon icon={m['fa-icon']} width={20}/>
                        </div>
                        <div className={styles.moduleInfo}>
                            <span className={styles.moduleName}>{m.humanReadableName[i18n.currentLocale] || m.humanReadableName.en}</span>
                            <span className={styles.moduleDesc}>{m.description[i18n.currentLocale] || m.description.en}</span>
                            <span className={styles.moduleUsage}>
                                {new Intl.NumberFormat(i18n.currentLocale, {notation: 'compact', compactDisplay: 'short'}).format(m.approximateEnableBotCount)} <Translate id="home.modules.servers">servers</Translate>
                            </span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className={styles.moduleArrow}>
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function TabbedArticles() {
    const [activeTab, setActiveTab] = useState(articleCategories[0].id);
    const activeCategory = articleCategories.find(c => c.id === activeTab);

    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
                <Translate id="home.articles.title">Browse Articles</Translate>
            </h2>
            <div className={styles.tabBar}>
                {articleCategories.map((cat) => (
                    <button
                        key={cat.id}
                        className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ''}`}
                        onClick={() => setActiveTab(cat.id)}
                        type="button"
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
            <div className={styles.tabContent}>
                {activeCategory.articles.map((article, idx) => (
                    <Link to={article.link} key={idx} className={styles.articleCard}>
                        <div className={styles.articleInfo}>
                            <span className={styles.articleTitle}>{article.title}</span>
                            <span className={styles.articleDesc}>{article.desc}</span>
                        </div>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className={styles.articleArrow}>
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function QuickLinks() {
    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
                <Translate id="home.quick.title">Quick Links</Translate>
            </h2>
            <div className={styles.quickLinksRow}>
                {quickLinks.map((item, idx) => (
                    <Link to={item.link} key={idx} className={styles.quickLink}>
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

function CommunitySection() {
    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}><Translate id="home.community.title">Community & Resources</Translate></h2>
            <div className={styles.communityGrid}>
                <Link to="https://scootk.it/dc" className={styles.communityCard}>
                    <FontAwesomeIcon icon={faDiscord} className={styles.communityIcon} style={{color: '#5865F2'}}/>
                    <div>
                        <h3 className={styles.communityCardTitle}><Translate id="home.community.discord">Discord Server</Translate></h3>
                        <p className={styles.communityCardDesc}><Translate id="home.community.discord.d">Get help from the community and SCNX staff.</Translate></p>
                    </div>
                </Link>
                <Link to="/blog" className={styles.communityCard}>
                    <FontAwesomeIcon icon={faNewspaper} className={styles.communityIcon} style={{color: '#4ADE80'}}/>
                    <div>
                        <h3 className={styles.communityCardTitle}><Translate id="home.community.blog">News & Updates</Translate></h3>
                        <p className={styles.communityCardDesc}><Translate id="home.community.blog.d">Stay up to date with the latest SCNX features and changes.</Translate></p>
                    </div>
                </Link>
                <Link to="https://scnx.app/help" className={styles.communityCard}>
                    <FontAwesomeIcon icon={faComments} className={styles.communityIcon} style={{color: '#f59e0b'}}/>
                    <div>
                        <h3 className={styles.communityCardTitle}><Translate id="home.community.support">Support Center</Translate></h3>
                        <p className={styles.communityCardDesc}><Translate id="home.community.support.d">Contact our team directly for help with your account or servers.</Translate></p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

function GetStartedBanner() {
    return (
        <div className={styles.getStartedBanner}>
            <FontAwesomeIcon icon={faRocket} className={styles.getStartedIcon}/>
            <div className={styles.getStartedContent}>
                <h2 className={styles.getStartedTitle}><Translate id="home.cta.title">Ready to get started?</Translate></h2>
                <p className={styles.getStartedText}><Translate id="home.cta.text">Set up SCNX on your Discord server in just a few minutes — completely free.</Translate></p>
            </div>
            <Link to="/docs/setup" className={styles.getStartedButton}>
                <Translate id="home.cta.button">Get Started</Translate> <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '0.4rem'}}/>
            </Link>
        </div>
    );
}

function HelpBanner() {
    return (
        <div className={styles.helpBanner}>
            <div className={styles.helpContent}>
                <h2 className={styles.helpTitle}>
                    <Translate id="home.help.title">Need more help?</Translate>
                </h2>
                <p className={styles.helpText}>
                    <Translate id="home.help.text">Can't find what you're looking for? Our team is happy to help.</Translate>
                </p>
            </div>
            <div className={styles.helpActions}>
                <Link to="https://scnx.app/help" className={styles.helpButton}>
                    <Translate id="home.help.support">Contact Support</Translate>
                </Link>
                <Link to="https://scootk.it/dc" className={styles.helpButtonSecondary}>
                    <Translate id="home.help.discord">Join Discord</Translate>
                </Link>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <Layout description="SCNX Documentation — guides, tutorials, and references for building Discord bots and managing servers.">
            <SearchHero/>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <Translate id="home.products.title">Browse by Product</Translate>
                        </h2>
                        <div className={styles.productsGrid}>
                            {products.map((product, idx) => (
                                <ProductCard key={idx} {...product} />
                            ))}
                        </div>
                    </div>

                    <WhySCNX/>
                    <PopularModules/>
                    <TabbedArticles/>
                    <QuickLinks/>
                    <CommunitySection/>
                    <GetStartedBanner/>
                    <HelpBanner/>
                </div>
            </main>
        </Layout>
    );
}