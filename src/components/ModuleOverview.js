import React, {useState, useEffect} from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';
import ModuleIcon from './ModuleIcon';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faArrowCircleRight,
    faCheckCircle,
    faDatabase,
    faFile,
    faFileCircleXmark,
    faHeart,
    faInfoCircle,
    faServer,
    faTerminal,
    faTriangleExclamation,
    faCircleXmark,
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

export default function ModuleOverview({moduleName}) {
    const modules = usePluginData('scnx-custom-bot-modules');
    const {i18n} = useDocusaurusContext();
    const moduleData = modules.find(m => m.name === moduleName);
    if (!moduleData) return <i className="data-warning">Can not display module overview: Module "{moduleName}" not
        found.</i>;

    return <><div className="card margin-bottom--md">
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
                {moduleData.earlyAccess && <div style={{color: '#60A5FA'}}>
                    <FontAwesomeIcon width={14} icon={faInfoCircle} style={{marginRight: '0.25rem'}}/> <Translate
                    id="module.earlyAccess">This module is currently only available to users with
                    Early-Access.</Translate>
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
                <Link href={`https://scnx.app/${i18n.currentLocale === 'en' ? '' : i18n.currentLocale + '/'}changelogs?module=${moduleData.name}`}
                      className="button button--secondary flex items-center">
                    <Translate id="modules.changelogs">View changelogs</Translate>
                    <FontAwesomeIcon icon={faArrowCircleRight} style={{marginLeft: '7px'}}/>
                </Link>
            </div>
        </div>
    </div>
    <ModuleStatusBanner moduleName={moduleName} locale={i18n.currentLocale}/>
    </>;
}