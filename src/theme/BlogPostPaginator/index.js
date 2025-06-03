import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import Translate from '@docusaurus/Translate';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/pro-solid-svg-icons';

export default function BlogPostPaginatorWrapper(props) {
  return (
    <>
        <div style={{marginTop: '1.5rem'}}>
            <div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '22px', maxWidth: '30rem', marginRight: 'auto', marginLeft: 'auto'}}>
                <Translate id="newsletterCTA.header">Get posts like this directly in your inbox by subscribing to our newsletter!</Translate>
            </div>
            <div style={{textAlign: 'center', marginTop: '0.8rem'}}>
                <a href="https://scnx.app/glink?action=newsletter-subscribe" target="_blank"><button className="button button--primary">
                    <Translate id="newsletterCTA.subscribe">Subscribe to our newsletter</Translate> <FontAwesomeIcon icon={faArrowCircleRight} style={{marginLeft: '4px'}} />
                </button></a>
            </div>
        </div>
      <BlogPostPaginator {...props} />
    </>
  );
}