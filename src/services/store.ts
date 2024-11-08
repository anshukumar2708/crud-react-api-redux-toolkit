import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slicess/login-slice";

export const store = configureStore({
  reducer: {
    profile: loginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
