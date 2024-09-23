import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./movieSlice/movieSlice";
import { searchReducer } from "./seachSlice/searchSlice";
import { filterReducer } from "./filterSlice/filterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      movies: movieReducer,
      search: searchReducer,
      filter: filterReducer,
    },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
