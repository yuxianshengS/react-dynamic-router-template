import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/themeStore";
import useStore from "./modules/useStore";
import useRoutersReducer from "./modules/useRouters";

const store = configureStore({
  reducer: {
    theme: counterReducer,
    useStore: useStore,
    useRouters: useRoutersReducer,
  },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
export default store;
