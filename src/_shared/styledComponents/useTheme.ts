import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { getFromLS, setToLS } from "../utils/func/storage";

export const useTheme = () => {
  const themes = getFromLS("all-themes");
  const [theme, setTheme] = useState(themes.data.seaWave);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = useCallback((mode: any) => {
    setToLS("theme", mode);
    setTheme(mode);
  }, []);

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, "font"));
    return allFonts;
  };

  useEffect(() => {
    const localTheme = getFromLS("theme");

    console.log(localTheme);
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
    setThemeLoaded(true);
  }, [themes.data.light]);

  return { theme, themeLoaded, setMode, getFonts };
};
