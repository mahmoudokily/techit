export const themes = {
  data: {
    light: {
      id: "T_001",
      name: "Light",
      colors: {
        white: "#ffffff",

        Typography: {
          primary: "#0c0c0d",
          secondary: "#737373",
          disabled: "rgba(255, 255, 255,0.5)",
        },
        buttons: {
          primary: "#0c0c0d",
          active: "#fff",
          hover: "rgba(255, 255, 255,0.8)",
          selected: "rgba(255, 255, 255,0.16)",
          disabled: "rgba(255, 255, 255,0.3)",
          disabledBackground: "rgba(255, 255, 255,0.12)",
        },
        primary: {
          main: "#0d47a1",
        },
        secondary: {
          main: "rgba(0, 0, 0, 0.87)",
        },
        background: {
          paper: "#ffffff",
          default: "#ffffff",
          secondary: "#212121",
          primary: "#212121",
          gray10: "#f9f9fa",
          gray30: "#d7d7db",
        },
        divider: "rgba(255, 255, 255, 0.12)",
        a: {
          color: "#121212!important",
        },
        shape: {
          borderColor: "rgba(255, 255, 255,0.3)",
        },
      },
    },
    dark: {
      id: "T_007",
      name: "Sea Wave",
      colors: {
        white: "#ffffff",
        Typography: {
          primary: "#ffffff",
          secondary: "#f9f9fa",
          disabled: "rgba(0, 0, 0, 0.38)",
        },

        buttons: {
          primary: "#ffffff",
          active: "rgba(0, 0, 0, 0.524)",
          hover: "rgba(0, 0, 0, 0.04)",
          selected: "rgba(0, 0, 0, 0.08)",
          disabled: "rgba(0, 0, 0, 0.26)",
          disabledBackground: "rgba(0, 0, 0, 0.12)",
        },
        primary: {
          main: "#0d47a1",
          blue40: "#45a1ff",
          blue50: "#0a84ff",
          blue60: "#0060df",
          blue70: "#003eaa",
          blue80: "#002275",
          blue90: "#000f40",
        },
        secondary: {
          main: "#26a27b",
        },
        background: {
          paper: "#4a4a4f",
          default: "#38383d",
          grey60: "#0c0c0d",
          grey70: "#38383d",
          grey90: "#38383d",
        },
        divider: "rgba(0, 0, 0, 0.1)",
        a: {
          color: "#fff!important",
        },
        Link: {
          color: "#fff!important",
        },
      },
    },
  },
};

// get all themes and save it in local storage
// check if exist one theme in local storage if no set the light one
//get te theme from local storage and set it as selected theme
// create button to change the current theme
