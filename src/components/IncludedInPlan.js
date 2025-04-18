import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import PlanPrice from './PlanPrice';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/pro-solid-svg-icons';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function IncludedInPlan({data = {}, additionalDetails = {}}) {
    const {i18n} = useDocusaurusContext();

    return <div className="card padding--md margin-bottom--md">
        <p style={{fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem'}}><Translate
            id="plans.included.header">Included in these
            plans</Translate></p>
        <div>
            <div style={{display: 'flex', fontWeight: 500}}>
                <span style={{fill: data['STARTER'] ? '#2ECC71' : '#E74C3C', marginRight: '5px'}}>
                    {data['STARTER'] ?
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path
                                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>}
                </span>
                <div>
                    <div>
                        {data['STARTER'] ?
                            <Translate id="plans.included.starterIncluded">Included in the Starter-Plan</Translate> :
                            <Translate id="plans.included.starterNotIncluded">Not included in the
                                Starter-Plan</Translate>} (<Translate id="freeForEver">free for ever</Translate>)
                    </div>
                    {additionalDetails['STARTER'] && <div style={{
                        fontWeight: 400, color: '#A3A3A3', marginTop: '-2px', marginBottom: '3px'
                    }}>{additionalDetails['STARTER']}</div>}
                </div>
            </div>
            <div style={{display: 'flex', fontWeight: 500}}>
                <span style={{fill: data['UNLIMITED'] ? '#2ECC71' : '#E74C3C', marginRight: '5px'}}>
                    {data['UNLIMITED'] ?
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path
                                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>}
                </span>
                <div>
                    <div>
                        {data['UNLIMITED'] ? <Translate id="plans.included.activeGuildIncluded">Included in the
                                Unlimited-Plan</Translate> :
                            <Translate id="plans.included.activeGuildNotIncluded">Not included in the
                                Unlimited Plan</Translate>} (<PlanPrice plan="UNLIMITED" type="MONTHLY"/>)
                    </div>
                    {additionalDetails['UNLIMITED'] && <div style={{
                        fontWeight: 400, marginTop: '-2px', color: '#A3A3A3', marginBottom: '3px'
                    }}>{additionalDetails['UNLIMITED']}</div>}
                </div>
            </div>
            <div style={{display: 'flex', fontWeight: 500}}>
                <span style={{fill: data['PROFESSIONAL'] ? '#2ECC71' : '#E74C3C', marginRight: '5px'}}>
                    {data['PROFESSIONAL'] ?
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path
                                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>}
                </span>
                <div>
                    <div>
                        {data['PROFESSIONAL'] ? <Translate id="plans.included.proIncluded">Included in the Professional Plan</Translate> :
                            <Translate id="plans.included.proNotIncluded">Not included in the
                                Professional Plan</Translate>} (<PlanPrice plan="PROFESSIONAL" type="MONTHLY"/>)
                    </div>
                    {additionalDetails['PROFESSIONAL'] && <div style={{
                        fontWeight: 400,
                        marginTop: '-2px',
                        color: '#A3A3A3',
                        marginBottom: '3px'
                    }}>{additionalDetails['PROFESSIONAL']}</div>}
                </div>
            </div>
        </div>
        <div style={{marginTop: '10px', gap: '5px'}} className="flex flex-wrap">
            <Link href={`https://scnx.xyz/${i18n.currentLocale}/plans`}
                  className="button button--primary flex items-center">
                <Translate id="plans.included.compare">Compare SCNX Plans</Translate>
                <FontAwesomeIcon icon={faArrowCircleRight} style={{marginLeft: '7px'}}/>
            </Link>
            {!data['STARTER'] &&
                <Link href={`https://scnx.app/${i18n.currentLocale}/glink?page=pricing?showUpgradeModal=true`}
                                       className="button button--secondary">
                <Translate id="plans.included.upgrade">Upgrade SCNX Plan</Translate></Link>}
            <Link to="/docs/scnx/guilds/plans" className="button button--secondary">
                <Translate id="plans.included.learnMoreAboutPricing">Learn more about pricing on SCNX</Translate></Link>
        </div>
        <div style={{marginTop: '8px', fontSize: '10px', color: 'lightgray', marginBottom: '-7px'}}>
            <Translate id="price-disclaimer">Final prices depend on your currency and payment interval and will be
                displayed before purchase.</Translate>
        </div>
    </div>;
}