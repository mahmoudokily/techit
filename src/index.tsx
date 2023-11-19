import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./_shared/redux/app/store";
import { ThemeProvider } from "styled-components";
import { themes } from "./_shared/styledComponents/themes";
import { AppRoutes } from "./_shared/router/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { AssetProvider } from "./_shared/hooks/assets";
import GlobalStyles from "./_shared/styledComponents/GlobalStyles";
import assets from "./_shared/assets";
import theme from "./_shared/UI/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AssetProvider assets={assets as any}>
          <GlobalStyles />

          <AppRoutes />
        </AssetProvider>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
