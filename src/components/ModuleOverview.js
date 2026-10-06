import React, {useState, useEffect} from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';
import ModuleIcon from './ModuleIcon';
import EarlyAccessBanner from './EarlyAccessBanner';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faArrowCircleRight,
    faArrowUpRightFromSquare,
    faBug,
    faCheckCircle,
    faChevronDown,
    faDatabase,
    faFile,
    faFileCircleXmark,
    faHeart,
    faInfoCircle,
    faServer,
    faSparkles,
    faStar,
    faTerminal,
    faTriangleExclamation,
    faCircleXmark,
    faWrench,
    faZap
} from '@fortawesome/pro-solid-svg-icons';

let moduleStatusCache = null;
let moduleStatusPromise = null;

function fetchModuleStatus() {
    if (moduleStatusCache) return Promise.resolve(moduleStatusCache);
    if (moduleStatusPromise) return moduleStatusPromise;
    moduleStatusPromise = fetch('https://scnx.app/api/module-status')
        .then(res => res.ok ? res.json() : null)
        .then(data => {
            if (data) {
                moduleStatusCache = data;
            } else {
                moduleStatusPromise = null;
            }
            return data;
        })
        .catch(() => {
            moduleStatusPromise = null;
            return null;
        });
    return moduleStatusPromise;
}

function useModuleStatus(moduleName) {
    const [status, setStatus] = useState(null);
    useEffect(() => {
        let cancelled = false;
        fetchModuleStatus().then(data => {
            if (!cancelled && data && data[moduleName]) setStatus(data[moduleName]);
        });
        return () => { cancelled = true; };
    }, [moduleName]);
    return status;
}

function ModuleStatusBanner({moduleName, locale}) {
    const status = useModuleStatus(moduleName);
    if (!status) return null;

    if (status.status === 'UP' && !status.details) {
        return <Admonition type="tip" icon={<FontAwesomeIcon icon={faCheckCircle}/>}
                           title={<Translate id="module.status.up">This module is working fine</Translate>}>
            <Translate id="module.status.upDetails">This module is currently operating without any known issues.</Translate>
        </Admonition>;
    }

    const detailText = status.details?.[locale] || status.details?.en;
    const admonitionType = status.status === 'DOWN' ? 'danger' : status.status === 'LIMITED' ? 'warning' : status.status === 'UP' ? 'tip' : 'info';
    const icon = status.status === 'DOWN'
        ? <FontAwesomeIcon icon={faCircleXmark}/>
        : status.status === 'UP'
            ? <FontAwesomeIcon icon={faCheckCircle}/>
            : <FontAwesomeIcon icon={faTriangleExclamation}/>;
    const titleId = status.status === 'DOWN' ? 'module.status.down' : status.status === 'LIMITED' ? 'module.status.limited' : status.status === 'UP' ? 'module.status.up' : 'module.status.info';
    const titleDefault = status.status === 'DOWN'
        ? 'This module is currently unavailable'
        : status.status === 'LIMITED'
            ? 'This module is currently experiencing issues'
            : status.status === 'UP'
                ? 'This module is working fine'
                : 'Module status notice';

    return <Admonition type={admonitionType} icon={icon}
                       title={<Translate id={titleId}>{titleDefault}</Translate>}>
        {detailText || (status.status === 'UP'
            ? <Translate id="module.status.upDetails">This module is currently operating without any known issues.</Translate>
            : <Translate id="module.status.noDetails">There is a known issue affecting this module. Please check back later.</Translate>)}
    </Admonition>;
}

const RELEVANCE_CONFIG = {
    MAJOR: {icon: faStar, color: '#FBBF24', label: 'Major'},
    NEW_MODULE: {icon: faStar, color: '#34D399', label: 'New'},
    NEW_MODULE_EARLY_ACCESS: {icon: faStar, color: '#A78BFA', label: 'Early Access'},
    EARLY_ACCESS_LEFT: {icon: faCheckCircle, color: '#34D399', label: 'Stable'},
    IMPROVEMENT: {icon: faSparkles, color: '#60A5FA', label: 'Improvement'},
    QUALITY_OF_LIFE: {icon: faWrench, color: '#93C5FD', label: 'QoL'},
    BUG_FIXES: {icon: faBug, color: '#F87171', label: 'Bug Fix'},
    MINOR: {icon: faInfoCircle, color: '#9CA3AF', label: 'Minor'},
    NOTE: {icon: faInfoCircle, color: '#D1D5DB', label: 'Note'},
};

function formatChangeHtml(raw) {
    if (!raw) return [];
    return raw.split(/\n|<\/li>/).map(l =>
        l.replace(/<\/?[uo]l>/g, '').replace(/<\/?li>/g, '').replace(/<\/?p>/g, '').trim()
    ).filter(Boolean);
}

