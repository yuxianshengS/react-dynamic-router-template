import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modeStatus: true,
  collapsed: false,
};

const useStore = createSlice({
  name: "useStore",
  initialState,
  reducers: {
    updateModeStatus: (state, actio) => {
      state.modeStatus = actio.payload;
    },

    updateCollapsed: (state, actio) => {
      state.collapsed = actio.payload;
    },
  },
});

export const { updateCollapsed, updateModeStatus } = useStore.actions;
export default useStore.reducer;
