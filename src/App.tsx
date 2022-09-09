import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Auth from "./auth/screen/Auth";
import Footer from "./footer/screen/Footer";
import Header from "./header/screen/Header";
import Home from "./home/screen/Home";
import assets from "./_shared/assets";
import { AssetProvider } from "./_shared/hooks/assets";
import { useAppDispatch, useAppSelector } from "./_shared/redux/app/hooks";
import { toggle } from "./_shared/redux/feature/themeReducer";
import { FixedButton } from "./_shared/styledComponents";
import GlobalStyles from "./_shared/styledComponents/GlobalStyles";
import Svg from "./_shared/styledComponents/Svg";
import { themes } from "./_shared/styledComponents/themes";

function App() {
  const theme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window?.addEventListener("scroll", () => {
      console.log(window.scrollY);
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
    <BrowserRouter>
      <ThemeProvider theme={themes.data.light}>
        <AssetProvider assets={assets as any}>
          <GlobalStyles />
          {showButton && (
            <FixedButton onClick={scrollTo("hero")}>
              <Svg name="ChevronUp" />
            </FixedButton>
          )}
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <Footer />
        </AssetProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
