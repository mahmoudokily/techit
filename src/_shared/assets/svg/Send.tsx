import React from 'react';

const Send = ({ width, height, fill, ...props }: any) => (
  <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.2222 7.53333V3L22 10.9333L14.2222 18.8667V14.22C8.66667 14.22 4.77778 16.0333 2 20C3.11111 14.3333 6.44444 8.66667 14.2222 7.53333Z"
      fill={fill}
    />
  </svg>
);

export default Send;
