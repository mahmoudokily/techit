import React, { createContext } from "react";
import { AssetDomains } from "./assets";

type Props = {
  assets?: AssetDomains;
  endpoint?: string;
  children: any;
};

const AssetContext = createContext<AssetDomains>({
  icons: {},
  images: {},
  svg: {},
});

const { Provider } = AssetContext;

const AssetProvider: React.FC<Props> = ({ assets, children }) => {
  return <Provider value={assets as AssetDomains}>{children}</Provider>;
};

export { AssetContext, AssetProvider };
