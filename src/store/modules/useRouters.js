import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const useRoutersSlice = createSlice({
  name: "useRouters",
  initialState,
  reducers: {
    initRouters: (state, actio) => {
      state.value = actio.payload;
    },
  },
});

export const { initRouters } = useRoutersSlice.actions;
export default useRoutersSlice.reducer;
