import { createSlice } from "@reduxjs/toolkit";

interface languageState {
  lang: "en" | "it";
}

const initialState: languageState = {
  lang: "it",
};

const languageSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleLanguage: (state, { payload }) => {
      state.lang = payload;
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
