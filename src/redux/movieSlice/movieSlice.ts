import { TMovieShort } from "@/utils/typesFromBackend";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IMovieState {
  movie: TMovieShort | null;
  movies: TMovieShort[];
}

const initialState: IMovieState = {
  movie: null,
  movies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieState: (state, action: PayloadAction<TMovieShort>) => {
      state.movie = action.payload;
    },
    setMoviesState: (state, action: PayloadAction<Array<TMovieShort>>) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovieState } = movieSlice.actions;
export const { setMoviesState } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
