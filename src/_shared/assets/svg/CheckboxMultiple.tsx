import React from 'react';

const CheckboxMultiple = ({ fill, ...props }: any) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16 4L4 4L4 16L16 16L16 4ZM16 2C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4L18 16C18 17.11 17.1 18 16 18L4 18C2.89 18 2 17.11 2 16L2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2L16 2ZM20 8L22 8L22 20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22L7 22L7 20L20 20L20 8Z"
      fill={fill}
    />
    <path d="M8 11.67L13.59 6.08L15 7.5L8 14.5L4.91 11.41L6.32 10L8 11.67Z" fill={fill} />
  </svg>
);

export default CheckboxMultiple;
