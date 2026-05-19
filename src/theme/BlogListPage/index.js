import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {PageMetadata, HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme-original/BlogListPage/StructuredData';
import Translate from '@docusaurus/Translate';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare} from '@fortawesome/pro-solid-svg-icons';

function ChangelogBanner() {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #182338 0%, #1a2540 100%)',
            border: '1px solid #2e3c59',
            borderRadius: '12px',
            padding: '1rem 1.5rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
        }}>
            <div>
                <span style={{fontSize: '0.92rem', color: '#e2e8f0', fontWeight: 600}}>
                    <Translate id="blog.banner.text">Looking for detailed changelogs?</Translate>
                </span>
                <span style={{fontSize: '0.85rem', color: '#94a3b8', marginLeft: '0.5rem'}}>
                    <Translate id="blog.banner.desc">Full changelogs with every update are available on the SCNX dashboard.</Translate>
                </span>
            </div>
            <a
                href="https://scnx.app/changelogs"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    padding: '0.45rem 1rem',
                    borderRadius: '8px',
                    background: '#4ADE80',
                    color: '#0d1524',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                }}
            >
                <Translate id="blog.banner.button">View Changelogs</Translate> <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{marginLeft: '0.35rem', fontSize: '0.7rem'}}/>
            </a>
        </div>
    );
}

function BlogListPageMetadata({metadata}) {
    const {siteConfig: {title: siteTitle}} = useDocusaurusContext();
    const {blogDescription, blogTitle, permalink} = metadata;
    const isBlogOnlyMode = permalink === '/';
    const title = isBlogOnlyMode ? siteTitle : blogTitle;
    return (
        <>
            <PageMetadata title={title} description={blogDescription}/>
            <SearchMetadata tag="blog_posts_list"/>
        </>
    );
}

function BlogListPageContent({metadata, items, sidebar}) {
    return (
        <BlogLayout sidebar={sidebar}>
            <ChangelogBanner/>
            <BlogPostItems items={items}/>
            <BlogListPaginator metadata={metadata}/>
        </BlogLayout>
    );
}

export default function BlogListPage(props) {
    return (
        <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}>
            <BlogListPageStructuredData {...props}/>
            <BlogListPageMetadata {...props}/>
            <BlogListPageContent {...props}/>
        </HtmlClassNameProvider>
    );
}
