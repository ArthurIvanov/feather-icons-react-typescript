import React from 'react';
import { IconProps } from '../types';

const ChevronsRight: React.FC<IconProps> = (props) => {
    const {
        color = 'currentColor',
        size,
        strokeWidth = 2,
        onClick,
        ...otherProps
    } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={onClick}
            {...otherProps}
        >
            <polyline points="13 17 18 12 13 7" />
            <polyline points="6 17 11 12 6 7" />
        </svg>
    );
};

export default ChevronsRight;
