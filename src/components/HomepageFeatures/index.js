import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
    {
        title: <Translate id="features.one.header">Start easy and expand your knowledge</Translate>,
        Svg: require('@site/static/img/1.svg').default,
        description: (
            <Translate id="features.one.description">
                Starting with SCNX can seem intimidating, but with this documentation you can easily start small and
                than expand your knowledge to take advance of all of SCNX's features.
            </Translate>
        )
    },
    {
        title: <Translate id="features.two.header">Explore new features & get inspired</Translate>,
        Svg: require('@site/static/img/2.svg').default,
        description: (
            <Translate id="features.two.description">Sometimes, possibilities and features are hidden in SCNX. This
                documentation aims to document all features and possibilities - time to get inspired and built something
                awesome ✨</Translate>
        )
    },
    {
        title: <Translate id="features.three.header">Find solution for common problems</Translate>,
        Svg: require('@site/static/img/3.svg').default,
        description: (
            <Translate id="features.three.description">These docs include troubleshooting guides, frequently asked
                questions and more so you can solve any problems you have as fast as possible - no more guessing in the
                dark.</Translate>
        )
    }
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}