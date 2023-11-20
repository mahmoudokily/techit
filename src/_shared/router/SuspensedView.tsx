import React, { PropsWithChildren, Suspense } from "react";
import { Center, Flex, SimpleLoader } from "../UI";

export const SuspensedView: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Flex
          height={"100vh"}
          fullSize
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Center>
            <SimpleLoader />
          </Center>
        </Flex>
      }
    >
      {children}
    </Suspense>
  );
};
