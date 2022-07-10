import React from 'react';

const ChevronLeft = ({ fill, ...props }: any) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.40002 19.328L13.817 12L6.40002 4.65602L8.68342 2.40002L18.4 12L8.68342 21.6L6.40002 19.328Z"
      fill={fill}
    />
  </svg>
);

export default ChevronLeft;
