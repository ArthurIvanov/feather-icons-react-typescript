import * as React from 'react';
import parse from 'html-react-parser';
import myIcons from './set';
import { IconComponentProps } from './types';

export const Icon = ({ name, ...props }: IconComponentProps) => {
    const myParse = parse(myIcons[name]);
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
            {myParse}
        </svg>
    );
};
