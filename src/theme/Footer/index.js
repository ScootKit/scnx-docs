import React, {useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare, faCircle} from '@fortawesome/pro-solid-svg-icons';
import {faDiscord, faXTwitter, faInstagram, faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const docLinks = [
    {label: <Translate id="footer.docs.start">Getting Started</Translate>, to: '/docs/setup'},
    {label: <Translate id="footer.docs.scnx">SCNX Platform</Translate>, to: '/docs/scnx/intro'},
    {label: <Translate id="footer.docs.cb">Custom Bot</Translate>, to: '/docs/custom-bot/intro'},
    {label: <Translate id="footer.docs.sb">Support Bot</Translate>, to: '/docs/support-bot/intro'},
    {label: <Translate id="footer.docs.lr">Linked Roles</Translate>, to: '/docs/linked-roles/intro'},
    {label: <Translate id="footer.docs.blog">News & Updates</Translate>, to: '/blog'},
];

const scnxLinks = [
    {label: <Translate id="footer.scnx.dashboard">Open Dashboard</Translate>, href: 'https://scnx.app/'},
    {label: <Translate id="footer.scnx.plans">Plans & Pricing</Translate>, href: 'https://scnx.xyz/plans'},
    {label: <Translate id="footer.scnx.changelogs">Changelogs</Translate>, href: 'https://scnx.app/changelogs'},
];

const legalLinks = [
    {label: <Translate id="footer.legal.imprint">Imprint</Translate>, href: 'https://scootkit.net/imprint'},
    {label: <Translate id="footer.legal.privacy">Privacy Policy</Translate>, href: 'https://scootkit.net/privacy'},
    {label: <Translate id="footer.legal.tos">Terms of Service</Translate>, href: 'https://scootk.it/scnx-tos'},
    {label: <Translate id="footer.legal.spa">Bot Hosting SPA</Translate>, href: 'https://scootk.it/scnx-spa'},
];

const socialLinks = [
    {icon: faDiscord, href: 'https://scootk.it/dc', label: 'Discord'},
    {icon: faXTwitter, href: 'https://scootk.it/twitter', label: 'X'},
    {icon: faInstagram, href: 'https://scootk.it/insta', label: 'Instagram'},
    {icon: faYoutube, href: 'https://scootk.it/yt', label: 'YouTube'},
    {icon: faGithub, href: 'https://scootk.it/gh', label: 'GitHub'},
];

function StatusIndicator() {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        fetch('https://status.scootkit.com/summary.json')
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                if (!data || !data.page) return;
                setStatus(data.page.status === 'UP' ? 'operational' : 'degraded');
            })
            .catch(() => setStatus(null));
    }, []);

    const color = status === 'operational' ? '#4ADE80' : status === 'degraded' ? '#f59e0b' : '#64748b';
    const label = status === 'operational'
        ? <Translate id="footer.status.operational">All systems operational</Translate>
        : status === 'degraded'
            ? <Translate id="footer.status.degraded">Some systems degraded</Translate>
            : <Translate id="footer.scnx.status">System Status</Translate>;

    return (
        <a href="https://status.scootkit.com" target="_blank" rel="noopener noreferrer" className={styles.statusLink}>
            <FontAwesomeIcon icon={faCircle} style={{color, fontSize: '0.45rem'}} className={status === 'operational' ? styles.statusPulse : ''}/>
            <span style={{color}}>{label}</span>
        </a>
    );
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Top section: brand + columns */}
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <Link to="/" className={styles.brandLink}>
                            <img src="/img/favicon.png" alt="SCNX" width={32} height={32} className={styles.brandLogo}/>
                            <span className={styles.brandName}>SCNX Docs</span>
                        </Link>
                        <p className={styles.brandTagline}>
                            <Translate id="footer.tagline">Build, configure, and manage your Discord bots — for free.</Translate>
                        </p>
                        <div className={styles.socialRow}>
                            {socialLinks.map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label={s.label}>
                                    <FontAwesomeIcon icon={s.icon}/>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={styles.columns}>
                        <div className={styles.column}>
                            <h4 className={styles.columnTitle}><Translate id="footer.col.docs">Documentation</Translate></h4>
                            {docLinks.map((l, i) => (
                                <Link key={i} to={l.to} className={styles.link}>{l.label}</Link>
                            ))}
                        </div>
                        <div className={styles.column}>
                            <h4 className={styles.columnTitle}><Translate id="footer.col.scnx">SCNX</Translate></h4>
                            {scnxLinks.map((l, i) => (
                                <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    {l.label} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.externalIcon}/>
                                </a>
                            ))}
                            <a href="https://scnx.app/help" target="_blank" rel="noopener noreferrer" className={styles.helpLink}>
                                <Translate id="footer.scnx.help">Get Help</Translate> <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.externalIcon}/>
                            </a>
                            <StatusIndicator/>
                        </div>
                        <div className={styles.column}>
                            <h4 className={styles.columnTitle}><Translate id="footer.col.legal">Legal</Translate></h4>
                            {legalLinks.map((l, i) => (
                                <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className={styles.bottomBar}>
                    <div className={styles.bottomLeft}>
                        <a href="https://scootkit.net" target="_blank" rel="noopener noreferrer" className={styles.scootkitLink}>
                            <img src="/img/scootkit-logo.png" alt="ScootKit" height={18} className={styles.scootkitLogo}/>
                        </a>
                        <span className={styles.copyright}>
                            &copy; {new Date().getFullYear()} ScootKit UG (haftungsbeschr&auml;nkt)
                        </span>
                    </div>
                    <div className={styles.bottomRight}>
                        <span className={styles.trademark}>
                            <Translate id="footer.trademark">"ScootKit" is a trademark registered in Germany. Not affiliated with Discord Inc.</Translate>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}