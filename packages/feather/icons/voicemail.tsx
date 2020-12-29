import React from 'react';
import { IconProps } from '../types';

const Voicemail: React.FC<IconProps> = (props) => {
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
            <circle cx="5.5" cy="11.5" r="4.5" />
            <circle cx="18.5" cy="11.5" r="4.5" />
            <line x1="5.5" y1="16" x2="18.5" y2="16" />
        </svg>
    );
};

export default Voicemail;