function ModuleChangelogs({moduleName, locale}) {
    // The global data only says that there is a changelog and when it last changed. The changes themselves are a small
    // static file (see the scnx-module-changelogs plugin in docusaurus.config.js) that is loaded when the box is opened.
    const index = usePluginData('scnx-module-changelogs');
    const latest = index?.[moduleName]?.latest;
    const changelogUrl = useBaseUrl(`/changelogs/${locale}/${moduleName}.json`);
    const [state, setState] = useState({status: 'idle', versions: []});
    if (!latest) return null;

    const loadChanges = (event) => {
        if (!event.currentTarget.open || state.status !== 'idle') return;
        setState({status: 'loading', versions: []});
        fetch(changelogUrl)
            .then((response) => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
            })
            .then((data) => setState({
                status: 'done',
                versions: (data.versions || []).map((version) => ({
                    ...version,
                    changes: version.changes.flatMap((change) => formatChangeHtml(change.html).map((line) => ({
                        id: change.id + line,
                        relevance: change.relevance,
                        html: line
                    })))
                })).filter((version) => version.changes.length > 0)
            }))
            .catch(() => setState({status: 'error', versions: []}));
    };

    const isRecent = (Date.now() - new Date(latest).getTime()) < 30 * 24 * 60 * 60 * 1000;
    const changelogPageUrl = `https://scnx.app/${locale === 'en' ? '' : locale + '/'}changelogs?module=${moduleName}`;

    return <details className={`module-changelogs ${isRecent ? 'module-changelogs--recent' : ''}`} onToggle={loadChanges}>
        <summary className="module-changelogs-summary">
            <FontAwesomeIcon icon={faChevronDown} width={12} className="module-changelogs-chevron"
                             style={{marginRight: '0.5rem', transition: 'transform 0.2s'}}/>
            <Translate id="module.changelogs.title">Recent changes</Translate>
            {isRecent && <span className="module-changelogs-badge">
                <Translate id="module.changelogs.new">Updated recently</Translate>
            </span>}
        </summary>
        <div className="module-changelogs-content">
            {state.status === 'loading' && <div className="module-changelog-entries">
                <Translate id="module.changelogs.loading">Loading changes…</Translate>
            </div>}
            {state.versions.map(version => {
                const versionDate = new Date(version.createdAt);
                const versionUrl = version.slug
                    ? `https://scnx.app/${locale === 'en' ? '' : locale + '/'}changelogs/${version.slug}`
                    : null;
                return <div key={version.versionName} className="module-changelog-version">
                    <div className="module-changelog-version-header">
                        <span className="module-changelog-version-name">
                            {versionUrl
                                ? <a href={versionUrl} target="_blank" rel="noopener noreferrer">{version.versionName} <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={10}/></a>
                                : version.versionName}
                        </span>
                        <span className="module-changelog-version-date">
                            {versionDate.toLocaleDateString(locale, {year: 'numeric', month: 'short', day: 'numeric'})}
                        </span>
                    </div>
                    <div className="module-changelog-entries">
                        {Object.entries(version.changes.reduce((groups, change) => {
                            const key = change.relevance || 'IMPROVEMENT';
                            if (!groups[key]) groups[key] = [];
                            groups[key].push(change);
                            return groups;
                        }, {})).map(([relevance, changes]) => {
                            const config = RELEVANCE_CONFIG[relevance] || RELEVANCE_CONFIG.IMPROVEMENT;
                            return <div key={relevance} className="module-changelog-group">
                                <span className="module-changelog-relevance-tag" style={{
                                    color: config.color,
                                    borderColor: config.color + '40',
                                    backgroundColor: config.color + '15'
                                }}>
                                    <FontAwesomeIcon icon={config.icon} width={10} style={{marginRight: '0.3rem'}}/>
                                    {config.label}
                                </span>
                                <ul className="module-changelog-group-list">
                                    {changes.map(change => <li key={change.id}
                                        dangerouslySetInnerHTML={{__html: change.html}}/>)}
                                </ul>
                            </div>;
                        })}
                    </div>
                </div>;
            })}
            <div className="module-changelog-footer">
                <Link href={changelogPageUrl} className="module-changelog-view-all">
                    <Translate id="module.changelogs.viewAll">View all changes</Translate>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={11} style={{marginLeft: '0.4rem'}}/>
                </Link>
            </div>
        </div>
    </details>;
}

