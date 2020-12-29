import React from 'react';
import { IconProps } from '../types';

const ArrowUpLeft: React.FC<IconProps> = (props) => {
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
            <line x1="17" y1="17" x2="7" y2="7" />
            <polyline points="7 17 7 7 17 7" />
        </svg>
    );
};

export default ArrowUpLeft;
