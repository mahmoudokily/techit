import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./_shared/UI/theme";
import assets from "./_shared/assets";
import { AssetProvider } from "./_shared/hooks/assets";
import { useAppDispatch } from "./_shared/redux/app/hooks";
import Svg from "./_shared/styledComponents/Svg";
import Footer from "./footer/screen/Footer";
import Header from "./header/screen/Header";
import { FixedButton } from "./_shared/styledComponents";
import { Flex } from "./_shared/UI";

function App() {
  // const theme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();

  const [showButton, setShowButton] = useState(false);
  // test
  useEffect(() => {
    window?.addEventListener("scroll", () => {
      if (window.scrollY > 800) setShowButton(true);
      else setShowButton(false);
    });
    return () => {
      window.removeEventListener("scroll", () => console.log(window.scrollY));
    };
  }, []);

  const scrollTo = (id: string) => () => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Flex fullSize height={"100vh"}>
      {showButton && (
        <FixedButton onClick={scrollTo("hero")}>
          <Svg name="ChevronUp" />
        </FixedButton>
      )}
      <Header />
      <Outlet />
      <Footer />
    </Flex>
  );
}

export default App;
