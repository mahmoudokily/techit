import Footer from "../../footer/screen/Footer";
import Header from "../../header/screen/Header";
import { Flex } from "../UI";
import { PropsWithChildren } from "react";

type PageLayoutProps = {
  autoHideHeader?: boolean;
  withHeader?: boolean;
  withFooter?: boolean;
};
export const PageLayout: React.FC<PropsWithChildren<PageLayoutProps>> = ({
  autoHideHeader = false,
  withFooter = true,
  withHeader = true,
  children,
}) => {
  return (
    <Flex fullSize>
      {withHeader && <Header autoHide={autoHideHeader} />}
      <Flex minHeight={"100vh"} flex={1} marginTop={80}>
        {children}
      </Flex>
      {withFooter && <Footer />}
    </Flex>
  );
};
