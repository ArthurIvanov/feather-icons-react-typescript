import React from 'react';
import { IconProps } from '../types';

const ToggleRight: React.FC<IconProps> = (props) => {
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
            <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
            <circle cx="16" cy="12" r="3" />
        </svg>
    );
};

export default ToggleRight;
