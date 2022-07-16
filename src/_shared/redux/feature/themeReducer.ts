import { createSlice } from "@reduxjs/toolkit";

interface themeState {
  currentTheme: "LIGHT" | "DARK";
}

const initialState: themeState = {
  currentTheme: "LIGHT",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle(state) {
      const toggle = state.currentTheme === "DARK" ? "LIGHT" : "DARK";
      state.currentTheme = toggle;
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
