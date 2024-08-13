import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/themeStore";
import collapsedReducer from "./modules/collapsedStore";
import useRoutersReducer from "./modules/useRouters";

const store = configureStore({
  reducer: {
    theme: counterReducer,
    collapsed: collapsedReducer,
    useRouters: useRoutersReducer,
  },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
export default store;
