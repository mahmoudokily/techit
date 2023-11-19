import React from "react";
import { Absolute } from "./Absolute";
import { Flex } from "./Flex";

type VerticalScrollContainerProps = React.ComponentPropsWithRef<typeof Flex>;

const VerticalScrollContainer: React.FC<VerticalScrollContainerProps> = ({
  children,
  ref,
  ...rest
}) => {
  return (
    <Flex height="100%" width="100%" flex={1} position="relative" >
      <Absolute
        flex={1}
        height="100%"
        display="flex"
        flexDirection="column"
        top="0"
        right="0"
        left="0"
        bottom="0"
        overflow="auto"
        {...rest}
      >
        {children}
      </Absolute>
    </Flex>
  );
};
export default VerticalScrollContainer;
