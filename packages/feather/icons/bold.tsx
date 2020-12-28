import React from 'react';
import { IconProps } from '../types';

const Bold: React.FC<IconProps> = props => {
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
      <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
      <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
    </svg>
  );
};

export default Bold;
