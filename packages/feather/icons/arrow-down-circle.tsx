import React from 'react';
import { IconProps } from '../types';

const ArrowDownCircle: React.FC<IconProps> = props => {
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
      <circle cx="12" cy="12" r="10"/>
      <polyline points="8 12 12 16 16 12"/>
      <line x1="12" y1="8" x2="12" y2="16"/>
    </svg>
  );
};

export default ArrowDownCircle;