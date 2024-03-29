/** @format */

import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./_shared/redux/app/store"
import { AppRoutes } from "./_shared/router/AppRoutes"
import { BrowserRouter } from "react-router-dom"
import { I18nextProvider } from "react-i18next"
import i18n from "./_shared/i18n/i18n"
import { ThemeProvider } from "styled-components"
import { AssetProvider } from "./_shared/hooks/assets"
import GlobalStyles from "./_shared/styledComponents/GlobalStyles"
import theme from "./_shared/UI/theme"
import assets from "./_shared/assets"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import UserService from "./_shared/utils/services/AuthService"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
let persistor = persistStore(store)
UserService.initKeycloak(() =>
  root.render(
    <ThemeProvider theme={theme}>
      <AssetProvider assets={assets as any}>
        <GlobalStyles />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <I18nextProvider i18n={i18n}>
              <React.Suspense fallback="Loading...">
                <AppRoutes />
              </React.Suspense>
            </I18nextProvider>
          </PersistGate>
        </Provider>
      </AssetProvider>
    </ThemeProvider>
  )
)
