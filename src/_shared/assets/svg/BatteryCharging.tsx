import React from 'react';

const BatteryCharging = ({ fill, ...props }: any) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.95 20H7.95L8 6H16L15.95 20ZM16.67 4H15V2H9V4H7.33C6.97726 4 6.63897 4.14012 6.38955 4.38955C6.14012 4.63897 6 4.97726 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.4 22 18 21.4 18 20.67V5.33C18 4.97726 17.8599 4.63897 17.6105 4.38955C17.361 4.14012 17.0227 4 16.67 4Z"
      fill={fill}
    />
    <path d="M15 11.6667H12.75V7L9 13.6667H11.25V19L15 11.6667Z" fill={fill} />
  </svg>
);

export default BatteryCharging;
