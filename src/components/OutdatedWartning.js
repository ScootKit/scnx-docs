import Translate from '@docusaurus/Translate';
import React from 'react';
import Admonition from '@theme/Admonition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/pro-solid-svg-icons';

export default function OutdatedWarning({type = 'MODMAIL_V2'}) {
    return <Admonition type="danger"
                       title={<Translate id="outdatedWarning">This documentation is outdated</Translate>}>
        {type === 'MODMAIL_V2' &&
            <><Translate id="outdatedWarningModmailV2">Modmail V2 is no longer available and has been replaced by the
                new
                Support Bot V3, which includes all Modmail features. </Translate>
                <br/>
                <a href="/docs/support-bot/v3-guide"><button className="button button--primary " style={{marginTop: '12px'}}><Translate id="learnMore">Learn more</Translate> <FontAwesomeIcon style={{marginLeft: '5px'}}
                                                                                     icon={faArrowCircleRight}/>
                </button></a>
            </>}
    </Admonition>;
}