import * as React from 'react';
import icons from './IconsSet';
import { IconComponentProps } from './types';

export const Icon = ({ name, ...props }: IconComponentProps) => {
    const IconComponent = icons[name];
    return <IconComponent {...props} />;
};

export default Icon;
