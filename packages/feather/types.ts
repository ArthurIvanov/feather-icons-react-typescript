import { MouseEventHandler } from 'react';
import icons from './IconsSet';

export type IconName = keyof typeof icons;

export interface IconProps {
    color?: string;
    size?: string | number;
    strokeWidth?: string | number;
    className?: string;
    onClick?: MouseEventHandler;
}

export interface IconComponentProps extends IconProps {
    readonly name: IconName;
}
