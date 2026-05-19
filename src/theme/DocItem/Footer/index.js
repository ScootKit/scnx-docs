import React, {useEffect, useState} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export default function FooterWrapper(props) {
    const data = useDoc();
    const [contributors, setContributors] = useState(null);

    useEffect(() => {
        if (!data.metadata.editUrl) return;
        fetch(`https://api.github.com/repos/ScootKit/scnx-docs/commits?path=${data.metadata.editUrl.split('https://github.com/ScootKit/scnx-docs/tree/main')[1]}`).then(async (response) => {
            if (!response.ok) return;
            const data = await response.json();
            const contributors = [];
            for (const commit of data.filter(f => f.author && f.author?.user_view_type === 'public')) {
                if (contributors.find(f => f.id === commit.author.id)) continue;
                contributors.push(commit.author);
            }
            setContributors(contributors);
        });
    }, [data.metadata]);

    return (
        <>
            <Footer {...props} />
            {contributors ? <>
                <div style={{marginTop: '1rem'}}>
                    <div style={{fontWeight: 'bold', fontSize: '25px'}}>
                        <Translate id="contributors">Contributors to this documentation page</Translate>
                    </div>
                </div>
                <div style={{marginTop: '0.5rem'}} className="flex flex-wrap">
                    {contributors.map((contributor, key) => {
                        return <a target="_blank" href={contributor.html_url} key={key} style={{marginRight: '0.6rem'}}>
                            <img height={64} width={64} style={{borderRadius: 'calc(infinity * 1px)'}} src={contributor.avatar_url} title={contributor.login} alt={contributor.login}/>
                        </a>
                    })}
                </div>
            </> : <></>}

            <div style={{
                marginTop: '2rem',
                padding: '1.25rem 1.5rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #182338 0%, #1a2540 100%)',
                border: '1px solid #2e3c59',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem',
                flexWrap: 'wrap'
            }}>
                <div style={{flex: 1, minWidth: '180px'}}>
                    <div style={{fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.2rem'}}>
                        <Translate id="footer.help.title">Need more help?</Translate>
                    </div>
                    <div style={{fontSize: '0.82rem', color: '#94a3b8'}}>
                        <Translate id="footer.help.text">Can't find what you're looking for? Our team is happy to help.</Translate>
                    </div>
                </div>
                <div style={{display: 'flex', gap: '0.5rem', flexShrink: 0}}>
                    <Link to="https://scnx.app/help" style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        background: '#4ADE80',
                        color: '#0d1524',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        textDecoration: 'none'
                    }}>
                        <Translate id="footer.help.support">Contact Support</Translate>
                    </Link>
                    <Link to="https://scootk.it/dc" style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        background: 'transparent',
                        border: '1px solid #2e3c59',
                        color: '#cbd5e1',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        textDecoration: 'none'
                    }}>
                        <Translate id="footer.help.discord">Join Discord</Translate>
                    </Link>
                </div>
            </div>
        </>
    );
}
