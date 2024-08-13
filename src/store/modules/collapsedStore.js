import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const collapsedSlice = createSlice({
  name: "collapsed",
  initialState,
  reducers: {
    updateCollapsed: (state, actio) => {
      state.value = actio.payload;
    },
  },
});

export const { updateCollapsed } = collapsedSlice.actions;
export default collapsedSlice.reducer;
