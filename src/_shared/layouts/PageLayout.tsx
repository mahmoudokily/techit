/** @format */

import Footer from "../../footer/screen/Footer"
import Header from "../../header/screen/Header"
import { Flex } from "../UI"
import { PropsWithChildren } from "react"

type PageLayoutProps = {
  autoHideHeader?: boolean
  withHeader?: boolean
  withFooter?: boolean
  id?: string
}
export const PageLayout: React.FC<PropsWithChildren<PageLayoutProps>> = ({
  autoHideHeader = false,
  withFooter = true,
  withHeader = true,
  children,
  id
}) => {
  return (
    <Flex fullSize>
      {/* {withHeader && <Header autoHide={autoHideHeader} />} */}
      <Flex minHeight={"100vh"} flex={1}>
        {children}
      </Flex>
      {/* {withFooter && <Footer />} */}
    </Flex>
  )
}
