import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeObj: {
    light: {
      colorPrimary: "#1d72b8",
      colorBgBase: "#ffffff",
      colorTextBase: "#000000",
      colorBgContainer: "#f0f0f0",
      colorBorder: "#d9d9d9",
    },
    dark: {
      colorPrimary: "#1d72b8",
      colorBgBase: "#141414",
      colorTextBase: "#e0e0e0",
      colorBgContainer: "#1f1f1f",
      colorBorder: "#434343",
    },
  },

  themeType: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateThemeType: (state, actio) => {
      state.themeType = actio.payload;
    },
  },
});

export const { updateThemeType } = themeSlice.actions;
export default themeSlice.reducer;
