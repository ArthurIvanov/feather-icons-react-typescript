import React from 'react';
import { IconProps } from '../types';

const Droplet: React.FC<IconProps> = (props) => {
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
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
    );
};

export default Droplet;
