import React from 'react';
import { IconProps } from '../types';

const Speaker: React.FC<IconProps> = (props) => {
    const {
        color = 'black',
        size = 24,
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
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <circle cx="12" cy="14" r="4" />
            <line x1="12" y1="6" x2="12.01" y2="6" />
        </svg>
    );
};

export default Speaker;
