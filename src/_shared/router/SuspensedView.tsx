import React, { PropsWithChildren, Suspense } from "react";
import { Flex } from "../styledComponents";
import { SimpleLoader } from "../UI";

export const SuspensedView: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Flex justifyContent={"center"} alignItems={"center"}>
          <SimpleLoader />
        </Flex>
      }
    >
      {children}
    </Suspense>
  );
};