export default function ModuleOverview({moduleName}) {
    const modules = usePluginData('scnx-custom-bot-modules');
    const {i18n} = useDocusaurusContext();
    const moduleData = modules.find(m => m.name === moduleName);
    if (!moduleData) return <i className="data-warning">Can not display module overview: Module "{moduleName}" not
        found.</i>;

    const moduleName_ = moduleData.humanReadableName[i18n.currentLocale] || moduleData.humanReadableName.en;

    return <>
    {moduleData.earlyAccess && <EarlyAccessBanner feature={moduleName_}/>}
    <div className="card margin-bottom--md">
        <div className="flex card-h padding--md" style={{alignItems: 'center'}}>
            <div style={{
                fontSize: 40,
                height: '80px',
                width: '80px',
                borderRadius: '0.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(31 41 55)'
            }} className="flex">
                <ModuleIcon icon={moduleData['fa-icon']} width={80}/>
            </div>
            <div className="margin-left--md">
                <div style={{
                    fontWeight: 700,
                    fontSize: '1.4rem'
                }}>{moduleData.humanReadableName[i18n.currentLocale] || moduleData.humanReadableName.en}</div>
                <div style={{
                    alignItems: 'center',
                    fontSize: '.75rem'
                }} className="flex">
                    {moduleData.orgData ? <a className="module-name"
                                             href={`https://scnx.app/marketplace/organizations/${moduleData.orgData.slug}`}>
                        {moduleData.orgData.iconUrl && <img src={moduleData.orgData.iconUrl} className="ignore-image" style={{
                            borderRadius: '9999px',
                            height: '25px',
                            width: '25px'
                        }} alt=""/>}
                        <div style={{marginLeft: '0.25rem', lineHeight: '0px'}}>{moduleData.orgData.displayName}</div>
                    </a> : moduleData.author.name}
                </div>
            </div>
        </div>
        <div className="padding--md">
            <div>{moduleData.description[i18n.currentLocale] || moduleData.description.en}</div>
            <div className="margin-top--md" style={{color: 'rgb(156 163 175)', fontSize: '0.9rem'}}>
                {moduleData.openSourceURL && <div className="module-card-info-item">
                    <FontAwesomeIcon width={14} icon={faHeart} style={{marginRight: '0.25rem'}}/> <Translate
                    id="modules.oss" values={{
                    ossLink: <a target="_blank" href={moduleData.openSourceURL}><Translate
                        id="modules.ossLink">open-source</Translate></a>
                }}>{'This module is {ossLink}.'}</Translate>
                </div>}
                {moduleData.earlyAccess && <div className="module-card-info-item" style={{color: '#A78BFA'}}>
                    <FontAwesomeIcon width={14} icon={faStar} style={{marginRight: '0.25rem'}}/> <Translate
                    id="module.earlyAccess">Early Access - unlocked with the ScootKit Membership perk.</Translate>
                </div>}
                {moduleData.hasDB && <div className="module-card-info-item">
                    <FontAwesomeIcon width={14} icon={faDatabase} style={{marginRight: '0.25rem'}}/> <Translate
                    id="module.hasDB">This module is storing data in your bot's database.</Translate>
                </div>}
                {moduleData.usesAICredits && <div className="module-card-info-item">
                    <FontAwesomeIcon width={14} icon={faZap} style={{marginRight: '0.25rem'}}/> <Translate
                    id="module.usesAICredits">This module uses your server's AI Credits.</Translate>
                </div>}
                {moduleData.commandsCount > 0 && <div className="module-card-info-item">
                    <FontAwesomeIcon width={14} icon={faTerminal}
                                     style={{marginRight: '0.25rem'}}/> {moduleData.commandsCount === 1 ? <Translate
                    id="module.oneCommands">This module creates one top-level Slash-Command on your
                    server.</Translate> : <Translate
                    id="module.moreCommands"
                    values={{count: moduleData.commandsCount}}>{'This module creates {count} top-level Slash-Commands on your server.'}</Translate>}
                </div>}
                <div className="module-card-info-item">
                    <FontAwesomeIcon width={14} icon={moduleData.configFileCount === 0 ? faFileCircleXmark : faFile}
                                     style={{marginRight: '0.25rem'}}/> {moduleData.configFileCount === 0 ?
                    <Translate id="module.noConfig">This module has no available configuration
                        files.</Translate> : (moduleData.configFileCount === 1 ?
                        <Translate id="module.oneConfigFile">This module has one configuration file.</Translate> :
                        <Translate values={{count: moduleData.configFileCount}}
                                   id="module.moreConfigFile">{'This module has {count} configuration files.'}</Translate>)}
                </div>
                <div className="module-card-info-item">
                    <FontAwesomeIcon width={14} icon={faServer} style={{marginRight: '0.25rem'}}/> <Translate
                    id="module.serverCount" values={{
                    count: new Intl.NumberFormat(i18n.currentLocale, {
                        compactDisplay: 'short',
                        notation: 'compact'
                    }).format(moduleData.approximateEnableBotCount)
                }}>{'This module is being actively used on over {count} other servers on SCNX.'}</Translate>
                </div>
                <div className="module-card-info-item">
                    <FontAwesomeIcon width={14} icon={faCheckCircle} style={{marginRight: '0.25rem'}}/> <Translate
                    id="module.includedInEveryPlan">This module is included for free in every plan.</Translate>
                    <span>{' '}</span>
                    <Link to="/docs/scnx/guilds/plans"><Translate id="module.plansLink">Learn more about
                        prices</Translate></Link>.
                </div>
            </div>
            <div className="margin-top--md flex flex-wrap" style={{gap: '5px'}}>
                <Link href={`https://scnx.app/${i18n.currentLocale}/glink?page=bot/modules?query=${moduleData.name}`}
                      className="button button--primary flex items-center">
                    <Translate id="modules.enable">Enable module on SCNX</Translate>
                    <FontAwesomeIcon icon={faArrowCircleRight} style={{marginLeft: '7px'}}/>
                </Link>
            </div>
        </div>
    </div>
    <ModuleChangelogs moduleName={moduleName} locale={i18n.currentLocale}/>
    <ModuleStatusBanner moduleName={moduleName} locale={i18n.currentLocale}/>
    </>;
}