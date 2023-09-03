import React from 'react';
import Translate from '@docusaurus/Translate';
import {usePluginData} from '@docusaurus/useGlobalData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const intervals = {
    MONTHLY: <Translate id="interval.monthly">/ month</Translate>,
    YEARLY: <Translate id="interval.yearly">/ year</Translate>,
    LIFETIME: <Translate id="interval.lifetime">once</Translate>
};

export default function PlanPrice({plan, type}) {
    const {pricing} = usePluginData('scnx-environment');
    const {i18n} = useDocusaurusContext();
    return <>{new Intl.NumberFormat(i18n.currentLocale, {
        currency: 'eur',
        style: 'currency'
    }).format(pricing.prices[plan][type].EUR / 100)} {intervals[type]}</>;
}