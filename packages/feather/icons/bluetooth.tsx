import React from 'react';
import { IconProps } from '../types';

const Bluetooth: React.FC<IconProps> = props => {
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
      <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/>
    </svg>
  );
};

export default Bluetooth;
