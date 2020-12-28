import React from 'react';
import { IconProps } from '../types';

const CornerLeftUp: React.FC<IconProps> = (props) => {
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
            <polyline points="14 9 9 4 4 9" />
            <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
        </svg>
    );
};

export default CornerLeftUp;
