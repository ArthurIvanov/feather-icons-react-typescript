import React from 'react';
import { IconProps } from '../types';

const ArrowDownRight: React.FC<IconProps> = props => {
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
      <line x1="7" y1="7" x2="17" y2="17"/>
      <polyline points="17 7 17 17 7 17"/>
    </svg>
  );
};

export default ArrowDownRight;
