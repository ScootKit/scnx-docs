import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {renderIconMarkup} from 'scnx-module-icon-server';

/*
 * Icon for a module. The icon registry is large (about 370 KB), so it is loaded as its own chunk instead of
 * being part of main.js, which every page has to download and run.
 *
 * - On the server (see plugins/moduleIconServer) the finished icon is written into the page, so the page looks
 *   the same as before and nothing pops in.
 * - In the browser the first render keeps what the server sent (React does not touch the content of an element
 *   with dangerouslySetInnerHTML while hydrating).
 * - When the page is opened by client-side navigation there is no server markup yet, so the registry is loaded
 *   and the icon appears once the chunk has arrived. With server markup the registry is not loaded at all.
 */
let registry = null;
let registryRequest = null;

function loadRegistry() {
    if (!registryRequest) {
        registryRequest = import('./ModuleIconRegistry').then((loaded) => {
            registry = loaded;
            return loaded;
        });
    }
    return registryRequest;
}

export default function ModuleIcon({icon, className, width = 23}) {
    const [loaded, setLoaded] = useState(registry);
    const wrapper = useRef(null);
    const firstProps = useRef({icon, className, width});

    useEffect(() => {
        if (loaded) return;
        // The registry is only needed when the server did not already put the icon into the page, or when the
        // icon changes afterwards. Otherwise the 140 KB it takes to load it would be spent on nothing.
        const serverRendered = Boolean(wrapper.current && wrapper.current.childElementCount > 0);
        const changed = firstProps.current.icon !== icon || firstProps.current.className !== className || firstProps.current.width !== width;
        if (!serverRendered || changed) loadRegistry().then(setLoaded);
    }, [loaded, icon, className, width]);

    if (loaded) {
        return <FontAwesomeIcon icon={loaded.icons[icon] || loaded.faFolder} width={width} className={className}/>;
    }
    return (
        <span
            ref={wrapper}
            style={{display: 'contents'}}
            suppressHydrationWarning
            dangerouslySetInnerHTML={{__html: renderIconMarkup ? renderIconMarkup(icon, className, width) : ''}}
        />
    );
}
