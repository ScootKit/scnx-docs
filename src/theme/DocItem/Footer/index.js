import React, {useEffect, useState} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Translate from '@docusaurus/Translate';

export default function FooterWrapper(props) {
    const data = useDoc();
    console.log(data);
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
        </>
    );
}