import React from 'react';

const EmailOpen = ({ fill, ...props }: any) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21.03 6.29001L12 0.640015L2.97 6.29001C2.39 6.64001 2 7.27001 2 8.00001V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8.00001C22 7.27001 21.61 6.64001 21.03 6.29001ZM20 18H4V10L12 15L20 10V18ZM12 13L4 8.00001L12 3.00001L20 8.00001L12 13Z"
      fill={fill}
    />
  </svg>
);

export default EmailOpen;
