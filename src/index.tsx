import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { setToLS } from "./_shared/utils/func/storage";
import { themes } from "./_shared/styledComponents/themes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const Index = () => {
  setToLS("all-themes", themes);
  return <App />;
};

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
