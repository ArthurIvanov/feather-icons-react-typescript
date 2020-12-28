import React from 'react';
import { IconProps } from '../types';

const Award: React.FC<IconProps> = props => {
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
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  );
};

export default Award;
