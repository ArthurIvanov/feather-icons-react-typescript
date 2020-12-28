import React from 'react';
import { IconProps } from '../types';

const Anchor: React.FC<IconProps> = props => {
  const { color = 'black', size = 24, strokeWidth = 2, onClick, ...otherProps } = props;
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
      <circle cx="12" cy="5" r="3"/>
      <line x1="12" y1="22" x2="12" y2="8"/>
      <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
    </svg>
  );
};

export default Anchor;
