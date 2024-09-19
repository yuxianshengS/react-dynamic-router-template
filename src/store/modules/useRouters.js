import { createSlice } from "@reduxjs/toolkit";
// import { formatterRouters } from "@/utils/formatterRouter";
import { dynamicRouter } from "@/router/routers";

const initialState = {
  value: [],
};

const useRoutersSlice = createSlice({
  name: "useRouters",
  initialState,
  reducers: {
    initRouters: (state, actio) => {
      // state.value = actio.payload;
      state.value = dynamicRouter;
    },
  },
});

export const { initRouters } = useRoutersSlice.actions;
export default useRoutersSlice.reducer;
