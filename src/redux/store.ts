import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice/authSlice";
import { movieReducer } from "./movieSlice/movieSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { auth: authReducer, movie: movieReducer },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
