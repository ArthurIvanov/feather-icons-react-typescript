import React from 'react';
import { IconProps } from '../types';

const SkipBack: React.FC<IconProps> = (props) => {
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
            <polygon points="19 20 9 12 19 4 19 20" />
            <line x1="5" y1="19" x2="5" y2="5" />
        </svg>
    );
};

export default SkipBack;