import React from 'react';

const ChevronUp = ({ fill, ...props }: any) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19.328 17.6L12 10.183L4.65602 17.6L2.40002 15.3166L12 5.59998L21.6 15.3166L19.328 17.6Z" fill={fill} />
  </svg>
);

export default ChevronUp;
