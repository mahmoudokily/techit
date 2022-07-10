import React from 'react';

const ChevronDown = ({ fill, ...props }: any) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.67198 6.40002L12 13.817L19.344 6.40002L21.6 8.68342L12 18.4L2.39998 8.68342L4.67198 6.40002Z"
      fill={fill}
    />
  </svg>
);

export default ChevronDown;
