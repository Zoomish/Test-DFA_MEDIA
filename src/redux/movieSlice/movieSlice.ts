import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IMovieState {
  movie: object;
}

const initialState: IMovieState = {
  movie: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieState: (state, action: PayloadAction<object>) => {
      state.movie = action.payload;
    },
  },
});

export const { setMovieState } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
