import React from 'react';
import { IconProps } from '../types';

const CornerRightUp: React.FC<IconProps> = (props) => {
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
            <polyline points="10 9 15 4 20 9" />
            <path d="M4 20h7a4 4 0 0 0 4-4V4" />
        </svg>
    );
};

export default CornerRightUp;
