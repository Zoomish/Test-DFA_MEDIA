import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./movieSlice/movieSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { movies: movieReducer },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
