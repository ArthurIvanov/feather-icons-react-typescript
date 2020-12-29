import React from 'react';
import { IconProps } from '../types';

const CornerLeftDown: React.FC<IconProps> = (props) => {
    const {
        color = 'currentColor',
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
            <polyline points="14 15 9 20 4 15" />
            <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
        </svg>
    );
};

export default CornerLeftDown;
