import React, {useEffect, useState} from 'react';

/*
 * Stand-in for SidepanelButton from @docsearch/react/sidepanel (same markup and classes, so the existing
 * styles apply). That package ships the button inside one 370 KB module together with the whole Ask AI panel,
 * and importing it statically put the panel in main.js, which every page has to download, parse and run before
 * it becomes interactive. The panel itself is still loaded on demand by the search bar when it is needed.
 * See plugins/lightDocsearchSidepanel. If DocSearch changes this button, update the copy here.
 */
function SparklesIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"
             strokeLinecap="round" strokeLinejoin="round" className="DocSearch-Hit-icon-sparkles ">
            <path
                d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            <path d="M20 3v4"/>
            <path d="M22 5h-4"/>
            <path d="M4 17v2"/>
            <path d="M5 18H3"/>
        </svg>
    );
}

export function SidepanelButton({variant = 'floating', keyboardShortcuts, translations = {}, ...buttonProps}) {
    const {buttonText = 'Ask AI', buttonAriaLabel = 'Ask AI'} = translations;
    const [platformKey, setPlatformKey] = useState(null);

    useEffect(() => {
        if (typeof navigator !== 'undefined') setPlatformKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl');
    }, []);

    const modifier = platformKey === 'Ctrl' ? 'Control' : 'Meta';
    const hasShortcut = keyboardShortcuts?.['Ctrl/Cmd+I'] !== false;
    const shortcut = `${modifier}+i`;

    return (
        <button
            className={`DocSearch-SidepanelButton ${variant}`}
            type="button"
            aria-label={hasShortcut ? `${buttonAriaLabel} (${shortcut})` : buttonAriaLabel}
            aria-keyshortcuts={hasShortcut ? shortcut : undefined}
            {...(variant === 'floating' ? {tabIndex: -1} : {})}
            {...buttonProps}
        >
            <SparklesIcon/>
            {variant !== 'floating' && buttonText}
        </button>
    );
}
