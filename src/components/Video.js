import ReactPlayer from 'react-player';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import Translate from '@docusaurus/Translate';
import {faArrowCircleRight} from '@fortawesome/pro-solid-svg-icons';

export default function Video({url}) {
    const [allowed, setAllowed] = useState(false);
    const urlData = new URL(url);

    useEffect(() => {
        if (localStorage.getItem(`scootkit.privacy.consent-${urlData.hostname}`) === '1') setAllowed(true);
    }, [urlData]);

    if (!allowed && urlData.hostname === 'youtu.be') return <div style={{width: '640px', height: '360px', justifyContent: 'center'}}
                              className="card flex items-center">
        <div>
            <div style={{textAlign: 'center'}}><FontAwesomeIcon icon={faYoutube} style={{fontSize: '60px'}}/></div>
            <div style={{marginTop: '5px', fontWeight: 'bold', fontSize: '24px', textAlign: 'center'}}>
                <Translate
                    id="youtubeHidden.header">There's a YouTube Video here</Translate>
            </div>
            <div style={{marginTop: '3px', textAlign: 'center'}}>
                <Translate
                    id="youtubeHidden.header" values={{
                    link: <a href="https://policies.google.com/privacy?hl=en-US" target="_blank"><Translate
                        id="youtubeHidden.privacyLink">Privacy Policy</Translate></a>
                }}>{'By clicking below, you agree to YouTube\'s {link}.'}</Translate>
            </div>
            <div style={{marginTop: '12px', textAlign: 'center'}}>
                <button className="button button--primary" onClick={() => {
                    setAllowed(true);
                    localStorage.setItem(`scootkit.privacy.consent-${urlData.hostname}`, '1')
                }}>
                    <Translate
                        id="youtubeHidden.button">Accept and load YouTube video
                    </Translate>  <FontAwesomeIcon
                    icon={faArrowCircleRight} style={{marginLeft: '5px'}}/>
                </button>
            </div>
        </div>
    </div>;

    return <div>
        <ReactPlayer url={url} controls={true}/>
    </div>;
}