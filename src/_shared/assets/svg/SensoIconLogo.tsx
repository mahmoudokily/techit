import React from 'react';

const SensoIconLogo = ({ fill, ...props }: any) => (
  <svg viewBox="0 0 300 300" {...props}>
    <circle
      cx={149.72}
      cy={150.48}
      r={143.3}
      style={{
        fill: '#024751',
      }}
    />
    <path
      d="M99 73a19.53 19.53 0 1 1-19.54 19.5A19.53 19.53 0 0 1 99 73m-2.73-9.06A25.27 25.27 0 1 1 71 89.18a25.27 25.27 0 0 1 25.26-25.27Z"
      style={{
        fillRule: 'evenodd',
        fill: '#fff',
      }}
    />
    <path
      d="M149.72 65.61a85.68 85.68 0 1 1-75 44.13 30.3 30.3 0 0 0 4.47 3.84A79.85 79.85 0 1 0 122.93 76a29.88 29.88 0 0 0-3.13-5 85.54 85.54 0 0 1 29.92-5.37"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);

export default SensoIconLogo;
