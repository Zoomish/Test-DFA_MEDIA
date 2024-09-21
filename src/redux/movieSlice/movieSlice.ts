import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IMovieState {
  movie: object;
  movies: object[];
}

const initialState: IMovieState = {
  movie: {},
  movies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieState: (state, action: PayloadAction<object>) => {
      state.movie = action.payload;
    },
    setMoviesState: (state, action: PayloadAction<Array<object>>) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovieState } = movieSlice.actions;
export const { setMoviesState } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
