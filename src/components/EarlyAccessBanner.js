import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/pro-solid-svg-icons';

const MEMBERSHIP_URL = 'https://membership.scootkit.com';

/**
 * Banner for early-access features.
 *
 * Early Access is a paid perk on ScootKit Membership - it is NOT a plan tier
 * feature. Subscribers get access to preview features like this one before
 * general release.
 *
 * Props:
 *   feature     Optional feature name shown beside the "EARLY ACCESS" label.
 *   description Optional description paragraph. Falls back to a generic one.
 */
export default function EarlyAccessBanner({feature, description}) {
    return (
        <aside className="ea-banner" role="complementary">
            <div className="ea-banner__header">
                <div className="ea-banner__eyebrow">
                    <span className="ea-banner__pulse" aria-hidden="true"/>
                    <span className="ea-banner__label">
                        <Translate id="earlyAccess.badge">Early Access</Translate>
                    </span>
                    {feature && (
                        <>
                            <span className="ea-banner__divider" aria-hidden="true"/>
                            <span className="ea-banner__feature">{feature}</span>
                        </>
                    )}
                </div>
                <span className="ea-banner__meta">
                    <Translate id="earlyAccess.meta">ScootKit Membership</Translate>
                </span>
            </div>

            <p className="ea-banner__body">
                {description || (
                    <Translate id="earlyAccess.defaultDescription">
                        Early Access is an optional ScootKit Membership perk. Members get preview features
                        like this one before general release, and help shape them with feedback. It's a separate
                        subscription from your SCNX plan and can be picked up on the Membership site.
                    </Translate>
                )}
            </p>

            <div className="ea-banner__footnote">
                <Translate id="earlyAccess.footnote">
                    Unlocked instantly on purchase · Active across every server you manage
                </Translate>
            </div>

            <div className="ea-banner__actions">
                <Link href={MEMBERSHIP_URL} className="ea-banner__btn ea-banner__btn--primary">
                    <Translate id="earlyAccess.unlock">Unlock with Membership</Translate>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </Link>
                <Link href={MEMBERSHIP_URL} className="ea-banner__btn ea-banner__btn--ghost">
                    <Translate id="earlyAccess.learnMore">Learn about Membership</Translate>
                </Link>
            </div>
        </aside>
    );
}
