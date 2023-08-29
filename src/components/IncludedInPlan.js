import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export default function IncludedInPlan({data = {}, additionalDetails = {}}) {
    return <div className="card padding--md margin-bottom--md">
        <p style={{fontWeight: 700, textTransform: 'uppercase'}}><Translate id="plans.included.header">Included in these
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
                                Starter-Plan</Translate>}
                    </div>
                    {additionalDetails['STARTER'] &&
                        <div style={{fontWeight: 400, color: '#A3A3A3'}}>{additionalDetails['STARTER']}</div>}
                </div>
            </div>
            <div style={{display: 'flex', fontWeight: 500}}>
                <span style={{fill: data['ACTIVE_GUILD'] ? '#2ECC71' : '#E74C3C', marginRight: '5px'}}>
                    {data['ACTIVE_GUILD'] ?
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
                        {data['ACTIVE_GUILD'] ? <Translate id="plans.included.activeGuildIncluded">Included in the
                                Active-Guild-Plan</Translate> :
                            <Translate id="plans.included.starterNotIncluded">Not included in the
                                Active-Guild-Plan</Translate>}
                    </div>
                    {additionalDetails['ACTIVE_GUILD'] &&
                        <div style={{fontWeight: 400, color: '#A3A3A3'}}>{additionalDetails['ACTIVE_GUILD']}</div>}
                </div>
            </div>
            <div style={{display: 'flex', fontWeight: 500}}>
                <span style={{fill: data['PRO'] ? '#2ECC71' : '#E74C3C', marginRight: '5px'}}>
                    {data['PRO'] ?
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
                        {data['PRO'] ? <Translate id="plans.included.proIncluded">Included in the PRO-Plan</Translate> :
                            <Translate id="plans.included.starterNotIncluded">Not included in the PRO-Plan</Translate>}
                    </div>
                    {additionalDetails['PRO'] &&
                        <div style={{fontWeight: 400, color: '#A3A3A3'}}>{additionalDetails['PRO']}</div>}
                </div>
            </div>
        </div>
        <div style={{marginTop: '10px', gap: '5px'}} className="flex">
            <Link href="https://scnx.xyz/plans" className="button button--primary flex">
                <Translate id="plans.included.compare">Compare SCNX Plans</Translate>
                <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22"
                     style={{marginLeft: '5px'}}>
                    <path
                        d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                </svg>
            </Link>
            {!data['STARTER'] && <Link href="https://scnx.app/glink?page=pricing?showUpgradeModal=true"
                                       className="button button--secondary">
                <Translate id="plans.included.upgrade">Upgrade SCNX Plan</Translate></Link>}
            <Link to="/docs/scnx/guilds/plans" className="button button--secondary">
                <Translate id="plans.included.learnMoreAboutPricing">Learn more about Pricing on SCNX</Translate></Link>
        </div>
    </div>;
}