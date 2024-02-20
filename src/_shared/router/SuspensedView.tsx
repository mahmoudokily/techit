import React, { PropsWithChildren, Suspense } from "react"
import { Center, Flex, SimpleLoader } from "../UI"
import Loader from "../assets/svg/Loader"

export const SuspensedView: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Center>
          <Loader width={100} />
        </Center>
      }
    >
      {children}
    </Suspense>
  )
}
