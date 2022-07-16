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
import GlobalStyles from "./_shared/styledComponents/GlobalStyles";
import { themes } from "./_shared/styledComponents/themes";

function App() {
  const theme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes.data.light}>
        <AssetProvider assets={assets as any}>
          <GlobalStyles />
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
