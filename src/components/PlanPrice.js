import React from 'react';
import Translate from '@docusaurus/Translate';

const intervals = {
    MONTHLY: <Translate id="interval.monthly">/ month</Translate>,
    YEARLY: <Translate id="interval.yearly">/ year</Translate>,
    LIFETIME: <Translate id="interval.lifetime">once</Translate>
};

export default function PlanPrice({plan, type}) {
    return <><span className={`dynamic-data-plan-${plan}-${type}`}>…</span> {intervals[type]}</>;
}