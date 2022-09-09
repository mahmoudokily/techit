import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Auth from "./auth/screen/Auth";
import Footer from "./footer/screen/Footer";
import Header from "./header/screen/Header";
import Home from "./home/screen/Home";
import assets from "./_shared/assets";
import { AssetProvider } from "./_shared/hooks/assets";
import { useAppDispatch } from "./_shared/redux/app/hooks";
import GlobalStyles from "./_shared/styledComponents/GlobalStyles";
import { theme } from "./_shared/styledComponents/themes";
import { MoButton, MoInput } from "./_shared/styledComponents/ui-components";
function App() {
  const dispatch = useAppDispatch();

  return (
    <BrowserRouter>
      <AssetProvider assets={assets as any}>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />{" "}
          </Routes>
          <Footer />
          <GlobalStyles />
          {/* <div
            style={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              margin: "20px auto",
              padding: "20px",
            }}
          >
            <h2>Button</h2>

            {[
              "primary",
              "secondary",
              "danger",
              "light",
              "dark",
              "warning",
              "info",
            ].map((i) => {
              return (
                <div>
                  <MoButton buttonSize="small" m={10} variant={i as any}>
                    {i}
                  </MoButton>
                  <MoInput placeholder={i as any} variant={i as any} />
                </div>
              );
            })}
          </div> */}
        </ThemeProvider>
      </AssetProvider>
    </BrowserRouter>
  );
}

export default App;
