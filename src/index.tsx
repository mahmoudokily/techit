import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./_shared/redux/app/store";
import { AppRoutes } from "./_shared/router/AppRoutes";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <I18nextProvider i18n={i18n}> */}
        <React.Suspense fallback="Loading...">
          <AppRoutes />
        </React.Suspense>
        {/* </I18nextProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
