import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className={styles.conT}>
                <div className="container">
                    <h1 className={styles.cH}>{siteConfig.title}</h1>
                    <p className={styles.cS}><Translate id="main.subtitle">Detailed documentations and resources on
                        SCNX features and products</Translate></p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--primary button--lg"
                            to="/docs/intro">
                            <Translate id="main.start">Get started with SCNX 🚀</Translate>
                        </Link>
                    </div>
                    <div className={styles.buttons} style={{marginTop: '10px'}}>
                        <Link
                            className={clsx('button button--secondary button--lg', styles.flexiB)}
                            to="/docs/scnx/intro">
                            <img src="/img/favicon.png" style={{height: '20px', marginRight: '5px'}}/> <Translate
                            id="main.scnx">SCNX Documentation</Translate>
                        </Link>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/custom-bot/intro">
                            🤖 <Translate id="main.cb">Custom-Bot Documentation</Translate>
                        </Link>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/modmail/intro">
                            🎧 <Translate id="main.mm">Modmail Documentation</Translate>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout>
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}