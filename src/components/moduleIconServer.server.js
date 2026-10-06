import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {icons, faFolder} from './ModuleIconRegistry';

export function renderIconMarkup(icon, className, width) {
    return renderToStaticMarkup(<FontAwesomeIcon icon={icons[icon] || faFolder} width={width} className={className}/>);
}
